import React, { FC } from 'react';

import Box from '@components/Box';
import { Divider } from '@components/index';
import clsx from 'clsx';

import { Step } from './subcomponents/Step';

import { IStepperProps } from './types';

import styles from './Stepper.module.scss';

/**
 * Компонент Stepper для отображения последовательности шагов.
 *
 * @param {IStepperProps} props
 * @param {`${EStepState}`} props.state - Состояние шага.
 * @param {string} props.stepName - Название шага.
 * @param {boolean} props.showStep - Показывать ли шаг.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {number} props.index - Индекс шага.
 * @param {(value: { state: `${EStepState}`, index: number }) => void} [props.onClick] - Обработчик клика по шагу.
 */
const Stepper: FC<IStepperProps> = ({ state, stepName, showStep, className, index, onClick }) => {
  return (
    <Box
      className={clsx(className, state === 'disabled' && styles.disabled)}
      alignItems="center"
      justifyContent="center"
      gap={8}
      width={showStep ? '100%' : 'auto'}
      onClick={() => onClick && onClick({ state: state, index: index })}
      key={index}
    >
      <Step stepName={stepName} index={index} state={state} />
      {showStep && <Divider className={styles['divider-line']} />}
    </Box>
  );
};

export default Stepper;
