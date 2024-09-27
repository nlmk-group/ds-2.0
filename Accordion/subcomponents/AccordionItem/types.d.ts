import { ReactNode } from '../../../../../node_modules/react';
import { EIconsAccordion, ESizesAccordion, EVariantsAccordion } from '../../enums';

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
    startIcon?: `${EIconsAccordion}` | null;
    endIcon?: `${EIconsAccordion}` | null;
    size: `${ESizesAccordion}`;
    variant: `${EVariantsAccordion}`;
    children: ReactNode;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map