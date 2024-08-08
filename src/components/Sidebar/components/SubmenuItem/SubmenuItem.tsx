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

import { EButtonSizes } from '@components/Button/enums';
import { StarSvgIcon } from '@components/Icon/IconsInternal';
import { Button, Icon, ImagePicture, Typography } from '@components/index';
import { SidebarProperties, SubmenuProperties } from '@components/Sidebar/context';
import { orientationMapping } from '@components/Sidebar/enums';
import { ISidebarProperties, ISubmenuItemProps, ISubmenuProperties } from '@components/Sidebar/types';
import clsx from 'clsx';

import styles from './SubmenuItem.module.scss';

const SubmenuItem: FC<ISubmenuItemProps> = ({
  id,
  label,
  path,
  image,
  children,
  depth = 1,
  onClick,
  disabled = false
}) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const { allowFavorites, currentPath, orientation } = useContext<ISidebarProperties>(SidebarProperties);
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
  const isVertical = orientation === orientationMapping.vertical;
  const hasChildren = Children.count(children) > 0;

  const childrenIds = Children.toArray(submenu)
    .filter((child): child is ReactElement<ISubmenuItemProps> => isValidElement(child) && !child.props.disabled)
    .map(child => child.props.id)
    .filter((id): id is string => id !== undefined);

  const isFavorite = checkIsFavorite(id!);
  const isChildFavorite = checkChildIsFavorite(id!);

  const hasActiveSubMenuItem = (item: ReactNode): boolean => {
    if (!isValidElement(item)) return false;

    if (item.props.path === currentPath) return true;

    if (item.props.children) {
      return Children.toArray(item.props.children).some(hasActiveSubMenuItem);
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
    }
    setActiveItem(isActive ? null : label);
    setIsSubmenuVisible(prev => !prev);
    if (!hasChildren && onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  useEffect(() => {
    if (isActivePath) {
      setIsSubmenuVisible(true);
    }
  }, [isActivePath]);

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.wrapper, {
          [styles['wrapper-active']]: isActivePath,
          [styles['wrapper-disabled']]: disabled
        })}
      >
        <div className={clsx(styles.head, styles[`head-offset-${depth}`])}>
          {allowFavorites && id && (
            <Button
              variant="primary"
              fill="clear"
              size={EButtonSizes.s}
              onClick={() => handleFavorites(id, childrenIds)}
              disabled={disabled}
              iconButton={<StarSvgIcon active={Boolean(isFavorite && isChildFavorite)} className={styles.favorite} />}
            />
          )}
          <div className={styles.title} onClick={handleClick}>
            <Typography
              variant="Body1-Medium"
              className={clsx(styles.text, { [styles['text-active']]: isActivePath && !disabled })}
            >
              {label}
            </Typography>
            {submenu && isVertical && (
              <div className={clsx(styles.icon, { [styles[`icon-rotated`]]: isSubmenuVisible })}>
                <Icon
                  htmlColor={isActivePath && !disabled ? 'var(--ac-icon-blue)' : 'var(--ac-icon-grey)'}
                  containerSize={24}
                  name="IconChevronArrowDownOutlined24"
                />
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
