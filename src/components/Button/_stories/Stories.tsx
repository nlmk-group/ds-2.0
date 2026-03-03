import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Button"
        description="Button запускает пользовательское действие и поддерживает настройку внешнего вида через размер, цвет, вариант, иконки и бейджи. Компонент включает текстовый и icon-only режимы."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button"
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
            description="Сравнение размеров кнопки."
            code={`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button type="button">
      Button
    </Button>
    <Button type="button" size="s">
      Button
    </Button>
    <Button type="button" size="xs">
      Button
    </Button>
  </>
)`}
          />

          <Editor
            minHeight={500}
            description="Цветовые схемы и варианты отображения кнопки."
            code={`import { Button, Box } from '@nlmk/ds-2.0';

export default App = () => (
  <Box display="flex" flexDirection="column" gap={12}>
    <Box display="flex" gap={8}>
      <Button type="button" color="brand">Brand Primary</Button>
      <Button type="button" color="brand" variant="secondary">Brand Secondary</Button>
    </Box>

    <Box display="flex" gap={8}>
      <Button type="button" color="grey">Grey Primary</Button>
      <Button type="button" color="grey" variant="secondary">Grey Secondary</Button>
    </Box>

    <Box display="flex" gap={8}>
      <Button type="button" color="ghost">Ghost Primary</Button>
      <Button type="button" color="ghost" variant="secondary">Ghost Secondary</Button>
    </Box>

    <Box display="flex" gap={8}>
      <Button type="button" color="error">Error Primary</Button>
      <Button type="button" color="error" variant="secondary">Error Secondary</Button>
    </Box>

    <Box display="flex" gap={8}>
      <Button type="button" color="warning">Warning Primary</Button>
      <Button type="button" color="warning" variant="secondary">Warning Secondary</Button>
    </Box>

    <Box display="flex" gap={8}>
      <Button type="button" color="success">Success Primary</Button>
      <Button type="button" color="success" variant="secondary">Success Secondary</Button>
    </Box>
  </Box>
)`}
          />
          <Editor
            description="Кнопка с иконкой в начале и в конце текста."
            code={`import { Button, IconArrowLeftOutlined24, IconArrowRightOutlined24 } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button
      type="button"
      startIcon={<IconArrowLeftOutlined24 />}
    >
      Назад
    </Button>
    <Button
      type="button"
      endIcon={<IconArrowRightOutlined24 />}
      variant="secondary"
    >
      Далее
    </Button>
  </>
)`}
          />
          <Editor
            description="Кнопка с бейджами в начале и в конце текста."
            code={`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button type="button" startBadge={2}>
      Входящие
    </Button>
    <Button type="button" endBadge={12} variant="secondary">
      Уведомления
    </Button>
  </>
)`}
          />
          <Editor
            description="Режим iconButton для компактных действий."
            code={`import { Button, IconDeleteBinOutlined24, IconArticleOutlined24 } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button
      type="button"
      iconButton={<IconArticleOutlined24 />}
      aria-label="Открыть"
    />
    <Button
      type="button"
      color="error"
      variant="secondary"
      iconButton={<IconDeleteBinOutlined24 />}
      aria-label="Удалить"
    />
  </>
)`}
          />
          <Editor
            description="Состояние disabled для блокировки действия."
            code={`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button type="button" disabled>
      Недоступно
    </Button>
    <Button type="button" variant="secondary" color="grey" disabled>
      Недоступно
    </Button>
  </>
)`}
          />
          <Editor
            description="Кастомизация кнопки через className и style."
            code={`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <Button
    type="button"
    className="custom-button"
    style={{ minWidth: 180 }}
  >
    Кастомная кнопка
  </Button>
)`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Button" />}
    </div>
  );
};

export default Stories;
