import React from 'react';

import { Box, Button, Switch, Themes, Typography, useThemeSwitcher } from '@components/index';

export default function AppearanceSettings() {
  const { theme, isSystem, toggleTheme, resetToSystem } = useThemeSwitcher(undefined, 'local');

  return (
    <Box
      flexDirection="column"
      alignItems="flex-start"
      gap={16}
      maxWidth={520}
      p={20}
      background="var(--background-default)"
      border="1px solid var(--unique-divider)"
      borderRadius={8}
    >
      <Typography variant="Heading4">Тема рабочего места</Typography>
      <Switch label="Тёмная тема" checked={theme === Themes.DARK} onChange={toggleTheme} />
      <Typography aria-live="polite">
        {isSystem ? 'Тему задаёт устройство.' : 'Ваш выбор сохранён для следующих посещений.'}
      </Typography>
      <Button type="button" size="s" variant="secondary" disabled={isSystem} onClick={resetToSystem}>
        Вернуть системную тему
      </Button>
    </Box>
  );
}
