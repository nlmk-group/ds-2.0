import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16343-15080';

const CommentsStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const commentsDefaultCode = `import React from 'react';
import { Box, Comments } from '@nlmk/ds-2.0';

const comments = [
  {
    id: '1',
    author: 'Петров Павел Павлович',
    content: 'Важно учитывать мнение всех заинтересованных сторон при принятии решений.',
    createdAt: '2024-11-12T00:00:00Z',
    replies: []
  }
];

const App = () => {
  return (
    <Box p={8} background="var(--steel-10)" borderRadius={4}>
      <Comments
        comments={comments}
        handleAddRootComment={() => {}}
        handleAddReply={() => {}}
      >
        <Comments.Item>
          <Comments.Header>
            <Comments.Author />
            <Comments.Meta />
          </Comments.Header>
          <Comments.Content />
          <Comments.Actions />
        </Comments.Item>
      </Comments>
    </Box>
  );
};

export default App;
`;

  const commentsLongThreadCode = `import React from 'react';
import { Badge, Box, Comments } from '@nlmk/ds-2.0';

type CommentExtraData = {
  isClientAuthor: boolean;
  sourceSystem: 'crm' | 'portal';
};

const onReport = commentId => {
  console.log('report', commentId);
};

const comments = [
  {
    id: '1',
    author: 'Петров Павел Павлович',
    content:
      'Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира неоднозначны и будут объединены в целые кластеры себе подобных.',
    createdAt: '2024-11-12T00:00:00Z',
    builtInActions: {
      onEdit: () => {},
      onDelete: () => {}
    },
    customActions: [
      {
        value: 'report',
        label: 'Пожаловаться',
        onClick: onReport
      }
    ],
    commentLink: {
      label: 'Связанный документ',
      url: 'https://it.nlmk.com/ru/'
    },
    badge: {
      label: 'В работе',
      color: 'warning',
      variant: 'filled'
    },
    data: {
      isClientAuthor: true,
      sourceSystem: 'crm'
    },
    replies: [
      {
        id: '1-1',
        author: 'Иванов Иван Иванович',
        content: 'Согласен с вашим мнением. Действительно, современные тенденции требуют пересмотра подходов.',
        createdAt: '2024-11-12T01:00:00Z',
        builtInActions: {
          onEdit: () => {},
          onDelete: () => {}
        },
        data: {
          isClientAuthor: false,
          sourceSystem: 'portal'
        },
        replies: [
          {
            id: '1-1-1',
            author: 'Сидоров Сидор Сидорович',
            content: 'Полностью поддерживаю! Нужно учитывать все аспекты.',
            createdAt: '2024-11-12T02:00:00Z',
            builtInActions: {
              onEdit: () => {},
              onDelete: () => {}
            },
            data: {
              isClientAuthor: false,
              sourceSystem: 'portal'
            },
            replies: []
          }
        ]
      },
      {
        id: '1-2',
        author: 'Козлова Анна Петровна',
        content: 'Интересная точка зрения. Хотелось бы узнать больше деталей по этому вопросу.',
        createdAt: '2024-11-12T01:30:00Z',
        builtInActions: {
          onEdit: () => {},
          onDelete: () => {}
        },
        customActions: [
          {
            value: 'report',
            label: 'Пожаловаться',
            onClick: onReport
          }
        ],
        data: {
          isClientAuthor: true,
          sourceSystem: 'crm'
        },
        replies: []
      }
    ]
  }
];

const App = () => {
  return (
    <Box p={8} background="var(--steel-10)" borderRadius={4} width="100%">
      <Comments<CommentExtraData>
        comments={comments}
        handleAddRootComment={() => {}}
        handleAddReply={() => {}}
      >
        <Comments.Item>
          <Comments.Header>
            <Comments.Badge />

            <Comments.HeaderExtra<CommentExtraData>>
              {({ data }) => data?.isClientAuthor && <Badge>Клиент</Badge>}
            </Comments.HeaderExtra>

            <Comments.Author />
            <Comments.Meta />
          </Comments.Header>

          <Comments.Content />
          <Comments.Actions />
        </Comments.Item>
      </Comments>
    </Box>
  );
};

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Comments"
        description="Comments отображает список комментариев с поддержкой вложенных ответов, редактирования, раскрытия веток, обновления списка и добавления новых комментариев."
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Comments"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={activeTab === 0} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={activeTab === 1} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={activeTab === 2} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {activeTab === 0 && (
        <>
          <Editor minHeight={640} description="Базовый пример Comments." code={commentsDefaultCode} />

          <Editor
            minHeight={640}
            description="Пример: длинная ветка комментариев с вложенными ответами, кастомными действиями и дополнительными элементами в шапке."
            code={commentsLongThreadCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {activeTab === 1 && <FigmaEmbed url={FIGMA_LINK} />}

      {activeTab === 2 && <Tests componentName="Comments" />}
    </div>
  );
};

export default CommentsStories;
