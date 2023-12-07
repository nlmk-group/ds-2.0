import {Control, Rail} from './subcomponents';
import React, {PropsWithChildren, DetailedHTMLProps, InputHTMLAttributes} from 'react';

import styles from './Slider.module.scss';

export const Slider = {
  Control,
  Rail,
  Wrapper: ({children}: PropsWithChildren) => <div className={styles.wrapper}>{children}</div>,
  InputWrapper: ({children}: PropsWithChildren) => <div className={styles['input-wrapper']}>{children}</div>,
  ControlWrapper: ({children}: PropsWithChildren) => <div className={styles['control-wrapper']}>{children}</div>,
  Input: (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => <input
    className={styles.input} type='range' {...props} />
}