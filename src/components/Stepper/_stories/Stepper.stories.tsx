import React from 'react';

import { Box, Stepper } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { EStepState, StepperColors } from '../subcomponents/Step/types';
import { IStepperProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Stepper/Stories',
  component: Stepper,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const StepperDefault = (argTypes: IStepperProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Stepper {...argTypes} />
    </div>
  );
};

StepperDefault.storyName = 'Stepper по умолчанию';
StepperDefault.args = {
  stepName: 'Step 1',
  index: 0,
  showStep: true
};

export const StepperWithSteps = () => {
  const mockSteps: Array<{ state: EStepState; stepName: string }> = [
    { state: EStepState.filled, stepName: 'Filled' },
    { state: EStepState.focused, stepName: 'Focused' },
    { state: EStepState.inProgress, stepName: 'In Progress' },
    { state: EStepState.notFilled, stepName: 'Not Filled' },
    { state: EStepState.disabled, stepName: 'Disabled' }
  ];

  return (
    <div className={styles.wrapper}>
      <Box flexDirection="row" width="100%" gap={16}>
        {mockSteps.map((step, i) => (
          <Stepper
            key={i}
            state={step.state}
            index={i}
            showStep={i !== mockSteps.length - 1}
            stepName={step.stepName}
          />
        ))}
      </Box>
    </div>
  );
};

StepperWithSteps.storyName = 'Stepper с несколькими шагами';
