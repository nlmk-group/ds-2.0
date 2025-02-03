import React, { createContext, MouseEvent, useContext, useState } from 'react';

import { Divider } from '@components/index';
import { clsx } from 'clsx';

import styles from './ToggleButton.module.scss';

import { ButtonGroupProperties } from '../index';
import { IButtonGroupPropertiesProps, IButtonPropertiesProps, IToggleButtonGroupItemWithProps } from '../types';
import { ToggleButtonBadge, ToggleButtonIcon, ToggleButtonLabel, ToggleButtonTooltip } from './subcomponents';

export const ButtonProperties = createContext<IButtonPropertiesProps>({
  active: false
});

const ToggleButton = ({
  className,
  onClick = () => void 0,
  disabled = false,
  active = false,
  children,
  isLast = false,
  onToggle = () => void 0
}: IToggleButtonGroupItemWithProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultProps = useContext<IButtonGroupPropertiesProps>(ButtonGroupProperties);
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onToggle?.();
    onClick?.(e);
  };

  const buttonProps = {
    active
  };

  return (
    <ButtonProperties.Provider value={buttonProps}>
      <div
        onClick={handleClick}
        data-testid="TOGGLE_BUTTON"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={clsx(
          styles['button-wrapper'],
          styles['button-default'],
          styles[`button-size-${defaultProps.size}`],
          active && styles['button-active-default'],
          (defaultProps.disabled || disabled) && styles['button-disabled'],
          className
        )}
        data-ui-toggle-button
      >
        {children}
      </div>
      {!isLast && (
        <div
          className={clsx(styles['divider-wrapper'], (isHovered || active) && styles['divider-hidden'])}
          data-ui-toggle-button-divider
        >
          <Divider type="vertical" />
        </div>
      )}
    </ButtonProperties.Provider>
  );
};

export default ToggleButton;

ToggleButton.Label = ToggleButtonLabel;
ToggleButton.Tooltip = ToggleButtonTooltip;
ToggleButton.Icon = ToggleButtonIcon;
ToggleButton.Badge = ToggleButtonBadge;
