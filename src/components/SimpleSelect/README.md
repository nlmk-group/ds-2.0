# SimpleSelect Component

## Версия компонента v3.0

SimpleSelect компонент используется для создания выпадающего списка с возможностью поиска и кастомизации.

## Использование

```jsx
import { OptionItem, SimpleSelect } from '@nlmk/ds-2.0';

<SimpleSelect value={selectedValue} onChange={handleChange} label="Выберите опцию" searchable>
  <OptionItem value="option1">Option 1</OptionItem>
  <OptionItem value="option2">Option 2</OptionItem>
  <OptionItem value="option3">Option 3</OptionItem>
</SimpleSelect>;
```

## Props

| Prop              | Type              | Default                   | Description                                 |
| ----------------- | ----------------- | ------------------------- | ------------------------------------------- |
| value             | string \| number  | -                         | Значение селекта                            |
| onChange          | function          | -                         | Обработчик изменения значения селекта       |
| id                | string            | -                         | Идентификатор компонента                    |
| name              | string            | -                         | Имя элемента                                |
| portalContainerId | string            | 'root'                    | ID рутового контейнера для создания портала |
| children          | ReactNode         | -                         | Дочерние элементы селекта (опции меню)      |
| menuWidth         | string            | -                         | Ширина меню селекта                         |
| placeholder       | string            | -                         | Плейсхолдер для инпута селекта              |
| label             | string            | -                         | Лейбл инпута в селекте                      |
| withPortal        | boolean           | false                     | Флаг рендеринга меню в портале              |
| disabled          | boolean           | false                     | Флаг доступности селекта                    |
| onFocus           | function          | -                         | Обработчик открытия меню options            |
| onBlur            | function          | -                         | Обработчик закрытия меню options            |
| color             | customInputColors | customInputColors.default | Цвет компонента                             |
| size              | sizesMappingInput | sizesMappingInput.m       | Размер компонента                           |
| scrollingItems    | number            | ScrollingItemsDefault     | Количество элементов до включения прокрутки |
| noOptionsText     | string            | 'Ничего не найдено'       | Текст при отсутствии опций                  |
| searchable        | boolean           | false                     | Флаг доступности поиска                     |
| colored           | boolean           | false                     | Флаг применения цветовых стилей             |
| onEnterPress      | function          | -                         | Обработчик нажатия клавиши Enter            |
| className         | string            | -                         | Дополнительный CSS класс                    |
| style             | CSSProperties     | -                         | Кастомные стили для компонента              |
| reset             | boolean           | false                     | Флаг наличия кнопки сброса                  |
| onReset           | () => void        | -                         | Обработчик сброса значения                  |

## Примечания

- Компонент поддерживает кастомизацию через пропсы `color`, `size` и `style`.
- Для добавления опций используйте компонент `OptionItem` в качестве дочерних элементов.
- При использовании `withPortal={true}`, убедитесь, что в DOM существует элемент с id, указанным в `portalContainerId`.

## Стилизация

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.select`: Базовый класс для корневого элемента
- `.select__input`: Класс для инпута селекта
- `.input-helper`: Вспомогательный класс для стилизации инпута

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер SimpleSelect */
[data-ui-select] {
  /* Ваши стили */
}

/* Поле ввода внутри SimpleSelect */
[data-ui-select-input] {
  /* Ваши стили */
}
/* Кнопка-стрелочка внутрия поля SimpleSelect */
[data-ui-select-arrow-button] {
  /* Ваши стили */
}
/* Контейнер для выпадающего списка */
[data-ui-select-options] {
  /* Ваши стили */
}

/* Отдельный элемент внутри выпадающего списка */
[data-ui-select-option] {
  /* Ваши стили */
}
```
