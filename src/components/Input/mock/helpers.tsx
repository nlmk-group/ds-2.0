import React from 'react';

import { IconAttentionWarningAlertOutlined16, IconCancelOutlined16, IconSuccessOutlined16 } from '@components/index';

import styles from '../_stories/Input.module.scss';

export const DefaultHelper = () => (
  <div className={styles['helper-text-wrapper']}>
    <IconSuccessOutlined16 />
    <div>Etiam ultricies non odio eu interdum</div>
  </div>
);

export const ErrorHelper = () => (
  <div className={styles['helper-text-wrapper']}>
    <IconCancelOutlined16 />
    <div>Etiam ultricies non odio eu interdum</div>
  </div>
);

export const WarningHelper = () => (
  <div className={styles['helper-text-wrapper']}>
    <IconAttentionWarningAlertOutlined16 />
    <div>Etiam ultricies non odio eu interdum</div>
  </div>
);

export const SuccessHelper = () => (
  <div className={styles['helper-text-wrapper']}>
    <IconSuccessOutlined16 />
    <div>Etiam ultricies non odio eu interdum</div>
  </div>
);
