import React from 'react';

import { Box, OptionItem, SimpleSelect, Typography } from '@components/index';

export const TopComponentSelect = ({
  setShowBottom,
  selected,
  setSelected,
  options
}: {
  setShowBottom: (value: boolean) => void;
  selected: string;
  setSelected: (value: string) => void;
  options: { value: string; label: string }[];
}) => {
  return (
    <Box width="100%" flexDirection="column" gap={12}>
      <Typography variant="Body-Bold">Выберите сырье, чтобы открыть справку</Typography>
      <SimpleSelect
        style={{ width: '100%', maxWidth: 350 }}
        label="Выбрать сырье"
        withPortal
        value={selected}
        onChange={value => {
          setSelected(value as string);
          setShowBottom(true);
        }}
      >
        {options.map(item => {
          const { label, value } = item;
          return (
            <OptionItem key={value} value={value} label={label}>
              {label}
            </OptionItem>
          );
        })}
      </SimpleSelect>
    </Box>
  );
};
