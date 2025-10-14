# SimpleSelect Component

## Версия компонента v3.2

SimpleSelect компонент используется для создания выпадающего списка с возможностью поиска и кастомизации.

## Использование

```jsx
import { OptionItem, SimpleSelect } from '@nlmk/ds-2.0';

<SimpleSelect
  value={selectedValue}
  onChange={handleChange}
  label="Выберите опцию"
  searchable
  style={{ marginTop: '20px' }}
  inputStyle={{ backgroundColor: '#f0f0f0' }}
  autoComplete="off"
  maxLength={50}
>
  <OptionItem value="option1">Option 1</OptionItem>
  <OptionItem value="option2">Option 2</OptionItem>
  <OptionItem value="option3">Option 3</OptionItem>
</SimpleSelect>;
```

## Props

### Специфичные пропсы SimpleSelect

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | string \| number | - | Значение селекта |
| onChange | function | - | Обработчик изменения значения селекта (получает value: string \| number) |
| children | ReactNode | - | Дочерние элементы селекта (OptionItem компоненты) |
| onFocus | function | - | Обработчик открытия меню (без event) |
| onBlur | function | - | Обработчик закрытия меню (без event) |
| portalContainerId | string | 'root' | ID рутового контейнера для создания портала |
| menuWidth | string | - | Ширина меню селекта |
| withPortal | boolean | false | Флаг рендеринга меню в портале |
| scrollingItems | number | 6 | Количество элементов до включения прокрутки |
| noOptionsText | string | 'Ничего не найдено' | Текст при отсутствии опций |
| searchable | boolean | false | Флаг доступности поиска |
| clearSearchOnSelect | boolean | false | Очищать поле поиска при выборе значения |
| displayValue | string | - | Кастомное отображаемое значение в инпуте (переопределяет автоматическое определение по label) |
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

## Стилизация

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.select`: Базовый класс для корневого элемента
- `.select__input`: Класс для инпута селекта
- `.input-helper`: Вспомогательный класс для стилизации инпута

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Инлайн стили

```jsx
<SimpleSelect
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
</SimpleSelect>
```

### 3. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер SimpleSelect */
[data-ui-select] {
  /* Ваши стили */
}

/* Поле ввода внутри SimpleSelect */
[data-ui-select-input] {
  /* Ваши стили */
}
/* Кнопка-стрелочка внутри поля SimpleSelect */
[data-ui-select-arrow-button] {
  /* Ваши стили */
}
/* Контейнер для выпадающего списка */
[data-ui-select-options] {
  /* Ваши стили */
}

/* Отдельный элемент внутри выпадающего списка */
[data-ui-select-option] {
  /* Ваши стили */
}
```
