import React, { FC } from 'react';

import { ISvgProps } from '../types';

const IconLogotype: FC<ISvgProps> = (): JSX.Element => {
  return (
    <svg width="150" height="81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M75 71.948c-39.381 0-65.72-12.901-65.72-32.004C9.28 20.84 35.62 7.939 75 7.939c39.382 0 65.719 12.901 65.719 32.005 0 19.103-26.337 32.004-65.719 32.004Zm0-64.753c-39.883 0-66.473 13.149-66.473 32.749S35.117 72.693 75 72.693c39.883 0 66.473-13.15 66.473-32.75S114.883 7.196 75 7.196Zm0 68.97c-42.392 0-70.736-14.637-70.736-36.221C4.264 18.11 32.608 3.722 75 3.722c42.642 0 70.736 14.39 70.736 36.222 0 21.584-28.094 36.22-70.736 36.22ZM75 0C29.85 0 0 16.126 0 39.944c0 23.568 29.85 39.943 75 39.943 45.402 0 75-16.375 75-39.943C150 16.126 120.402 0 75 0Z"
        fill="#1952B6"
      />
      <path
        d="M35.482 28.53v8.56h-7.5v-8.56h-7.789v22.826h7.788v-8.56h7.5v8.56h7.79V28.53h-7.79ZM129.809 28.53h-7.994l-4.996 8.56h-2.298v-8.56h-7.789v22.826h7.818l-.029-8.56h2.298l4.996 8.56h7.994l-6.661-11.412 6.661-11.413ZM95.194 28.53 88.56 39.898l-6.635-11.366h-7.211v22.825h7.211V40.514l4.997 8.56h3.276l4.996-8.56v10.842h7.212V28.53h-7.212ZM50.374 28.53l-.403 11.411c-.113 3.209-.772 5.709-2.96 5.709h-.859v5.706H49.2c5.454.018 7.468-4.86 7.69-11.175l.211-5.95 5.495.006v17.119h7.788V28.53H50.374Z"
        fill="#1952B6"
      />
    </svg>
  );
};

export default IconLogotype;