# MultiSelect Component

## Версия компонента v3.2

MultiSelect компонент используется для создания выпадающего списка с возможностью выбора нескольких значений. Выбранные значения отображаются в поле ввода через указанный разделитель (по умолчанию - запятая).

## Использование

```jsx
import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';

<MultiSelect value={['option1', 'option2']} onChange={values => console.log(values)} label="Выберите опции">
  <OptionItem value="option1" label="Опция 1" />
  <OptionItem value="option2" label="Опция 2" />
  <OptionItem value="option3" label="Опция 3" />
</MultiSelect>;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | Array<string \| number> | [] | Массив выбранных значений |
| onChange | function | - | Обработчик изменения выбранных значений |
| id | string | - | Идентификатор компонента |
| name | string | - | Имя элемента |
| portalContainerId | string | 'root' | ID рутового контейнера для создания портала |
| children | ReactNode | - | Дочерние элементы селекта (опции меню) |
| menuWidth | string | - | Ширина меню селекта |
| placeholder | string | - | Плейсхолдер для инпута селекта |
| label | string | - | Лейбл инпута в селекте |
| withPortal | boolean | false | Флаг рендеринга меню в портале |
| disabled | boolean | false | Флаг доступности селекта |
| onFocus | function | - | Обработчик открытия меню options |
| onBlur | function | - | Обработчик закрытия меню options |
| color | customInputColors | customInputColors.default | Цвет компонента |
| size | sizesMappingInput | sizesMappingInput.m | Размер компонента |
| scrollingItems | number | 5 | Количество элементов до включения прокрутки |
| noOptionsText | string | 'Ничего не найдено' | Текст при отсутствии опций |
| searchable | boolean | false | Флаг доступности поиска |
| colored | boolean | false | Флаг применения цветовых стилей |
| onEnterPress | function | - | Обработчик нажатия клавиши Enter |
| className | string | - | Дополнительный CSS класс |
| style | CSSProperties | - | Кастомные стили для компонента |
| reset | boolean | false | Флаг наличия кнопки сброса |
| helperText | ReactNode | - | Вспомогательный текст |
| pseudo | boolean | false | Флаг псевдо-инпута |
| onReset | () => void | - | Обработчик сброса значения |
| valueSeparator | string | ', ' | Разделитель для отображения выбранных значений |
| allSelectedText | string | 'Все' | Текст при выборе всех элементов |
| selectAllLabel | string | 'Выбрать все' | Лейбл для кнопки "Выбрать все" |
| showSelectAll | boolean | false | Флаг отображения кнопки "Выбрать все" |
| maxVisibleTags | number | - | Максимальное число отображаемых тегов |
| showCounter | boolean | false | Отображение счетчика выбранных элементов |

## Примечания

- Компонент поддерживает кастомизацию через пропсы `color`, `size` и `style`.
- Для добавления опций используйте компонент `OptionItem` в качестве дочерних элементов.
- При использовании `withPortal={true}`, убедитесь, что в DOM существует элемент с id, указанным в `portalContainerId`.
- Компонент поддерживает опцию "Выбрать все" для быстрого выбора всех доступных опций.
- Выбранные значения можно отображать стандартным способом через разделитель или в виде тегов.

## Стилизация

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.multiSelect`: Базовый класс для корневого элемента
- `.multiSelect__input`: Класс для инпута селекта
- `.options`: Класс для контейнера с опциями
- `.selectAllContainer`: Контейнер с опцией "Выбрать все"

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер MultiSelect */
[data-ui-multi-select] {
  /* Ваши стили */
}

/* Поле ввода внутри MultiSelect */
[data-ui-multi-select-input] {
  /* Ваши стили */
}

/* Кнопка-стрелочка внутрия поля MultiSelect */
[data-ui-multi-select-arrow-button] {
  /* Ваши стили */
}

/* Контейнер для выпадающего списка */
[data-ui-multi-select-options] {
  /* Ваши стили */
}

/* Контейнер для опции "Выбрать все" */
[data-ui-multi-select-select-all] {
  /* Ваши стили */
}

/* Контейнер с сообщением "Ничего не найдено" */
[data-ui-multi-select-no-options] {
  /* Ваши стили */
}
```
