import React from 'react';

import { customInputColors } from '@components/declaration';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import styles from './PseudoInput.module.scss';

import PseudoInput from '..';
import { IPseudoInputProps } from '../types';
import { argsTypes } from './argsTypes';

const labelText = 'Label';
const value = 'PseudoInput';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/PseudoInput/Stories',
  component: PseudoInput,
  argTypes: argsTypes,
  decorators: [withDesign, withWrapper]
} as Meta<typeof PseudoInput>;

export const PseudoInputDefault = (argTypes: IPseudoInputProps): JSX.Element => (
  <PseudoInput {...argTypes} label={labelText}>
    {value}
  </PseudoInput>
);
PseudoInputDefault.storyName = 'PseudoInput по умолчанию';

export const PseudoInputSizeL = (): JSX.Element => (
  <div className={styles.row}>
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
