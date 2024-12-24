import { ILegendProps } from '../../types';

export interface ILegendViewProps extends Pick<ILegendProps, 'label'>, Partial<Pick<ILegendProps, 'color' | 'onColorChange'>> {
    isWithoutLabel?: boolean;
    isSelectable?: boolean;
    isActive?: boolean;
}
//# sourceMappingURL=types.d.ts.map