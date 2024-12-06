import React, { FC } from 'react';

import { IIllustrationProps } from './types';

import { ILLUSTRATION_PICTURES } from './constants';
import { EPictureNames, EPictureSizes } from './enums';

/**
 * Компонент Illustrations отображает картинки для визуального объяснения проблемы,
 * информирования и улучшения общего впечатление от взаимодействия с приложением.
 *
 * @param {IIllustrationProps} props - Свойства компонента
 * @param {EPictureNames} props.name - Название картинки
 * @param {EPictureSizes} [props.size=EPictureSizes.Small] - Размер картинки
 * @param {string} [props.className] - Дополнительный CSS-класс
 * @param {CSSProperties} [props.style] - Inline CSS-стили
 */
const Illustration: FC<IIllustrationProps> = ({ name, size = EPictureSizes.Small, className, style }) => {
  const Picture =
    ILLUSTRATION_PICTURES[size as `${EPictureSizes}`][name as `${EPictureNames}`] ||
    ILLUSTRATION_PICTURES[size as `${EPictureSizes}`][EPictureNames.NoImage];

  return (
    <div className={className} style={style} data-testid="ILLUSTRATION" data-ui-illustration>
      {Picture && <Picture />}
    </div>
  );
};

export default Illustration;
