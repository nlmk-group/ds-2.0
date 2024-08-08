import { ReactNode } from '../../../../../node_modules/react';
import { iconsMapping, sizesMapping, variantsMapping } from '../../enums';

export type TAccordionItem = {
    id: string | number;
    title: string;
    content: ReactNode;
    disabled?: boolean;
    initiallyExpanded?: boolean;
};
export interface IAccordionItemProps extends Omit<TAccordionItem, 'content'> {
    isExpanded: boolean;
    onExpand: (id: TAccordionItem['id']) => void;
    startIcon?: `${iconsMapping}` | null;
    endIcon?: `${iconsMapping}` | null;
    size: `${sizesMapping}`;
    variant: `${variantsMapping}`;
    children: ReactNode;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map