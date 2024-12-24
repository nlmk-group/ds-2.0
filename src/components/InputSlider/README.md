# Компонент InputSlider

Компонент InputSlider предоставляет интерфейс ползунка для выбора числового значения в указанном диапазоне

## Использование

```jsx
import React, { useState } from 'react';
import InputSlider from '@your-package/input-slider';
const App = () => {
  const [value, setValue] = useState(50);
  const handleChange = newValue => {
    setValue(newValue);
  };
  return (
    <InputSlider
      min={0}
      max={100}
      value={value}
      onChange={handleChange}
      showValue={true}
      valuePosition="top"
      label="Выберите значение"
    />
  );
};
export default App;
```

## Props

| Prop          | Type                           | Default | Description                                             |
| ------------- | ------------------------------ | ------- | ------------------------------------------------------- |
| min           | number                         | 0       | Минимальное значение диапазона                          |
| max           | number                         | 100     | Максимальное значение диапазона                         |
| label         | string                         | -       | Текст метки                                             |
| step          | number                         | 1       | Шаг изменения значения                                  |
| value         | number                         | -       | Текущее значение ползунка                               |
| showValue     | boolean                        | true    | Показывать ли текущее значение                          |
| valuePosition | `${EInputSliderValuePosition}` | top     | Позиция текущего значения (выше или справа от ползунка) |
| onChange      | (value: number) => void        | -       | Функция, вызываемая при изменении значения              |
| disabled      | boolean                        | false   | Отключает ползунок                                      |

## Позиционирование процентов

- `EInputSliderValuePosition.top`
- `EInputSliderValuePosition.right`
