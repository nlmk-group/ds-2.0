import React, { FC, useContext, useMemo } from 'react';

import Typography from '@components/Typography';
import clsx from 'clsx';

import { ILegendViewProps } from './types';

import styles from '../../Legend.module.scss';

import { LegendContext } from '../../context';
import { isCustomElement } from '../../utils';
import { LegendCustomViewColor, LegendViewColor } from '../LegendViewColor';
import { COMPONENT_NAME, NO_VIEW_LABEL } from './constants';

const LegendView: FC<ILegendViewProps> = ({
  label,
  color: colorProps,
  onColorChange: onColorChangeProps,
  isWithoutLabel,
  isSelectable,
  isActive
}) => {
  const { color: colorContext, onColorChange: onColorChangeContext } = useContext(LegendContext);

  // В первую очередь берем переменные из props, во вторую из useContext
  const color = useMemo(() => colorProps ?? colorContext, [colorProps, colorContext]);
  const onColorChange = useMemo(
    () => onColorChangeProps ?? onColorChangeContext,
    [onColorChangeProps, onColorChangeContext]
  );

  const isCustomColorView = isCustomElement(color, 'viewColor');

  const Element = isCustomColorView ? LegendCustomViewColor : LegendViewColor;

  return (
    <div data-testid={COMPONENT_NAME} className={clsx(styles.container, COMPONENT_NAME)}>
      <Element
        onColorChange={onColorChange}
        color={color}
        isActive={isActive}
        isSelectable={isSelectable}
        data-ui-legend-view
      />
      {isWithoutLabel ? null : <Typography variant="Body1-Medium">{label ?? NO_VIEW_LABEL}</Typography>}
    </div>
  );
};

export default LegendView;
