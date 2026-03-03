import React from 'react';

import { Box, Button, PseudoInput, Tabs } from '@components/index';
import styles from '@components/_storybook/styles.module.scss';
import Tab from '@components/Tabs/subcomponents/Tab';

interface BottomComponentProps {
  setShowBottom?: (value: boolean) => void;
  rawMaterial?: string;
  buttonPlacement?: 'top-right' | 'bottom';
  activeTab?: number;
  handleTab?: (tab: number) => void;
}

export const BottomComponent = ({ rawMaterial, setShowBottom, handleTab, buttonPlacement = 'top-right', activeTab = 1 }: BottomComponentProps) => (
  <Box width={880} flexDirection="column" p={8}>
    <Box justifyContent="space-between" pt={16} pb={8}>
      <Tabs>
        <Tab label="Информация по позиции" active={activeTab === 1} onClick={() => handleTab?.(1)} />
        <Tab label="Договор и заказ" active={activeTab === 2} onClick={() => handleTab?.(2)} />
        <Tab label="Позиции и характеристики" active={activeTab === 3} onClick={() => handleTab?.(3)} />
      </Tabs>
      {setShowBottom && buttonPlacement === 'top-right' && (
          <Button
            onClick={() => setShowBottom(false)}
          >
            Закрыть справку
          </Button>
      )}
    </Box>
    <Box flexDirection="column" gap={4}>
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
      {setShowBottom && buttonPlacement === 'bottom' && (
        <Button
          style={{ marginTop: 20 }}
          onClick={() => setShowBottom(false)}
        >
          Закрыть справку
        </Button>
      )}
    </Box>
  </Box>
);
