# Компонент Filter

## Версия компонента 3.0

Компонент Filter используется для фильтрации данных по выбранному типу и значению. Позволяет пользователю выбрать тип фильтра (например, "содержит", "равно" и т.д.) и ввести или выбрать значение для фильтрации. Поддерживает выпадающие списки для выбора типа и значения, а также интеграцию с порталами для рендеринга меню вне текущей иерархии DOM.

Поддерживает два режима:

- `autocomplete` (по умолчанию) — одиночный выбор: клик по опции подставляет её в инпут и закрывает меню.
- `multiselect` — мультивыбор: каждая опция рендерится с чекбоксом, клик по опции toggles значение в `selectedValues`, меню остаётся открытым.

## Использование

### Режим autocomplete (по умолчанию)

```jsx
const filterTypeOptions = [
  { value: 'contains', label: 'Содержит', icon: <IconSelectionContains24 /> },
  { value: 'equals', label: 'Равно', icon: <IconSelectionEquals24 /> }
];
const filterValueOptions = [
  { value: 'apple', label: 'Яблоко' },
  { value: 'banana', label: 'Банан' }
];

<Filter
  filterTypeOptions={filterTypeOptions}
  filterValueOptions={filterValueOptions}
  defaultValue=""
  defaultFilterType="contains"
  placeholder="Введите значение"
  onFilterChange={(value, filterType) => {
    // обработка фильтрации
  }}
/>;
```

### Режим multiselect

```jsx
const [selected, setSelected] = useState<string[]>([]);

<Filter
  mode="multiselect"
  filterTypeOptions={filterTypeOptions}
  filterValueOptions={filterValueOptions}
  selectedValues={selected}
  onSelectedValuesChange={setSelected}
  placeholder="Фильтр"
/>
```

Uncontrolled-вариант:

```jsx
<Filter
  mode="multiselect"
  filterTypeOptions={filterTypeOptions}
  filterValueOptions={filterValueOptions}
  defaultSelectedValues={['apple']}
  onSelectedValuesChange={values => {
    // реакция на изменение набора выбранных значений
  }}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| filterTypeOptions | `IFilterTypeOption[]` | — | Массив опций для "типов фильтра" (при клике на иконку) |
| filterValueOptions | `IFilterValueOption[]` | — | Массив опций для "значений" (при фокусе на инпут) |
| onFilterChange | `(value: string \| undefined, filterType: string) => void` | — | Вызывается при изменении value или типа. В `multiselect` параметр `value` всегда `undefined`. |
| defaultValue | `string` | `""` | Начальное текстовое значение в инпуте |
| defaultFilterType | `string` | первый из options | Начальный тип фильтра (если не задан, берётся первый из filterTypeOptions) |
| withPortal | `boolean` | `false` | Рендерить меню через портал |
| portalContainerId | `string` | `"root"` | ID DOM-элемента для портала |
| mode | `'autocomplete' \| 'multiselect'` | `'autocomplete'` | Режим работы фильтра |
| selectedValues | `string[]` | — | **Controlled**: массив выбранных значений (для `multiselect`) |
| defaultSelectedValues | `string[]` | `[]` | **Uncontrolled**: начальный массив выбранных значений (для `multiselect`) |
| onSelectedValuesChange | `(values: string[]) => void` | — | Коллбэк при toggle значения в режиме `multiselect` |
| className | `string` | — | Кастомный CSS-класс для корневого элемента |
| ...inputProps | `InputHTMLAttributes<HTMLInputElement>` (кроме defaultValue, onChange) | — | Любые остальные props для input |

### Типы опций

```ts
interface IFilterTypeOption {
  value: string;
  label: string;
  icon: ReactNode;
  disabled?: boolean;
}

interface IFilterValueOption {
  value: string;
  label: string;
  disabled?: boolean;
}

type TFilterMode = 'autocomplete' | 'multiselect';
```

## Варианты использования

### С порталом

```jsx
<Filter
  filterTypeOptions={filterTypeOptions}
  filterValueOptions={filterValueOptions}
  withPortal
  portalContainerId="custom-portal-root"
  onFilterChange={...}
/>
```

### Фильтрация в таблице (autocomplete)

```jsx
<Top>
  <Filter
    defaultValue=""
    defaultFilterType="contains"
    filterTypeOptions={tableFilterOperations}
    filterValueOptions={getSelectOptionsForColumn(header.column.id)}
    placeholder="Поиск ..."
    withPortal
    onFilterChange={(value, filterType) => {
      // логика фильтрации столбца
    }}
  />
</Top>
```

### Фильтрация в таблице (multiselect)

```jsx
const [selected, setSelected] = useState<string[]>([]);

<Top>
  <Filter
    mode="multiselect"
    filterTypeOptions={tableFilterOperations}
    filterValueOptions={getSelectOptionsForColumn(header.column.id)}
    selectedValues={selected}
    onSelectedValuesChange={next => {
      setSelected(next);
      header.column.setFilterValue(next.length ? { type: 'in', value: next } : undefined);
    }}
    placeholder="Фильтр"
    withPortal
  />
</Top>
```

## Особенности режима multiselect

- Меню остаётся открытым при клике по опции (до клика снаружи).
- При наличии выбранных значений и пустом поле поиска в инпуте отображается счётчик «Выбрано: N».
- Иконка сброса (крестик) отображается, пока есть хотя бы одно выбранное значение (даже если поле поиска пусто).
- Поиск в инпуте фильтрует список опций и в `multiselect` (работает одинаково с `autocomplete`). При вводе текста счётчик скрывается.
- Сброс очищает и текст поиска, и `selectedValues`.
- `onFilterChange` в этом режиме вызывается только при смене типа фильтра; параметр `value` всегда `undefined`.
- Клавиша `Enter` в инпуте — no-op (выбор осуществляется только чекбоксами).

## Стилизация

- Для стилизации используется CSS-модуль `Filter.module.scss`.
- Можно передать свой класс через prop `className`.
- Для кастомизации иконки типа фильтра используйте свойство `icon` в объекте опции типа фильтра.
- В `multiselect` выбранная строка меню подсвечена классом `.selected` (`var(--brand-sapphire-10)`).

## Особенности

- Компонент поддерживает сброс значения (иконка сброса появляется при наличии текста в инпуте).
- Меню выбора типа и значения реализовано с помощью `@floating-ui/react` и может быть отрисовано через портал.
- Поддерживаются все стандартные props для `<input>`, кроме `defaultValue` и `onChange` (используйте `defaultValue` и `onFilterChange` компонента).
- Для работы с типами фильтра и значениями рекомендуется использовать мемоизацию опций для оптимизации производительности.

---

# Sub-компонент: FilterInput

`FilterInput` — это внутренний компонент, используемый в составе Filter для отображения текстового поля с поддержкой иконки, label и сброса значения.

## Использование

```jsx
<FilterInput
  value={value}
  label="Поиск"
  icon={<IconSearch24 />}
  reset
  onReset={() => setValue('')}
  placeholder="Введите текст"
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | `string` | — | Значение input |
| label | `string` | — | Лейбл для поля |
| icon | `ReactNode` | — | Кастомная иконка слева |
| reset | `boolean` | `false` | Показывать иконку сброса |
| onReset | `() => void` | — | Коллбэк для сброса значения |
| inputRef | `Ref<HTMLInputElement>` | — | Внешний ref для input |
| forceReset | `boolean` | `false` | Принудительно показать иконку сброса, даже если `value` пустое |
| ...props | `InputHTMLAttributes<HTMLInputElement>` (кроме ref) | — | Любые остальные props для input |

## Стилизация

- Основные классы: `filterInput`, `textfield`, `label`, `icon`, `reset` (см. `FilterInput.module.scss`).
- Для стилизации используйте prop `className` или переопределяйте CSS-переменные.
- Иконка сброса появляется только если `reset={true}` и есть значение.

## Особенности

- Поддерживает label, который анимируется при фокусе/наличии значения.
- Иконка может быть любой React-нодой и располагается слева.
- Сброс значения реализован через иконку справа.
- Полностью совместим с обычными props для `<input>` (кроме `ref`).
