import React from 'react';

export interface ICommentBuiltInActions {
  onEdit?: (data: ICommentFormData) => void;
  onDelete?: (commentId: string) => void;
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

export interface ICommentBase<TData = unknown> {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  parentId?: string;
  commentLink?: ICommentLink;
  builtInActions?: ICommentBuiltInActions;
  customActions?: ICommentActionProps[];
  data?: TData;
}

export interface IComment<TData = unknown> extends ICommentBase<TData> {
  replies: IComment<TData>[];
}

export interface ICommentFormData {
  content: string;
  commentId?: string;
}

export interface ICommentsProps<TData = unknown> {
  comments: IComment<TData>[];
  children: React.ReactNode;
  handleAddRootComment?: (data: ICommentFormData) => void;
  handleAddReply?: (data: ICommentFormData) => void;
  handleRefresh?: () => void;
  isLoading?: boolean;
  className?: string;
}

export interface ICommentProps {
  children: React.ReactNode;
}

export interface ICommentHeaderProps {
  children: React.ReactNode;
}

export interface ICommentHeaderExtraRenderArgs<TData = unknown> {
  comment: IComment<TData>;
  data: TData;
}

export interface ICommentHeaderExtraProps<TData = unknown> {
  children: (args: ICommentHeaderExtraRenderArgs<TData>) => React.ReactNode;
}

export interface ICommentContextValue<TData = unknown> {
  comment: IComment<TData>;
  isReply: boolean;
  isEditing: boolean;
  isExpanded: boolean;
  isReplying: boolean;
  hasActiveReply: boolean;
  canReply: boolean;
  toggleEditComment: () => void;
  handleReplyBlock: () => void;
  onToggleReplies: () => void;
  onCancel: () => void;
  onReplySave?: (data: ICommentFormData) => void;
}
