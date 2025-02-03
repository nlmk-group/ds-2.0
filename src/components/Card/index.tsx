import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { clsx } from 'clsx';

import { ICard } from './types';

import styles from './Card.module.scss';

import { EIndicatorStatusMapping, EOrientationMapping } from './enums';

/**
 * Компонент Card предоставляет настраиваемый макет карточки с различными вариантами ориентации и статусами индикатора.
 *
 * @param {object} props - Свойства компонента Card.
 * @param {OrientationType} [props.orientation=EOrientationMapping.vertical] - Ориентация карточки.
 * @param {IndicatorSizeType} [props.indicatorSize=sizesMapping.s] - Размер индикатора.
 * @param {IndicatorStatusType} [props.indicatorStatus=EIndicatorStatusMapping.default] - Статус индикатора.
 * @param {string} [props.className] - Дополнительный CSS-класс для карточки.
 * @param {ReactNode} props.children - Контент, который будет отображаться внутри карточки.
 * @returns {JSX.Element} - Компонент Card.
 */
const Card: FC<ICard> = ({
  children,
  orientation = EOrientationMapping.vertical,
  indicatorSize = sizesMapping.s,
  indicatorStatus = EIndicatorStatusMapping.default,
  className
}) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        styles[`wrapper-${orientation}`],
        styles[`indicator-${orientation}`],
        indicatorStatus !== EIndicatorStatusMapping.default && styles[`indicator-${indicatorSize}`],
        styles[`indicator-${indicatorStatus}`],
        styles[`card-${orientation}`],
        className
      )}
      data-ui-card
      data-testid="CARD_WRAPPER"
    >
      {children}
    </div>
  );
};

export default Card;
