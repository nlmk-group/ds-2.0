# Компонент Accordion

## Версия компонента 3.0

Компонент Accordion предоставляет интерфейс аккордеона с возможностью управления состоянием открытия/закрытия его элементов.

## Использование

```jsx
import Accordion from '@nlmk/ds-2.0';

const App = () => {
  const items = [
    { id: 'item1', title: 'Заголовок 1', content: 'Содержание 1', initiallyExpanded: false, disabled: false },
    { id: 'item2', title: 'Заголовок 2', content: 'Содержание 2', initiallyExpanded: true, disabled: false }
  ];
  return (
    <Accordion items={items} variant="default" size="m" multipleExpanded={true} className="custom-accordion-class" />
  );
};
export default App;
```

## Props

| Prop             | Type                    | Default                      | Description                                                 |
|------------------|-------------------------|------------------------------|-------------------------------------------------------------|
| items            | TAccordionItem[]        | -                            | Массив элементов аккордеона                                 |
| variant          | `${EVariantsAccordion}` | `EVariantsAccordion.default` | Вариант внешнего вида аккордеона                            |
| startIcon        | `${EIconsAccordion}`    | `EIconsAccordion.arrow`      | Иконка в начале заголовка                                   |
| endIcon          | ReactNode               | null                         | Иконка в конце заголовка                                    |
| size             | `${ESizesAccordion}`    | `ESizesAccordion.m`          | Размер аккордеона                                           |
| multipleExpanded | boolean                 | false                        | Разрешает одновременное разворачивание нескольких элементов |
| className        | string                  | -                            | Дополнительный CSS-класс                                    |
| disabled         | boolean                 | false                        | Отключает аккордеон                                         |

## Варианты Accordion

- `EVariantsAccordion.default`
- `EVariantsAccordion.paper`

## Размеры Accordion

- `ESizesAccordion.m`
- `ESizesAccordion.s`
- `ESizesAccordion.xs`

## Иконки Accordion

- `EIconsAccordion.arrow`
- `EIconsAccordion.plus`

## Стилизация

Компонент использует CSS-модули для стилизации. Вот основные классы, которые используются:

- `.wrapper`: Основной контейнер для аккордеона.
- `.header`: Контейнер для заголовка элемента аккордеона.
- `.content`: Контейнер для содержания элемента аккордеона.
- `.hovered`: Применяется при наведении на заголовок.
- `.disabled`: Применяется к отключенному элементу.

Чтобы применить пользовательские стили, вы можете передать свой className и переопределить необходимые стили.
