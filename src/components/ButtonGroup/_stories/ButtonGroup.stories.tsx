import React, { ReactNode } from 'react';

import {
  Badge,
  Button,
  ButtonGroup,
  IconArticleOutlined32,
  IconHandPanToolPalmsOutlined32,
  IconInfoOutlined32,
  IconMixer32
} from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import style from '../ButtonGroup.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { orientationMapping } from '../enums';
import { EFill, ESizes, EVariant } from '@components/Button/enums';
import { IButtonGroup } from '../types';
import argsTypes from './argsTypes';
import {
  BTN_GROUP_GRADIENTS,
  BTN_GROUP_SIZES,
  BTN_GROUP_VARIATION,
  BTN_GROUP_VERTICAL,
  DEFAULT_BTN_GROUP
} from './text';
import { IcombinedOption, combinedOptions } from '@components/Button/displayHelper';

const withWrapper = (Story: any) => (
  <div style={{ width: 'fit-content' }} className={styles.wrapper}>
    {Story()}
  </div>
);

export default {
  title: 'Components/ButtonGroup/Stories',
  component: ButtonGroup,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof ButtonGroup>;

export const DefaultButtonGroup = (argTypes: IButtonGroup): ReactNode => {
  return (
    <ButtonGroup {...argTypes}>
      <Button onClick={action('onClick')}>Button</Button>
      <Button onClick={action('onClick')}>Button</Button>
      <Button onClick={action('onClick')}>Button</Button>
    </ButtonGroup>
  );
};

DefaultButtonGroup.storyName = DEFAULT_BTN_GROUP;

export const ButtonGroupSizes = (argTypes: IButtonGroup): ReactNode => {
  return (
    <div className={style['showcase-wrapper-column']}>
      {Object.values(ESizes).map((size: ESizes) => (
        <ButtonGroup key={size} {...argTypes} size={argTypes.size || size}>
          <Button onClick={action('onClick')}>Size {size}</Button>
          <Button onClick={action('onClick')}>Size {size}</Button>
          <Button onClick={action('onClick')}>Size {size}</Button>
        </ButtonGroup>
      ))}
    </div>
  );
};

ButtonGroupSizes.storyName = BTN_GROUP_SIZES;

export const ButtonGroupGradient = (argTypes: IButtonGroup): ReactNode => {
  return (
    <div className={style['showcase-wrapper-row']}>
      {Object.values(EVariant).map((gradient: EVariant) => (
        <div key={gradient} className={style['showcase-wrapper-column']}>
          {Object.values(ESizes).map((size: ESizes) => (
            <ButtonGroup key={`${gradient}_${size}`} size={size} variant={gradient} {...argTypes}>
              <Button onClick={action('onClick')}>{gradient}</Button>
              <Button onClick={action('onClick')}>{gradient}</Button>
              <Button onClick={action('onClick')}>{gradient}</Button>
            </ButtonGroup>
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonGroupGradient.storyName = BTN_GROUP_GRADIENTS;

export const ButtonGroupVertical = (argTypes: IButtonGroup): ReactNode => {
  return (
    <div className={style['showcase-wrapper-row']}>
      {Object.values(EVariant).map((gradient: EVariant) => (
        <div key={gradient} className={style['showcase-wrapper-column']}>
          {Object.values(ESizes).map((size: ESizes) => (
            <ButtonGroup key={`${gradient}_${size}`} size={size} variant={gradient} {...argTypes}>
              <Button onClick={action('onClick')}>{gradient}</Button>
              <Button onClick={action('onClick')}>{gradient}</Button>
              <Button onClick={action('onClick')}>{gradient}</Button>
            </ButtonGroup>
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonGroupVertical.storyName = BTN_GROUP_VERTICAL;
ButtonGroupVertical.args = {
  orientation: orientationMapping.vertical
};

export const ButtonGroupVariations = (argTypes: IButtonGroup): ReactNode => {
  return (
    <div>
      <div className={style['showcase-wrapper-column']}>
        {combinedOptions(true).map((option: IcombinedOption) => {
          const { fill, variant, size } = option;
          if (variant === EVariant.secondary && (fill === EFill.outline || fill === EFill.clear)) return <></>
          return (
            <ButtonGroup
              key={`${variant}_${fill}_${size}`}
              variant={variant}
              fill={fill}
              size={argTypes.size || size}
              {...argTypes}
            >
              <Button
                startIcon={<IconArticleOutlined32 />}
                endIcon={<IconArticleOutlined32 />}
                badge={1}
                onClick={action('onClick')}
              >
                {variant} {fill} {size}
              </Button>
              <Button
                startIcon={<IconArticleOutlined32 />}
                endIcon={<IconArticleOutlined32 />}
                badge={1}
                onClick={action('onClick')}
              >
                {variant} {fill} {size}
              </Button>
              <Button
                startIcon={<IconArticleOutlined32 />}
                endIcon={<IconArticleOutlined32 />}
                badge={1}
                onClick={action('onClick')}
              >
                {variant} {fill} {size}
              </Button>
            </ButtonGroup>
          )
        })}
      </div>
      <div style={{ marginBottom: '12px' }} />
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => (
          <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => (
              <ButtonGroup key={`${gradient}_${size}`} size={argTypes.size || size} variant={gradient} {...argTypes}>
                <Button
                  onClick={action('onClick')}
                  iconButton={<IconInfoOutlined32 />}
                />
                <Button
                  onClick={action('onClick')}
                  iconButton={<IconMixer32 />}
                />
                <Button
                  onClick={action('onClick')}
                  iconButton={<IconHandPanToolPalmsOutlined32 />}
                />
              </ButtonGroup>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

ButtonGroupVariations.storyName = BTN_GROUP_VARIATION;
