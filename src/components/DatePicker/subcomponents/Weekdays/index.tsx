import React, { FC } from 'react';

import { locale } from '@components/DatePicker/helpers';
import { useLocale } from '@components/DatePicker/utils';

import styles from './Weekdays.module.scss';

export const Weekdays: FC = () => {
  const language = useLocale();

  return (
    <div className={styles.root}>
      {locale[language].weekdays.map(weekday => (
        <div className={styles.weekday} key={weekday}>
          {weekday}
        </div>
      ))}
    </div>
  );
};

export default Weekdays;
