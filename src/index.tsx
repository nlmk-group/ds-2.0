import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { EButtonColor, EButtonSize, EButtonVariant } from './components/Button/enums';
import { customInputColors, sizesMappingInput } from './components/declaration';

import './index.module.scss';

import { Button, Header, Icon, Input, Sidebar, Typography } from './components';

const container = document.getElementById('root');
const root = createRoot(container!);

// Реальный код сгенерированный из Figma через Builder.io
const FigmaGeneratedApp = () => {
  const [selectedRows, setSelectedRows] = useState([1, 2, 3]);
  const [expandedRows, setExpandedRows] = useState([1, 2, 3]);

  const toggleRowSelection = (rowId: number) => {
    setSelectedRows(prev => (prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]));
  };

  const toggleRowExpansion = (rowId: number) => {
    setExpandedRows(prev => (prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]));
  };

  const tableData = [
    {
      id: 1,
      task: '742',
      status: '—',
      order: '40561290-22',
      position: '1',
      recipient: 'Istanbul Стамбул Sisli',
      destination: 'Подольск',
      type: 'Рулон ЦГП',
      ar: 'АР 1',
      weight: '220',
      plan: '220',
      thickness: '1350',
      width: '1350',
      grade: '1350',
      floor: ''
    },
    {
      id: 2,
      task: '742',
      status: '—',
      order: '40561290-22',
      position: '2',
      recipient: 'Istanbul Стамбул Sisli',
      destination: 'Подольск',
      type: 'Рулон ЦГП',
      ar: 'АР 1',
      weight: '220',
      plan: '220',
      thickness: '1350',
      width: '1350',
      grade: '1350',
      floor: ''
    },
    {
      id: 3,
      task: '742',
      status: '—',
      order: '40561290-22',
      position: '3',
      recipient: 'Istanbul Стамбул Sisli',
      destination: 'Подольск',
      type: 'Рулон ЦГП',
      ar: 'АР 1',
      weight: '220',
      plan: '220',
      thickness: '1350',
      width: '1350',
      grade: '1350',
      floor: ''
    },
    {
      id: 4,
      task: '742',
      status: '—',
      order: '40561290-22',
      position: '4',
      recipient: 'Istanbul Стамбул Sisli',
      destination: 'Подольск',
      type: 'Рулон ЦГП',
      ar: 'АР 1',
      weight: '220',
      plan: '220',
      thickness: '1350',
      width: '1350',
      grade: '1350',
      floor: ''
    },
    {
      id: 5,
      task: '742',
      status: '—',
      order: '40561290-22',
      position: '5',
      recipient: 'Istanbul Стамбул Sisli',
      destination: 'Подольск',
      type: 'Рулон ЦГП',
      ar: 'АР 1',
      weight: '220',
      plan: '220',
      thickness: '1350',
      width: '1350',
      grade: '1350',
      floor: ''
    }
  ];

  return (
    <div className="main-container">
      {/* Sidebar с компонентами ds-2.0 */}
      <Sidebar
        variant="default"
        orientation="vertical"
        currentPath="/production"
        systemName="NLMK"
        userName="Пользователь"
        isLoggedIn={true}
        className="app-sidebar"
      />

      {/* Header с компонентами ds-2.0 */}
      <Header
        title="Тупик 1 А, постановка №1"
        showBack={true}
        showNotification={true}
        notificationAmount={1}
        showPrint={true}
        showDate={true}
        className="app-header"
      />

      {/* Main Content */}
      <div className="main-content">
        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs-wrapper">
            <div className="tabs">
              <div className="tab active">
                <Typography variant="Body1-Bold">Продукция</Typography>
              </div>
              <div className="tab">
                <Typography variant="Body1-Medium">Распределение продукции по вагонам</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="filters">
          <Input
            size={sizesMappingInput.s}
            color={customInputColors.default}
            placeholder="№ задания"
            className="filter-input"
          />
          <Input
            size={sizesMappingInput.s}
            color={customInputColors.default}
            placeholder="Статус"
            className="filter-input"
          />
          <Input
            size={sizesMappingInput.s}
            color={customInputColors.default}
            placeholder="№ заказа"
            className="filter-input"
          />
          <Input
            size={sizesMappingInput.s}
            color={customInputColors.default}
            placeholder="№ поз."
            className="filter-input"
          />
          <Input
            size={sizesMappingInput.s}
            color={customInputColors.default}
            placeholder="Г/получатель"
            className="filter-input"
          />
          <Input
            size={sizesMappingInput.s}
            color={customInputColors.default}
            placeholder="Ст. назначения"
            className="filter-input"
          />
        </div>

        {/* Table Container */}
        <div className="tableContainer">
          <table className="data-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>№ задания</th>
                <th>Статус</th>
                <th>№ заказа</th>
                <th>№ поз.</th>
                <th>Г/получатель</th>
                <th>Ст. назначения</th>
                <th>Тип продукции</th>
                <th>АР</th>
                <th>Вес</th>
                <th>План к отгрузке</th>
                <th>Толщина</th>
                <th>Ширина</th>
                <th>2 сорт</th>
                <th>На полу</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(row => (
                <tr key={row.id} className={selectedRows.includes(row.id) ? 'selected' : ''}>
                  <td>
                    <Button
                      variant={EButtonVariant.secondary}
                      color={EButtonColor.grey}
                      size={EButtonSize.xs}
                      iconButton={<Icon name="IconArrowDownFilled24" />}
                      onClick={() => toggleRowExpansion(row.id)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => toggleRowSelection(row.id)}
                    />
                  </td>
                  <td>{row.task}</td>
                  <td>{row.status}</td>
                  <td>{row.order}</td>
                  <td>{row.position}</td>
                  <td>{row.recipient}</td>
                  <td>{row.destination}</td>
                  <td>{row.type}</td>
                  <td>{row.ar}</td>
                  <td>{row.weight}</td>
                  <td>{row.plan}</td>
                  <td>{row.thickness}</td>
                  <td>{row.width}</td>
                  <td>{row.grade}</td>
                  <td>{row.floor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Bottom Bar */}
        <div className="bottom-bar">
          <Button variant={EButtonVariant.secondary} color={EButtonColor.grey} size={EButtonSize.m}>
            Подобрать ПС и схему загрузки
          </Button>
          <Typography variant="Body2-Medium">Выбрано: {selectedRows.length}</Typography>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="bottom-stats-bar">
        <Button
          variant={EButtonVariant.primary}
          color={EButtonColor.brand}
          size={EButtonSize.m}
          startIcon={<Icon name="IconDoneCheckFilled24" />}
        >
          Отправить дежурному
        </Button>
        <div className="stats-container">
          <div className="stat-item">
            <Typography variant="Body2-Medium">Объем</Typography>
            <Typography variant="Body1-Bold">143</Typography>
          </div>
          <div className="stat-item">
            <Typography variant="Body2-Medium">Кол-во вагонов</Typography>
            <Typography variant="Body1-Bold">8</Typography>
          </div>
          <div className="stat-item">
            <Typography variant="Body2-Medium">Кол-во типов ПС</Typography>
            <Typography variant="Body1-Bold">3</Typography>
            <Icon name="IconInfoFilled24" />
          </div>
          <div className="stat-item">
            <Typography variant="Body2-Medium">Кол-во типов креплений</Typography>
            <Typography variant="Body1-Bold">3</Typography>
            <Icon name="IconInfoFilled24" />
          </div>
        </div>
      </div>
    </div>
  );
};

root.render(
  <StrictMode>
    <FigmaGeneratedApp />
  </StrictMode>
);
