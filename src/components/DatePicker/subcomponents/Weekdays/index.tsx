import React, { FC } from 'react';

import { locale } from '@components/DatePicker/helpers';
import { useLocale } from '@components/DatePicker/utils';
import { Typography } from '@components/.'
import styles from './Weekdays.module.scss';

export const Weekdays: FC = () => {
  const language = useLocale();

  return (
    <div className={styles.root}>
      {locale[language].weekdays.map(weekday => (
        <div className={styles.weekday} key={weekday}>
          <Typography variant='Body1-Medium'>
            {weekday}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Weekdays;
