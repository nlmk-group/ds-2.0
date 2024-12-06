import { CSSProperties, FC } from 'react';
import { EPictureNames, EPictureSizes } from './enums';

/**
 * Свойства компонента Illustration
 * @interface IIllustrationProps
 */
export interface IIllustrationProps {
  /**
   * Название иллюстрации
   * @type {EPictureNames}
   */
  name: EPictureNames;

  /**
   * Размер иллюстрации
   * @type {EPictureSizes}
   * @default EPictureSizes.Small
   */
  size?: EPictureSizes;

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

/**
 * Компонент Illustration отображает картинки для визуального объяснения проблемы,
 * информирования и улучшения общего впечатления от взаимодействия с приложением.
 */
declare const Illustration: FC<IIllustrationProps>;

export default Illustration;