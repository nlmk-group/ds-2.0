# Button Component

## Версия компонента v3.3

Button компонент используется для создания кнопок различных стилей и размеров. Он поддерживает различные варианты отображения, включая иконки и бейджи.

## Использование

```jsx
import { Button, EButtonColor, EButtonSize, EButtonVariant } from '@nlmk/ds-2.0';

<Button
  variant={EButtonVariant.primary}
  color={EButtonColor.brand}
  size={EButtonSize.m}
  startIcon={<Icon />}
  endBadge="New"
>
  Click me
</Button>;
```

## Props

| Prop       | Type             | Default                | Description              |
| ---------- | ---------------- | ---------------------- | ------------------------ |
| children   | ReactNode        | -                      | Содержимое кнопки        |
| variant    | EButtonVariant   | EButtonVariant.primary | Вариант стиля кнопки     |
| color      | EButtonColor     | EButtonColor.brand     | Цветовая схема кнопки    |
| size       | EButtonSize      | EButtonSize.m          | Размер кнопки            |
| startIcon  | ReactNode        | -                      | Иконка в начале кнопки   |
| endIcon    | ReactNode        | -                      | Иконка в конце кнопки    |
| startBadge | string \| number | -                      | Бейдж в начале кнопки    |
| endBadge   | string \| number | -                      | Бейдж в конце кнопки     |
| iconButton | ReactNode        | -                      | Иконка для кнопки-иконки |
| className  | string           | -                      | Дополнительный CSS класс |

## Варианты (EButtonVariant)

- `primary`
- `secondary`

## Цвета (EButtonColor)

- `brand` (по умолчанию)
- `grey`
- `ghost`
- `error`
- `warning`
- `success`

## Размеры (EButtonSize)

- `m` (по умолчанию)
- `s`
- `xs`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.button`: Основной класс кнопки
- `.icon-button`: Класс для кнопки-иконки
- `.typography`: Стили для текста кнопки
- `.icon`: Стили для иконок
- `.compact`, `.extra-compact`: Классы для разных размеров

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Стилизация кнопки */
[data-ui-button] {
  /* стили */
}

/* Стилизация текста кнопки */
[data-ui-button-text] {
  /* стили */
}

/* Стилизация иконки */
[data-ui-button-icon] {
  /* стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `style`:

```jsx
<Button style={{ marginBottom: '16px' }}>Styled button</Button>
```

## Состояния

- **Обычное**: Базовое состояние кнопки
- **Наведение**: При наведении меняется цвет фона
- **Активное**: При нажатии меняется цвет фона
- **Отключенное**: Кнопка становится неактивной (opacity: 0.5)
- **С иконкой**: Может содержать иконку в начале или конце
- **С бейджем**: Может содержать бейдж в начале или конце
- **Кнопка-иконка**: Отображается только иконка без текста
