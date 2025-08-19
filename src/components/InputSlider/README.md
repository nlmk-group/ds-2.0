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

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| min | number | 0 | Минимальное значение диапазона |
| max | number | 100 | Максимальное значение диапазона |
| label | string | - | Текст метки |
| step | number | 1 | Шаг изменения значения |
| value | number | - | Текущее значение ползунка |
| showValue | boolean | true | Показывать ли текущее значение |
| valuePosition | `${EInputSliderValuePosition}` | top | Позиция текущего значения (выше или справа от ползунка) |
| valueSuffix | string | '%' | Суффикс для отображаемого значения. Передайте '' для скрытия |
| onChange | (value: number) => void | - | Функция, вызываемая при изменении значения |
| disabled | boolean | false | Отключает ползунок |

## Позиционирование процентов

- `EInputSliderValuePosition.top`
- `EInputSliderValuePosition.right`

## Примеры использования valueSuffix

### Стандартное использование с процентами (по умолчанию)

```jsx
<InputSlider value={75} /> // Отобразит "75%"
```

### Скрытие суффикса

```jsx
<InputSlider value={50} valueSuffix="" /> // Отобразит только "50"
```

### Кастомные суффиксы

```jsx
<InputSlider value={100} valueSuffix=" кг" /> // Отобразит "100 кг"
<InputSlider value={25} valueSuffix=" шт" />  // Отобразит "25 шт"
<InputSlider value={80} valueSuffix=" м²" />  // Отобразит "80 м²"
```

```

```
