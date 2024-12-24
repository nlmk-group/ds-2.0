import React, { useState } from 'react';

import Button from '@components/Button';
import { EFilterTipSize } from '@components/FilterTip/enums';
import { Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import { useArgs } from 'storybook/internal/preview-api';

import styles from './FilterTip.module.scss';

import FilterTip from '../index';
import { IFilterTipProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/FilterTip/Stories',
  component: FilterTip,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const FilterTipDefault = () => {
  const [args, updateArgs] = useArgs<IFilterTipProps>();

  const onClick = () => {
    updateArgs({ ...args, isActive: !args.isActive });
  };

  return <FilterTip {...args} onClick={onClick} />;
};
FilterTipDefault.storyName = 'FilterTip по умолчанию';
FilterTipDefault.args = {
  text: 'ГК Партии'
};

export const FilterTipDelete = (args: IFilterTipProps) => {
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <div>
      {isDeleted ? (
        <Button onClick={() => setIsDeleted(false)}>Вернуть FilterTip</Button>
      ) : (
        <FilterTip {...args} onDelete={() => setIsDeleted(true)} />
      )}
    </div>
  );
};
FilterTipDelete.storyName = 'FilterTip с удалением';
FilterTipDelete.args = {
  text: 'ГК Партии'
};

export const FilterTipVariants = () => {
  return (
    <div className={styles['variants-container']}>
      <div className={styles['variants-element']}>
        <div style={{ minWidth: '120px' }} />
        <Typography variant={ETypographyVariants.Heading4}>selected</Typography>
        <Typography variant={ETypographyVariants.Heading4}>unselected</Typography>
      </div>
      <div className={styles['variants-element']}>
        <div>default - s</div>
        <div>
          <FilterTip isActive text="ГК Партии" />
        </div>
        <div>
          <FilterTip text="ГК Партии" />
        </div>
      </div>
      <div className={styles['variants-element']}>
        <div>disabled - s</div>
        <div>
          <FilterTip isDisabled isActive text="ГК Партии" />
        </div>
        <div>
          <FilterTip isDisabled text="ГК Партии" />
        </div>
      </div>
      <div className={styles['variants-element']}>
        <div>default - m</div>
        <div>
          <FilterTip isActive size={EFilterTipSize.m} text="ГК Партии" />
        </div>
        <div>
          <FilterTip size={EFilterTipSize.m} text="ГК Партии" />
        </div>
      </div>
      <div className={styles['variants-element']}>
        <div>disabled - m</div>
        <div>
          <FilterTip isDisabled size={EFilterTipSize.m} isActive text="ГК Партии" />
        </div>
        <div>
          <FilterTip isDisabled size={EFilterTipSize.m} text="ГК Партии" />
        </div>
      </div>
    </div>
  );
};
FilterTipVariants.storyName = 'Все варианты FilterTip';
