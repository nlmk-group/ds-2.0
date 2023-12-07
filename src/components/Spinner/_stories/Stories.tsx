import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';
import '@components/_storybook/Stories/styles.css';
import argsTypes from './argsTypes';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Spinner"
        description="Spinner — это компонент который используется в качестве индикатора загрузки."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange"
        figmaLink="https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?node-id=2%3A10&mode=dev"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            description="Spinner состояние по умолчанию"
            code={`import { Spinner } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <>
    <Spinner />
  </>
)
`}
          />

          <Editor
            description="Spinner размера medium и large"
            code={`import { Spinner } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <>
    <Spinner size="m" />
    <div/>
    <Spinner size="l" />
  </>
)
`}
          />

          <Editor
            description="Spinner с разными цветами"
            code={`import { Spinner } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <>
    <Spinner bgColor="#ff6e40" color="#1e3d59" />
  </>
)
`}
          />

          <Editor
            description="Spinner где Icon, как children (JSX.Element)"
            code={`import { Spinner, Icon } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <>
    <Spinner>
      <Icon color="primary" containerSize={32} name="IconAutorenew24" />
    </Spinner>
  </>
)
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?type=design&node-id=2-10&mode=design&t=VPWVvr1xxRraTKwa-0" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Spinner" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
