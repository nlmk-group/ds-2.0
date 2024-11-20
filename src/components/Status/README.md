# Status Component

## Версия компонента v3.0

Компонент Status используется для отображения информации о статусе какого-либо объекта. Он поддерживает различные цвета, размеры и заливку фона.

## Использование

```jsx
import { Status } from '@nlmk/ds-2.0';

<Status icon="IconCloudDoneOutlined24" color="default" size="m" fill="solid">
  Active
</Status>;
```

## Props

| Prop      | Type                     | Default              | Description                  |
|-----------|--------------------------|----------------------|------------------------------|
| color     | EStatusColor             | EStatusColor.default | Цвет статуса                 |
| size      | EStatusSize              | EStatusSize.m        | Размер статуса               |
| fill      | EStatusFill              | EStatusFill.solid    | Вариант заливки фона статуса |
| icon      | TIconName \| JSX.Element | -                    | Иконка статуса               |
| children  | string                   | -                    | Текст статуса                |
| className | string                   | -                    | Дополнительный CSS-класс     |

## Цвета (ЕStatusColor)

- `default` (по умолчанию)
- `error`
- `success`
- `warning`
- `grey`

## Размеры (EStatusSize)

- `l` - большой
- `m` - средний (по умолчанию)
- `s` - маленький

## Варианты заливки (EStatusFill)

- `solid` - сплошной фон (по умолчанию)
- `clear` - без фона

## Стилизация

Компонент использует CSS-модули для стилизации. Основные классы:

- `.status`: Основной класс
- `.color-{color}`: Классы для различных цветов
- `.size-{size}`: Классы для различных размеров
- `.fill-{fill}`: Классы для различных вариантов заливки фона

Вы можете переопределить эти стили, передав собственный `className`.
