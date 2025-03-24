import React, { ReactNode, useState } from 'react';

import DatePicker from '@components/DatePicker';
import {
  Box,
  Button,
  Dropdown,
  DropdownMenuItem,
  Input,
  OptionItem,
  SimpleSelect,
  Typography
} from '@components/index';
import { positions } from '@components/Select/_stories/mocks';
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

const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
];

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
        <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
      </Modal>
    </div>
  );
};
ModalDefault.storyName = 'Модальное окно по умолчанию';

export const ModalScroll = (argsTypes: IModalProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis quam sed sollicitudin aliquam. In
      gravida aliquam nisl at commodo. In vitae blandit orci. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos. Nullam quis consequat libero. Mauris metus tellus, porta a egestas sit
      amet, rhoncus at velit. In cursus mi leo, eget tristique metus sagittis ac. Donec ultricies tortor lacus, nec
      sagittis ligula lobortis et. In finibus efficitur massa eget porta. Sed condimentum nulla at orci fringilla, in
      auctor tortor dignissim. Nulla facilisi. Vestibulum non blandit sem. Nunc felis orci, vulputate quis quam ac,
      blandit auctor felis. Nullam eros ligula, tempus in tincidunt sed, pulvinar sit amet justo. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum nisl, et vulputate leo.
      Proin egestas nulla leo, in tincidunt lorem auctor sed. Suspendisse vitae nulla sagittis, cursus mauris eu,
      eleifend ex. Morbi tincidunt, odio nec tristique aliquam, lacus massa ullamcorper tortor, et venenatis purus orci
      lacinia arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus
      non tempor mi. Aliquam cursus metus sit amet ante porta placerat. Pellentesque habitant morbi tristique senectus
      et netus et malesuada fames ac turpis egestas. Maecenas eget lorem nulla. Phasellus porta nisi vel facilisis
      pellentesque. Vestibulum quis libero ante. Praesent pretium consectetur viverra. Nam imperdiet ipsum nec felis
      laoreet malesuada. Vivamus ornare ipsum ac nibh faucibus, sit amet pellentesque erat auctor. Vestibulum ac ligula
      vel quam consequat iaculis. Fusce malesuada nisl ut cursus varius. Donec non enim a risus dignissim ultricies sit
      amet ut ligula. Morbi dapibus libero ultricies, efficitur tortor ac, sodales nulla. Sed velit massa, gravida vel
      lectus sed, blandit rhoncus mauris. Nullam varius erat lectus, et commodo nisi condimentum ut. Curabitur in
      accumsan enim, ac viverra ante. Etiam pulvinar, felis non placerat varius, felis nulla malesuada est, in
      condimentum eros eros eu lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Proin congue diam eget odio viverra, et molestie massa efficitur. Donec fringilla tortor orci, eget dictum
      sapien interdum blandit. Vestibulum sit amet erat nec magna placerat facilisis. Nullam elementum vehicula neque,
      fringilla posuere erat tincidunt non. Fusce vel viverra sem. Duis hendrerit ut neque ut commodo. Nullam ut sem vel
      magna consectetur porta. Nunc eget velit lacus. Aliquam id lectus ac nunc pharetra rutrum eget placerat diam.
      Nulla nec urna massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis quam sed
      sollicitudin aliquam. In gravida aliquam nisl at commodo. In vitae blandit orci. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis consequat libero. Mauris metus tellus,
      porta a egestas sit amet, rhoncus at velit. In cursus mi leo, eget tristique metus sagittis ac. Donec ultricies
      tortor lacus, nec sagittis ligula lobortis et. In finibus efficitur massa eget porta. Sed condimentum nulla at
      orci fringilla, in auctor tortor dignissim. Nulla facilisi. Vestibulum non blandit sem. Nunc felis orci, vulputate
      quis quam ac, blandit auctor felis. Nullam eros ligula, tempus in tincidunt sed, pulvinar sit amet justo.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum nisl,
      et vulputate leo. Proin egestas nulla leo, in tincidunt lorem auctor sed. Suspendisse vitae nulla sagittis, cursus
      mauris eu, eleifend ex. Morbi tincidunt, odio nec tristique aliquam, lacus massa ullamcorper tortor, et venenatis
      purus orci lacinia arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      Phasellus non tempor mi. Aliquam cursus metus sit amet ante porta placerat. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Maecenas eget lorem nulla. Phasellus porta nisi vel
      facilisis pellentesque. Vestibulum quis libero ante. Praesent pretium consectetur viverra. Nam imperdiet ipsum nec
      felis laoreet malesuada. Vivamus ornare ipsum ac nibh faucibus, sit amet pellentesque erat auctor. Vestibulum ac
      ligula vel quam consequat iaculis. Fusce malesuada nisl ut cursus varius. Donec non enim a risus dignissim
      ultricies sit amet ut ligula. Morbi dapibus libero ultricies, efficitur tortor ac, sodales nulla. Sed velit massa,
      gravida vel lectus sed, blandit rhoncus mauris. Nullam varius erat lectus, et commodo nisi condimentum ut.
      Curabitur in accumsan enim, ac viverra ante. Etiam pulvinar, felis non placerat varius, felis nulla malesuada est,
      in condimentum eros eros eu lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Proin congue diam eget odio viverra, et molestie massa efficitur. Donec fringilla tortor orci, eget
      dictum sapien interdum blandit. Vestibulum sit amet erat nec magna placerat facilisis. Nullam elementum vehicula
      neque, fringilla posuere erat tincidunt non. Fusce vel viverra sem. Duis hendrerit ut neque ut commodo. Nullam ut
      sem vel magna consectetur porta. Nunc eget velit lacus. Aliquam id lectus ac nunc pharetra rutrum eget placerat
      diam. Nulla nec urna massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis quam
      sed sollicitudin aliquam. In gravida aliquam nisl at commodo. In vitae blandit orci. Class aptent taciti sociosqu
      ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis consequat libero. Mauris metus tellus,
      porta a egestas sit amet, rhoncus at velit. In cursus mi leo, eget tristique metus sagittis ac. Donec ultricies
      tortor lacus, nec sagittis ligula lobortis et. In finibus efficitur massa eget porta. Sed condimentum nulla at
      orci fringilla, in auctor tortor dignissim. Nulla facilisi. Vestibulum non blandit sem. Nunc felis orci, vulputate
      quis quam ac, blandit auctor felis. Nullam eros ligula, tempus in tincidunt sed, pulvinar sit amet justo.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non vestibulum nisl,
      et vulputate leo. Proin egestas nulla leo, in tincidunt lorem auctor sed. Suspendisse vitae nulla sagittis, cursus
      mauris eu, eleifend ex. Morbi tincidunt, odio nec tristique aliquam, lacus massa ullamcorper tortor, et venenatis
      purus orci lacinia arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      Phasellus non tempor mi. Aliquam cursus metus sit amet ante porta placerat. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Maecenas eget lorem nulla. Phasellus porta nisi vel
      facilisis pellentesque. Vestibulum quis libero ante. Praesent pretium consectetur viverra. Nam imperdiet ipsum nec
      felis laoreet malesuada. Vivamus ornare ipsum ac nibh faucibus, sit amet pellentesque erat auctor. Vestibulum ac
      ligula vel quam consequat iaculis. Fusce malesuada nisl ut cursus varius. Donec non enim a risus dignissim
      ultricies sit amet ut ligula. Morbi dapibus libero ultricies, efficitur tortor ac, sodales nulla. Sed velit massa,
      gravida vel lectus sed, blandit rhoncus mauris. Nullam varius erat lectus, et commodo nisi condimentum ut.
      Curabitur in accumsan enim, ac viverra ante. Etiam pulvinar, felis non placerat varius, felis nulla malesuada est,
      in condimentum eros eros eu lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Proin congue diam eget odio viverra, et molestie massa efficitur. Donec fringilla tortor orci, eget
      dictum sapien interdum blandit. Vestibulum sit amet erat nec magna placerat facilisis. Nullam elementum vehicula
      neque, fringilla posuere erat tincidunt non. Fusce vel viverra sem. Duis hendrerit ut neque ut commodo. Nullam ut
      sem vel magna consectetur porta. Nunc eget velit lacus. Aliquam id lectus ac nunc pharetra rutrum eget placerat
      diam. Nulla nec urna massa.
      <Modal
        {...argsTypes}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('modalClosed')();
        }}
      >
        <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
      </Modal>
    </div>
  );
};
ModalScroll.storyName = 'Открытие модального окна убирает скролл на странице';
ModalScroll.args = { disablePageScroll: true };

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
  const [selected, setSelected] = useState('');

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
        <SimpleSelect
          value={selected}
          onChange={newValue => {
            setSelected(newValue as string);
          }}
          withPortal
        >
          {options.map(({ value, label, disabled }) => (
            <OptionItem key={value} value={value} label={label} disabled={disabled}>
              <Typography variant="Body1-Medium">{label}</Typography>
            </OptionItem>
          ))}
        </SimpleSelect>
        <Input style={{ marginTop: '10px' }} />
        <div style={{ position: 'relative', marginTop: '10px' }}>
          <Dropdown buttonChildren="Dropdown Button" size="m" menuStyle={{ width: '200px' }} withPortal>
            {positions.map(({ value, disabled }) => (
              <DropdownMenuItem
                key={value}
                value={value}
                disabled={disabled}
                onClick={() => {
                  console.log(value);
                }}
              >
                <Typography variant="Body1-Medium">{value}</Typography>
              </DropdownMenuItem>
            ))}
          </Dropdown>
        </div>
      </Modal>
    </div>
  );
};
ResizableModal.storyName = 'Модальное окно изменяемого размера';
ResizableModal.args = { isResizable: true };
