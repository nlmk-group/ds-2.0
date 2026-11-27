import React, { FC } from 'react';

import { IArgumentsTableProps } from './types';

import styles from './ArgumentsTable.module.scss';

import { IDocumentedProp } from './ComponentReference';
import { isStyleProp } from './isStyleProp';

const headings = ['Свойство', 'Назначение', 'Тип и значения', 'По умолчанию'];

function formatDefault(value: unknown) {
  return typeof value === 'object' ? JSON.stringify(value) : String(value);
}

function CodeValue({ value }: { value: string }) {
  const parts = value.split(/(?<=[a-z0-9])(?=[A-Z])|(?<=[.,/])(?=\S)/);
  return (
    <code>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <wbr />}
          {part}
        </React.Fragment>
      ))}
    </code>
  );
}

function PropertyOptions({ options }: { options: (string | number)[] }) {
  const values = (
    <div className={styles.values}>
      {options.map(option => (
        <CodeValue key={option} value={String(option)} />
      ))}
    </div>
  );
  return options.length > 20 ? (
    <details>
      <summary>Все значения ({options.length})</summary>
      {values}
    </details>
  ) : (
    values
  );
}

export const ArgumentsTable: FC<
  IArgumentsTableProps & { componentName?: string; documentedProps?: Record<string, IDocumentedProp> }
> = ({ args = {}, componentName, documentedProps = {} }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        {headings.map(title => (
          <th key={title} scope="col">
            {title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {Array.from(new Set([...Object.keys(args), ...Object.keys(documentedProps)]))
        .filter(key => !isStyleProp(key, args[key] || {}, componentName))
        .map(key => {
          const arg = args[key];
          const prop = documentedProps[key];
          const docDefault = prop?.defaultValue?.value;
          const displayDefault = arg?.table?.defaultValue;
          const defaultValue =
            !prop || (displayDefault?.expression && displayDefault.expression === docDefault)
              ? displayDefault?.summary
              : docDefault;
          const catalog = arg?.table?.type?.catalog;
          const type = catalog
            ? arg.table?.type?.summary
            : prop?.type.raw || prop?.type.name || arg?.table?.type?.summary;
          const literals =
            !catalog && Array.isArray(prop?.type.value)
              ? prop.type.value.map(option => String(option.value).replace(/^"(.*)"$/, '$1'))
              : undefined;
          const options = literals || (!prop && !type ? arg?.options : undefined);
          return (
            <tr key={key}>
              <th scope="row">
                {key}
                {prop?.required && <small>Обязательно</small>}
              </th>
              {arg?.description ? (
                <td dangerouslySetInnerHTML={{ __html: arg.description }} />
              ) : (
                <td>{prop?.description || (key === 'children' ? 'Содержимое компонента.' : '—')}</td>
              )}
              <td data-label={headings[2]}>
                {options?.length ? (
                  <PropertyOptions options={options} />
                ) : (
                  <CodeValue
                    value={type === 'TSpacingProps' ? 'string | number' : type?.replace(/ \| undefined$/, '') || '—'}
                  />
                )}
                {catalog && (
                  <a className={styles.catalogLink} href={catalog.href}>
                    {catalog.label}
                  </a>
                )}
                {componentName === 'Box' && !options && arg?.options?.length ? (
                  <>
                    <small>Примеры значений</small>
                    <PropertyOptions options={arg.options} />
                  </>
                ) : null}
              </td>
              <td data-label={headings[3]}>
                {defaultValue == null ? (
                  '—'
                ) : (
                  <CodeValue value={defaultValue === '' ? '""' : formatDefault(defaultValue)} />
                )}
              </td>
            </tr>
          );
        })}
    </tbody>
  </table>
);

export default ArgumentsTable;
