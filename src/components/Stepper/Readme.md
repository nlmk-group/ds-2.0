# Stepper Component
## Версия компонента v3.0

Stepper компонент используется для отображения последовательности шагов, например, в форме или процессе регистрации. Он поддерживает различные состояния шагов и позволяет пользователям легко ориентироваться между ними.

## Использование

```jsx
import { Stepper, EStepState } from '@nlmk/ds-2.0';

<Stepper
  state={EStepState.filled}
  stepName="Step 1"
  showStep={true}
  index={0}
  onClick={({ state, index }) => console.log(`Clicked on step ${index} with state ${state}`)}
/>
```

## Props

| Prop       | Type                                      | Default     | Description                           |
|------------|-------------------------------------------|-------------|---------------------------------------|
| state      | `${EStepState}`                           | 'notFilled' | Состояние шага                        |
| stepName   | string                                    | 'undefined' | Название шага                         |
| className  | string                                    | -           | Дополнительный CSS класс              |
| index      | number                                    | '0'         | Индекс шага                           |
| showStep   | boolean                                   | false       | Показывать ли шаг                     |
| onClick    | ({ state: `${EStepState}`, index: number }) => void | -           | Обработчик клика по шагу              |

## Состояния шагов (EStepState)

- `filled`: Заполнен
- `focused`: Сфокусирован
- `inProgress`: В процессе
- `notFilled`: Не заполнен (по умолчанию)
- `disabled`: Отключен

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.step-button`: Базовый класс для кнопок шагов
- `.step-name`: Класс для названий шагов
- `.disabled`: Класс для отключенных шагов
- `.divider-line`: Класс для линии-разделителя между шагами

Вы можете переопределить эти стили, передав собственный `className`.

## Примечание

Компонент Stepper расширяет стандартные атрибуты HTML-элементов, поэтому вы можете использовать любые дополнительные атрибуты и обработчики событий, такие как `onClick`, `className` и т.д.
