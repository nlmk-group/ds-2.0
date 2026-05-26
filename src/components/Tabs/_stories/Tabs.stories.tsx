import React, { useState } from 'react';

import { EBadgeColors } from '@components/Badge/enums';
import { Tabs, Typography } from '@components/index';

import style from './Tabs.stories.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { ETabsOrientation, ETabsTabPosition } from '../enums';
import { ITabProps } from '../subcomponents/Tab/types';
import argsTypes from './argsTypes';

const withWrapper = (Story: () => any) => (
  <div className={style.wrapper}>
    <Story />
  </div>
);
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
  badgeColor: EBadgeColors.brand
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
          badgeColor={EBadgeColors.brand}
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
    <div className={style['scrollable-wrapper']}>
      <Tabs>
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

TabsScrollable.storyName = 'Табы с автоматическим скроллом при переполнении';

export const TabsTopIndicator = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div style={{ padding: '8px' }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {['Входящие', 'Мои папки', 'Спам', 'Черновики'][activeTab]}
        </Typography>
      </div>
      <Tabs indicatorPosition="top">
        <Tabs.Tab label="Входящие" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Спам" active={activeTab === 2} onClick={() => setActiveTab(2)} />
        <Tabs.Tab label="Черновики" active={activeTab === 3} onClick={() => setActiveTab(3)} />
      </Tabs>
    </div>
  );
};

TabsTopIndicator.storyName = 'Табы с индикатором сверху';

export const TabsVerticalLeft = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.left}>
        <Tabs.Tab label="Входящие" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tabs.Tab
          label="Спам"
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
          hasBadge
          badgeChildren="91"
          badgeColor={EBadgeColors.brand}
        />
        <Tabs.Tab label="Черновики" active={activeTab === 3} onClick={() => setActiveTab(3)} />
      </Tabs>
      <div style={{ padding: '8px', width: 200 }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {['Входящие', 'Мои папки', 'Спам', 'Черновики'][activeTab]}
        </Typography>
      </div>
    </div>
  );
};

TabsVerticalLeft.storyName = 'Вертикальные табы слева от контента';

export const TabsVerticalRight = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ padding: '8px', width: 200 }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {['Входящие', 'Мои папки', 'Черновики'][activeTab]}
        </Typography>
      </div>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.right}>
        <Tabs.Tab label="Входящие" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Черновики" active={activeTab === 2} onClick={() => setActiveTab(2)} />
      </Tabs>
    </div>
  );
};

TabsVerticalRight.storyName = 'Вертикальные табы справа от контента';

export const TabsVerticalWrap = () => {
  const [activeTab, setActiveTab] = useState(0);
  const items = [
    'Входящие сообщения и уведомления',
    'Мои папки и документы',
    'Спам и нежелательная почта',
    'Черновики'
  ];
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.left}>
        {items.map((label, index) => (
          <Tabs.Tab key={label} label={label} active={activeTab === index} onClick={() => setActiveTab(index)} />
        ))}
      </Tabs>
      <div style={{ padding: '8px', width: 280 }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {items[activeTab]}
        </Typography>
      </div>
    </div>
  );
};

TabsVerticalWrap.storyName = 'Вертикальные табы с переносом длинного текста';

export const TabsVerticalEllipsis = () => {
  const [activeTab, setActiveTab] = useState(0);
  const items = [
    'Входящие сообщения и уведомления',
    'Мои папки и документы',
    'Спам и нежелательная почта',
    'Черновики'
  ];
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.left} maxTabWidth={180}>
        {items.map((label, index) => (
          <Tabs.Tab key={label} label={label} active={activeTab === index} onClick={() => setActiveTab(index)} />
        ))}
      </Tabs>
      <div style={{ padding: '8px', width: 280 }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {items[activeTab]}
        </Typography>
      </div>
    </div>
  );
};

TabsVerticalEllipsis.storyName = 'Вертикальные табы (ellipsis с maxTabWidth)';
