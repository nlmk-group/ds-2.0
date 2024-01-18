import React, { FC, useContext } from 'react';
import { clsx } from 'clsx';
import styles from '../ToggleButtonGroup.module.scss'
import { Tooltip } from '@components/index';
import { ITooltipProps } from '@components/Tooltip/types';
import { IButtonGroupProperties } from '../types';
import { ButtonGroupProperties } from '..';

const WithTooltip: FC<ITooltipProps> = (props) => {
  const { placement } = props;
  const { size } = useContext<IButtonGroupProperties>(ButtonGroupProperties);
  const compactSideHelperStyle = size === 'compact'
    ? styles['tooltip-compact-side-helper']
    : styles['tooltip-side-helper'];

  const compactTopHelperStyle = (
    placement === 'top'
    || placement === undefined
  ) && size === 'compact';
  
  const compactBottomHelperStyle = placement === 'bottom' && size === 'compact';

  return (
    <Tooltip
      {...props}
      className={clsx(
        size === 'compact' && styles['tooltip-compact'],
        (placement === 'left' || placement === 'right') && compactSideHelperStyle,
        compactTopHelperStyle && styles['tooltip-compact-top-helper'],
        compactBottomHelperStyle && styles['tooltip-compact-bottom-helper']
      )}
    />
  )
}

export default WithTooltip