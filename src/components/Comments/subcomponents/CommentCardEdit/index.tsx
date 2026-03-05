import React, { useState, useEffect } from 'react';
import { Button, Grid, Input}  from '@components/index';
import { ICommentFormData } from '@components/Comments/types';

import s from './CommentCardEdit.module.scss';

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
    if (content.trim() && onSave) {
      onSave({ content: content.trim(), commentId });
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
      className={isReply ? s.form : ''}
    >
      <Grid.Row st={{ width: '100%', paddingTop: 5 }}>
        <Input
          disabled={isLoading}
          label={'Комментарий'}
          multiline={true}
          className={s.textarea}
          style={{ height: 102, width: '100%' }}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </Grid.Row>
      <Grid.Row st={{ gap: 16, justifyContent: 'flex-end' }}>
        <Button size={'m'} onClick={handleSave}>
          Сохранить
        </Button>
        <Button size={'m'} variant={'secondary'} onClick={handleCancel}>
          Отменить
        </Button>
      </Grid.Row>
    </Grid>
  );
};
