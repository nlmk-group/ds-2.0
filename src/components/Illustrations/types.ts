import { CSSProperties, FC, ImgHTMLAttributes, SVGProps } from 'react';

import { EPictureNames, EPictureSizes } from '@components/Illustrations/enums';

export interface IIllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Название иллюстрации
   */
  name: `${EPictureNames}`;

  /**
   * Размер иллюстрации
   * @default EPictureSizes.Small
   */
  size?: `${EPictureSizes}`;

  /**
   * Дополнительный CSS-класс
   */
  className?: string;

  /**
   * Inline CSS-стили
   */
  style?: CSSProperties;
}

type TPictureObjectType = {
  [name in EPictureNames]?: FC<SVGProps<SVGSVGElement>>;
};

export type TIllustrationPictureType = {
  [key in EPictureSizes]: TPictureObjectType;
};
