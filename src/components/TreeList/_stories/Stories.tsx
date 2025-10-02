import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=417-86981&p=f&t=pOZSSeIHfpaoa1eT-0';

const TreeListStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const treeListDefaultCode = `import React, { useState } from 'react';
import { TreeList, IconFolderFilled24, IconCircleOutlined24, IconWarningFilled24, IconFolderOutlined24 } from '@nlmk/ds-2.0';

const defaultTreeData = [
  {
    key: '0-0',
    title: 'Производство стали',
    icon: <IconFolderFilled24 />, // Кастомная иконка
    children: [
      {
        key: '0-0-0',
        title: 'Конвертерный цех',
        icon: <IconFolderFilled24 />,
        children: [
          { 
            key: '0-0-0-0', 
            title: 'Конвертер №1',
            icon: <IconCircleOutlined24 />
          },
          { 
            key: '0-0-0-1', 
            title: 'МНЛЗ №3 (заблокировано)',
            icon: <IconWarningFilled24 />,
            disabled: true // Полная блокировка узла
          },
          { 
            key: '0-0-0-2', 
            title: 'Установка ковш-печь (нельзя перетаскивать)',
            icon: <IconCircleOutlined24 />,
            disableDraggable: true // Запрет только на перетаскивание
          }
        ]
      },
      {
        key: '0-0-1',
        title: 'Электросталеплавильный цех',
        icon: <IconFolderFilled24 />,
        children: [
          { 
            key: '0-0-1-0', 
            title: 'ДСП №1',
            icon: <IconCircleOutlined24 />
          },
          { 
            key: '0-0-1-1', 
            title: 'Агрегат печь-ковш',
            icon: <IconCircleOutlined24 />
          }
        ]
      }
    ]
  },
  {
    key: '0-1',
    title: 'Прокатное производство',
    icon: <IconFolderOutlined24 />,
    children: [
      {
        key: '0-1-0',
        title: 'Цех горячей прокатки',
        icon: <IconFolderFilled24 />,
        children: [
          { 
            key: '0-1-0-0', 
            title: 'Стан 2000',
            icon: <IconCircleOutlined24 />
          },
          { 
            key: '0-1-0-1', 
            title: 'Методические печи',
            icon: <IconCircleOutlined24 />
          }
        ]
      }
    ]
  }
];

const App = () => {
  const [data, setData] = useState(defaultTreeData);

  const onSelectedNode = (e) => {
    console.log('Выбранный узел:', e);
  };

  const onDataAfterDrag = (newData) => {
    console.log('Структура после перемещения:', newData);
    setData(newData);
  };

  const onDragStart = (e) => {
    console.log('Событие начала перетаскивания: ',  e.event)
  }
  
  const onDragEnd = (e) => {
    console.log('Событие конца перетаскивания: ', e.event)
  }

  return (
    <TreeList
      data={data}
      checkable
      draggable
      rowHeight="s"
      onSelectedNode={onSelectedNode}
      onDataAfterDrag={onDataAfterDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default App;`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="TreeList"
        description="TreeList - компонент древовидного списка, который позволяет отображать иерархические данные с возможностью выбора элементов и drag-n-drop функциональностью."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TreeList"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor
            height={500}
            description="Базовый пример использования TreeList с чекбоксами и drag-n-drop"
            code={treeListDefaultCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="TreeList" />}
    </div>
  );
};

export default TreeListStories;
