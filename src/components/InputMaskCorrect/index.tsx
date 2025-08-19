import React, { FC, ReactNode } from 'react';
import InputMask from 'react-input-mask';

import { TInputMaskCorrect } from '@components/InputMaskCorrect/types';

/**
 * Компонент для маскирования ввода в инпуте
 * @deprecated
 */
export const InputMaskCorrect: FC<TInputMaskCorrect> = ({ children, ...props }) => {
  const child = children as ReactNode;
  return <InputMask {...props}>{child}</InputMask>;
};

export default InputMaskCorrect;
