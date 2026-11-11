import React, { FC } from 'react';

import { Chip, Typography } from '@components/index';

import styles from '../Stories.module.scss';

const reports = import.meta.glob<{
  testResults: { name: string; assertionResults: { title: string; status: string }[] }[];
}>('/.jest-test-results.json', { eager: true, import: 'default' });

const Tests: FC<{ componentName: string }> = ({ componentName }) => {
  const data = reports['/.jest-test-results.json'];
  if (!data) {
    return <Typography variant="Body1-Bold">Результаты тестов не сгенерированы</Typography>;
  }
  const { testResults } = data;
  const currentComponentTest = testResults.find(({ name }: { name: string }) => name.includes(componentName));

  return (
    <div className={styles.tests}>
      {currentComponentTest?.assertionResults.map(({ title, status }: { title: string; status: string }) => (
        <div className={styles.test} key={title}>
          <div className={styles[status]}></div>
          <Typography variant="Body1-Bold" className={styles.text}>
            {title}
          </Typography>
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
