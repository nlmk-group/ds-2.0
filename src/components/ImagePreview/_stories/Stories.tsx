import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

// const FIGMA_LINK =
//   'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-7913&t=HhCDuaOuzHu5rgyf-1';

const ImagePreviewStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const imagePreviewDefaultCode = `import { ImagePreview } from '@nlmk/ds-2.0';

const App = () => {
  const IMAGE_MOCK_SRC = 'https://images.unsplash.com/photo-1683343946402-85b144e8ecb6?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const items = [
    {
      id: 1,
      previewSrc: IMAGE_MOCK_SRC,
      fullSrc: IMAGE_MOCK_SRC,
      title: 'Этап 1',
      description: 'Название фото 1',
      downloadName: 'photo-1.jpg',
      alt: 'Mock photo 1'
    }
  ];

  return <ImagePreview items={items} />;
};

export default App;
`;

  const imagePreviewManyCode = `import { ImagePreview } from '@nlmk/ds-2.0';

const App = () => {
  const items = [
    {
      id: 1,
      previewSrc: IMAGE_MOCK_SRC,
      fullSrc: IMAGE_MOCK_SRC,
      title: 'Этап 1',
      description: 'Название фото 1',
      downloadName: 'photo-1.jpg'
    },
    {
      id: 2,
      previewSrc: IMAGE_MOCK_SRC,
      fullSrc: IMAGE_MOCK_SRC,
      title: 'Этап 2',
      description: 'Название фото 2',
      downloadName: 'photo-2.jpg'
    },
    {
      id: 3,
      previewSrc: IMAGE_MOCK_SRC,
      fullSrc: IMAGE_MOCK_SRC,
      title: 'Этап 3',
      description: 'Название фото 3',
      downloadName: 'photo-3.jpg'
    }
  ];

  return <ImagePreview items={items} />;
};

export default App;
`;

  const imagePreviewEmptyCode = `import { ImagePreview } from '@nlmk/ds-2.0';

const App = () => {
  return <ImagePreview items={[]} />;
};

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="ImagePreview"
        description="ImagePreview отображает превью изображений и открывает модальное окно с просмотром большого изображения, каруселью миниатюр, навигацией стрелками и скачиванием."
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePreview"
        // figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor
            height={420}
            description="ImagePreview с одним изображением."
            code={imagePreviewDefaultCode}
          />

          <Editor
            height={520}
            description="ImagePreview с несколькими изображениями: слева карусель, навигация стрелками, заголовок и описание."
            code={imagePreviewManyCode}
          />

          <Editor
            height={260}
            description="Пустое состояние (если items пустой, компонент ничего не рисует)."
            code={imagePreviewEmptyCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {/*{Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}*/}

      {Number(activeTab) === 2 && <Tests componentName="ImagePreview" />}
    </div>
  );
};

export default ImagePreviewStories;
