import React, { FC } from 'react';

import { ISvgProps } from '../types';

export const ChevronLeftIcon: FC<ISvgProps> = (): JSX.Element => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.252 24.1621C19.418 24.3281 19.6328 24.4258 19.8867 24.4258C20.3945 24.4258 20.7754 24.0449 20.7754 23.5371C20.7754 23.293 20.6777 23.0684 20.5215 22.9023L13.4121 15.9492L20.5215 8.99609C20.6777 8.83008 20.7754 8.5957 20.7754 8.36133C20.7754 7.85352 20.3945 7.46289 19.8867 7.46289C19.6328 7.46289 19.418 7.56055 19.252 7.72656L11.5176 15.2949C11.332 15.4512 11.2246 15.6953 11.2246 15.9492C11.2246 16.1934 11.3223 16.418 11.5078 16.6035L19.252 24.1621Z"
        fill="white"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
