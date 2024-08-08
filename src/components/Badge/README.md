# Badge Component
## Версия компонента v3.0

Компонент Badge используется для отображения меток (badges), таких как лейблы, тэги, статусы и т.д. Обычно Badge используют внутри или в непосредственной близости от другого более крупного компонента интерфейса.

## Использование

```jsx
import { Badge, EBadgeColors, EBadgeSizes } from '@nlmk/ds-2.0';

<Badge
  color={EBadgeColors.primary}
  size={EBadgeSizes.m}
  variant="solid"
>
  New
</Badge>
```

## Props

| Prop      | Type             | Default              | Description                |
|-----------|------------------|----------------------|----------------------------|
| color     | EBadgeColors     | EBadgeColors.primary | Цвет бейджа                |
| size      | EBadgeSizes      | EBadgeSizes.m        | Размер бейджа              |
| variant   | variantsMapping  | 'solid'              | Вариант отображения бейджа |
| children  | string \| number | -                    | Контент бейджа             |
| className | string           | -                    | Дополнительный CSS класс   |

## Цвета (EBadgeColors)

- `primary` (по умолчанию)
- `secondary`
- `error`
- `success`
- `warning`
- `grey`
- `light-grey`
- `light-green`

## Размеры (EBadgeSizes)

- `l` - большой
- `m` - средний (по умолчанию)
- `s` - маленький
- `xs` - очень маленький

## Варианты отображения

- `solid` - сплошной фон (по умолчанию)
- `outline` - контурный

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.badge`: Основной класс бейджа
- `.{color}`: Классы для различных цветов
- `.compact`: Класс для размера 's'
- `.large`: Класс для размера 'l'
- `.xs`: Класс для размера 'xs'
- `.outline-{color}`: Классы для контурных вариантов

Вы можете переопределить эти стили, передав собственный `className`.
