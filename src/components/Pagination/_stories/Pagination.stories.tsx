import React, { useState } from 'react';

import { Box, Pagination } from '@components/index';

import styles from '../Pagination.module.scss';

import { IPaginationProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/Pagination/Stories',
  component: Pagination,
  argTypes: argsTypes,
  decorators: [withWrapper]
};

export const PaginationDefault = (argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ width: '800px' }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>
  );
};
PaginationDefault.storyName = 'Pagination по умолчанию';

export const PaginationWithGap = (argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(7);

  return (
    <div style={{ width: '800px' }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>
  );
};

PaginationWithGap.storyName = 'Pagination с разрывами';

export const PaginationWithLeftGap = (argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(17);

  return (
    <div style={{ width: '800px' }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>
  );
};

PaginationWithLeftGap.storyName = 'Pagination с левым разрывом';

export const PaginationWithRightGap = (argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(4);

  return (
    <div style={{ width: '800px' }}>
      <Pagination {...argsTypes} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={20} />
    </div>
  );
};

PaginationWithRightGap.storyName = 'Pagination с правым разрывом';

export const PaginationWithSelect = (argsTypes: IPaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  const [elementsPerPage, setElementsPerPage] = useState(10);

  return (
    <div style={{ width: '800px' }}>
      <Pagination
        {...argsTypes}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        setElementsPerPage={setElementsPerPage}
        withSelect
        maxPageCount={20}
      />
    </div>
  );
};

PaginationWithSelect.storyName = 'Pagination с возможностью выбора количества записей на странице';

export const PaginationWithCustomLabel = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(20);

  return (
    <Box flexDirection="column" gap="40px">
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        setElementsPerPage={setElementsPerPage}
        withSelect
        maxPageCount={15}
        itemsLabel="элементов"
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        setElementsPerPage={setElementsPerPage}
        withSelect
        maxPageCount={15}
        itemsLabel="строк"
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        elementsPerPage={elementsPerPage}
        setElementsPerPage={setElementsPerPage}
        withSelect
        maxPageCount={15}
      />
    </Box>
  );
};

PaginationWithCustomLabel.storyName = 'Pagination с настраиваемым текстом в селекте';
