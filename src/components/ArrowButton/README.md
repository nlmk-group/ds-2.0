# ArrowButton Component

## Описание

Внутренний компонент для отображения стрелки в выпадающих списках (SimpleSelect, MultiSelect). Используется для индикации состояния открытия/закрытия меню.

**Примечание:** Этот компонент предназначен для внутреннего использования в компонентах SimpleSelect и MultiSelect. Не рекомендуется использовать напрямую в приложении.

## Использование

```jsx
import { ArrowButton } from '@nlmk/ds-2.0';

<ArrowButton isOpen={false} disabled={false} color="primary" toggleDropdown={e => console.log('clicked')} />;
```

## Props

| Prop           | Type                   | Default   | Description                                             |
| -------------- | ---------------------- | --------- | ------------------------------------------------------- |
| isOpen         | boolean                | -         | Флаг, указывающий открыт ли выпадающий список           |
| disabled       | boolean                | -         | Флаг блокировки кнопки                                  |
| color          | `${EArrowButtonColor}` | 'primary' | Цвет кнопки (error, success, warning, primary, default) |
| toggleDropdown | MouseEventHandler      | -         | Обработчик клика по кнопке                              |

## Примечания

- Компонент автоматически поворачивает стрелку на 180° при открытии меню
- Использует компонент Button и IconChevronArrowDownOutlined24 из дизайн-системы
- Применяет стили disabled при блокировке
