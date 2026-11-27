import React from 'react';

import { IconStarOutlined16, IconStarOutlined24, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import styles from './Button.module.scss';

import { EButtonColor, EButtonSize, EButtonVariant } from '../enums';
import { Button } from '../index';
import { IButtonProps } from '../types';
import argsTypes, { iconOptions } from './argsTypes';

export default {
  title: 'Components/Button/Stories',
  component: Button,
  argTypes: argsTypes
};

export const ButtonDefault = (args: IButtonProps): JSX.Element => (
  <Button type="button" {...args} aria-label={args.iconButton ? 'Сохранить' : undefined} />
);
ButtonDefault.decorators = [
  (Story: React.ComponentType) => (
    <div className={styles.wrapper}>
      <Story />
    </div>
  )
];
ButtonDefault.storyName = 'Основная кнопка';
ButtonDefault.args = { children: 'Сохранить' };
ButtonDefault.parameters = {
  jsx: {
    displayName: (element: React.ReactElement) =>
      Object.entries(iconOptions).find(([, icon]) => icon?.type === element.type)?.[0] || 'Button'
  },
  docs: {
    source: {
      type: 'dynamic',
      transform: (jsx: string) => {
        const names = new Set(['Button', ...Array.from(jsx.matchAll(/<(Icon\w+)/g), match => match[1])]);
        return `import { ${Array.from(names).join(', ')} } from '@nlmk/ds-2.0';\n\nexport default () => (\n  ${jsx}\n);`;
      }
    }
  }
};

const sizeToIcon = {
  [EButtonSize.m]: <IconStarOutlined24 />,
  [EButtonSize.s]: <IconStarOutlined24 />,
  [EButtonSize.xs]: <IconStarOutlined16 />
};

export const IconButtons = () => {
  return (
    <div className={clsx(styles.container, styles['container--grid'])}>
      {Object.values(EButtonColor).map(color => (
        <div key={color} className={styles.section}>
          <Typography variant={ETypographyVariants.Heading3} color="var(--steel-90)">
            {color}
          </Typography>
          {Object.values(EButtonVariant).map(variant => (
            <div key={`${color}-${variant}`} className={styles.row}>
              <Typography variant={ETypographyVariants.Body1} color="var(--steel-90)">
                {variant}
              </Typography>
              {Object.values(EButtonSize).map(size => (
                <Button
                  type="button"
                  key={`${color}-${variant}-${size}`}
                  color={color}
                  variant={variant}
                  size={size}
                  aria-label="Добавить в избранное"
                  iconButton={sizeToIcon[size]}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
IconButtons.storyName = 'Кнопки-иконки';
IconButtons.parameters = {
  docs: {
    description: { story: 'В галерее показаны цвета и размеры. В примере кода — основная кнопка размером m.' },
    source: {
      code: `import { Button, IconStarOutlined24 } from '@nlmk/ds-2.0';

export default () => (
  <Button type="button" aria-label="Добавить в избранное" iconButton={<IconStarOutlined24 />} />
);`
    }
  },
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const ButtonsWithElements = () => {
  return (
    <div className={styles.container}>
      {Object.values(EButtonColor).map(color => (
        <div key={color} className={styles.section}>
          <Typography variant={ETypographyVariants.Heading3} color="var(--steel-90)">
            {color}
          </Typography>
          {Object.values(EButtonVariant).map(variant => (
            <div key={`${color}-${variant}`} className={styles.section}>
              <Typography variant={ETypographyVariants.Heading4} color="var(--steel-90)">
                {variant}
              </Typography>
              {Object.values(EButtonSize).map(size => (
                <div key={`${color}-${variant}-${size}`} className={styles.row}>
                  <Typography variant={ETypographyVariants.Body1} color="var(--steel-90)">
                    {size}
                  </Typography>
                  <Button
                    type="button"
                    color={color}
                    variant={variant}
                    size={size}
                    startIcon={sizeToIcon[size]}
                    endIcon={sizeToIcon[size]}
                  >
                    С иконками
                  </Button>
                  <Button type="button" color={color} variant={variant} size={size} startBadge="1" endBadge="2">
                    С метками
                  </Button>
                  <Button
                    type="button"
                    color={color}
                    variant={variant}
                    size={size}
                    startIcon={sizeToIcon[size]}
                    endIcon={sizeToIcon[size]}
                    startBadge="1"
                    endBadge="2"
                  >
                    С иконками и метками
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
ButtonsWithElements.storyName = 'Button с элементами';
ButtonsWithElements.parameters = {
  docs: {
    description: { story: 'Код показывает три кнопки из первого ряда галереи.' },
    source: {
      code: `import { Button, IconStarOutlined24 } from '@nlmk/ds-2.0';

export default () => (
  <>
    <Button type="button" startIcon={<IconStarOutlined24 />} endIcon={<IconStarOutlined24 />}>
      С иконками
    </Button>
    <Button type="button" startBadge="1" endBadge="2">С метками</Button>
    <Button
      type="button"
      startIcon={<IconStarOutlined24 />}
      endIcon={<IconStarOutlined24 />}
      startBadge="1"
      endBadge="2"
    >
      С иконками и метками
    </Button>
  </>
);`
    }
  },
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
