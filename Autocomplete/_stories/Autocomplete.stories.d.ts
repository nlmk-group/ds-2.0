import { default as React } from '../../../../node_modules/react';
import { IAutocompleteProps } from '../types';

declare const _default: {
    title: string;
    component: ({ selected, items, isLoading, nameGetter, renderLabel, disabled, onChange, onFullItemSelect, noSelectionItem, onDebouncedInputChange, size, showTooltip, readOnly, helperText, error, isFullWidth, withPortal, onLoadOptions, portalContainerId, canLoadMore, onLoadMore, onCreateItem, noResultsText, createItemText, totalText, showTotalCount, debounceDelay, showEmptyDropdown, className, style, ...inputProps }: IAutocompleteProps) => JSX.Element;
    argTypes: {
        selected: {
            description: string;
            control: {
                type: string;
            };
        };
        items: {
            description: string;
            control: {
                type: string;
            };
        };
        isLoading: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        nameGetter: {
            description: string;
            control: {
                type: string;
            };
        };
        renderLabel: {
            description: string;
            control: {
                type: string;
            };
        };
        onChange: {
            description: string;
            action: string;
        };
        onFullItemSelect: {
            description: string;
            action: string;
        };
        onDebouncedInputChange: {
            description: string;
        };
        disabled: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        helperText: {
            description: string;
            control: {
                type: string;
            };
        };
        error: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        noSelectionItem: {
            description: string;
            control: {
                type: string;
            };
        };
        showTooltip: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        readOnly: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        isFullWidth: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        placeholder: {
            description: string;
            control: {
                type: string;
            };
        };
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        withPortal: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        portalContainerId: {
            description: string;
            control: {
                type: string;
            };
        };
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            options: import('../enums').EAutocompleteSize[];
            control: {
                type: string;
            };
        };
        onLoadOptions: {
            description: string;
        };
        canLoadMore: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        onLoadMore: {
            description: string;
            action: string;
        };
        onCreateItem: {
            description: string;
            table: {
                defaultValue: {
                    summary: undefined;
                };
            };
        };
        noResultsText: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        createItemText: {
            description: string;
            control: {
                type: string;
            };
        };
        totalText: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        debounceDelay: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        showTotalCount: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        showEmptyDropdown: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        className: {
            description: string;
            control: {
                type: string;
            };
        };
        style: {
            description: string;
            control: {
                type: string;
            };
        };
    };
    decorators: ((Story: any) => React.JSX.Element)[];
    parameters: {
        actions: {
            argTypesRegex: string;
        };
    };
};
export default _default;
export declare const AutocompleteDefault: {
    (args: IAutocompleteProps): JSX.Element;
    storyName: string;
};
export declare const AutocompleteWithCustomTotalText: {
    (): JSX.Element;
    storyName: string;
};
export declare const AutocompleteWithAsyncLoading: {
    (): JSX.Element;
    storyName: string;
};
export declare const AutocompleteWithCreateItem: {
    (): JSX.Element;
    storyName: string;
};
export declare const AutocompleteWithCustomRendering: {
    (): JSX.Element;
    storyName: string;
};
export declare const AutocompleteWithPortal: {
    (): JSX.Element;
    storyName: string;
};
export declare const AutocompleteWithSizes: {
    (): JSX.Element;
    storyName: string;
};
//# sourceMappingURL=Autocomplete.stories.d.ts.map