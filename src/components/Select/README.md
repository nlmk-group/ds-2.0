# Select Component

## Версия компонента v3.0

Select компонент представляет собой настраиваемый выпадающий список с возможностью одиночного или множественного выбора, поиска и различными визуальными настройками.

## Использование

```jsx
import { Select } from '@nlmk/ds-2.0';

<Select
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
  label="Выберите опцию"
  onSelectionChange={(selected) => console.log(selected)}
/>
```

## Props

| Prop                       | Type                    | Default                   | Description                                                      |
|----------------------------|-------------------------|---------------------------|------------------------------------------------------------------|
| id                         | string                  | -                         | Уникальный идентификатор компонента                              |
| options                    | ISelectOption[] \| null | -                         | Опции для выбора                                                 |
| label                      | string                  | ''                        | Метка для компонента                                             |
| multiple                   | boolean                 | false                     | Множественный выбор                                              |
| size                       | TSize                   | sizesMappingInput.m       | Размер компонента                                                |
| scrollingItems             | number                  | 6                         | Количество элементов после которого включается прокрутка         |
| disabled                   | boolean                 | false                     | Отключен ли компонент                                            |
| color                      | customInputColors       | customInputColors.default | Цвет компонента                                                  |
| allSelectText              | string                  | 'Выбрать все'             | Текст для выбора всех опций                                      |
| isAllSelectView            | boolean                 | true                      | Показывать ли выбор всех опций                                   |
| isSearchable               | boolean                 | false                     | Поиск по опциям                                                  |
| autoSelectSingleOnEnter    | boolean                 | false                     | Выбор значения по Enter при найденной опции по isSearchable      |
| selected                   | TSelected               | -                         | Выбранные значения                                               |
| onSelectionChange          | function                | -                         | Обработчик изменения выбора                                      |
| withPortal                 | boolean                 | false                     | Использовать ли портал для отображения                           |
| onEnterPress               | function                | -                         | Обработчик нажатия Enter                                         |
| onBlur                     | function                | -                         | Обработчик закрытия меню options                                 |
| onFocus                    | function                | -                         | Обработчик открытия меню options                                 |
| isClearSearchOnBlur        | boolean                 | false                     | Удалять ли поисковый запрос при отработке onBlur на Input        |
| className                  | string                  | -                         | Дополнительный CSS класс                                         |
| stealthy                   | boolean                 | false                     | Условие для незаметного инпута                                   |
| highlightSelected          | boolean                 | false                     | Отображать выбранные элементы иконкой                            |
| withoutCheckbox            | boolean                 | false                     | Отображать без чекбоксов                                         |
| badgeAmount                | number                  | -                         | Отображать badge с количеством выбранных опций                   |
| activeSelectedValue        | boolean                 | false                     | Выделять значение синим цветом, доступно в stealthy              |
| enableScrollToActiveOption | boolean                 | false                     | Условие фокуса на опциях компонента при раскрытии списка         |
| portalContainerId          | string                  | 'root'                    | id рутового контейнера для создания портала                      |
| name                       | string                  | -                         | name определяет имя элемента, используется для ссылки на элемент |
| style                      | CSSProperties           | -                         | Кастомные стили для компонента                                   |

## Примечания

- Компонент поддерживает одиночный и множественный выбор.
- При использовании \`isSearchable={true}\`, появляется возможность поиска по опциям.
- Для кастомизации внешнего вида используйте пропсы \`stealthy\`, \`highlightSelected\`, \`withoutCheckbox\`.
- При \`withPortal={true}\` меню будет отрендерено в портале, что может быть полезно при проблемах с z-index.

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
    { value: '3', label: 'Option 3' },
  ];

  return (
    <Select
      options={options}
      selected={selected}
      onSelectionChange={setSelected}
      label="Выберите опцию"
    />
  );
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
    { value: '5', label: 'Elderberry' },
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

### Стилизованный селект

```jsx
import React, { useState } from 'react';
import { Select } from '@nlmk/ds-2.0';

const StyledExample = () => {
  const [selected, setSelected] = useState('');

  const options = [
    { value: '1', label: 'Red', iconLeft: <ColorIcon color="red" /> },
    { value: '2', label: 'Green', iconLeft: <ColorIcon color="green" /> },
    { value: '3', label: 'Blue', iconLeft: <ColorIcon color="blue" /> },
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

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.select`: Базовый класс компонента
- `.select__input`: Класс для инпута
- `.inconspicuous`: Класс для незаметного режима

Вы можете переопределить эти стили, передав собственный `className`.
