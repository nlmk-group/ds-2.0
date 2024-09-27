import { FC, PropsWithChildren, ReactNode } from 'react';

import { ESizeMapping } from './enum';

/**
 * Размеры свайдера.
 * Перечисление всех возможных размеров для свайдера.
 */
export type TSize = `${ESizeMapping}`;

/**
 * Свойства компонента SlideToggle.
 * Интерфейс, описывающий свойства, принимаемые компонентом SlideToggle.
 */
export interface ISlideToggleProps extends PropsWithChildren {
  /** Заголовок свайдера */
  title: string | JSX.Element;
  /** Элемент после заголовка */
  after?: ReactNode;
  /** Показан ли контент */
  isShow: boolean;
  /** Функция, вызываемая при переключении */
  onToggle?: () => void;
  /** Дополнительные CSS классы */
  className?: string;
  /** Размер свайдера */
  size?: TSize;
  /** ID обёртки для иконки */
  iconWrapperId?: string;
  /** ID обёртки для заголовка */
  titleWrapperId?: string;
  /** ID обёртки для элемента после заголовка */
  afterWrapperId?: string;
  /** ID обёртки для контента */
  contentWrapperId?: string;
}

/**
 * Компонент SlideToggle для отображения развертывающегося контента.
 * Компонент SlideToggle принимает свойства, описанные в ISlideToggleProps, и отображает развертывающийся контент.
 */
declare const SlideToggle: FC<ISlideToggleProps>;

export default SlideToggle;
