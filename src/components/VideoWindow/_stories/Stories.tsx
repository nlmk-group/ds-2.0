import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-2';

const VideoWindowStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const videoWindowDefaultCode = `import React, { useState } from 'react';
import { VideoWindow, Button } from '@nlmk/ds-2.0';

const App = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', position: 'relative', minHeight: 400 }}>
      <Button type="button" onClick={() => setIsVideoOpen(true)}>
        Открыть видео
      </Button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          title="Демо-видео"
          autoPlay
          draggable
          resizable
          draggableStartPosition={{ x: 20, y: 60 }}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};

export default App;`;
  const localeCode = `import React, { useState } from 'react';
import { VideoWindow, Button } from '@nlmk/ds-2.0';

const App = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', position: 'relative', minHeight: 300 }}>
      <Button type="button" onClick={() => setIsVideoOpen(true)}>
        Открыть видео
      </Button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          title="Demo video"
          locale="en"
          autoPlay={false}
          style={{ position: 'absolute', left: 0, top: 56 }}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};

export default App;`;
  const customTitleCode = `import React, { useState } from 'react';
import { VideoWindow, Button, Box, Typography, Icon } from '@nlmk/ds-2.0';

const App = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', position: 'relative', minHeight: 300 }}>
      <Button type="button" onClick={() => setIsVideoOpen(true)}>
        Открыть с кастомным заголовком
      </Button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          title={
            <Box gap="8px" alignItems="center">
              <Icon name="IconInfoOutlined16" htmlColor="var(--unique-white)" />
              <Typography variant="Body1-Medium" color="var(--unique-white)">
                Видеоурок по компоненту
              </Typography>
            </Box>
          }
          draggable
          draggableStartPosition={{ x: 80, y: 80 }}
          style={{ position: 'absolute', left: 0, top: 56 }}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};

export default App;`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="VideoWindow"
        description="VideoWindow отображает видео в отдельном плавающем окне с управлением размером, позицией, сворачиванием, полноэкранным режимом и локализацией элементов управления."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/VideoWindow"
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
            minHeight={400}
            description="Базовый сценарий с `autoPlay`, `draggable`, `resizable` и закрытием окна через `onClose`."
            code={videoWindowDefaultCode}
          />
          <Editor
            minHeight={400}
            description="Локализация контролов окна через `locale` (пример: `en`)."
            code={localeCode}
          />
          <Editor
            minHeight={400}
            description="Кастомный ReactNode-заголовок через `title` и стартовая позиция окна через `draggableStartPosition`."
            code={customTitleCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="VideoWindow" />}
    </div>
  );
};

export default VideoWindowStories;
