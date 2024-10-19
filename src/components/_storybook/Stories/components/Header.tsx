import React, { FC } from 'react';

import { Button, Chip, Link, Typography } from '@components/index';

import { HeaderProps } from './types';

import styles from '../Stories.module.scss';

const Header: FC<HeaderProps> = ({ title, description, isBeta, isStable, figmaLink, codeLink, isDeprecated }) => {
  return (
    <div className={styles['header-wrapper']}>
      <Typography variant="Heading1" color="primary">
        <div className={styles.header}>
          <span>{title ?? 'Напиши заголовок компонента'}</span>
          {isDeprecated && (
            <Chip color="error" variant="outline" suffix="не использовать">
              Deprecated
            </Chip>
          )}
          {isBeta && (
            <Chip color="warning" variant="outline" suffix="тестовый режим">
              Beta
            </Chip>
          )}
          {isStable && (
            <Chip color="success" variant="outline" suffix="можно использовать">
              Stable
            </Chip>
          )}
        </div>
      </Typography>
      <div className={styles.description}>
        <Typography>{description ?? 'Напишите описание компонента'}</Typography>
      </div>
      <div className={styles.description}>
        {figmaLink &&
          <Link href={figmaLink} target="_blank" className={styles.link}>
            <Button variant="grey" fill="outline">
              Figma
            </Button>
          </Link>
        }
        {codeLink && (
          <Link href={codeLink} target="_blank" className={styles.link}>
            <Button variant="grey" fill="outline">
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
