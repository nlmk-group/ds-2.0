import { FC, useCallback, useState } from 'react';
import { copyToClipboard as copyUtils } from '@components/utils/copyToClipboard';
import { Button, IconContentCopyOutlined24, Tooltip, Typography } from '@components/index';
import React from 'react';

const CopyCodeButton: FC<{ code: string }> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    copyUtils(code, () => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });

  }, [code]);

  return (
    <Tooltip render={<Typography variant="Body2-Bold">{isCopied ? 'Скопировано' : 'Копировать'}</Typography>}>
      <Button
        type="button"
        color="ghost"
        variant="primary"
        iconButton={<IconContentCopyOutlined24 />}
        onClick={copyToClipboard}
      />
    </Tooltip>
  );
};

export default CopyCodeButton;