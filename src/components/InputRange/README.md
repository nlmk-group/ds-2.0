# Компонент InputRange

Компонент InputRange предоставляет интерфейс двойного ползунка для выбора диапазона значений в указанном диапазоне.

## Использование

```jsx
import React, { useState } from 'react';
import InputRange from '@your-package/input-range';
const App = () => {
  const [range, setRange] = useState({ min: 20, max: 80 });
  const handleRangeChange = newRange => {
    setRange(newRange);
  };
  return <InputRange min={0} max={100} value={range} onChange={handleRangeChange} step={5} thumbValuePosition="top" />;
};
export default App;
```

## Props

| Prop               | Type                           | Default | Description                                 |
| ------------------ | ------------------------------ | ------- | ------------------------------------------- |
| min                | number                         | -       | Минимальное значение диапазона              |
| max                | number                         | -       | Максимальное значение диапазона             |
| step               | number                         | 1       | Шаг изменения значения                      |
| value              | { min: number; max: number }   | -       | Текущее значение диапазона                  |
| onChange           | () => void                     | -       | Функция, вызываемая при изменении диапазона |
| disabled           | boolean                        | false   | Отключает ползунок                          |
| thumbValuePosition | `${ESliderThumbValuePosition}` | top     | Позиция текущего значения ползунка          |

## Позиционирование процентов у ползунков

- `ESliderThumbValuePosition.top`
- `ESliderThumbValuePosition.bottom`
- `ESliderThumbValuePosition.none`
