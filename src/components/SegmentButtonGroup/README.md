# SegmentButton

## Версия компонента v3.1

Компонент SegmentButton для переключения отображения, навигации.

## Использование

```jsx
import SegmentButton from './SegmentButton';

<SegmentButtonGroup>
  <SegmentButton onClick={() => alert('Печенье')}>Печенье</SegmentButton>
  <SegmentButton onClick={() => alert('Торты')}>Торты</SegmentButton>
  <SegmentButton onClick={() => alert('Конфеты')}>Конфеты</SegmentButton>
</SegmentButtonGroup>;
```

## Props

| Название  | Тип                           | По умолчанию | Описание                                       |
| --------- | ----------------------------- | ------------ | ---------------------------------------------- |
| size      | `${ESegmentButtonGroupSizes}` | 'm'          | Размер кнопок                                  |
| disabled  | boolean                       | 'false'      | Аттрибут disabled дял кнопок                   |
| children  | ReactNode                     | -            | Кнопки SegmentButton внутри SegmentButtonGroup |
| className | string                        | -            | Дополнительный CSS класс                       |

## Children Props

| Название     | Тип        | По умолчанию | Описание                                                     |
| ------------ | ---------- | ------------ | ------------------------------------------------------------ |
| buttonIndex  | number     | index        | Индекс кнопки в группе (для управления `active` состоянием). |
| children     | ReactNode  | -            | Контент кнопки (иконки, текст и т. д.).                      |
| onClick      | () => void | -            | Callback по клику                                            |
| toggleButton | () => void | -            | Внутренний callback для переключения активной кнопки         |
| className    | string     | -            | Дополнительный CSS класс                                     |

## Размеры SegmentButtonGroup и SegmentButton

- `ESegmentButtonGroupSizes.m`
- `ESegmentButtonGroupSizes.s`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент SegmentButtonGroup и вложенные элементы используют CSS модули для стилизации. Основные классы:

- `.segmentButtonGroup`: Контейнер группы сегментных кнопок.
- `.segmentButton`: Базовый стиль для отдельной кнопки в группе.
- `._active`: Класс для активной кнопки.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер группы сегментных кнопок */
[data-ui-segment-button-group] {
  /* Ваши стили */
}

/* Отдельная кнопка внутри группы */
[data-ui-segment-button] {
  /* Ваши стили */
}
```
