import React, { useState } from 'react';

import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { TEXT_DEFAULT } from './text';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Tabs/Stories',
  component: Tabs,
  decorators: [withPadding],
  argTypes: {}
};

export const TabsDefault = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.wrapper}>
      <Tabs>
        <Tabs.Tab label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} badgeNumber="91">
          <Tabs.Tooltip render={<Typography variant='Caption-Medium'>Сюда вы можете добавить текст подсказу для компонента</Typography>}>
            <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--text-grey-500)" />
          </Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab label="Черновики" active={3 === Number(activeTab)} onClick={() => setActiveTab(3)} badgeNumber="2" />
      </Tabs>

      {Number(activeTab) == 0 && (
        <Typography variant="Heading4" color="primary">
          Входящие
        </Typography>
      )}
      {Number(activeTab) == 1 && (
        <Typography variant="Heading4" color="primary">
          Мои папки
        </Typography>
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          Спам
        </Typography>
      )}
      {Number(activeTab) == 3 && (
        <Typography variant="Heading4" color="primary">
          Черновики
        </Typography>
      )}
    </div>
  );
};

TabsDefault.storyName = TEXT_DEFAULT;
