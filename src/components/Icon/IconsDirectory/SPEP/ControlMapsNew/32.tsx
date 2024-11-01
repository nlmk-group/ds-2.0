import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconControlMapsNew32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.198 22.985c.084.035.16.085.223.149l1.375 1.355a.677.677 0 0 1 .202.479.669.669 0 0 1-.202.479l-1.375 1.355a.689.689 0 0 1-.749.146.69.69 0 0 1-.372-.366.67.67 0 0 1 .15-.738l.2-.199H7.06a.693.693 0 0 1-.486-.198.672.672 0 0 1-.201-.48V8.314l-.202.198a.693.693 0 0 1-.97-.002.672.672 0 0 1-.002-.956l1.375-1.355A.688.688 0 0 1 7.06 6a.696.696 0 0 1 .486.198l1.375 1.355a.672.672 0 0 1 0 .958.693.693 0 0 1-.972 0l-.201-.198V24.29H24.65l-.202-.198a.676.676 0 0 1-.152-.74.677.677 0 0 1 .373-.368.698.698 0 0 1 .528.001ZM11.873 10.742h-1.375a.692.692 0 0 1-.486-.198.672.672 0 0 1 0-.958.693.693 0 0 1 .486-.199h1.375c.182 0 .357.072.486.199a.672.672 0 0 1 0 .958.692.692 0 0 1-.486.198Zm8.25 0h1.375a.692.692 0 0 0 .486-.198.672.672 0 0 0 0-.958.693.693 0 0 0-.486-.199h-1.375a.693.693 0 0 0-.486.199.672.672 0 0 0 0 .958.692.692 0 0 0 .486.198Zm-3.438 0h-1.374a.692.692 0 0 1-.487-.198.672.672 0 0 1 0-.958.693.693 0 0 1 .486-.199h1.376c.182 0 .357.072.486.199a.672.672 0 0 1 0 .958.692.692 0 0 1-.486.198Zm8.25 0h1.376a.692.692 0 0 0 .486-.198.672.672 0 0 0 0-.958.693.693 0 0 0-.486-.199h-1.375a.693.693 0 0 0-.487.199.672.672 0 0 0 0 .958.692.692 0 0 0 .486.198Zm-.87 3.206a1.734 1.734 0 0 1 2.43 0 1.68 1.68 0 0 1 0 2.395 1.723 1.723 0 0 1-1.932.337l-3.844 3.365a1.616 1.616 0 0 1-.129 1.35 1.704 1.704 0 0 1-.605.617 1.736 1.736 0 0 1-2.33-.522 1.676 1.676 0 0 1 .454-2.311l-.758-3.736a1.692 1.692 0 0 1-.171-.052l-4.089 4.476a1.672 1.672 0 0 1-.275 1.83 1.744 1.744 0 0 1-1.81.49 1.72 1.72 0 0 1-.81-.544 1.672 1.672 0 0 1-.198-1.84 1.7 1.7 0 0 1 .675-.698l-.342-3.029a1.716 1.716 0 0 1-.92-.679 1.674 1.674 0 0 1 .206-2.126 1.74 1.74 0 0 1 2.155-.235c.332.21.58.527.703.897s.112.77-.03 1.133-.747.637-.747.861l.28 2.478.026.008 4.089-4.476a1.674 1.674 0 0 1 .253-1.806c.212-.247.491-.428.804-.523a1.746 1.746 0 0 1 1.785.483 1.673 1.673 0 0 1 .31 1.797 1.702 1.702 0 0 1-.608.737l.758 3.735c.121.027.24.067.352.12l3.843-3.367a1.65 1.65 0 0 1-.091-.519c0-.449.181-.88.503-1.197Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconControlMapsNew32;