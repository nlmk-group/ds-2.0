import { FC } from 'react';

import { TIconName } from '@components/Icon/IconsDirectory/unionType';

import { EStatusColor, EStatusFill, EStatusSize } from './enums';

export { EStatusColor, EStatusFill, EStatusSize };

export interface IStatusProps {
  /**
   * Цвет статуса
   */
  color?: `${EStatusColor}`;

  /**
   * Размер статуса
   */
  size?: `${EStatusSize}`;

  /**
   * Вариант заливки фона
   */
  fill?: `${EStatusFill}`;

  /**
   * Текст статуса
   */
  children: string;

  /**
   * Иконка статуса
   */
  icon: TIconName | JSX.Element;

  /**
   * Дополнительный CSS-класс
   */
  className?: string;
}

declare const Status: FC<IStatusProps>;

export default Status;
