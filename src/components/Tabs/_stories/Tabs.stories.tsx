import React, { useState } from 'react';

import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import {TEXT_DEFAULT, TEXT_SCROLLABLE} from './text';
import clsx from 'clsx';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Tabs/Stories',
  component: Tabs,
  decorators: [withPadding],
  argTypes: {}
};

interface TabItem {
  value: number;
  label: string;
  badgeNumber?: string;
  tooltip?: string;
}

export const TabsDefault = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.wrapper}>
      <Tabs>
        <Tabs.Tab label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} badgeNumber="91">
          <Tabs.Tooltip
            render={
              <Typography variant="Caption-Medium">Сюда вы можете добавить текст подсказу для компонента</Typography>
            }
          >
            <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--text-grey-500)" />
          </Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab label="Черновики" active={3 === Number(activeTab)} onClick={() => setActiveTab(3)} badgeNumber="2" />
      </Tabs>

      {Number(activeTab) == 0 && (
        <Typography variant="Heading4" color="var(--steel-90)">
          Входящие
        </Typography>
      )}
      {Number(activeTab) == 1 && (
        <Typography variant="Heading4" color="var(--steel-90)">
          Мои папки
        </Typography>
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="var(--steel-90)">
          Спам
        </Typography>
      )}
      {Number(activeTab) == 3 && (
        <Typography variant="Heading4" color="var(--steel-90)">
          Черновики
        </Typography>
      )}
    </div>
  );
};

const tabItems: TabItem[] = [
  { value: 0, label: 'Входящие' },
  { value: 1, label: 'Мои папки' },
  { value: 2, label: 'Спам', badgeNumber: '91', tooltip: 'Сюда вы можете добавить текст подсказу для компонента' },
  { value: 3, label: 'Черновики', badgeNumber: '2' },
  { value: 4, label: 'Отправленные', badgeNumber: '23' },
  { value: 5, label: 'Избранное', badgeNumber: '31' },
  { value: 6, label: 'Отмеченное', badgeNumber: '4' },
  { value: 7, label: 'Коллекция', badgeNumber: '10' },
];

export const TabsScrollable = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={clsx(styles.wrapper, styles['wrapper--small'])}>
      <Tabs scrollable>
        {tabItems.map(item => (
          <Tabs.Tab
            key={item.label}
            label={item.label}
            active={item.value === Number(activeTab)}
            onClick={() => setActiveTab(item.value)}
            badgeNumber={item.badgeNumber}
          >
            {item.tooltip ? (
              <Tabs.Tooltip
                render={
                  <Typography variant="Caption-Medium">{item.tooltip}</Typography>
                }
              >
                <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--text-grey-500)" />
              </Tabs.Tooltip>
            ) : undefined}
          </Tabs.Tab>
        ))}
      </Tabs>

      {tabItems.map(item => Number(activeTab) === item.value && (
        <Typography variant="Heading4" color="var(--steel-90)" key={item.label}>
          {item.label}
        </Typography>
      ))}
    </div>
  );
}

TabsDefault.storyName = TEXT_DEFAULT;
TabsScrollable.storyName = TEXT_SCROLLABLE;
