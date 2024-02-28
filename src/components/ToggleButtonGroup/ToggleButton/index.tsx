import React, { createContext, MouseEvent, useContext } from 'react';

import { Divider } from '@components/index';
import { clsx } from 'clsx';

import styles from '../ToggleButtonGroup.module.scss';

import { statusMapping } from '../enums';
import { ButtonGroupProperties } from '../index';
import { IButtonGroupProperties, IButtonProperties, IToggleButtonGroupItemWithProps } from '../types';
import WithBadge from './WithBadge';
import WithIcon from './WithIcon';
import WithLabel from './WithLabel';
import WithTooltip from './WithTooltip';

export const ButtonProperties = createContext<IButtonProperties>({
  status: statusMapping.default,
  active: false
});

const ToggleButton = ({
  className,
  onClick = () => void 0,
  status,
  disabled = false,
  active = false,
  children,
  isLast = false,
  toggleButton = () => void 0
}: IToggleButtonGroupItemWithProps) => {
  // cannot use FC for props type
  // because Compound Pattern does not work with it
  const defaultProps = useContext<IButtonGroupProperties>(ButtonGroupProperties);
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    toggleButton();
    if (onClick !== null) onClick(e);
  };

  const btnProps = {
    status: status || defaultProps.status,
    active
  };

  return (
    <ButtonProperties.Provider value={btnProps}>
      <div
        onClick={handleClick}
        data-testid="TOGGLE_BUTTON"
        className={clsx(
          styles['btn-wrapper'],
          styles[`btn-size-${defaultProps.size}`],
          styles[`btn-${status || defaultProps.status}`],
          active && styles[`btn-active-${status || defaultProps.status}`],
          (defaultProps.disabled || disabled) && styles['btn-disabled'],
          className
        )}
      >
        {children}
      </div>
      {!isLast && (
        <div className={styles['divider-wrapper']}>
          <Divider type="vertical" className={styles[`divider-color-${status || defaultProps.status}`]} />
        </div>
      )}
    </ButtonProperties.Provider>
  );
};

export default ToggleButton;

ToggleButton.Label = WithLabel;
ToggleButton.Tooltip = WithTooltip;
ToggleButton.Icon = WithIcon;
ToggleButton.Badge = WithBadge;
