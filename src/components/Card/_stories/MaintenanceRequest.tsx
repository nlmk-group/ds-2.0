import React, { useState } from 'react';

import { Box, Button, Card, Typography } from '@components/index';

export default function MaintenanceRequest() {
  const [inProgress, setInProgress] = useState(false);

  return (
    <Card
      orientation="horizontal"
      indicatorStatus={inProgress ? 'info' : 'warning'}
      indicatorSize={inProgress ? 's' : 'l'}
    >
      <Box flexDirection="column" gap={8}>
        <Typography variant="Caption">Заявка ТО-214</Typography>
        <Typography variant="Heading4">Замена датчика давления</Typography>
        <Typography role="status">{inProgress ? 'В работе' : 'Ожидает исполнителя'}</Typography>
      </Box>
      <Box alignItems="center">
        <Button
          type="button"
          variant={inProgress ? 'secondary' : 'primary'}
          onClick={() => setInProgress(current => !current)}
        >
          {inProgress ? 'Вернуть в очередь' : 'Взять в работу'}
        </Button>
      </Box>
    </Card>
  );
}
