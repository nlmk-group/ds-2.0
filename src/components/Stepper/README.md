# Stepper Component

## Версия компонента v3.2

Компонент Stepper используется для отображения последовательности шагов, например, в форме или процессе регистрации. Он поддерживает различные состояния шагов и позволяет пользователям легко ориентироваться между ними.

## Использование

```jsx
import React, { useState } from 'react';
import { EStepColor, EStepState, Stepper } from '@nlmk/ds-2.0';
const [currentStep, setCurrentStep] = useState(1);
<Stepper
  currentStep={currentStep}
  state={EStepState.filled}
  color={EStepState.brand}
  stepName="Step 1"
  showStep={true}
  index={0}
  onClick={({ state, index }) => console.log(`Clicked on step ${index} with state ${state}`)}
/>;
```

## Props

| Prop        | Type                                                | Default     | Description              |
| ----------- | --------------------------------------------------- | ----------- | ------------------------ |
| currentStep | number                                              | ---         | Текущий шаг              |
| state       | `${EStepState}`                                     | 'notFilled' | Состояние шага           |
| color       | `${EStepColor}`                                     | 'brand'     | Цвет шага                |
| stepName    | string                                              | 'undefined' | Название шага            |
| className   | string                                              | -           | Дополнительный CSS класс |
| index       | number                                              | '0'         | Индекс шага              |
| showStep    | boolean                                             | false       | Показывать ли шаг        |
| onClick     | ({ state: `${EStepState}`, index: number }) => void | -           | Обработчик клика по шагу |

## Состояния шагов (EStepState)

- `filled`: Заполнен
- `notFilled`: Не заполнен (по умолчанию)
- `disabled`: Отключен

## Цвета шагов (EStepColor)

- `brand`: цвет бренда
- `success`: цвет успеха
- `error`: цвет ошибки

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.step-button`: Базовый класс для кнопок шагов
- `.step-name`: Класс для названий шагов
- `.disabled`: Класс для отключенных шагов
- `.divider-line`: Класс для линии-разделителя между шагами

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер для шагов */
[data-ui-stepper] {
  /* Ваши стили */
}

/* Контейнер для отдельного шага */
[data-ui-step] {
  /* Ваши стили */
}
/* Разделитель между шагами */
[data-ui-stepper-divider] {
  /* Ваши стили */
}
```

## Примечание

Компонент Stepper расширяет стандартные атрибуты HTML-элементов, поэтому вы можете использовать любые дополнительные атрибуты и обработчики событий, такие как `onClick`, `className` и т.д.
