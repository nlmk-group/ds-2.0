import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { Icon } from '@components/Icon';
import { clsx } from 'clsx';

import { ISmallIcon } from './types';

import styles from './DragAndDrop.module.scss';

import { smallIconMapping } from './enums';
import UploadIcon from './UploadIcon';

const SmallIcon: FC<ISmallIcon> = ({ loading, percentUpload, statusColor, customIcon }) => {
  return (
    <div
      className={clsx(styles['icon-s'], styles['small-icon-margin'])}
      data-testid={`SMALL_ICON_${smallIconMapping[statusColor]}`}
    >
      {loading ? (
        <UploadIcon smallIcon showSpinner={false} size={sizesMapping.m} percentUpload={percentUpload} />
      ) : (
        customIcon || <Icon name={smallIconMapping[statusColor]} />
      )}
    </div>
  );
};

export default SmallIcon;
