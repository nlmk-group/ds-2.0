import React, { FC } from 'react';

import { IArgumentsTableProps } from '@components/_storybook/ArgumentsTable/types';
import { Box } from '@components/index';

import styles from './ArgumentsTable.module.scss';

export const ArgumentsTable: FC<IArgumentsTableProps> = ({ args = {} }) => {
  return (
    <table className={styles.table}>
      <tbody className={styles.tbody}>
        {Object.entries(args).map(([key, value]) => (
          <tr key={key}>
            <td className={styles.td}>
              <b>{key}</b>
            </td>
            <td className={styles.td} dangerouslySetInnerHTML={{ __html: value.description }} />

            <td className={styles.td}>
              {value.table?.type?.summary ? (
                <Box display="flex" flexWrap="wrap" gap={4} border="none" justifyContent="center">
                  {value.table?.type?.summary.split('|').map((summary, index) => (
                    <code key={index}>{summary}</code>
                  ))}
                </Box>
              ) : (
                <Box justifyContent="center">–</Box>
              )}
            </td>

            <td className={styles.td}>
              <Box justifyContent="center">{value.table?.defaultValue?.summary || '–'}</Box>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArgumentsTable;
