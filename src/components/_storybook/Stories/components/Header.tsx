import React, { FC, useLayoutEffect, useRef } from 'react';

import { Button, Link, Status, Typography } from '@components/index';

import { HeaderProps } from './types';

import styles from '../Stories.module.scss';

const Header: FC<HeaderProps> = ({ title, description, isBeta, isStable, figmaLink, codeLink, isDeprecated }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const heading = rowRef.current?.firstElementChild as HTMLElement | null;
    if (!heading || !title || !globalThis.CSS?.supports('text-box', 'trim-both cap alphabetic')) return;
    const context = document.createElement('canvas').getContext('2d');
    if (!context) return;

    // Include the actual glyphs above the cap line and below the baseline in the flex alignment.
    const alignTitle = () => {
      const { fontWeight, fontSize, fontFamily } = getComputedStyle(heading);
      context.font = `${fontWeight} ${fontSize} ${fontFamily}`;
      const ink = context.measureText(title);
      const capHeight = context.measureText('H').actualBoundingBoxAscent;
      heading.style.paddingBlockStart = `${Math.max(0, ink.actualBoundingBoxAscent - capHeight)}px`;
      heading.style.paddingBlockEnd = `${Math.max(0, ink.actualBoundingBoxDescent)}px`;
    };
    alignTitle();
    document.fonts.addEventListener('loadingdone', alignTitle);
    const compact = window.matchMedia('(max-width: 480px)');
    compact.addEventListener('change', alignTitle);
    return () => {
      document.fonts.removeEventListener('loadingdone', alignTitle);
      compact.removeEventListener('change', alignTitle);
    };
  }, [title]);

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header} ref={rowRef}>
        <Typography variant="Heading1" color="primary">
          {title}
        </Typography>
        {isDeprecated && (
          <Status size="s" color="error" icon="IconBlockCloseOutlined16">
            Устарел
          </Status>
        )}
        {isBeta && (
          <Status size="s" color="warning" icon="IconInfoOutlined16">
            Бета-версия
          </Status>
        )}
        {isStable && (
          <Status size="s" color="success" icon="IconDoneCheckOutlined16">
            Стабильный
          </Status>
        )}
      </div>
      <div className={styles.description}>
        <Typography>{description ?? 'Напишите описание компонента'}</Typography>
      </div>
      <div className={styles.description}>
        {figmaLink && (
          <Link href={figmaLink} target="_blank" className={styles.link}>
            <Button type="button" color="grey" variant="secondary">
              Figma
            </Button>
          </Link>
        )}
        {codeLink && (
          <Link href={codeLink} target="_blank" className={styles.link}>
            <Button type="button" color="grey" variant="secondary">
              Код компонента
            </Button>
          </Link>
        )}
      </div>
      {/*
        TODO: think about, how making component history work
        <div className={clsx(styles.description, styles['cursor-pointer'])}>
          <Typography color="textSecondary">Где компонент используется (189)</Typography>
        </div>
      */}
    </div>
  );
};

export default Header;
