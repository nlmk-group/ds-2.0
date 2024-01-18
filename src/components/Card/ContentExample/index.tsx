import React, { FC } from 'react';

import { Badge, Select, Typography } from '@components/index';
import { clsx } from 'clsx';

import styles from './ContentExample.module.scss';

import { orientationMapping } from '../enums';
import { OrientationType } from '../types';
import BtnGroup from './BtnGroup';
import { badges, descriptionExample, imageURL, primaryButton, secondaryButton, selector } from './constants';
import ImageHelper from './ImageHelper';
import TitleHelper from './TitleHelper';

const ContentExample: FC<{
  orientation?: OrientationType;
}> = ({ orientation = orientationMapping.vertical }) => {
  return (
    <>
      <ImageHelper orientation={orientation} imageURL={imageURL} badges={badges} />

      <div className={clsx(styles['info-block'], styles[`info-block-${orientation}`])}>
        <TitleHelper title={'Пример заголовка'} />

        <Typography variant="Body1-Medium" className={styles['description-typography-helper']}>
          {descriptionExample}
        </Typography>

        <Badge className={styles['badge-helper']}>12</Badge>

        <Select
          label={selector.label || ''}
          onSelectionChange={selector.onSelectionChange}
          options={selector.options}
        />

        <BtnGroup primaryButton={primaryButton} secondaryButton={secondaryButton} />
      </div>
    </>
  );
};

export default ContentExample;
