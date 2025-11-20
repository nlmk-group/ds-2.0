import React from 'react';

import { Icon, IconRollFilled24, Typography } from '@components/index';
import { useArgs } from 'storybook/preview-api';

import styles from './Legend.module.scss';

import { ELegendType } from '../enums';
import Legend from '../index';
import { ILegendColor, ILegendProps } from '../types';
import { argsTypes } from './argsTypes';
import { colorList } from './constants';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/Legend/Stories',
  component: Legend,
  argTypes: argsTypes,
  decorators: [withWrapper]
};

const colorListDefault = colorList.filter((_, i) => i <= 3);

export const LegendDefault = (props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();

  const onChange = (val: ILegendColor) => {
    updateArgs({ ...props, color: val });
  };

  return <Legend {...props} onColorChange={onChange} />;
};
LegendDefault.args = {
  type: ELegendType.VIEW,
  colorList: colorListDefault,
  label: 'Анализ стали с УНРС',
  color: { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' }
};
LegendDefault.storyName = 'Legend по умолчанию';

export const LegendEdit = (props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();

  const onChange = (val: ILegendColor) => {
    updateArgs({ ...props, color: val });
  };

  return <Legend {...props} onColorChange={onChange} />;
};

LegendEdit.args = {
  type: ELegendType.EDIT,
  colorList: colorList,
  label: 'Анализ стали с УНРС',
  color: { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' }
};

LegendEdit.storyName = 'Legend редактируемый';

export const LegendDisabled = (props: ILegendProps): JSX.Element => {
  const [, updateArgs] = useArgs();

  const onChange = (val: ILegendColor) => {
    updateArgs({ ...props, color: val });
  };

  return <Legend {...props} onColorChange={onChange} />;
};

LegendDisabled.args = {
  type: ELegendType.EDIT,
  colorList: colorList,
  label: 'Анализ стали с УНРС',
  isDisabled: true,
  color: { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' }
};

LegendDisabled.storyName = 'Legend заблокированный';

export const LegendSeveralView = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        Легенда обозначений
      </Typography>
      <div className={styles['card-list']}>
        <Legend
          label="Проба стали с УНРС"
          color={{
            default: 'var(--spectrum-salad-20)',
            hover: 'var(--spectrum-salad-30)',
            active: 'var(--spectrum-salad-10)'
          }}
        />
        <Legend
          label="Проба стали с АЦВ"
          color={{
            default: 'var(--spectrum-violet-20)',
            hover: 'var(--spectrum-violet-30)',
            active: 'var(--spectrum-violet-10)'
          }}
        />
        <Legend
          label="Проба чугуна с УДЧ"
          color={{
            default: 'var(--spectrum-tiffany-20)',
            hover: 'var(--spectrum-tiffany-30)',
            active: 'var(--spectrum-tiffany-10)'
          }}
        />
      </div>
    </div>
  );
};

LegendSeveralView.storyName = 'Legend список цветов';

export const LegendSeveralViewIcon = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        Легенда обозначений
      </Typography>
      <div className={styles['card-list-icon']}>
        <Legend
          label="Рулон"
          color={{
            default: 'roll',
            viewColor: ({ className }) => (
              <div className={className} style={{ height: '24px', width: '24px' }}>
                <Icon name="IconRollFilled24" htmlColor="var(--spectrum-red-50)" />
              </div>
            )
          }}
        />
        <Legend
          label="Шлаковая чаша"
          color={{
            default: 'shlack',
            viewColor: ({ className }) => (
              <div className={className} style={{ height: '24px', width: '24px'  }}>
                <Icon name="IconLotok24" htmlColor="var(--mnemo-40)" />
              </div>
            )
          }}
        />
        <Legend
          label="ПК"
          color={{
            default: 'pk',
            viewColor: ({ className }) => (
              <div className={className} style={{ height: '24px', width: '24px'  }}>
                <Icon name="IconDplayersFilled24" htmlColor="var(--mnemo-50)" />
              </div>
            )
          }}
        />
      </div>
    </div>
  );
};

LegendSeveralViewIcon.storyName = 'Legend список иконок';
