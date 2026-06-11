import React from 'react';

import Typography from '@components/Typography';

import styles from './TooltipExm.module.scss';

import Tooltip from '../index';

const tooltipTitle = 'Информационное сообщение';
const fullSizeStyle = { width: '100%', height: '100%', background: 'green' };
const fixedSizeStyle = { width: 200, height: 40, background: 'green' };
const triggerText = 'Текст контента';
const triggerContent = <Typography variant="Body-Medium">{triggerText}</Typography>;
const emptyTriggerContent = null;

export const TooltipExm = () => {
  return (
    <div className={styles.main}>
      <div className={styles.parentBlock}>
        <Tooltip title={tooltipTitle} stretch>
          {triggerContent}
        </Tooltip>
      </div>

      <div className={styles.parentBlock}>
        <Tooltip title={tooltipTitle} stretch className={styles.textLeft}>
          {triggerContent}
        </Tooltip>
      </div>

      <div>
        <Tooltip title={tooltipTitle} style={fixedSizeStyle}>
          {emptyTriggerContent}
        </Tooltip>
      </div>

      <Tooltip title={tooltipTitle} style={fullSizeStyle}>
        {emptyTriggerContent}
      </Tooltip>
    </div>
  );
};
