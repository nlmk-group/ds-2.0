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

const FIGMA_LINK = 'https://www.figma.com/design/UrNaiI72SjVg0aHW6NYVCi/NLMK-Grid?node-id=207-40301';

const summaryCode = `import { Box, Grid, Typography } from '@nlmk/ds-2.0';

const metrics = [
  { label: 'План смены', value: '1 200 т' },
  { label: 'Выпущено', value: '960 т' },
  { label: 'До конца смены', value: '240 т' }
];

export default () => (
  <Grid container gap={16}>
    {metrics.map(({ label, value }) => (
      <Grid key={label} size={{ xs: 12, sm: 4 }}>
        <Box p={16} flexDirection="column" gap={8} background="var(--steel-20)" borderRadius={4}>
          <Typography variant="Body2-Medium">{label}</Typography>
          <Typography variant="Heading3">{value}</Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
)`;

const detailsCode = `import { Box, Grid, Typography } from '@nlmk/ds-2.0';

export default () => (
  <Grid container gap={16}>
    <Grid size={{ xs: 12, md: 8 }}>
      <Box p={16} flexDirection="column" gap={8} background="var(--steel-20)" borderRadius={4}>
        <Typography variant="Heading4">План отгрузки</Typography>
        <Typography>До 14:00 подготовить рулоны к погрузке на второй путь.</Typography>
      </Box>
    </Grid>
    <Grid size={{ xs: 12, md: 4 }}>
      <Box p={16} flexDirection="column" gap={8} background="var(--steel-20)" borderRadius={4}>
        <Typography variant="Heading4">Ответственный</Typography>
        <Typography>Мастер смены</Typography>
      </Box>
    </Grid>
  </Grid>
)`;

const wrappingCode = `import { useState } from 'react';
import { Box, Grid, ToggleButtonGroup } from '@nlmk/ds-2.0';

const stations = ['Резка', 'Прокатка', 'Отделка', 'Упаковка'];

export default () => {
  const [columns, setColumns] = useState(2);

  return (
    <Box width="100%" flexDirection="column" gap={16}>
      <div role="group" aria-label="Колонок в строке">
        <ToggleButtonGroup size="s">
          {[1, 2, 3].map(count => (
            <ToggleButtonGroup.Button key={count} active={columns === count} onClick={() => setColumns(count)}>
              <ToggleButtonGroup.Button.Label>{count}</ToggleButtonGroup.Button.Label>
            </ToggleButtonGroup.Button>
          ))}
        </ToggleButtonGroup>
      </div>
      <Grid container gap={12}>
        {stations.map(station => (
          <Grid key={station} size={columns === 1 ? 12 : columns === 2 ? 6 : 4}>
            <Box p={8} background="var(--steel-20)" borderRadius={4}>{station}</Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}`;

const rowsCode = `import { Grid, Typography } from '@nlmk/ds-2.0';

export default () => (
  <Grid width="100%" flexDirection="column" gap={12}>
    {['Утренняя', 'Вечерняя'].map((shift, index) => (
      <Grid.Row key={shift} justifyContent="space-between" alignItems="center" gap={8}
        p={16} background="var(--steel-20)" borderRadius={4} st={{ boxSizing: 'border-box' }}>
        <Grid.Column gap={4}>
          <Typography variant="Heading4">{shift} смена</Typography>
          <Typography variant="Body2-Medium">{index === 0 ? '07:00 — 15:00' : '15:00 — 23:00'}</Typography>
        </Grid.Column>
        <Grid.Column>
          <Typography>{index === 0 ? '18 сотрудников' : '16 сотрудников'}</Typography>
        </Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
)`;

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Grid"
        description="Grid используется для построения адаптивной раскладки на основе строк и колонок. Компонент поддерживает управление шириной, выравниванием, переносом и брейкпоинтами."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid"
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
            stacked
            description="Сводка смены. При ширине окна от 600 px три показателя стоят в ряд, на телефоне — друг под другом."
            code={summaryCode}
          />
          <Editor
            stacked
            description="Основной блок и боковая колонка. От 960 px они занимают 8 и 4 доли сетки из 12. Ниже этого порога каждый блок занимает всю строку."
            code={detailsCode}
          />
          <Editor
            stacked
            description="Перенос ячеек. Выберите, сколько участков помещать в строку, и проследите, куда переместится упаковка."
            code={wrappingCode}
          />
          <Editor
            stacked
            description="Строки и вложенные колонки. Название смены и время сгруппированы слева, численность выровнена по правому краю."
            code={rowsCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Grid" />}
    </div>
  );
};

export default Stories;
