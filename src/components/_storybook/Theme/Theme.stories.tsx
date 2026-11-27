import type { Meta, StoryObj } from '@storybook/react-vite';

import AppearanceSettings from './Stories';
import source from './Stories.tsx?raw';
import { withIndependentTheme } from './withIndependentTheme';

const meta = {
  title: 'Introduction/Theme',
  component: AppearanceSettings,
  decorators: [withIndependentTheme],
  parameters: {
    layout: 'padded',
    docs: {
      story: { inline: false, height: '290px' },
      source: { code: source.replace('@components/index', '@nlmk/ds-2.0'), language: 'tsx' }
    }
  }
} satisfies Meta<typeof AppearanceSettings>;

export default meta;

export const Settings: StoryObj<typeof meta> = { name: 'Тема рабочего места' };
