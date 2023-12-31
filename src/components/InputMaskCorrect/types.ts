import { Props } from 'react-input-mask';

export type TInputMaskCorrect = Omit<Props, 'children'> & {
  children?: () => JSX.Element;
};
