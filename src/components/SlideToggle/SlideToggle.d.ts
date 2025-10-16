import { FC, PropsWithChildren, ReactNode } from 'react';

import { ESizeMapping } from './enum';

/**
 * Размеры свайдера.
 * Перечисление всех возможных размеров для свайдера.
 */
export type TSize = `${ESizeMapping}`;

/**
 * Свойства компонента SlideToggle.
 * Базовый интерфейс, описывающий свойства, принимаемые компонентом SlideToggle.
 */
export interface ISlideToggleBaseProps extends PropsWithChildren {
  /** Заголовок свайдера */
  title: string | JSX.Element;
  /** Элемент после заголовка */
  after?: ReactNode;
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
 * Тип пересечения компонента SlideToogle.
 */
export type SlideToggleProps = 
ISlideToggleBaseProps & 
({ 
  /** Показать контент при монтировании SlideToogle */
  isOpenDefault: boolean;
  isShow?: never;
  onToggle?: never;
}
  /** Свойства дают возможность контролировать состояние извне */
 | { 
  isOpenDefault?: never;
  /** Показан ли контент */
  isShow: boolean;
  /** Функция, вызываемая при переключении */
  onToggle?: () => void;
})

/**
 * Компонент SlideToggle для отображения развертывающегося контента.
 * Компонент SlideToggle принимает свойства, описанные в ISlideToggleProps, и отображает развертывающийся контент.
 */
declare const SlideToggle: FC<ISlideToggleProps>;

export default SlideToggle;
