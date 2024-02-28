import React from 'react';

import { TVariant } from '@components/Typography/types';

import styles from './Typography.stories.module.scss';

import Typography from '../index';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Typography/Stories',
  component: Typography,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const TypographyDefault = (argsTypes: any): JSX.Element => {
  return (
    <div className={styles.wrapper} style={{color: 'var(--text-grey-900)'}}>
      <Typography {...argsTypes}>Default Typography Component</Typography>
    </div>
  );
};
TypographyDefault.storyName = 'Типография по умолчанию';

export const TypographyVariants = (): JSX.Element => {
  const rows = [
    {
      title: 'Heading1',
      fontSize: 48,
      lineHeight: 56,
      fontWeight: 700,
      description: 'Заголовок'
    },
    {
      title: 'Subheading1',
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 400,
      description: 'Подзаголовок'
    },
    {
      title: 'Heading2',
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 700,
      description: 'Заголовок'
    },
    {
      title: 'Subheading2',
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 400,
      description: 'Подзаголовок'
    },
    {
      title: 'Subheading2-Medium',
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 500,
      description: 'Подзаголовок'
    },
    {
      title: 'Heading3',
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 700,
      description: 'Заголовок'
    },
    {
      title: 'Subheading3',
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 400,
      description: 'Подзаголовок'
    },
    {
      title: 'Subheading3-Medium',
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 500,
      description: 'Подзаголовок'
    },
    {
      title: 'Heading4',
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 700,
      description: 'Заголовок'
    },
    {
      title: 'Body1',
      fontSize: 16,
      lineHeight: 22,
      fontWeight: 400,
      description: 'Текст контента тонкий'
    },
    {
      title: 'Body1-Medium',
      fontSize: 16,
      lineHeight: 22,
      fontWeight: 500,
      description: 'Текст инпутов, ячеек таблиц, контента'
    },
    {
      title: 'Body1-Bold',
      fontSize: 16,
      lineHeight: 22,
      fontWeight: 700,
      description: 'Текст в кнопках, жирный текст у активных элементов'
    },
    {
      title: 'Body2',
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 400,
      description: 'Текст контента тонкий'
    },
    {
      title: 'Body2-Medium',
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 500,
      description: 'Текст инпутов, ячеек таблиц, контента'
    },
    {
      title: 'Body2-Bold',
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 700,
      description: 'Текст в кнопках, жирный текст у активных элементов'
    },
    {
      title: 'Caption',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 400,
      description: 'Текст мелких подписей, шкал графиков'
    },
    {
      title: 'Caption-Medium',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 500,
      description: 'Текст мелких подписей, шкал графиков'
    },
    {
      title: 'Caption-Bold',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 700,
      description: 'Текст мелких подписей, шкал графиков'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        {rows.map(variant => (
          <div key={variant.title} className={styles.row}>
            <Typography variant={variant.title as TVariant} color="primary">
              {variant.title}
            </Typography>
            <Typography color="primary">
              {variant.fontSize} - {variant.lineHeight}
            </Typography>
            <Typography color="primary">{variant.fontWeight}</Typography>
            <Typography color="primary">{variant.description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
TypographyVariants.storyName = 'Варианты типографии';

export const TypographyColor = (): JSX.Element => {
  return (
    <div
      className={styles.wrapper}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      <Typography variant="Heading1" color="primary">
        variant: Heading1, color: primary
      </Typography>
      <Typography variant="Subheading2-Medium" color="secondary">
        variant: Subheading2-Medium, color: secondary
      </Typography>
      <Typography variant="Caption" color="hint">
        variant: Caption, color: hint
      </Typography>
      <Typography variant="Caption-Bold" color="disabled">
        variant: Caption-Bold, color: disabled
      </Typography>
      <Typography variant="Caption" color="error">
        variant: Caption, color: error
      </Typography>
      <Typography variant="Caption" color="success">
        variant: Caption, color: success
      </Typography>
      <Typography variant="Caption" color="warning">
        variant: Caption, color: warning
      </Typography>
      <Typography variant="Caption" color="info">
        variant: Caption, color: info
      </Typography>
      <Typography variant="Caption" color="textPrimary">
        variant: Caption, color: textPrimary
      </Typography>
      <Typography variant="Caption" color="textSecondary">
        variant: Caption, color: textSecondary
      </Typography>
    </div>
  );
};
TypographyColor.storyName = 'Цвета типографии';
