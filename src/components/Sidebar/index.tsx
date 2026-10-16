import React, {
  Children,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { flushSync } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { IAvatarProps } from '@components/Avatar/types';
import { ELocaleMapping } from '@components/declaration';
import { LogoSvgIcon } from '@components/Icon/IconsInternal';
import { Avatar, Button, ClickAwayListener, Icon, Scrollbar, Typography } from '@components/index';
import clsx from 'clsx';

import { IComponentWithType, IMenuItemProps, ISidebarProps, ISubmenuItemProps } from './types';

import styles from './Sidebar.module.scss';

import { AdaptiveMenu, CollapseButton, MenuItem, Submenu, SubmenuItem, UserControl } from './components';
import { COLLAPSE_TEXTS } from './constants';
import { SidebarProperties } from './context';
import { ESidebarOrientationMapping, ESidebarPositionMapping, ESidebarVariantMapping } from './enums';
import { useIsAdaptive } from './hooks';

/**
 * Компонент Sidebar предоставляет интерфейс бокового меню с возможностью настройки элементов, ориентации и поведения.
 *
 * @param {object} props - Свойства компонента Sidebar.
 * @param {`${ESidebarVariantMapping}`} [props.variant=ESidebarVariantMapping.default] - Вариант бокового меню.
 * @param {`${ESidebarOrientationMapping}`} [props.orientation=ESidebarOrientationMapping.vertical] - Ориентация бокового меню.
 * @param {boolean} [props.allowFavorites=false] - Разрешает ли боковое меню избранное.
 * @param {boolean} [props.isLoggedIn] - Флаг, показывающий, вошел ли пользователь в систему.
 * @param {string} [props.systemName] - Системное имя для отображения в меню.
 * @param {string} [props.userName] - Имя пользователя.
 * @param {string} [props.userSurname] - Фамилия пользователя.
 * @param {ReactNode} props.children - Дочерние элементы, такие как аватар пользователя или элементы меню.
 * @param {() => void} props.onOpenUser - Функция, вызываемая при открытии профиля пользователя.
 * @param {() => void} [props.onLogout] - Функция, вызываемая при выходе из аккаунта.
 * @param {() => void} [props.onLogin] - Функция, вызываемая при входе в аккаунт.
 * @param {() => void} [props.onClickLogo] - Функция, вызываемая при клике на логотип.
 * @param {string} props.currentPath - Текущий путь (URL) для определения активного элемента.
 * @param {boolean} [props.defaultMenuOpen=false] - Флаг, указывающий, должно ли боковое меню быть развернуто по умолчанию.
 * @param {boolean} [props.overlay=false] - Флаг отображения оверлея при открытом подменю.
 * @param {ReactNode} [props.logo] - Кастомный логотип. Если не передан, используется стандартный.
 * @param {boolean} [props.isShowUserControl=true] - Флаг для отображения управления пользователем.
 * @param {boolean} [props.manualExpansion=false] - Управление по кнопке; при keyboardNavigation доступно закрытие по Esc.
 * @param {boolean} [props.keyboardNavigation=false] - Навигация стрелками, активация по Enter и закрытие по Esc.
 * @param {string} [props.className] - Дополнительный класс для стилизации компонента.
 * @param {React.CSSProperties} [props.style] - Инлайн-стили для компонента.
 * @returns {JSX.Element} - Компонент Sidebar.
 */

const Sidebar: FC<ISidebarProps> &
  Record<'Avatar', FC<IAvatarProps>> &
  Record<'MenuItem', FC<IMenuItemProps>> &
  Record<'SubmenuItem', FC<ISubmenuItemProps>> = ({
  locale = ELocaleMapping.ru,
  variant = ESidebarVariantMapping.default,
  orientation = ESidebarOrientationMapping.vertical,
  allowFavorites = false,
  isLoggedIn,
  systemName,
  userName,
  userSurname,
  children,
  onOpenUser,
  onLogout,
  onLogin,
  onClickLogo,
  onChangeFavorites = () => {},
  currentPath,
  defaultMenuOpen = false,
  overlay = false,
  logo,
  manualExpansion = false,
  keyboardNavigation = false,
  isShowUserControl = true,
  className,
  style
}) => {
  const isBurger = variant === ESidebarVariantMapping.burger;
  const isVertical = orientation === ESidebarOrientationMapping.vertical;
  const isAdaptive = useIsAdaptive();

  const [isExpanded, setExpanded] = useState(() => {
    if (defaultMenuOpen) return true;
    if (isAdaptive) return false;
    return !isVertical && !isBurger;
  });
  const prevIsAdaptiveRef = useRef(isAdaptive);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [submenuItems, setSubmenuItems] = useState<ReactNode | ReactNode[]>(null);
  const [isScrollingDueToClick, setIsScrollingDueToClick] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const collapseButtonRef = useRef<HTMLButtonElement>(null);
  const adaptiveRootRef = useRef<HTMLDivElement>(null);
  const keyboardRootRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const pendingFocus = useRef<'expandedTrigger' | 'trigger' | 'parent' | null>(null);
  const submenuParentRef = useRef<HTMLElement | null>(null);
  const itemSelector = '[data-ui-sidebar-menu-item], [data-ui-sidebar-submenu-item]';
  const triggerSelector = '[data-ui-sidebar-collapse-button], [data-ui-sidebar-burger]';

  const availableItems = (root: HTMLElement, selector = itemSelector) =>
    Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(item => {
      if (item.getAttribute('aria-disabled') === 'true' || item.closest('[hidden], [inert], [aria-hidden="true"]'))
        return false;
      for (let node: HTMLElement | null = item; node && node !== root; node = node.parentElement) {
        const style = window.getComputedStyle(node);
        if (style.display === 'none' || style.visibility === 'hidden') return false;
      }
      return true;
    });

  const focusItem = (item?: HTMLElement) => {
    item?.focus();
    item?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
  };

  useLayoutEffect(() => {
    if (!keyboardNavigation || !keyboardRootRef.current) return;
    // Menu items are the focus targets; links in custom content must not add a second Tab stop.
    const links = Array.from(keyboardRootRef.current.querySelectorAll<HTMLAnchorElement>('a[href]'))
      .filter(link => link.closest(itemSelector))
      .map(link => ({ link, tabIndex: link.getAttribute('tabindex') }));
    links.forEach(({ link }) => link.setAttribute('tabindex', '-1'));
    return () => {
      links.forEach(({ link, tabIndex }) => {
        if (tabIndex === null) link.removeAttribute('tabindex');
        else link.setAttribute('tabindex', tabIndex);
      });
    };
  });

  useLayoutEffect(() => {
    if (!keyboardNavigation || !pendingFocus.current) return;
    if (pendingFocus.current === 'parent' && !activeItem && isExpanded) {
      focusItem(submenuParentRef.current || undefined);
      pendingFocus.current = null;
    }
    if (pendingFocus.current === 'trigger' && !isExpanded) {
      focusItem(burgerRef.current || collapseButtonRef.current || undefined);
      pendingFocus.current = null;
    } else if (pendingFocus.current === 'expandedTrigger' && isExpanded && keyboardRootRef.current) {
      focusItem(availableItems(keyboardRootRef.current, triggerSelector)[0]);
      pendingFocus.current = null;
    }
  });

  const withKeyboardNavigation = (content: ReactElement) => {
    if (!keyboardNavigation) return content;
    return (
      <div
        ref={keyboardRootRef}
        className={styles.keyboardNavigation}
        onKeyDown={event => {
          if (event.defaultPrevented) return;
          const eventTarget = event.target as HTMLElement;
          if (eventTarget.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
          const target =
            event.key.startsWith('Arrow') && eventTarget.closest('a[href]')
              ? eventTarget.closest<HTMLElement>(itemSelector) || eventTarget
              : eventTarget;
          if (event.key === 'Escape' && isExpanded) {
            event.preventDefault();
            pendingFocus.current = 'trigger';
            collapseSidebar();
            return;
          }
          // Native controls and nested interactive content retain their own keyboard behavior.
          const isTrigger = target.matches(triggerSelector);
          const isFavorites = target.matches('[data-ui-sidebar-favorites]');
          if (!target.matches(itemSelector) && !isTrigger && !isFavorites) return;
          const inSubmenu = isFavorites || target.matches('[data-ui-sidebar-submenu-item]');
          const vertical = inSubmenu || isAdaptive || isVertical;
          const openKey = vertical ? 'ArrowRight' : 'ArrowDown';
          const closeKey = vertical ? 'ArrowLeft' : 'ArrowUp';
          if (!isTrigger && event.key === closeKey) {
            event.preventDefault();
            if (target.getAttribute('aria-expanded') === 'true') {
              flushSync(() => target.click());
              focusItem(target);
            } else if (inSubmenu) {
              const group = target.closest<HTMLElement>('[data-ui-sidebar-submenu-item-group]');
              const parentGroup = group?.parentElement?.closest<HTMLElement>('[data-ui-sidebar-submenu-item-group]');
              const parent =
                parentGroup?.querySelector<HTMLElement>('[data-ui-sidebar-submenu-item]') ||
                availableItems(event.currentTarget, '[data-ui-sidebar-menu-item]').find(
                  item => item.title === activeItem
                );
              if (parent?.getAttribute('aria-expanded') === 'true') {
                flushSync(() => parent.click());
              }
              focusItem(parent);
            }
            return;
          }
          if (!isTrigger && !isFavorites && (event.key === 'Enter' || event.key === openKey)) {
            const isArrow = event.key === openKey;
            if (isArrow && !target.hasAttribute('aria-expanded')) return;
            event.preventDefault();
            const wasExpanded = target.getAttribute('aria-expanded') === 'true';
            if (!isArrow || !wasExpanded) flushSync(() => target.click());
            if (target.getAttribute('aria-expanded') === 'true' && (isArrow || !wasExpanded)) {
              const submenu = target.matches('[data-ui-sidebar-menu-item]')
                ? event.currentTarget.querySelector<HTMLElement>('[data-ui-sidebar-submenu]')
                : target.closest<HTMLElement>('[data-ui-sidebar-submenu-item-group]');
              if (submenu) {
                focusItem(
                  availableItems(submenu, '[data-ui-sidebar-submenu-item]').find(item => item !== target) ||
                    availableItems(submenu, '[data-ui-sidebar-favorites]')[0]
                );
              }
            }
            return;
          }
          const previous = vertical ? 'ArrowUp' : 'ArrowLeft';
          const next = vertical ? 'ArrowDown' : 'ArrowRight';
          if (event.key !== previous && event.key !== next) return;
          event.preventDefault();
          const root = inSubmenu ? target.closest<HTMLElement>('[data-ui-sidebar-submenu]') : event.currentTarget;
          if (!root) return;
          const selector = inSubmenu
            ? '[data-ui-sidebar-favorites], [data-ui-sidebar-submenu-item]'
            : `[data-ui-sidebar-menu-item], ${triggerSelector}`;
          const items = availableItems(root, selector);
          const index = items.indexOf(target);
          if (index < 0) return;
          focusItem(items[Math.max(0, Math.min(items.length - 1, index + (event.key === next ? 1 : -1)))]);
        }}
      >
        {content}
      </div>
    );
  };

  // Только на смене режима, иначе эффект затрёт defaultMenuOpen при монтировании
  useEffect(() => {
    if (prevIsAdaptiveRef.current === isAdaptive) return;
    prevIsAdaptiveRef.current = isAdaptive;
    setExpanded(isAdaptive ? false : !isVertical && !isBurger);
    setActiveItem(null);
    setSubmenuItems(null);
  }, [isAdaptive, isVertical, isBurger]);

  useEffect(() => {
    if (!isAdaptive || !isExpanded) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isAdaptive, isExpanded]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollRef.current) {
        event.preventDefault();
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };

    if (orientation !== ESidebarOrientationMapping.vertical) {
      scrollRef.current?.addEventListener('wheel', handleWheel);
    }

    return () => {
      scrollRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, [orientation]);
  useEffect(() => {
    const handleScroll = () => {
      if (orientation === ESidebarOrientationMapping.horizontal && activeItem !== null && !isScrollingDueToClick) {
        setActiveItem(null);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeItem, orientation, isScrollingDueToClick]);

  const filterChildrenByComponentType = (children: ReactNode, componentType: string): ReactElement[] => {
    return Children.toArray(children).filter(
      child =>
        isValidElement(child) &&
        typeof child.type !== 'undefined' &&
        'componentType' in (child.type as IComponentWithType) &&
        (child.type as IComponentWithType).componentType === componentType
    ) as ReactElement[];
  };

  const closeSubmenu = () => {
    if (
      keyboardNavigation &&
      pendingFocus.current !== 'trigger' &&
      document.activeElement?.closest('[data-ui-sidebar-submenu]') &&
      keyboardRootRef.current?.contains(document.activeElement)
    ) {
      submenuParentRef.current =
        Array.from(keyboardRootRef.current.querySelectorAll<HTMLElement>('[data-ui-sidebar-menu-item]')).find(
          item => item.title === activeItem
        ) || null;
      pendingFocus.current = 'parent';
    }
    setActiveItem(null);
  };

  const collapseSidebar = () => {
    if (keyboardNavigation && keyboardRootRef.current?.contains(document.activeElement)) {
      pendingFocus.current = 'trigger';
    }
    closeSubmenu();
    setExpanded(false);
  };

  const handleToggleExpansion = () => {
    if (keyboardNavigation && isExpanded) {
      collapseSidebar();
      return;
    }
    if (keyboardNavigation && !isExpanded) pendingFocus.current = 'expandedTrigger';
    setActiveItem(null);
    setExpanded(val => !val);
  };

  const menuItems = useMemo(() => filterChildrenByComponentType(children, 'MenuItem'), [children]);
  const avatar = useMemo(() => filterChildrenByComponentType(children, 'Avatar'), [children]);

  const topSectionItems = useMemo(
    () =>
      menuItems.filter(
        child =>
          isValidElement(child) &&
          (
            child.props as {
              position: `${ESidebarPositionMapping}`;
            }
          ).position === ESidebarPositionMapping.top
      ),
    [menuItems]
  );

  const bottomSectionItems = useMemo(
    () =>
      menuItems.filter(
        child =>
          isValidElement(child) &&
          (child.props as { position: `${ESidebarPositionMapping}` }).position === ESidebarPositionMapping.bottom
      ),
    [menuItems]
  );

  const actionIconName = isLoggedIn ? 'IconExitOutlined24' : 'IconEnterOutlined24';
  const actionTitle = isLoggedIn ? 'Выйти' : 'Войти';
  const handleAction = isLoggedIn && onLogout ? onLogout : onLogin;

  const renderUserControl = () => {
    if (!isShowUserControl) return null;

    return (
      <UserControl
        isExpanded={isExpanded}
        isVertical={isAdaptive || isVertical}
        isLoggedIn={isLoggedIn}
        userName={userName}
        userSurname={userSurname}
        onOpenUser={onOpenUser}
        onLogin={onLogin}
        onLogout={onLogout}
      >
        {avatar}
      </UserControl>
    );
  };

  const burgerTrigger = (
    <button
      type="button"
      ref={burgerRef}
      data-ui-sidebar-burger
      className={clsx(styles.burger, className)}
      style={style}
      onClick={() => {
        if (keyboardNavigation) pendingFocus.current = 'expandedTrigger';
        setExpanded(true);
      }}
      aria-expanded={false}
      aria-label={COLLAPSE_TEXTS[locale].expand}
      title={COLLAPSE_TEXTS[locale].expand}
    >
      <Icon name="IconMenuBurgerOutlined32" containerSize={32} htmlColor="var(--unique-white)" />
    </button>
  );

  if (isAdaptive)
    return withKeyboardNavigation(
      <SidebarProperties.Provider
        value={{
          isExpanded,
          activeItem,
          allowFavorites,
          orientation: ESidebarOrientationMapping.vertical,
          setSubmenuItems,
          setActiveItem,
          isScrollingDueToClick,
          setIsScrollingDueToClick,
          currentPath,
          collapseSidebar,
          onChangeFavorites,
          closeSubmenu,
          manualExpansion,
          keyboardNavigation
        }}
      >
        {!isExpanded && burgerTrigger}
        <CSSTransition
          in={isExpanded}
          nodeRef={adaptiveRootRef}
          timeout={300}
          classNames={{
            enter: styles['adaptiveRoot-enter'],
            enterActive: styles['adaptiveRoot-enter-active'],
            exit: styles['adaptiveRoot-exit'],
            exitActive: styles['adaptiveRoot-exit-active']
          }}
          unmountOnExit
        >
          <div
            ref={adaptiveRootRef}
            className={styles.adaptiveRoot}
            inert={keyboardNavigation && !isExpanded ? true : undefined}
          >
            <div className={styles.adaptiveScrim} data-ui-sidebar-adaptive-scrim />
            <ClickAwayListener
              onClickAway={collapseSidebar}
              className={clsx(styles.adaptiveContent, className)}
              style={style}
            >
              <AdaptiveMenu
                logo={logo}
                systemName={systemName}
                locale={locale}
                isLoggedIn={isLoggedIn}
                onLogin={onLogin}
                onLogout={onLogout}
                onClickLogo={onClickLogo}
                userControl={renderUserControl()}
                topSectionItems={topSectionItems}
                bottomSectionItems={bottomSectionItems}
              />

              {overlay && Boolean(activeItem) && (
                <div className={styles.overlay} onClick={closeSubmenu} data-ui-sidebar-overlay />
              )}

              <Submenu
                title={activeItem ?? ''}
                isOpen={Boolean(activeItem)}
                orientation={ESidebarOrientationMapping.vertical}
              >
                {submenuItems}
              </Submenu>
            </ClickAwayListener>
          </div>
        </CSSTransition>
      </SidebarProperties.Provider>
    );

  if ((isBurger || (keyboardNavigation && !isVertical)) && !isExpanded) return withKeyboardNavigation(burgerTrigger);

  return withKeyboardNavigation(
    <SidebarProperties.Provider
      value={{
        isExpanded,
        activeItem,
        allowFavorites,
        orientation,
        setSubmenuItems,
        setActiveItem,
        isScrollingDueToClick,
        setIsScrollingDueToClick,
        currentPath,
        collapseSidebar,
        closeSubmenu,
        onChangeFavorites,
        manualExpansion,
        keyboardNavigation
      }}
    >
      <ClickAwayListener
        // TODO(DESIGNSYS-2536): дефолтное сворачивание по клику вне меню — обкатать на проектах.
        // Известный риск: при orientation="horizontal" + variant="default" кнопки возврата на экране нет
        // (обе CollapseButton под isVertical), после сворачивания панель остаётся 64px.
        // Если до 01.01.2027 замечаний не придёт — убрать TODO и оставить поведение как есть.
        onClickAway={() => {
          if (manualExpansion) {
            closeSubmenu();
            return;
          }
          collapseSidebar();
        }}
        excludeRef={collapseButtonRef}
        className={clsx(
          styles.root,
          styles[`root-${orientation}`],
          {
            [styles[`root-${orientation}-expanded`]]: isExpanded
          },
          className
        )}
        style={style}
      >
        <div className={clsx(styles.menu, styles[`menu-${orientation}`])}>
          {!isVertical && (isBurger || keyboardNavigation) && (
            <button
              type="button"
              data-ui-sidebar-burger
              className={clsx(styles.burger, styles['burger-expanded'])}
              onClick={collapseSidebar}
              aria-label={COLLAPSE_TEXTS[locale].collapse}
              aria-expanded={true}
            >
              <Icon name="IconMenuBurgerOutlined32" containerSize={32} htmlColor="var(--unique-white)" />
            </button>
          )}
          <div className={styles.head}>
            {isVertical && isBurger && (
              <CollapseButton
                ref={collapseButtonRef}
                isExpanded={isExpanded}
                onClick={handleToggleExpansion}
                locale={locale}
              />
            )}
            <div className={clsx(styles.top, { [styles['top-expanded']]: isExpanded })}>
              <div className={styles['top-left']}>
                <div
                  className={clsx(styles.logo, {
                    [styles.clickable]: onClickLogo
                  })}
                  onClick={onClickLogo}
                  data-ui-sidebar-logo
                >
                  {logo || <LogoSvgIcon />}
                </div>
                {isExpanded && systemName && (
                  <Typography variant="Body1-Medium" color="var(--unique-white)" className={styles.company}>
                    {systemName}
                  </Typography>
                )}
              </div>
              {isExpanded && isVertical && handleAction && (
                <Button
                  type="button"
                  size="s"
                  color="ghost"
                  variant="secondary"
                  className={clsx(styles.head, styles.auth)}
                  onClick={handleAction}
                  iconButton={<Icon name={actionIconName} htmlColor="var(--unique-white)" />}
                  title={actionTitle}
                  data-ui-sidebar-action-button
                />
              )}
            </div>
          </div>

          {isVertical && renderUserControl()}

          <Scrollbar className={clsx(styles.body, styles[`body-${orientation}`], styles.scrollbar)} ref={scrollRef}>
            {isVertical ? (
              <>
                <div className={styles.topSection} data-ui-sidebar-top-section>
                  {topSectionItems}
                </div>
                <div className={styles.bottomSection} data-ui-sidebar-bottom-section>
                  {bottomSectionItems}
                </div>
              </>
            ) : (
              menuItems
            )}
          </Scrollbar>

          {isVertical && !isBurger && (
            <CollapseButton
              ref={collapseButtonRef}
              isExpanded={isExpanded}
              onClick={handleToggleExpansion}
              locale={locale}
            />
          )}
        </div>

        {overlay && Boolean(activeItem) && (
          <div className={styles.overlay} onClick={closeSubmenu} data-ui-sidebar-overlay />
        )}

        <Submenu title={activeItem ?? ''} isOpen={Boolean(activeItem)} orientation={orientation}>
          {submenuItems}
        </Submenu>
      </ClickAwayListener>
    </SidebarProperties.Provider>
  );
};

Sidebar.Avatar = Avatar;
Sidebar.MenuItem = MenuItem;
Sidebar.SubmenuItem = SubmenuItem;

export default Sidebar;
