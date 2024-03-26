import React, {
  Children,
  FC,
  isValidElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { CSSTransition } from 'react-transition-group';

import { ImagePicture, Switch, Typography } from '@components/index';
import { SidebarProperties, SubmenuProperties } from '@components/Sidebar/context';
import { orientationMapping, submenuVersionMapping } from '@components/Sidebar/enums';
import { useFavorites } from '@components/Sidebar/hooks';
import { ISidebarProperties, ISubmenuProps } from '@components/Sidebar/types';
import clsx from 'clsx';
import { get } from 'lodash';

import styles from './Submenu.module.scss';

const Submenu: FC<ISubmenuProps> = ({
  version = submenuVersionMapping.version1,
  isOpen,
  title,
  orientation,
  offset,
  menuWidth,
  isNested,
  direction = '',
  image,
  children
}) => {
  const { allowFavorites } = useContext<ISidebarProperties>(SidebarProperties);
  const { handleFavorites, checkIsFavorite, checkChildIsFavorite } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);
  const [submenuDirection, setSubmenuDirection] = useState<string>('right');
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [submenuItems, setSubmenuItems] = useState<ReactNode | ReactNode[]>(null);

  const nodeRef = useRef<HTMLDivElement>(null);

  const isVertical = orientation === orientationMapping.vertical;
  const isV2 = version === submenuVersionMapping.version2;
  const isV3 = version === submenuVersionMapping.version3;

  const favoritesChildren = useMemo(
    () => Children.toArray(children).filter(child => isValidElement(child) && checkChildIsFavorite(child.props.id)),
    [children, checkChildIsFavorite]
  );

  const imagePath = useMemo(
    () =>
      get(
        Children.toArray(children).find(child => get(child, 'props.label') === activeItem),
        'props.image'
      ),
    [children]
  );

  useEffect(() => {
    setActiveItem(null);
  }, [title]);

  useEffect(() => {
    if (!isOpen || !nodeRef.current || !offset || !menuWidth || isVertical || isV3) return;

    const nodeWidth = nodeRef.current.getBoundingClientRect().width;
    if (menuWidth < offset + nodeWidth) {
      nodeRef.current.style.right = '0';
      nodeRef.current.style.left = 'unset';
      setSubmenuDirection('left');
    } else {
      nodeRef.current.style.left = `${offset}px`;
      nodeRef.current.style.right = 'unset';
      setSubmenuDirection('right');
    }
  }, [offset, menuWidth, isVertical, isV3, title, isOpen]);

  const animation = isNested ? `${orientation}-${direction}` : orientation;

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      timeout={300}
      classNames={{
        enter: styles[`submenu-${animation}-enter`],
        enterActive: styles[`submenu-${animation}-enter-active`],
        exit: styles[`submenu-${animation}-exit`],
        exitActive: styles[`submenu-${animation}-exit-active`]
      }}
      unmountOnExit
    >
      <div
        className={clsx(
          styles.submenu,
          styles[`submenu-${animation}`],
          { [styles['submenu-nested']]: isNested },
          { [styles['submenu-fluid']]: !isVertical && isV3 }
        )}
        ref={nodeRef}
      >
        <div className={styles.top}>
          <Typography variant="Heading4" className={styles.title}>
            {title}
          </Typography>
          {allowFavorites && (
            <Switch checked={showFavorites} onChange={() => setShowFavorites(prev => !prev)} label="Избранное" />
          )}
        </div>
        {image && isNested && (
          <div className={styles.image}>
            <ImagePicture src={image} aspectRatio="ratio-4x3" zoom={false} />
          </div>
        )}
        <SubmenuProperties.Provider
          value={{
            showFavorites,
            activeItem,
            version,
            handleFavorites,
            checkIsFavorite,
            setActiveItem,
            setSubmenuItems
          }}
        >
          <div className={clsx(styles.body, { [styles['body-fluid']]: !isVertical && isV3 })}>
            {showFavorites ? favoritesChildren : children}
          </div>
          {isV2 && !isVertical && (
            <Submenu
              title={activeItem ?? ''}
              isOpen={Boolean(activeItem)}
              orientation={orientationMapping.vertical}
              isNested
              direction={submenuDirection}
              image={imagePath}
            >
              {submenuItems}
            </Submenu>
          )}
        </SubmenuProperties.Provider>
      </div>
    </CSSTransition>
  );
};

export default Submenu;
