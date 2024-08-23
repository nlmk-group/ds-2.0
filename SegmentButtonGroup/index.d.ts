import { default as React } from '../../../node_modules/react';
import { ISegmentButtonGroup, ISegmentButtonProperties, ISegmentButtonProps } from './types';

export declare const SegmentButtonProperties: React.Context<ISegmentButtonProperties>;
export declare const SegmentButtonGroup: {
    ({ className, compact, color, disabled, children }: ISegmentButtonGroup): React.JSX.Element;
    Button: ({ className, disabled, active, color, children, onClick, toggleButton }: ISegmentButtonProps) => React.JSX.Element;
};
export default SegmentButtonGroup;
//# sourceMappingURL=index.d.ts.map