import React from 'react';

import IconPanTool24 from '@components/Icon/IconsList/24/IconPanTool24';

import styles from './Icon.module.scss';

export default {
  title: 'Components/Icon/Stories'
};

export const CustomIcon = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <IconPanTool24 />
    </div>
  );
};
CustomIcon.storyName = 'Кастомная иконка, как отдельный компонент';
