import React, { ReactNode } from 'react';

import { sizesMappingInput } from '@components/declaration';
import { Badge, Button, ButtonGroup, Icon } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import style from '../ButtonGroup.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { badgeSizeMappingHelper, gradientMapping, iconSizeMappingHelper, orientationMapping } from '../enums';
import { IButtonGroup } from '../types';
import argsTypes from './argsTypes';
import {
  BTN_GROUP_GRADIENTS,
  BTN_GROUP_SIZES,
  BTN_GROUP_VARIATION,
  BTN_GROUP_VERTICAL,
  DEFAULT_BTN_GROUP
} from './text';

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
      {Object.values(sizesMappingInput).map((size: sizesMappingInput) => (
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
      {Object.values(gradientMapping).map((gradient: gradientMapping) => (
        <div key={gradient} className={style['showcase-wrapper-column']}>
          {Object.values(sizesMappingInput).map((size: sizesMappingInput) => (
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
      {Object.values(gradientMapping).map((gradient: gradientMapping) => (
        <div key={gradient} className={style['showcase-wrapper-column']}>
          {Object.values(sizesMappingInput).map((size: sizesMappingInput) => (
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
        {Object.values(gradientMapping).map((gradient: gradientMapping) => (
          <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(sizesMappingInput).map((size: sizesMappingInput) => (
              <ButtonGroup key={`${gradient}_${size}`} size={argTypes.size || size} variant={gradient} {...argTypes}>
                <Button
                  startIcon={<Icon name="IconArticleOutlined24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />}
                  endIcon={<Icon name="IconArticleOutlined24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />}
                  badge={
                    <Badge color="secondary" size={badgeSizeMappingHelper[argTypes.size || size]}>
                      1
                    </Badge>
                  }
                  onClick={action('onClick')}
                >
                  {gradient}
                </Button>
                <Button
                  startIcon={<Icon name="IconArticleOutlined24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />}
                  endIcon={<Icon name="IconArticleOutlined24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />}
                  badge={
                    <Badge color="secondary" size={badgeSizeMappingHelper[argTypes.size || size]}>
                      1
                    </Badge>
                  }
                  onClick={action('onClick')}
                >
                  {gradient}
                </Button>
                <Button
                  startIcon={<Icon name="IconArticleOutlined24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />}
                  endIcon={<Icon name="IconArticleOutlined24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />}
                  badge={
                    <Badge color="secondary" size={badgeSizeMappingHelper[argTypes.size || size]}>
                      1
                    </Badge>
                  }
                  onClick={action('onClick')}
                >
                  {gradient}
                </Button>
              </ButtonGroup>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginBottom: '12px' }} />
      <div className={style['showcase-wrapper-row']}>
        {Object.values(gradientMapping).map((gradient: gradientMapping) => (
          <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(sizesMappingInput).map((size: sizesMappingInput) => (
              <ButtonGroup key={`${gradient}_${size}`} size={argTypes.size || size} variant={gradient} {...argTypes}>
                <Button onClick={action('onClick')}>
                  <Icon name="IconInfoOutlined24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />
                </Button>
                <Button onClick={action('onClick')}>
                  <Icon name="IconMixer24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />
                </Button>
                <Button onClick={action('onClick')}>
                  <Icon name="IconHandPanToolPalmsOutlined24" containerSize={iconSizeMappingHelper[argTypes.size || size]} />
                </Button>
              </ButtonGroup>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

ButtonGroupVariations.storyName = BTN_GROUP_VARIATION;
