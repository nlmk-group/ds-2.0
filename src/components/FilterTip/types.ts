import { EFilterTipSize } from '@components/FilterTip/enums';

export interface IFilterTipProps {
  /**
   * Идентификатор текущего FilterTip
   */
  id?: string;
  /**
   * Текст внутри FilterTip
   */
  text?: string;
  /**
   * Недоступен для выбора и удаления
   */
  isDisabled?: boolean;
  /**
   * Событие нажатия на иконку крестика
   */
  onDelete?: (id: string) => void;
  /**
   * Отображать FilterTip без кнопки удаления
   */
  isWithoutCancelIcon?: boolean;
  /**
   * Активен ли FilterTip
   */
  isActive?: boolean;
  /**
   * Событие нажатия на FilterTip
   */
  onClick?: (id: string) => void;
  /**
   * Размер FilterTip
   */
  size?: `${EFilterTipSize}`
  /**
   * Дополнительный CSS класс
   */
  className?: string;
}
