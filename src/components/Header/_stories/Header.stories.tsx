import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { breadcrumbsLinks } from '@components/Breadcrumbs/_stories/constants';
import { Breadcrumbs, Button, Dropdown, DropdownMenuItem, Header, IconSettingsAltOutlined24 } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

// import styles from '@components/_storybook/styles.module.scss';
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

const dropdownOptions = [
  { value: 'Сталь' },
  { value: 'Железо' },
  { value: 'Чугун', disabled: true },
  { value: 'Медь' },
  { value: 'Цинк' },
  { value: 'Титан' },
  { value: 'Хром' }
];

const dropdownOptionsComponent = (
  <Dropdown buttonChildren="Заголовок">
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
  back: action('goBack')
};

export const HeaderDate = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderDate.storyName = 'Header с датой и временем';
HeaderDate.args = {
  title: 'Заголовок',
  back: action('goBack'),
  date: true
};

export const HeaderFavorite = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderFavorite.storyName = 'Header с кнопкой добавления в избранное';
HeaderFavorite.args = {
  title: 'Заголовок',
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite')
};

export const HeaderNotification = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderNotification.storyName = 'Header с кнопкой уведомления';
HeaderNotification.args = {
  title: 'Заголовок',
  back: action('goBack'),
  date: true,
  notification: action('addToNotification'),
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
  back: action('goBack'),
  date: true,
  notification: action('addToNotification'),
  notificationAmount: 9,
  print: action('print'),
  video: action('openVideo'),
  favorite: action('favorite')
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
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite'),
  notification: action('addToNotification'),
  notificationAmount: 9
};

export const HeaderBreadcrumbsHasChildren = (argTypes: IHeaderProps): ReactNode => {
  return (
    <Header
      {...argTypes}
      back={argTypes.back || undefined}
      date
      favorite={argTypes.favorite || undefined}
      notification={argTypes.notification || undefined}
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
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite'),
  notification: action('addToNotification'),
  notificationAmount: 9
};
