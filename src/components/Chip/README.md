# Chip Component
## Версия компонента v3.0

Chip компонент используется для отображения компактной информации с возможностью добавления метки и суффикса. Он поддерживает различные цвета, размеры и варианты отображения.

## Использование

```jsx
import { Chip, EChipColors } from '@nlmk/ds-2.0';

<Chip
  color={EChipColors.primary}
  size="m"
  variant="solid"
  label="Status"
  suffix="items"
>
  Active
</Chip>
```

## Props

| Prop      | Type             | Default             | Description              |
|-----------|------------------|---------------------|--------------------------|
| color     | EChipColors      | EChipColors.primary | Цвет чипа                |
| size      | ChipSize         | 'm'                 | Размер чипа              |
| variant   | variantsMapping  | 'solid'             | Вариант отображения чипа |
| label     | string           | -                   | Метка чипа               |
| children  | string \| number | -                   | Основной контент чипа    |
| suffix    | string           | -                   | Суффикс чипа             |
| className | string           | -                   | Дополнительный CSS класс |

## Цвета (EChipColors)

- `primary`
- `error`
- `success`
- `warning`

## Размеры (ChipSize)

- `m` - средний (по умолчанию)
- `s` - маленький

## Варианты отображения

- `solid` - сплошной фон
- `outline` - контурный

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.chip`: Основной класс чипа
- `.label`: Класс для метки
- `.suffix`: Класс для суффикса

Компонент Chip использует внутри себя компонент Badge для отображения основного контента.

Вы можете переопределить эти стили, передав собственный `className`.
