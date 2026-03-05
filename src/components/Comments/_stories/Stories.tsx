import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
// import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';

import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

// const FIGMA_LINK = 'https://www.figma.com/';

const CommentsStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const commentsDefaultCode = `import React from 'react';
import { Comments } from '@nlmk/ds-2.0';

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
    <Comments
      comments={comments}
      handleAddRootComment={() => {}}
      handleAddReply={() => {}}
    />
  );
};

export default App;
`;

  const commentsLongThreadCode = `import React from 'react';
import { Comments } from '@nlmk/ds-2.0';

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
        onClick: () => {}
      }
    ],
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
        customActions: [
          {
            value: 'report',
            label: 'Пожаловаться',
            onClick: () => {}
          }
        ],
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
            customActions: [
              {
                value: 'report',
                label: 'Пожаловаться',
                onClick: () => {}
              }
            ],
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
            onClick: () => {}
          }
        ],
        replies: []
      }
    ]
  }
];

const App = () => {
  return (
    <Comments
      comments={comments}
      handleAddRootComment={() => {}}
      handleAddReply={() => {}}
    />
  );
};

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Comments"
        description="Comments отображает дерево комментариев с ответами, редактированием, удалением, пользовательскими действиями, раскрытием веток и добавлением комментариев."
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Comments"
        // figmaLink={FIGMA_LINK}
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
            description="Пример: длинная ветка комментариев с вложенными ответами и действиями."
            code={commentsLongThreadCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {/* {activeTab === 1 && <FigmaEmbed url={FIGMA_LINK} />} */}

      {activeTab === 2 && <Tests componentName="Comments" />}
    </div>
  );
};

export default CommentsStories;
