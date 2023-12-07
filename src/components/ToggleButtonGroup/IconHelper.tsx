import React, { FC } from 'react';
import { clsx } from 'clsx';
import { IIconHelper } from './types';
import styles from './ToggleButtonGroup.module.scss'
import Icon from '@components/Icon';

const IconHelper: FC<IIconHelper> = ({ size, customIcon }) => {
  return (
    <div
      data-testid='ICON'
      className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}
    >
      {customIcon || (
        <Icon
          name='IconArticle24'
          containerSize={24}
          htmlColor={'var(--text-grey-900)'}
        />
      )}
    </div>
  )
}

export default IconHelper