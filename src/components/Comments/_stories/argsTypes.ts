export const argsTypes = {
  comments: {
    description:
      'Массив корневых комментариев для компонента Comments. Вложенность задается через replies. createdAt/updatedAt ожидаются в строковом формате, например ISO.',
    table: {
      defaultValue: { summary: '[]' },
      type: {
        summary: 'IComment[]',
        detail: `export interface ICommentBuiltInActions {
  onEdit?: (data: ICommentFormData) => void;
  onDelete?: (commentId: string) => void;
}

export interface ICommentBadge extends Pick<IBadgeProps, 'color' | 'variant'> {
  label: string;
}

export interface ICommentLink {
  label: string;
  url: string;
}

export interface ICommentActionProps {
  value: string;
  label: string;
  onClick: (commentId: string) => void;
  disabled?: boolean;
}

export interface IComment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  replies: IComment[];
  parentId?: string;
  badge?: ICommentBadge;
  commentLink?: ICommentLink;
  builtInActions?: ICommentBuiltInActions;
  customActions?: ICommentActionProps[];
}

export interface ICommentFormData {
  content: string;
  commentId?: string;
}

export interface ICommentsProps {
  comments: IComment[];
  children: React.ReactNode;
  handleAddRootComment?: (data: ICommentFormData) => void;
  handleAddReply?: (parentId: string, data: ICommentFormData) => void;
  handleRefresh?: () => void;
  isLoading?: boolean;
  className?: string;
}

export interface ICommentItemProps {
  children: React.ReactNode;
}`
      }
    },
    control: { type: 'object' }
  },
  children: {
    description:
      'Шаблон отображения одного комментария. Ожидается использование compound API через Comments.Item и вложенные слоты.',
    table: {
      type: {
        summary: 'React.ReactNode'
      },
      disable: true
    }
  },
  handleAddRootComment: {
    description: 'Колбэк добавления корневого комментария.',
    table: {
      type: {
        summary: '(data: ICommentFormData) => void'
      },
      disable: true
    }
  },
  handleAddReply: {
    description: 'Колбэк добавления ответа к комментарию.',
    table: {
      type: {
        summary: '(parentId: string, data: ICommentFormData) => void'
      },
      disable: true
    }
  },
  handleRefresh: {
    description: 'Колбэк для обновления списка комментариев.',
    table: {
      type: {
        summary: '() => void'
      },
      disable: true
    }
  },
  isLoading: {
    description: 'Флаг состояния загрузки списка комментариев.',
    table: {
      type: {
        summary: 'boolean'
      },
      defaultValue: { summary: 'false' }
    },
    control: { type: 'boolean' }
  },
  className: {
    description: 'Дополнительный CSS-класс для корневого контейнера компонента.',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  }
};
