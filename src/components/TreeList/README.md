# TreeList Component

## Версия компонента v3.1

Компонент TreeList предназначен для визуализации и взаимодействия с данными в виде дерева. Он поддерживает функции выбора узлов, перетаскивание, настройку дочерних элементов, добавление дополнительных элементов управления, блокировку узлов, ограничение drag-and-drop и кастомные иконки.

---

## Базовый пример использования

```jsx
import React from 'react';
import { TreeList } from '@nlmk/ds-2.0';
const treeData = [
  {
    key: '1',
    title: 'Производство стали',
    children: [
      {
        key: '1-1',
        title: 'Конвертерный цех',
        children: [
          { key: '1-1-1', title: 'Конвертер №1' },
          { key: '1-1-2', title: 'Конвертер №2' }
        ]
      }
    ]
  }
];
export default function App() {
  return (
    <TreeList
      data={treeData}
      checkable
      draggable
      rowHeight="s"
      onSelectedNode={e => console.log('Selected:', e)}
      onDataAfterDrag={data => console.log('New data:', data)}
      onDrop={e => console.log('Drop details:', e)}
    />
  );
}
```

---

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| data | TNodeItem[] | - | Данные для дерева в виде массива узлов |
| onSelectedNode | (e: TSelectedNodeEvent) => void | - | Обработчик события выбора узла |
| onDataAfterDrag | (e: TNodeItem[]) => void | - | Обработчик события после перетаскивания |
| onDrop | (e: TDropEvent) => void | - | Обработчик события сброса при перетаскивании с детальной информацией |
| onDragStart | (e: TDragEvent) => void | - | Обработчик события начала перетаскивания |
| onDragEnd | (e: TDragEvent) => void | - | Обработчик события конца перетаскивания |
| checkable | boolean | false | Флаг отображения чекбоксов |
| draggable | boolean | false | Флаг возможности перетаскивания узлов |
| checkableSimple | boolean | false | Флаг упрощённого выбора чекбоксов |
| rowHeight | `${ERowHeight}` | ERowHeight.s | Высота строки узла |
| initialCheckedKeys | Key[] | [] | Массив ключей элементов, которые должны быть отмечены при первом рендере |
| initialExpandedKeys | Key[] | [] | Массив ключей элементов, которые должны быть развернуты при первом рендере |

---

## Размеры (ERowHeight)

- `m` - большой (48px)
- `s` - стандартный (40px) (по умолчанию)
- `xs` - компактный (32px)

---

## Типы данных

### TNodeItem

```typescript
type TNodeItem = {
  key: string | number; // Уникальный ключ узла
  title: string | ReactNode; // Заголовок узла
  rightSideControls?: JSX.Element; // Дополнительные контролы справа
  id?: number | string; // Идентификатор узла
  parentId?: number | string; // Идентификатор родителя
  children?: TNodeItem[]; // Дочерние узлы
  blockedControlsReason?: string; // Причина блокировки
  disabled?: boolean; // Блокировка узла (отключает взаимодействие и изменяет внешний вид)
  disableDraggable?: boolean; // Запрещает перетаскивание данного узла
  icon?: React.ReactNode; // Кастомная иконка узла (заменяет стандартную стрелку)
  styles?: {
    nodeContentClassName?: string;
    nodeContentStyle?: CSSProperties;
    nodeTitleClassName?: string;
    nodeTitleStyle?: CSSProperties;
  };
};
```

### TSelectedNodeEvent

```typescript
type TSelectedNodeEvent = {
  currentKey?: Key; // Ключ текущего узла
  allSelectedKeys?: Key[]; // Все выбранные ключи
  isCheсked?: boolean; // Статус выбора
};
```

### TDragEvent

```typescript
type TDragEvent = {
  event: React.DragEvent<T>; // Событие перетаскивания
  node: EventDataNode<DataNode>; // Перетаскиваемый узел
};
```

### TDropEvent

```typescript
type TDropEvent = {
  event: React.DragEvent<T>; // Событие перетаскивания
  node: EventDataNode<DataNode>; // Целевой узел (где происходит сброс)
  dragNode: EventDataNode<TNodeItem>; // Перетаскиваемый узел
  dragNodesKeys: Key[]; // Массив ключей всех перетаскиваемых узлов
  dropPosition: number; // Позиция сброса относительно целевого узла
  dropToGap: boolean; // true если сброс между узлами, false если внутрь узла
};
```

---

## Расширенные возможности

### Блокировка узлов

Используйте свойство `disabled` для полной блокировки взаимодействия с узлом:

```jsx
const treeData = [
  {
    key: '1',
    title: 'Заблокированный узел',
    disabled: true, // Полная блокировка взаимодействия
    children: [{ key: '1-1', title: 'Дочерний узел' }]
  }
];
```

### Блокировка перетаскивания

Используйте `disableDraggable` для запрета только drag-and-drop:

```jsx
const treeData = [
  {
    key: '2',
    title: 'Нельзя перетаскивать',
    disableDraggable: true, // Только запрет на drag-and-drop
    children: [...]
  }
];
```

### Кастомные иконки

Заменяйте стандартные стрелки на любые React элементы:

```jsx
import { IconCircleOutlined24, IconFolderFilled24 } from '@nlmk/ds-2.0';

const treeData = [
  {
    key: '3',
    title: 'Папка с кастомной иконкой',
    icon: <IconFolderFilled24 />, / Любой React элемент
    children: [
      {
        key: '3-1',
        title: 'Файл с иконкой',
        icon: <IconCircleOutlined24 />
      }
    ]
  }
];
```

### Дополнительные контролы

Добавляйте кастомные элементы управления справа от узлов:

```jsx
const SideControls = () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button iconButton={<IconEditPenOutlined24 />} />
    <Button iconButton={<IconDeleteBinOutlined24 />} />
  </div>
);

const treeData = [
  {
    key: '4',
    title: 'Узел с контролами',
    rightSideControls: <SideControls />
  }
];
```

### Получение детальной информации о перетаскивании

Используйте callback `onDrop` для получения подробной информации о процессе перетаскивания:

```jsx
const handleDrop = dropEvent => {
  console.log('Ключ перетаскиваемого узла:', dropEvent.dragNode.key);
  console.log('Ключ целевого узла:', dropEvent.node.key);
  console.log('Позиция сброса:', dropEvent.dropPosition);
  console.log('Сброшен между узлами:', dropEvent.dropToGap);
  console.log('Все ключи перетаскиваемых узлов:', dropEvent.dragNodesKeys);
};

<TreeList data={treeData} draggable onDrop={handleDrop} onDataAfterDrag={data => console.log('Новые данные:', data)} />;
```

**Различия между onDrop и onDataAfterDrag:**

- `onDrop` - вызывается при сбросе узла и содержит детальную информацию о процессе перетаскивания
- `onDataAfterDrag` - вызывается после обновления данных и содержит итоговую структуру дерева

---

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS классы

Основные классы компонента:

- `.custom-rc-tree`: Основной контейнер
- `.node-content`: Контейнер содержимого узла
- `.node-title`: Заголовок узла
- `.switcher`: Переключатель раскрытия
- `.custom-icon`: Контейнер для кастомных иконок
- `.dragging`: Стиль при перетаскивании

### 2. Data-атрибуты

```css
[data-checked='true'] {
  /* Стили выбранного узла */
}

[data-disabled='true'] {
  /* Стили заблокированного узла */
  opacity: 0.5;
  cursor: not-allowed;
}

[role='treeitem'] {
  /* Стили элемента дерева */
}
```

### 3. Кастомизация через NodeItem

```jsx
const customNode = {
  key: '1',
  title: 'Custom Node',
  styles: {
    nodeContentClassName: 'custom-node',
    nodeContentStyle: { backgroundColor: '#f0f0f0' },
    nodeTitleClassName: 'custom-title',
    nodeTitleStyle: { fontWeight: 'bold' }
  }
};
```

---

## Состояния

- **Обычное**: Базовое отображение узла
- **Выбранное**: Подсветка фоном при выборе чекбокса
- **Наведение**: Изменение фона при наведении
- **Перетаскивание**: Специальное оформление при drag&drop
- **Раскрытое**: Отображение дочерних элементов
- **Заблокированное**: Узел отключен для взаимодействия (disabled: true)

---

## Особенности поведения

- При `checkableSimple=true` выбор узлов происходит независимо от их иерархии
- Компонент поддерживает вложенность любой глубины
- Для работы drag&drop необходимо включить `draggable`
- `disabled=true` полностью блокирует взаимодействие с узлом и изменяет его внешний вид
- `disableDraggable=true` запрещает только перетаскивание узла, остальное взаимодействие остается доступным
- `icon` заменяет стандартную стрелку на кастомную иконку
- Заблокированные узлы (`disabled=true`) нельзя использовать как цель для сброса при перетаскивании

---

## Импортируемые зависимости

Компонент использует `rc-tree` для реализации управления деревом.

---
