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

import { Icon, Typography } from '@components/index';
import { SidebarProperties } from '@components/Sidebar/context';
import { orientationMapping } from '@components/Sidebar/enums';
import { IMenuItemProps, ISidebarProperties, ISubmenuItemProps } from '@components/Sidebar/types';
import clsx from 'clsx';

import styles from './MenuItem.module.scss';

interface IMenuItemComponent extends FC<IMenuItemProps> {
  componentType?: string;
}

const MenuItem: IMenuItemComponent = ({ label, children, path, icon, onClick, disabled = false }) => {
  const { isExpanded, currentPath, orientation, activeItem, setSubmenuItems, setActiveItem, setIsScrollingDueToClick } =
    useContext<ISidebarProperties>(SidebarProperties);
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
    if (orientation === orientationMapping.horizontal) {
      setIsScrollingDueToClick(true);
      targetRef.current?.scrollIntoView();
      setTimeout(() => setIsScrollingDueToClick(false), 300);
    }
    setActiveItem(isActive ? null : label);

    if (submenu) {
      setSubmenuItems(submenu);
    } else {
      setActiveItem(null);
    }
    if (!hasChildren && onClick && typeof onClick === 'function') onClick();
  };

  return (
    <div
      className={clsx(styles.root, { [styles['root-active']]: isActivePath, [styles['root-disabled']]: disabled })}
      onClick={handleClick}
      ref={targetRef}
      title={label}
    >
      <Icon
        name={icon}
        containerSize={32}
        htmlColor={!disabled ? 'var(--ac-icon-white)' : 'var(--ac-sidebar-section-icon-disabled)'}
      />
      {isExpanded && (
        <div className={styles.expanded}>
          <Typography variant="Body1-Medium" className={clsx(styles.text, { [styles['text-disabled']]: disabled })}>
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
