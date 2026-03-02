import React from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

const Stories = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header
        title="Theme Switching"
        description="Переключение темы между светлой и темной важно для удобства пользователя, снижения напряжения глаз при различных условиях освещенности, энергосбережения на OLED/AMOLED экранах, улучшения доступности для людей с нарушениями зрения, эстетической адаптации интерфейса к разным стилям и контекстам, а также для улучшения общего пользовательского опыта и восприятия бренда."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/blob/main/src/components/ThemeSwitcher"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active />
        </Tabs>
      </div>

      <>
        <Editor
          description="Хук useThemeSwitcher управляет состоянием темы и переключением тем в приложении. Он динамически добавляет и удаляет стили из заголовка документа на основе текущей темы и предоставляет функциональность для переключения тем с сохранением предпочтений пользователя в sessionStorage."
          height={700}
          code={`import { Switch, Grid, Box, Button } from '@nlmk/ds-2.0';

export default App = () => {
  const THEME_KEY = 'nlmk-storybook-theme';

  const getIsDark = () =>
    document.documentElement.getAttribute('data-theme')?.includes('dark') ?? false;

  const [isDark, setIsDark] = useState(getIsDark);

  useEffect(() => {
    const observer = new MutationObserver(() => setIsDark(getIsDark()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    const btn = (
      window.parent?.document?.getElementById('nlmk-theme-toggle-btn') ||
      window.parent?.document?.querySelector('[title*="тему"]')
    ) as HTMLButtonElement | null;
    if (btn) {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    } else {
      const newIsDark = !isDark;
      localStorage.setItem(THEME_KEY, newIsDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', newIsDark ? 'dark-theme' : 'light-theme');
    }
  };

  const boxes = [
    { background: 'var(--spectrum-red-40)' },
    { background: 'var(--spectrum-yellow-40)' },
    { background: 'var(--spectrum-salad-40)' },
    { background: 'var(--spectrum-orange-40)' }
  ];

  return (
    <>
      <Switch checked={isDark} onChange={handleToggle} label={isDark ? 'Тёмная тема' : 'Светлая тема'} />
      <Grid width="100%" height="50vh">
        {boxes.map((box, index) => (
          <Box
            key={index}
            background={box.background}
            borderRadius="4px"
            px="8px"
            py="16px"
            st={{ flex: '1' }}
          />
        ))}
      </Grid>
      <Button type="button">Кнопка</Button>
    </>
  );
}`}
        />
      </>
    </div>
  );
};

export default Stories;
