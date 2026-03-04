import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import { getStorybookImageSrc } from '@components/_storybook/utils';

const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=16052-4554&m=dev';

const ImagePreviewStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const imagePreviewDefaultCode = `import { ImagePreview } from '@nlmk/ds-2.0';

const App = () => {
  const items = [
    {
      id: 1,
      previewSrc: '${getStorybookImageSrc('/img/image_career.jpg')}',
      fullSrc: '${getStorybookImageSrc('/img/image_career.jpg')}',
      title: 'Этап 1',
      description: 'Название фото 1',
      previewTitle: 'Фото',
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
      previewSrc: '${getStorybookImageSrc('/img/image_career.jpg')}',
      fullSrc: '${getStorybookImageSrc('/img/image_career.jpg')}',
      title: 'Этап 1',
      previewTitle: 'Фото 1',
      description: 'Название фото 1',
      downloadName: 'photo-1.jpg'
    },
    {
      id: 2,
      previewSrc: '${getStorybookImageSrc('/img/image_warehouse.png')}',
      fullSrc: '${getStorybookImageSrc('/img/image_warehouse.png')}',
      title: 'Этап 2',
      previewTitle: 'Фото 2',
      description: 'Название фото 2',
      downloadName: 'photo-2.jpg'
    },
    {
      id: 3,
      previewSrc: '${getStorybookImageSrc('/img/image_rolled_steel_sheet.png')}',
      fullSrc: '${getStorybookImageSrc('/img/image_rolled_steel_sheet.png')}',
      title: 'Этап 3',
      previewTitle: 'Фото 3',
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
        description="ImagePreview отображает список изображений-миниатюр и открывает модальное окно с просмотром большого изображения, каруселью миниатюр, навигацией и скачиванием."
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePreview"
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
            minHeight={420}
            description="ImagePreview с одним изображением."
            code={imagePreviewDefaultCode}
          />

          <Editor
            minHeight={520}
            description="ImagePreview с несколькими изображениями: слева карусель, навигация стрелками, заголовок и описание."
            code={imagePreviewManyCode}
          />

          <Editor
            minHeight={260}
            description="Пустое состояние (если items пустой, компонент ничего не рисует)."
            code={imagePreviewEmptyCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}

      {Number(activeTab) === 2 && <Tests componentName="ImagePreview" />}
    </div>
  );
};

export default ImagePreviewStories;
