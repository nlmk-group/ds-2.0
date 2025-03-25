import React, { FC } from 'react';

import { locale } from '@components/DatePicker/helpers';
import { useLocale } from '@components/DatePicker/utils';
import { Button, Divider } from '@components/index';
import clsx from 'clsx';

import { IFooterProps } from './types';

import styles from './Footer.module.scss';

export const Footer: FC<IFooterProps> = ({ className, onAccept, onDecline, disable }) => {
  const language = useLocale();

  return (
    <div className={clsx(styles.root, className)}>
      <Divider />
      <div className={styles['btn-collection']}>
        <Button type="button" onClick={onAccept} disabled={disable}>
          {locale[language].buttons.accept}
        </Button>
        <Button type="button" onClick={onDecline} variant="secondary">
          {locale[language].buttons.decline}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
