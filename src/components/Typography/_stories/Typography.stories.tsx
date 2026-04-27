import React from 'react';

import { Card } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';

import styles from './Typography.stories.module.scss';

import Typography from '../index';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80, padding: 24 }}>{<Story />}</div>;

export default {
  title: 'Components/Typography/Stories',
  component: Typography,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const TypographyDefault = (argsTypes: Record<string, unknown>): JSX.Element => (
  <div className={styles.wrapper}>
    <Typography {...argsTypes}>Default Typography Component</Typography>
  </div>
);
TypographyDefault.storyName = 'Типография по умолчанию';

const SECTIONS: { title: string; variants: ETypographyVariants[] }[] = [
  {
    title: 'Заголовки (Headings)',
    variants: [
      ETypographyVariants.Heading1,
      ETypographyVariants.Heading2,
      ETypographyVariants.Heading3,
      ETypographyVariants.Heading4
    ]
  },
  {
    title: 'Подзаголовки (Subheadings)',
    variants: [
      ETypographyVariants.Subheading1,
      ETypographyVariants.Subheading2,
      ETypographyVariants['Subheading2-Medium'],
      ETypographyVariants.Subheading3,
      ETypographyVariants['Subheading3-Medium']
    ]
  },
  {
    title: 'Основной текст 18px (Body)',
    variants: [ETypographyVariants.Body, ETypographyVariants['Body-Medium'], ETypographyVariants['Body-Bold']]
  },
  {
    title: 'Текст 16px (Body1)',
    variants: [
      ETypographyVariants.Body1,
      ETypographyVariants['Body1-Medium'],
      ETypographyVariants['Body1Table-Medium'],
      ETypographyVariants['Body1Mono-Medium'],
      ETypographyVariants['Body1Mono-Bold'],
      ETypographyVariants['Body1-Bold']
    ]
  },
  {
    title: 'Текст 14px (Body2)',
    variants: [
      ETypographyVariants.Body2,
      ETypographyVariants['Body2-Medium'],
      ETypographyVariants['Body2Mono-Medium'],
      ETypographyVariants['Body2Mono-Bold'],
      ETypographyVariants['Body2-Bold']
    ]
  },
  {
    title: 'Подписи 12px (Caption)',
    variants: [
      ETypographyVariants.Caption,
      ETypographyVariants['Caption-Medium'],
      ETypographyVariants['Caption-Bold'],
      ETypographyVariants.CaptionMono,
      ETypographyVariants['CaptionMono-Medium'],
      ETypographyVariants['CaptionMono-Bold']
    ]
  },
  {
    title: 'Дополнительный (Additional)',
    variants: [ETypographyVariants['Additional-Bold']]
  }
];

export const TypographyVariants = (): JSX.Element => (
  <div className={styles.wrapper}>
    {SECTIONS.map(section => (
      <section key={section.title} className={styles.section}>
        <h3 className={styles.sectionTitle}>{section.title}</h3>
        <div className={styles.sectionContent}>
          {section.variants.map(variant => (
            <Card key={variant} orientation="horizontal" indicatorStatus="info" indicatorSize="m">
              <div className={styles.variantRow}>
                <span className={styles.variantLabel}>{variant}</span>
                <Typography variant={variant} className={styles.variantPreview}>
                  Пример текста для {variant}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </section>
    ))}
  </div>
);
TypographyVariants.storyName = 'Варианты типографии';
