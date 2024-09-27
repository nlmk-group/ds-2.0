import { FC, PropsWithChildren } from '../../../../../node_modules/react';
import { ETooltipPlacementType } from '../../../Tooltip/enums';

interface ICopyWrapper extends PropsWithChildren {
    copy: string;
    placement?: `${ETooltipPlacementType}`;
}
export declare const CopyWrapper: FC<ICopyWrapper>;
export {};
//# sourceMappingURL=index.d.ts.map