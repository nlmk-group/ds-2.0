import React, { ReactNode } from 'react';

import { Icon, Link } from '@components/index';
import { Meta, Story } from '@storybook/react';

import styles from '@components/_storybook/styles.module.scss';

import { sizeMapping, targetMapping } from '../enums';
import { ILink } from '../types';
import { argsTypes } from './argsTypes';
import { DEFAULT_LINK, LINK_DISABLE, LINK_ICON, LINK_SIZES, LINK_TARGET } from './text';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Link/Stories',
  component: Link,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Link>;

export const DefaultLink = (argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
};

DefaultLink.storyName = DEFAULT_LINK;
DefaultLink.args = {
  children: 'W3Schools',
  href: 'https://www.w3schools.com/'
};

export const DisabledLink = (argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
};

DisabledLink.storyName = LINK_DISABLE;
DisabledLink.args = {
  children: 'W3Schools',
  href: 'https://www.w3schools.com/',
  disabled: true
};

export const LinkTargets = (argTypes: ILink): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      {Object.values(targetMapping).map((target: targetMapping) => (
        <Link target={target} {...argTypes}>
          {target}
        </Link>
      ))}
    </div>
  );
};

LinkTargets.storyName = LINK_TARGET;
LinkTargets.args = {
  href: 'https://www.lipsum.com/'
};

export const IconLink = (argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
};

IconLink.storyName = LINK_ICON;
IconLink.args = {
  children: LINK_ICON,
  href: 'https://www.lipsum.com/',
  size: sizeMapping.h1,
  disabled: false,
  leftIcon: <Icon name="IconStorage16" />,
  rightIcon: <Icon name="IconStorage16" />
};

export const LinkSizes = (argTypes: ILink): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}
    >
      {Object.values(sizeMapping).map((size: sizeMapping) => (
        <Link size={size} {...argTypes}>
          {size}
        </Link>
      ))}
    </div>
  );
};

LinkSizes.storyName = LINK_SIZES;
LinkSizes.args = {
  href: 'https://www.lipsum.com/',
  disabled: false
};
