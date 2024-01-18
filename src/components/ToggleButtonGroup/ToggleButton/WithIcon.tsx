import React, { FC, useContext } from 'react';
import { clsx } from 'clsx';
import { IButtonGroupProperties, IWithIcon } from '../types';
import styles from '../ToggleButtonGroup.module.scss'
import Icon from '@components/Icon';
import { ButtonGroupProperties } from '..';

export const WithIcon: FC<IWithIcon> = ({
  name = 'IconArticle24',
  color = 'inherit',
  containerSize = 24,
  htmlColor = 'var(--text-grey-900)'
}) => {
  const { size } = useContext<IButtonGroupProperties>(ButtonGroupProperties);
  return (
    <div
      data-testid='ICON'
      className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}
    >
      <Icon
        name={name}
        containerSize={containerSize}
        color={color}
        htmlColor={htmlColor}
      />
    </div>
  )
}


export default WithIcon