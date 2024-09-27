import { CSSProperties, ReactNode } from 'react';

import { EButtonSizes } from '@components/Button/enums';

/**
 * Интерфейс пропсов для компонента Dropdown
 */
export interface IDropdownProps {
  /** Элементы, которые будут отображаться в меню */
  children: ReactNode;
  /** Отключает кнопку и возможность открытия меню */
  disabled?: boolean;
  /** Дополнительный класс для кнопки */
  className?: string;
  /** Размер кнопки и меню */
  size?: `${EButtonSizes}`;
  /** Содержимое кнопки */
  buttonChildren?: ReactNode;
  /** Кастомные стили меню */
  menuStyle?: CSSProperties;
  /** открытие выпадающего списка в портале */
  withPortal?: boolean;
  /** контейнер для портала */
  portalContainerId?: string;
}
