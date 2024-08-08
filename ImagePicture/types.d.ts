import { ImgHTMLAttributes } from '../../../node_modules/react';
import { ImagePictureRadius, ImagePictureRatios } from './enums';

export interface IImagePicture extends ImgHTMLAttributes<HTMLImageElement> {
    aspectRatio?: `${ImagePictureRatios}`;
    radius?: `${ImagePictureRadius}`;
    className?: string;
    zoom?: boolean;
}
//# sourceMappingURL=types.d.ts.map