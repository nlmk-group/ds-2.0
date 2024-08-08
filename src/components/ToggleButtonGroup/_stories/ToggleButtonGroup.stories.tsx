import React, { ReactNode } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconStarOutlined24, ToggleButtonGroup, Typography } from '@components/index';
import styles from '@components/_storybook/styles.module.scss';

import { IToggleButtonGroup } from '../types';
import { argsTypes } from './argsTypes';
import {
  DEFAULT_TOGGLE_BUTTON,
  TOGGLE_BUTTON_TOOLTIP,
  TOGGLE_BUTTON_ICON,
  TOGGLE_BUTTON_BADGE,
  TOGGLE_BUTTON_SIZES,
  TOGGLE_BUTTON_COLOR_OPTIONS
} from './constants';
import { sizeMapping, statusMapping } from '../enums';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/ToggleButtonGroup/Stories',
  component: ToggleButtonGroup,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof ToggleButtonGroup>;

export const DefaultBtnGroup = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

DefaultBtnGroup.storyName = DEFAULT_TOGGLE_BUTTON;

export const BtnGroupTooltip = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip
          render={<Typography variant="Caption-Medium">Печенье</Typography>}
          placement="left"
        >
          <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Торты</Typography>}>
          <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip
          render={<Typography variant="Caption-Medium">Кексы</Typography>}
          placement="bottom"
        >
          <ToggleButtonGroup.Button.Label>Кексы</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip
          render={<Typography variant="Caption-Medium">Конфеты</Typography>}
          placement="right"
        >
          <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

BtnGroupTooltip.storyName = TOGGLE_BUTTON_TOOLTIP;

export const BtnGroupSizes = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(sizeMapping).map((size: sizeMapping, index: number) => (
        <ToggleButtonGroup size={size} key={index} {...argTypes}>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
      ))}
    </div>
  );
};

BtnGroupSizes.storyName = TOGGLE_BUTTON_SIZES;

export const BtnGroupIcon = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
        <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

BtnGroupIcon.storyName = TOGGLE_BUTTON_ICON;

export const BtnGroupIconBadge = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>7</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
        <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge variant="outline">{7 + 5}</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

BtnGroupIconBadge.storyName = TOGGLE_BUTTON_BADGE;

export const BtnGroupOptions = (argTypes: IToggleButtonGroup): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(statusMapping).map((status: statusMapping, index: number) => (
        <ToggleButtonGroup status={status} key={index} {...argTypes}>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>Печенье</ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>7</ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>Торты</ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Icon />
            <ToggleButtonGroup.Button.Label>Конфеты</ToggleButtonGroup.Button.Label>
            <ToggleButtonGroup.Button.Badge>3</ToggleButtonGroup.Button.Badge>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
      ))}
    </div>
  );
};

BtnGroupOptions.storyName = TOGGLE_BUTTON_COLOR_OPTIONS;
