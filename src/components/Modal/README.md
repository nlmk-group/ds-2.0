# Modal Component

## Версия компонента v3.0

Modal компонент используется для отображения модального окна, которое может содержать различные элементы интерфейса. Он поддерживает возможность перетаскивания и изменения размеров модального окна.

## Использование

```jsx
import { Modal } from '@nlmk/ds-2.0';

<Modal
  isOpen={true}
  onClose={() => console.log('Modal closed')}
  onEscapeDown={null}
  isDraggable={true}
  isResizable={true}
  disableBackdropClick={false}
>
  Ваше содержимое здесь
</Modal>;
```

## Props

| Prop                 | Type       | Default | Description                                          |
| -------------------- | ---------- | ------- | ---------------------------------------------------- |
| isOpen               | boolean    | -       | Состояние открытия/закрытия модального окна          |
| onClose              | () => void | -       | Функция для закрытия модального окна                 |
| children             | ReactNode  | -       | Содержимое модального окна                           |
| isDraggable          | boolean    | false   | Возможность перетаскивания модального окна           |
| isResizable          | boolean    | false   | Возможность изменения размеров модального окна       |
| onEscapeDown         | () => void | -       | Функция для обработки нажатия клавиши Escape         |
| className            | string     | -       | Дополнительные CSS классы для модального окна        |
| disableBackdropClick | boolean    | false   | Отключает закрытие модального окна по клику вне него |
