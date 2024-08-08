import { default as React } from '../../../../node_modules/react';
import { ImagePictureRadius, ImagePictureRatios } from '../enums';
import { IImagePicture } from '../types';

declare const _default: {
    title: string;
    component: React.FC<IImagePicture>;
    decorators: ((Story: () => any) => React.JSX.Element)[];
    argTypes: {
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
};
export default _default;
export declare const ImagePictureDefault: {
    (argTypes: IImagePicture): JSX.Element;
    storyName: string;
    args: {
        src: string;
        alt: string;
    };
};
export declare const ImagePictureEmpty: {
    (argTypes: IImagePicture): JSX.Element;
    storyName: string;
    args: {
        src: string;
        alt: string;
    };
};
//# sourceMappingURL=ImagePicture.stories.d.ts.map