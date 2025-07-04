import { CSSProperties, ReactNode } from 'react';

import { EButtonSize } from '@components/Button/enums';
import { IButtonProps } from '@components/Button/types';

/**
 * Интерфейс пропсов для компонента Dropdown
 */
export interface IDropdownProps extends IButtonProps {
  /** Элементы, которые будут отображаться в меню */
  children: ReactNode;
  /** Отключает кнопку и возможность открытия меню */
  disabled?: boolean;
  /** Дополнительный класс для кнопки */
  className?: string;
  /** Размер кнопки и меню */
  size?: `${EButtonSize}`;
  /** Содержимое кнопки */
  buttonChildren?: ReactNode;
  /** Кастомные стили меню */
  menuStyle?: CSSProperties;
  /** открытие выпадающего списка в портале */
  withPortal?: boolean;
  /** контейнер для портала */
  portalContainerId?: string;
  /** Кастомные стили кнопки */
  buttonStyle?: CSSProperties;
}
