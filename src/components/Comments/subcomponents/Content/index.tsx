import React from 'react';

import { pluralizeReplies } from '@components/Comments/helpers';
import { useCommentContext } from '@components/Comments/hooks';
import { Button, Grid, Icon, Typography } from '@components/index';
import clsx from 'clsx';

import styles from 'components/Comments/subcomponents/Content/Content.module.scss';

export const Content = () => {
  const {
    comment: { replies, content },
    canReply,
    hasActiveReply,
    isExpanded,
    handleReplyBlock,
    onToggleReplies
  } = useCommentContext();

  const hasReplies = replies.length > 0;

  return (
    <Grid.Column st={{ gap: 8 }}>
      <Typography variant="Body1-Medium">{content}</Typography>

      {canReply && (
        <Grid.Column st={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <Button variant="secondary" size="s" color="grey" onClick={handleReplyBlock} disabled={hasActiveReply}>
            Ответить
          </Button>
        </Grid.Column>
      )}

      {hasReplies && (
        <Grid.Column st={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <Button
            variant="secondary"
            size="s"
            color="ghost"
            disabled={hasActiveReply}
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
    </Grid.Column>
  );
};
