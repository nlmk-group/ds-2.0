import { createContext } from 'react';

import { ESegmentButtonGroupSizes } from './enums';

interface ISegmentButtonGroupContextProps {
  disabled?: boolean;
  size?: `${ESegmentButtonGroupSizes}`;
  activeId?: number | null;
}
export const SegmentButtonGroupContext = createContext<ISegmentButtonGroupContextProps>({
  disabled: false,
  activeId: null,
  size: ESegmentButtonGroupSizes.m
});
