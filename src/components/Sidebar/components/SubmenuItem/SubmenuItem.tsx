import React, { Children, cloneElement, FC, isValidElement, ReactElement, useContext, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { StarSvgIcon } from '@components/Icon/IconsInternal';
import { Button, Icon, ImagePicture, Typography } from '@components/index';
import { SidebarProperties, SubmenuProperties } from '@components/Sidebar/context';
import { orientationMapping, submenuVersionMapping } from '@components/Sidebar/enums';
import { ISidebarProperties, ISubmenuItemProps, ISubmenuProperties } from '@components/Sidebar/types';
import clsx from 'clsx';

import styles from './SubmenuItem.module.scss';

const SubmenuItem: FC<ISubmenuItemProps> = ({ id, label, image, children, depth = 1, onClick }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const { allowFavorites, orientation } = useContext<ISidebarProperties>(SidebarProperties);
  const { showFavorites, activeItem, version, handleFavorites, checkIsFavorite, setActiveItem, setSubmenuItems } =
    useContext<ISubmenuProperties>(SubmenuProperties);
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
  const isV1 = version === submenuVersionMapping.version1;
  const isV2 = version === submenuVersionMapping.version2;
  const isV3 = version === submenuVersionMapping.version3;

  const handleClick = () => {
    if (submenu && (!isV3 || isVertical)) {
      setSubmenuItems(submenu);
      setActiveItem(isActive ? null : label);
      setShowSubmenu(prev => !prev);
    }
    if (onClick && typeof onClick === 'function') onClick();
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapperV3}>
        <div className={clsx(styles.head, styles[`head-offset-${depth}`], { [styles['head-active']]: isActive })}>
          {allowFavorites && (
            <Button
              variant="primary"
              fill="clear"
              onClick={() => {
                handleFavorites(id!);
              }}
              iconButton={<StarSvgIcon active={checkIsFavorite(id!)} className={styles.favorite} />}
            />
          )}
          <div className={styles.title} onClick={handleClick}>
            <Typography variant="Body1-Medium" className={styles.text}>
              {label}
            </Typography>
            {children && (!isV3 || isVertical) && (
              <div
                className={clsx(styles.icon, styles[`icon-${version}`], {
                  [styles[`icon-${version}-rotated`]]: isV1 ? showSubmenu : isActive
                })}
              >
                <Icon htmlColor="var(--ac-icon-grey)" containerSize={24} name="IconChevronArrowDownOutlined24" />
              </div>
            )}
          </div>
        </div>
        {isV3 && image && !isVertical && depth === 1 && (
          <div className={styles.image}>
            <ImagePicture src={image} aspectRatio="ratio-4x3" zoom={false} />
          </div>
        )}
      </div>
      {(!isV2 || isVertical) && (
        <CSSTransition
          in={showSubmenu || (isV3 && !isVertical)}
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
          <div className={clsx(styles.submenu, { [styles['submenu-hidden']]: isVertical || isV1 })} ref={nodeRef}>
            {showFavorites ? favoritesChildren : submenu}
          </div>
        </CSSTransition>
      )}
    </div>
  );
};

export default SubmenuItem;
