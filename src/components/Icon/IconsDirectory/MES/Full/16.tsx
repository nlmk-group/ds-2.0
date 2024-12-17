import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFull16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={classes} width="16" height="16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.71 3.386c.285-.244.32-.406.32-.477 0-.07-.035-.233-.32-.477-.285-.246-.751-.508-1.409-.747C11.993 1.209 10.12.895 8 .895s-3.993.314-5.301.79c-.658.239-1.124.501-1.41.747-.284.244-.32.406-.32.477 0 .071.036.233.32.477.286.246.752.508 1.41.747 1.308.476 3.182.79 5.301.79s3.993-.314 5.301-.79c.658-.239 1.124-.501 1.41-.747ZM8 5.818c4.418 0 8-1.302 8-2.909C16 1.302 12.418 0 8 0S0 1.302 0 2.91c0 1.606 3.582 2.908 8 2.908ZM1.497 11.981c-.408.314-.527.583-.527.776 0 .173.095.407.417.686.32.276.811.547 1.461.784 1.296.473 3.117.775 5.152.775s3.856-.302 5.152-.775c.65-.237 1.141-.508 1.461-.784.322-.279.417-.513.417-.686 0-.193-.119-.462-.527-.776-.4-.308-1.008-.6-1.794-.843l.279-.956c.845.26 1.57.596 2.096 1 .517.398.916.926.916 1.575 0 .584-.325 1.072-.764 1.45-.44.38-1.05.701-1.76.96-1.424.52-3.36.833-5.476.833-2.115 0-4.052-.312-5.476-.832-.71-.26-1.32-.58-1.76-.96C.325 13.827 0 13.34 0 12.756c0-.649.399-1.177.916-1.575.525-.404 1.251-.74 2.096-1l.279.956c-.786.242-1.394.535-1.794.843ZM3.97 6.535a.489.489 0 0 1-.16.667c-.335.207-.353.344-.353.359 0 .01.006.101.207.258.194.15.505.308.933.448.849.28 2.052.46 3.403.46 1.35 0 2.554-.18 3.403-.46.428-.14.739-.297.933-.448.201-.157.207-.248.207-.258 0-.015-.018-.152-.354-.36a.489.489 0 0 1-.158-.666.475.475 0 0 1 .657-.16c.41.253.812.642.812 1.186 0 .446-.275.789-.582 1.027-.314.244-.738.443-1.22.602-.968.318-2.275.507-3.698.507s-2.73-.189-3.698-.507c-.482-.159-.906-.358-1.22-.602-.307-.238-.582-.581-.582-1.027 0-.544.403-.933.812-1.187a.475.475 0 0 1 .657.161Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.97 8.474a.489.489 0 0 1-.16.667c-.335.208-.353.344-.353.36 0 .01.006.1.207.257.194.151.505.308.933.449.849.279 2.052.46 3.403.46 1.35 0 2.554-.181 3.403-.46.428-.14.739-.298.933-.449.201-.156.207-.248.207-.258 0-.015-.018-.151-.354-.359a.489.489 0 0 1-.158-.667.475.475 0 0 1 .657-.16c.41.253.812.643.812 1.186 0 .446-.275.789-.582 1.028-.314.244-.738.443-1.22.601-.968.318-2.275.507-3.698.507s-2.73-.189-3.698-.507c-.482-.158-.906-.357-1.22-.601-.307-.239-.582-.582-.582-1.028 0-.543.403-.933.812-1.186a.475.475 0 0 1 .657.16Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.97 10.414a.489.489 0 0 1-.16.666c-.335.208-.353.345-.353.36 0 .01.006.101.207.258.194.15.505.308.933.448.849.28 2.052.46 3.403.46 1.35 0 2.554-.18 3.403-.46.428-.14.739-.297.933-.448.201-.157.207-.248.207-.258 0-.015-.018-.152-.354-.36a.489.489 0 0 1-.158-.666.475.475 0 0 1 .657-.16c.41.253.812.642.812 1.186 0 .446-.275.788-.582 1.027-.314.244-.738.443-1.22.601-.968.319-2.275.508-3.698.508s-2.73-.19-3.698-.508c-.482-.158-.906-.357-1.22-.6-.307-.24-.582-.582-.582-1.028 0-.544.403-.933.812-1.187a.475.475 0 0 1 .657.16ZM3.908 4.767c.137.228.128.356-.097.495-.336.208-.354.345-.354.36 0 .01.006.101.207.257.194.151.505.308.933.449.849.28 2.052.46 3.403.46 1.35 0 2.554-.18 3.403-.46.428-.14.739-.298.933-.449.201-.156.207-.248.207-.258 0-.014-.018-.151-.354-.359-.225-.14-.234-.267-.097-.495a.475.475 0 0 1 .658-.16c.41.253.75.47.75 1.014 0 .446-.275.79-.582 1.028-.314.244-.738.443-1.22.601-.968.319-2.275.508-3.698.508s-2.73-.19-3.698-.508c-.482-.158-.906-.357-1.22-.601C2.775 6.41 2.5 6.067 2.5 5.62c0-.543.34-.761.75-1.015a.475.475 0 0 1 .658.16ZM9.98 2.91c-.505-.117-1.195-.195-1.98-.195-.785 0-1.475.078-1.98.194.505.116 1.195.194 1.98.194.785 0 1.475-.078 1.98-.194ZM8 3.878c1.933 0 3.5-.434 3.5-.97 0-.535-1.567-.97-3.5-.97s-3.5.435-3.5.97c0 .536 1.567.97 3.5.97Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFull16;