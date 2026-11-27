import React, { FC, useState } from 'react';

import { Badge, OptionItem, SimpleSelect, Typography } from '@components/index';
import { clsx } from 'clsx';

import { IContentExample } from './types';

import styles from './ContentExample.module.scss';

import { EOrientationMapping } from '../enums';
import BtnGroup from './BtnGroup';
import { badges, descriptionExample, primaryButton, secondaryButton, selector } from './constants';
import ImageHelper from './ImageHelper';
import TitleHelper from './TitleHelper';

const ContentExample: FC<IContentExample> = ({
  orientation = EOrientationMapping.vertical,
  imageURL = '',
  checkAction,
  checked,
  href
}) => {
  const [selected, setSelected] = useState<string | number>('');
  return (
    <>
      <ImageHelper imageURL={imageURL} badges={badges} />

      <div className={clsx(styles['info-block'], styles[`info-block-${orientation}`])}>
        <TitleHelper title={'Пример заголовка'} href={href} checkAction={checkAction} checked={checked} />

        <Typography variant="Body1-Medium" className={styles['description-typography-helper']}>
          {descriptionExample}
        </Typography>

        <Badge className={styles['badge-helper']}>12</Badge>

        <SimpleSelect value={selected} label={selector.label} onChange={setSelected}>
          {selector.options.map(option => (
            <OptionItem key={option.value} {...option}>
              {option.label}
            </OptionItem>
          ))}
        </SimpleSelect>

        <BtnGroup primaryButton={primaryButton} secondaryButton={secondaryButton} />
      </div>
    </>
  );
};

export default ContentExample;
