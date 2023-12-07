import React, { useState } from 'react';

import { Icon, Tab, Tabs, Tooltip, Typography } from '@components/index';
import { withDesign } from 'storybook-addon-designs';

import styles from '@components/_storybook/styles.module.scss';

import { TEXT_DEFAULT } from './text';

const withPadding = (Story: () => any) => (
  <div style={{ minHeight: 80 }}>{Story()}</div>
);

export default {
  title: 'Components/Tabs/Stories',
  component: Tabs,
  decorators: [withDesign, withPadding],
  argTypes: {}
};

export const TabsDefault = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.wrapper}>
      <Tabs>
        <Tab
          label="Входящие"
          active={0 === Number(activeTab)}
          onClick={() => setActiveTab(0)}
        />
        <Tab
          label="Мои папки"
          active={1 === Number(activeTab)}
          onClick={() => setActiveTab(1)}
        />
        <Tab
          label="Спам"
          active={2 === Number(activeTab)}
          onClick={() => setActiveTab(2)}
          badgeNumber="91"
        >
          <Tooltip description="Сюда вы можете добавить текст подсказу для компонента">
            <Icon
              name="IconInfo16"
              containerSize={16}
              htmlColor="var(--text-grey-500)"
            />
          </Tooltip>
        </Tab>
        <Tab
          label="Черновики"
          active={3 === Number(activeTab)}
          onClick={() => setActiveTab(3)}
          badgeNumber="2"
        />
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
