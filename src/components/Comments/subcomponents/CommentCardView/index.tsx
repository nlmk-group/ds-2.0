import React, { useState } from 'react';

import { CommentActions } from '@components/Comments/subcomponents';
import { IComment } from '@components/Comments/types';
import { Badge, Button, Grid, Icon, Link, Typography } from '@components/index';
import clsx from 'clsx';

import styles from './CommentCardView.module.scss';

import { formatDate, pluralizeReplies } from './helpers';

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

  const { id, author, content, createdAt, updatedAt, replies, badge, builtInActions, customActions, commentLink } =
    comment;

  const hasActions = !!builtInActions?.onEdit || !!builtInActions?.onDelete || !!customActions?.length;
  const hasReplies = replies.length > 0;

  return (
    <Grid className={styles.card} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Grid.Row
        className={clsx(styles.content, {
          [styles.contentWithActions]: hasActions
        })}
      >
        <Grid.Column st={{ gap: 4 }}>
          {commentLink && (
            <Grid.Column st={{ marginBottom: 4 }}>
              <Link href={commentLink.url} target="_blank" size="body1">
                {commentLink.label}
              </Link>
            </Grid.Column>
          )}

          <Grid.Column st={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            {badge?.label && (
              <Badge color={badge.color} variant={badge.variant}>
                {badge.label}
              </Badge>
            )}
            <Typography variant="Body1-Bold">{author}</Typography>
            <Typography variant="Body2-Medium" color="var(--steel-70)">
              {formatDate(createdAt)}
            </Typography>
            {updatedAt && (
              <Typography variant="Body2-Medium" color="var(--steel-70)">
                Изменен {formatDate(updatedAt)}
              </Typography>
            )}
          </Grid.Column>

          <Grid.Column>
            <Typography variant="Body1-Medium">{content}</Typography>
          </Grid.Column>
        </Grid.Column>

        {canReply && (
          <Grid.Column>
            <Button
              variant="secondary"
              size="s"
              color="grey"
              onClick={handleReplyBlock}
              disabled={replyingToCommentId === id}
            >
              Ответить
            </Button>
          </Grid.Column>
        )}

        {hasReplies && (
          <Grid.Column>
            <Button
              variant="secondary"
              size="s"
              color="ghost"
              startIcon={
                <Icon
                  className={clsx(styles.icon, {
                    [styles.expanded]: isExpanded,
                    [styles.collapsed]: !isExpanded
                  })}
                  name="IconChevronArrowDownOutlined24"
                />
              }
              onClick={onToggleReplies}
            >
              {isExpanded ? 'Скрыть' : 'Показать'} {replies.length} {pluralizeReplies(replies.length)}
            </Button>
          </Grid.Column>
        )}
      </Grid.Row>

      {hasActions && (
        <div
          className={clsx(styles.actions, {
            [styles.visible]: isHovered
          })}
        >
          <CommentActions
            commentId={id}
            customActions={customActions ?? []}
            builtInActions={builtInActions}
            handleEditComment={toggleEditComment}
          />
        </div>
      )}
    </Grid>
  );
};
