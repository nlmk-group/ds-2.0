import React, { useEffect, useRef, useState } from 'react';

import styles from './DateTime.module.scss';

export const getDate = (currentDate: Date): string => {
  const toUpperCase = (word: string): string => {
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    return firstLetterCap + remainingLetters;
  };
  const weekDay = currentDate.toLocaleString('ru-RU', { weekday: 'long' });
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}, ${toUpperCase(weekDay)}`;
};

export const getTime = (currentDate: Date): string => {
  const hh = currentDate.getHours();
  const mm = currentDate.getMinutes();

  return `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}`;
};

const DateTime = (): JSX.Element => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const refTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    refTimer.current = setInterval(() => setCurrentDate(new Date()), 60000);

    return () => {
      clearInterval(refTimer.current);
    };
  }, []);

  return (
    <div style={{ display: 'flex' }} data-testid="DATETIME_WRAPPER">
      <div data-testid="DATETIME_DATE" className={styles['date-wrapper']}>
        {getDate(currentDate)}
      </div>
      <div data-testid="DATETIME_TIME" className={styles['time-wrapper']}>
        {getTime(currentDate)}
      </div>
    </div>
  );
};

export default DateTime;
