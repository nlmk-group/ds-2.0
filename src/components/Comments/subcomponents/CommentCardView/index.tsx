import React, { useState } from 'react';

import { CommentActions } from '@components/Comments/subcomponents';
import { IComment } from '@components/Comments/types';
import { Badge, Button, Grid, Icon, Link, Typography } from '@components/index';

import s from './CommentCardView.module.scss';

interface CommentCardViewProps {
  comment: IComment;
  isExpanded?: boolean;
  toggleEditComment: () => void;
  handleReplyBlock: () => void;
  onToggleReplies: () => void;
  canReply: boolean;
  replyingToCommentId: string | null;
}

export const CommentCardView = ({
  comment,
  isExpanded = false,
  toggleEditComment,
  handleReplyBlock,
  onToggleReplies,
  canReply,
  replyingToCommentId
}: CommentCardViewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const hasActions =
    !!comment.builtInActions?.onEdit || !!comment.builtInActions?.onDelete || !!comment.customActions?.length;
  const hasReplies = comment.replies.length > 0;

  return (
    <Grid
      st={{ width: '100%', gap: 40 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Grid.Row st={{ flexDirection: 'column', gap: 4, maxWidth: 'calc(100% - 72px)', width: 'auto' }}>
        <Grid.Column st={{ gap: 4 }}>
          {comment.commentLink && (
            <Grid.Column style={{ marginBottom: 4 }}>
              <Link href={comment.commentLink.url} target="_blank" size="body1">
                {comment.commentLink.label}
              </Link>
            </Grid.Column>
          )}
          <Grid.Column st={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            {comment.badge?.label && (
              <Badge color={comment.badge.color} variant={comment.badge.variant}>
                {comment.badge.label}
              </Badge>
            )}
            <Typography variant={'Body1-Bold'}>{comment.author}</Typography>
            <Typography variant={'Body2-Medium'} color={'var(--steel-70)'}>
              {formatDate(comment.createdAt)}
            </Typography>
            {comment.updatedAt && (
              <Typography variant={'Body2-Medium'} color={'var(--steel-70)'}>
                Изменен {formatDate(comment.updatedAt)}
              </Typography>
            )}
          </Grid.Column>
          <Grid.Column>
            <Typography variant={'Body1-Medium'}>{comment.content}</Typography>
          </Grid.Column>
        </Grid.Column>
        {canReply && (
          <Grid.Column>
            <Button
              variant="secondary"
              size={'s'}
              color={'grey'}
              onClick={handleReplyBlock}
              disabled={replyingToCommentId === comment.id}
            >
              Ответить
            </Button>
          </Grid.Column>
        )}
        {hasReplies && (
          <Grid.Column>
            <Button
              variant="secondary"
              size={'s'}
              color={'ghost'}
              startIcon={
                <Icon
                  className={`${s.icon} ${isExpanded ? s.expanded : s.collapsed}`}
                  name="IconChevronArrowDownOutlined24"
                />
              }
              onClick={onToggleReplies}
            >
              {isExpanded ? 'Скрыть' : 'Показать'} {comment.replies.length}{' '}
              {comment.replies.length === 1 ? 'ответ' : 'ответа'}
            </Button>
          </Grid.Column>
        )}
      </Grid.Row>
      <Grid.Row st={{ flex: 0, justifyContent: 'flex-end' }}>
        {hasActions && isHovered && (
          <CommentActions
            commentId={comment.id}
            customActions={comment.customActions ?? []}
            builtInActions={comment.builtInActions}
            handleEditComment={toggleEditComment}
          />
        )}
      </Grid.Row>
    </Grid>
  );
};
