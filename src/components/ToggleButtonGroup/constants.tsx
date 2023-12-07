import Icon from '@components/Icon';
import { statusMapping } from './enums';
import { IBaseToggleButtonGroupItem } from './types';
import { action } from '@storybook/addon-actions';
import React from 'react';

export const threeButtonDefault: IBaseToggleButtonGroupItem[] = [
  {
    label: 'Печенье',
    action: action('onClick')
  },
  {
    label: 'Торты',
    action: action('onClick')
  },
  {
    label: 'Конфеты',
    action: action('onClick')
  }
];

export const threeButtonIcon: IBaseToggleButtonGroupItem[] = threeButtonDefault.map((elem: IBaseToggleButtonGroupItem) => ({
  ...elem,
  withIcon: true
}));

export const threeButtonIconBadge: IBaseToggleButtonGroupItem[] = threeButtonIcon.map((elem: IBaseToggleButtonGroupItem, index: number) => ({
  ...elem,
  actionNumber: (index+3).toString()
}));

export const fourButtonOptions: IBaseToggleButtonGroupItem[] = [
  {
    label: 'Печенье Oreo',
    withIcon: true,
    actionNumber: '5',
    disabled: true,
    customIcon: (
      <Icon
        name='IconStarBorder24'
        containerSize={24}
        htmlColor={'var(--primary-blue-600)'}
      />
    ),
    status: statusMapping.default,
    action: action('onClick')
  },
  {
    label: 'Торты и Пироженные',
    withIcon: true,
    actionNumber: '8',
    status: statusMapping.success,
    customIcon: (
      <Icon
        name='IconStarBorder24'
        containerSize={24}
        htmlColor={'var(--primary-blue-600)'}
      />
    ),
    action: action('onClick')
  },
  {
    label: 'Конфеты Milka',
    withIcon: true,
    actionNumber: '6',
    status: statusMapping.warning,
    customIcon: (
      <Icon
        name='IconStarBorder24'
        containerSize={24}
        htmlColor={'var(--primary-blue-600)'}
      />
    ),
    action: action('onClick')
  },
  {
    label: 'Конфеты M&M',
    withIcon: true,
    actionNumber: '6',
    status: statusMapping.error,
    customIcon: (
      <Icon
        name='IconStarBorder24'
        containerSize={24}
        htmlColor={'var(--primary-blue-600)'}
      />
    ),
    action: action('onClick')
  }
] 