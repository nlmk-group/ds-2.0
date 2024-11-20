# Pagination Component

## Версия компонента v3.0

Компонент Pagination предназначен для постраничной навигации. Поддерживает два режима отображения (простой и сложный), возможность выбора количества элементов на странице и различные варианты кастомизации.

## Использование

```tsx
import { Pagination } from '@nlmk/ds-2.0';

// Базовое использование
const Example = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      maxPageCount={10}
    />
  );
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
      onPageChange={(page) => console.log(`Page changed to ${page}`)}
      onPageSizeChange={(size) => console.log(`Elements per page changed to ${size}`)}
    />
  );
};
```

## Props

| Prop               | Type                             | Default           | Описание                                        |
|--------------------|----------------------------------|-------------------|-------------------------------------------------|
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

Компонент использует SCSS модули для стилизации.

Вы можете переопределить эти стили, передав собственный `className`.

