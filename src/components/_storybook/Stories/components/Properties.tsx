import React, { FC, useState } from 'react';

import ArgumentsTable from '@components/_storybook/ArgumentsTable';
import { TArgsType } from '@components/_storybook/ArgumentsTable/types';
import { Button, Icon } from '@components/index';

import styles from '../Stories.module.scss';

const Properties: FC<{ argsTypes?: TArgsType }> = ({ argsTypes = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.properties}>
      <Button
        variant="secondary"
        startIcon={<Icon containerSize={24} name={isOpen ? 'IconChevronArrowUpFilled24' : 'IconChevronArrowDownFilled24'} />}
        onClick={() => setIsOpen(!isOpen)}
      >
        Свойства компонента
      </Button>

      {isOpen && (
        <div className={styles.arguments}>
          <ArgumentsTable args={argsTypes} />
        </div>
      )}
    </div>
  );
};

export default Properties;
