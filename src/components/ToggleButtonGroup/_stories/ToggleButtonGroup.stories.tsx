import React, { ReactNode } from 'react';

import { IconStarOutlined24, ToggleButtonGroup, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import style from './ToggleButtonGroup.module.scss';

import { EToggleButtonGroupSizeMapping } from '../enums';
import { IToggleButtonGroupProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={style.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/ToggleButtonGroup/Stories',
  component: ToggleButtonGroup,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof ToggleButtonGroup>;

export const DefaultBtnGroup = (argTypes: IToggleButtonGroupProps): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Чугун</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

DefaultBtnGroup.storyName = 'Toggle Button по умолчанию';

export const BtnGroupTooltip = (argTypes: IToggleButtonGroupProps): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip
          render={<Typography variant="Caption-Medium">Сталь</Typography>}
          placement="left"
        >
          <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip render={<Typography variant="Caption-Medium">Цинк</Typography>}>
          <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip
          render={<Typography variant="Caption-Medium">Чугун</Typography>}
          placement="bottom"
        >
          <ToggleButtonGroup.Button.Label>Чугун</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Tooltip
          render={<Typography variant="Caption-Medium">Оксид меди</Typography>}
          placement="right"
        >
          <ToggleButtonGroup.Button.Label>Оксид меди</ToggleButtonGroup.Button.Label>
        </ToggleButtonGroup.Button.Tooltip>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

BtnGroupTooltip.storyName = 'Toggle Button с тултипами';

export const BtnGroupSizes = (argTypes: IToggleButtonGroupProps): ReactNode => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(EToggleButtonGroupSizeMapping).map((size: EToggleButtonGroupSizeMapping, index: number) => (
        <ToggleButtonGroup size={size} key={index} {...argTypes}>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
          <ToggleButtonGroup.Button onClick={action('onClick')}>
            <ToggleButtonGroup.Button.Label>Оксид меди</ToggleButtonGroup.Button.Label>
          </ToggleButtonGroup.Button>
        </ToggleButtonGroup>
      ))}
    </div>
  );
};

BtnGroupSizes.storyName = 'Toggle Button с разными размерами';

export const BtnGroupIcon = (argTypes: IToggleButtonGroupProps): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon />
        <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
        <ToggleButtonGroup.Button.Label>Оксид меди</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Icon>
          <IconStarOutlined24 />
        </ToggleButtonGroup.Button.Icon>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

BtnGroupIcon.storyName = 'Toggle Button с иконками';

export const BtnGroupIconBadge = (argTypes: IToggleButtonGroupProps): ReactNode => {
  return (
    <ToggleButtonGroup {...argTypes}>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Сталь</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>7</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
        <ToggleButtonGroup.Button.Label>Цинк</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge>5</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button onClick={action('onClick')}>
        <ToggleButtonGroup.Button.Label>Оксид меди</ToggleButtonGroup.Button.Label>
        <ToggleButtonGroup.Button.Badge variant="outline">{7 + 5}</ToggleButtonGroup.Button.Badge>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

BtnGroupIconBadge.storyName = 'Toggle Button с бейджами';
