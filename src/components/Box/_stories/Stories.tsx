import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const taskCode = `import { Box, Status, Typography } from '@nlmk/ds-2.0';

export default () => (
  <Box width="100%" maxWidth={480} p={20} gap={12} flexDirection="column"
    border="1px solid var(--unique-divider)" borderRadius={8}
    background="var(--steel-10)" st={{ boxSizing: 'border-box' }}>
    <Box justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={8}>
      <Typography variant="Heading4">Осмотр линии</Typography>
      <Status color="success" size="s">Назначено</Status>
    </Box>
    <Typography>Проверить ограждение перед запуском прокатного стана.</Typography>
  </Box>
);`;

const spacingCode = `import { useState } from 'react';
import { Box, Switch, Typography } from '@nlmk/ds-2.0';

export default () => {
  const [compact, setCompact] = useState(false);

  return (
    <Box width="100%" flexDirection="column" gap={16}>
      <Switch label="Компактные строки" checked={compact} onChange={() => setCompact(!compact)} />
      <Box flexDirection="column" gap={0} border="1px solid var(--unique-divider)" borderRadius={8}>
        {['Приёмка металла', 'Контроль качества'].map((step, index) => (
          <Box key={step} p={16} py={compact ? 6 : 16} pl={24}
            st={{ borderTop: index ? '1px solid var(--unique-divider)' : undefined }}>
            <Typography>{step}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};`;

const wrapCode = `import { useState } from 'react';
import { Box, Switch, Typography } from '@nlmk/ds-2.0';

const stations = ['Резка металла', 'Прокатка', 'Термообработка', 'Упаковка'];

export default () => {
  const [narrow, setNarrow] = useState(false);

  return (
    <Box width="100%" flexDirection="column" gap={16}>
      <Switch label="Узкая панель" checked={narrow} onChange={() => setNarrow(!narrow)} />
      <Box width="100%" maxWidth={narrow ? 240 : 720} p={12} flexWrap="wrap" gap={8}
        border="1px solid var(--unique-divider)" borderRadius={8} st={{ boxSizing: 'border-box' }}>
        {stations.map(name => (
          <Box key={name} px={12} py={8} background="var(--steel-20)" borderRadius={4}>
            <Typography>{name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};`;

const emptyCode = `import { Box, Typography } from '@nlmk/ds-2.0';

export default () => (
  <Box width="100%" flexDirection="column" justifyContent="center" alignItems="center"
    gap={8} p={16} background="var(--steel-20)" borderRadius={8}
    st={{ minHeight: 144, boxSizing: 'border-box', textAlign: 'center' }}>
    <Typography variant="Heading4">Заявок пока нет</Typography>
    <Typography>Здесь появятся заявки текущей смены.</Typography>
  </Box>
);`;

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Box"
        description="Box — универсальный контейнер для компоновки и стилизации контента. Поддерживает отступы, размеры, выравнивание и стандартные атрибуты div, включая id, aria-атрибуты и обработчики событий."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Box"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={activeTab === 0} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Тестирование" active={activeTab === 2} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {activeTab === 0 && (
        <>
          <Editor
            description="Карточка задания. Box собирает заголовок, статус и описание в колонку с общими отступами."
            code={taskCode}
          />
          <Editor
            description="Отступы внутри строки. Переключите плотность и сравните расстояние от текста до рамки."
            code={spacingCode}
          />
          <Editor
            stacked
            description="Перенос при сужении. Измените ширину панели и посмотрите, как участки распределятся по строкам."
            code={wrapCode}
          />
          <Editor
            description="Пустое состояние. Контейнер центрирует сообщение по обеим осям и растёт вместе с текстом."
            code={emptyCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab === 2 && <Tests componentName="Box" />}
    </div>
  );
};

export default Stories;
