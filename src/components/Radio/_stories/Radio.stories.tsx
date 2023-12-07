import React from 'react';

import Radio from '@components/Radio';
import { withDesign } from 'storybook-addon-designs';

import './Radio.stories.scss';

import { argsTypes } from './argsTypes';
import { IRadioProps } from '../types';

const withPadding = (Story: () => any) => (
  <div style={{ minHeight: 80 }}>{Story()}</div>
);

export default {
  title: 'Components/Radio/Stories',
  component: Radio,
  decorators: [withDesign, withPadding],
  argTypes: argsTypes
};

export const RadioChecked = (argTypes: IRadioProps): JSX.Element => {
  return (
    <div className="wrapper">
      <Radio {...argTypes}/>
    </div>
  );
};

RadioChecked.args = {
  checked: true
};

RadioChecked.storyName = 'Активный компонент';
