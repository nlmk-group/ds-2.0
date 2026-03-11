import React, { useEffect, useState } from 'react';

import { ICommentFormData } from '@components/Comments/types';
import { Button, Grid, Input } from '@components/index';
import clsx from 'clsx';

import styles from './CommentCardEdit.module.scss';

interface CommentCardEditProps {
  commentId?: string;
  initialContent?: string;
  isReply?: boolean;
  onSave?: (data: ICommentFormData) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export const CommentCardEdit = ({
  initialContent = '',
  isReply = false,
  onSave,
  onCancel,
  commentId,
  isLoading = false
}: CommentCardEditProps) => {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleSave = () => {
    const trimmed = content.trim();

    if (trimmed && onSave) {
      onSave({ content: trimmed, commentId });
      setContent('');
    }
  };

  const handleCancel = () => {
    setContent(initialContent);
    onCancel?.();
  };

  return (
    <Grid
      st={{
        gap: 8,
        width: '100%',
        flexDirection: 'column'
      }}
      className={clsx({ [styles.form]: isReply })}
    >
      <Grid.Row st={{ width: '100%', paddingTop: 5 }}>
        <Input
          disabled={isLoading}
          label="Комментарий"
          multiline
          className={styles.textarea}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </Grid.Row>
      <Grid.Row st={{ gap: 16, justifyContent: 'flex-end' }}>
        <Button size="m" onClick={handleSave}>
          Сохранить
        </Button>
        <Button size="m" variant="secondary" onClick={handleCancel}>
          Отменить
        </Button>
      </Grid.Row>
    </Grid>
  );
};
