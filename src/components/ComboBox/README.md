# ComboBox

## Версия компонента: 3.0

**ComboBox** — универсальный выпадающий список с поддержкой мультивыбора, поиска, группировки, древовидных данных, кастомизации и портального рендеринга. Используется для выбора одной или нескольких опций из большого списка, в том числе с вложенной структурой.

---

## Базовый пример использования

```jsx
import React from 'react';
import ComboBox from './ComboBox';

const options = [
  { id: '1', label: 'Опция 1' },
  { id: '2', label: 'Опция 2', disabled: true },
  { id: '3', label: 'Опция 3' }
];

export default function App() {
  return (
    <ComboBox
      label="Выберите опцию"
      initialValue={[options[0]]}
      tooltipDescription="Выберите один из вариантов"
    />
  );
}
```

---

## Props

| Prop                | Type                              | Default   | Description                                                                                 |
|---------------------|-----------------------------------|-----------|---------------------------------------------------------------------------------------------|
| label               | string                            | —         | Заголовок (лейбл) для поля ComboBox.                                                        |
| isDisabled          | boolean                           | false     | Отключает ввод и взаимодействие с ComboBox.                                                 |
| isResize            | boolean                           | false     | Разрешить изменение размера выпадающего списка пользователем.                               |
| dropdownWidth       | string \| number                  | —         | Ширина выпадающего списка.                                                                  |
| dropdownHeight      | string \| number                  | —         | Высота выпадающего списка.                                                                  |
| dropdownMinHeight   | number                            | —         | Минимальная высота дропдауна в пикселях.                                                    |
| dropdownMinWidth    | number                            | —         | Минимальная ширина дропдауна в пикселях.                                                    |
| inputMinWidth       | number                            | —         | Минимальная ширина инпута ComboBox в пикселях.                                              |
| initialValue        | IComboBoxOption[]                 | []        | Список начально выбранных опций.                                                            |
| children            | ReactNode                         | —         | Дополнительное содержимое внутри ComboBox (например, кастомный рендеринг опций).            |
| displayEnumerated   | boolean                           | false     | Показывать ли нумерацию для каждой опции.                                                   |
| displayChildCount   | boolean                           | false     | Показывать ли количество дочерних элементов (для дерева или групп).                         |
| tooltipDescription  | IComboBoxOption[] \| string       | —         | Кастомная подсказка (tooltip) для поля (можно строкой или массивом опций).                  |
| countOnlyLevel      | number                            | —         | Показывать количество детей только для заданного уровня вложенности.                         |
| color               | string                            | —         | Основной цвет (тема) — влияет на стиль поля/выпадающего списка при наличии поддержки.        |
| className           | string                            | —         | Дополнительный css-класс для корневого элемента ComboBox.                                   |
| style               | CSSProperties                     | —         | Inline-стили для корневого элемента ComboBox.                                               |
| dropdownClassName   | string                            | —         | Css-класс для контейнера выпадающего списка.                                                |
| dropdownStyle       | CSSProperties                     | —         | Inline-стили для выпадающего списка.                                                        |
| inputClassName      | string                            | —         | Класс для поля ввода (input).                                                               |
| inputStyle          | CSSProperties                     | —         | Inline-стили для поля ввода.                                                                |
| withPortal          | boolean                           | false     | Рендерить ли выпадающий список через портал (`portalContainerId`).                          |
| portalContainerId   | string                            | —         | Если используется портал, id DOM-элемента-контейнера для выпадающего списка.                |
| autoFocusSearch     | boolean                           | false     | Автоматический фокус на поле поиска при открытии выпадающего списка.                         |
| autoExpandOnSearch  | boolean                           | false     | Автоматическое раскрытие дерева элементов при поиске (для ComboTreeList).                   |

---

## Другие варианты использования

### Группировка опций

```jsx
<ComboBox
  label="Выберите из группы"
  initialValue={[]}
  // Опции можно передать через пропсы или контекст
/>
```

### Кастомные стили

```jsx
<ComboBox
  label="С кастомным стилем"
  className="my-combobox"
  style={{ margin: 20 }}
  dropdownClassName="my-dropdown"
  dropdownStyle={{ background: '#f0f0f0' }}
  inputClassName="my-input"
  inputStyle={{ borderColor: 'pink' }}
/>
```

### Использование портала

```jsx
<ComboBox
  label="Через портал"
  withPortal={true}
  portalContainerId="my-portal-root"
/>
```


---

## Стилизация

ComboBox поддерживает кастомизацию через:

- **className** — для корневого элемента
- **style** — inline-стили для корневого элемента
- **dropdownClassName** и **dropdownStyle** — для выпадающего списка
- **inputClassName** и **inputStyle** — для поля ввода

---

## Дополнительная информация

- **Контекстные хуки**:  
  - `useDropdownHeight` / `useSetDropdownHeight` — управление высотой дропдауна  
  - `useDropdownWidth` / `useSetDropdownWidth` — управление шириной дропдауна  
  - `useComboBoxValue` / `useSetComboBoxValue` — выбранные значения  
  - `useSearchValue` / `useSetSearchValue` — значение поиска

- **Расширение**:  
  - Используйте проп `children` для вставки пользовательского содержимого  
  - Включите возможность изменения размера с помощью `isResize={true}`  
  - Группируйте опции или стройте дерево, используя соответствующие интерфейсы

---

## Дочерние компоненты

ComboBox реализован с помощью набора подкомпонентов, которые можно использовать для расширения или кастомизации поведения:

- **AllItemsCheckbox** — чекбокс "Выбрать все" для массового выбора опций.
- **InfiniteScrollTrigger** — триггер для бесконечной прокрутки и подгрузки данных.
- **ResizableGrip** — позволяет изменять размер выпадающего списка.
- **Search** — компонент поиска по опциям.
- **VirtualizedResizableGrip** — виртуализированный список с возможностью изменения размера.
- **ComboList** — базовый список опций с поддержкой мультивыбора, поиска, чекбоксов и бесконечной прокрутки.
- **ComboGroupList** — список с поддержкой группировки опций.
- **ComboTreeList** — список с поддержкой древовидной структуры и вложенных опций.
- **InputComboBox** — кастомизированное поле ввода для ComboBox.
- **ComboBoxDropdown** — основной контейнер выпадающего списка.
- **ComboDraggableList** — список с поддержкой drag-and-drop для сортировки опций.
- **ComboDraggableGroupList** — drag-and-drop для группированных опций.

> **Внешние компоненты:**  
> Используются компоненты из библиотеки `@components/index` (например, Checkbox, Box, Icon, Spinner, Typography и др.).

---

**Примечание:**  
Для сложных сценариев (например, кастомный рендеринг опций, интеграция с формами, асинхронная подгрузка) используйте дочерние компоненты и контекстные хуки.

---
