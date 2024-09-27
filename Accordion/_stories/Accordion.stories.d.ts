import { default as React } from '../../../../node_modules/react';
import { EIconsAccordion, ESizesAccordion, EVariantsAccordion } from '../enums';
import { IAccordionProps } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IAccordionProps>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: ESizesAccordion;
                };
                type: {
                    summary: string;
                };
            };
            options: ESizesAccordion[];
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: EVariantsAccordion;
                };
                type: {
                    summary: string;
                };
            };
            options: EVariantsAccordion[];
            control: {
                type: string;
            };
        };
        multipleExpanded: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        startIcon: {
            description: string;
            table: {
                defaultValue: {
                    summary: EIconsAccordion;
                };
                type: {
                    summary: string;
                };
            };
            options: EIconsAccordion[];
            control: {
                type: string;
            };
        };
        endIcon: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            options: EIconsAccordion[];
            control: {
                type: string;
            };
        };
        disabled: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const AccordionDefault: {
    (argTypes: IAccordionProps): JSX.Element;
    storyName: string;
    args: {
        items: import('../subcomponents/AccordionItem/types').TAccordionItem[];
    };
};
export declare const AccordionSizes: {
    (argTypes: IAccordionProps): JSX.Element;
    storyName: string;
};
export declare const AccordionIcons: {
    (argTypes: IAccordionProps): JSX.Element;
    storyName: string;
};
export declare const AccordionPaper: {
    (argTypes: IAccordionProps): JSX.Element;
    storyName: string;
    args: {
        items: import('../subcomponents/AccordionItem/types').TAccordionItem[];
    };
};
export declare const FoldedAccordion: {
    (argTypes: IAccordionProps): JSX.Element;
    storyName: string;
    args: {
        items: import('../subcomponents/AccordionItem/types').TAccordionItem[];
    };
};
export declare const MultiExpandedAccordion: {
    (argTypes: IAccordionProps): JSX.Element;
    storyName: string;
    args: {
        items: import('../subcomponents/AccordionItem/types').TAccordionItem[];
    };
};
//# sourceMappingURL=Accordion.stories.d.ts.map