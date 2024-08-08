# Typography Component
## Версия компонента v3.0

Typography компонент используется для стилизованного отображения текста. Он поддерживает различные варианты типографики, позволяет настраивать цвет и применять дополнительные стили.

## Использование

```jsx
import { Typography, ETypographyVariants } from '@nlmk/ds-2.0';

<Typography
  variant={ETypographyVariants.Heading1}
  color="blue"
>
  Заголовок
</Typography>
```

## Props

| Prop      | Type                   | Default                   | Description                     |
|-----------|------------------------|---------------------------|---------------------------------|
| variant   | ETypographyVariants    | ETypographyVariants.Body1 | Вариант типографики             |
| children  | React.ReactNode        | -                         | Текстовое содержимое            |
| className | string                 | -                         | Дополнительный CSS класс        |
| color     | CSSProperties['color'] | -                         | Цвет текста                     |
| style     | CSSProperties          | -                         | Дополнительные встроенные стили |

## Варианты типографики (ETypographyVariants)

- `Heading1`, `Heading2`, `Heading3`, `Heading4`
- `Subheading1`, `Subheading2`, `Subheading2-Medium`, `Subheading3`, `Subheading3-Medium`
- `Body`, `Body-Medium`, `Body-Bold`
- `Body1`, `Body1-Medium`, `Body1-Bold`, `Body1Table-Medium`, `Body1Mono-Medium`, `Body1Mono-Bold`
- `Body2`, `Body2-Medium`, `Body2-Bold`, `Body2Mono-Medium`, `Body2Mono-Bold`
- `Caption`, `Caption-Medium`, `Caption-Bold`
- `CaptionMono`, `CaptionMono-Medium`, `CaptionMono-Bold`
- `Additional-Bold`

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.typography`: Базовый класс для всех вариантов типографики
- `.typography--variant-{variant}`: Классы для каждого варианта типографики

Вы можете переопределить эти стили, передав собственный `className` или используя проп `style`.

## Примечание

Компонент Typography рендерится как `<span>` элемент. Если вам нужен другой HTML-элемент, вы можете обернуть Typography в нужный вам тег.
