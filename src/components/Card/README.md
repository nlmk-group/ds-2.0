# Компонент Card

## Версия компонента 3.0

Компонент Card, который предоставляет настраиваемый макет карточки с различными вариантами ориентации и статусами индикатора.

## Использование

```jsx
import {Card} from @'nlmk-ds2.0';

<Card
    orientation={EOrientationMapping.vertical}
    indicatorSize={sizesMapping.s}
    indicatorStatus={EIndicatorStatusMapping.default}
/>;
```

## Props

| Prop            | Type                         | Default                           | Description         |
| --------------- | ---------------------------- | --------------------------------- | ------------------- |
| orientation     | `${EOrientationMapping}`     | `EOrientationMapping.vertical`    | Ориентация карточки |
| indicatorSize   | `${sizesMapping}`            | `sizesMapping.s`                  | Размер индикатора   |
| indicatorStatus | `${EIndicatorStatusMapping}` | `EIndicatorStatusMapping.default` | Статус индикатора   |
| className       | string                       | -                                 | CSS классы          |
| children        | ReactNode                    | -                                 | Контент внутри Card |

## Ориентация Card

- `EOrientationMapping.vertical`
- `EOrientationMapping.horizontal`

## Размеры индикатора

- `EIndicatorStatusMapping.default`
- `EIndicatorStatusMapping.success`
- `EIndicatorStatusMapping.error`
- `EIndicatorStatusMapping.warning`
- `EIndicatorStatusMapping.info`

## Стилизация

Компонент использует CSS-модули для стилизации. Вот основные классы, которые используются:

- `.wrapper`: основной контейнер для карточки.
- `.wrapper-vertical`: стили для вертикальной ориентации.
- `.wrapper-horizontal`: стили для горизонтальной ориентации.
- `indicator-vertical`: стили для вертикального индикатора.
- `indicator-horizontal`: стили для горизонтального индикатора.
- `indicator-default`: стили индикатора по умолчанию.
- `indicator-active`: стили для активного статуса.
- `indicator-inactive`: стили для неактивного статуса.
- `indicator-error`: стили для статуса ошибки.
- `card-vertical`: стили для вертикальной карточки.
- `card-horizontal`: стили для горизонтальной карточки.
