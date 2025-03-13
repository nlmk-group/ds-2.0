import { createContext } from 'react';

import { ESegmentButtonGroupSizes } from './enums';

/**
 * Интерфейс для контекста `SegmentButtonGroupContext`.
 */
interface ISegmentButtonGroupContextProps {
  /**
   * Флаг, указывающий, отключена ли вся группа кнопок.
   */
  disabled?: boolean;

  /**
   * Размер кнопок в группе. По умолчанию `medium (m)`.
   */
  size?: `${ESegmentButtonGroupSizes}`;

  /**
   * ID активной (выбранной) кнопки. Если `null`, то активной кнопки нет.
   */
  activeId?: number | null;
}

/**
 * Контекст для управления состоянием группы кнопок `SegmentButtonGroup`.
 */
export const SegmentButtonGroupContext = createContext<ISegmentButtonGroupContextProps>({
  /**
   * Группа кнопок не отключена по умолчанию.
   */
  disabled: false,

  /**
   * По умолчанию используется размер `medium (m)`.
   */
  size: ESegmentButtonGroupSizes.m,

  /**
   * По умолчанию активной кнопки нет.
   */
  activeId: null
});
