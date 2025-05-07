import React from 'react';

import { Box, Button, Stepper } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { EStepColor, EStepState } from '../subcomponents/Step/enums';
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
  stepName: 'Шаг 1',
  index: 0,
  showStep: true
};
export const StepperWithSteps = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const baseSteps = [
    { stepName: 'Шаг 1', index: 0 },
    { stepName: 'Шаг 2', index: 1 },
    { stepName: 'Шаг 3', index: 2 },
    { stepName: 'Шаг 4', index: 3 },
    { stepName: 'Шаг 5', index: 4, state: EStepState.disabled }
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

export const StepperWithSuccess = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isCompleted, setIsCompleted] = React.useState(false);

  const baseSteps = [
    { stepName: 'Шаг 1', index: 0 },
    { stepName: 'Шаг 2', index: 1 },
    { stepName: 'Шаг 3', index: 2 },
    { stepName: 'Шаг 4', index: 3 },
    { stepName: 'Шаг 5', index: 4 }
  ];

  const steps = baseSteps.map(step => ({
    ...step,
    state: step.index <= currentStep ? EStepState.filled : EStepState.notFilled,
    color: isCompleted ? EStepColor.success : EStepColor.brand
  }));

  const handleNext = () => {
    if (currentStep < baseSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };
  const handleReset = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };

  return (
    <div className={styles.wrapper}>
      <Box flexDirection="row" width="100%" gap={16}>
        {steps.map((step, i) => (
          <Stepper
            currentStep={currentStep}
            key={i}
            state={step.state}
            index={i}
            color={step.color}
            showStep={i !== steps.length - 1}
            stepName={step.stepName}
            onClick={() => setCurrentStep(i)}
          />
        ))}
      </Box>
      <Box pt={24} gap={8}>
        {!isCompleted ? (
          <Button onClick={handleNext}>
            {currentStep === baseSteps.length - 1 ? 'Завершить процесс' : 'Следующий шаг'}
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleReset}>
            Начать заново
          </Button>
        )}
      </Box>
    </div>
  );
};

StepperWithSuccess.storyName = 'Stepper с индикатором успеха';

export const StepperWithError = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const baseSteps = [
    { stepName: 'Шаг 1', index: 0 },
    { stepName: 'Шаг 2', index: 1 },
    { stepName: 'Шаг 3', index: 2 },
    { stepName: 'Шаг 4', index: 3, color: EStepColor.error },
    { stepName: 'Шаг 5', index: 4, state: EStepState.disabled }
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
            color={step.color}
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

StepperWithError.storyName = 'Stepper с индикатором ошибки';
