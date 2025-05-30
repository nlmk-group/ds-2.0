import React from 'react';

import Box from '@components/Box';
import { IBox } from '@components/Box/types';
import Grid from '@components/Grid';

import styles from '@components/_storybook/styles.module.scss';

import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => (
  <div className={styles.wrapper} style={{ minHeight: 80 }}>
    {<Story />}
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
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      {Array.from({ length: 3 }, (_, index) => (
        <Box
          key={index}
          px="var(--8-space)"
          py="var(--16-space)"
          borderRadius="var(--4-border)"
          background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)'
};

export const GridOrientation = (argTypes: IBox): JSX.Element => {
  return (
    <Grid {...argTypes}>
      <Column st={{ flex: '1' }} background="var(--error-red-100)">
        <Box
          st={{ flex: '1' }}
          px="var(--8-space)"
          py="var(--16-space)"
          borderRadius="var(--4-border)"
          background="var(--primary-blue-400)"
        >
          Контент 1
        </Box>
        <Box
          st={{ flex: '1' }}
          px="var(--8-space)"
          py="var(--16-space)"
          borderRadius="var(--4-border)"
          background="var(--primary-blue-400)"
        >
          Контент 2
        </Box>
        <Box
          st={{ flex: '1' }}
          px="var(--8-space)"
          py="var(--16-space)"
          borderRadius="var(--4-border)"
          background="var(--primary-blue-400)"
        >
          Контент 3
        </Box>
      </Column>
      <Row st={{ flex: '1' }} background="var(--error-red-100)">
        <Box
          st={{ flex: '1' }}
          px="var(--8-space)"
          py="var(--16-space)"
          borderRadius="var(--4-border)"
          background="var(--primary-blue-400)"
        >
          Контент 1
        </Box>
        <Box
          st={{ flex: '1' }}
          px="var(--8-space)"
          py="var(--16-space)"
          borderRadius="var(--4-border)"
          background="var(--primary-blue-400)"
        >
          Контент 2
        </Box>
        <Box
          st={{ flex: '1' }}
          px="var(--8-space)"
          py="var(--16-space)"
          borderRadius="var(--4-border)"
          background="var(--primary-blue-400)"
        >
          Контент 3
        </Box>
      </Row>
    </Grid>
  );
};

GridOrientation.storyName = 'Grid с разной ориентацией контейнеров';
GridOrientation.args = {
  background: 'var(--text-grey-200)'
};

export const GridEqualWidthColumns = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 2
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            2 из 2
          </Box>
        </Column>
      </Row>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            2 из 3
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)'
};

export const SettingOneColumnWidth = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            2 из 3 (шире)
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            3 из 3
          </Box>
        </Column>
      </Row>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="58.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            2 из 3 (шире)
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)'
};

export const VariableWidthContent = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Переменная ширина контента
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            3 из 3
          </Box>
        </Column>
      </Row>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            1 из 3
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Переменная ширина контента
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)',
  justifyContent: 'center'
};

export const EqualWidthMultiRow = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Колонка
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Колонка
          </Box>
        </Column>
        <Row borderRadius="var(--4-border)" background="var(--error-red-100)" width="100%" />
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Колонка
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)'
};

export const VerticalAlignment = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)" alignItems="start">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Column>
      </Row>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)" alignItems="center">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Column>
      </Row>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)" alignItems="end">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из трех колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)'
};

export const HorizontalAlignment = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)" justifyContent="center">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Column>
      </Row>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)" justifyContent="space-around">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Column>
      </Row>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)" justifyContent="space-between">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Одна из двух колонок
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)'
};

export const ColumnWrapping = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="75%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-9
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-4
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            Поскольку 9 + 4 = 13 &gt; 12, этот div шириной 4 колонки переносится на новую строку как единое целое.
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)'
};

export const ColumnBreaks = (argTypes: IBox): JSX.Element => {
  return (
    <Grid borderRadius="var(--4-border)" {...argTypes}>
      <Row borderRadius="var(--4-border)" background="var(--error-red-100)">
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
        </Column>
        <Row borderRadius="var(--4-border)" background="var(--error-red-100)" width="100%" />
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
          >
            .col-6
          </Box>
        </Column>
        <Column borderRadius="var(--4-border)" background="var(--primary-blue-400)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="var(--8-space)"
            py="var(--16-space)"
            borderRadius="var(--4-border)"
            background="var(--primary-blue-400)"
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
  background: 'var(--text-grey-200)'
};

export const GridWithSizeProp = (argTypes: IBox): JSX.Element => {
  return (
    <Grid container gap={32} {...argTypes}>
      <Grid
        size={{ xs: 6, sm: 8, lg: 3 }}
        px="var(--8-space)"
        py="var(--16-space)"
        borderRadius="var(--4-border)"
        background="var(--primary-blue-400)"
      >
        <div>xs=6 md=8 lg=3</div>
      </Grid>
      <Grid
        size={{ xs: 6, sm: 4, lg: 3 }}
        px="var(--8-space)"
        py="var(--16-space)"
        borderRadius="var(--4-border)"
        background="var(--primary-blue-400)"
      >
        <div>xs=6 md=4 lg=3</div>
      </Grid>
      <Grid
        size={{ xs: 6, sm: 4, lg: 3 }}
        px="var(--8-space)"
        py="var(--16-space)"
        borderRadius="var(--4-border)"
        background="var(--primary-blue-400)"
      >
        <div>xs=6 md=4 lg=3</div>
      </Grid>
      <Grid
        size={{ xs: 6, sm: 8, lg: 3 }}
        px="var(--8-space)"
        py="var(--16-space)"
        borderRadius="var(--4-border)"
        background="var(--primary-blue-400)"
      >
        <div>xs=6 md=8 lg=3</div>
      </Grid>
    </Grid>
  );
};

GridWithSizeProp.storyName = 'Grid c использованием bootstrap параметра size';
