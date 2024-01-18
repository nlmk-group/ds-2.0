import React, { FC } from 'react';

import { locale } from '@components/DatePicker/helpers';
import { FooterProps } from '@components/DatePicker/subcomponents/Footer/types';
import { useLocale } from '@components/DatePicker/utils';
import { Button } from '@components/index';
import clsx from 'clsx';

import styles from './Footer.module.scss';

export const Footer: FC<FooterProps> = ({ className, onAccept, onDecline, disable }) => {
  const language = useLocale();

  return (
    <div className={clsx(styles.root, className)}>
      <Button className={styles.button} onClick={onAccept} variant="primary" disabled={disable}>
        {locale[language].buttons.accept}
      </Button>
      <Button onClick={onDecline} variant="secondary">
        {locale[language].buttons.decline}
      </Button>
    </div>
  );
};

export default Footer;
