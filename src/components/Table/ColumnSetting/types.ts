export interface IColumnSettingProps {
  /**
   * Уникальный идентификатор колонки
   */
  id: string;

  /**
   * Заголовок колонки, отображаемый в списке
   */
  title: string;

  /**
   * Флаг видимости колонки
   */
  visible: boolean;

  /**
   * Позиция закрепления колонки (left - слева, right - справа, false - не закреплена)
   */
  pinned: 'left' | 'right' | false;

  /**
   * Флаг, указывающий, является ли колонка родительской с подколонками
   */
  hasChildren?: boolean;

  /**
   * Флаг, указывающий, раскрыта ли группа колонок
   */
  expanded?: boolean;

  /**
   * Флаг, указывающий, можно ли перемещать колонку
   */
  draggable?: boolean;

  /**
   * Флаг, указывающий, можно ли изменять настройки колонки
   */
  disabled?: boolean;

  /**
   * Флаг, указывающий, что колонка подсвечена
   */
  highlighted?: boolean;

  /**
   * Обработчик изменения видимости колонки
   */
  onVisibilityChange: (visible: boolean) => void;

  /**
   * Обработчик изменения закрепления колонки
   */
  onPinChange?: (pinned: 'left' | 'right' | false) => void;

  /**
   * Обработчик разворачивания/сворачивания группы колонок
   */
  onExpandChange?: () => void;

  /**
   * Пропсы для drag-and-drop
   */
  dragHandleProps?: React.DOMAttributes<HTMLDivElement>;

  /**
   * Дополнительный CSS класс
   */
  className?: string;
}
