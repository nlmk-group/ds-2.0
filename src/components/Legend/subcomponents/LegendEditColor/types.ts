import { Dispatch, RefObject, SetStateAction } from 'react';

/**
 * Props отображения Menu для выбора цвета
 */
export interface MenuProps {
  /**
   * divRef к которому привязать Dropdown
   */
  divRef: RefObject<HTMLDivElement> | null;
  /**
   * Изменение state открытия Dropdown
   */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
