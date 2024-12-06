# Компонент Illustration

## Версия компонента 3.0

Компонент Illustration отображает картинки для визуального объяснения проблемы,
информирования и улучшения общего впечатления от взаимодействия с приложением.

## Использование

```jsx
import React from 'react';
import { Illustration } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Illustration
      name="error404"
      size="extra-large"
      alt="Пример изображения"
      style={{ border: '1px solid red' }}
    />
  );
};
```

## Props

| Prop      | Type               | Default             | Description              |
|-----------|--------------------|---------------------|--------------------------|
| name      | `${EPictureNames}` | -                   | Название иллюстрации.    |
| size      | `${EPictureSizes}` | EPictureSizes.Small | Размер иллюстрации       |
| className | string             | -                   | Дополнительный CSS-класс |
| style     | CSSProperties      | -                   | Инлайн-стили             |

## Варианты названий иллюстраций

- `calendar`: Календарь
- `chemistry`: Химия
- `coffee`: Кофе
- `key`: Ключ

## Варианты размеров

- `small`: 0px
- `medium`: 4px
- `wide`: 8px
