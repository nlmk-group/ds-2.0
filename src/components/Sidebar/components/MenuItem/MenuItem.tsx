import React, { Children, cloneElement, FC, isValidElement, MouseEvent, ReactElement, useContext, useRef } from 'react';

import { Icon, Typography } from '@components/index';
import { SidebarProperties } from '@components/Sidebar/context';
import { IMenuItemProps, ISidebarProperties, ISubmenuItemProps } from '@components/Sidebar/types';
import clsx from 'clsx';

import styles from './MenuItem.module.scss';
import { orientationMapping } from '@components/Sidebar/enums';

interface IMenuItemComponent extends FC<IMenuItemProps> {
  componentType?: string;
}

const MenuItem: IMenuItemComponent = ({ label, children, icon, onClick }) => {
  const { isExpanded, activeItem, orientation, setSubmenuItems, setActiveItem, setSubmenuOffset, setIsScrollingDueToClick } =
    useContext<ISidebarProperties>(SidebarProperties);
  const targetRef = useRef<HTMLDivElement>(null);
  const isActive = activeItem === label;

  const submenu = Children.map(
    children as ReactElement<ISubmenuItemProps>,
    (child: ReactElement<ISubmenuItemProps>, index) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          id: `${label}:${index}`,
          depth: 1
        });
      }
      return child;
    }
  );

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (orientation === orientationMapping.horizontal) {
      setIsScrollingDueToClick(true);
      targetRef.current?.scrollIntoView();
      setTimeout(() => setIsScrollingDueToClick(false), 300);
    }
    setActiveItem(isActive ? null : label);

    if (submenu) {
      setSubmenuOffset(isActive ? 0 : Math.round(targetRef.current?.getClientRects()[0].x ?? 0));
      setSubmenuItems(submenu);
    } else {
      setActiveItem(null);
    }
    if (onClick && typeof onClick === 'function') onClick();
  };

  return (
    <div className={clsx(styles.root, { [styles['root-active']]: isActive })} onClick={handleClick} ref={targetRef} title={label}>
      <Icon name={icon} containerSize={32} htmlColor="var(--ac-icon-white)" />
      {isExpanded && (
        <div className={styles.expanded}>
          <Typography variant="Body1-Medium" className={styles.text}>
            {label}
          </Typography>
          {submenu && (
            <div
              className={clsx(styles.icon, styles[`icon-${orientation}`], {
                [styles[`icon-${orientation}-rotated`]]: isActive
              })}
            >
              <Icon name={'IconChevronArrowRightOutlined24'} containerSize={24} htmlColor="var(--ac-icon-grey)" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

MenuItem.componentType = 'MenuItem';

export default MenuItem;
