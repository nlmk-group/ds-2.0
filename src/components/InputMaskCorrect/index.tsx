import React, { FC, ReactNode } from 'react';
import InputMask from 'react-input-mask';

import { TInputMaskCorrect } from '@components/InputMaskCorrect/types';

export const InputMaskCorrect: FC<TInputMaskCorrect> = ({ children, ...props }) => {
  const child = children as ReactNode;
  return <InputMask children={child} {...props} />;
};

export default InputMaskCorrect;
