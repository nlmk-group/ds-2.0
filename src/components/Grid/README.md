# Grid

## Версия компонента: 3.0

Компонент **Grid** предназначен для построения гибких и адаптивных layout-структур на основе flexbox. Позволяет удобно организовывать сетки, строки и колонки, а также управлять выравниванием, отступами и распределением пространства между элементами. Grid реализован как обертка над компонентом [Box](../Box/README.md), наследуя все его props и возможности стилизации.

## Базовый пример использования

```jsx
import Box from '@components/Box';
import Grid from '@components/Grid';

const Example = () => (
  <Grid gap={16} background="#f5f5f5" p={16} borderRadius={8}>
    <Box>Элемент 1</Box>
    <Box>Элемент 2</Box>
    <Box>Элемент 3</Box>
  </Grid>
);
```

---

## Таблица Props

> Компонент Grid поддерживает все props компонента [Box](../Box/README.md), а также дополнительные props для управления layout.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode | - | Дочерние элементы для отображения внутри Grid |
| className | string | - | Альтернативные CSS-классы |
| background | string | - | Цвет фона контейнера |
| color | string | 'var(--steel-90)' | Цвет текста |
| height | string \| number | - | Высота контейнера |
| width | string \| number | - | Ширина контейнера |
| maxWidth | string \| number | - | Максимальная ширина контейнера |
| gap | string \| number | '24px' | Промежуток между дочерними элементами |
| border | string | - | CSS свойство border |
| borderRadius | string \| number | - | Радиус скругления углов |
| display | CSSProperties['display'] | 'flex' | CSS свойство display |
| flexDirection | CSSProperties['flexDirection'] | - | Направление flex контейнера |
| justifyContent | CSSProperties['justifyContent'] | - | Выравнивание по главной оси |
| alignItems | CSSProperties['alignItems'] | - | Выравнивание по поперечной оси |
| flexWrap | CSSProperties['flexWrap'] | - | Перенос flex элементов |
| st | CSSProperties | - | Дополнительные inline стили (наивысший приоритет) |
| p, px, py, pt, pr, pb, pl | string \| number | - | Система отступов (см. [Box](../Box/README.md)) |

---

## Другие варианты использования

### Сетка с колонками и строками

```jsx
import Box from '@components/Box';
import Grid from '@components/Grid';

const Example = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <Box>Левая колонка</Box>
      </Grid.Column>
      <Grid.Column>
        <Box>Правая колонка</Box>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
```

### Несколько строк и колонок разной ширины

```jsx
<Grid>
  <Grid.Row>
    <Grid.Column width="70%">
      <Box>Основной контент</Box>
    </Grid.Column>
    <Grid.Column width="30%">
      <Box>Сайдбар</Box>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column width="100%">
      <Box>Футер</Box>
    </Grid.Column>
  </Grid.Row>
</Grid>
```

### Выравнивание и распределение пространства

```jsx
<Grid justifyContent="space-between" alignItems="center" gap={32}>
  <Box>Левый блок</Box>
  <Box>Центр</Box>
  <Box>Правый блок</Box>
</Grid>
```

---

## Стилизация

- Для стилизации используйте пропсы `className` и `st` (inline-стили).
- Все правила и возможности кастомизации аналогичны компоненту [Box](../Box/README.md#стилизация).
- Для изменения отступов используйте систему props: `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl`.

---

## Дополнительная информация

- Grid не реализует собственную адаптивность, но вы можете управлять layout через props и media-запросы в CSS.
- Для сложных адаптивных сеток рекомендуется использовать кастомные классы или оборачивать Grid в дополнительные компоненты.
- Grid и его подкомпоненты не накладывают ограничений на вложенность и количество элементов.

---

## Дочерние компоненты

### Grid.Row

Контейнер-строка для размещения колонок. Внутри Grid.Row обычно располагаются Grid.Column.

**Пример:**

```jsx
<Grid>
  <Grid.Row>
    <Grid.Column>
      <Box>Колонка 1</Box>
    </Grid.Column>
    <Grid.Column>
      <Box>Колонка 2</Box>
    </Grid.Column>
  </Grid.Row>
</Grid>
```

**Props:** такие же, как у Grid (унаследованы от Box).

---

### Grid.Column

Контейнер-колонка для размещения контента внутри строки. Можно задавать ширину через проп `width` или стили.

**Пример:**

```jsx
<Grid>
  <Grid.Row>
    <Grid.Column width="60%">
      <Box>Основная часть</Box>
    </Grid.Column>
    <Grid.Column width="40%">
      <Box>Боковая часть</Box>
    </Grid.Column>
  </Grid.Row>
</Grid>
```

**Props:** такие же, как у Grid (унаследованы от Box).

---

## См. также

- [Box](../Box/README.md) — базовый контейнер, на котором построен Grid.
