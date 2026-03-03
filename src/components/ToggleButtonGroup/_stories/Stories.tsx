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

const COMPONENT_NAME = 'ToggleButtonGroup';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27629&t=EnvIMGos3m33avAX-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };
  const defaultCode = `import { ToggleButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button: ToggleButton } = ToggleButtonGroup;

const App = () => {
  const [selected, setSelected] = useState<'plus' | 'result' | 'minus'>('plus');

  return (
    <ToggleButtonGroup>
      <ToggleButton active={selected === 'plus'} onClick={() => setSelected('plus')}>
        <ToggleButton.Label>Плюс</ToggleButton.Label>
      </ToggleButton>
      <ToggleButton active={selected === 'result'} onClick={() => setSelected('result')}>
        <ToggleButton.Label>Результат</ToggleButton.Label>
      </ToggleButton>
      <ToggleButton active={selected === 'minus'} onClick={() => setSelected('minus')}>
        <ToggleButton.Label>Минус</ToggleButton.Label>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default App;
`;
  const sizesCode = `import { ToggleButtonGroup } from '@nlmk/ds-2.0';

const { Button: ToggleButton } = ToggleButtonGroup;

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <ToggleButtonGroup size="m">
        <ToggleButton active={true}>
          <ToggleButton.Label>Размер m</ToggleButton.Label>
        </ToggleButton>
        <ToggleButton>
          <ToggleButton.Label>Опция</ToggleButton.Label>
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup size="s">
        <ToggleButton active={true}>
          <ToggleButton.Label>Размер s</ToggleButton.Label>
        </ToggleButton>
        <ToggleButton>
          <ToggleButton.Label>Опция</ToggleButton.Label>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default App;
`;
  const disabledCode = `import { ToggleButtonGroup } from '@nlmk/ds-2.0';

const { Button: ToggleButton } = ToggleButtonGroup;

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <ToggleButtonGroup disabled={true}>
        <ToggleButton active={true}>
          <ToggleButton.Label>Вся группа disabled</ToggleButton.Label>
        </ToggleButton>
        <ToggleButton>
          <ToggleButton.Label>Опция</ToggleButton.Label>
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
        <ToggleButton active={true}>
          <ToggleButton.Label>Активная</ToggleButton.Label>
        </ToggleButton>
        <ToggleButton disabled={true}>
          <ToggleButton.Label>Только эта кнопка disabled</ToggleButton.Label>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default App;
`;
  const iconsAndBadgesCode = `import { ToggleButtonGroup, IconAddPlusCircleOutlined24, IconDeleteMinusOutlined24 } from '@nlmk/ds-2.0';

const { Button: ToggleButton } = ToggleButtonGroup;

const App = () => {
  return (
    <ToggleButtonGroup>
      <ToggleButton active={true}>
        <ToggleButton.Icon>
          <IconAddPlusCircleOutlined24 />
        </ToggleButton.Icon>
        <ToggleButton.Label>Создать</ToggleButton.Label>
        <ToggleButton.Badge>3</ToggleButton.Badge>
      </ToggleButton>
      <ToggleButton>
        <ToggleButton.Tooltip description="Проверить выбранные изменения" placement="bottom">
          <ToggleButton.Label>Проверка</ToggleButton.Label>
        </ToggleButton.Tooltip>
      </ToggleButton>
      <ToggleButton>
        <ToggleButton.Icon>
          <IconDeleteMinusOutlined24 />
        </ToggleButton.Icon>
        <ToggleButton.Label>Удалить</ToggleButton.Label>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="ToggleButtonGroup объединяет переключаемые кнопки для выбора одного активного варианта. Поддерживает размеры, disabled-состояния, иконки, тултипы и бейджи."
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
          <Editor description="Базовая группа переключателей с одним активным вариантом." code={defaultCode} />

          <Editor description="Размеры группы через `size`" code={sizesCode} />

          <Editor
            description="Сценарии блокировки через `disabled` для всей группы и отдельных кнопок."
            code={disabledCode}
          />

          <Editor description="Использование иконок, тултипа и бейджа в группе." code={iconsAndBadgesCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab == TabIds.tests && <Tests componentName={COMPONENT_NAME} />}
    </div>
  );
};

export default Stories;
