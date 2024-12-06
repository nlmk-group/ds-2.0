import { CSSProperties, FC, ImgHTMLAttributes, SVGProps } from 'react';

import { EPictureNames, EPictureSizes } from '@components/Illustrations/enums';

export interface IIllustrationProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Название иллюстрации
   * @type {EPictureNames}
   */
  name: `${EPictureNames}`;

  /**
   * Размер иллюстрации
   * @type {EPictureSizes}
   * @default EPictureSizes.Small
   */
  size?: `${EPictureSizes}`;

  /**
   * Дополнительный CSS-класс
   * @type {string}
   */
  className?: string;

  /**
   * Inline CSS-стили
   * @type {CSSProperties}
   */
  style?: CSSProperties;
}

type TPictureObjectType = {
  [name in EPictureNames]?: FC<SVGProps<SVGSVGElement>>;
};

export type TIllustrationPictureType = {
  [key in EPictureSizes]: TPictureObjectType;
};
