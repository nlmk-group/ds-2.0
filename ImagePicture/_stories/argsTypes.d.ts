import { ImagePictureRadius, ImagePictureRatios } from '../enums';

export declare const argsTypes: {
    aspectRatio: {
        description: string;
        table: {
            defaultValue: {
                summary: ImagePictureRatios;
            };
            type: {
                summary: string;
            };
        };
        options: ImagePictureRatios[];
        control: {
            type: string;
        };
    };
    radius: {
        description: string;
        table: {
            defaultValue: {
                summary: ImagePictureRadius;
            };
            type: {
                summary: string;
            };
        };
        options: ImagePictureRadius[];
        control: {
            type: string;
        };
    };
    src: {
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
    zoom: {
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
//# sourceMappingURL=argsTypes.d.ts.map