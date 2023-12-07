import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
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
        title="SkeletonLoader"
        description="Skeleton Loader — это статический/анимированный элемент для информации, которая все еще загружается."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            description="Компонент лоадера по умолчанию"
            code={`import { SkeletonLoader } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <>
    <SkeletonLoader width="350px" />
  </>
)
`}
          />

          <Editor
            description="Компонент лоадера с множественными блоками"
            code={`import { SkeletonLoader } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <>
    <div>
      <SkeletonLoader width="40px" count={1} height="50px" />
      <SkeletonLoader width="310px" count={1} height="50px" />
    </div>
    <SkeletonLoader width="115px" count={3} height="50px" />            
    <SkeletonLoader width="177px" count={2} height="50px" />
  </>            
)
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="SkeletonLoader" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
