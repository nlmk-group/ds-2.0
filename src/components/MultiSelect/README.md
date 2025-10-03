# MultiSelect Component

## Версия компонента v3.2

MultiSelect компонент используется для создания выпадающего списка с возможностью выбора нескольких значений и расширенным функционалом поиска и фильтрации.

## Использование

```jsx
import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';

<MultiSelect
  value={selectedValues}
  onChange={handleChange}
  label="Выберите опции"
  searchable
  showSelectAll
  clearSearchOnSelect
  style={{ marginTop: '20px' }}
  inputStyle={{ backgroundColor: '#f0f0f0' }}
>
  <OptionItem value="option1">Option 1</OptionItem>
  <OptionItem value="option2">Option 2</OptionItem>
  <OptionItem value="option3">Option 3</OptionItem>
</MultiSelect>;
```

## Props

### Специфичные пропсы MultiSelect

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | Array<string \| number> | [] | Массив выбранных значений |
| onChange | function | - | Обработчик изменения выбранных значений (получает value: Array<string \| number>) |
| children | ReactNode | - | Дочерние элементы селекта (OptionItem компоненты) |
| onFocus | function | - | Обработчик открытия меню (без event) |
| onBlur | function | - | Обработчик закрытия меню (без event) |
| portalContainerId | string | 'root' | ID рутового контейнера для создания портала |
| menuWidth | string | - | Ширина меню селекта |
| withPortal | boolean | false | Флаг рендеринга меню в портале |
| scrollingItems | number | 5 | Количество элементов до включения прокрутки |
| noOptionsText | string | 'Ничего не найдено' | Текст при отсутствии опций |
| searchable | boolean | false | Флаг доступности поиска |
| showSelectAll | boolean | false | Флаг отображения опции "Выбрать все" |
| selectAllLabel | string | 'Выбрать все' | Текст для опции "Выбрать все" |
| clearSearchOnSelect | boolean | false | Очищать поле поиска при выборе значения |
| valueSeparator | string | ', ' | Разделитель для отображения выбранных значений |
| allSelectedText | string | 'Все' | Текст при выборе всех элементов |
| maxVisibleTags | number | - | Максимальное число отображаемых тегов |
| showCounter | boolean | false | Отображение счетчика выбранных элементов |
| onEnterPress | function | - | Обработчик нажатия клавиши Enter |
| style | CSSProperties | - | Кастомные стили для контейнера селекта |
| inputStyle | CSSProperties | - | Кастомные стили для внутреннего Input |

### Наследуемые пропсы от Input

Компонент также принимает **все пропсы от Input компонента**:

- `id`, `name`, `label`, `placeholder` - основные атрибуты
- `disabled`, `helperText`, `pseudo` - состояния и режимы
- `size`, `color`, `colored` - внешний вид
- `reset`, `onReset` - функция сброса
- `inputRef` - реф для доступа к DOM-элементу
- `className` - дополнительный CSS класс для контейнера
- Все стандартные HTML атрибуты: `autoComplete`, `maxLength`, `pattern`, `required`, `tabIndex`, `title` и другие
- ARIA атрибуты для accessibility: `ariaLabel`, `ariaDescribedBy`, `role` и другие

## Примечания

- Компонент поддерживает кастомизацию через пропсы `color`, `size`, `style` и `inputStyle`.
- Для добавления опций используйте компонент `OptionItem` в качестве дочерних элементов.
- При использовании `withPortal={true}`, убедитесь, что в DOM существует элемент с id, указанным в `portalContainerId`.
- Используйте `style` для стилизации контейнера селекта и `inputStyle` для стилизации внутреннего поля ввода.
- Опция "Выбрать все" отображается как обычный `OptionItem` без дополнительных стилей.

## Стилизация

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.multiSelect`: Базовый класс для корневого элемента
- `.multiSelect__input`: Класс для инпута селекта
- `.input-helper`: Вспомогательный класс для стилизации инпута

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Инлайн стили

```jsx
<MultiSelect
  style={{
    margin: '20px 0',
    maxWidth: '300px'
  }}
  inputStyle={{
    backgroundColor: '#f5f5f5',
    border: '2px solid #ddd'
  }}
>
  {/* options */}
</MultiSelect>
```

### 3. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер MultiSelect */
[data-ui-multi-select] {
  /* Ваши стили */
}

/* Поле ввода внутри MultiSelect */
[data-ui-multi-select-input] {
  /* Ваши стили */
}
/* Кнопка-стрелочка внутри поля MultiSelect */
[data-ui-multi-select-arrow-button] {
  /* Ваши стили */
}
/* Контейнер для выпадающего списка */
[data-ui-multi-select-options] {
  /* Ваши стили */
}

/* Отдельный элемент внутри выпадающего списка */
[data-ui-multi-select-option] {
  /* Ваши стили */
}

/* Опция "Выбрать все" */
[data-ui-multi-select-select-all] {
  /* Ваши стили */
}

/* Контейнер с сообщением "Ничего не найдено" */
[data-ui-multi-select-no-options] {
  /* Ваши стили */
}
```
