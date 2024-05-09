import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from '../../Slider.module.scss';
import { InputProps } from './types';

const InputSlider = ({  setHover, ...props }: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputProps) => {
  const onMouseOver = () => {
    setHover && setHover(true);
  }

  const onMouseLeave = () => {
    setHover && setHover(false);
  }

  return <input className={styles.input} type="range" {...props} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}/>;
}

export default InputSlider;
