import React, { FC } from 'react';

import Button from '@components/Button';
import { ThemeStorage, useThemeSwitcher } from '@components/Theme/hooks';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: FC<{ storage?: ThemeStorage }> = ({ storage = 'session' }) => {
  const { theme, toggleTheme, resetToSystem, isSystem } = useThemeSwitcher(undefined, storage);

  return (
    <div className={styles.wrapper}>
      {theme === 'dark' ? 'Тёмная тема' : 'Светлая тема'}
      <input
        checked={theme === 'dark'}
        className={styles.checkbox}
        aria-label="Тёмная тема"
        type="checkbox"
        onChange={toggleTheme}
      />
      {storage === 'local' && (
        <Button type="button" size="s" variant="secondary" disabled={isSystem} onClick={resetToSystem}>
          Вернуть системную тему
        </Button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
