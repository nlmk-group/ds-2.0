import React, { useState } from 'react';

import { EBadgeColors } from '@components/Badge/enums';
import { Tabs, Typography } from '@components/index';

import style from './Tabs.stories.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { ITabProps } from '../subcomponents/Tab/types';
import argsTypes from './argsTypes';

const withWrapper = (Story: () => any) => <div className={style.wrapper}><Story/></div>;
export default {
  title: 'Components/Tabs/Stories',
  component: Tabs,
  decorators: [withWrapper],
  argTypes: argsTypes
};
interface TabItem {
  value: number;
  label: string;
  tooltip?: string;
}
export const TabDefault = (args: ITabProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Tabs>
        <Tabs.Tab {...args} label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab {...args} label="Черновики" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
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
    </div>
  );
};

TabDefault.storyName = 'Один таб с наглядными контролами';
TabDefault.args = {
  hasBadge: true,
  hasIcon: true,
  badgeChildren: '11',
  badgeColor: EBadgeColors.secondary
};
export const TabsDefault = (args: ITabProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Tabs>
        <Tabs.Tab {...args} label="Входящие" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
        <Tabs.Tab {...args} label="Мои папки" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        <Tabs.Tab
          {...args}
          label="Спам"
          active={2 === Number(activeTab)}
          hasBadge={true}
          onClick={() => setActiveTab(2)}
          badgeChildren={10}
          badgeColor={EBadgeColors.secondary}
        >
          <Tabs.Tooltip
            render={
              <Typography variant="Caption-Medium">Сюда вы можете добавить текст подсказу для компонента</Typography>
            }
          >
            <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--steel-50)" />
          </Tabs.Tooltip>
        </Tabs.Tab>
        <Tabs.Tab {...args} label="Черновики" active={3 === Number(activeTab)} onClick={() => setActiveTab(3)} />
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
TabsDefault.storyName = 'Дефолтные табы';

const tabItems: TabItem[] = [
  { value: 0, label: 'Входящие' },
  { value: 1, label: 'Мои папки' },
  { value: 2, label: 'Спам', tooltip: 'Сюда вы можете добавить текст подсказу для компонента' },
  { value: 3, label: 'Черновики' },
  { value: 4, label: 'Отправленные' },
  { value: 5, label: 'Избранное' },
  { value: 6, label: 'Отмеченное' },
  { value: 7, label: 'Коллекция' }
];

export const TabsScrollable = (args: ITabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles['wrapper--small']}>
      <Tabs scrollable>
        {tabItems.map(item => (
          <Tabs.Tab
            {...args}
            key={item.label}
            label={item.label}
            active={item.value === Number(activeTab)}
            onClick={() => setActiveTab(item.value)}
          >
            {item.tooltip ? (
              <Tabs.Tooltip render={<Typography variant="Caption-Medium">{item.tooltip}</Typography>}>
                <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--steel-50)" />
              </Tabs.Tooltip>
            ) : undefined}
          </Tabs.Tab>
        ))}
      </Tabs>

      {tabItems.map(
        item =>
          Number(activeTab) === item.value && (
            <div style={{ marginTop: '10px' }}>
              <Typography variant="Heading4" color="var(--steel-90)" key={item.label}>
                {item.label}
              </Typography>
            </div>
          )
      )}
    </div>
  );
};

TabsScrollable.storyName = 'Табы с возможностью скролла';
