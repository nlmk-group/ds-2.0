import React, { ReactNode, useState } from 'react';

import { Button, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import styles from './Modal.module.scss';

import Modal from '..';
import { IModalProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Modal/Stories',
  component: Modal,
  decorators: [withDesign, withWrapper],
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
        <Typography color="primary">Это модальное окно изменяемого размера.</Typography>
      </Modal>
    </div>
  );
};
ResizableModal.storyName = 'Модальное окно изменяемого размера';
ResizableModal.args = { isResizable: true };
