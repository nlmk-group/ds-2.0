import React, { FC } from 'react';
import { clsx } from 'clsx';
import styles from './ContentExample.module.scss'
import ImageHelper from './ImageHelper';
import { orientationMapping } from '../enums';
import { OrientationType } from '../types';
import TitleHelper from './TitleHelper';
import { Typography, Badge, Select } from '@components/index';
import {
  imageURL,
  badges,
  descriptionExample,
  primaryButton,
  secondaryButton,
  selector
} from './constants';
import BtnGroup from './BtnGroup';

const ContentExample: FC<{
  orientation?: OrientationType
}> = ({
  orientation = orientationMapping.vertical
}) => {
  return (
    <>
      <ImageHelper
        orientation={orientation}
        imageURL={imageURL}
        badges={badges}
      />

      <div className={clsx(styles['info-block'], styles[`info-block-${orientation}`])}>
        <TitleHelper title={'Пример заголовка'} />
        
        <Typography
          variant='Body1-Medium'
          className={styles['description-typography-helper']}
        >
          {descriptionExample}
        </Typography>

        <Badge className={styles['badge-helper']}>
          12
        </Badge>
        
        <Select
          label={selector.label || ''}
          onSelectionChange={selector.onSelectionChange}
          options={selector.options}
        />

        <BtnGroup
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
      </div>
    </>
  )
}

export default ContentExample;