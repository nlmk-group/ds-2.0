import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { clsx } from 'clsx';

import { ICard } from './types';

import styles from './Card.module.scss';

import { indicatorStatusMapping, orientationMapping } from './enums';

const Card: FC<ICard> = ({
  className,
  children,
  orientation = orientationMapping.vertical,
  indicatorSize = sizesMapping.s,
  indicatorStatus = indicatorStatusMapping.success
}) => {
  return (
    <div
      data-testid="CARD_WRAPPER"
      className={clsx(
        styles.wrapper,
        styles[`wrapper-${orientation}`],
        className,
        styles[`indicator-${orientation}`],
        styles[`indicator-${indicatorSize}`],
        styles[`indicator-${indicatorStatus}`]
      )}
    >
      {children}
    </div>
  );
};

export default Card;
