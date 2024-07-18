import React, { ReactNode, useState } from 'react';

import DatePicker from '@components/DatePicker';
import { Box, Button, Input, Select, Typography } from '@components/index';
import { options } from '@components/Select/_stories/mocks';
import { TSelected } from '@components/Select/types';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from './Modal.module.scss';

import Modal from '..';
import { IModalProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => {
  return (
    <Box className={styles.wrapper} alignItems="center" justifyContent="center">
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/Modal/Stories',
  component: Modal,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Modal>;

export const ModalDefault = (argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
      <Modal
        {...argsTypes}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('modalClosed')();
        }}
      >
        <Typography color="primary">Содержимое модального окна</Typography>
      </Modal>
    </div>
  );
};
ModalDefault.storyName = 'Модальное окно по умолчанию';

export const DraggableModal = (argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Открыть перетаскиваемое модальное окно</Button>
      <Modal
        {...argsTypes}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('modalClosed')();
        }}
      >
        <Typography color="primary">Это перетаскиваемое модальное окно.</Typography>
      </Modal>
    </div>
  );
};
DraggableModal.storyName = 'Перетаскиваемое модальное окно';
DraggableModal.args = { isDraggable: true };

export const ResizableModal = (argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно изменяемого размера</Button>
      <Modal
        {...argsTypes}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('modalClosed')();
        }}
      >
        <Typography color="primary" style={{ marginBottom: '10px' }}>
          Это модальное окно изменяемого размера.
        </Typography>
        <DatePicker withPortal value={value} onChange={onChange} />
        <Select
          options={options}
          selected={selected}
          onSelectionChange={setSelected}
          withPortal
          style={{ marginTop: '10px' }}
        />
        <Input style={{ marginTop: '10px' }} />
      </Modal>
    </div>
  );
};
ResizableModal.storyName = 'Модальное окно изменяемого размера';
ResizableModal.args = { isResizable: true };
