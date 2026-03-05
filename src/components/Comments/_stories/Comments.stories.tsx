import React, {useEffect, useState} from 'react';

import styles from './Comments.stories.module.scss';

import { argsTypes } from './argsTypes';
import { Alert, Box, Comments, Typography } from '@components/index';
import { Meta } from '@storybook/react-vite';
import { mockComment, mockComments, mockCommentWithReplies } from "@components/Comments/mock/mockData";
import { IComment, ICommentFormData, ICommentsProps } from "@components/Comments/types";
import { EBadgeColors } from "@components/Badge/enums";

const withWrapper = (Story: any) => {
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
        height="100%"
      >
        <Typography variant="Heading4">Комментарии</Typography>
        <Story />
      </Box>
    </Box>
  );
};

export default {
  title: 'Components/Comments/Stories',
  component: Comments,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Comments>;

export const CommentsDefault = (argTypes: ICommentsProps): JSX.Element => {
  return <Comments {...argTypes} />;
};

CommentsDefault.storyName = 'Comments: комментарии с вложенными ответами';
CommentsDefault.args = {
  comments: mockComments,
  handleAddRootComment: () => {},
  handleAddReply: () => {}
};

export const CommentsRefresh = (argTypes: ICommentsProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return <Comments {...argTypes} isLoading={isLoading} handleRefresh={handleRefresh} />;
};

CommentsRefresh.storyName = 'Comments: комментарии с обновлением';
CommentsRefresh.args = {
  comments: mockComments,
  handleAddRootComment: () => {},
  handleAddReply: () => {}
};

export const CommentsOnlyView = (argTypes: ICommentsProps): JSX.Element => {
  return <Comments {...argTypes} />;
};

CommentsOnlyView.storyName = 'Comments: комментарии только для просмотра';
CommentsOnlyView.args = {
  comments: mockComments,
};

export const CommentsBadge = (argTypes: ICommentsProps): JSX.Element => {
  return <Comments {...argTypes} />;
};

CommentsBadge.storyName = 'Comments: шапка комментария с бейджем';
CommentsBadge.args = {
  comments: [
    {
      ...mockComment,
      badge: { label: 'Клиент' },
      commentLink: { label: 'Задача «Получение недостающей информации от потребителя»', url: '/'},
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
    },
  ],
};

export const CommentsEditor = (argTypes: ICommentsProps): JSX.Element => {
  return <Comments {...argTypes} />;
};

CommentsEditor.storyName = 'Comments c полем для добавления комментария';
CommentsEditor.args = {
  comments: [mockComment, { ...mockComment, id: '4' }],
  handleAddRootComment: () => {},
  handleAddReply: () => {}
};

export const CommentsTread = (argTypes: ICommentsProps): JSX.Element => {
  return <Comments {...argTypes} />;
};

CommentsTread.storyName = 'Comments: комментарий с ответами';
CommentsTread.args = {
  comments: [mockCommentWithReplies],
  handleAddRootComment: () => {},
  handleAddReply: () => {},
};

export const CommentsActions = (argTypes: ICommentsProps): JSX.Element => {
  const [commentChanged, setCommentChanged] = useState<ICommentFormData | null>(null);
  const [commentDeleted, setCommentDeleted] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const onEdit = (data: ICommentFormData) => {
    setCommentChanged(data);
  };

  const onDelete = (commentId: string) => {
    setCommentDeleted(commentId)
  }

  const onCustomAction = (commentId: string) => {
    setShowAlert(true);
  }

  const mockedComments: IComment[] = [{
    ...mockComment,
    builtInActions: {
      onEdit,
      onDelete,
    },
    customActions: [
      {
        value: 'report',
        label: 'Кастомное действие',
        onClick: onCustomAction
      }
    ],
  },
    {
      ...mockComment,
      id: '4',
      content: 'Горячекатаный прокат широко востребован при строительстве нефтегазопроводов (включая трубопроводы, рассчитанные на эксплуатацию при низких температурах и под высоким давлением), в строительстве и машиностроении, включая судостроение, автопром и производство бытовой техники.',
      builtInActions: {
        onEdit,
        onDelete,
      },
      customActions: [
        {
          value: 'report',
          label: 'Кастомное действие',
          onClick: onCustomAction
        }
      ],
    }
  ];
  const [comments, setComments] = useState(mockedComments)

  useEffect(() => {
    if (commentChanged) {
      const updated = comments.map(comment => {
        if (comment.id === commentChanged.commentId) {
          return { ...comment, content: commentChanged.content };
        }
        return comment
      });
      setComments(updated);
      setCommentChanged(null);
    }
  }, [commentChanged]);

  useEffect(() => {
    if (commentDeleted) {
      const updated = comments.filter(item => item.id !== commentDeleted);
      setComments(updated);
      setCommentDeleted(null);
    }
  }, [commentDeleted]);

  useEffect(() => {
    if (!showAlert) return;

    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [showAlert]);

  return (
    <Box style={{ position: 'relative' , paddingTop: '32' }}>
      {showAlert && (
        <Alert title="Действие успешно выполнено" severity="success" className={styles.alert} />
      )}
      <Comments {...argTypes} comments={comments} />
    </Box>
  );
};

CommentsActions.storyName = 'Comments: действия комментария';
CommentsActions.args = {
  handleAddRootComment: () => {},
};

