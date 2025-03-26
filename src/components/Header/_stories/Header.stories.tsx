import React, { ReactNode } from 'react';
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
  title: 'Заголовок'
};

export const HeaderBack = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderBack.storyName = 'Header с кнопкой возвращения слева';
HeaderBack.args = {
  title: 'Заголовок',
  onBackClick: action('goBack')
};

export const HeaderDate = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderDate.storyName = 'Header с датой и временем';
HeaderDate.args = {
  title: 'Заголовок',
  onBackClick: action('goBack'),
  hasDate: true
};

export const HeaderFavorite = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderFavorite.storyName = 'Header с кнопкой добавления в избранное';
HeaderFavorite.args = {
  title: 'Заголовок',
  onBackClick: action('goonBackClick'),
  hasDate: true,
  onFavoriteClick: action('favorite')
};

export const HeaderNotification = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderNotification.storyName = 'Header с кнопкой уведомления';
HeaderNotification.args = {
  title: 'Заголовок',
  onBackClick: action('back'),
  hasDate: true,
  onNotificationClick: action('notification'),
  notificationAmount: 9
};
export const HeaderWithDropdown = (argTypes: IHeaderProps): ReactNode => {
  return (
    <Header className={styles['header-container']} {...argTypes}>
      {dropdownOptionsComponent}
    </Header>
  );
};
HeaderWithDropdown.storyName = 'Header с выпадающим списком';

HeaderWithDropdown.args = {
  title: 'Заголовок',
  onBackClick: action('back'),
  hasDate: true,
  onNotificationClick: action('notification'),
  notificationAmount: 9,
  onPrintClick: action('print'),
  onVideoClick: action('video'),
  onFavoriteClick: action('favorite'),
  onMessageClick: action('message')
};

export const HeaderBreadcrumbs = (argTypes: IHeaderProps): ReactNode => {
  return (
    <Header
      {...argTypes}
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
HeaderBreadcrumbs.args = {
  title: 'Заголовок',
  onBackClick: action('back'),
  hasDate: true,
  onFavoriteClick: action('favorite'),
  onNotificationClick: action('notification'),
  notificationAmount: 9
};

export const HeaderBreadcrumbsHasChildren = (argTypes: IHeaderProps): ReactNode => {
  return (
    <Header
      {...argTypes}
      onBackClick={argTypes.onBackClick || undefined}
      hasDate
      onFavoriteClick={argTypes.onFavoriteClick || undefined}
      onNotificationClick={argTypes.onNotificationClick || undefined}
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
HeaderBreadcrumbsHasChildren.args = {
  title: 'Заголовок',
  onBackClick: action('back'),
  hasDate: true,
  onFavoriteClick: action('favorite'),
  onNotificationClick: action('notification'),
  notificationAmount: 9
};
