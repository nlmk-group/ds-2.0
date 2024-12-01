import React, {
  Children,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { IAvatarProps } from '@components/Avatar/types';
import { LogoSvgIcon } from '@components/Icon/IconsInternal';
import { Avatar, Button, ClickAwayListener, Icon, Scrollbar, Typography } from '@components/index';
import clsx from 'clsx';

import { IComponentWithType, IMenuItemProps, ISidebarProps, ISubmenuItemProps } from './types';

import styles from './Sidebar.module.scss';

import { CollapseButton, MenuItem, Submenu, SubmenuItem, UserControl } from './components';
import { SidebarProperties } from './context';
import { ESidebarOrientationMapping, ESidebarPositionMapping, ESidebarVariantMapping } from './enums';

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
 * @param {() => void} [props.onSearch] - Функция, вызываемая при поиске.
 * @param {() => void} [props.onClickLogo] - Функция, вызываемая при клике на логотип.
 * @param {string} props.currentPath - Текущий путь (URL) для определения активного элемента.
 * @param {boolean} [props.defaultMenuOpen=false] - Флаг, указывающий, должно ли боковое меню быть развернуто по умолчанию.
 * @param {boolean} [props.overlay=false] - Флаг отображения оверлея при открытом подменю.
 * @returns {JSX.Element} - Компонент Sidebar.
 */

const Sidebar: FC<ISidebarProps> &
  Record<'Avatar', FC<IAvatarProps>> &
  Record<'MenuItem', FC<IMenuItemProps>> &
  Record<'SubmenuItem', FC<ISubmenuItemProps>> = ({
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
  onSearch,
  onClickLogo,
  currentPath,
  defaultMenuOpen = false,
  overlay = false
}) => {
  const isBurger = variant === ESidebarVariantMapping.burger;
  const isVertical = orientation === ESidebarOrientationMapping.vertical;

  const [isExpanded, setExpanded] = useState(() => {
    if (defaultMenuOpen) return true;
    return !isVertical && !isBurger;
  });
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [submenuItems, setSubmenuItems] = useState<ReactNode | ReactNode[]>(null);
  const [isScrollingDueToClick, setIsScrollingDueToClick] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);
  const collapseButtonRef = useRef<HTMLButtonElement>(null);

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

  const collapseSidebar = () => {
    setActiveItem(null);
    setExpanded(false);
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

  const renderUserControl = () => (
    <UserControl
      isExpanded={isExpanded}
      isVertical={isVertical}
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

  if (isBurger && !isExpanded)
    return (
      <div className={styles.burger} onClick={() => setExpanded(true)}>
        <Icon name="IconMenuBurgerOutlined32" containerSize={32} htmlColor="var(--unique-white)" />
      </div>
    );

  return (
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
        collapseSidebar
      }}
    >
      <ClickAwayListener
        onClickAway={() => setActiveItem(null)}
        excludeRef={collapseButtonRef}
        className={clsx(styles.root, styles[`root-${orientation}`], {
          [styles[`root-${orientation}-expanded`]]: isExpanded
        })}
      >
        <div className={clsx(styles.menu, styles[`menu-${orientation}`])} ref={positionRef}>
          {isBurger && !isVertical && (
            <div className={clsx(styles.burger, styles['burger-expanded'])} onClick={collapseSidebar}>
              <Icon name="IconMenuBurgerOutlined32" containerSize={32} htmlColor="var(--unique-white)" />
            </div>
          )}
          <div className={styles.head}>
            {isVertical && isBurger && <CollapseButton isExpanded={isExpanded} onClick={collapseSidebar} />}
            <div className={clsx(styles.top, { [styles['top-expanded']]: isExpanded })}>
              <div className={styles['top-left']}>
                <div
                  className={clsx(styles.logo, {
                    [styles.clickable]: onClickLogo
                  })}
                  onClick={onClickLogo}
                >
                  <LogoSvgIcon />
                </div>
                {isExpanded && systemName && (
                  <Typography variant="Body1-Medium" color="var(--unique-white)" className={styles.company}>
                    {systemName}
                  </Typography>
                )}
              </div>
              {isExpanded && isVertical && handleAction && (
                <Button
                  size="s"
                  variant="primary"
                  fill="clear"
                  className={clsx(styles.head, styles.auth)}
                  onClick={handleAction}
                  iconButton={<Icon name={actionIconName} htmlColor="var(--unique-white)" />}
                  title={actionTitle}
                />
              )}
            </div>
          </div>

          <Scrollbar className={clsx(styles.body, styles[`body-${orientation}`], styles.scrollbar)} ref={scrollRef}>
            {isVertical ? (
              <>
                <div className={styles.topSection}>
                  {renderUserControl()}
                  {topSectionItems}
                </div>
                <div className={styles.bottomSection}>{bottomSectionItems}</div>
              </>
            ) : (
              menuItems
            )}
          </Scrollbar>

          {isVertical ? (
            !isBurger && (
              <CollapseButton
                ref={collapseButtonRef}
                isExpanded={isExpanded}
                onClick={() => setExpanded(val => !val)}
              />
            )
          ) : (
            <div className={styles.rightSection}>
              {onSearch && (
                <div className={styles.search}>
                  <Icon name={'IconSearchOutlined32'} containerSize={32} htmlColor="var(--unique-white)" />
                </div>
              )}
              {renderUserControl()}
            </div>
          )}
        </div>

        {overlay && Boolean(activeItem) && <div className={styles.overlay} onClick={() => setActiveItem(null)} />}

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
