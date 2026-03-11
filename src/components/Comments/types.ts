import React from 'react';

import { IBadgeProps } from '@root/src/components';

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
  link?: ICommentLink;
  builtInActions?: ICommentBuiltInActions;
  customActions?: ICommentActionProps[];
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
  handleAddReply?: (data: ICommentFormData) => void;
  handleRefresh?: () => void;
  isLoading?: boolean;
  className?: string;
}

export interface ICommentItemProps {
  children: React.ReactNode;
}

export interface ICommentContextValue {
  comment: IComment;
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
