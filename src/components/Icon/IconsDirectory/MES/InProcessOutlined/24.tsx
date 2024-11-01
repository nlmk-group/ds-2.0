import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInProcessOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M22.882 12.009c-.685.737-1.882 2.077-2.502 2.744a.727.727 0 0 1-1.014-.004 146.55 146.55 0 0 1-2.495-2.737c-.278-.31 0-.762.383-.762h.871c0-2.723-1.681-4.27-2.575-4.909-.288-.207-.25-.616-.047-.844.327-.367 1.247-.372 1.247-.372s-.138-1.408.375-1.5a.916.916 0 0 1 .684.137c2.316 1.717 3.816 4.373 3.816 7.488h.878c.384 0 .627.492.379.759ZM21 12a.333.333 0 0 1-.375-.37v-.38c0-2.539-1.113-4.709-2.878-6.25-.122-.107-.122.125-.122.125V6h-.75s-.277-.016-.13.11a6.678 6.678 0 0 1 2.38 5.14v.373c0 .255-.128.377-.372.377h-.503l1.625 1.75L21.5 12H21Zm-8.988-4.88c-.31.278-.76 0-.76-.383v-.873c-2.72 0-4.263 1.684-4.903 2.58-.206.288-.615.25-.843.047-.366-.328-.371-1.25-.371-1.25s-1.406.139-1.498-.375a.92.92 0 0 1 .137-.686c1.715-2.32 4.367-3.822 7.477-3.822v-.88c0-.385.491-.628.758-.38.737.687 2.074 1.886 2.74 2.507a.73.73 0 0 1-.004 1.016c-.674.642-1.982 1.829-2.732 2.5ZM12 2.484v.501a.334.334 0 0 1-.37.376h-.379c-2.535 0-4.702 1.114-6.242 2.883-.106.122.125.122.125.122h.874v.751s-.016.278.11.13a6.66 6.66 0 0 1 5.133-2.384h.373c.254 0 .376.128.376.373v.504l1.748-1.628L12 2.483ZM4.634 9.251a150.14 150.14 0 0 1 2.496 2.737c.277.31 0 .762-.384.762h-.871c0 2.723 1.681 4.269 2.575 4.909.288.207.25.616.047.844-.327.366-1.247.372-1.247.372s.138 1.408-.375 1.5a.916.916 0 0 1-.684-.137c-2.316-1.717-3.816-4.373-3.816-7.488h-.877c-.385 0-.628-.492-.38-.759C1.803 11.254 3 9.914 3.62 9.247a.728.728 0 0 1 1.014.004ZM2.5 12H3a.332.332 0 0 1 .375.37v.38c0 2.539 1.113 4.709 2.878 6.25.122.107.122-.125.122-.125V18h.75s.277.016.13-.11a6.678 6.678 0 0 1-2.38-5.14v-.373c0-.255.128-.377.372-.377h.503l-1.625-1.75L2.5 12Zm9.488 4.88c.31-.278.76 0 .76.383v.873c2.72 0 4.263-1.684 4.903-2.58.206-.288.615-.25.843-.047.366.328.371 1.25.371 1.25s1.406-.139 1.498.375a.919.919 0 0 1-.137.685c-1.715 2.32-4.367 3.823-7.477 3.823v.878c0 .386-.491.629-.758.38-.737-.686-2.074-1.885-2.74-2.505a.73.73 0 0 1 .004-1.016c.674-.642 1.982-1.829 2.732-2.5ZM12 21.516v-.501a.334.334 0 0 1 .37-.375h.379c2.535 0 4.702-1.114 6.242-2.884.106-.122-.125-.122-.125-.122h-.874v-.751s.016-.277-.11-.13a6.657 6.657 0 0 1-5.133 2.383h-.373c-.254 0-.376-.127-.376-.372v-.504l-1.748 1.628L12 21.517Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInProcessOutlined24;