import React from 'react';

import { Input } from '@components/index';
import { TInputProps } from '@components/Input/types';

export const InputWithRef = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <Input {...props} inputRef={ref} />
));
