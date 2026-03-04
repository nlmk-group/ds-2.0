import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';
import { getStorybookImageSrc } from '@components/_storybook/utils';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-7913&t=HhCDuaOuzHu5rgyf-1';

const ImagePictureStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const imagePath = getStorybookImageSrc('/img/image_career.jpg');

  const imgpicDefaultCode = `import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = '${imagePath}';

  return (
    <ImagePicture src={path} alt="Описание изображения" />
  )
};

export default App;
`;

  const imgpicRatioCode = `import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = '${imagePath}';

  return (
    <>
      <ImagePicture src={path} aspectRatio='ratio-16x9' />
      <ImagePicture src={path} aspectRatio='ratio-1x1' />
    </>
  )
};

export default App;
`;

  const imgpicRadiusCode = `import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = '${imagePath}';

  return (
    <>
      <ImagePicture src={path} radius='radius-8px' />
    </>
  )
};

export default App;
`;

  const imgpicZoomCode = `import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => {
  const path = '${imagePath}';

  return (
    <ImagePicture src={path} zoom={false} />
  )
};

export default App;
`;

  const imgpicEmptyCode = `import { ImagePicture } from '@nlmk/ds-2.0';

const App = () => (
  <ImagePicture aspectRatio="ratio-4x3" radius="radius-4px" />
);

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="ImagePicture"
        description="ImagePicture отображает изображение с настройкой соотношения сторон, скругления и зума при наведении. Компонент также поддерживает состояние без изображения."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ImagePicture"
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
          <Editor minHeight={700} description="Базовое отображение изображения." code={imgpicDefaultCode} />

          <Editor minHeight={900} description="Сравнение соотношений сторон изображения." code={imgpicRatioCode} />

          <Editor minHeight={700} description="Скругление углов через проп radius." code={imgpicRadiusCode} />

          <Editor minHeight={700} description="Отключение зума при наведении через zoom={false}." code={imgpicZoomCode} />

          <Editor minHeight={700} description="Состояние компонента без переданного src." code={imgpicEmptyCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="ImagePicture" />}
    </div>
  );
};

export default ImagePictureStories;
