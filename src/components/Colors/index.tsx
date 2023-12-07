import React, { FC } from 'react';

import Typography from '@components/Typography';
import clsx from 'clsx';

import styles from './Colors.module.scss';

import { CopyWrapper } from './subcomponents/CopyWrapper';
import { flattenObject, returnDarkColors, sortColorKeys } from './utils';

interface IColors {
  colors: any[];
  groupColorKey: string;
  title: string;
  subTitle?: string;
}

const Colors: FC<IColors> = ({ colors, groupColorKey, title, subTitle }) => {
  const [lightPalette, darkPalette] = colors;

  const formatDescription = (description: string) => description?.split('\n').slice(-1).join('');

  const renderColor = (value: string, label?: string): JSX.Element => {
    const color = value.toUpperCase();
    const isWhite = color.startsWith('#FFFFFF');

    return (
      <div className={styles['cell-color']}>
        {label && (
          <Typography variant="Body2" color="disabled" className={styles['only-mobile']}>
            {label}
          </Typography>
        )}
        <CopyWrapper copy={color}>
          <div className={styles['color-wrapper']}>
            <div style={{ background: color }} className={clsx(styles['color'], isWhite && styles['color-white'])} />
            <div className={styles['color-value']}>{color}</div>
          </div>
        </CopyWrapper>
      </div>
    );
  };

  const renderColorRow = (props: { value: string; description: string }, key: string) => {
    const { value, description } = props;
    const darkColor = darkPalette && returnDarkColors(darkPalette, key);

    return (
      <div key={key} className={styles['color-row']}>
        <div className={styles['cell-name']}>
          <CopyWrapper copy={`var(--${key})`}>
            <code>{key}</code>
          </CopyWrapper>
          <Typography>{formatDescription(description)}</Typography>
        </div>
        <div className={styles['cells-color']}>
          {renderColor(value, darkColor && 'Светлая тема')}
          {darkColor && renderColor(darkColor, 'Темная тема')}
        </div>
      </div>
    );
  };

  const renderColorRows = (colorRecord: any, generalKey: string) => {
    const colorPaletteResult = flattenObject(colorRecord, generalKey);

    return Object.keys(colorPaletteResult)
      .sort(sortColorKeys)
      .map(key => renderColorRow((colorPaletteResult as any)[key], key));
  };

  return (
    <div className={styles['colors-page-wrapper']}>
      <div className={styles['colors-table-title']}>
        <Typography variant="Heading3">{title}</Typography>
        {subTitle && <Typography className={styles['colors-table-subtitle']}>{subTitle}</Typography>}
      </div>
      <div className={styles['colors-table']}>
        <div className={clsx(styles['color-row'], styles['color-row-header'])}>
          <div className={styles['cell-name']}>
            <Typography variant={'Body1-Medium'}>Токен и описание</Typography>
          </div>
          <div className={styles['cells-color']}>
            <div className={clsx(styles['cell-color'], styles['only-desktop'])}>
              <Typography variant={'Body1-Medium'}>Светлая тема</Typography>
            </div>
            {darkPalette && (
              <div className={clsx(styles['cell-color'], styles['only-desktop'])}>
                <Typography variant={'Body1-Medium'}>Темная тема</Typography>
              </div>
            )}
          </div>
        </div>
        {renderColorRows(lightPalette[groupColorKey], groupColorKey)}
      </div>
    </div>
  );
};

export default Colors;
