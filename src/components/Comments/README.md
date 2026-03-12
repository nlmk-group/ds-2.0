# Компонент Comments

## Версия компонента 1.0

`Comments` отображает список комментариев с поддержкой:
- вложенных ответов
- редактирования
- удаления
- раскрытия и сворачивания веток
- обновления списка
- добавления новых комментариев
- композиции через compound pattern

## Использование

```jsx
import React from 'react';
import Comments from '@nlmk/ds-2.0';

const comments = [
  {
    id: '1',
    author: 'Иван Петров',
    content: 'Первый комментарий',
    createdAt: '2026-03-10T10:00:00Z',
    replies: [
      {
        id: '1-1',
        author: 'Анна Смирнова',
        content: 'Ответ на первый комментарий',
        createdAt: '2026-03-10T10:15:00Z',
        parentId: '1',
        replies: []
      }
    ]
  },
  {
    id: '2',
    author: 'Мария Иванова',
    content: 'Второй комментарий',
    createdAt: '2026-03-10T11:00:00Z',
    replies: []
  }
];

const App = () => {
  return (
    <Comments
      comments={comments}
      handleAddRootComment={data => {
        console.log('Добавить корневой комментарий', data);
      }}
      handleAddReply={data => {
        console.log('Добавить ответ', data);
      }}
      handleRefresh={() => {
        console.log('Обновить комментарии');
      }}
    >
      <Comments.Item>
        <Comments.Author />
        <Comments.Meta />
        <Comments.Content />
        <Comments.Actions />
      </Comments.Item>
    </Comments>
  );
};
```

## Props

| Prop                  | Type                                                | Default | Description                                                                          |
|-----------------------|-----------------------------------------------------|---------|--------------------------------------------------------------------------------------|
| comments              | `IComment[]`                                        | -       | Массив корневых комментариев. Вложенность задается через поле replies.               |
| children              | React.ReactNode                                     | -       | Шаблон комментария. Должен содержать Comments.Item.                                  |
| handleAddRootComment  | (data: ICommentFormData) => void                    | -       | Метод добавления нового корневого комментария.                                       |
| handleAddReply        | (parentId: string, data: ICommentFormData) => void  | -       | Метод добавления ответа к комментарию.                                               |
| handleRefresh         | () => void                                          | -       | Метод обновления списка комментариев. Если передан, отображается кнопка обновления.  |
| isLoading             | boolean                                             | false   | Состояние загрузки. При true вместо списка отображается спиннер.                     |
| className             | string                                              | -       | Дополнительный CSS-класс для корневого контейнера.                                   |

## Вложенные подкомпоненты
`Comments.Item`

Контейнер шаблона одного комментария.

```jsx
<Comments.Item>
<Comments.Author />
<Comments.Meta />
<Comments.Content />
<Comments.Actions />
</Comments.Item>
```

`Comments.Author`

Отображает автора комментария.

`Comments.Meta`

Отображает метаинформацию комментария, например дату создания, дату обновления, бейдж и ссылку, если они переданы в данных комментария.

`Comments.Content`

Отображает текст комментария.

`Comments.Actions`

Отображает действия комментария:

встроенные действия `onEdit` и `onDelete`

кастомные действия из `customActions`

кнопку ответа, если передан `handleAddReply`

`Comments.Badge`

Отображает бейдж комментария.

Обычно используется внутри кастомного шаблона, если требуется явно управлять расположением бейджа.

`Comments.Link`

Отображает ссылку комментария.

Обычно используется внутри кастомного шаблона, если требуется явно управлять расположением ссылки.

## IComment

| Key             | Type                      | Required | Description                                                           |
|-----------------|---------------------------|----------|-----------------------------------------------------------------------|
| id              | string                    | +        | Идентификатор комментария.                                            |
| author          | string                    | +        | Имя автора комментария.                                               |
| content         | string                    | +        | Текст комментария.                                                    |
| createdAt       | string                    | +        | Дата создания комментария. Ожидается строка, например в ISO-формате.  |
| updatedAt       | string                    | -        | Дата последнего обновления комментария.                               |
| replies         | `IComment[]`              | +        | Массив вложенных ответов.                                             |
| parentId        | string                    | -        | Идентификатор родительского комментария для ответа.                   |
| badge           | `ICommentBadge`           | -        | Бейдж, отображаемый рядом с комментарием.                             |
| builtInActions  | `ICommentBuiltInActions`  | -        | Встроенные действия комментария, например редактирование и удаление.  |
| customActions   | `ICommentActionProps[]`   | -        | Кастомные действия комментария.                                       |
| commentLink     | `ICommentLink`            | -        | Ссылка, связанная с комментарием.                                     |

## ICommentFormData

| Key        | Type                      | Required | Description                                   |
|------------|---------------------------|----------|-----------------------------------------------|
| content    | string                    | +        | Текст комментария или ответа.                 |
| commentId  | string                    | -        | Идентификатор комментария при редактировании  |

## ICommentBadge

| Key      | Type                      | Required | Description                  |
|----------|---------------------------|----------|------------------------------|
| label    | string                    | +        | Текст бейджа.                |
| color    | `IBadgeProps['color']`    | -        | Цвет бейджа.                 |
| variant  | `IBadgeProps['variant']`  | -        | Вариант отображения бейджа.  |

## ICommentBuiltInActions

| Key       | Type                              | Required | Description                            |
|-----------|-----------------------------------|----------|----------------------------------------|
| onEdit    | (data: ICommentFormData) => void  | -        | Обработчик редактирования комментария  |
| onDelete  | (commentId: string) => void       | -        | Обработчик удаления комментария        |

## ICommentActionProps

| Key       | Type                         | Required | Description                             |
|-----------|------------------------------|----------|-----------------------------------------|
| value     | string                       | +        | Внутреннее значение действия            |
| label     | string                       | +        | Текст действия                          |
| onClick   | (commentId: string) => void  | +        | Обработчик клика по действию            |
| disabled  | boolean                      | -        | Признак неактивного состояния действия  |

## ICommentLink

| Key    | Type                         | Required | Description   |
|--------|------------------------------|----------|---------------|
| label  | string                       | +        | Текст ссылки  |
| url    | string                       | +        | URL ссылки    |

## Поведение компонента

Если передан `handleRefresh`, над списком комментариев отображается кнопка Обновить.

Если `isLoading=true`, компонент показывает спиннер вместо списка комментариев.

Если `comments` пустой, отображается заглушка Комментариев пока нет.

Если передан `handleAddRootComment`, внизу компонента отображается форма добавления нового корневого комментария.

Если передан `handleAddReply`, у комментариев появляется возможность открыть форму ответа.

Если у комментария передан `builtInActions.onEdit`, для него доступно редактирование.

Если у комментария передан `builtInActions.onDelete`, для него доступно удаление.

Если у комментария передан `customActions`, они отображаются в блоке действий.

Состояния редактирования, ответа и раскрытия вложенных комментариев управляются внутренним хуком `useComments`.

Для корректной работы Comments внутри `children` должен быть передан `Comments.Item`. Если шаблон не передан, компонент выбросит ошибку.

## Пример с действиями

```jsx
  const comments = [
    {
      id: '1',
      author: 'Иван Петров',
      content: 'Комментарий с действиями',
      createdAt: '2026-03-10T10:00:00Z',
      replies: [],
      builtInActions: {
        onEdit: data => {
          console.log('Редактировать комментарий', data);
        },
        onDelete: commentId => {
          console.log('Удалить комментарий', commentId);
        }
      },
      customActions: [
        {
          value: 'report',
          label: 'Кастомное действие',
          onClick: commentId => {
            console.log('Кастомное действие', commentId);
          }
        }
      ]
    }
  ];
  
  <Comments comments={comments}>
    <Comments.Item>
      <Comments.Author />
      <Comments.Meta />
      <Comments.Content />
      <Comments.Actions />
    </Comments.Item>
  </Comments>;
```

## Стилизация

Компонент использует CSS-модули. Основные классы:

`.wrapper`: корневой контейнер.

`.loader`: контейнер со спиннером в состоянии загрузки.

`.comments`: контейнер списка комментариев.

`.editor`: контейнер формы ответа на комментарий.

Можно переопределять стили, передав собственный className на корневой контейнер.

## Data-атрибуты
Для удобной кастомизации доступны data-атрибуты:

```css
/* Корневой контейнер */
[data-ui-comments] {
  /* ваши стили */
}

/* Кнопка обновления */
[data-ui-comments-refresh] {
  /* ваши стили */
}

/* Лоадер */
[data-ui-comments-loader] {
  /* ваши стили */
}

/* Список комментариев */
[data-ui-comments-list] {
  /* ваши стили */
}

/* Пустое состояние */
[data-ui-comments-empty] {
  /* ваши стили */
}

/* Форма добавления корневого комментария */
[data-ui-comments-root-editor] {
  /* ваши стили */
}
```
