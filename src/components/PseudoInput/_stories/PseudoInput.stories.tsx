import React from 'react';

import { customInputColors } from '@components/declaration';
import { IconInfoOutlined16, IconStackExpandedTriangleUp16, PseudoInput, Typography } from '@components/index';
import clsx from 'clsx';

import classNames from './PseudoInput.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { EPseudoInputSizes } from '../enums';
import { IPseudoInputProps } from '../types';
import { argsTypes } from './argsTypes';

const labelText = 'Label';
const value = 'PseudoInput';

const withWrapper = (Story: any) => <div className={clsx(styles.wrapper, styles['flex-height'])}>{<Story />}</div>;

export default {
  title: 'Components/PseudoInput/Stories',
  component: PseudoInput,
  argTypes: argsTypes,
  decorators: [withWrapper]
};

export const PseudoInputDefault = (argTypes: IPseudoInputProps): JSX.Element => (
  <PseudoInput {...argTypes}>{value}</PseudoInput>
);
PseudoInputDefault.args = {
  label: labelText
};
PseudoInputDefault.storyName = 'PseudoInput по умолчанию';

export const PseudoInputSizes = (): JSX.Element => {
  const sizes = Object.values(EPseudoInputSizes);

  return (
    <div className={classNames.row}>
      {sizes.map(size => (
        <div key={size} className={classNames.item}>
          <Typography variant="Body2" color="var(--steel-70)" className={classNames.description}>
            size="{size}"
          </Typography>
          <PseudoInput label={labelText} size={size}>
            {value}
          </PseudoInput>
        </div>
      ))}
    </div>
  );
};
PseudoInputSizes.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
PseudoInputSizes.storyName = 'PseudoInput разных размеров';

export const PseudoInputColors = (): JSX.Element => {
  const colors = Object.values(customInputColors);

  return (
    <div className={classNames.row}>
      {colors.map(color => (
        <div key={color} className={classNames.item}>
          <Typography variant="Body2" color="var(--steel-70)" className={classNames.description}>
            labelColor="{color}"
          </Typography>
          <PseudoInput label={labelText} labelColor={color}>
            {value}
          </PseudoInput>
        </div>
      ))}
    </div>
  );
};
PseudoInputColors.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
PseudoInputColors.storyName = 'PseudoInputStates в разных состояниях';

export const PseudoInputWithSuffixAndBadge = (): JSX.Element => {
  const suffix = (
    <div className={classNames.suffix}>
      kg
      <div style={{ display: 'flex', alignSelf: 'center' }}>
        <IconInfoOutlined16 />
      </div>
      <div style={{ display: 'flex', height: '22px', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', paddingTop: '2px' }}>
          <IconStackExpandedTriangleUp16 htmlColor="var(--spectrum-green-60)" />
        </div>
        <Typography variant="Body2Mono-Medium">2</Typography>
      </div>
    </div>
  );

  return (
    <PseudoInput label={labelText} badgeChildren={1234} suffix={suffix} className={classNames.custom}>
      {value}
    </PseudoInput>
  );
};
PseudoInputWithSuffixAndBadge.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
PseudoInputWithSuffixAndBadge.storyName = 'PseudoInput с суффиксом и компонентом Badge';
