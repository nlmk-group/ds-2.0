# Select Component

## Версия компонента v3.0

Select компонент представляет собой настраиваемый выпадающий список с возможностью одиночного или множественного выбора, поиска и различными визуальными настройками. Поддерживает асинхронную загрузку опций.

## Использование

```jsx
import { Select } from '@nlmk/ds-2.0';

// Базовое использование
<Select
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
  label="Выберите опцию"
  onSelectionChange={(selected) => console.log(selected)}
/>

// Использование с асинхронной загрузкой
<Select
  label="Асинхронный селект"
  isLoading={loading}
  onOpen={async () => {
    const options = await fetchOptions();
    setOptions(options);
  }}
  onSearch={async (query) => {
    const filtered = await searchOptions(query);
    setOptions(filtered);
  }}
  options={options}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | - | Уникальный идентификатор компонента |
| options | ISelectOption[] \| null | - | Опции для выбора |
| label | string | '' | Метка для компонента |
| multiple | boolean | false | Множественный выбор |
| size | TSize | sizesMappingInput.m | Размер компонента |
| scrollingItems | number | 6 | Количество элементов после которого включается прокрутка |
| disabled | boolean | false | Отключен ли компонент |
| color | customInputColors | customInputColors.default | Цвет компонента |
| allSelectText | string | 'Выбрать все' | Текст для выбора всех опций |
| isAllSelectView | boolean | true | Показывать ли выбор всех опций |
| isSearchable | boolean | false | Поиск по опциям |
| autoSelectSingleOnEnter | boolean | false | Выбор значения по Enter при найденной опции по isSearchable |
| selected | TSelected | - | Выбранные значения |
| onSelectionChange | function | - | Обработчик изменения выбора |
| withPortal | boolean | false | Использовать ли портал для отображения |
| onEnterPress | function | - | Обработчик нажатия Enter |
| onBlur | function | - | Обработчик закрытия меню options |
| onFocus | function | - | Обработчик открытия меню options |
| isClearSearchOnBlur | boolean | false | Удалять ли поисковый запрос при отработке onBlur на Input |
| className | string | - | Дополнительный CSS класс |
| stealthy | boolean | false | Условие для незаметного инпута |
| highlightSelected | boolean | false | Отображать выбранные элементы иконкой |
| withoutCheckbox | boolean | false | Отображать без чекбоксов |
| badgeAmount | number | - | Отображать badge с количеством выбранных опций |
| activeSelectedValue | boolean | false | Выделять значение синим цветом, доступно в stealthy |
| enableScrollToActiveOption | boolean | false | Условие фокуса на опциях компонента при раскрытии списка |
| portalContainerId | string | 'root' | id рутового контейнера для создания портала |
| name | string | - | name определяет имя элемента, используется для ссылки на элемент |
| style | CSSProperties | - | Кастомные стили для компонента |
| isClearInputOnSelect | boolean | false | Удалить содержимое Input после выбора |
| isLoading | boolean | false | Индикатор загрузки опций |
| onOpen | function | - | Callback для загрузки опций при открытии селекта |
| onSearch | function | - | Callback для асинхронного поиска по опциям |
| multilineOption | boolean | false | Разрешить многострочное отображение опций |
| listMinWidth | number | - | Минимальная ширина выпадающего списка |
| required | boolean | false | HTML атрибут required |
| reset | boolean | false | Флаг наличия кнопки сброса значения |

## Примеры

### Базовое использование

```jsx
import React, { useState } from 'react';
import { Select } from '@nlmk/ds-2.0';
const BasicExample = () => {
  const [selected, setSelected] = useState('');
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
  return <Select options={options} selected={selected} onSelectionChange={setSelected} label="Выберите опцию" />;
};
```

### Множественный выбор с поиском

```jsx
import React, { useState } from 'react';
import { Select } from '@nlmk/ds-2.0';
const MultipleSearchExample = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: '1', label: 'Apple' },
    { value: '2', label: 'Banana' },
    { value: '3', label: 'Cherry' },
    { value: '4', label: 'Date' },
    { value: '5', label: 'Elderberry' }
  ];
  return (
    <Select
      options={options}
      selected={selected}
      onSelectionChange={setSelected}
      label="Выберите фрукты"
      multiple={true}
      isSearchable={true}
      isAllSelectView={true}
    />
  );
};
```

### Асинхронная загрузка опций

```jsx
import React, { useState } from 'react';
import { Select } from '@nlmk/ds-2.0';
const AsyncExample = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const loadOptions = async () => {
    setLoading(true);
    try {
      митация загрузки данных
      const response = await fetch('api/options');
      const data = await response.json();
      setOptions(data);
    } finally {
      setLoading(false);
    }
  };
  const searchOptions = async query => {
    setLoading(true);
    try {
      митация поиска
      const response = await fetch(`api/search?q=${query}`);
      const data = await response.json();
      setOptions(data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Select
      options={options}
      selected={selected}
      onSelectionChange={setSelected}
      label="Асинхронный выбор"
      isLoading={loading}
      onOpen={loadOptions}
      onSearch={searchOptions}
      isSearchable={true}
    />
  );
};
```

### Стилизованный селект

```jsx
import React, { useState } from 'react';
import { Select } from '@nlmk/ds-2.0';
const StyledExample = () => {
  const [selected, setSelected] = useState('');
  const options = [
    { value: '1', label: 'Red', iconLeft: <ColorIcon color="red" /> },
    { value: '2', label: 'Green', iconLeft: <ColorIcon color="green" /> },
    { value: '3', label: 'Blue', iconLeft: <ColorIcon color="blue" /> }
  ];
  return (
    <Select
      options={options}
      selected={selected}
      onSelectionChange={setSelected}
      label="Выберите цвет"
      stealthy={true}
      highlightSelected={true}
      color="success"
    />
  );
};
```

### Многострочные опции

```jsx
import React, { useState } from 'react';
import { Select } from '@nlmk/ds-2.0';
const MultilineExample = () => {
  const [selected, setSelected] = useState('');
  const options = [
    { value: '1', label: 'Очень длинный текст опции, который может занимать несколько строк при отображении' },
    { value: '2', label: 'Еще один длинный текст опции с дополнительной информацией' }
  ];
  return (
    <Select
      options={options}
      selected={selected}
      onSelectionChange={setSelected}
      label="Выберите опцию"
      multilineOption={true}
      listMinWidth={300}
    />
  );
};
```

### Селект с кнопкой сброса

```jsx
import React, { useState } from 'react';
import { Select } from '@nlmk/ds-2.0';
const ResetExample = () => {
  const [selected, setSelected] = useState('');
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
  return (
    <Select
      options={options}
      selected={selected}
      onSelectionChange={setSelected}
      label="Выберите опцию"
      reset={true}
    />
  );
};
```

## Интерфейсы

```typescript
interface ISelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

type TSelected = string | string[] | null;
```

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.select`: Базовый класс компонента
- `.select__input`: Класс для инпута
- `.select__menu`: Класс для выпадающего меню
- `.select__option`: Класс для опции
- `.select__option--selected`: Класс для выбранной опции
- `.select__option--disabled`: Класс для отключенной опции
- `.select__loading`: Класс для состояния загрузки
- `.inconspicuous`: Класс для незаметного режима

Вы можете переопределить эти стили, передав собственный `className`.

## Примечания

- При использовании `withPortal={true}`, убедитесь, что в DOM существует элемент с id, указанным в `portalContainerId`
- Для корректной работы асинхронной загрузки рекомендуется использовать `isSearchable={true}`
- При использовании `multilineOption={true}` может потребоваться настройка `listMinWidth` для оптимального отображения
- Компонент поддерживает как контролируемый, так и неконтролируемый режимы работы
