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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=316-3599';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const editableLegendComponent = `import { useState } from 'react';
import { Legend } from '@nlmk/ds-2.0';

const color = {
  default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)'
}

const colorList = [
  { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' },
  { default: 'var(--spectrum-green-20)', hover: 'var(--spectrum-green-30)', active: 'var(--spectrum-green-10)' },
  { default: 'var(--spectrum-orange-20)', hover: 'var(--spectrum-orange-30)', active: 'var(--spectrum-orange-10)' }
]

const App = () => {
  const [currentColor, setCurrentColor] = useState(color);

  const onChange = (val) => {
    setCurrentColor(val);
  }

  return (
    <Legend color={currentColor} type="EDIT" colorList={colorList} onColorChange={onChange} />
  );
}

export default App;`;

  const editableCustomLegend = `import { useState } from 'react';
import { Legend, Typography } from '@nlmk/ds-2.0';

const containerColor = {
  default: 'var(--spectrum-sky-20)',
  hover: 'var(--spectrum-sky-30)',
  active: 'var(--spectrum-sky-10)'
};

const color = {
  default: 'var(--spectrum-red-20)',
  hover: 'var(--spectrum-red-30)',
  active: 'var(--spectrum-red-10)'
};

const colorList = [
  { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' },
  {
    default: 'container',
    viewColor: ({ className, isActive, onColorChange, color }) => {
      const [isHover, setHover] = useState(false);

      const conditions = [
          { check: isHover, result: containerColor.hover },
          { check: isActive, result: containerColor.active }
      ];

      const backgroundColor = conditions.find(cond => cond.check)?.result ?? containerColor.default;

      return (
        <div
          onClick={() => onColorChange?.(color)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={className}
          style={{ backgroundColor, border: isActive ? '1px solid var(--steel-90)' : 'none', boxSizing: 'border-box' }}
        >
          <Typography color="var(--steel-90)" variant="Caption-Bold">PT-23</Typography>
        </div>
      );
    },
    editColor: ({ className, onClick, isDisabled, isOpen }) => {
      const [isHover, setHover] = useState(false);

      const conditions = [
        { check: isDisabled, result: containerColor.default },
        { check: isOpen, result: containerColor.active },
        { check: isHover, result: containerColor.hover }
      ];

      const backgroundColor = conditions.find(cond => cond.check)?.result ?? containerColor.default;

      return (
        <div
          onClick={onClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={className}
          style={{ backgroundColor, border: '1px solid var(--steel-90)', boxSizing: 'border-box' }}
        >
          <Typography color="var(--steel-90)" variant="Caption-Bold">PT-23</Typography>
        </div>
      );
    }
  },
  { default: 'var(--spectrum-orange-20)', hover: 'var(--spectrum-orange-30)', active: 'var(--spectrum-orange-10)' }
];

const App = () => {
  const [currentColor, setCurrentColor] = useState(color);

  const onChange = val => {
    setCurrentColor(val);
  };

  return <Legend color={currentColor} colorList={colorList} type="EDIT" onColorChange={onChange} />;
};

export default App;`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Legend"
        description="Компонент Legend используется для настройки цветов в таблицах/графике, и их отображение списком"
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Legend"
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
            height={450}
            description="Для выбора цвета при помощи компонента Legend, нужно указать в тип Legend 'EDIT' и передать в свойство colorList массив объектов с интерфейсом ILegendColor."
            code={editableLegendComponent}
          />
          <Editor
            height={650}
            description="Чтобы настроить кастомные компоненты выбора цвета в Legend, передайте viewColor и editColor — функциональные компоненты с соответствующими props для отображения и редактирования, включая ref."
            code={editableCustomLegend}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Legend" />}
    </div>
  );
};

export default Stories;
