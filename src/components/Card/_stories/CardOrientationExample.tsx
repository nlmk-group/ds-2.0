import React from 'react';

import { Box, Card, Typography } from '@components/index';

export default function CardOrientationExample() {
  return (
    <Box flexWrap="wrap" alignItems="flex-start" justifyContent="center" gap={24}>
      {(['vertical', 'horizontal'] as const).map(orientation => (
        <Box key={orientation} flexDirection="column" alignItems="stretch" gap={8} maxWidth="100%">
          <Typography variant="Caption">
            {orientation === 'vertical' ? 'Вертикальная · полоса сверху' : 'Горизонтальная · полоса слева'}
          </Typography>
          <Card orientation={orientation} indicatorStatus="info" indicatorSize="m">
            <Box flexDirection="column" gap={4}>
              <Typography variant="Heading4">Линия резки № 3</Typography>
              <Typography>План на смену</Typography>
            </Box>
            <Typography variant="Heading3">48 т</Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
