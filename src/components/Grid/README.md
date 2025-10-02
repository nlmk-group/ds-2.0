# Компонент Grid

## Версия компонента 3.0

Компонент Grid предназначен для построения гибких и адаптивных layout-структур на основе flexbox. Является оберткой над компонентом [Box](../Box/README.md) и наследует все его props и возможности стилизации.

## Использование

```jsx
import Grid from '@nlmk/ds-2.0';

const App = () => (
  <Grid gap={16} background="#f5f5f5" p={16} borderRadius={8}>
    <div>Элемент 1</div>
    <div>Элемент 2</div>
    <div>Элемент 3</div>
  </Grid>
);
export default App;
```

## Props

| Prop           | Type                           | Default               | Description                                                                 |
| -------------- | ------------------------------ | --------------------- | --------------------------------------------------------------------------- |
| children       | ReactNode                      | -                     | Дочерние элементы для отображения внутри Grid                               |
| className      | string                         | -                     | Дополнительные CSS-классы                                                   |
| background     | string                         | -                     | Цвет фона контейнера                                                        |
| color          | string                         | 'var(--steel-90)'     | Цвет текста                                                                 |
| height         | string \| number               | -                     | Высота контейнера                                                           |
| width          | string \| number               | -                     | Ширина контейнера                                                           |
| maxWidth       | string \| number               | -                     | Максимальная ширина контейнера                                              |
| gap            | string \| number               | '24px'                | Промежуток между дочерними элементами                                       |
| border         | string                         | -                     | CSS свойство border                                                         |
| borderRadius   | string \| number               | -                     | Радиус скругления углов                                                     |
| display        | CSSProperties['display']       | 'flex'                | CSS свойство display                                                        |
| flexDirection  | CSSProperties['flexDirection'] | -                     | Направление flex контейнера                                                 |
| justifyContent | CSSProperties['justifyContent']| -                     | Выравнивание по главной оси                                                 |
| alignItems     | CSSProperties['alignItems']    | -                     | Выравнивание по поперечной оси                                              |
| flexWrap       | CSSProperties['flexWrap']      | -                     | Перенос flex элементов                                                      |
| st             | CSSProperties                  | -                     | Дополнительные inline стили (наивысший приоритет)                           |
| p, px, py, pt, pr, pb, pl | string \| number    | -                     | Система отступов (см. [Box](../Box/README.md))                              |

## Варианты использования

### Сетка с колонками и строками

```jsx
import Grid from '@nlmk/ds-2.0';

<Grid>
  <Grid.Row>
    <Grid.Column>
      <div>Левая колонка</div>
    </Grid.Column>
    <Grid.Column>
      <div>Правая колонка</div>
    </Grid.Column>
  </Grid.Row>
</Grid>
```

### Несколько строк и колонок разной ширины

```jsx
<Grid>
  <Grid.Row>
    <Grid.Column width="70%">
      <div>Основной контент</div>
    </Grid.Column>
    <Grid.Column width="30%">
      <div>Сайдбар</div>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column width="100%">
      <div>Футер</div>
    </Grid.Column>
  </Grid.Row>
</Grid>
```

### Выравнивание и распределение пространства

```jsx
<Grid justifyContent="space-between" alignItems="center" gap={32}>
  <div>Левый блок</div>
  <div>Центр</div>
  <div>Правый блок</div>
</Grid>
```

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS-модули для стилизации. Основные классы:

- `.wrapper`: Основной контейнер Grid

Чтобы применить пользовательские стили, вы можете передать свой `className` и переопределить необходимые стили.

### 2. Inline-стили

Используйте проп `st` для передачи inline-стилей с наивысшим приоритетом:

```jsx
<Grid st={{ backgroundColor: 'red', padding: '20px' }}>
  Контент
</Grid>
```

### 3. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
[data-testid="grid-row"] {
  /* Стили для строки Grid */
}

[data-testid="grid-column"] {
  /* Стили для колонки Grid */
}
```

## Дочерние компоненты

### Grid.Row

Контейнер-строка для размещения колонок. Внутри Grid.Row обычно располагаются Grid.Column.

**Пример:**

```jsx
<Grid>
  <Grid.Row>
    <Grid.Column>
      <div>Колонка 1</div>
    </Grid.Column>
    <Grid.Column>
      <div>Колонка 2</div>
    </Grid.Column>
  </Grid.Row>
</Grid>
```

**Props:** такие же, как у Grid (унаследованы от Box).

### Grid.Column

Контейнер-колонка для размещения контента внутри строки. Можно задавать ширину через проп `width` или стили.

**Пример:**

```jsx
<Grid>
  <Grid.Row>
    <Grid.Column width="60%">
      <div>Основная часть</div>
    </Grid.Column>
    <Grid.Column width="40%">
      <div>Боковая часть</div>
    </Grid.Column>
  </Grid.Row>
</Grid>
```

**Props:** такие же, как у Grid (унаследованы от Box).

## См. также

- [Box](../Box/README.md) — базовый контейнер, на котором построен Grid.
