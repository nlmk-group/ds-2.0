import React, { ChangeEvent, FC, useState } from 'react';

import { Checkbox, Icon, Link, Typography } from '@components/index';

import { ITitle } from './types';

import styles from './ContentExample.module.scss';

const TitleHelper: FC<ITitle> = ({ title, href = '', checkAction = null, checked = false }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    if (checkAction !== null) checkAction(e);
  };

  const Header = () => (
    <Typography variant="Heading3" className={styles['title-typography-helper']}>
      {title}
    </Typography>
  );

  if (href.length) {
    return (
      <div data-testid="TITLE_LINK">
        <Link href={href} size="h3" rightIcon={<Icon name="IconArrowRightOutlined24" />}>
          {title}
        </Link>
      </div>
    );
  }

  if (checkAction !== null) {
    return (
      <div className={styles['title-wrapper']} data-testid="TITLE_CHECKBOX">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={isChecked} onChange={handleOnChange} />
        </div>
        <Header />
      </div>
    );
  }

  return (
    <div className={styles['title-wrapper']} data-testid="TITLE_SIMPLE">
      <Header />
    </div>
  );
};

export default TitleHelper;
