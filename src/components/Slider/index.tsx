import React, { DetailedHTMLProps, InputHTMLAttributes, PropsWithChildren } from 'react';

import styles from './Slider.module.scss';

import { Control, Rail } from './subcomponents';

export const Slider = {
  Control,
  Rail,
  Wrapper: ({ children }: PropsWithChildren) => <div className={styles.wrapper}>{children}</div>,
  InputWrapper: ({ children }: PropsWithChildren) => <div className={styles['input-wrapper']}>{children}</div>,
  ControlWrapper: ({ children }: PropsWithChildren) => <div className={styles['control-wrapper']}>{children}</div>,
  Input: (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => (
    <input className={styles.input} type="range" {...props} />
  )
};
