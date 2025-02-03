# Компонент Divider

## Версия компонент 3.0

Компонент Divider отображает разделитель с возможностью настройки типа, ориентации и стиля.

## Использование

```jsx
import React from 'react';
import Divider from '@your-package/divider';
const App = () => (
  <div>
    <Divider type="horizontal" orientation="center" dashed={true}>
      <span>Содержимое</span>
    </Divider>
    <Divider type="vertical" />
  </div>
);
export default App;
```

## Props

| Prop             | Type                     | Default | Description                              |
| ---------------- | ------------------------ | ------- | ---------------------------------------- |
| className        | string                   | -       | Дополнительный CSS-класс                 |
| dashed           | boolean                  | false   | Определяет, является ли линия пунктирной |
| orientation      | `${EDividerOrientation}` | center  | Ориентация разделителя                   |
| orientationSpace | number                   | 0       | Пространство для ориентации              |
| type             | `${ETypeDivider}`        | -       | Тип разделителя                          |
| children         | ReactNode                | -       | Отображающийся контент между Divider     |

## Ориентация Divider

- `EDividerOrientation.left`
- `EDividerOrientation.right`
- `EDividerOrientation.center`

## Тип Divider

- `EDividerType.horizontal`
- `EDividerType.vertical`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.wrapper`: Основной контейнер для разделителя.
- `.child-wrapper`: Контейнер для дополнительного контента.
- `.dashed`: Класс для пунктирной линии.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Обертка для горизонтального разделителя */
[data-ui-horizontal-divider] {
  /* Ваши стили */
}

/* Обертка для вертикального разделителя */
[data-ui-vertical-divider] {
  /* Ваши стили */
}

/* Линия горизонтального разделителя */
[data-ui-horizontal-divider-border] {
  /* Ваши стили */
}

/* Линия вертикального разделителя */
[data-ui-vertical-divider-border] {
  /* Ваши стили */
}
```
