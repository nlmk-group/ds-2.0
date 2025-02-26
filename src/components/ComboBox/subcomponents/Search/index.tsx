import React, { ChangeEvent, useEffect, useState } from 'react';

import { Icon, Input } from '@components/index';

import styles from './Search.module.scss';

import { useSetSearchValue } from '../../context';
import { useDebounce } from '../../hooks';

const Search = () => {
  const setSearchValue = useSetSearchValue();

  const [value, setValue] = useState('');

  const debounceValue = useDebounce(value, 200);

  useEffect(() => {
    if (setSearchValue) {
      setSearchValue(debounceValue);
    }
  }, [debounceValue]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  return (
    <div className={styles.search}>
      <Input
        className={styles['search-field']}
        icon={<Icon name="IconSearchOutlined16" />}
        value={value}
        placeholder="Поиск"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
