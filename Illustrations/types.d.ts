import { CSSProperties, FC, ImgHTMLAttributes, SVGProps } from '../../../node_modules/react';
import { EPictureNames, EPictureSizes } from './enums';

export interface IIllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
    name: `${EPictureNames}`;
    size?: `${EPictureSizes}`;
    className?: string;
    style?: CSSProperties;
}
type TPictureObjectType = {
    [name in EPictureNames]?: FC<SVGProps<SVGSVGElement>>;
};
export type TIllustrationPictureType = {
    [key in EPictureSizes]: TPictureObjectType;
};
export {};
//# sourceMappingURL=types.d.ts.map