import React from 'react';

import { Box, Button, Tabs, Typography } from '@components/index';

interface BottomComponentProps {
  setShowBottom?: (value: boolean) => void;
  rawMaterial?: string;
  buttonPlacement?: 'top-right' | 'bottom';
  activeTab?: number;
  handleTab?: (tab: number) => void;
}

export const BottomComponent = ({
  rawMaterial,
  setShowBottom,
  handleTab,
  buttonPlacement = 'top-right',
  activeTab = 1
}: BottomComponentProps) => {
  const fieldsByTab = [
    [
      ['Номер сертификата', '54790'],
      ['Дата сертификата', '02.01.2025'],
      ['Номер рулона', '5']
    ],
    [
      ['Заказ', '4827'],
      ['Поставщик', 'ПАО НЛМК']
    ],
    [
      ['Группа продукции', rawMaterial || 'Прокат'],
      ['Толщина', '2 мм']
    ]
  ];
  const fields = fieldsByTab[activeTab - 1] ?? fieldsByTab[0];
  const close = setShowBottom && (
    <Button type="button" size="s" variant="secondary" onClick={() => setShowBottom(false)}>
      Закрыть справку
    </Button>
  );

  return (
    <Box width="100%" flexDirection="column" gap={16} p={12} st={{ boxSizing: 'border-box', overflowWrap: 'anywhere' }}>
      {handleTab ? (
        <Tabs>
          {['Позиция', 'Заказ', 'Параметры'].map((label, index) => (
            <Tabs.Tab key={label} label={label} active={activeTab === index + 1} onClick={() => handleTab(index + 1)} />
          ))}
        </Tabs>
      ) : (
        <Typography variant="Heading4">Паспорт позиции</Typography>
      )}
      {buttonPlacement === 'top-right' && close && <Box justifyContent="flex-end">{close}</Box>}
      {rawMaterial && <Typography>{rawMaterial}</Typography>}
      {fields.map(([label, value]) => (
        <Box key={label} flexDirection="column" gap={2}>
          <Typography variant="Body2-Medium" color="var(--steel-70)">
            {label}
          </Typography>
          <Typography>{value}</Typography>
        </Box>
      ))}
      {buttonPlacement === 'bottom' && close && <Box>{close}</Box>}
    </Box>
  );
};
