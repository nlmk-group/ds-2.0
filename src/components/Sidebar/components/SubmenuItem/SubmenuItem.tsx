import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { CSSTransition } from 'react-transition-group';

import { EButtonSize } from '@components/Button/enums';
import { Button, Icon, IconStarFilled32, IconStarOutlined32, ImagePicture, Typography } from '@components/index';
import { SidebarProperties, SubmenuProperties } from '@components/Sidebar/context';
import { ESidebarOrientationMapping } from '@components/Sidebar/enums';
import { ISidebarProperties, ISubmenuItemProps, ISubmenuProperties } from '@components/Sidebar/types';
import clsx from 'clsx';

import styles from './SubmenuItem.module.scss';

const SubmenuItem: FC<ISubmenuItemProps> = ({
  id,
  label,
  content,
  path,
  image,
  children,
  depth = 1,
  onClick,
  disabled
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredIcon, setIsHoveredIcon] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const { allowFavorites, currentPath, orientation, collapseSidebar } =
    useContext<ISidebarProperties>(SidebarProperties);
  const {
    showFavorites,
    activeItem,
    checkChildIsFavorite,
    handleFavorites,
    checkIsFavorite,
    setActiveItem,
    setSubmenuItems
  } = useContext<ISubmenuProperties>(SubmenuProperties);

  const nodeRef = useRef(null);

  const submenu = Children.map(
    children as ReactElement<ISubmenuItemProps>,
    (child: ReactElement<ISubmenuItemProps>, index) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          id: `${String(id)}-${index}`,
          depth: depth + 1
        });
      }
      return child;
    }
  );

  const favoritesChildren = Children.toArray(submenu).filter(
    child => isValidElement(child) && checkIsFavorite(child.props.id)
  );

  const isActive = label === activeItem;
  const isVertical = orientation === ESidebarOrientationMapping.vertical;
  const hasChildren = Children.count(children) > 0;

  const childrenIds = Children.toArray(submenu)
    .filter((child): child is ReactElement<ISubmenuItemProps> => isValidElement(child) && !child.props.disabled)
    .map(child => child.props.id)
    .filter((id): id is string => id !== undefined);

  const isFavorite = checkIsFavorite(id!);
  const isChildFavorite = checkChildIsFavorite(id!);

  const hasActiveSubMenuItem = (item: ReactNode): boolean => {
    if (!isValidElement<ISubmenuItemProps>(item)) return false;

    if (item.props.path === currentPath) return true;

    const { children } = item.props;
    if (children) {
      return Children.toArray(children).some(hasActiveSubMenuItem);
    }

    return false;
  };

  const isActivePath = path === currentPath || Children.toArray(children).some(hasActiveSubMenuItem);

  const handleClick = () => {
    if (disabled) {
      return;
    }
    if (submenu && isVertical) {
      setSubmenuItems(submenu);
      setIsSubmenuVisible(prev => !prev);
    } else {
      setActiveItem(isActive ? null : label);
      if (!hasChildren && onClick && typeof onClick === 'function') {
        onClick();
      }
      if (!hasChildren) {
        collapseSidebar();
      }
    }
  };

  /**
   * Этот useEffect для раскрытия автоматически
   * внутренних элементов subMenuItem если его path активен
   */
  useEffect(() => {
    if (isActivePath) {
      setIsSubmenuVisible(true);
    }
  }, [isActivePath]);
  return (
    <div className={styles['submenu-item']}>
      <div
        className={clsx(styles.wrapper, {
          [styles['wrapper-active']]: isActivePath,
          [styles['wrapper-disabled']]: disabled
        })}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={clsx(styles.head, styles[`head-offset-${depth}`])}
        >
          {allowFavorites && id && (
            <Button
              onMouseEnter={() => {
                setIsHoveredIcon(true);
              }}
              onMouseLeave={() => {
                setIsHoveredIcon(false);
              }}
              className={clsx(styles['favorite-button'], {
                [styles['favorite-button--visible']]: (isHovered || (isFavorite && isChildFavorite)) && !disabled
              })}
              color="ghost"
              variant="secondary"
              size={EButtonSize.s}
              onClick={() => handleFavorites(id, childrenIds)}
              disabled={disabled}
              iconButton={
                isHoveredIcon || (isFavorite && isChildFavorite) ? (
                  <IconStarFilled32 htmlColor="var(--spectrum-yellow-60)" />
                ) : (
                  <IconStarOutlined32 htmlColor="var(--brand-sapphire-60)" />
                )
              }
            />
          )}
          <div className={styles.title} onClick={handleClick}>
            <Typography
              variant="Body1-Medium"
              color={isActivePath && !disabled ? 'var(--unique-bluewhite)' : 'var(--steel-90)'}
              className={styles.text}
            >
              {content || label}
            </Typography>
            {submenu && isVertical && (
              <div className={clsx(styles.icon, { [styles[`icon-rotated`]]: isSubmenuVisible })}>
                <Icon htmlColor={'var(--brand-sapphire-60)'} containerSize={24} name="IconChevronArrowDownOutlined24" />
              </div>
            )}
          </div>
        </div>
        {image && !isVertical && depth === 1 && (
          <div className={styles.image}>
            <ImagePicture src={image} aspectRatio="ratio-4x3" zoom={false} />
          </div>
        )}
      </div>
      <CSSTransition
        in={isSubmenuVisible || !isVertical}
        nodeRef={nodeRef}
        timeout={300}
        classNames={{
          enter: styles['submenu-enter'],
          enterActive: styles['submenu-enter-active'],
          exit: styles['submenu-exit'],
          exitActive: styles['submenu-exit-active']
        }}
        unmountOnExit
      >
        <div className={clsx(styles.submenu, { [styles['submenu-hidden']]: isVertical })} ref={nodeRef}>
          {showFavorites ? favoritesChildren : submenu}
        </div>
      </CSSTransition>
    </div>
  );
};
export default SubmenuItem;
