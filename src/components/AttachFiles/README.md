# Компонент AttachFiles

Компонент AttachFiles предназначен для отображения и управления прикреплёнными файлами. Он поддерживает форматирование заголовка и список вложений.

## Использование

```jsx
import React from 'react';
import AttachFiles from '@your-package/attach-files';
const App = () => {
  return (
    <AttachFiles title={<h3>Прикреплённые файлы</h3>} className="custom-attach-files">
      <p>Файл 1: document.pdf</p>
      <p>Файл 2: image.png</p>
    </AttachFiles>
  );
};
export default App;
```

## Props

| Prop      | Type                     | Default | Description                               |
| --------- | ------------------------ | ------- | ----------------------------------------- |
| className | string                   | -       | Дополнительный CSS-класс                  |
| title     | ReactElement<IFile, any> | -       | Заголовок для секции прикреплённых файлов |
| children  | ReactNode[] \| ReactNode | -       | Дочерние элементы (список файлов)         |

## Стилизация

Компонент использует CSS-модули для стилизации. Чтобы применить пользовательские стили, вы можете передать свой className и переопределить необходимые классы.

Основные классы:

- `.list-center`: Основной контейнер для списка файлов.
- `.list-with-title`: Стили для списка файлов с заголовком.
