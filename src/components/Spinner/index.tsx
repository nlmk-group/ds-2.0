import React, { FC } from 'react';

import { Typography } from '@components/index';

import { ISpinnerProps } from './types';

import styles from './Spinner.module.scss';

import { ESizesSpinner } from './enums';

const spinnerSizes: { [key: string]: number } = { '2xl': 96, 'xl': 56, 'l': 40, 'm': 32 };
/**
 * Компонент Spinner отображает индикатор загрузки с различными размерами, цветами и процентами выполнения.
 *
 * @param {object} props - Свойства компонента Spinner.
 * @param {`${ESizesSpinner}`} [props.size=ESizesSpinner.l] - Размер спиннера.
 * @param {string} [props.bgColor] - Цвет фона спиннера.
 * @param {string} [props.color] - Цвет индикатора загрузки.
 * @param {number} [props.percent=null] - Процент выполнения загрузки.
 * @param {React.ReactNode} [props.children] - Контент, отображаемый внутри спиннера (например, иконка).
 * @returns {JSX.Element} - Компонент Spinner.
 */

const Spinner: FC<ISpinnerProps> = ({
  size = ESizesSpinner.l,
  bgColor,
  color,
  percent = null,
  children,
  progressPercentage = 0.8 // По умолчанию 80%
}) => {
  const spinnerSize = typeof size === 'string' ? spinnerSizes[size] : size;
  const isIcon = children?.type.name.includes('Icon');

  const typographyOptionHelper = () => {
    switch (size) {
      case ESizesSpinner.xxl:
        return 'Heading3';
      case ESizesSpinner.xl:
        return 'Body1-Bold';
      case ESizesSpinner.m:
        return 'Additional-Bold';
      case ESizesSpinner.l:
      default:
        return 'Caption-Bold';
    }
  };

  // Константы и расчеты для SVG
  const viewBoxSize = 100;
  const desiredStrokeWidth = 4; // Желаемая толщина линии в пикселях
  const strokeWidth = (desiredStrokeWidth * viewBoxSize) / spinnerSize;
  const radius = (viewBoxSize - strokeWidth) / 2;
  const center = viewBoxSize / 2;

  // Расчет длины окружности для stroke-dasharray
  const circumference = 2 * Math.PI * radius;

  // Ограничиваем progressPercentage от 0 до 0.9
  const fillPercentage = Math.min(0.9, Math.max(0, progressPercentage));
  const dashArray = circumference;
  const dashOffset = circumference * (1 - fillPercentage);

  return (
    <div className={styles.spinner}>
      {percent !== null && (
        <div className={styles.percent} style={{ color }}>
          <Typography variant={typographyOptionHelper()}>{percent < 100 ? percent : 99}%</Typography>
        </div>
      )}
      {!children || !isIcon ? (
        <>
          <span
            className={styles.bg}
            style={{
              width: spinnerSize,
              height: spinnerSize,
              color: bgColor
            }}
            role="progressbar"
          >
            <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
              <circle cx={center} cy={center} r={radius} fill="none" strokeWidth={strokeWidth}></circle>
            </svg>
          </span>
          <span className={styles.loader} style={{ width: spinnerSize, height: spinnerSize, color }} role="progressbar">
            <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
              ></circle>
            </svg>
          </span>
        </>
      ) : (
        <div className={styles.icon}>{children}</div>
      )}
    </div>
  );
};

export default Spinner;
