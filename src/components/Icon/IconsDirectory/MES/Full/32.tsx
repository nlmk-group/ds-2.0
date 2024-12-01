import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFull32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.42 6.773c.57-.489.64-.813.64-.955 0-.142-.07-.466-.64-.954-.57-.492-1.503-1.016-2.817-1.494C23.986 2.418 20.238 1.79 16 1.79c-4.238 0-7.986.628-10.603 1.58-1.314.478-2.247 1.002-2.818 1.494-.568.488-.64.812-.64.954 0 .142.072.466.64.955.571.491 1.504 1.016 2.818 1.494 2.617.951 6.365 1.58 10.603 1.58 4.238 0 7.986-.629 10.603-1.58 1.314-.478 2.247-1.003 2.818-1.494ZM16 11.636c8.837 0 16-2.605 16-5.818C32 2.605 24.837 0 16 0S0 2.605 0 5.818c0 3.213 7.163 5.818 16 5.818ZM2.994 23.962c-.816.629-1.055 1.166-1.055 1.551 0 .348.19.816.835 1.372.64.552 1.622 1.094 2.922 1.569 2.591.946 6.234 1.55 10.304 1.55s7.713-.604 10.304-1.55c1.3-.475 2.283-1.017 2.922-1.569.644-.556.835-1.024.835-1.372 0-.385-.239-.922-1.055-1.55-.8-.617-2.016-1.203-3.588-1.688l.558-1.911c1.69.521 3.141 1.192 4.192 2 1.035.797 1.832 1.853 1.832 3.15 0 1.168-.65 2.143-1.528 2.9-.881.762-2.1 1.402-3.52 1.92C24.103 31.376 20.231 32 16 32s-8.103-.625-10.952-1.665c-1.42-.519-2.639-1.16-3.52-1.92C.65 27.656 0 26.681 0 25.512c0-1.296.797-2.352 1.832-3.149 1.05-.808 2.502-1.479 4.192-2l.558 1.911c-1.572.486-2.787 1.071-3.588 1.688ZM7.938 13.07a.977.977 0 0 1-.317 1.333c-.67.416-.708.689-.708.719 0 .02.012.203.415.516.388.302 1.01.616 1.865.897 1.699.558 4.106.92 6.807.92 2.701 0 5.108-.362 6.807-.92.854-.281 1.477-.595 1.865-.897.402-.313.415-.496.415-.516 0-.03-.038-.303-.708-.719a.977.977 0 0 1-.317-1.333.95.95 0 0 1 1.315-.322c.818.508 1.623 1.286 1.623 2.374 0 .892-.55 1.577-1.164 2.055-.628.488-1.476.886-2.44 1.202-1.935.637-4.55 1.015-7.396 1.015-2.845 0-5.46-.378-7.397-1.015-.963-.316-1.811-.714-2.44-1.202C5.55 16.699 5 16.014 5 15.122c0-1.088.805-1.866 1.623-2.373a.95.95 0 0 1 1.315.321Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.938 16.949a.977.977 0 0 1-.317 1.333c-.67.415-.708.689-.708.718 0 .02.012.204.415.517.388.302 1.01.615 1.865.896 1.699.559 4.106.92 6.807.92 2.701 0 5.108-.361 6.807-.92.854-.28 1.477-.594 1.865-.896.402-.313.415-.497.415-.517 0-.03-.038-.303-.708-.718a.977.977 0 0 1-.317-1.333.95.95 0 0 1 1.315-.322C26.195 17.134 27 17.913 27 19c0 .892-.55 1.578-1.164 2.055-.628.489-1.476.887-2.44 1.203-1.935.637-4.55 1.015-7.396 1.015-2.845 0-5.46-.378-7.397-1.015-.963-.316-1.811-.714-2.44-1.203C5.55 20.578 5 19.892 5 19c0-1.087.805-1.866 1.623-2.373a.95.95 0 0 1 1.315.322Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.938 20.828a.977.977 0 0 1-.317 1.333c-.67.415-.708.689-.708.718 0 .02.012.203.415.516.388.302 1.01.616 1.865.897 1.699.559 4.106.92 6.807.92 2.701 0 5.108-.361 6.807-.92.854-.28 1.477-.595 1.865-.897.402-.313.415-.496.415-.516 0-.03-.038-.303-.708-.718a.977.977 0 0 1-.317-1.333.95.95 0 0 1 1.315-.322c.818.507 1.623 1.286 1.623 2.373 0 .892-.55 1.578-1.164 2.055-.628.488-1.476.886-2.44 1.203-1.935.637-4.55 1.014-7.396 1.014-2.845 0-5.46-.377-7.397-1.014-.963-.317-1.811-.715-2.44-1.203C5.55 24.457 5 23.771 5 22.88c0-1.087.805-1.866 1.623-2.373a.95.95 0 0 1 1.315.322ZM7.815 9.534c.276.457.257.711-.194.99-.67.416-.708.69-.708.719 0 .02.012.203.415.516.388.302 1.01.616 1.865.897 1.699.558 4.106.92 6.807.92 2.701 0 5.108-.362 6.807-.92.854-.281 1.477-.595 1.865-.897.402-.313.415-.496.415-.516 0-.03-.038-.303-.708-.719-.45-.279-.47-.533-.194-.99a.95.95 0 0 1 1.315-.322c.818.507 1.5.944 1.5 2.03 0 .893-.55 1.578-1.164 2.056-.628.488-1.476.886-2.44 1.203-1.935.636-4.55 1.014-7.396 1.014-2.845 0-5.46-.378-7.397-1.014-.963-.317-1.811-.715-2.44-1.203C5.55 12.82 5 12.135 5 11.243c0-1.087.682-1.524 1.5-2.03a.95.95 0 0 1 1.315.32ZM19.96 5.818c-1.01-.231-2.39-.388-3.96-.388-1.57 0-2.95.157-3.96.388 1.01.232 2.39.388 3.96.388 1.57 0 2.95-.157 3.96-.388ZM16 7.758c3.866 0 7-.869 7-1.94 0-1.07-3.134-1.94-7-1.94s-7 .87-7 1.94c0 1.071 3.134 1.94 7 1.94Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFull32;
