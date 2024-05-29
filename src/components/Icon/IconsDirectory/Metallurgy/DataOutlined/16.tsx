import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDataOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.104 6.826l.026-.193.005-.037v-.002a1.4 1.4 0 0 0 .004-.029c-.003-.275-.252-.55-.62-.55-.37 0-.62.278-.62.555 0 .278.25.555.62.555a.652.652 0 0 0 .44-.167l.145-.132Zm1.817.895l.146-.132a.652.652 0 0 1 .714-.106l.196.09.092.178a.5.5 0 0 1 .058.226c0 .277-.25.554-.62.554s-.618-.274-.621-.55a.312.312 0 0 1 .004-.028l.005-.04.026-.192ZM9.023 5.57l.196.088c.09.04.18.062.275.062.37 0 .62-.278.62-.555a.492.492 0 0 0-.03-.154l-.064-.192-.172-.108a.662.662 0 0 0-.354-.1c-.37 0-.62.277-.62.554 0 .073.018.148.057.225l.092.18Zm2.932-2.17l.172.109c.1.063.221.1.354.1.37 0 .62-.277.62-.554 0-.278-.25-.555-.62-.555s-.62.277-.62.555c0 .04.008.087.03.154l.064.191Zm1.147 10.029V6.016H11.86V13.5h1.281l-.04-.071ZM14 14H2l.398-.703V9.383c0-.194.167-.352.374-.352h1.494c.206 0 .373.158.373.352v3.914h.747v-2.508c0-.194.167-.351.373-.351h1.494c.206 0 .374.157.374.351v2.508h.746v-5.32c0-.195.168-.352.374-.352h1.494c.206 0 .373.157.373.352v5.32h.747v-7.43c0-.194.167-.351.373-.351h1.494c.207 0 .374.157.374.351v7.43L14 14ZM5.4 7.849l-1.106-.52a1.152 1.152 0 0 1-.775.296c-.618 0-1.12-.473-1.12-1.055 0-.581.502-1.054 1.12-1.054.617 0 1.12.473 1.12 1.054a.625.625 0 0 1-.01.097c0 .01-.002.02-.004.031l1.106.52a1.152 1.152 0 0 1 1.255-.19l1.5-1.412a.992.992 0 0 1-.113-.452c0-.581.503-1.055 1.12-1.055.23 0 .443.066.62.178l1.304-.92a.986.986 0 0 1-.056-.312c0-.582.503-1.055 1.12-1.055.618 0 1.12.473 1.12 1.055 0 .581-.502 1.054-1.12 1.054-.229 0-.442-.065-.62-.177l-1.303.92a.984.984 0 0 1 .056.312c0 .582-.503 1.055-1.12 1.055-.173 0-.334-.04-.48-.106l-1.5 1.412c.07.137.113.29.113.452 0 .581-.503 1.054-1.12 1.054-.619 0-1.121-.473-1.121-1.054a.663.663 0 0 1 .014-.128ZM2.858 13.5l.04-.071V9.53H4.14v3.97H2.858Zm3.028 0v-2.563h1.24V13.5h-1.24Zm2.987 0V8.125h1.241V13.5h-1.24Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDataOutlined16;