import React, { FC } from 'react';

export interface IIconMock {
  weight?: string;
}

export const IconMock: FC<IIconMock> = ({ weight }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        minWidth: '32px',
        height: '32px',
        color: 'var(--grey-900)',
        zIndex: 5
      }}
    >
      {weight}
    </div>
  );
};
