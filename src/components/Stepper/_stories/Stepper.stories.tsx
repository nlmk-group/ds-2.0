import React from 'react';

import { Box, Stepper } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { EStepState } from '../subcomponents/Step/enums';
import { IStepperProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story />}</div>;

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
  const [currentStep, setCurrentStep] = React.useState(1);

  const baseSteps = [
    { stepName: 'Step 1', index: 0 },
    { stepName: 'Step 2', index: 1 },
    { stepName: 'Step 3', index: 2 },
    { stepName: 'Step 4', index: 3 },
    { stepName: 'Step 5', index: 4, state: EStepState.disabled }
  ];

  const steps = baseSteps.map(step => ({
    ...step,
    state:
      step.state === EStepState.disabled
        ? EStepState.disabled
        : step.index <= currentStep
        ? EStepState.filled
        : EStepState.notFilled
  }));

  return (
    <div className={styles.wrapper}>
      <Box flexDirection="row" width="100%" gap={16}>
        {steps.map((step, i) => (
          <Stepper
            currentStep={currentStep}
            key={i}
            state={step.state}
            index={i}
            showStep={i !== steps.length - 1}
            stepName={step.stepName}
            onClick={() => setCurrentStep(i)}
          />
        ))}
      </Box>
    </div>
  );
};

StepperWithSteps.storyName = 'Stepper с несколькими шагами';
