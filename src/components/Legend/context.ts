import { createContext } from 'react';

import { ILegendProps } from './types';

type ILegendContext = Omit<ILegendProps, 'label' | 'type' | 'tooltipText'>;

export const LegendContext = createContext<ILegendContext>({
  onColorChange: () => undefined,
  color: { default: 'initial' }
});
