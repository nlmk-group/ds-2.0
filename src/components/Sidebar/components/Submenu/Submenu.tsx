import React, { Children, FC, isValidElement, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Switch, Typography } from '@components/index';
import clsx from 'clsx';

import styles from './Submenu.module.scss';

import { SidebarProperties, SubmenuProperties } from '../../context';
import { ESidebarOrientationMapping } from '../../enums';
import { useFavorites } from '../../hooks';
import { ISidebarProperties, ISubmenuProps } from '../../types';

const Submenu: FC<ISubmenuProps> = ({ isOpen, title, orientation, children }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { allowFavorites } = useContext<ISidebarProperties>(SidebarProperties);
  const { handleFavorites, checkIsFavorite, checkChildIsFavorite } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const isVertical = orientation === ESidebarOrientationMapping.vertical;

  const favoritesChildren = useMemo(
    () => Children.toArray(children).filter(child => isValidElement(child) && checkChildIsFavorite(child.props.id)),
    [children, checkChildIsFavorite]
  );

  const favoritesRender = () => {
    return favoritesChildren.length > 0 ? (
      favoritesChildren
    ) : (
      <div className={styles['favorites-empty']}>
        <Typography variant="Body1-Medium" color="var(--steel-60)" className={styles.emptyFavorites}>
          Раздел избранного пуст
        </Typography>
      </div>
    );
  };

  useEffect(() => {
    setActiveItem(null);
  }, [title]);
  let favoritesContent;

  if (showFavorites && favoritesChildren.length > 0) {
    favoritesContent = (
      <div className={clsx(styles['body'], { [styles['body-fluid']]: !isVertical })}>{favoritesRender()}</div>
    );
  } else if (showFavorites && favoritesChildren.length === 0) {
    favoritesContent = (
      <div className={clsx(styles['body-favorite'], { [styles['body-fluid']]: !isVertical })}>{favoritesRender()}</div>
    );
  } else {
    favoritesContent = <div className={clsx(styles.body, { [styles['body-fluid']]: !isVertical })}>{children}</div>;
  }
  return (
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      timeout={300}
      classNames={{
        enter: styles[`submenu-${orientation}-enter`],
        enterActive: styles[`submenu-${orientation}-enter-active`],
        exit: styles[`submenu-${orientation}-exit`],
        exitActive: styles[`submenu-${orientation}-exit-active`]
      }}
      unmountOnExit
    >
      <div
        className={clsx(styles.submenu, styles[`submenu-${orientation}`], { [styles['submenu-fluid']]: !isVertical })}
        ref={nodeRef}
      >
        <div className={styles.top}>
          <Typography variant="Body-Bold" color="var(--steel-90)" className={styles.title}>
            {title}
          </Typography>
          {allowFavorites && (
            <Switch
              className={styles['switch-position']}
              checked={showFavorites}
              onChange={() => setShowFavorites(prev => !prev)}
              label="Избранное"
            />
          )}
        </div>
        <SubmenuProperties.Provider
          value={{
            showFavorites,
            activeItem,
            handleFavorites,
            checkChildIsFavorite,
            checkIsFavorite,
            setActiveItem,
            setSubmenuItems: () => {}
          }}
        >
          {favoritesContent}
        </SubmenuProperties.Provider>
      </div>
    </CSSTransition>
  );
};

export default Submenu;
