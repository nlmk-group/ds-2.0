import React, { FC } from 'react';

import { Typography } from '@components/.';
import { locale } from '@components/DatePicker/helpers';
import { useLocale } from '@components/DatePicker/utils';

import styles from './Weekdays.module.scss';

export const Weekdays: FC = () => {
  const language = useLocale();

  return (
    <div className={styles.root}>
      {locale[language].weekdays.map(weekday => (
        <div className={styles.weekday} key={weekday}>
          <Typography variant="Body1-Medium" color="var(--steel-70)">
            {weekday}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Weekdays;
