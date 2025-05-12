import React from 'react';

import Box from '@components/Box';
import { IBox } from '@components/Box/types';
import Grid from '@components/Grid';

import styles from '@components/_storybook/styles.module.scss';

import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => (
  <div className={styles.wrapper} style={{ minHeight: 80 }}>
    {<Story/>}
  </div>
);

export default {
  title: 'Components/Grid/Stories',
  component: Grid,
  decorators: [withPadding],
  argTypes: argsTypes
};

const { Column, Row } = Grid;

export const GridDefault = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      {Array.from({ length: 3 }, (_, index) => (
        <Box
          key={index}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
          st={{ flex: '1' }}
        >
          Контент {index + 1}
        </Box>
      ))}
    </Grid>
  );
};

GridDefault.storyName = 'Grid по умолчанию';
GridDefault.args = {
  background: 'var(--steel-50)'
};

export const GridOrientation = (argTypes: IBox): JSX.Element => {
  return (
    <Grid {...argTypes}>
      <Column st={{ flex: '1' }} background="var(--spectrum-red-30)">
        <Box
          st={{ flex: '1' }}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
        >
          Контент 1
        </Box>
        <Box
          st={{ flex: '1' }}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
        >
          Контент 2
        </Box>
        <Box
          st={{ flex: '1' }}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
        >
          Контент 3
        </Box>
      </Column>
      <Row st={{ flex: '1' }} background="var(--spectrum-red-30)">
        <Box
          st={{ flex: '1' }}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
        >
          Контент 1
        </Box>
        <Box
          st={{ flex: '1' }}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
        >
          Контент 2
        </Box>
        <Box
          st={{ flex: '1' }}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
        >
          Контент 3
        </Box>
      </Row>
    </Grid>
  );
};

GridOrientation.storyName = 'Grid с разной ориентацией контейнеров';
GridOrientation.args = {
  background: 'var(--steel-50)'
};

export const GridEqualWidthColumns = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 2
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 2
          </Box>
        </Column>
      </Row>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};
GridEqualWidthColumns.storyName = 'Колонки равной ширины';
GridEqualWidthColumns.args = {
  background: 'var(--steel-50)'
};

export const SettingOneColumnWidth = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3 (шире)
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Column>
      </Row>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="58.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3 (шире)
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};
SettingOneColumnWidth.storyName = 'Установка ширины одной колонки';
SettingOneColumnWidth.args = {
  background: 'var(--steel-50)'
};

export const VariableWidthContent = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Переменная ширина контента
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Column>
      </Row>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Переменная ширина контента
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};
VariableWidthContent.storyName = 'Переменная ширина контента';
VariableWidthContent.args = {
  background: 'var(--steel-50)',
  justifyContent: 'center'
};

export const EqualWidthMultiRow = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Column>
        <Row borderRadius="4px" background="var(--spectrum-red-30)" width="100%" />
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};
EqualWidthMultiRow.storyName = 'Колонки равной ширины с несколькими строками';
EqualWidthMultiRow.args = {
  background: 'var(--steel-50)'
};

export const VerticalAlignment = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      <Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="start">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
      </Row>
      <Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="center">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
      </Row>
      <Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="end">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};
VerticalAlignment.storyName = 'Вертикальное выравнивание';
VerticalAlignment.args = {
  background: 'var(--steel-50)'
};

export const HorizontalAlignment = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      <Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="center">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Column>
      </Row>
      <Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="space-around">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Column>
      </Row>
      <Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="space-between">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};
HorizontalAlignment.storyName = 'Горизонтальное выравнивание';
HorizontalAlignment.args = {
  background: 'var(--steel-50)'
};

export const ColumnWrapping = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="75%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-9
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-4
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Поскольку 9 + 4 = 13 &gt; 12, этот div шириной 4 колонки переносится на новую строку как единое целое.
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Последующие колонки продолжаются на новой строке.
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};
ColumnWrapping.storyName = 'Перенос колонок';
ColumnWrapping.args = {
  background: 'var(--steel-50)'
};

export const ColumnBreaks = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="4px" {...argTypes}>
      <Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Column>
        <Row borderRadius="4px" background="var(--spectrum-red-30)" width="100%" />
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Column>
        <Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Column>
      </Row>
    </Grid>
  );
};
ColumnBreaks.storyName = 'Разрывы колонок';
ColumnBreaks.args = {
  background: 'var(--steel-50)'
};
