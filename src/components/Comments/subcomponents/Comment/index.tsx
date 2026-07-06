import React from 'react';

import { Comments } from '@components/Comments';
import { CommentProvider } from '@components/Comments/hooks';
import { CardEdit } from '@components/Comments/subcomponents';
import { ActionsSlot, Author, Content, Meta } from '@components/Comments/subcomponents';
import {
  IComment,
  ICommentContextValue,
  ICommentFormData,
  ICommentHeaderExtraProps,
  ICommentHeaderProps,
  ICommentProps
} from '@components/Comments/types';
import { Box, Link } from '@components/index';
import clsx from 'clsx';

import styles from './Comment.module.scss';

interface CommentInternalProps<TData = unknown> {
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
  itemTemplate: React.ReactElement<ICommentProps>;
  renderReplies: (replies: IComment<TData>[], isReply: boolean) => React.ReactNode;
}

export const Comment = <TData,>({
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
}: CommentInternalProps<TData>): JSX.Element => {
  const contextValue: ICommentContextValue<TData> = {
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

  const { id, content: initialContent, builtInActions, replies, commentLink } = comment;

  const templateChildren = React.Children.toArray(itemTemplate.props.children).filter(React.isValidElement);

  const headerSlot = templateChildren.find(child => child.type === Comments.Header) as
    | React.ReactElement<ICommentHeaderProps>
    | undefined;

  const contentSlot = templateChildren.find(child => child.type === Content);
  const actionsSlot = templateChildren.find(child => child.type === ActionsSlot);

  const headerChildren = headerSlot
    ? React.Children.toArray(headerSlot.props.children).filter(React.isValidElement)
    : [];

  const headerMain = headerChildren.map((child, index) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    if (child.type === Comments.HeaderExtra && comment.data) {
      const render = (child as React.ReactElement<ICommentHeaderExtraProps<TData>>).props.children;

      return <React.Fragment key={child.key ?? index}>{render({ comment, data: comment.data })}</React.Fragment>;
    }

    if (child.type === Author || child.type === Meta) {
      return <React.Fragment key={child.key ?? index}>{child}</React.Fragment>;
    }

    return null;
  });

  const hasHeaderMain = headerMain.some(Boolean);

  const hasActions =
    !!actionsSlot &&
    (!!builtInActions?.onEdit || !!builtInActions?.onDelete || (comment.customActions?.length ?? 0) > 0);

  const hasHeader = !!commentLink || hasHeaderMain;

  return (
    <CommentProvider value={contextValue}>
      <div
        className={clsx(styles.comment, {
          [styles.reply]: isReply,
          [styles.root]: !isReply
        })}
        data-ui-comments-item
      >
        {isEditing && builtInActions?.onEdit ? (
          <CardEdit
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
              {hasHeader && (
                <Box flexDirection="column" gap={8} className={styles.header}>
                  {commentLink && (
                    <div>
                      <Link href={commentLink.url} target="_blank" size="body1">
                        {commentLink.label}
                      </Link>
                    </div>
                  )}

                  {hasHeaderMain && (
                    <Box gap={8} justifyContent="flex-start" alignItems="center">
                      {headerMain}
                    </Box>
                  )}
                </Box>
              )}

              {contentSlot && <div className={styles.content}>{contentSlot}</div>}
            </div>

            {hasActions && <div className={styles.actions}>{actionsSlot}</div>}
          </div>
        )}

        {isReplying && onReplySave && (
          <div className={styles.editor} data-ui-comments-reply-editor>
            <CardEdit
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
