import React, { FC, useContext, useEffect, useState } from 'react';

import { ELocaleMapping } from '@components/declaration';
import { LogoSvgIcon } from '@components/Icon/IconsInternal';
import { Button, Icon, Scrollbar, Typography } from '@components/index';
import clsx from 'clsx';

import styles from './MobileMenu.module.scss';

import { SidebarProperties, SubmenuProperties } from '../../context';
import { useFavorites } from '../../hooks';
import { IMobileMenuProps, ISidebarProperties } from '../../types';

/**
 * MobileMenu — содержимое развёрнутого мобильного drawer Sidebar.
 *
 * На верхнем уровне рендерит строку закрытия, бар компании, UserControl и секции
 * пунктов. При активном пункте (`activeItem`) переключается в drill-down: показывает
 * содержимое подменю и строку «назад». Состояние favorites переиспользует useFavorites
 * и пробрасывается через SubmenuProperties (как в десктопном Submenu).
 *
 * @param {IMobileMenuProps} props - Свойства мобильного меню.
 * @returns {JSX.Element} - Мобильный drawer.
 */
const MobileMenu: FC<IMobileMenuProps> = ({
  logo,
  systemName,
  locale = ELocaleMapping.ru,
  isLoggedIn,
  onLogin,
  onLogout,
  onClickLogo,
  userControl,
  topSectionItems,
  bottomSectionItems,
  activeItem,
  submenuItems
}) => {
  const { collapseSidebar, setActiveItem, onChangeFavorites } = useContext<ISidebarProperties>(SidebarProperties);
  const { handleFavorites, checkIsFavorite, checkChildIsFavorite, favorites } = useFavorites();
  const [submenuActiveItem, setSubmenuActiveItem] = useState<string | null>(null);

  useEffect(() => {
    onChangeFavorites(favorites);
  }, [favorites]);

  const actionIconName = isLoggedIn ? 'IconExitOutlined24' : 'IconEnterOutlined24';
  const actionTitle = isLoggedIn ? 'Выйти' : 'Войти';
  const handleAction = isLoggedIn ? onLogout : onLogin;

  if (activeItem) {
    return (
      <div className={styles.drawer} data-ui-sidebar-mobile-menu>
        <button
          type="button"
          className={styles.collapseRow}
          onClick={() => setActiveItem(null)}
          data-ui-sidebar-mobile-back
        >
          <span className={styles.collapseIcon}>
            <Icon name="IconChevronArrowLeftOutlined24" containerSize={24} htmlColor="var(--unique-white)" />
          </span>
          <Typography
            variant="Body1-Medium"
            color="var(--unique-white)"
            className={styles.backTitle}
            title={activeItem}
          >
            {activeItem}
          </Typography>
        </button>

        <Scrollbar className={styles.drillBody}>
          <SubmenuProperties.Provider
            value={{
              showFavorites: false,
              activeItem: submenuActiveItem,
              handleFavorites,
              checkChildIsFavorite,
              checkIsFavorite,
              setActiveItem: setSubmenuActiveItem,
              setSubmenuItems: () => {}
            }}
          >
            {submenuItems}
          </SubmenuProperties.Provider>
        </Scrollbar>
      </div>
    );
  }

  return (
    <div className={styles.drawer} data-ui-sidebar-mobile-menu>
      <button type="button" className={styles.collapseRow} onClick={collapseSidebar} data-ui-sidebar-collapse-button>
        <span className={styles.collapseIcon}>
          <Icon name="IconChevronArrowLeftOutlined24" containerSize={24} htmlColor="var(--unique-white)" />
        </span>
        <Typography variant="Body1-Medium" color="var(--unique-white)">
          {locale === ELocaleMapping.ru ? 'Свернуть' : 'Collapse'}
        </Typography>
      </button>

      <div className={styles.company}>
        <div
          className={clsx(styles.logo, { [styles.clickable]: onClickLogo })}
          onClick={onClickLogo}
          data-ui-sidebar-logo
        >
          {logo || <LogoSvgIcon />}
        </div>
        {systemName && (
          <Typography
            variant="Body1-Medium"
            color="var(--unique-white)"
            className={styles.companyName}
            title={systemName}
          >
            {systemName}
          </Typography>
        )}
        {handleAction && (
          <Button
            type="button"
            size="s"
            color="ghost"
            variant="secondary"
            onClick={handleAction}
            className={styles.companyAction}
            iconButton={<Icon name={actionIconName} htmlColor="var(--unique-white)" />}
            title={actionTitle}
            data-ui-sidebar-action-button
          />
        )}
      </div>

      <Scrollbar className={styles.body}>
        <div className={styles.topSection} data-ui-sidebar-top-section>
          {userControl}
          {topSectionItems}
        </div>
        <div className={styles.bottomSection} data-ui-sidebar-bottom-section>
          {bottomSectionItems}
        </div>
      </Scrollbar>
    </div>
  );
};

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;
