# Drawer Component

## Версия компонента v3.0

Drawer компонент используется для отображения боковой панели, которая может содержать различные элементы интерфейса. Он поддерживает возможность закрытия по нажатию на клавишу Escape и клику вне области панели.

## Использование

import { Drawer } from '@nlmk/ds-2.0';

```jsx
<Drawer
  isOpen={true}
  onClose={() => console.log('Drawer closed')}
  position="right"
  width="400px"
  height="100%"
  disableBackdropClick={false}
  isViewCloseButton={true}
  overlay={true}
>
  Ваше содержимое здесь
</Drawer>
```

## Props

| Prop                 | Type            | Default | Description                                       |
| -------------------- | --------------- | ------- | ------------------------------------------------- |
| isOpen               | boolean         | -       | Состояние открытия/закрытия панели                |
| onClose              | () => void      | -       | Функция для закрытия панели                       |
| position             | EDrawerPosition | right   | Позиция панели                                    |
| className            | string          | -       | Дополнительные CSS классы для панели              |
| overlayClassName     | string          | -       | Дополнительные CSS классы для оверлея             |
| children             | ReactNode       | -       | Содержимое панели                                 |
| width                | string          | '416px' | Ширина панели (если позиция 'left' или 'right')   |
| height               | string          | '416px' | Высота панели (если позиция 'top' или 'bottom')   |
| disableBackdropClick | boolean         | false   | Отключает закрытие панели по клику вне её области |
| isViewCloseButton    | boolean         | true    | Отображает кнопку закрытия                        |
| overlay              | boolean         | true    | Отображает оверлей                                |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.drawerOverlay`: оверлей Drawer.
- `.drawer`: основной контейнер всплывающего Drawer.
- `.drawerContent`: контейнер для контента внутри Drawer.
- `.close`: стили иконки закрытия Drawer

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер Drawer */
[data-ui-drawer] {
  /* Ваши стили */
}

/* Контейнер для содержимого Drawer */
[data-ui-drawer-content] {
  /* Ваши стили */
}

/* Кнопка закрытия Drawer */
[data-ui-drawer-close-button] {
  /* Ваши стили */
}
```
