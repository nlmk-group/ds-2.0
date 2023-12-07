import React from 'react';

import { Icon, Tab, Tooltip } from '@components/index';
import { withDesign } from 'storybook-addon-designs';

import styles from '@components/_storybook/styles.module.scss';

import { ITab } from '../types';
import argsTypes from './argsTypes';
import {
  TEXT_ACTIVE,
  TEXT_DEFAULT,
  TEXT_ON_CLICK,
  TEXT_TOOLTIP,
  TEXT_WITH_BADGE
} from './text';

const withPadding = (Story: () => any) => (
  <div style={{ minHeight: 80 }}>{Story()}</div>
);

export default {
  title: 'Components/Tab/Stories',
  component: Tab,
  decorators: [withDesign, withPadding],
  argTypes: argsTypes
};

export const TabDefault = (argTypes: ITab): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tab {...argTypes} />
    </div>
  );
};

TabDefault.storyName = TEXT_DEFAULT;
TabDefault.args = {
  label: 'Привет Мир!'
};

export const TabActive = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tab label="Карта сайта" active />
    </div>
  );
};

TabActive.storyName = TEXT_ACTIVE;

export const TabWithBadge = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tab label="Входящая почта" badgeNumber="91" />
    </div>
  );
};

TabWithBadge.storyName = TEXT_WITH_BADGE;

export const TabWithTooltip = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tab label="Новости" badgeNumber="450">
        <Tooltip description="Актуальная информация">
          <Icon
            name="IconInfo16"
            containerSize={16}
            htmlColor="var(--text-grey-500)"
          />
        </Tooltip>
      </Tab>
    </div>
  );
};

TabWithTooltip.storyName = TEXT_TOOLTIP;

export const TabWithOnclick = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tab label="Погода" onClick={() => alert('Element was clicked')} />
    </div>
  );
};

TabWithOnclick.storyName = TEXT_ON_CLICK;
