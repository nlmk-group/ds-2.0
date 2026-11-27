import React from 'react';

import type { IIconUnitProps } from '@components/Icon/IconUnit/types';
import type { TIconProps } from '@components/Icon/types';
import { Box, Icon, IconUnit } from '@components/index';
import type { Meta } from '@storybook/react-vite';

import styles from './Icon.module.scss';

import { argsTypes, iconUnitArgsTypes } from './argsTypes';
import IconCatalog from './IconCatalog';

export default {
  title: 'Components/Icon/Stories',
  component: Icon,
  argTypes: argsTypes,
  decorators: [
    Story => (
      <div className={styles.story}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Icon>;

export const IconComponent = (argsTypes: TIconProps): JSX.Element => {
  return (
    <Box justifyContent="center">
      <Icon {...argsTypes} />
    </Box>
  );
};

IconComponent.storyName = 'Иконка · Icon';
IconComponent.args = {
  name: 'IconTuneControlOutlined32',
  color: 'primary',
  containerSize: 24
};

export const AllIcons = () => <IconCatalog />;
AllIcons.storyName = 'Все доступные иконки';
AllIcons.parameters = {
  controls: {
    disable: true
  }
};

export const IconUnitComponent = (argsTypes: IIconUnitProps): JSX.Element => {
  return (
    <Box justifyContent="center">
      <IconUnit {...argsTypes} />
    </Box>
  );
};
IconUnitComponent.storyName = 'Компонент иконки для единиц измерения';
IconUnitComponent.args = { unit: 'кг' };
IconUnitComponent.parameters = {
  controls: {
    include: Object.keys(iconUnitArgsTypes)
  }
};
IconUnitComponent.argTypes = iconUnitArgsTypes;
