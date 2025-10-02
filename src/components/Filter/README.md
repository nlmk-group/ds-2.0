# Компонент Filter

## Версия компонента 3.0

Компонент Filter используется для фильтрации данных по выбранному типу и значению. Позволяет пользователю выбрать тип фильтра (например, "содержит", "равно" и т.д.) и ввести или выбрать значение для фильтрации. Поддерживает выпадающие списки для выбора типа и значения, а также интеграцию с порталами для рендеринга меню вне текущей иерархии DOM.

## Использование

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
/>
```

## Props

| Prop               | Type                                                        | Default         | Description                                                                                 |
|--------------------|-------------------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------|
| filterTypeOptions  | `IFilterTypeOption[]`                                       | —               | Массив опций для "типов фильтра" (при клике на иконку)                                     |
| filterValueOptions | `IFilterValueOption[]`                                      | —               | Массив опций для "значений" (при фокусе на инпут)                                          |
| onFilterChange     | `(value: string \| undefined, filterType: string) => void`  | —               | Коллбэк, вызывается при изменении value или типа                                            |
| defaultValue       | `string`                                                    | `""`           | Начальное текстовое значение в инпуте                                                       |
| defaultFilterType  | `string`                                                    | первый из options| Начальный тип фильтра (если не задан, берётся первый из filterTypeOptions)                  |
| withPortal         | `boolean`                                                   | `false`         | Нужно ли рендерить меню через портал?                                                       |
| portalContainerId  | `string`                                                    | `"root"`       | ID DOM-элемента для портала                                                                 |
| className          | `string`                                                    | —               | Кастомный CSS-класс для корневого элемента                                                  |
| ...inputProps      | `InputHTMLAttributes<HTMLInputElement>` (кроме defaultValue, onChange) | — | Любые остальные props для input                                                            |

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
```

## Варианты использования

### Использование с порталом

```jsx
<Filter
  filterTypeOptions={filterTypeOptions}
  filterValueOptions={filterValueOptions}
  withPortal
  portalContainerId="custom-portal-root"
  onFilterChange={...}
/>
```

### Фильтрация в таблице

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

## Стилизация

- Для стилизации используется CSS-модуль `Filter.module.scss`.
- Можно передать свой класс через prop `className`.
- Для кастомизации иконки типа фильтра используйте свойство `icon` в объекте опции типа фильтра.

## Особенности

- Компонент поддерживает сброс значения (иконка сброса появляется при наличии значения).
- Меню выбора типа и значения реализовано с помощью Popper.js и может быть отрисовано через портал.
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

| Prop     | Type                                                 | Default   | Description                        |
|----------|------------------------------------------------------|-----------|------------------------------------|
| value    | `string`                                             | —         | Значение input                     |
| label    | `string`                                             | —         | Лейбл для поля                     |
| icon     | `ReactNode`                                          | —         | Кастомная иконка слева             |
| reset    | `boolean`                                            | `false`   | Показывать иконку сброса           |
| onReset  | `() => void`                                         | —         | Коллбэк для сброса значения        |
| inputRef | `Ref<HTMLInputElement>`                              | —         | Внешний ref для input              |
| ...props | `InputHTMLAttributes<HTMLInputElement>` (кроме ref)  | —         | Любые остальные props для input    |

## Стилизация

- Основные классы: `filterInput`, `textfield`, `label`, `icon`, `reset` (см. `FilterInput.module.scss`).
- Для стилизации используйте prop `className` или переопределяйте CSS-переменные.
- Иконка сброса появляется только если `reset={true}` и есть значение.

## Особенности

- Поддерживает label, который анимируется при фокусе/наличии значения.
- Иконка может быть любой React-нодой и располагается слева.
- Сброс значения реализован через иконку справа.
- Полностью совместим с обычными props для `<input>` (кроме `ref`).
