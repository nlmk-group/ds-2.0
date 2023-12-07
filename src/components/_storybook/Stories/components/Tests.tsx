import React, { FC } from 'react';

// Add TS disable error comment for import file from under the root direction 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import data from '@root/.jest-test-results.json';
import styles from '../Stories.module.scss';
import { Chip, Typography } from '@components/index';

const Tests:FC<{componentName: string}> = ({componentName}) => {
  const { testResults } = data;
  const currentComponentTest = testResults.find(({name}) => (
    name.includes(componentName)
  ));

  return (
    <div className={styles.tests}>
      {currentComponentTest?.assertionResults.map(({title, status}) => (
        <div className={styles.test} key={title}>
          <div className={styles[status]}></div>
          <Typography variant='Body1-Bold'>{title}</Typography>
          <div className={styles.chip}>
            <Chip color="success" variant="solid">
              {status}
            </Chip>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tests;
