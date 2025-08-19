import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { Icon, Input } from '@components/index';

import styles from './Search.module.scss';

import { useSetSearchValue } from '../../context';
import { useDebounce } from '../../hooks';

interface ISearchProps {
  autoFocusSearch?: boolean;
  isDropdownOpen?: boolean;
}

const Search = ({ autoFocusSearch = false, isDropdownOpen = false }: ISearchProps) => {
  const setSearchValue = useSetSearchValue();
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('');

  const debounceValue = useDebounce(value, 200);

  useEffect(() => {
    if (setSearchValue) {
      setSearchValue(debounceValue);
    }
  }, [debounceValue]);

  useEffect(() => {
    if (autoFocusSearch && isDropdownOpen && inputRef.current) {
      // Чтобы анимация открытия dropdown не сбивала фокус
      const timeoutId = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [autoFocusSearch, isDropdownOpen]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  return (
    <div className={styles.search}>
      <Input
        inputRef={inputRef}
        className={styles['search-field']}
        icon={<Icon name="IconSearchOutlined24" />}
        value={value}
        placeholder="Поиск"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
