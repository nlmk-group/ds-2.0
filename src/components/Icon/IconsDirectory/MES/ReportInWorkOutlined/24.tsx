import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportInWorkOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19.5 22.5h-15A1.5 1.5 0 0 1 3 21V4.5A1.5 1.5 0 0 1 4.5 3h3.065a1.873 1.873 0 0 1 1.622-.938h.938c0-.62.84-1.124 1.875-1.124 1.036 0 1.875.503 1.875 1.125h.938A1.873 1.873 0 0 1 16.434 3H19.5A1.5 1.5 0 0 1 21 4.5V21a1.5 1.5 0 0 1-1.5 1.5Zm-.188-17.813H16.53a1.875 1.875 0 0 1-1.718 1.125H9.189A1.875 1.875 0 0 1 7.47 4.688H4.688v16.125h14.625V4.688Zm-5.037 4.497c.056.032.108.066.16.1l.471-.816c.29-.502.758-.637.931-.114.216.653.57 1.803.78 2.399a.745.745 0 0 1-.563.975c-.626.13-1.788.382-2.467.524-.506.105-.647-.38-.373-.851.115-.2.34-.594.473-.823-.052-.035-.106-.062-.162-.094a3.374 3.374 0 0 0-4.61 1.235c-.324.562-.465.802-.447 1.406l-1.5.375a4.867 4.867 0 0 1 7.307-4.316Zm-6.33 6.089c.627-.13 1.79-.383 2.468-.524.506-.105.647.38.373.851l-.473.823c.052.035.106.062.162.094a3.376 3.376 0 0 0 4.61-1.236c.324-.562.465-.802.448-1.406l1.499-.375a4.868 4.868 0 0 1-7.307 4.316c-.056-.032-.108-.066-.16-.1l-.471.816c-.29.502-.758.637-.931.114-.216-.653-.57-1.803-.78-2.399a.745.745 0 0 1 .563-.974Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportInWorkOutlined24;
