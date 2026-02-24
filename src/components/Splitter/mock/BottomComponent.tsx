import { Box, Button, PseudoInput, Tabs } from '@components/index';
import styles from '@components/_storybook/styles.module.scss';
import Tab from '@components/Tabs/subcomponents/Tab';
import React from 'react';

export const BottomComponent = ({ rawMaterial, setShowBottom }: { setShowBottom?: (value: boolean) => void; rawMaterial?: string }) => (
  <Box width={880} flexDirection="column" p={8}>
    <Box justifyContent="space-between" pt={16} pb={8}>
      <Tabs>
        <Tab label="Информация по позиции" active />
        <Tab label="Договор и заказ" />
      </Tabs>
      {setShowBottom && (
          <Button
            onClick={() => setShowBottom(false)}
          >
            Закрыть справку
          </Button>
      )}
    </Box>
    <Box flexDirection="column">
      {rawMaterial && (
        <PseudoInput label="Выбранное сырье" className={styles.line}>
          {rawMaterial}
        </PseudoInput>
      )}
      <PseudoInput label="Номер сертификата" className={styles.line}>
        54790
      </PseudoInput>
      <PseudoInput label="Дата сертификата" className={styles.line}>
        02.01.2025
      </PseudoInput>
      <PseudoInput label="Номер рулона/пачки/сляба" className={styles.line}>
        5
      </PseudoInput>
      <PseudoInput label="Номер плавки" className={styles.line}>
        2474107
      </PseudoInput>
    </Box>
  </Box>
);
