# Dropdown

## Версия компонента v3.0

Компонент Dropdown предоставляет удобный способ создания интерактивных выпадающих меню с настраиваемыми кнопками и элементами меню.

## Использование Dropdown

```jsx
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

<Dropdown buttonChildren='Dropdown button'>
  {positions.map(({ value, disabled }) => (
    <DropdownMenuItem value={value} disabled={disabled}>
      <Typography variant="Body1-Medium">{value}</Typography>
    </DropdownMenuItem>
  ))}
</Dropdown>;
```

## Props

| Prop           | Type          | Default        | Description                                  |
|----------------|---------------|----------------|----------------------------------------------|
| children       | ReactNode     | -              | Элементы, которые будут отображаться в меню  |
| disabled       | boolean       | false          | Отключает кнопку и возможность открытия меню |
| className      | string        | -              | Дополнительный класс для кнопки              |
| buttonChildren | ReactNode     | -              | Содержимое кнопки                            |
| size           | EButtonSize  | EButtonSize.m | Размер кнопки и меню                         |
| menuStyle      | CSSProperties | -              | Кастомные стили кнопки.                      |

### Стили для компонента `Dropdown`

Компонент использует CSS модули для стилизации. Основные классы:

- `.icon-rotate`: Контейнер для иконки, отвечающий за анимацию поворота
- `.icon-rotate-open`: Класс, применяемый при открытом состоянии, трансформирует иконку на 180 градусов
- `.icon-padding`: Класс для добавления верхнего отступа иконе
- `.button`: Класс для стилизации кнопки
- `&:focus`: Стили для кнопки при фокусе (смена фона и цвета текста)

Вы можете переопределить эти стили, передав собственный `className`.
