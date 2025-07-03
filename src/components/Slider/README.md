# Компонент Slider

## Версия компонента 3.0

Компонент **Slider** предоставляет низкоуровневый интерфейс для создания слайдеров (ползунков) с возможностью кастомизации. Используется для выбора одного или двух значений в заданном диапазоне, например, для фильтрации или задания параметров.

---

## Базовый пример использования

```jsx

const Example = () => {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(90);

  const handleMinChange = (e) => setMinValue(Number(e.target.value));
  const handleMaxChange = (e) => setMaxValue(Number(e.target.value));

  const min = 0;
  const max = 100;
  const step = 1;

  const minRangePos = ((minValue - min) / (max - min)) * 100;
  const maxRangePos = ((maxValue - min) / (max - min)) * 100;

  return (
    <Slider.Wrapper>
      <Slider.InputWrapper>
        <Slider.Input
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <Slider.Input
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </Slider.InputWrapper>
      <Slider.ControlWrapper>
        <Slider.Control position={minRangePos} value={minValue} />
        <Slider.Rail minPosition={minRangePos} maxPosition={maxRangePos} />
        <Slider.Control position={maxRangePos} value={maxValue} />
      </Slider.ControlWrapper>
    </Slider.Wrapper>
  );
};

export default Example;
```

---

## Props

### Slider.Wrapper

| Prop      | Type              | Default | Description                        |
|-----------|-------------------|---------|------------------------------------|
| children  | ReactNode         | -       | Вложенные элементы                 |

### Slider.InputWrapper

| Prop      | Type              | Default | Description                        |
|-----------|-------------------|---------|------------------------------------|
| children  | ReactNode         | -       | Вложенные элементы                 |

### Slider.ControlWrapper

| Prop      | Type              | Default | Description                        |
|-----------|-------------------|---------|------------------------------------|
| children  | ReactNode         | -       | Вложенные элементы                 |

### Slider.Input

| Prop      | Type                                                        | Default | Description                                 |
|-----------|-------------------------------------------------------------|---------|---------------------------------------------|
| value     | number                                                      | -       | Текущее значение                            |
| min       | number                                                      | -       | Минимальное значение                        |
| max       | number                                                      | -       | Максимальное значение                       |
| step      | number                                                      | 1       | Шаг изменения значения                      |
| onChange  | (e: ChangeEvent<HTMLInputElement>) => void                  | -       | Обработчик изменения                        |
| disabled  | boolean                                                     | false   | Отключает ввод                              |
| setHover  | (value: boolean) => void                                    | -       | Коллбэк для отслеживания наведения          |
| ...props  | Все стандартные props input[type="range"]                   |         |                                             |

### Slider.Control

| Prop                | Type                                         | Default   | Description                                         |
|---------------------|----------------------------------------------|-----------|-----------------------------------------------------|
| position            | number                                       | -         | Позиция ползунка в процентах (0-100)                |
| value               | number                                       | -         | Значение, отображаемое над ползунком                |
| showValue           | boolean                                      | true      | Показывать ли значение                              |
| disabled            | boolean                                      | false     | Отключает ползунок                                  |
| hover               | boolean                                      | false     | Состояние наведения                                 |
| thumbValuePosition  | 'top' \| 'bottom' \| 'none'                  | 'top'     | Положение значения относительно ползунка            |

### Slider.Rail

| Prop        | Type      | Default | Description                                 |
|-------------|-----------|---------|---------------------------------------------|
| minPosition | number    | -       | Левая граница rail в процентах (0-100)      |
| maxPosition | number    | -       | Правая граница rail в процентах (0-100)     |
| disabled    | boolean   | false   | Отключает rail                              |

---

## Другие варианты использования

- **Одинарный слайдер:** Используйте только один `<Slider.Input />` и `<Slider.Control />`.
- **Диапазон:** Используйте два `<Slider.Input />` и два `<Slider.Control />` для выбора диапазона.
- **Кастомизация отображения значения:** Используйте проп `showValue={false}` или `thumbValuePosition="bottom"`/`"none"` для изменения позиции/отображения значения.

---

## Стилизация

Компонент использует CSS-модули. Основные классы:

- `.wrapper` — основной контейнер слайдера
- `.input-wrapper` — контейнер для input[type="range"]
- `.control-wrapper` — контейнер для визуальных контролов
- `.input` — скрытый input[type="range"]

Для кастомизации можно использовать эти классы через переопределение стилей или обертку с дополнительным классом.

---

## Дочерние компоненты

- **Slider.Wrapper** — контейнер для всего слайдера
- **Slider.InputWrapper** — контейнер для input-элементов
- **Slider.ControlWrapper** — контейнер для визуальных контролов
- **Slider.Input** — кастомизированный input[type="range"]
- **Slider.Control** — визуальный контрол (ползунок)
- **Slider.Rail** — трек между ползунками

---

## Дополнительная информация

- Компонент Slider — низкоуровневый, для типовых сценариев используйте более высокоуровневые компоненты, например, `InputSlider` или `InputRange`.
- Все значения позиций (`position`, `minPosition`, `maxPosition`) задаются в процентах (0-100).

---
