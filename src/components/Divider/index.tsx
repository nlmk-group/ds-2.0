import React, { FC } from 'react';

import { clsx } from 'clsx';

import { IDividerProps } from './types';

import styles from './Divider.module.scss';

import { EDividerOrientation, EDividerType } from './enums';
import HorizontalBorder from './subcomponents/HorizontalBorder';
import VerticalBorder from './subcomponents/VerticalBorder';

/**
 * Компонент Divider отображает разделитель с возможностью настройки типа, ориентации и стиля.
 *
 * @param {object} props - Свойства компонента Divider.
 * @param {ReactNode} [props.children] - Дополнительный контент, который будет отображаться между разделителями (только для горизонтальных разделителей).
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {boolean} [props.dashed=false] - Определяет, является ли линия пунктирной.
 * @param {`${EDividerOrientation}`} [props.orientation=EDividerOrientation.center] - Ориентация разделителя.
 * @param {number} [props.orientationSpace=0] - Пространство для ориентации.
 * @param {`${EDividerType}`} [props.type] - Тип разделителя.
 * @returns {JSX.Element} - Компонент Divider.
 */

const Divider: FC<IDividerProps> = ({
  children,
  className,
  dashed = false,
  orientation = EDividerOrientation.center,
  orientationSpace = 0,
  type
}) => {
  if (type === EDividerType.vertical) {
    return <VerticalBorder className={className} dashed={dashed} />;
  }

  if (!children) {
    return (
      <div data-testid="WRAPPER" className={clsx(className, styles.wrapper)}>
        <HorizontalBorder isSmall={orientation === EDividerOrientation.left} dashed={dashed} />
      </div>
    );
  }

  return (
    <div data-testid="WRAPPER" className={clsx(className, styles.wrapper)}>
      <HorizontalBorder
        isSmall={orientation === EDividerOrientation.left}
        dashed={dashed}
        orientationSpace={orientationSpace}
      />
      <div className={styles['child-wrapper']}>{children}</div>
      <HorizontalBorder
        isSmall={orientation === EDividerOrientation.right}
        dashed={dashed}
        orientationSpace={orientationSpace}
      />
    </div>
  );
};

export default Divider;
