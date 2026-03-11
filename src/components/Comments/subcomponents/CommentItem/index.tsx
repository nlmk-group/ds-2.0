import React from 'react';

import { CommentProvider } from '@components/Comments/hooks';
import { CommentCardEdit } from '@components/Comments/subcomponents';
import {
  CommentActionsSlot,
  CommentAuthor,
  CommentBadge,
  CommentContent,
  CommentLink,
  CommentMeta
} from '@components/Comments/subcomponents';
import { IComment, ICommentContextValue, ICommentFormData, ICommentItemProps } from '@components/Comments/types';
import clsx from 'clsx';

import styles from './CommentItem.module.scss';

interface CommentItemInternalProps {
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
  itemTemplate: React.ReactElement<ICommentItemProps>;
  renderReplies: (replies: IComment[], isReply: boolean) => React.ReactNode;
}

export const CommentItem = ({
  comment,
  isReply,
  isEditing,
  isExpanded,
  isReplying,
  canReply,
  toggleEditComment,
  handleReplyBlock,
  onToggleReplies,
  onCancel,
  onReplySave,
  itemTemplate,
  renderReplies,
  hasActiveReply
}: CommentItemInternalProps) => {
  const contextValue: ICommentContextValue = {
    comment,
    isReply,
    isEditing,
    isExpanded,
    isReplying,
    hasActiveReply,
    canReply,
    toggleEditComment,
    handleReplyBlock,
    onToggleReplies,
    onCancel,
    onReplySave
  };

  const { id, content: initialContent, builtInActions, replies } = comment;

  const templateChildren = React.Children.toArray(itemTemplate.props.children).filter(React.isValidElement);

  const linkSlot = templateChildren.find(child => child.type === CommentLink);
  const badgeSlot = templateChildren.find(child => child.type === CommentBadge);
  const authorSlot = templateChildren.find(child => child.type === CommentAuthor);
  const metaSlot = templateChildren.find(child => child.type === CommentMeta);
  const contentSlot = templateChildren.find(child => child.type === CommentContent);

  const actionsSlot = templateChildren.find(child => React.isValidElement(child) && child.type === CommentActionsSlot);

  const hasActions =
    !!actionsSlot &&
    (!!builtInActions?.onEdit || !!builtInActions?.onDelete || (comment.customActions?.length ?? 0) > 0);

  return (
    <CommentProvider value={contextValue}>
      <div
        className={clsx({
          [styles.reply]: isReply,
          [styles.root]: !isReply
        })}
        data-ui-comments-item
      >
        {isEditing && builtInActions?.onEdit ? (
          <CommentCardEdit
            commentId={id}
            initialContent={initialContent}
            isReply={isReply}
            onSave={data => {
              toggleEditComment();
              builtInActions.onEdit?.(data);
            }}
            onCancel={onCancel}
          />
        ) : (
          <div className={styles.card}>
            <div className={clsx(styles.main, { [styles.mainWithActions]: hasActions })}>
              {linkSlot && <div className={styles.link}>{linkSlot}</div>}

              {(badgeSlot || authorSlot || metaSlot) && (
                <div className={styles.header}>
                  {badgeSlot}
                  {authorSlot}
                  {metaSlot}
                </div>
              )}

              {contentSlot && <div className={styles.content}>{contentSlot}</div>}
            </div>

            {hasActions && <div className={styles.actions}>{actionsSlot}</div>}
          </div>
        )}

        {isReplying && onReplySave && (
          <div className={styles.editor} data-ui-comments-reply-editor>
            <CommentCardEdit
              commentId={id}
              isReply
              onSave={data => {
                onReplySave(data);
                onCancel();
              }}
              onCancel={onCancel}
            />
          </div>
        )}

        {isExpanded && replies.length > 0 && (
          <div className={styles.replies} data-ui-comments-replies>
            {renderReplies(replies, true)}
          </div>
        )}
      </div>
    </CommentProvider>
  );
};
