# MultiSelect

MultiSelect - компонент, который позволяет выбирать несколько значений из выпадающего списка. Выбранные значения отображаются в поле ввода через указанный разделитель (по умолчанию - запятая).

## Использование

```jsx
import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';

<MultiSelect value={['option1', 'option2']} onChange={values => console.log(values)} label="Выберите опции">
  <OptionItem value="option1" label="Опция 1" />
  <OptionItem value="option2" label="Опция 2" />
  <OptionItem value="option3" label="Опция 3" />
</MultiSelect>;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | Array<string \| number> | [] | Массив выбранных значений |
| onChange | function | - | Обработчик изменения выбранных значений |
| id | string | - | Идентификатор компонента |
| name | string | - | Name определяет имя элемента, используется для ссылки на элемент |
| portalContainerId | string | 'root' | id рутового контейнера для создания портала |
| children | ReactNode | - | Дочерние элементы селекта (опции меню) |
| menuWidth | string | - | Ширина меню селекта |
| placeholder | string | - | Плейсхолдер для инпута селекта |
| label | string | - | Лейбл инпута в селекте |
| withPortal | boolean | false | Флаг, указывающий, должно ли меню рендериться в портале |
| disabled | boolean | false | Флаг доступности селекта |
| helperText | ReactNode | - | Вспомогательный текст под инпутом |
| pseudo | boolean | false | Свойство, позволяющее отображать компонент как PseudoInput |
| onBlur | function | - | Обработчик закрытия меню options |
| onFocus | function | - | Обработчик открытия меню options |
| color | customInputColors | default | Цвет компонента |
| size | TSize | sizesMappingInput.m | Размер компонента |
| scrollingItems | number | 5 | Количество элементов после которого включается прокрутка |
| noOptionsText | string | 'Ничего не найдено' | Текст, отображаемый когда нет доступных опций |
| searchable | boolean | false | Флаг, указывающий, доступен ли поиск |
| onEnterPress | function | - | Обработчик нажатия клавиши Enter |
| style | CSSProperties | - | Кастомные стили для компонента |
| className | string | - | Добавление самостоятельного CSS класса |
| colored | boolean | false | Условие применения стилей подсветки |
| reset | boolean | false | Булевое значение для показа иконки сброса |
| onReset | function | - | Callback, который будет вызван при клике по иконке сброса |
| valueSeparator | string | ', ' | Разделитель для отображения выбранных значений |
| allSelectedText | string | 'Все' | Текст при выборе всех элементов |
| selectAllLabel | string | 'Выбрать все' | Лейбл для кнопки "Выбрать все" |
| showSelectAll | boolean | false | Флаг отображения кнопки "Выбрать все" |

## Особенности

1. MultiSelect позволяет выбирать несколько значений, которые отображаются в виде списка через разделитель.
2. Компонент поддерживает опцию "Выбрать все" для быстрого выбора всех доступных опций.
3. Выбранные значения можно отображать в виде тегов с возможностью настройки максимального количества видимых тегов.
4. Поддерживает все стандартные возможности Input компонента, включая различные состояния, размеры и цвета.
5. Компонент может работать как в режиме с поиском, так и без него.
