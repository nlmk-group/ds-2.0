import { Dispatch, RefObject, SetStateAction } from 'react';

/**
 * Props Dropdown
 */
export interface IDropdownLegendProps {
  /**
   * Ref div Legend, для открытия Dropdown
   */
  divRef: RefObject<HTMLDivElement | null> | null;
  /**
   * Изменение state открытия Dropdown
   */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
