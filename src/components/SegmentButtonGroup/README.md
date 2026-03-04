# SegmentButton

## Версия компонента v3.1

Компонент SegmentButton для переключения отображения, навигации.

## Использование

```jsx
import { SegmentButton, SegmentButtonGroup, Typography } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <SegmentButtonGroup {...argTypes}>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Сталь
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Цинк
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Чугун
        </Typography>
      </SegmentButton>
    </SegmentButtonGroup>
  );
};
```

## Props

| Название  | Тип                           | По умолчанию | Описание                                       |
| --------- | ----------------------------- | ------------ | ---------------------------------------------- |
| size      | `${ESegmentButtonGroupSizes}` | 'm'          | Размер кнопок                                  |
| disabled  | boolean                       | 'false'      | Аттрибут disabled дял кнопок                   |
| children  | ReactNode                     | -            | Кнопки SegmentButton внутри SegmentButtonGroup |
| className | string                        | -            | Дополнительный CSS класс                       |

## Children Props

| Название     | Тип        | По умолчанию | Описание                                                                   |
| ------------ | ---------- | ------------ | -------------------------------------------------------------------------- |
| active       | boolean    | false        | Флаг, указывающий, что кнопка должна быть активной по умолчанию            |
| disabled     | boolean    | false        | Флаг, отключающий конкретную кнопку (имеет приоритет над групповым disabled) |
| buttonIndex  | number     | index        | Индекс кнопки в группе (для управления `active` состоянием).               |
| children     | ReactNode  | -            | Контент кнопки (иконки, текст и т. д.).                                    |
| onClick      | () => void | -            | Callback по клику                                                          |
| toggleButton | () => void | -            | Внутренний callback для переключения активной кнопки                       |
| className    | string     | -            | Дополнительный CSS класс                                                   |

## Размеры SegmentButtonGroup и SegmentButton

- `ESegmentButtonGroupSizes.m`
- `ESegmentButtonGroupSizes.s`

## Важные примечания

- Только одна кнопка может быть активной одновременно
- Если передать проп `active` нескольким кнопкам, активной станет первая из них
- Проп `active` реагирует на изменения извне - если вы измените `active={true}` на `active={false}`, кнопка деактивируется
- Повторный клик на активную кнопку снимает её активное состояние
- Если `disabled={true}` установлен на группе, все кнопки будут отключены
- Если `disabled={true}` установлен на отдельной кнопке, отключится только она
- Индивидуальный `disabled` на кнопке имеет приоритет и работает независимо от группового `disabled`

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
