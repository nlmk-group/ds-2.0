# Компонент ComboBox

## Версия компонента 3.0

Компонент `ComboBox` — компонуемый выпадающий список с поддержкой:

- Мультивыбора и поиска
- Группировки и иерархических (древовидных) данных
- Кастомизации через стили и классы
- Рендеринга через портал
- Гибкого API на основе контекста для продвинутых сценариев

Компонент экспортируется как основной (default export) и управляет своим состоянием через провайдер контекста, рендеря основную логику через подкомпоненты.

## Использование

## Базовый пример

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
    <ComboBox label="Выберите опцию" initialValue={[options[0]]} tooltipDescription="Выберите один из вариантов">
      {/* Дочерние элементы опциональны */}
    </ComboBox>
  );
}
```

## Props

| Пропс | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| label | string | — | Заголовок (лейбл) для поля ComboBox. |
| isDisabled | boolean | false | Отключает ввод и взаимодействие с ComboBox. |
| isResize | boolean | false | Разрешить изменение размера выпадающего списка пользователем. |
| dropdownWidth | string \| number | — | Ширина выпадающего списка. |
| dropdownHeight | string \| number | — | Высота выпадающего списка. |
| dropdownMinHeight | number | — | Минимальная высота дропдауна в пикселях. |
| dropdownMinWidth | number | — | Минимальная ширина дропдауна в пикселях. |
| inputMinWidth | number | — | Минимальная ширина инпута ComboBox в пикселях. |
| initialValue | IComboBoxOption[] | [] | Список начально выбранных опций. |
| children | ReactNode | — | Дополнительное содержимое внутри ComboBox (например, кастомный рендеринг опций). |
| displayEnumerated | boolean | false | Показывать ли нумерацию для каждой опции. |
| displayChildCount | boolean | false | Показывать ли количество дочерних элементов (для дерева или групп). |
| tooltipDescription | IComboBoxOption[] \| string | — | Кастомная подсказка (tooltip) для поля (можно строкой или массивом опций). |
| countOnlyLevel | number | — | Показывать количество детей только для заданного уровня вложенности. |
| color | string | — | Основной цвет (тема) — влияет на стиль поля/выпадающего списка при наличии поддержки. |
| className | string | — | Дополнительный css-класс для корневого элемента ComboBox. |
| style | CSSProperties | — | Inline-стили для корневого элемента ComboBox. |
| dropdownClassName | string | — | Css-класс для контейнера выпадающего списка. |
| dropdownStyle | CSSProperties | — | Inline-стили для выпадающего списка. |
| inputClassName | string | — | Класс для поля ввода (input). |
| inputStyle | CSSProperties | — | Inline-стили для поля ввода. |
| withPortal | boolean | false | Рендерить ли выпадающий список через портал (`portalContainerId`). |
| portalContainerId | string | — | Если используется портал, id DOM-элемента-контейнера для выпадающего списка. |

## Пример с группировкой опций

```jsx
import React from 'react';
import ComboBox from './ComboBox';
const options = [
  { id: 'group-1', label: 'Группа 1', isGroupLabel: true },
  { id: '1', label: 'Опция 1.1' },
  { id: '2', label: 'Опция 1.2' },
  { id: 'group-2', label: 'Группа 2', isGroupLabel: true },
  { id: '3', label: 'Опция 2.1' }
];
export default function App() {
  return (
    <ComboBox label="Выберите из группы" initialValue={[]}>
      {/* Можно передать опции пропсом или через контекст */}
    </ComboBox>
  );
}
```

## Пример с кастомными стилями

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

## Пример с порталом

```jsx
<ComboBox label="Через портал" withPortal={true} portalContainerId="my-portal-root" />
```

## Контекстные хуки

Эти хуки доступны для продвинутого использования, обычно применяются внутри компонента:

- `useDropdownHeight` / `useSetDropdownHeight` — управление высотой дропдауна через контекст.
- `useDropdownWidth` / `useSetDropdownWidth` — управление шириной дропдауна через контекст.
- `useComboBoxValue` / `useSetComboBoxValue` — выбранные значения (массив опций) в контексте.
- `useSearchValue` / `useSetSearchValue` — значение поиска в контексте.

---

## Настройка и расширение

- **Свой рендеринг**: Используйте проп `children` для вставки пользовательского содержимого внутрь ComboBox: либо опций, либо дополнительного UI.
- **Стилизация**: Все основные части ComboBox настраиваются через `className`, `style` или соответствующие пропсы для выпадающего списка/инпута.
- **Изменение размера**: Включите возможность изменения размера с помощью `isResize={true}`.
- **Дерево или группы**: Группируйте опции или стройте дерево, используя соответствующие интерфейсы, и управляйте выводом счетчиков/нумерации через `displayEnumerated`, `displayChildCount`, `countOnlyLevel`.
