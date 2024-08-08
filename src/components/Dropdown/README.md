# Dropdown

## Версия компонента v3.0

Компонент Dropdown предоставляет удобный способ создания интерактивных выпадающих меню с настраиваемыми кнопками и элементами меню.

## Использование Dropdown

```jsx
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

<Dropdown>
  {positions.map(({ value, disabled }) => (
    <DropdownMenuItem value={value} disabled={disabled}>
      <Typography variant="Body1-Medium">{value}</Typography>
    </DropdownMenuItem>
  ))}
</Dropdown>;
```

## Props

| Prop       | Type         | Default        | Description                                           |
|------------|--------------|----------------|-------------------------------------------------------|
| children   | ReactNode    | -              | Элементы, которые будут отображаться в меню           |
| disabled   | boolean      | false          | Отключает кнопку и возможность открытия меню          |
| className  | string       | -              | Дополнительный класс для кнопки                       |
| buttonText | string       | -              | Текст, отображаемый в кнопке                          |
| size       | EButtonSizes | EButtonSizes.m | Размер кнопки и меню                                  |
| startIcon  | ReactNode    | -              | Иконка, которая располагается с левой стороны кнопки. |

### Стили для компонента `Dropdown`

Компонент использует CSS модули для стилизации. Основные классы:

- `.icon-rotate`: Контейнер для иконки, отвечающий за анимацию поворота
- `.icon-rotate-open`: Класс, применяемый при открытом состоянии, трансформирует иконку на 180 градусов
- `.icon-padding`: Класс для добавления верхнего отступа иконе
- `.button`: Класс для стилизации кнопки
- `&:focus`: Стили для кнопки при фокусе (смена фона и цвета текста)
- `.start-icon`: Класс для стилизации иконки в начале кнопки, с небольшим сдвигом сверху

Вы можете переопределить эти стили, передав собственный `className`.
