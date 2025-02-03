# Chip Component

## Версия компонента v3.1

Chip компонент используется для отображения компактной информации с возможностью добавления метки и суффикса. Он поддерживает различные цвета, размеры и варианты отображения.

## Использование

```jsx
import { Chip, EChipColors } from '@nlmk/ds-2.0';

<Chip color={EChipColors.brand} size="m" variant="solid" label="Status" suffix="items">
  Active
</Chip>;
```

## Props

| Prop      | Type             | Default             | Description              |
| --------- | ---------------- | ------------------- | ------------------------ |
| color     | EChipColors      | EChipColors.primary | Цвет чипа                |
| size      | TChipSize        | 'm'                 | Размер чипа              |
| variant   | variantsMapping  | 'solid'             | Вариант отображения чипа |
| label     | string           | -                   | Метка чипа               |
| children  | string \| number | -                   | Основной контент чипа    |
| suffix    | string           | -                   | Суффикс чипа             |
| className | string           | -                   | Дополнительный CSS класс |
| style     | CSSProperties    | -                   | Inline стили             |

## Цвета (EChipColors)

- `brand` (по умолчанию)
- `error`
- `success`
- `warning`

## Размеры (TChipSize)

- `m` - средний (по умолчанию)
- `s` - маленький

## Варианты отображения

- `solid` - сплошной фон
- `outline` - контурный

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.chip`: Основной класс чипа
- `.label`: Класс для метки
- `.suffix`: Класс для суффикса

Компонент Chip использует внутри себя компонент Badge для отображения основного контента.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Стилизация корневого элемента */
[data-ui-chip] {
  /* Ваши стили */
}

/* Стилизация метки */
[data-ui-chip-label] {
  /* Ваши стили */
}

/* Стилизация контейнера контента */
[data-ui-chip-content] {
  /* Ваши стили */
}

/* Стилизация суффикса */
[data-ui-chip-suffix] {
  /* Ваши стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `style`:

```jsx
<Chip style={{ backgroundColor: '#custom-color', padding: '8px' }}>Content</Chip>
```
