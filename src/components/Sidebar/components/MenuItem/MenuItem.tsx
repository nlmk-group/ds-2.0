import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  MouseEvent,
  ReactElement,
  ReactNode,
  useContext,
  useRef
} from 'react';

import { Icon, TIconName, Typography } from '@components/index';
import { SidebarProperties } from '@components/Sidebar/context';
import { ESidebarOrientationMapping } from '@components/Sidebar/enums';
import { IMenuItemProps, ISidebarProperties, ISubmenuItemProps } from '@components/Sidebar/types';
import clsx from 'clsx';

import styles from './MenuItem.module.scss';

interface IMenuItemComponent extends FC<IMenuItemProps> {
  componentType?: string;
}

const MenuItem: IMenuItemComponent = ({ label, content, children, path, icon, onClick, disabled = false }) => {
  const {
    isExpanded,
    currentPath,
    orientation,
    activeItem,
    setSubmenuItems,
    setActiveItem,
    setIsScrollingDueToClick,
    collapseSidebar
  } = useContext<ISidebarProperties>(SidebarProperties);
  const targetRef = useRef<HTMLDivElement>(null);
  const isActive = activeItem === label;
  const hasChildren = Children.count(children) > 0;

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

  const hasActiveChild = (item: ReactNode): boolean => {
    if (!isValidElement(item)) return false;

    if (item.props.path === currentPath) return true;

    if (item.props.children) {
      return Children.toArray(item.props.children).some(hasActiveChild);
    }

    return false;
  };

  const isActivePath = path === currentPath || Children.toArray(children).some(hasActiveChild);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    if (disabled) {
      return;
    }
    if (orientation === ESidebarOrientationMapping.horizontal) {
      setIsScrollingDueToClick(true);
      targetRef.current?.scrollIntoView();
      setTimeout(() => setIsScrollingDueToClick(false), 300);
    }
    setActiveItem(isActive ? null : label);

    if (submenu) {
      setSubmenuItems(submenu);
    } else {
      setActiveItem(null);
      collapseSidebar();
    }
    if (!hasChildren && onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div
      className={clsx(styles.menu, { [styles['menu-active']]: isActivePath, [styles['menu-disabled']]: disabled })}
      onClick={handleClick}
      ref={targetRef}
      title={label}
      data-ui-sidebar-menu-item
    >
      {icon && typeof icon === 'string' && (
        <Icon
          name={icon as TIconName}
          containerSize={32}
          htmlColor={!disabled ? 'var(--unique-white)' : 'var(--steel-60)'}
        />
      )}
      {isValidElement(icon) && typeof icon !== 'string' && icon}
      {isExpanded && (
        <div className={styles.expanded}>
          <Typography
            variant="Body1-Medium"
            color={disabled ? 'var(--steel-60)' : 'var(--unique-white)'}
            className={clsx(
              orientation === ESidebarOrientationMapping.horizontal && styles['text-horizontal'],
              styles.text
            )}
          >
            {content || label}
          </Typography>
          {submenu && (
            <div
              className={clsx(styles.icon, styles[`icon-${orientation}`], {
                [styles[`icon-${orientation}-rotated`]]: isActive
              })}
            >
              <Icon name={'IconChevronArrowRightOutlined24'} containerSize={24} htmlColor="var(--unique-white)" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

MenuItem.componentType = 'MenuItem';

export default MenuItem;
