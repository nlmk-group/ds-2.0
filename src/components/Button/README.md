# Button Component
## Версия компонента v3.1

Button компонент используется для создания кнопок различных стилей и размеров. Он поддерживает различные варианты отображения, включая иконки и бейджи.

## Использование

```jsx
import { Button, EButtonVariant, EButtonFill, EButtonSizes } from '@nlmk/ds-2.0';

<Button
  variant={EButtonVariant.primary}
  fill={EButtonFill.solid}
  size={EButtonSizes.m}
  startIcon={<Icon />}
  endBadge="New"
>
  Click me
</Button>
```

## Props

| Prop       | Type             | Default     | Description              |
|------------|------------------|-------------|--------------------------|
| children   | ReactNode        | 'undefined' | Содержимое кнопки        |
| variant    | EButtonVariant   | 'primary'   | Вариант стиля кнопки     |
| fill       | EButtonFill      | 'solid'     | Тип заливки кнопки       |
| startIcon  | ReactNode        | -           | Иконка в начале кнопки   |
| endIcon    | ReactNode        | -           | Иконка в конце кнопки    |
| startBadge | string \| number | -           | Бейдж в начале кнопки    |
| endBadge   | string \| number | -           | Бейдж в конце кнопки     |
| size       | EButtonSizes     | 'm'         | Размер кнопки            |
| iconButton | ReactNode        | -           | Иконка для кнопки-иконки |
| className  | string           | -           | Дополнительный CSS класс |

## Варианты (EButtonVariant)

- `primary`, `secondary`, `grey`, `black`, `success`, `warning`, `error`, `info`

## Типы заливки (EButtonFill)

- `solid`, `outline`, `clear`

## Размеры (EButtonSizes)

- `m` - средний (по умолчанию)
- `s` - маленький
- `xs` - очень маленький

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.button`: Базовый класс для всех кнопок
- `.{variant}-{fill}`: Классы для различных комбинаций вариантов и заливок
- `.compact`, `.extra-compact`: Классы для разных размеров
- `.icon-button`: Класс для кнопок-иконок
- `.label-wrapper`: Класс для обертки текста кнопки

Вы можете переопределить эти стили, передав собственный `className`.

## Примечание

Компонент Button расширяет стандартные атрибуты HTML-кнопки, поэтому вы можете использовать любые дополнительные атрибуты, такие как `disabled`, `type`, `onClick` и т.д.
