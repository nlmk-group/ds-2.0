import React, { useEffect, useState } from 'react';

import { EBadgeColors } from '@components/Badge/enums';
import { mockComment, mockCommentsOnlyView, mockCommentWithReplies } from '@components/Comments/mock/mockData';
import { IComment, ICommentFormData, ICommentsProps } from '@components/Comments/types';
import { Alert, Box, Comments, Typography } from '@components/index';
import { Meta } from '@storybook/react-vite';

import styles from './Comments.stories.module.scss';

import { argsTypes } from './argsTypes';

const createWrapper =
  (height = '100%') =>
  (Story: any) => {
    return (
      <Box className={styles.wrapper} justifyContent="center">
        <Box
          p={16}
          background="var(--steel-10)"
          borderRadius={8}
          flexDirection="column"
          gap={20}
          alignItems="flex-start"
          width="100%"
          height={height}
        >
          <Typography variant="Heading4">Комментарии</Typography>
          <Story />
        </Box>
      </Box>
    );
  };

const withWrapper = createWrapper();
const withFixedHeightWrapper = createWrapper('700px');

export default {
  title: 'Components/Comments/Stories',
  component: Comments,
  argTypes: argsTypes
} as Meta<typeof Comments>;

export const CommentsThread = (argTypes: ICommentsProps): JSX.Element => {
  return (
    <Comments {...argTypes}>
      <Comments.Item>
        <Comments.Author />
        <Comments.Meta />
        <Comments.Content />
        <Comments.Actions />
      </Comments.Item>
    </Comments>
  );
};

CommentsThread.storyName = 'Comments: комментарий с вложенными ответами';
CommentsThread.args = {
  comments: [mockCommentWithReplies],
  handleAddRootComment: () => {},
  handleAddReply: () => {}
};
CommentsThread.decorators = [withWrapper];

export const CommentsRefresh = (argTypes: ICommentsProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Comments {...argTypes} isLoading={isLoading} handleRefresh={handleRefresh}>
      <Comments.Item>
        <Comments.Link />
        <Comments.Badge />
        <Comments.Author />
        <Comments.Meta />
        <Comments.Content />
        <Comments.Actions />
      </Comments.Item>
    </Comments>
  );
};

CommentsRefresh.storyName = 'Comments: комментарии с обновлением';
CommentsRefresh.args = {
  comments: [mockComment, { ...mockComment, id: '4' }],
  handleAddRootComment: () => {},
  handleAddReply: () => {}
};
CommentsRefresh.decorators = [withFixedHeightWrapper];

export const CommentsOnlyView = (argTypes: ICommentsProps): JSX.Element => {
  return (
    <Comments {...argTypes}>
      <Comments.Item>
        <Comments.Link />
        <Comments.Badge />
        <Comments.Author />
        <Comments.Meta />
        <Comments.Content />
      </Comments.Item>
    </Comments>
  );
};

CommentsOnlyView.storyName = 'Comments: комментарии только для просмотра';
CommentsOnlyView.args = {
  comments: mockCommentsOnlyView
};
CommentsOnlyView.decorators = [withWrapper];

export const CommentsBadge = (argTypes: ICommentsProps): JSX.Element => {
  return (
    <Comments {...argTypes}>
      <Comments.Item>
        <Comments.Link />
        <Comments.Badge />
        <Comments.Author />
        <Comments.Meta />
        <Comments.Content />
        <Comments.Actions />
      </Comments.Item>
    </Comments>
  );
};

CommentsBadge.args = {
  comments: [
    {
      ...mockComment,
      commentLink: { label: 'Задача «Получение недостающей информации от потребителя»', url: '/' },
      replies: [
        {
          id: '3-1',
          author: 'Сидоров Сидор Сидорович',
          content: 'Полностью поддерживаю! Нужно учитывать все аспекты.',
          createdAt: '2024-11-12T02:00:00Z',
          replies: []
        }
      ]
    },
    {
      ...mockComment,
      id: '4',
      badge: { label: 'Служба поддержки', color: EBadgeColors.warning }
    }
  ]
};
CommentsBadge.decorators = [withWrapper];
CommentsBadge.storyName = 'Comments: шапка комментария с бейджем и ссылкой';

export const CommentsActions = (argTypes: ICommentsProps): JSX.Element => {
  const [commentChanged, setCommentChanged] = useState<ICommentFormData | null>(null);
  const [commentDeleted, setCommentDeleted] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const onEdit = (data: ICommentFormData) => {
    setCommentChanged(data);
  };

  const onDelete = (commentId: string) => {
    setCommentDeleted(commentId);
  };

  const onCustomAction = (_commentId: string) => {
    setShowAlert(true);
  };

  const updateCommentById = (
    comments: IComment[],
    commentId: string,
    updater: (comment: IComment) => IComment
  ): IComment[] => {
    return comments.map(comment => {
      if (comment.id === commentId) {
        return updater(comment);
      }

      if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: updateCommentById(comment.replies, commentId, updater)
        };
      }

      return comment;
    });
  };

  const removeCommentById = (comments: IComment[], commentId: string): IComment[] => {
    return comments
      .filter(comment => comment.id !== commentId)
      .map(comment => ({
        ...comment,
        replies: removeCommentById(comment.replies, commentId)
      }));
  };

  const mockedComments: IComment[] = [
    {
      ...mockComment,
      badge: { label: 'Клиент' },
      builtInActions: {
        onEdit,
        onDelete
      },
      customActions: [
        {
          value: 'custom-action',
          label: 'Кастомное действие',
          onClick: onCustomAction
        }
      ]
    },
    {
      id: '4',
      author: 'Петров Василий Иванович',
      content:
        'Горячекатаный прокат широко востребован при строительстве нефтегазопроводов (включая трубопроводы, рассчитанные на эксплуатацию при низких температурах и под высоким давлением), в строительстве и машиностроении, включая судостроение, автопром и производство бытовой техники.',
      createdAt: '2024-11-12T07:00:00Z',
      builtInActions: {
        onEdit,
        onDelete
      },
      customActions: [
        {
          value: 'custom-action',
          label: 'Кастомное действие',
          onClick: onCustomAction,
          disabled: true
        },
        {
          value: 'report',
          label: 'Пожаловаться',
          onClick: onCustomAction
        }
      ],
      replies: [
        {
          id: '4-1',
          parentId: '4',
          author: 'Сидоров Алексей Петрович',
          content: 'Согласен, особенно это актуально для объектов с повышенными требованиями к прочности и надежности.',
          createdAt: '2024-11-12T08:30:00Z',
          builtInActions: {
            onEdit,
            onDelete
          },
          customActions: [],
          replies: []
        }
      ]
    }
  ];

  const [comments, setComments] = useState(mockedComments);

  useEffect(() => {
    if (!commentChanged?.commentId) {
      return;
    }

    const { commentId, content } = commentChanged;

    setComments(prev =>
      updateCommentById(prev, commentId, comment => ({
        ...comment,
        content
      }))
    );

    setCommentChanged(null);
  }, [commentChanged]);

  useEffect(() => {
    if (!commentDeleted) {
      return;
    }

    setComments(prev => removeCommentById(prev, commentDeleted));
    setCommentDeleted(null);
  }, [commentDeleted]);

  useEffect(() => {
    if (!showAlert) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [showAlert]);

  return (
    <>
      <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
        {showAlert && <Alert title="Действие успешно выполнено" severity="success" className={styles.alert} />}
      </Box>

      <Comments {...argTypes} comments={comments}>
        <Comments.Item>
          <Comments.Badge />
          <Comments.Author />
          <Comments.Meta />
          <Comments.Content />
          <Comments.Actions />
        </Comments.Item>
      </Comments>
    </>
  );
};

CommentsActions.storyName = 'Comments: действия комментария';
CommentsActions.args = {
  handleAddRootComment: () => {}
};
CommentsActions.decorators = [withWrapper];
export const CommentsEmpty = (argTypes: ICommentsProps): JSX.Element => {
  return (
    <Comments {...argTypes}>
      <Comments.Item>
        <Comments.Author />
        <Comments.Meta />
        <Comments.Content />
        <Comments.Actions />
      </Comments.Item>
    </Comments>
  );
};

CommentsEmpty.storyName = 'Comments: нет комментариев';
CommentsEmpty.args = {
  comments: [],
  handleAddRootComment: () => {}
};
CommentsEmpty.decorators = [withWrapper];
