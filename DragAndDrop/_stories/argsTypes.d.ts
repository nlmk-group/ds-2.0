import { sizesMapping } from '../../declaration';
import { EDnDFileType, EDnDStatusColor } from '../enums';

export declare const argsTypes: {
    className: {
        description: string;
        control: {
            type: string;
        };
    };
    children: {
        description: string;
        control: {
            type: string;
        };
    };
    title: {
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
    description: {
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
    btnLabel: {
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
    fileType: {
        description: string;
        table: {
            defaultValue: {
                summary: EDnDFileType;
            };
            type: {
                summary: string;
            };
        };
        options: EDnDFileType[];
        control: {
            type: string;
        };
    };
    statusColor: {
        description: string;
        table: {
            defaultValue: {
                summary: EDnDStatusColor;
            };
            type: {
                summary: string;
            };
        };
        options: EDnDStatusColor[];
        control: {
            type: string;
        };
    };
    size: {
        description: string;
        table: {
            defaultValue: {
                summary: sizesMapping;
            };
            type: {
                summary: string;
            };
        };
        options: sizesMapping[];
        control: {
            type: string;
        };
    };
    withIcon: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    customIcon: {
        description: string;
        control: {
            type: string;
        };
    };
    multiple: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    loading: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    percentUpload: {
        description: string;
        table: {
            defaultValue: {
                summary: number;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    smallText: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    smallIcon: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    disabled: {
        description: string;
        table: {
            defaultValue: {
                summary: boolean;
            };
            type: {
                summary: string;
            };
        };
        control: {
            type: string;
        };
    };
    accept: {
        description: string;
        control: {
            type: string;
        };
    };
    onUpload: {
        description: string;
    };
    cancelUpload: {
        description: string;
    };
};
export default argsTypes;
//# sourceMappingURL=argsTypes.d.ts.map