import React, { useState } from 'react';

import { IconColor } from '@components/Icon/types';
import { Icon, Typography } from '@components/index';

import { ILegendColor } from '../types';

const containerColor: ILegendColor = {
  default: 'var(--spectrum-sky-20)',
  hover: 'var(--spectrum-sky-30)',
  active: 'var(--spectrum-sky-10)'
};

export const customLegendColors: ILegendColor[] = [
  {
    default: 'container',
    viewColor: ({ className, isActive, onColorChange, color }) => {
      const [isHover, setHover] = useState(false);

      const conditions = [
        { check: isHover, result: containerColor.hover },
        { check: isActive, result: containerColor.active }
      ];

      const backgroundColor = conditions.find(cond => cond.check)?.result ?? containerColor.default;

      return (
        <div
          onClick={() => onColorChange?.(color)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={className}
          style={{ backgroundColor, border: isActive ? '1px solid var(--steel-90)' : 'none', boxSizing: 'border-box' }}
        >
          <Typography color="var(--steel-90)" variant="Caption-Bold">
            PT-23
          </Typography>
        </div>
      );
    },
    editColor: ({ className, onClick, isDisabled, isOpen }) => {
      const [isHover, setHover] = useState(false);

      const conditions = [
        { check: isDisabled, result: containerColor.default },
        { check: isOpen, result: containerColor.active },
        { check: isHover, result: containerColor.hover }
      ];

      const backgroundColor = conditions.find(cond => cond.check)?.result ?? containerColor.default;

      return (
        <div
          onClick={onClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={className}
          style={{ backgroundColor, border: '1px solid var(--steel-90)', boxSizing: 'border-box' }}
        >
          <Typography color="var(--steel-90)" variant="Body2Mono-Bold">
            PT-23
          </Typography>
        </div>
      );
    }
  },
  {
    default: 'icon',
    viewColor: ({ className, isActive, onColorChange, color }) => {
      const [isHover, setHover] = useState(false);

      const conditions: { check: boolean | undefined; result: IconColor }[] = [
        { check: isHover, result: 'error' },
        { check: isActive, result: 'success' }
      ];

      const colorIcon: IconColor = conditions.find(cond => cond.check)?.result ?? 'primary';

      return (
        <div
          onClick={() => onColorChange?.(color)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={className}
        >
          <Icon color={colorIcon} name="IconSuccessOutlined24" />
        </div>
      );
    },
    editColor: ({ className, onClick, isOpen, isDisabled, ref }) => {
      const [isHover, setHover] = useState(false);

      const conditions: { check: boolean | undefined; result: IconColor }[] = [
        { check: isDisabled, result: 'primary' },
        { check: isOpen, result: 'success' },
        { check: isHover, result: 'error' }
      ];

      const colorIcon: IconColor = conditions.find(cond => cond.check)?.result ?? 'primary';

      return (
        <div
          ref={ref}
          onClick={isDisabled ? undefined : onClick}
          onMouseEnter={isDisabled ? undefined : () => setHover(true)}
          onMouseLeave={isDisabled ? undefined : () => setHover(false)}
          className={className}
        >
          <Icon color={colorIcon} name="IconSuccessOutlined24" />
        </div>
      );
    }
  }
];

export const colorList: ILegendColor[] = [
  { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' },
  { default: 'var(--spectrum-green-20)', hover: 'var(--spectrum-green-30)', active: 'var(--spectrum-green-10)' },
  { default: 'var(--spectrum-orange-20)', hover: 'var(--spectrum-orange-30)', active: 'var(--spectrum-orange-10)' },
  { default: 'var(--spectrum-yellow-20)', hover: 'var(--spectrum-yellow-30)', active: 'var(--spectrum-yellow-10)' },
  { default: 'var(--spectrum-salad-20)', hover: 'var(--spectrum-salad-30)', active: 'var(--spectrum-salad-10)' },
  { default: 'var(--spectrum-tiffany-20)', hover: 'var(--spectrum-tiffany-30)', active: 'var(--spectrum-tiffany-10)' },
  { default: 'var(--spectrum-coffee-20)', hover: 'var(--spectrum-coffee-30)', active: 'var(--spectrum-coffee-10)' },
  { default: 'var(--spectrum-rose-20)', hover: 'var(--spectrum-rose-30)', active: 'var(--spectrum-rose-10)' },
  { default: 'var(--spectrum-sky-20)', hover: 'var(--spectrum-sky-30)', active: 'var(--spectrum-sky-10)' }
];
