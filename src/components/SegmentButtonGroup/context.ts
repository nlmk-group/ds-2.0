import { createContext } from 'react';

import { ESegmentButtonGroupSizes } from './enums';

interface ISegmentButtonGroupContextProps {
  disabled?: boolean;
  size?: `${ESegmentButtonGroupSizes}`;
}
export const SegmentButtonGroupContext = createContext<ISegmentButtonGroupContextProps>({
  disabled: false,
  size: ESegmentButtonGroupSizes.m
});
