import React, { FC, useContext } from 'react';

import { IconArticleOutlined24 } from '@components/.';
import { clsx } from 'clsx';

import styles from '../ToggleButtonGroup.module.scss';

import { ButtonGroupProperties } from '..';
import { IButtonGroupProperties, IWithIcon } from '../types';

export const WithIcon: FC<IWithIcon> = ({ htmlColor = 'var(--text-grey-900)', children = null }) => {
  const { size } = useContext<IButtonGroupProperties>(ButtonGroupProperties);
  return (
    <div data-testid="ICON" className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}>
      {children !== null ? children : <IconArticleOutlined24 htmlColor={htmlColor} />}
    </div>
  );
};

export default WithIcon;
