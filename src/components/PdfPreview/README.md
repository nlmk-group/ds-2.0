# PdfPreview Component

## Версия компонента v3.0

PdfPreview — это функциональный компонент в React, который показывает предварительный просмотр PDF-файла. Он работает с данными PDF, умеет обрабатывать загрузку файла и выводит сообщения об ошибках, если что-то пошло не так. Компонент очень гибкий, так что вы можете настроить, как он выглядит и ведёт себя.

## Использование

```jsx
import React, { useEffect, useState } from 'react';
import { PdfPreview } from './PdfPreview';
export const Example = () => {
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    // Получите или создайте ваши PDF-данные здесь
    fetch('/path/to/your/pdf')
      .then(response => response.blob())
      .then(data => {
        setPdfData(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Не удалось загрузить PDF');
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <PdfPreview data={pdfData} loading={loading} errorMessage={error} previewStyle={{ border: '1px solid #ccc' }} />
    </div>
  );
};
```

## Props

| Prop         | Type             | Default                           | Description                                |
| ------------ | ---------------- | --------------------------------- | ------------------------------------------ |
| data         | BlobPart \| null | -                                 | Данные PDF файла в формате blob            |
| loading      | boolean          | false                             | Флаг состояния загрузки                    |
| style        | CSSProperties    | -                                 | Дополнительные CSS стили                   |
| errorMessage | string           | -                                 | Сообщение об ошибке при неудачной загрузке |
| emptyMessage | string           | 'Выберите PDF файл для просмотра' | Текст при отсутствии выбранного файла      |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.pdf-viewer`: Основной контейнер
- `.pdf-viewer--loading`: Состояние загрузки
- `.pdf-viewer--error`: Состояние ошибки
- `.pdf-viewer--empty`: Состояние отсутствия файла

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Компонент предоставляет следующие data-атрибуты для стилизации:

```css
/* Стилизация контейнера */
[data-ui-pdf] {
  /* стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `style`:

```jsx
<PdfPreview data={pdfData} style={{ border: '1px solid #ccc', height: '500px' }} />
```

## Состояния

- **Загрузка**: Отображается спиннер
- **Ошибка**: Показывается сообщение об ошибке
- **Пустое состояние**: Показывается сообщение с приглашением выбрать файл
- **Успех**: Отображается PDF документ

## Примечание

Компонент автоматически очищает ресурсы (URL.revokeObjectURL) при размонтировании для предотвращения утечек памяти.
