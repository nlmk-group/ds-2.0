import React, { FC, useContext } from 'react';

import { IconArticleOutlined24 } from '@components/.';
import { clsx } from 'clsx';

import styles from '../ToggleButton.module.scss';

import { ButtonGroupProperties } from '../..';
import { IButtonGroupPropertiesProps, IToggleButtonIconProps } from '../../types';

export const ToggleButtonIcon: FC<IToggleButtonIconProps> = ({ htmlColor = 'var(--steel-90)', children = null }) => {
  const { size } = useContext<IButtonGroupPropertiesProps>(ButtonGroupProperties);
  return (
    <div data-testid="ICON" className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}>
      {children !== null ? children : <IconArticleOutlined24 htmlColor={htmlColor} />}
    </div>
  );
};

export default ToggleButtonIcon;
