import React, { FC, useEffect, useState } from 'react';

import {
  Button,
  IconContentCopyOutlined16,
  IconContentCopyOutlined24,
  IconDoneCheckOutlined16,
  IconDoneCheckOutlined24,
  Tooltip,
  Typography
} from '@components/index';
import { copyToClipboard as copyUtils } from '@components/utils/copyToClipboard';

const CopyCodeButton: FC<{ code: string; label?: string; copiedLabel?: string; children?: React.ReactNode }> = ({
  code,
  label = 'Копировать код',
  copiedLabel = 'Код скопирован',
  children
}) => {
  const [copies, setCopies] = useState(0);
  const isCopied = copies > 0;
  const actionLabel = isCopied ? copiedLabel : label;
  const CommandIcon = isCopied ? IconDoneCheckOutlined16 : IconContentCopyOutlined16;
  const ToolbarIcon = isCopied ? IconDoneCheckOutlined24 : IconContentCopyOutlined24;

  useEffect(() => {
    if (!isCopied) return;
    const timer = window.setTimeout(() => setCopies(0), 2000);
    return () => window.clearTimeout(timer);
  }, [copies, isCopied]);

  return (
    <Tooltip render={<Typography variant="Body2-Bold">{actionLabel}</Typography>}>
      <Button
        type="button"
        color={children ? 'grey' : 'ghost'}
        variant={children ? 'secondary' : 'primary'}
        size={children ? 's' : 'm'}
        aria-label={children ? `${actionLabel}: ${code}` : actionLabel}
        iconButton={children ? undefined : <ToolbarIcon />}
        endIcon={children ? <CommandIcon /> : undefined}
        onClick={() => copyUtils(code, () => setCopies(count => count + 1))}
      >
        {children}
      </Button>
    </Tooltip>
  );
};

export default CopyCodeButton;
