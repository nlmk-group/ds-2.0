import React from 'react';

import { customInputColors } from '@components/declaration';
import { PseudoInput } from '@components/index';
import clsx from 'clsx';

import styles from '@components/_storybook/styles.module.scss';
import css from '../PseudoInput.module.scss';

import { IPseudoInputProps } from '../types';
import { argsTypes } from './argsTypes';

const labelText = 'Label';
const value = 'PseudoInput';

const withWrapper = (Story: any) => <div className={clsx(styles.wrapper, styles['flex-height'])}>{Story()}</div>;

export default {
  title: 'Components/PseudoInput/Stories',
  component: PseudoInput,
  argTypes: argsTypes,
  decorators: [withWrapper]
};

export const PseudoInputDefault = (argTypes: IPseudoInputProps): JSX.Element => (
  <PseudoInput {...argTypes} label={labelText}>
    {value}
  </PseudoInput>
);
PseudoInputDefault.storyName = 'PseudoInput по умолчанию';

export const PseudoInputSizeL = (): JSX.Element => (
  <div className={css.row}>
    <PseudoInput label={labelText} size="m">
      {value}
    </PseudoInput>
    <PseudoInput label={labelText} size="s">
      {value}
    </PseudoInput>
  </div>
);
PseudoInputSizeL.storyName = 'PseudoInput разных размеров';

export const PseudoInputError = (): JSX.Element => (
  <PseudoInput label={labelText} labelColor={customInputColors.error}>
    {value}
  </PseudoInput>
);
PseudoInputError.storyName = 'PseudoInput в состоянии error';

export const PseudoInputWarning = (): JSX.Element => (
  <PseudoInput label={labelText} labelColor={customInputColors.warning}>
    {value}
  </PseudoInput>
);
PseudoInputWarning.storyName = 'PseudoInput в состоянии warning';

export const PseudoInputSuccess = (): JSX.Element => (
  <PseudoInput label={labelText} labelColor={customInputColors.success}>
    {value}
  </PseudoInput>
);
PseudoInputSuccess.storyName = 'PseudoInput в состоянии success';
