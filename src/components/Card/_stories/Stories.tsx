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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-46302';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Card"
        description="Card отображает контент в структурированном контейнере с визуальным индикатором состояния. Компонент поддерживает вертикальную и горизонтальную ориентацию, а также настройку статуса и толщины индикатора."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            stacked
            minHeight={240}
            description="Итоги смены. У вертикальной карточки полоса статуса проходит по верхнему краю."
            code={`import { Box, Card, Typography } from '@nlmk/ds-2.0';

export default () => (
  <Box justifyContent="center" width="100%" background="var(--steel-10)" p={16}>
    <Card indicatorStatus="success" indicatorSize="m">
      <Box flexDirection="column" gap={4}>
        <Typography variant="Caption">Прокатный цех · Смена № 2</Typography>
        <Typography variant="Heading4">Выпуск проката</Typography>
      </Box>
      <Box flexDirection="column" gap={4}>
        <Typography variant="Heading2">186 т</Typography>
        <Typography>103% от плана · План 180 т</Typography>
      </Box>
    </Card>
  </Box>
);`}
          />
          <Editor
            stacked
            minHeight={210}
            description="Горизонтальная карточка заявки. Возьмите заявку в работу, чтобы изменить подпись, цвет и толщину боковой полосы."
            code={`import { useState } from 'react';
import { Box, Button, Card, Typography } from '@nlmk/ds-2.0';

export default () => {
  const [inProgress, setInProgress] = useState(false);

  return (
    <Box justifyContent="center" width="100%" background="var(--steel-10)" p={16}>
      <Card orientation="horizontal"
        indicatorStatus={inProgress ? 'info' : 'warning'}
        indicatorSize={inProgress ? 's' : 'l'}>
        <Box flexDirection="column" alignItems="flex-start" gap={8}>
          <Typography variant="Caption">Заявка ТО-214</Typography>
          <Typography variant="Heading4">Замена датчика давления</Typography>
          <Typography role="status">
            {inProgress ? 'В работе' : 'Ожидает исполнителя'}
          </Typography>
        </Box>
        <Box alignItems="center">
          <Button type="button" variant={inProgress ? 'secondary' : 'primary'}
            onClick={() => setInProgress(!inProgress)}>
            {inProgress ? 'Вернуть в очередь' : 'Взять в работу'}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Card" />}
    </div>
  );
};

export default Stories;
