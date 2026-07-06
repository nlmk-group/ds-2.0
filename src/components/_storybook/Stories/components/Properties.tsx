import React, { FC, useState } from 'react';

import ArgumentsTable from '@components/_storybook/ArgumentsTable';
import { TArgsType } from '@components/_storybook/ArgumentsTable/types';
import { Button, ClickAwayListener, Icon } from '@components/index';

import styles from '../Stories.module.scss';

const Properties: FC<{ argsTypes?: TArgsType }> = ({ argsTypes = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ClickAwayListener className={styles.properties} onClickAway={() => isOpen && setIsOpen(false)}>
      <Button
        type="button"
        variant="secondary"
        startIcon={
          <Icon containerSize={24} name={isOpen ? 'IconChevronArrowUpFilled24' : 'IconChevronArrowDownFilled24'} />
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        Свойства компонента
      </Button>

      {isOpen && (
        <div className={styles.arguments}>
          <ArgumentsTable args={argsTypes} />
        </div>
      )}
    </ClickAwayListener>
  );
};

export default Properties;
