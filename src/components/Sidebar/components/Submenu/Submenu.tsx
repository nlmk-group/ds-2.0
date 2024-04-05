import React, { Children, FC, isValidElement, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Switch, Typography } from '@components/index';
import { SidebarProperties, SubmenuProperties } from '@components/Sidebar/context';
import { orientationMapping } from '@components/Sidebar/enums';
import { useFavorites } from '@components/Sidebar/hooks';
import { ISidebarProperties, ISubmenuProps } from '@components/Sidebar/types';
import clsx from 'clsx';

import styles from './Submenu.module.scss';

const Submenu: FC<ISubmenuProps> = ({ isOpen, title, orientation, children }) => {
  const { allowFavorites } = useContext<ISidebarProperties>(SidebarProperties);
  const { handleFavorites, checkIsFavorite, checkChildIsFavorite } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const nodeRef = useRef<HTMLDivElement>(null);

  const isVertical = orientation === orientationMapping.vertical;

  const favoritesChildren = useMemo(
    () => Children.toArray(children).filter(child => isValidElement(child) && checkChildIsFavorite(child.props.id)),
    [children, checkChildIsFavorite]
  );

  const favoritesRender = () => {
    return favoritesChildren.length > 0 ? (
      favoritesChildren
    ) : (
      <div className={styles['favorites-empty']}>
        <Typography variant="Body1-Medium" color="primary" className={styles.emptyFavorites}>
          Избранное пусто
        </Typography>
      </div>
    );
  };

  useEffect(() => {
    setActiveItem(null);
  }, [title]);

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
          <Typography variant="Body-Bold" className={styles.title}>
            {title}
          </Typography>
          {allowFavorites && (
            <Switch checked={showFavorites} onChange={() => setShowFavorites(prev => !prev)} label="Избранное" />
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
          <div className={clsx(styles.body, { [styles['body-fluid']]: !isVertical })}>
            {showFavorites ? favoritesRender() : children}
          </div>
        </SubmenuProperties.Provider>
      </div>
    </CSSTransition>
  );
};

export default Submenu;
