import {useThemeSwitcher} from '@components/Theme/hooks';
import React, { FC } from 'react';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <div className={styles.wrapper}>
      {theme} theme
      <input
        checked={theme === 'dark'}
        className={styles.checkbox}
        aria-hidden="true"
        type="checkbox"
        onChange={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;
