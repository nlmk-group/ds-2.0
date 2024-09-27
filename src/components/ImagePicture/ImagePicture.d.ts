import { FC, ImgHTMLAttributes } from 'react';
import { ImagePictureRadius, ImagePictureRatios } from './enums';

/**
 * Перечисление вариантов аспектного отношения для компонента ImagePicture.
 * @enum {string}
 */
export enum ImagePictureRatios {
  'ratio-1x1' = 'ratio-1x1',
  'ratio-4x3' = 'ratio-4x3',
  'ratio-3x4' = 'ratio-3x4',
  'ratio-16x9' = 'ratio-16x9'
}

/**
 * Перечисление вариантов радиуса закругления углов для компонента ImagePicture.
 * @enum {string}
 */
export enum ImagePictureRadius {
  'radius-none' = 'radius-none',
  'radius-4px' = 'radius-4px',
  'radius-8px' = 'radius-8px'
}

/**
 * Свойства компонента ImagePicture.
 * Интерфейс, описывающий свойства, принимаемые компонентом ImagePicture.
 */
export interface IImagePicture extends ImgHTMLAttributes<HTMLImageElement> {
  /** Аспектное отношение изображения */
  aspectRatio?: `${ImagePictureRatios}`;
  /** Радиус закругления углов изображения */
  radius?: `${ImagePictureRadius}`;
  /** Дополнительный CSS-класс */
  className?: string;
  /** Включает эффект зумирования при наведении */
  zoom?: boolean;
}

/**
 * Компонент ImagePicture отображает изображение с возможностью зумирования при наведении,
 * различными аспектными отношениями и радиусами закругления углов.
 */
declare const ImagePicture: FC<IImagePicture>;

export default ImagePicture;