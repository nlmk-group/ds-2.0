import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

import { breadcrumbsLinks } from '@components/Breadcrumbs/_stories/constants';
import { Breadcrumbs, Button, Dropdown, DropdownMenuItem, Header, IconSettingsAltOutlined24 } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from './Header.stories.module.scss';

import { IHeaderProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/Header/Stories',
  component: Header,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Header>;

const dropdownOptions = [{ value: 'Сталь' }, { value: 'Железо' }, { value: 'Чугун', disabled: true }];

const dropdownOptionsComponent = (
  <Dropdown menuStyle={{ minWidth: '250px' }} buttonChildren="Заголовок">
    {dropdownOptions.map(({ value, disabled }) => (
      <DropdownMenuItem
        key={value}
        value={value}
        disabled={disabled}
        onClick={() => {
          console.log(value);
        }}
      >
        {value}
      </DropdownMenuItem>
    ))}
  </Dropdown>
);

export const DefaultHeader = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

DefaultHeader.storyName = 'Header по умолчанию';
DefaultHeader.args = {
  title: 'Заголовок',
  showBack: false,
  showFavorite: false,
  showNotification: false,
  showPrint: false,
  showVideo: false,
  showMessage: false,
  showDate: false,
  notificationAmount: 9,
  onBackClick: action('back clicked'),
  onFavoriteClick: action('favorite clicked'),
  onNotificationClick: action('notification clicked'),
  onPrintClick: action('print clicked'),
  onVideoClick: action('video clicked'),
  onMessageClick: action('message clicked')
};

export const HeaderBack = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderBack.storyName = 'Header с кнопкой назад';
HeaderBack.args = {
  title: 'Заголовок',
  showBack: true,
  onBackClick: action('back clicked')
};

export const HeaderDate = (): ReactNode => {
  return <Header title="Заголовок" showDate />;
};

HeaderDate.storyName = 'Header с датой';
HeaderDate.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const HeaderFavorite = (): ReactNode => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    action('favorite clicked')(isFavorite ? 'removed from favorites' : 'added to favorites');
  };

  return (
    <Header 
      title="Заголовок" 
      showFavorite 
      isFavorite={isFavorite}
      onFavoriteClick={handleFavoriteClick} 
    />
  );
};

HeaderFavorite.storyName = 'Header с кнопкой добавления в избранное';

export const HeaderNotification = (): ReactNode => {
  return (
    <Header
      title="Заголовок"
      showNotification
      onNotificationClick={action('notification clicked')}
      notificationAmount={9}
    />
  );
};

HeaderNotification.storyName = 'Header с кнопкой уведомления';
HeaderNotification.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const HeaderWithDropdown = (): ReactNode => {
  return (
    <Header
      title="Заголовок"
      showDate
      showPrint
      showFavorite
      showBack
      showVideo
      showMessage
      showNotification
      onPrintClick={action('print clicked')}
      onVideoClick={action('video clicked')}
      onMessageClick={action('message clicked')}
      onFavoriteClick={action('favorite clicked')}
      onBackClick={action('back clicked')}
      onNotificationClick={action('notification clicked')}
      notificationAmount={9}
      className={styles['header-container']}
    >
      {dropdownOptionsComponent}
    </Header>
  );
};

HeaderWithDropdown.storyName = 'Header с выпадающим списком';
HeaderWithDropdown.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const HeaderBreadcrumbs = (): ReactNode => {
  return (
    <Header
      title="Заголовок"
      showDate
      showPrint
      showFavorite
      showBack
      showVideo
      showMessage
      showNotification
      onPrintClick={action('print clicked')}
      onVideoClick={action('video clicked')}
      onMessageClick={action('message clicked')}
      onFavoriteClick={action('favorite clicked')}
      onBackClick={action('back clicked')}
      onNotificationClick={action('notification clicked')}
      notificationAmount={9}
      breadcrumbs={
        <Breadcrumbs>
          {breadcrumbsLinks.map((link, index) => (
            <Breadcrumbs.Crumb key={index}>
              <Link to={link.href}>{link.label}</Link>
            </Breadcrumbs.Crumb>
          ))}
        </Breadcrumbs>
      }
    />
  );
};

HeaderBreadcrumbs.storyName = 'Header с хлебными крошками';
HeaderBreadcrumbs.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const HeaderBreadcrumbsHasChildren = (): ReactNode => {
  return (
    <Header
      title="Заголовок"
      showDate
      showPrint
      showFavorite
      showBack
      showVideo
      showMessage
      showNotification
      onPrintClick={action('print clicked')}
      onVideoClick={action('video clicked')}
      onMessageClick={action('message clicked')}
      onFavoriteClick={action('favorite clicked')}
      onBackClick={action('back clicked')}
      onNotificationClick={action('notification clicked')}
      notificationAmount={9}
      breadcrumbs={
        <Breadcrumbs>
          {breadcrumbsLinks.map((link, index) => (
            <Breadcrumbs.Crumb key={index}>
              <Link to={link.href}>{link.label}</Link>
            </Breadcrumbs.Crumb>
          ))}
        </Breadcrumbs>
      }
    >
      <Button
        type="button"
        style={{ marginRight: '25px' }}
        color="grey"
        variant="secondary"
        startIcon={<IconSettingsAltOutlined24 />}
      >
        Настройки
      </Button>
    </Header>
  );
};

HeaderBreadcrumbsHasChildren.storyName = 'Header с дочерней кнопкой и хлебными крошками';
HeaderBreadcrumbsHasChildren.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
