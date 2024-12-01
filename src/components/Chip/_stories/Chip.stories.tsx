import React from 'react';

import { sizesMapping, variantsMapping } from '@components/declaration';
import { Badge, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';

import styles from './Chip.module.scss';

import { EChipColors } from '../enums';
import Chip from '../index';
import { IChipProps, TChipSize } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story />}</div>;

export default {
  title: 'Components/Chip/Stories',
  component: Badge,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const ChipDefault = (argsTypes: IChipProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Chip {...argsTypes} children={argsTypes.children} />
    </div>
  );
};
ChipDefault.storyName = 'Chip по умолчанию';
ChipDefault.args = {
  children: '1234'
};

export const ChipShowcase = (): JSX.Element => {
  const colors = Object.values(EChipColors);
  const sizes: TChipSize[] = [sizesMapping.m, sizesMapping.s];
  const variants = Object.values(variantsMapping);

  return (
    <div className={styles.wrapper}>
      <div className={styles.variants}>
        {variants.map(variant => (
          <div key={variant} className={styles['variants-section']}>
            <Typography className={styles['variants-title']} variant={ETypographyVariants.Heading4}>
              {variant}
            </Typography>
            <div className={styles.grid}>
              <div className={styles.header}>
                <div className={styles.column}></div>
                {colors.map(color => (
                  <Typography key={color} className={styles.title} variant={ETypographyVariants.Body1}>
                    {color}
                  </Typography>
                ))}
              </div>
              {sizes.map(size => (
                <div key={size} className={styles.row}>
                  <Typography className={styles.title} variant={ETypographyVariants.Body1}>
                    {size}
                  </Typography>
                  {colors.map(color => (
                    <div key={`${variant}-${color}-${size}`} className={styles['chip-cell']}>
                      <Chip variant={variant} color={color} size={size} label="Label" suffix="suffix">
                        1234
                      </Chip>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ChipShowcase.storyName = 'Все варианты Chip';
ChipShowcase.parameters = {
  controls: { disable: true }
};
