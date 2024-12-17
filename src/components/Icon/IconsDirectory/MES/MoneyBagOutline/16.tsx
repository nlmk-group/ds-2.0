import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoneyBagOutline16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.966 1h.068c.585 0 1.072 0 1.46.052.409.055.779.176 1.076.474.298.297.419.667.474 1.076.038.285.048.625.051 1.017.42.014.795.039 1.128.083.763.103 1.382.32 1.87.808.488.488.704 1.107.807 1.87.1.743.1 1.692.1 2.89v.068c0 1.196 0 2.143-.1 2.885-.102.763-.319 1.382-.807 1.87-.488.488-1.107.704-1.87.807-.743.1-1.692.1-2.89.1H6.662c-1.196 0-2.143 0-2.885-.1-.763-.102-1.382-.319-1.87-.807-.488-.488-.704-1.107-.807-1.87C1 11.48 1 10.53 1 9.333v-.069c0-1.195 0-2.143.1-2.884.102-.764.319-1.382.807-1.87.488-.488 1.107-.705 1.87-.807.333-.045.708-.07 1.128-.084a8.38 8.38 0 0 1 .051-1.017c.055-.409.176-.779.474-1.076.297-.298.667-.419 1.076-.474C6.894 1 7.381 1 7.966 1ZM5.892 3.604l.775-.001h3.441a7.27 7.27 0 0 0-.042-.869c-.04-.3-.11-.427-.194-.51-.083-.084-.21-.154-.51-.194-.314-.042-.734-.043-1.362-.043-.628 0-1.048 0-1.362.043-.3.04-.427.11-.51.194-.084.083-.154.21-.194.51-.03.224-.04.501-.042.87Zm6.2 1.076c-.669-.09-1.55-.09-2.79-.09H6.698c-1.241 0-2.122 0-2.79.09-.654.089-1.03.254-1.304.528s-.44.65-.527 1.303c-.09.669-.091 1.55-.091 2.79 0 1.241.001 2.122.091 2.79.088.654.253 1.03.527 1.304s.65.44 1.304.527c.668.09 1.549.091 2.79.091H9.3c1.241 0 2.122-.001 2.79-.091.654-.088 1.03-.253 1.304-.527s.44-.65.527-1.304c.09-.668.091-1.549.091-2.79 0-1.24-.001-2.121-.091-2.79-.088-.653-.253-1.03-.527-1.304s-.65-.439-1.304-.527Zm-5.765 1.2h2.446a1.876 1.876 0 1 1 0 3.752H7.314v.803h1.418v.986H7.314v1.174h-.987v-1.174H5.48v-.986h.848v-.803H5.48v-.987h.848V5.88Zm.987 2.765h1.459a.89.89 0 0 0 0-1.778H7.314v1.778Z"
        fill={htmlColor || '#1952B6'}
      />
    </svg>
  );
};

export default IconMoneyBagOutline16;