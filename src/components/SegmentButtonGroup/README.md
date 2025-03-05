# SegmentButton

## Версия компонента v3.1

Компонент SegmentButton для переключения отображения, навигации.

## Использование

```jsx
import SegmentButton from './SegmentButton';

<SegmentButtonGroup>
  <SegmentButtonGroup.Button onClick={() => alert('Печенье')}>Печенье</SegmentButtonGroup.Button>
  <SegmentButtonGroup.Button onClick={() => alert('Торты')}>Торты</SegmentButtonGroup.Button>
  <SegmentButtonGroup.Button onClick={() => alert('Конфеты')}>Конфеты</SegmentButtonGroup.Button>
</SegmentButtonGroup>;
```

## Props

| Название  | Тип         | По умолчанию | Описание                     |
| --------- | ----------- | ------------ | ---------------------------- |
| color     | buttonColor | 'default'    | Цвет фона кнопок             |
| compact   | boolean     | 'false'      | Уменьшенные по высоте кнопки |
| disabled  | boolean     | 'false'      | Аттрибут disabled дял кнопок |
| children  | ReactNode   | -            | Содержимое Snackbar          |
| className | string      | -            | Дополнительный CSS класс     |

## Children Props

| Название     | Тип         | По умолчанию | Описание                                             |
| ------------ | ----------- | ------------ | ---------------------------------------------------- |
| color        | buttonColor | 'default'    | Цвет фона кнопки                                     |
| disabled     | boolean     | 'false'      | Аттрибут disabled дял кнопок                         |
| active       | boolean     | 'false'      | Активное состояние кнопки(выбрана)                   |
| onClick      | () => void  | -            | Callback по клику                                    |
| toggleButton | () => void  | -            | Внутренний callback для переключения активной кнопки |
| className    | string      | -            | Дополнительный CSS класс                             |

## Доступные цвета (buttonColor)

- default
- steel
- sky
- red
- yellow
- green

## Варианты отображения (variantsMapping)

- default
- compact

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент SegmentButtonGroup и вложенные элементы используют CSS модули для стилизации. Основные классы:

- `.segmentButtonGroup`: Контейнер группы сегментных кнопок.
- `.segmentButton`: Базовый стиль для отдельной кнопки в группе.
- `._active`: Класс для активной кнопки.
- `._compact`: Класс для компактного режима отображения кнопок.

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
