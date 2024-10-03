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

Компонент использует CSS-модули для стилизации. Вот основные классы, которые используются:

- `.wrapper`: Основной контейнер для разделителя.
- `.child-wrapper`: Контейнер для дополнительного контента.
- `.dashed`: Класс для пунктирной линии.

Чтобы применить пользовательские стили, вы можете передать свой className и переопределить необходимые стили.
