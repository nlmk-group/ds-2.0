import React, { FC } from 'react';

import { Typography } from '@components/index';
import { IProgressBarProps } from '@components/ProgressBar/types';
import clsx from 'clsx';

import styles from './ProgressBar.module.scss';

/**
 * Компонент ProgressBar отображает прогресс в виде заполненной полосы.
 *
 * @param {object} props - Свойства компонента.
 * @param {number} props.percentage - Процент заполнения полосы прогресса.
 * @param {string} [props.label] - Метка, отображаемая внутри полосы прогресса.
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @returns {JSX.Element} - Компонент ProgressBar.
 */
const ProgressBar: FC<IProgressBarProps> = ({ percentage = 0, label, className }) => {
  const validPercentage = Math.min(Math.max(percentage, 0), 100);

  if (percentage < 0) console.error(`Percentage must be a number more or equal 0`);

  return (
    <div className={clsx(styles.root, className)} data-ui-progress-bar>
      <div
        className={styles['progress']}
        aria-valuenow={validPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressBar"
        data-ui-progress
      >
        <div className={styles['progress-fill']} style={{ width: `${validPercentage}%` }} data-ui-progress-bar-fill />
        {label && (
          <Typography className={styles['progress-label']} variant="Body1-Medium">
            {label}
          </Typography>
        )}
      </div>
      <Typography variant="Subheading3-Medium" className={styles['progress-percentage']}>
        {validPercentage}%
      </Typography>
    </div>
  );
};

export default ProgressBar;
