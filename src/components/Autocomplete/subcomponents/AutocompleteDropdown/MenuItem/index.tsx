import React, { FC } from 'react';

import { ListItem, Typography } from '@components/index';

import { IMenuItem } from './types';

import styles from './MenuItem.module.scss';

/**
 * Служебная строка выпадающего списка Autocomplete — например, индикатор загрузки.
 * Обычные опции Autocomplete рендерит самостоятельно, поэтому здесь нет
 * ни чекбоксов, ни иконок, ни выбора.
 */
const MenuItem: FC<IMenuItem> = ({ label, value, disabled }) => (
  <ListItem key={value} style={{ cursor: disabled ? 'default' : 'pointer' }}>
    <div className={styles['text-container']}>
      <div>
        <Typography variant="Body1-Medium">{label}</Typography>
      </div>
    </div>
  </ListItem>
);

export default MenuItem;
