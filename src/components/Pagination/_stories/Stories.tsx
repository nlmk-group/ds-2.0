import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Pagination';
const FIGMA_LINK = 'https://www.figma.com/design/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38250';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  const defaultPaginationCode = `import { Pagination } from '@nlmk/ds-2.0';
import React, { useState } from 'react';

export default App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={25} />;
};
`;

  const collapsedPaginationCode = `import { Pagination } from '@nlmk/ds-2.0';
import React, { useState } from 'react';

export default App = () => {
  const [currentPage, setCurrentPage] = useState(12);

  return <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={25} />;
};
`;

  const paginationWithSelectCode = `import { Pagination } from '@nlmk/ds-2.0';
import React, { useState } from 'react';

export default App = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [pageSize, setPageSize] = useState(20);

  return (
    <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      maxPageCount={40}
      withSelect
      elementsPerPage={pageSize}
      setElementsPerPage={setPageSize}
      itemsLabel="строк"
      pageSizes={[10, 20, 50, 100]}
    />
  );
};
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Pagination используется для постраничной навигации и поддерживает как переключение страниц, так и настройку количества элементов на странице."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          <Tabs.Tab label="Дизайнеру" active={isActive(TabIds.design)} onClick={() => setActiveTab(TabIds.design)} />
          <Tabs.Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab == TabIds.dev && (
        <>
          <Editor minHeight={200} description="Базовое переключение страниц." code={defaultPaginationCode} />
          <Editor
            description="Компактный режим с разрывами при большом количестве страниц."
            code={collapsedPaginationCode}
          />
          <Editor
            description="Пагинация с выбором количества элементов через withSelect."
            code={paginationWithSelectCode}
            previewPaneWidth="60%"
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab == TabIds.tests && <Tests componentName={COMPONENT_NAME} />}
    </div>
  );
};

export default Stories;
