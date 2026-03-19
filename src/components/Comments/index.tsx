import React from 'react';

import { useComments } from '@components/Comments/hooks';
import { ActionsSlot, Author, CardEdit, Comment, Content, Meta } from '@components/Comments/subcomponents';
import {
  IComment,
  ICommentFormData,
  ICommentHeaderExtraProps,
  ICommentHeaderProps,
  ICommentProps,
  ICommentsProps
} from '@components/Comments/types';
import { Box, Button, Icon, IconAutoRenewReloadOutlined24, Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import s from './Comments.module.scss';

type HeaderComponent = (props: ICommentHeaderProps) => JSX.Element;
type HeaderExtraComponent = <TData = unknown>(props: ICommentHeaderExtraProps<TData>) => JSX.Element;
type ItemComponent = (props: ICommentProps) => JSX.Element;

type CommentsComponent = (<TData = unknown>(props: ICommentsProps<TData>) => JSX.Element) & {
  Item: ItemComponent;
  Header: HeaderComponent;
  HeaderExtra: HeaderExtraComponent;
  Author: typeof Author;
  Meta: typeof Meta;
  Content: typeof Content;
  Actions: typeof ActionsSlot;
};

const CommentsTemplateItem = ({ children }: ICommentProps): JSX.Element => <>{children}</>;

const CommentsHeader = ({ children }: ICommentHeaderProps): JSX.Element => <>{children}</>;

const CommentsHeaderExtra = <TData,>(_props: ICommentHeaderExtraProps<TData>): React.ReactElement | null => null;

const CommentsRoot = <TData,>({
  comments,
  children,
  handleAddRootComment,
  handleAddReply,
  handleRefresh,
  className,
  isLoading = false
}: ICommentsProps<TData>): JSX.Element => {
  const {
    editingCommentId,
    replyingToCommentId,
    expandedReplies,
    toggleEditComment,
    replyToComment,
    cancelEdit,
    toggleReplies
  } = useComments(isLoading);

  const itemTemplate = React.Children.toArray(children).find(
    child => React.isValidElement(child) && child.type === CommentsTemplateItem
  ) as React.ReactElement<ICommentProps> | undefined;

  if (!itemTemplate) {
    throw new Error('Comments requires <Comments.Item> as child');
  }

  const renderCommentTree = (items: IComment<TData>[], isReply = false): React.ReactNode => {
    return (
      <Box width="100%" flexDirection="column" gap={20}>
        {items.map(comment => {
          const { id } = comment;
          const onReplySave = handleAddReply ? (data: ICommentFormData) => handleAddReply(data) : undefined;

          return (
            <Comment<TData>
              key={id}
              comment={comment}
              isReply={isReply}
              isEditing={editingCommentId === id}
              isExpanded={expandedReplies.has(id)}
              isReplying={replyingToCommentId === id}
              hasActiveReply={replyingToCommentId !== null}
              canReply={!!handleAddReply}
              toggleEditComment={() => toggleEditComment(id)}
              handleReplyBlock={() => replyToComment(id)}
              onToggleReplies={() => toggleReplies(id)}
              onCancel={() => cancelEdit(id)}
              onReplySave={onReplySave}
              itemTemplate={itemTemplate}
              renderReplies={renderCommentTree}
            />
          );
        })}
      </Box>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <Box
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          className={s.loader}
          data-ui-comments-loader
        >
          <Spinner />
        </Box>
      );
    }

    if (comments.length > 0) {
      return (
        <Box
          width="100%"
          height="100%"
          pl={handleRefresh ? 32 : 0}
          flexDirection="column"
          gap={20}
          className={s.comments}
          data-ui-comments-list
        >
          {renderCommentTree(comments)}
        </Box>
      );
    }

    return (
      <Box
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        data-ui-comments-empty
      >
        <Box gap={0} alignItems="center" height={120}>
          <Icon name="IconCancelOutlined16" htmlColor="var(--steel-70)" />
          <Typography variant="Body1-Medium" color="var(--steel-70)">
            Комментариев пока нет
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      gap={20}
      flexDirection="column"
      width="100%"
      height="100%"
      background="var(--steel-10)"
      className={clsx(s.wrapper, className)}
      data-ui-comments
    >
      {handleRefresh && (
        <Button
          startIcon={<IconAutoRenewReloadOutlined24 />}
          variant="secondary"
          onClick={handleRefresh}
          data-ui-comments-refresh
        >
          Обновить
        </Button>
      )}

      {renderContent()}

      {handleAddRootComment && (
        <div data-ui-comments-root-editor className={s.editor}>
          <CardEdit isReply={false} onSave={handleAddRootComment} isLoading={isLoading} />
        </div>
      )}
    </Box>
  );
};

export const Comments = CommentsRoot as CommentsComponent;

Comments.Item = CommentsTemplateItem as ItemComponent;
Comments.Header = CommentsHeader as HeaderComponent;
Comments.HeaderExtra = CommentsHeaderExtra as HeaderExtraComponent;
Comments.Author = Author;
Comments.Meta = Meta;
Comments.Content = Content;
Comments.Actions = ActionsSlot;

export default Comments;
