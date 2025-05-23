import React, { ReactNode, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconEditPenOutlined24,
  IconEyeFilled24,
  IconEyeOffOutlined24,
  Input,
  Typography
} from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from './Drawer.module.scss';

import { IDrawerProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => {
  return <Story />;
};

interface Line {
  key: string;
  name: string;
  canAdd: boolean;
  visible: boolean;
  units: string;
}

export default {
  title: 'Components/Drawer/Stories',
  component: Drawer,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Drawer>;

// TODO: удалить после ревью
function moveItem<T>(array: T[], index1: number, index2: number): T[] {
  const newArray = [...array];
  const [item] = newArray.splice(index1, 1);
  newArray.splice(index2, 0, item);

  return newArray;
}

interface ChartLine {
  name: string;
  color: string;
  precision: number;
  units: string;
  max: number;
  min: number;
  description: string;
  legendName?: string;
  strokeDasharray?: string;
}

const LINES_CONFIG: Record<string, ChartLine> = {
  specific_coke_wet: {
    name: 'Уд. кокс. вл.',
    color: 'var(--spectrum-green-50)',
    precision: 1,
    units: ' кг/т',
    max: 400,
    min: 250,
    description: 'чистый расход кокса в подаче'
  }
};

export const DrawerDefault = (args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: удалить после ревью
  const search = '';
  const [changedVisibleLines, setChangedVisibleLines] = useState(['specific_coke_wet']);
  const [changedLinesOrder, setChangedLinesOrder] = useState([['specific_coke_wet']]);

  const lines: Line[][] = changedLinesOrder.map(lines =>
    lines.map(key => {
      const line = LINES_CONFIG[key];
      return {
        key,
        canAdd: true,
        visible: changedVisibleLines.includes(key),
        name: line.name + (line.units ? `, ${line.units}` : ''),
        units: line.units
      };
    })
  );

  const filteredLines = lines.map(lines =>
    lines.filter(line => line.name.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleVisible = (line: Line) => {
    if (changedVisibleLines.includes(line.key)) {
      setChangedVisibleLines(changedVisibleLines.filter(l => l !== line.key));
    } else if (line.canAdd) {
      setChangedVisibleLines([...changedVisibleLines, line.key]);
    } else {
      const linesByUnits = lines.find(l => l[0].units === line.units)?.map(l => l.key);
      setChangedVisibleLines(linesByUnits ?? []);
    }
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const index = Number(result.destination.droppableId);

    const groupedKeyLines = filteredLines.map(lines => lines.map(line => line.key));

    groupedKeyLines[index] = moveItem(groupedKeyLines[index], result.source.index, result.destination.index);

    setChangedLinesOrder(groupedKeyLines);
  };

  return (
    <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Typography color="primary">Содержимое Drawer</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
          </Box>
        </Box>

        {/* TODO: удалить после ревью */}
        <div>
          {filteredLines.map((lines, linesIndex) => (
            <DragDropContext onDragEnd={onDragEnd} key={linesIndex}>
              <Droppable droppableId={String(linesIndex)}>
                {provided => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {lines.map((line, index) => (
                      <Draggable key={line.key} draggableId={line.key} index={index}>
                        {provided => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={provided.draggableProps.style}
                            key={line.key}
                          >
                            <div key={line.key}>
                              <Button
                                color="ghost"
                                variant="secondary"
                                iconButton={
                                  line.visible ? (
                                    <IconEyeFilled24 color="primary" />
                                  ) : (
                                    <IconEyeOffOutlined24 color={line.canAdd ? 'primary' : 'action'} />
                                  )
                                }
                                onClick={() => {
                                  toggleVisible(line);
                                }}
                              ></Button>
                              <Button
                                color="ghost"
                                variant="secondary"
                                onClick={() => {
                                  toggleVisible(line);
                                }}
                              >
                                hello
                              </Button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ))}
        </div>
      </Drawer>
    </div>
  );
};
DrawerDefault.storyName = 'Drawer по умолчанию';

export const DrawerLeft = (args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer слева
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Typography color="primary">Drawer, открывающийся слева</Typography>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
DrawerLeft.storyName = 'Drawer слева';
DrawerLeft.args = {
  position: 'left'
};

export const DrawerWithoutCloseButton = (args: IDrawerProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer слева
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
      >
        <Box flexDirection="column" justifyContent="center" gap="20px">
          <Box alignItems="center" justifyContent="center">
            <Typography color="primary">Drawer, открывающийся слева</Typography>
          </Box>
          <Input label="Имя" />
          <Input label="Номер" />
          <Input label="Почта" />
          <Box justifyContent="space-between" alignItems="center">
            <Button type="button">Отправить</Button>
            <Button type="button" variant="secondary">
              Отменить
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
DrawerWithoutCloseButton.storyName = 'Drawer без крестика';
DrawerWithoutCloseButton.args = {
  isViewCloseButton: false
};

export const DrawerWithProfile = (args: IDrawerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть Drawer c примером профиля
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('drawerClosed')();
        }}
        className={styles['profile-drawer']}
      >
        <Box flexDirection="column" height="100%">
          <Box flexDirection="column" height="100%" px="24px">
            <Typography variant="Heading3">Профиль пользователя</Typography>
            <Box gap="16px" alignItems="center">
              <Avatar />
              <Typography variant="Body1-Medium">Иван Иванов</Typography>
            </Box>
            <Box style={{ display: 'flex', gap: '24px', flexDirection: 'column', flexGrow: '1' }}>
              <Input pseudo label="Email" value="maili@mail.com" />
              <Input pseudo label="Должность" value="Руководитель проекта" />
              <Input pseudo label="Отдел" value="Направление ИТ базовых процессов ТОиР" />
              <Input pseudo label="Полномочия" value="Не указано" />
            </Box>
          </Box>
          <Box
            style={{
              display: 'flex',
              gap: '8px',
              borderTop: '1px solid',
              borderColor: 'var(--unique-divider)',
              padding: '24px'
            }}
          >
            <Button startIcon={<IconEditPenOutlined24 />} type="button">
              Редактировать
            </Button>
            <Button type="button" variant="secondary">
              Закрыть
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
DrawerWithProfile.storyName = 'Drawer с примером профиля';
