# TimePicker Component

## Версия компонента v3.3

TimePicker компонент используется для выбора времени в различных форматах, включая выбор одного значения времени или периода.

## Использование

```jsx
import { TimePicker } from '@nlmk/ds-2.0';

<TimePicker type="time" value={selectedTime} onChange={handleTimeChange} label="Выберите время" />;
```

## Props

| Prop              | Type                                                           | Default | Description                                        |
| ----------------- | -------------------------------------------------------------- | ------- | -------------------------------------------------- |
| id                | number \| string                                               | -       | Уникальный идентификатор компонента                |
| type              | 'time' \| 'timeWithSeconds' \| 'period' \| 'periodWithSeconds' | 'time'  | Тип пикера времени                                 |
| name              | string                                                         | -       | Имя поля для использования в формах                |
| enabledHourFrom   | function                                                       | -       | Функция для определения начального доступного часа |
| enabledHourTo     | function                                                       | -       | Функция для определения конечного доступного часа  |
| enabledMinuteFrom | function                                                       | -       | Функция для определения начальной доступной минуты |
| enabledMinuteTo   | function                                                       | -       | Функция для определения конечной доступной минуты  |
| value             | Date                                                           | -       | Выбранное значение времени                         |
| onChange          | function                                                       | -       | Обработчик изменения выбранного времени            |
| valueFrom         | Date                                                           | -       | Начальное значение времени для периода             |
| valueTo           | Date                                                           | -       | Конечное значение времени для периода              |
| onPeriodChange    | function                                                       | -       | Обработчик изменения периода времени               |
| className         | string                                                         | -       | Дополнительный CSS класс                           |
| disabledPanel     | boolean                                                        | false   | Флаг блокировки панели выбора                      |
| withPortal        | boolean                                                        | false   | Флаг использования портала для рендеринга          |
| colored           | boolean                                                        | false   | Флаг применения цветовых стилей                    |
| pseudo            | boolean                                                        | false   | Флаг использования псевдо-инпута                   |
| isOpenOnFocus     | boolean                                                        | false   | Флаг открытия пикера при фокусе                    |
| withIcon          | boolean                                                        | true    | Флаг отображения иконки                            |
| withPicker        | boolean                                                        | true    | Флаг использования всплывающего пикера             |
| label             | string                                                         | ''      | Текст метки (label) для инпута                     |
| reset             | boolean                                                        | false   | Флаг наличия кнопки сброса                         |
| onReset           | () => void                                                     | -       | Обработчик сброса значения                         |
| error             | boolean                                                        | false   | Флаг отображения состояния ошибки                  |
| helperText        | ReactNode                                                      | -       | Вспомогательный текст под инпутом                  |
| disabled          | boolean                                                        | false   | Флаг отключения компонента                         |
| size              | 'm' \| 's' \| 'xs'                                             | 'm'     | Размер инпута (наследуется от Input)               |
| color             | 'default' \| 'primary' \| 'secondary'                          | 'default' | Цвет инпута (наследуется от Input)                |

## Примечания

- Компонент поддерживает выбор времени в различных форматах: обычное время, время с секундами, период времени.
- При использовании типа 'period' или 'periodWithSeconds', используйте props `valueFrom`, `valueTo` и `onPeriodChange`.
- Для кастомизации доступных часов и минут используйте функции `enabledHourFrom`, `enabledHourTo`, `enabledMinuteFrom`, `enabledMinuteTo`.
- TimePicker имеет частичную поддержку пропсов родительского компонента Input, включая color, size, helperText.

## Стилизация

Компонент можно стилизовать несколькими способами:

### 1. CSS классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.root`: Базовый класс компонента
- `.opened`: Класс для открытого состояния пикера
- `.disabled`: Класс для отключенного состояния

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Стилизация корневого элемента */
[data-ui-timepicker] {
  /* стили */
}
/* Стилизация инпута */
[data-ui-time-picker-input] {
  /* стили */
}
/* Стилизация панели выбора */
[data-ui-time-selector] {
  /* стили */
}
```