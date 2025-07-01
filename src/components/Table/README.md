# Table

## Версия компонента: 3.0

**Table** — компонент для отображения табличных данных с поддержкой кастомизации, сортировки, фильтрации, виртуализации и других расширенных возможностей. Используется для представления структурированных данных в виде таблицы с возможностью управления колонками, строками и ячейками.

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

**Props:**
- `size` — размер ячейки (`m`, `s`, `xs`)
- `color` — статус ячейки (`default`, `error`, `success`, `warning`)
- `state` — состояние (`default`, `active`, `disabled`, `selected`)
- `text`, `number` — содержимое
- `align` — выравнивание (`left`, `center`, `right`)
- `disableHover` — отключить hover-эффект
- `onClick` — обработчик клика
- `className`, `style`, `children` — стандартные

### Table.Row

Строка таблицы.

**Props:**  
- `children` — содержимое  
- `className`, `style` — стандартные

### Table.ColumnSetting

Элемент для настройки колонок (видимость, закрепление, drag-n-drop).

**Props:**  
- `id`, `title`, `visible`, `pinned`, `hasChildren`, `expanded`, `draggable`, `disabled`, `highlighted`, `onVisibilityChange`, `onPinChange`, `onExpandChange`, `dragHandleProps`, `preventEventBubbling`, `className`

### Table.Tbody, Table.Thead, Table.Tfooter

Контейнеры для секций таблицы.

**Props:**  
- `children` — содержимое  
- `className`, `style` — стандартные

### Table.Top

Ячейка заголовка таблицы.

**Props:**  
- `size`, `title`, `disable`, `sort`, `sortDirection`, `right`, `number`, `lastInGroup`, `onClick`, `drag`, `filtered`, `children`, `className`, `style`, `onMouseDown`, `onTouchStart`, `onDoubleClick`

---

## Внешние зависимости

- [@tanstack/react-table](https://tanstack.com/table/v8) — для управления состоянием и логикой таблицы
- Компоненты из `@nlmk/ds-2.0` (Button, Icon, Typography и др.)

---

## Дополнительная информация

- Для расширенных сценариев (фильтрация, сортировка, виртуализация) используйте примеры из папки `src/components/Table/examples/`.
- Для настройки фильтров и операций используйте экспортируемые константы: `tableFilterOperations`, `tableCustomFilterFn`, `basicFilterFunctions`.
