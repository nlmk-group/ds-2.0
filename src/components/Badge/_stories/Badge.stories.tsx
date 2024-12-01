import React from 'react';

import { variantsMapping } from '@components/declaration';
import { Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';

import styles from './Badge.module.scss';

import { EBadgeColors, EBadgeSizes } from '../enums';
import { Badge } from '../index';
import { IBadgeProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story />}</div>;

export default {
  title: 'Components/Badge/Stories',
  component: Badge,
  decorators: [withPadding],
  argTypes: argsTypes
};

export const BadgeDefault = (argsTypes: IBadgeProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Badge {...argsTypes}>{argsTypes.children}</Badge>
    </div>
  );
};
BadgeDefault.storyName = 'Badge по умолчанию';
BadgeDefault.args = {
  children: '1'
};

export const BadgeShowcase = (): JSX.Element => {
  const colors = Object.values(EBadgeColors);
  const sizes = Object.values(EBadgeSizes);
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
                    <Badge key={`${variant}-${color}-${size}`} variant={variant} color={color} size={size}>
                      1
                    </Badge>
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

BadgeShowcase.storyName = 'Все варианты Badge';
BadgeShowcase.parameters = {
  controls: { disable: true }
};
