# TreeList Component

## Версия компонента v3.0

Компонент TreeList предназначен для визуализации и взаимодействия с данными в виде дерева. Он поддерживает функции выбора узлов, перетаскивание, настройку дочерних элементов и добавление дополнительных элементов управления.

## Использование

```jsx
import { TreeList } from '@nlmk/ds-2.0';

<TreeList data={treeData} checkable draggable onSelectedNode={onSelectedNode} onDataAfterDrag={onDataAfterDrag} onDragStart={onDragStart} onDragEnd={onDragEnd} />;
```

## Props

| Prop                | Type                            | Default      | Description                                                                        |
|---------------------|---------------------------------|--------------|------------------------------------------------------------------------------------|
| data                | TNodeItem[]                     | -            | Данные для дерева в виде массива узлов                                             |
| onSelectedNode      | (e: TSelectedNodeEvent) => void | -            | Обработчик события выбора узла                                                     |
| onDataAfterDrag     | (e: TNodeItem[]) => void        | -            | Обработчик события после перетаскивания                                            |
| onDragStart         | (e: TDragEvent[]) => void       | -            | Обработчик события начала перетаскивания |
| onDragEnd           | (e: TDragEvent[]) => void       | -            | Обработчик события конца перетаскивания |
| checkable           | boolean                         | false        | Флаг отображения чекбоксов                                                         |
| draggable           | boolean                         | false        | Флаг возможности перетаскивания узлов                                              |
| checkableSimple     | boolean                         | false        | Флаг упрощённого выбора чекбоксов                                                  |
| rowHeight           | \`${ERowHeight}\`               | ERowHeight.s | Высота строки узла                                                                 |
| initialCheckedKeys  | Key[]                           | []           | Массив ключей элементов, которые должны быть отмечены (выбраны) при первом рендере |
| initialExpandedKeys | Key[]                           | []           | Массив ключей элементов, которые должны быть развернуты при первом рендере         |

## Размеры (ERowHeight)

- `m` - большой (48px)
- `s` - стандартный (40px) (по умолчанию)
- `xs` - компактный (32px)

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

### DropEvent

```typescript
type TDropEvent = {
  dragNode: EventDataNode<TreeItem>; // Перетаскиваемый узел
  dragNodesKeys: Key[]; // Ключи перетаскиваемых узлов
  dropPosition: number; // Позиция вставки
  dropToGap: boolean; // Вставка между узлами
};
```

```typescript
type TDragEvent = {
  event: React.DragEvent<T>; // Событие перетаскивания
  node: EventDataNode<DataNode>; // Перетаскиваемый узел
}
```

## Стилизация

### 1. CSS классы

Основные классы компонента:

- `.custom-rc-tree`: Основной контейнер
- `.nodeContent`: Контейнер содержимого узла
- `.nodeTitle`: Заголовок узла
- `.switcher`: Переключатель раскрытия
- `.dragging`: Стиль при перетаскивании

### 2. Data-атрибуты

```css
[data-checked='true'] {
  /* Стили выбранного узла */
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

## Состояния

- **Обычное**: Базовое отображение узла
- **Выбранное**: Подсветка фоном при выборе чекбокса
- **Наведение**: Изменение фона при наведении
- **Перетаскивание**: Специальное оформление при drag&drop
- **Раскрытое**: Отображение дочерних элементов

## Примечания

- При `checkableSimple=true` выбор узлов происходит независимо от их иерархии
- Компонент поддерживает вложенность любой глубины
- Для работы drag&drop необходимо включить `draggable`
- `rightSideControls` позволяет добавлять кастомные элементы управления

## Советы по использованию

Используйте `checkableSimple`, если дочерние узлы не должны влиять на состояние родительских узлов при выборе. `rightSideControls` позволяет добавить любой JSX-элемент (например, кнопки или иконки) рядом с узлом, что может быть полезно для дополнительных действий, связанных с узлами. Импортируемые зависимости Компонент использует `rc-tree` для реализации управления деревом.
