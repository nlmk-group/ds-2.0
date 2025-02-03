# Pagination Component

## Версия компонента v3.0

Компонент Pagination предназначен для постраничной навигации. Поддерживает два режима отображения (простой и сложный), возможность выбора количества элементов на странице и различные варианты кастомизации.

## Использование

```tsx
import { Pagination } from '@nlmk/ds-2.0';

// Базовое использование
const Example = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={10} />;
};
// Расширенное использование с выбором количества элементов
const AdvancedExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(10);
  return (
    <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      maxPageCount={10}
      withSelect
      elementsPerPage={elementsPerPage}
      setElementsPerPage={setElementsPerPage}
      pageSizes={[10, 20, 30, 50, 100]}
      onPageChange={page => console.log(`Page changed to ${page}`)}
      onPageSizeChange={size => console.log(`Elements per page changed to ${size}`)}
    />
  );
};
```

## Props

| Prop               | Type                             | Default           | Описание                                        |
| ------------------ | -------------------------------- | ----------------- | ----------------------------------------------- |
| currentPage        | number                           | -                 | Текущая активная страница                       |
| setCurrentPage     | Dispatch<SetStateAction<number>> | -                 | Функция для изменения текущей страницы          |
| maxPageCount       | number                           | -                 | Общее количество страниц                        |
| elementsPerPage    | number                           | 10                | Количество элементов на странице                |
| setElementsPerPage | Dispatch<SetStateAction<number>> | -                 | Функция для изменения количества элементов      |
| className          | string                           | -                 | Дополнительный CSS класс                        |
| withSelect         | boolean                          | false             | Флаг отображения селектора элементов            |
| pageSizes          | number[]                         | [10,20,30,50,100] | Массив значений для выбора количества элементов |
| onPageChange       | (page: number) => void           | -                 | Колбэк при изменении страницы                   |
| onPageSizeChange   | (pageSize: number) => void       | -                 | Колбэк при изменении количества элементов       |

## Режимы отображения

- **Простой режим**: Активируется при maxPageCount <= 5. Отображает все страницы в виде кнопок.
- **Сложный режим**: Активируется при maxPageCount > 5. Отображает первую, последнюю и некоторые промежуточные страницы с разделителями.

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.pagination`: Основной контейнер компонента пагинации.
- `.panel`: Внутренний контейнер, в котором располагается селектор количества записей и кнопки переключения страниц.
- `.show`: Контейнер для селектора выбора количества элементов на странице.
- `.showTitle`: Заголовок перед селектором (например, "Отображать").
- `.select`: Селектор выбора количества записей на странице.
- `.controls`: Контейнер для управляющих элементов пагинации (кнопки и номера страниц).
- `.chevronWrapper`: Обёртка для кнопок переключения страниц ("Chevron" кнопки - "лево"/"право").
- `.chevron`: Базовый стиль кнопок "Chevron".
- `.left`: Дополнительный стиль для кнопки "Назад".
- `.right`: Дополнительный стиль для кнопки "Вперёд".

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Заголовок блока выбора количества записей на странице */
[data-ui-pagination-select-title] {
  /* Ваши стили */
}

/* Селектор выбора количества записей на странице */
[data-ui-pagination-select] {
  /* Ваши стили */
}

/* Элемент внутри селектора выбора количества записей на странице */
[data-ui-pagination-select-item] {
  /* Ваши стили */
}

/* Кнопка переключения на предыдущую страницу */
[data-ui-pagination-button-chevron-left] {
  /* Ваши стили */
}

/* Кнопка переключения на следующую страницу  */
[data-ui-pagination-button-chevron-right] {
  /* Ваши стили */
}

/* Контейнер для простых кнопок пагинации (режим с <= 5 страниц) */
[data-ui-pagination-buttons-plain] {
  /* Ваши стили */
}

/* Контейнер для сложных кнопок пагинации (режим с > 5 страниц) */
[data-ui-pagination-buttons-complex] {
  /* Ваши стили */
}
```
