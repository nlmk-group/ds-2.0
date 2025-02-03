import React, { FC, useContext } from 'react';

import Typography from '@components/Typography';
import clsx from 'clsx';

import { ILegendEditProps } from './types';

import styles from '../../Legend.module.scss';

import { LegendContext } from '../../context';
import { isCustomElement } from '../../utils';
import { LegendCustomEditColor, LegendEditColor } from '../LegendEditColor';
import { COMPONENT_NAME, NO_EDIT_LABEL } from './constants';

const LegendEdit: FC<ILegendEditProps> = ({ label }) => {
  const { color } = useContext(LegendContext);
  const isCustomColorEdit = isCustomElement(color, 'editColor');
  const Element = isCustomColorEdit ? LegendCustomEditColor : LegendEditColor;
  return (
    <div data-testid={COMPONENT_NAME} className={clsx(styles.container, COMPONENT_NAME)}>
      {<Element data-ui-legend-edit />}
      <Typography variant="Body1-Medium">{label ?? NO_EDIT_LABEL}</Typography>
    </div>
  );
};

export default LegendEdit;
