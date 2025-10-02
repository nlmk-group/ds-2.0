# Компонент Box

## Версия компонента 3.0

Компонент Box предоставляет гибкую систему layout и spacing. Позволяет быстро создавать контейнеры с настраиваемыми отступами, размерами и flexbox свойствами.

## Использование

```jsx
import Box from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Box 
      p={16}
      background="#f5f5f5"
      borderRadius={8}
      display="flex"
      flexDirection="column"
      gap={12}
    >
      <div>Элемент 1</div>
      <div>Элемент 2</div>
    </Box>
  );
};
export default App;
```

## Props

| Prop           | Type                           | Default               | Description                                                                 |
| -------------- | ------------------------------ | --------------------- | --------------------------------------------------------------------------- |
| children       | ReactNode                      | -                     | Дочерние элементы для отображения внутри Box                                |
| p              | string \| number               | -                     | Базовый padding для всех сторон. Числа конвертируются в px                  |
| px             | string \| number               | -                     | Горизонтальный padding (left, right). Перезаписывает p для левой и правой стороны |
| py             | string \| number               | -                     | Вертикальный padding (top, bottom). Перезаписывает p для верхней и нижней стороны |
| pt             | string \| number               | -                     | Padding сверху. Наивысший приоритет для верхней стороны                     |
| pr             | string \| number               | -                     | Padding справа. Наивысший приоритет для правой стороны                      |
| pb             | string \| number               | -                     | Padding снизу. Наивысший приоритет для нижней стороны                       |
| pl             | string \| number               | -                     | Padding слева. Наивысший приоритет для левой стороны                        |
| background     | string                         | -                     | Цвет фона контейнера                                                        |
| height         | string \| number               | -                     | Высота контейнера                                                           |
| width          | string \| number               | -                     | Ширина контейнера                                                           |
| maxWidth       | string \| number               | -                     | Максимальная ширина контейнера                                              |
| color          | string                         | 'var(--steel-90)'     | Цвет текста                                                                 |
| border         | string                         | -                     | CSS свойство border                                                         |
| borderRadius   | string \| number               | -                     | Радиус скругления углов                                                     |
| display        | CSSProperties['display']       | 'flex'                | CSS свойство display                                                        |
| flexDirection  | CSSProperties['flexDirection'] | -                     | Направление flex контейнера                                                 |
| justifyContent | CSSProperties['justifyContent']| -                     | Выравнивание по главной оси                                                 |
| alignItems     | CSSProperties['alignItems']    | -                     | Выравнивание по поперечной оси                                              |
| flexWrap       | CSSProperties['flexWrap']      | -                     | Перенос flex элементов                                                      |
| gap            | string \| number               | '24px'                | Промежуток между дочерними элементами                                       |
| st             | CSSProperties                  | -                     | Дополнительные inline стили (наивысший приоритет)                           |
| className      | string                         | -                     | Дополнительные CSS классы                                                   |

## Система приоритетов для spacing

- `p` — базовый padding для всех сторон
- `px/py` — padding по осям (перезаписывает p)
- `pt/pr/pb/pl` — padding для конкретных сторон (наивысший приоритет)

**Пример:**
```jsx
<Box p={10} px={20} pl={30} /> // top: 10px, right: 20px, bottom: 10px, left: 30px
```

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS-модули для стилизации. Основные классы:

- `.wrapper`: Основной контейнер Box

Чтобы применить пользовательские стили, вы можете передать свой `className` и переопределить необходимые стили.

### 2. Inline-стили

Используйте проп `st` для передачи inline-стилей с наивысшим приоритетом:

```jsx
<Box st={{ backgroundColor: 'red', padding: '20px' }}>
  Контент
</Box>
```

### 3. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
[data-testid="BOX_WRAPPER"] {
  /* Ваши стили */
}
```

## Примеры использования

### Flex-контейнер с отступами

```jsx
<Box 
  display="flex" 
  gap={16} 
  p={24} 
  background="#f0f0f0"
>
  <div>Элемент 1</div>
  <div>Элемент 2</div>
</Box>
```

### Контейнер с границей и скруглением

```jsx
<Box 
  border="1px solid #ddd" 
  borderRadius={8} 
  p={16}
>
  Контент
</Box>
```

### Вертикальный stack

```jsx
<Box 
  display="flex" 
  flexDirection="column" 
  gap={8}
>
  <div>Элемент 1</div>
  <div>Элемент 2</div>
</Box>
```
