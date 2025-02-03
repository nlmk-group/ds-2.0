# Autocomplete Component

## Версия компонента v3.0

Компонент Autocomplete используется для предоставления функции автозаполнения на основе введенного текста, позволяя пользователю выбирать из предложенных вариантов.

## Использование

```jsx
import { Autocomplete } from '@nlmk/ds-2.0';

// Базовое использование
<Autocomplete
  items={[
    { id: 1, label: 'Первый', value: 'value_1' },
    { id: 2, label: 'Второй', value: 'value_2' }
  ]}
  nameGetter={({ label }) => label}
  onChange={(item) => console.log(item)}
/>;

// С созданием нового элемента
<Autocomplete
  items={items}
  nameGetter={({ label }) => label}
  onChange={onChange}
  onCreateItem={(value) => console.log('Creating:', value)}
  createItemText={(value) => `Создать: ${value}`}
/>;

// С подгрузкой данных
<Autocomplete
  items={items}
  nameGetter={({ label }) => label}
  onChange={onChange}
  isLoading={isLoading}
  onLoadMore={handleLoadMore}
  canLoadMore={hasMoreItems}
/>;
```

## Props

| Prop                   | Type                              | Default                       | Description                               |
|------------------------|-----------------------------------|-------------------------------|-------------------------------------------|
| selected               | IAutocompleteValue                | -                             | Изначально выбранный элемент              |
| items                  | Array<IAutocompleteValue> \| null | []                            | Массив элементов для автозаполнения       |
| isLoading              | boolean                           | false                         | Состояние загрузки данных                 |
| nameGetter             | function                          | -                             | Функция для получения отображаемой строки |
| renderLabel            | function                          | -                             | Кастомный рендер label для опций          |
| onChange               | function                          | -                             | Колбэк при выборе/очистке элемента        |
| onFullItemSelect       | function                          | -                             | Колбэк для получения полного объекта      |
| onDebouncedInputChange | function                          | -                             | Колбэк после завершения ввода             |
| disabled               | boolean                           | false                         | Отключить ввод и выбор                    |
| helperText             | string                            | ''                            | Сообщение об ошибке                       |
| error                  | boolean                           | false                         | Флаг состояния ошибки                     |
| showTooltip            | boolean                           | false                         | Показывать tooltip при наведении          |
| readOnly               | boolean                           | false                         | Только для чтения                         |
| isFullWidth            | boolean                           | false                         | Занимать полную ширину                    |
| withPortal             | boolean                           | false                         | Рендерить через портал                    |
| size                   | EAutocompleteSize                 | 'm'                           | Размер компонента                         |
| canLoadMore            | boolean                           | false                         | Можно ли загрузить больше данных          |
| onLoadMore             | function                          | -                             | Колбэк для догрузки данных                |
| onCreateItem           | function                          | -                             | Колбэк для создания нового элемента       |
| noResultsText          | string                            | 'No results for your request' | Текст при отсутствии результатов          |
| createItemText         | function                          | (value) => `Create: ${value}` | Текст кнопки создания элемента            |
| className              | string                            | -                             | Дополнительный CSS класс                  |
| style                  | CSSProperties                     | -                             | Inline стили                              |

## Размеры (EAutocompleteSize)

- `xs` - экстра маленький (36px)
- `s` - маленький (40px)
- `m` - средний (48px, по умолчанию)

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS классы

Компонент использует CSS модули для стилизации. Основные классы:

```scss
.autocomplete {
  // Основной контейнер
}

.card {
  // Выпадающий список
  &-small {
    // Модификатор для маленького размера
  }

  &-extra-small {
    // Модификатор для экстра маленького размера
  }
}

.menu-item {
  // Элемент списка
}

.total {
  // Счетчик результатов
}

.not-found-item {
  // Блок "не найдено"
}

.icon-disabled {
  // Стили для отключенной иконки
}
```
Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер */
[data-ui-autocomplete] {
  /* стили */
}

/* Поле ввода */
[data-ui-autocomplete-input] {
  /* стили */
}

/* Контейнер иконок */
[data-ui-autocomplete-icons] {
  /* стили */
}

/* Кнопка очистки */
[data-ui-autocomplete-clear] {
  /* стили */
}

/* Иконка поиска */
[data-ui-autocomplete-search] {
  /* стили */
}

/* Выпадающий список */
[data-ui-autocomplete-dropdown] {
  /* стили */
}

/* Контейнер пустого состояния */
[data-ui-autocomplete-empty] {
  /* стили */
}

/* Элемент создания нового пункта */
[data-ui-autocomplete-create-item] {
  /* стили */
}

/* Сообщение об отсутствии результатов */
[data-ui-autocomplete-no-results] {
  /* стили */
}

/* Контейнер с результатами */
[data-ui-autocomplete-content] {
  /* стили */
}

/* Счетчик результатов */
[data-ui-autocomplete-total] {
  /* стили */
}

/* Элемент списка */
[data-ui-autocomplete-item] {
  /* стили */
}

/* Состояние загрузки */
[data-ui-autocomplete-loading] {
  /* стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `style`:

```jsx
<Autocomplete
  style={{ maxWidth: '300px', marginBottom: '16px' }}
  items={items}
  nameGetter={({ label }) => label}
  onChange={onChange}
/>
```

## Состояния

- **Обычное**: Базовое состояние с полем ввода
- **Фокус**: Открывается выпадающий список с опциями
- **Загрузка**: Показывается спиннер в выпадающем списке
- **Ошибка**: Красная обводка поля ввода и текст ошибки снизу
- **Отключенное**: Компонент становится неактивным, нельзя вводить текст или выбирать опции
- **Только чтение**: Нельзя вводить текст или открывать список, но можно видеть выбранное значение
- **Пустой результат**: Показывается сообщение об отсутствии результатов
- **Создание элемента**: При включенной опции показывается возможность создания нового элемента
- **Подгрузка данных**: При прокрутке до конца списка автоматически подгружаются новые данные

## Клавиатурная навигация

- **↓** (Стрелка вниз): Переход к следующему элементу списка
- **↑** (Стрелка вверх): Переход к предыдущему элементу списка
- **Enter**: Выбор текущего элемента
- **Escape**: Закрытие выпадающего списка
