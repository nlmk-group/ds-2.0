import React, { FC } from 'react';

import { IArgumentsTableProps } from '@components/_storybook/ArgumentsTable/types';

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
              {(value.table && value.table.defaultValue && value.table.defaultValue.summary) || '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArgumentsTable;
