import React from 'react';

import clsx from 'clsx';

import { ITbodyProps } from './types';
import styles from './Tbody.module.scss';

const Tbody = ({ children, className, style, ...rest }: ITbodyProps) => {
  return (
    <tbody className={clsx(styles.tbody, className)} style={style} {...rest}>
      {children}
    </tbody>
  );
};

export default Tbody;
