# DatePicker Component

## Версия компонента v3.2

DatePicker компонент используется для выбора даты и времени в различных форматах, включая выбор периода и смен.

## Использование

```jsx
import { DatePicker } from '@nlmk/ds-2.0';

<DatePicker type="date" value={selectedDate} onChange={handleDateChange} label="Выберите дату" />;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | number \| string | - | Уникальный идентификатор компонента |
| locale | string | 'ru' | Локаль для форматирования дат |
| level | TLevel | 'day' | Уровень детализации выбора даты |
| type | 'date' \| 'time' \| 'seconds' \| 'period' \| 'shift' | 'date' | Тип пикера |
| name | string | - | Имя поля для использования в формах |
| portalContainerId | string | 'root' | ID контейнера для портала |
| value | Date | - | Выбранное значение даты |
| valueFrom | Date | - | Начальная дата для периода |
| valueTo | Date | - | Конечная дата для периода |
| enabledFrom | Date | new Date(1900, 0, 1) | Минимальная доступная дата |
| enabledTo | Date | new Date(2100, 11, 31) | Максимальная доступная дата |
| enabledHourFrom | (date: Date) => TEnabledHour | - | Функция для определения минимального доступного часа |
| enabledHourTo | (date: Date) => TEnabledHour | - | Функция для определения максимального доступного часа |
| enabledMinuteFrom | (date: Date) => number | - | Функция для определения минимальной доступной минуты |
| enabledMinuteTo | (date: Date) => number | - | Функция для определения максимальной доступной минуты |
| onChange | function | - | Обработчик изменения даты |
| onPeriodChange | function | - | Обработчик изменения периода |
| onFocus | () => void | - | Обработчик получения фокуса инпутом или клика по иконке календаря |
| onBlur | () => void | - | Обработчик потери фокуса инпутом |
| onPanelChange | (date: Date) => void | - | Обработчик изменения панели календаря |
| onSelect | (date: Date) => void | - | Обработчик выбора конкретной даты в календаре |
| className | string | - | Дополнительный CSS класс |
| shiftFrom | number | - | Начальное значение смены для типа 'shift' |
| shiftTo | number | - | Конечное значение смены для типа 'shift' |
| shiftLength | 2 \| 3 | defaultShiftLength | Длина смены |
| disableChange | boolean | false | Флаг для отключения возможности изменения |
| disableChangesOnBlur | boolean | false | Флаг для отключения изменений при потере фокуса |
| withPortal | boolean | false | Флаг для рендеринга в портале |
| colored | boolean | false | Флаг для применения цветовых стилей |
| pseudo | boolean | false | Флаг для отображения псевдо-инпута |
| pseudoChildren | ReactNode | - | Содержимое для псевдо-инпута |
| isOpenOnFocus | boolean | false | Флаг для открытия пикера при фокусе |
| isHideYear | boolean | false | Флаг для скрытия года |
| withoutWeekdays | boolean | false | Флаг для отображения без дней недели |
| infiniteTimeScroll | boolean | false | Флаг для бесконечной прокрутки времени |
| reset | boolean | false | Флаг наличия кнопки сброса |
| onReset | () => void | - | Обработчик сброса значения |
| error | boolean | false | Флаг ошибки, влияет на стиль компонента |
| helperText | string | - | Вспомогательный текст под инпутом |

## Примечания

- Компонент поддерживает выбор даты, времени, периода и смен.
- Для кастомизации доступных часов и минут используйте функции `enabledHourFrom`, `enabledHourTo`, `enabledMinuteFrom`, `enabledMinuteTo`.
- При использовании типа 'period' или 'shift', используйте пропсы `valueFrom`, `valueTo` и `onPeriodChange`.

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.root`: Базовый класс для корневого элемента
- `.disabled`: Класс для отключенного состояния
- `.isOpen`: Класс для открытого состояния пикера

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Календарь */
[data-ui-datepicker-calendar-panel] {
  /* Ваши стили */
}
/* Поле ввода DatePicker */
[data-ui-datepicker-input] {
  /* Ваши стили */
}
```
