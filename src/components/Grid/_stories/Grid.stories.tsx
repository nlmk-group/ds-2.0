import React from 'react';

import Box from '@components/Box';
import { IBox } from '@components/Box/types';
import Grid from '@components/Grid';

import styles from '@components/_storybook/styles.module.scss';

import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/Grid/Stories',
  component: Grid,
  decorators: [withPadding],
  argTypes: argsTypes
};

const { Column, Row } = Grid;

export const GridDefault = (argTypes: IBox): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Grid {...argTypes}>
        <Box
          background="var(--info-lightblue-200)"
          borderRadius={4}
          border="1px solid var(--info-lightblue-300)"
          st={{ flex: '1' }}
        >
          Контент 1
        </Box>
        <Box
          background="var(--info-lightblue-200)"
          borderRadius={4}
          border="1px solid var(--info-lightblue-300)"
          st={{ flex: '1' }}
        >
          Контент 2
        </Box>
        <Box
          background="var(--info-lightblue-200)"
          borderRadius={4}
          border="1px solid var(--info-lightblue-300)"
          st={{ flex: '1' }}
        >
          Контент 3
        </Box>
      </Grid>
    </div>
  );
};

GridDefault.storyName = 'Grid по умолчанию';
GridDefault.args = {
  background: 'var(--text-grey-200)',
  borderRadius: 4,
  border: '1px solid var(--text-grey-300)'
};

export const GridOrientation = (argTypes: IBox): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Grid {...argTypes}>
        <Column
          st={{ flex: '1' }}
          background="var(--spectrum-yellow-100)"
          border="1px solid var(--spectrum-yellow-200)"
        >
          <Box
            st={{ flex: '1' }}
            background="var(--info-lightblue-200)"
            borderRadius={4}
            border="1px solid var(--info-lightblue-300)"
          >
            Контент 1
          </Box>
          <Box
            st={{ flex: '1' }}
            background="var(--info-lightblue-200)"
            borderRadius={4}
            border="1px solid var(--info-lightblue-300)"
          >
            Контент 2
          </Box>
          <Box
            st={{ flex: '1' }}
            background="var(--info-lightblue-200)"
            borderRadius={4}
            border="1px solid var(--info-lightblue-300)"
          >
            Контент 3
          </Box>
        </Column>
        <Row st={{ flex: '1' }} background="var(--spectrum-yellow-50)" border="1px solid var(--spectrum-yellow-200)">
          <Box
            st={{ flex: '1' }}
            background="var(--info-lightblue-200)"
            borderRadius={4}
            border="1px solid var(--info-lightblue-300)"
          >
            Контент 1
          </Box>
          <Box
            st={{ flex: '1' }}
            background="var(--info-lightblue-200)"
            borderRadius={4}
            border="1px solid var(--info-lightblue-300)"
          >
            Контент 2
          </Box>
          <Box
            st={{ flex: '1' }}
            background="var(--info-lightblue-200)"
            borderRadius={4}
            border="1px solid var(--info-lightblue-300)"
          >
            Контент 3
          </Box>
        </Row>
      </Grid>
    </div>
  );
};

GridOrientation.storyName = 'Grid с разной ориентацией контейнеров';
GridOrientation.args = {
  background: 'var(--text-grey-200)',
  borderRadius: 4,
  border: '1px solid var(--text-grey-300)'
};
