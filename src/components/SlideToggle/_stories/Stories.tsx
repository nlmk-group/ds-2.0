import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const FIGMA_LINK =
  'https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=212-40498&mode=design&t=e3eMVFD5FRwzvUZH-0';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const slideToggle = `import { SlideToggle } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <SlideToggle
      title={'Заголовок'}
      isShow={show}
      onToggle={() => setShow(!show)}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </SlideToggle>
  );
};
export default App;`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="SlideToggle"
        description="SlideToggle — элемент, который позволяет отображать/скрывать элемент."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SlideToggle"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor height={200} description="Spinner состояние по умолчанию" code={slideToggle} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="SlideToggle" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
