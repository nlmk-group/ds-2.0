import React, { FC } from 'react';

import Box from '@components/Box';
import { Divider } from '@components/index';
import clsx from 'clsx';

import { IStepperProps } from './types';

import styles from './Stepper.module.scss';

import { Step } from './subcomponents/Step';

/**
 * Компонент Stepper для отображения последовательности шагов.
 *
 * @param {IStepperProps} props
 * @param {number} props.currentStep - Текущий активный шаг.
 * @param {`${EStepState}`} props.state - Состояние шага.
 * @param {`${EStepColor}`} props.color - Цвет шага.
 * @param {string} props.stepName - Название шага.
 * @param {boolean} props.showStep - Показывать ли шаг.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {number} props.index - Индекс шага.
 * @param {(value: { state: `${EStepState}`, index: number }) => void} [props.onClick] - Обработчик клика по шагу.
 */
const Stepper: FC<IStepperProps> = ({
  state,
  stepName,
  showStep,
  className,
  index,
  currentStep,
  onClick,
  color = 'brand'
}) => {
  return (
    <Box
      className={clsx(className, state === 'disabled' && styles.disabled)}
      alignItems="center"
      justifyContent="center"
      gap={8}
      width={showStep ? '100%' : 'auto'}
      onClick={() => onClick && onClick({ state: state, index: index })}
      key={index}
      data-ui-stepper
    >
      <Step color={color} stepName={stepName} index={index} state={state} active={index === currentStep} data-ui-step />
      {showStep && <Divider className={styles['divider-line']} data-ui-stepper-divider />}
    </Box>
  );
};

export default Stepper;
