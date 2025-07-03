# Table

## Версия компонента: 3.0

**Table** — компонент для отображения табличных данных с поддержкой кастомизации, сортировки, фильтрации, виртуализации и других расширенных возможностей. Используется для представления структурированных данных в виде таблицы с возможностью управления колонками, строками и ячейками.

## Headless UI и Tanstack Table

Компонент **Table** реализован с использованием подхода Headless UI. Это означает, что логика, состояние, обработка событий и API для работы с таблицей отделены от визуальной части (разметки и стилей). Такой подход позволяет использовать Table совместно с различными headless-библиотеками, которые отвечают только за бизнес-логику компонента, а визуализация и стилизация остаются на стороне Table.

**Headless UI** — это термин для библиотек и утилит, которые предоставляют только логику и API для UI-элементов и взаимодействий, но не содержат готовой разметки или стилей. Примеры таких библиотек: [Tanstack Table](https://tanstack.com/table/v8), DevExtreme, MUI Table (headless-режим).

Преимущества headless-подхода:
- Гибкость: можно использовать любую визуализацию и стилизацию, не ограничиваясь предустановленными шаблонами.
- Интеграция: легко интегрировать Table с различными библиотеками для управления состоянием и логикой (например, Tanstack Table, DevExtreme и др.).
- Кастомизация: разработчик полностью контролирует внешний вид и поведение таблицы.

Таким образом, Table может быть использован как визуальный слой поверх headless-логики, предоставляемой сторонними библиотеками, что делает компонент универсальным и легко расширяемым.

---

## Базовый пример использования

```jsx
import { Table, Thead, Tbody, Row, Cell, Top } from '@nlmk/ds-2.0';

const columns = [
  { header: 'ID', accessorKey: 'id' },
  { header: 'Name', accessorKey: 'name' },
  { header: 'Age', accessorKey: 'age' },
  { header: 'Status', accessorKey: 'status' }
];

const data = [
  { id: 1, name: 'Сталь', age: 25, status: 'default' },
  { id: 2, name: 'Металл', age: 30, status: 'success' },
  // ...
];

const App = () => (
  <Table horizontalBorders verticalBorders>
    <Thead>
      <Row>
        {columns.map(col => (
          <Top key={col.accessorKey} title={col.header} />
        ))}
      </Row>
    </Thead>
    <Tbody>
      {data.map(row => (
        <Row key={row.id}>
          <Cell>{row.id}</Cell>
          <Cell>{row.name}</Cell>
          <Cell>{row.age}</Cell>
          <Cell>{row.status}</Cell>
        </Row>
      ))}
    </Tbody>
  </Table>
);
export default App;
```

---

## Props

| Prop              | Type                                   | Default     | Description                                                                 |
|-------------------|----------------------------------------|-------------|-----------------------------------------------------------------------------|
| children          | ReactNode                              | -           | Содержимое таблицы (Thead, Tbody, Tfooter и др.)                            |
| horizontalBorders | boolean                                | true        | Включает горизонтальные линии между строками                                |
| verticalBorders   | boolean                                | false       | Включает вертикальные линии между колонками                                  |
| className         | string                                 | -           | Дополнительный CSS-класс                                                    |
| style             | CSSProperties                          | -           | Инлайн-стили для таблицы                                                    |
| ...rest           | TableHTMLAttributes<HTMLTableElement>  | -           | Любые стандартные атрибуты HTML-таблицы                                     |

---

## Другие варианты использования

### С фильтрацией и сортировкой

```jsx
import { Table, Thead, Tbody, Row, Cell, Top, Filter, tableFilterOperations } from '@nlmk/ds-2.0';
// ...подключение tanstack/react-table и подготовка данных

<Table horizontalBorders verticalBorders>
  <Thead>
    <Row>
      <Top
        title="Name"
        sort
        sortDirection="asc"
        filtered
      >
        <Filter
          defaultValue=""
          defaultFilterType="contains"
          filterTypeOptions={tableFilterOperations}
          filterValueOptions={[{ value: 'Сталь', label: 'Сталь' }]}
          placeholder="Поиск ..."
          withPortal
          onFilterChange={(value, filterType) => {/* ... */}}
        />
      </Top>
      {/* ...другие колонки */}
    </Row>
  </Thead>
  <Tbody>
    {/* ...строки */}
  </Tbody>
</Table>
```

### Виртуализация, sticky header, группировка, пагинация

Для сложных сценариев используйте примеры из папки `src/components/Table/examples/`:
- Виртуализация: VirtualizedTableWithDynamicRowHeight, VirtualizedTableColumns
- Sticky header: TableWithStickyHeader
- Группировка: GroupingHeaderTableExample
- Пагинация: SelectableTableWithPagination

---

## Стилизация

Компонент Table использует CSS-модули. Основные классы:

- `.table` — основной контейнер таблицы
- `.horizontal-borders` — горизонтальные линии между строками
- `.vertical-borders` — вертикальные линии между колонками

Для кастомизации можно использовать свойство `className` и переопределять стили через CSS-модули или data-атрибуты.

```css
/* Пример кастомизации */
.myCustomTableClass {
  background: #f5f5f5;
}
```

---

## Дочерние компоненты

### Table.Cell

Ячейка таблицы.

| Prop         | Type / Values                                         | Default | Description                |
|--------------|-------------------------------------------------------|---------|----------------------------|
| size         | 'm' \| 's' \| 'xs'                                    | -       | Размер ячейки              |
| color        | 'default' \| 'error' \| 'success' \| 'warning'        | -       | Статус ячейки              |
| state        | 'default' \| 'active' \| 'disabled' \| 'selected'     | -       | Состояние                  |
| text, number | string, number                                        | -       | Содержимое                 |
| align        | 'left' \| 'center' \| 'right'                         | -       | Выравнивание               |
| disableHover | boolean                                               | -       | Отключить hover-эффект     |
| onClick      | function                                              | -       | Обработчик клика           |
| className    | string                                                | -       | Дополнительный CSS-класс   |
| style        | CSSProperties                                         | -       | Инлайн-стили               |
| children     | ReactNode                                             | -       | Содержимое                 |

### Table.Row

Строка таблицы.

| Prop       | Type        | Default | Description                  |
|------------|-------------|---------|------------------------------|
| children   | ReactNode   | -       | Содержимое                   |
| className  | string      | -       | Дополнительный CSS-класс     |
| style      | CSSProperties | -     | Инлайн-стили                 |

### Table.ColumnSetting

Элемент для настройки колонок (видимость, закрепление, drag-n-drop).

| Prop                  | Type      | Default | Description                                 |
|-----------------------|-----------|---------|---------------------------------------------|
| id                    | string    | -       | Идентификатор колонки                       |
| title                 | string    | -       | Название колонки                            |
| visible               | boolean   | -       | Видимость                                   |
| pinned                | boolean   | -       | Закрепление                                 |
| hasChildren           | boolean   | -       | Есть ли дочерние элементы                   |
| expanded              | boolean   | -       | Состояние раскрытия                         |
| draggable             | boolean   | -       | Возможность drag-n-drop                     |
| disabled              | boolean   | -       | Отключение                                  |
| highlighted           | boolean   | -       | Подсветка                                   |
| onVisibilityChange    | function  | -       | Обработчик изменения видимости              |
| onPinChange           | function  | -       | Обработчик закрепления                      |
| onExpandChange        | function  | -       | Обработчик раскрытия                        |
| dragHandleProps       | object    | -       | Свойства drag handle                        |
| preventEventBubbling  | boolean   | -       | Предотвращение всплытия событий             |
| className             | string    | -       | Дополнительный CSS-класс                    |

### Table.Tbody, Table.Thead, Table.Tfooter

Контейнеры для секций таблицы.

| Prop       | Type        | Default | Description                  |
|------------|-------------|---------|------------------------------|
| children   | ReactNode   | -       | Содержимое                   |
| className  | string      | -       | Дополнительный CSS-класс     |
| style      | CSSProperties | -     | Инлайн-стили                 |

### Table.Top

Ячейка заголовка таблицы.

| Prop           | Type / Values                                         | Default | Description                |
|----------------|-------------------------------------------------------|---------|----------------------------|
| size           | 'm' \| 's' \| 'xs'                                    | -       | Размер ячейки              |
| title          | string                                                | -       | Заголовок                  |
| disable        | boolean                                               | -       | Отключить                  |
| sort           | boolean                                               | -       | Включить сортировку        |
| sortDirection  | 'asc' \| 'desc' \| undefined                         | -       | Направление сортировки     |
| right          | boolean                                               | -       | Выравнивание вправо        |
| number         | number                                                | -       | Числовое значение          |
| lastInGroup    | boolean                                               | -       | Последний в группе         |
| onClick        | function                                              | -       | Обработчик клика           |
| drag           | boolean                                               | -       | Drag-n-drop                |
| filtered       | boolean                                               | -       | Фильтрация                 |
| children       | ReactNode                                             | -       | Содержимое                 |
| className      | string                                                | -       | Дополнительный CSS-класс   |
| style          | CSSProperties                                         | -       | Инлайн-стили               |
| onMouseDown    | function                                              | -       | Обработчик mouse down      |
| onTouchStart   | function                                              | -       | Обработчик touch start     |
| onDoubleClick  | function                                              | -       | Обработчик двойного клика  |

---

## Внешние зависимости

- [@tanstack/react-table](https://tanstack.com/table/v8) — для управления состоянием и логикой таблицы
- Вы также можете использовать другие библиотеки в своих проектах, за счет подхода headless ui

---

## Дополнительная информация

- Для расширенных сценариев (фильтрация, сортировка, виртуализация) используйте примеры из папки `src/components/Table/examples/`.
- Для настройки фильтров и операций используйте экспортируемые константы: `tableFilterOperations`, `tableCustomFilterFn`, `basicFilterFunctions`.
