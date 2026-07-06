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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964';

const defaultFilterTipComponent = `import { FilterTip } from '@nlmk/ds-2.0';

const App = () => <FilterTip text="ГК Партии" />;
export default App;
`;

const activeAndSizeFilterTipComponent = `import { FilterTip } from '@nlmk/ds-2.0';

const App = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <FilterTip text="Активный фильтр" isActive />
    <FilterTip text="Малый размер" size="s" />
    <FilterTip text="Средний размер" size="m" />
  </div>
);
export default App;
`;

const editableFilterTipComponent = `import { useState } from 'react';
import { FilterTip } from '@nlmk/ds-2.0';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const onChange = () => {
    setIsActive(prev => !prev);
  };

  return <FilterTip isActive={isActive} text="ГК Партии" onClick={onChange} />;
};
export default App;
`;

const removableFilterTipComponent = `import { useState } from 'react';
import { FilterTip } from '@nlmk/ds-2.0';

const App = () => {
  const [filters, setFilters] = useState([
    { id: 'plant', text: 'Площадка' },
    { id: 'shift', text: 'Смена' }
  ]);

  const onDelete = id => {
    setFilters(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {filters.map(filter => (
        <FilterTip key={filter.id} id={filter.id} text={filter.text} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default App;
`;

const disabledAndReadonlyFilterTipComponent = `import { FilterTip } from '@nlmk/ds-2.0';

const App = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <FilterTip text="Только чтение" isWithoutCancelIcon />
    <FilterTip text="Недоступен" isDisabled />
  </div>
);
export default App;
`;

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="FilterTip"
        description="FilterTip отображает активные фильтры и поддерживает состояния выбора, удаления и блокировки. Компонент подходит для визуализации выбранных параметров в фильтрах и поиске."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/FilterTip"
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
          <Editor minHeight={180} description="Базовое отображение фильтра." code={defaultFilterTipComponent} />
          <Editor
            minHeight={220}
            description="Состояние активности и настройка размера компонента."
            code={activeAndSizeFilterTipComponent}
          />
          <Editor
            minHeight={250}
            description="Переключение активности по клику на компонент."
            code={editableFilterTipComponent}
          />
          <Editor
            minHeight={320}
            description="Удаление фильтра через callback onDelete."
            code={removableFilterTipComponent}
          />
          <Editor
            minHeight={220}
            description="Режим только чтения и заблокированное состояние компонента."
            code={disabledAndReadonlyFilterTipComponent}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="FilterTip" />}
    </div>
  );
};

export default Stories;
