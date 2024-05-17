import React, { ReactNode } from 'react';

import { combinedOptions, ICombinedOption } from '@components/Button/displayHelper';
import { EFill, ESizes, EVariant } from '@components/Button/enums';
import {
  Badge,
  Button,
  ButtonGroup,
  IconArticleOutlined16,
  IconArticleOutlined24,
  IconHandPanToolPalmsOutlined16,
  IconHandPanToolPalmsOutlined24,
  IconInfoOutlined16,
  IconInfoOutlined24,
  IconMixer16,
  IconMixer24
} from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import style from '../ButtonGroup.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { orientationMapping } from '../enums';
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
      {[...Array(3)].map((_, i) => (
        <Button key={i} onClick={action('onClick')}>
          Button
        </Button>
      ))}
    </ButtonGroup>
  );
};

DefaultButtonGroup.storyName = DEFAULT_BTN_GROUP;

export const ButtonGroupSizes = (argTypes: IButtonGroup): ReactNode => {
  return (
    <div className={style['showcase-wrapper-column']}>
      {Object.values(ESizes).map((size: ESizes, i) => (
        <ButtonGroup key={`${size}${i}`} {...argTypes} size={argTypes.size || size}>
          {[...Array(3)].map((_, i) => (
            <Button key={i + size} onClick={action('onClick')}>
              Size {size}
            </Button>
          ))}
        </ButtonGroup>
      ))}
    </div>
  );
};

ButtonGroupSizes.storyName = BTN_GROUP_SIZES;

export const ButtonGroupGradient = (argTypes: IButtonGroup): ReactNode => {
  return (
    <div className={style['showcase-wrapper-column']}>
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => (
          <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => (
              <ButtonGroup key={`${gradient}_${size}`} size={size} variant={gradient} {...argTypes}>
                {[...Array(3)].map((_, i) => (
                  <Button key={i} onClick={action('onClick')}>
                    gradient
                  </Button>
                ))}
              </ButtonGroup>
            ))}
          </div>
        ))}
      </div>
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => (
          <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => (
              <ButtonGroup key={`${gradient}_${size}`} size={size} variant={gradient} disabled {...argTypes}>
                {[...Array(3)].map((_, i) => (
                  <Button key={i} onClick={action('onClick')}>
                    gradient
                  </Button>
                ))}
              </ButtonGroup>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

ButtonGroupGradient.storyName = BTN_GROUP_GRADIENTS;

export const ButtonGroupVertical = (argTypes: IButtonGroup): ReactNode => {
  return (
    <div className={style['showcase-wrapper-column']}>
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => (
          <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => (
              <ButtonGroup key={`${gradient}_${size}`} size={size} variant={gradient} {...argTypes}>
                {[...Array(3)].map((_, i) => (
                  <Button key={i} onClick={action('onClick')}>
                    gradient
                  </Button>
                ))}
              </ButtonGroup>
            ))}
          </div>
        ))}
      </div>
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant) => (
          <div key={gradient} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => (
              <ButtonGroup key={`${gradient}_${size}`} size={size} variant={gradient} disabled {...argTypes}>
                {[...Array(3)].map((_, i) => (
                  <Button key={i} onClick={action('onClick')}>
                    gradient
                  </Button>
                ))}
              </ButtonGroup>
            ))}
          </div>
        ))}
      </div>
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
        {combinedOptions(true).map((option: ICombinedOption, i) => {
          const { fill, variant, size } = option;
          const iconArticleOutlinedView = size === ESizes.xs ? <IconArticleOutlined16 /> : <IconArticleOutlined24 />;

          if (variant === EVariant.secondary && (fill === EFill.outline || fill === EFill.clear))
            return <div key={i}></div>;
          return (
            <ButtonGroup
              key={`${variant}_${fill}_${size}`}
              variant={variant}
              fill={fill}
              size={argTypes.size || size}
              {...argTypes}
            >
              {[...Array(3)].map((_, i) => (
                <Button
                  key={i}
                  startIcon={iconArticleOutlinedView}
                  endIcon={iconArticleOutlinedView}
                  badge={1}
                  onClick={action('onClick')}
                >
                  {variant} {fill} {size}
                </Button>
              ))}
            </ButtonGroup>
          );
        })}
      </div>
      <div style={{ marginBottom: '12px' }} />
      <div className={style['showcase-wrapper-row']}>
        {Object.values(EVariant).map((gradient: EVariant, i) => (
          <div key={gradient + i} className={style['showcase-wrapper-column']}>
            {Object.values(ESizes).map((size: ESizes) => {
              const iconInfoOutlined = size === ESizes.xs ? <IconInfoOutlined16 /> : <IconInfoOutlined24 />;
              const iconMixerView = size === ESizes.xs ? <IconMixer16 /> : <IconMixer24 />;
              const iconHandPanToolPalmsOutlinedView =
                size === ESizes.xs ? <IconHandPanToolPalmsOutlined16 /> : <IconHandPanToolPalmsOutlined24 />;

              return (
                <ButtonGroup key={`${gradient}_${size}`} size={argTypes.size || size} variant={gradient} {...argTypes}>
                  <Button onClick={action('onClick')} iconButton={iconInfoOutlined} />
                  <Button onClick={action('onClick')} iconButton={iconMixerView} />
                  <Button onClick={action('onClick')} iconButton={iconHandPanToolPalmsOutlinedView} />
                </ButtonGroup>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

ButtonGroupVariations.storyName = BTN_GROUP_VARIATION;
