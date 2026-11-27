import React from 'react';

import styles from './PreviewSkeleton.module.scss';

import SkeletonLoader from '../SkeletonLoader';

const labels = {
  component: 'Загрузка компонента',
  docs: 'Загрузка документации',
  code: 'Загрузка кода примера',
  table: 'Загрузка таблицы'
};

const bar = (width: string, height = '12px') => <SkeletonLoader width={width} height={height} />;

const componentShape = (
  <div className={styles.component}>
    {bar('48%', '16px')}
    <div className={styles.fields}>
      {['54%', '68%'].map(width => (
        <div key={width}>
          {bar(width)}
          {bar('100%', '32px')}
        </div>
      ))}
    </div>
    {bar('88%')}
    {bar('96px', '28px')}
  </div>
);

const codeShape = (
  <div className={styles.code}>
    {['76%', '58%', '44%', '68%', '52%', '71%', '36%', '22%'].map(width => (
      <SkeletonLoader key={width} width={width} height="10px" />
    ))}
  </div>
);

const shapes = {
  component: componentShape,
  code: codeShape,
  docs: (
    <div className={styles.docs}>
      <div className={styles.tools}>
        {bar('min(52%, 320px)', '36px')}
        {bar('74px', '24px')}
      </div>
      {bar('min(88%, 680px)')}
      {bar('min(66%, 460px)')}
      <div className={styles.tools}>
        {bar('88px', '28px')}
        {bar('112px', '28px')}
      </div>
      <div className={styles.tabs}>
        {bar('96px')}
        {bar('72px')}
        {bar('84px')}
      </div>
      {bar('min(68%, 380px)', '18px')}
      <div className={styles.example}>
        <div className={styles.toolbar}>
          {bar('24px', '24px')}
          {bar('100px', '24px')}
        </div>
        {codeShape}
        {componentShape}
      </div>
    </div>
  ),
  table: (
    <div className={styles.tableLayout}>
      <div className={styles.toolbar}>
        {bar('min(42%, 260px)', '32px')}
        {bar('88px', '32px')}
      </div>
      <div className={styles.table}>
        {['58%', '46%', '72%', '60%', '84%', '65%'].map(width => (
          <div className={styles.row} key={width}>
            {bar('36%')}
            {bar(width)}
            {bar('56%')}
            {bar(width)}
          </div>
        ))}
      </div>
      <div className={styles.toolbar}>
        {bar('88px', '22px')}
        {bar('112px', '22px')}
      </div>
    </div>
  )
};

export default function PreviewSkeleton({ kind }: { kind: keyof typeof labels }) {
  return (
    <div className={styles.skeleton} data-sb-skeleton={kind} role="status" aria-label={labels[kind]}>
      {shapes[kind]}
    </div>
  );
}
