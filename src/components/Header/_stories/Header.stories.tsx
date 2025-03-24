import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { breadcrumbsLinks } from '@components/Breadcrumbs/_stories/constants';
import { Breadcrumbs, Button, Dropdown, DropdownMenuItem, Header, IconSettingsAltOutlined24 } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

// import styles from '@components/_storybook/styles.module.scss';
import styles from './Header.stories.module.scss';

import { typeMapping } from '../enums';
import { IHeaderProps } from '../types';
import argsTypes from './argsTypes';
import {
  DEFAULT_HEADER,
  HEADER_BACK,
  HEADER_BREADCRUMBS,
  HEADER_CHILDREN,
  HEADER_DATE,
  HEADER_FAVORITE,
  HEADER_NOTIFICATION,
  HEADERS_DIFFERENT_SPACING
} from './text';

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

DefaultHeader.storyName = DEFAULT_HEADER;
DefaultHeader.args = {
  title: DEFAULT_HEADER
};

export const HeaderBack = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderBack.storyName = HEADER_BACK;
HeaderBack.args = {
  title: HEADER_BACK,
  back: action('goBack')
};

export const HeaderDate = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderDate.storyName = HEADER_DATE;
HeaderDate.args = {
  title: HEADER_DATE,
  back: action('goBack'),
  date: true
};

export const HeaderFavorite = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderFavorite.storyName = HEADER_FAVORITE;
HeaderFavorite.args = {
  title: HEADER_FAVORITE,
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite')
};

export const HeaderNotification = (argTypes: IHeaderProps): ReactNode => {
  return <Header {...argTypes} />;
};

HeaderNotification.storyName = HEADER_NOTIFICATION;
HeaderNotification.args = {
  title: HEADER_NOTIFICATION,
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

export const HeaderSpacing = (argTypes: IHeaderProps): ReactNode => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {Object.values(typeMapping).map((typeValue: typeMapping) => (
        <Header
          {...argTypes}
          type={argTypes.type || typeValue}
          back={argTypes.back || undefined}
          favorite={argTypes.favorite || undefined}
          notification={argTypes.notification || undefined}
        />
      ))}
    </div>
  );
};

HeaderSpacing.storyName = HEADERS_DIFFERENT_SPACING;
HeaderSpacing.args = {
  title: HEADERS_DIFFERENT_SPACING,
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite'),
  notification: action('addToNotification'),
  notificationAmount: 9
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

HeaderBreadcrumbs.storyName = HEADER_BREADCRUMBS;
HeaderBreadcrumbs.args = {
  title: HEADER_BREADCRUMBS,
  type: typeMapping.compact,
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
      type="compact"
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

HeaderBreadcrumbsHasChildren.storyName = HEADER_CHILDREN;
HeaderBreadcrumbsHasChildren.args = {
  title: HEADER_CHILDREN,
  type: typeMapping.compact,
  back: action('goBack'),
  date: true,
  favorite: action('addToFavorite'),
  notification: action('addToNotification'),
  notificationAmount: 9
};
