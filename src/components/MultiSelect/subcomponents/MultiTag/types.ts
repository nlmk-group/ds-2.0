export interface IMultiTagProps {
    /** Текст тега */
    label: string;
    
    /** Обработчик удаления тега */
    onRemove: () => void;
    
    /** Дополнительный CSS класс */
    className?: string;
    
    /** Флаг блокировки тега */
    disabled?: boolean;
  }