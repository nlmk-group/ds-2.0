import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFinishingContains16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.2 2H15v12.6H5.2V2Zm-1.324 8.938a1.377 1.377 0 0 1-.124-.417c-.3.335-.691.503-1.172.503-.455 0-.833-.132-1.134-.395A1.273 1.273 0 0 1 1 9.633c0-.493.182-.87.545-1.134.367-.263.895-.396 1.584-.399H3.7v-.266c0-.215-.056-.386-.167-.515-.109-.13-.282-.193-.52-.193-.209 0-.373.05-.493.15a.513.513 0 0 0-.176.412H1.103c0-.27.083-.518.249-.747.166-.229.4-.408.704-.537a2.542 2.542 0 0 1 1.022-.197c.572 0 1.026.144 1.36.433.338.287.507.69.507 1.211v2.013c.003.441.065.775.185 1v.074H3.876Zm-1.026-.863c.183 0 .352-.04.507-.12a.816.816 0 0 0 .343-.33v-.8h-.463c-.621 0-.952.215-.992.645l-.004.072c0 .155.054.282.163.383.109.1.257.15.446.15Zm6.89.326c.317-.418.476-.999.476-1.743v-.069c0-.755-.162-1.34-.485-1.756-.32-.417-.764-.626-1.331-.626-.467 0-.843.167-1.13.502V4.344H6.03v6.594h1.116l.056-.494c.3.386.703.58 1.207.58.57 0 1.013-.208 1.33-.623Zm-.988-2.86c.149.215.223.557.223 1.027 0 .386-.03.674-.09.863-.126.395-.39.592-.79.592-.398 0-.672-.163-.824-.49V7.702c.149-.324.42-.485.816-.485.294 0 .516.108.665.326Zm4.854 2.293a.814.814 0 0 1-.558.19c-.298 0-.52-.105-.665-.314-.146-.21-.22-.553-.22-1.03v-.13c0-.472.074-.812.22-1.021.149-.212.367-.318.657-.318.234 0 .423.076.566.228a.837.837 0 0 1 .223.584h1.164c-.006-.55-.185-.99-.537-1.318-.349-.332-.814-.498-1.395-.498-.664 0-1.186.213-1.567.64-.38.426-.571.997-.571 1.712v.082c0 .744.192 1.328.575 1.751.384.421.908.631 1.572.631.354 0 .678-.071.97-.214a1.72 1.72 0 0 0 .695-.61c.17-.263.255-.552.258-.867h-1.164a.662.662 0 0 1-.223.502Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFinishingContains16;
