# ToggleButtonGroup Component

## Версия компонента v3.1

ToggleButtonGroup - компонент для создания группы переключаемых кнопок с единым состоянием активности.

## Использование

```jsx
import { ToggleButtonGroup } from '@nlmk/ds-2.0';

<ToggleButtonGroup size="default" disabled={false}>
  <ToggleButtonGroup.Button>
    <ToggleButton.Label>Опция 1</ToggleButton.Label>
    <ToggleButtonGroup.Button.Badge>7</ToggleButtonGroup.Button.Badge>
  </ToggleButtonGroup.Button>
  <ToggleButtonGroup.Button>
    <ToggleButton.Icon>
      <SomeIcon />
    </ToggleButton.Icon>
    <ToggleButton.Label>Опция 2</ToggleButton.Label>
    <ToggleButtonGroup.Button.Badge>13</ToggleButtonGroup.Button.Badge>
  </ToggleButtonGroup.Button>
</ToggleButtonGroup>;
```

## Props

| Prop      | Type                               | Default   | Description                        |
| --------- | ---------------------------------- | --------- | ---------------------------------- |
| className | string                             | ''        | Дополнительный CSS класс           |
| size      | `${EToggleButtonGroupSizeMapping}` | 'default' | Размер кнопок в группе             |
| disabled  | boolean                            | false     | Флаг блокировки всей группы кнопок |
| children  | ReactNode                          | -         | Дочерние элементы (кнопки)         |
| style     | CSSProperties                      | -         | Inline стили                       |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.wrapper`: Базовый класс для группы кнопок
- `.button-wrapper`: Класс для кнопки
- `.button-default`: Базовые стили кнопки
- `.button-active-default`: Стили активной кнопки
- `.button-disabled`: Стили отключенной кнопки
- `.button-size-compact`: Стили для компактного размера
- `.button-size-default`: Стили для стандартного размера

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Стилизация корневого элемента */
[data-ui-toggle-button-group] {
  /* стили */
}
/* Стилизация дочерних кнопок */
[data-ui-toggle-button] {
  /* стили */
}
/* Стилизация разделителя кнопок */
[data-ui-toggle-button-divider] {
  /* стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `style`:

```jsx
<ToggleButtonGroup style={{ marginBottom: '16px' }} size="default">
  <ToggleButtonGroup.Button>
    <ToggleButton.Label>Опция 1</ToggleButton.Label>
    <ToggleButtonGroup.Button.Badge>7</ToggleButtonGroup.Button.Badge>
  </ToggleButtonGroup.Button>
  <ToggleButtonGroup.Button>
    <ToggleButton.Icon>
      <SomeIcon />
    </ToggleButton.Icon>
    <ToggleButton.Label>Опция 2</ToggleButton.Label>
    <ToggleButtonGroup.Button.Badge>13</ToggleButtonGroup.Button.Badge>
  </ToggleButtonGroup.Button>
</ToggleButtonGroup>
```

## Состояния

- **Обычное** - обычное состояние ToggleButton внутри ToggleButtonGroup
- **При наведении** - меняется цвет при наведении, срабатывает исчезновение правого разделителя
- **При нажатии** - меняется цвет при клике, срабатывает исчезновение правого разделителя
- **Отключенное** - ToggleButtonGroup становится неактивным
