import React from 'react';

import { Badge } from '@components/Badge';
import { IBadgeProps } from '@components/Badge/types';

import styles from './Badge.module.scss';

import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story/>}</div>;

export default {
  title: 'Components/Badge/Stories',
  component: Badge,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const BadgeDefault = (argsTypes: IBadgeProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <Badge {...argsTypes}>{argsTypes.children}</Badge>
      </div>
    </div>
  );
};
BadgeDefault.storyName = 'Бэйдж по умолчанию';
BadgeDefault.args = {
  children: '1'
};
