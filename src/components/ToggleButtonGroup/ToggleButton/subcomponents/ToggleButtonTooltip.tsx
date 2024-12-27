import React, { FC, useContext } from 'react';

import { Tooltip } from '@components/index';
import { ITooltipProps } from '@components/Tooltip/types';
import { clsx } from 'clsx';

import styles from '../ToggleButton.module.scss';

import { ButtonGroupProperties } from '../..';
import { IButtonGroupPropertiesProps } from '../../types';

const ToggleButtonTooltip: FC<ITooltipProps> = props => {
  const { placement } = props;
  const { size } = useContext<IButtonGroupPropertiesProps>(ButtonGroupProperties);
  const compactSideHelperStyle = size === 's' ? styles['tooltip-side-helper-s'] : styles['tooltip-side-helper'];

  const isTopPlacement = placement === 'top' || placement === undefined;
  const isBottomPlacement = placement === 'bottom';

  const compactTopHelperStyle = isTopPlacement && size === 's';
  const compactBottomHelperStyle = isBottomPlacement && size === 's';

  return (
    <Tooltip
      {...props}
      className={clsx(
        size === 's' && styles['tooltip-s'],
        (placement === 'left' || placement === 'right') && compactSideHelperStyle,
        compactTopHelperStyle && styles['tooltip-top-helper-s'],
        compactBottomHelperStyle && styles['tooltip-bottom-helper-s']
      )}
    />
  );
};

export default ToggleButtonTooltip;
