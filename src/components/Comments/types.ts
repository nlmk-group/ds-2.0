import { IBadgeProps } from '@root/src/components';

export interface ICommentActionItem {
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
  handleRefresh?: () => void;
  isLoading?: boolean;
  className?: string;
}
