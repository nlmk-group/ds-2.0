import React, { FC, useContext } from 'react';

import { ELocaleMapping } from '@components/declaration';
import { LogoSvgIcon } from '@components/Icon/IconsInternal';
import { Button, Icon, Scrollbar, Typography } from '@components/index';
import clsx from 'clsx';

import styles from './AdaptiveMenu.module.scss';

import { SidebarProperties } from '../../context';
import { IAdaptiveMenuProps, ISidebarProperties } from '../../types';

/**
 * AdaptiveMenu — содержимое развёрнутого адаптивного drawer Sidebar.
 *
 * Рендерит строку закрытия, бар компании, UserControl и секции пунктов. Раскрытие
 * подменю работает как в десктопной версии — через fly-out <Submenu>, который
 * рендерится в самом Sidebar, поэтому собственной логики подменю здесь нет.
 *
 * @param {IAdaptiveMenuProps} props - Свойства адаптивного меню.
 * @returns {JSX.Element} - Адаптивный drawer.
 */
const AdaptiveMenu: FC<IAdaptiveMenuProps> = ({
  logo,
  systemName,
  locale = ELocaleMapping.ru,
  isLoggedIn,
  onLogin,
  onLogout,
  onClickLogo,
  userControl,
  topSectionItems,
  bottomSectionItems
}) => {
  const { collapseSidebar } = useContext<ISidebarProperties>(SidebarProperties);

  const actionIconName = isLoggedIn ? 'IconExitOutlined24' : 'IconEnterOutlined24';
  const actionTitle = isLoggedIn ? 'Выйти' : 'Войти';
  const handleAction = isLoggedIn ? onLogout : onLogin;

  return (
    <div className={styles.drawer} data-ui-sidebar-adaptive-menu>
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

AdaptiveMenu.displayName = 'AdaptiveMenu';

export default AdaptiveMenu;
