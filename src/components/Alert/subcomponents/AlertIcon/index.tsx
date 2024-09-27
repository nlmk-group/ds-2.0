import React, { FC } from 'react';
import { IAlertIconProps } from './types';
import { EAlertSeverity } from '@components/Alert/enums';
import { Icon } from '@root/src/components';
import {TIconName} from '@components/Icon/IconsDirectory/unionType';

const severityStyles: Record<EAlertSeverity, string> = {
  [EAlertSeverity.success]: 'var(--spectrum-green-60)',
  [EAlertSeverity.error]: 'var(--spectrum-red-60)',
  [EAlertSeverity.warning]: 'var(--spectrum-orange-60)',
  [EAlertSeverity.info]: 'var(--spectrum-sky-60)'
};

const iconNames: Record<EAlertSeverity, TIconName> = {
  [EAlertSeverity.success]: 'IconSuccessOutlined24',
  [EAlertSeverity.error]: 'IconAttentionWarningAlertErrorOutlined24',
  [EAlertSeverity.warning]: 'IconAttentionWarningAlertErrorOutlined24',
  [EAlertSeverity.info]: 'IconInfoOutlined24'
};

const AlertIcon: FC<IAlertIconProps> = ({ severity= EAlertSeverity.success }) => {
  const htmlColor = severityStyles[severity];
  const iconName = iconNames[severity];
  return <Icon name={iconName} htmlColor={htmlColor} />;
};

export default AlertIcon;
