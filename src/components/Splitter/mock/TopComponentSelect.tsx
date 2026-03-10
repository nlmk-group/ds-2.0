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
    <Box style={{ minWidth: 420, gap: 16, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="Body-Bold">Выберите сырье, чтобы открыть нижнюю панель</Typography>
      <SimpleSelect
        style={{ width: 350 }}
        label="Выбрать сырье"
        withPortal
        value={selected}
        onChange={value => {
          setSelected(value as string);
          setShowBottom(true);
        }}
      >
        {options.map(item => (
          <OptionItem key={item.value} value={item.value} label={item.label}>
            {item.label}
          </OptionItem>
        ))}
      </SimpleSelect>
    </Box>
  );
};
