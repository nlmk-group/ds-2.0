import React, { useState } from 'react';

import Alert from '@components/Alert';
import Grid from '@components/Grid';
import Modal from '@components/Modal';
import SlideToggle from '@components/SlideToggle';
import Typography from '@components/Typography';

import s from './SelectExm.module.scss';

import Select from '..';
import { TSelected } from '../types';
import { selectExampleItems } from './constants';

export const SelectExm = () => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [open, setOpen] = useState<boolean>(true);

  const handleSelectionChange = (nextSelected: TSelected) => {
    setSelected(nextSelected);
  };

  const handleBlur = () => {
    const values = (selected || []) as string[];
    setSelected(values || []);
  };

  return (
    <Modal isOpen={open} onClose={() => setOpen(true)} disableBackdropClick>
      <div className={s.root}>
        <Typography variant="Heading2" style={{ marginBottom: '32px' }}>
          Редактировать удостоверение
        </Typography>
        <div className={s.main}>
          <SlideToggle
            title="Показатели качества"
            defaultOpen
            className={s.row}
            after={
              <div style={{ width: 200 }} onClick={e => e.stopPropagation()}>
                <Select
                  selected={selected || []}
                  label="Индикаторы"
                  onSelectionChange={handleSelectionChange}
                  onBlur={handleBlur}
                  multiple
                  options={selectExampleItems}
                  isSearchable
                  scrollingItems={5}
                  withPortal
                />
              </div>
            }
          >
            <Grid container>
              <Alert
                severity="info"
                title="Заполняется отделом технического контроля для ввода предварительного качества по углям. Используется в формах MES и отчетах по дозировке, пока не придут данные из ИС Лаборатории"
              />
            </Grid>
            <p>Test text 1</p>
            <p>Test text 2</p>
            <p>Test text 3</p>
            <p>Test text 4</p>
          </SlideToggle>
          <SlideToggle
            title="Показатели качества"
            defaultOpen
            className={s.row}
            after={
              <div style={{ width: 200 }} onClick={e => e.stopPropagation()}>
                <Select
                  selected={selected || []}
                  label="Индикаторы"
                  onSelectionChange={handleSelectionChange}
                  onBlur={handleBlur}
                  multiple
                  options={selectExampleItems}
                  isSearchable
                  scrollingItems={5}
                  withPortal
                />
              </div>
            }
          >
            <Grid container>
              <Alert
                severity="info"
                title="Заполняется отделом технического контроля для ввода предварительного качества по углям. Используется в формах MES и отчетах по дозировке, пока не придут данные из ИС Лаборатории"
              />
            </Grid>
            <p>Test text 1</p>
            <p>Test text 2</p>
            <p>Test text 3</p>
            <p>Test text 4</p>
          </SlideToggle>
        </div>
      </div>
    </Modal>
  );
};
