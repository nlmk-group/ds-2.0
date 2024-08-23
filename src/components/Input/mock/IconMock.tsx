import React, { FC } from 'react';

export interface IIconMockProps {
  weight?: string;
}

export const IconMock: FC<IIconMockProps> = ({ weight }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        minWidth: '32px',
        height: '32px',
        zIndex: 5,
        backgroundColor: 'transparent'
      }}
    >
      {weight}
    </div>
  );
};
