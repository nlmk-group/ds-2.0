export const argsTypes = {
  comments: {
    description:
      'Массив корневых комментариев для компонента Comments. Вложенность задается через replies. createdAt/updatedAt ожидаются в строковом формате, например ISO.',
    table: {
      defaultValue: { summary: '[]' },
      type: {
        summary: 'IComment[]',
        detail: `export interface ICommentActionItem {
  value: string;
  label: string;
  onClick: (commentId: string) => void;
  disabled?: boolean;
}

export interface ICommentBuiltInActions {
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

export interface IComment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  replies: IComment[];
  parentId?: string;
  badge?: ICommentBadge;
  builtInActions?: ICommentBuiltInActions;
  customActions?: ICommentActionItem[];
  commentLink?: ICommentLink;
}

export interface ICommentFormData {
  content: string;
  commentId?: string;
}

export interface ICommentsProps {
  comments: IComment[];
  handleAddRootComment?: (data: ICommentFormData) => void;
  handleAddReply?: (parentId: string, data: ICommentFormData) => void;
  onRefresh?: () => void;
}`
      }
    },
    control: { type: 'object' }
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
  onRefresh: {
    description: 'Колбэк для обновления списка комментариев после действий.',
    table: {
      type: {
        summary: '() => void'
      },
      disable: true
    }
  }
};
