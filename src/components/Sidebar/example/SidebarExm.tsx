import React, { ReactNode, useMemo, useState } from 'react';

import Sidebar from '../index';

export const SidebarExm = () => {
  const [currentPath, setCurrentPath] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const pageContent = useMemo<Record<string, ReactNode>>(
    () => ({
      dashboard: (
        <>
          <h2 style={{ marginTop: 0 }}>Дашборд</h2>
          <p>Главная страница с обзорной информацией по системе.</p>
        </>
      ),
      reports: (
        <>
          <h2 style={{ marginTop: 0 }}>Отчеты</h2>
          <p>Раздел со списком отчетов и аналитических данных.</p>
        </>
      ),
      daily: (
        <>
          <h2 style={{ marginTop: 0 }}>Ежедневные отчеты</h2>
          <p>Контент для просмотра ежедневной отчетности.</p>
        </>
      ),
      weekly: (
        <>
          <h2 style={{ marginTop: 0 }}>Недельные отчеты</h2>
          <p>Контент для просмотра недельной отчетности.</p>
        </>
      ),
      projects: (
        <>
          <h2 style={{ marginTop: 0 }}>Проекты</h2>
          <p>Общий раздел для навигации по проектам и командам.</p>
        </>
      ),
      activeProjects: (
        <>
          <h2 style={{ marginTop: 0 }}>Активные проекты</h2>
          <p>Список проектов, которые сейчас находятся в работе.</p>
        </>
      ),
      archivedProjects: (
        <>
          <h2 style={{ marginTop: 0 }}>Архив проектов</h2>
          <p>Завершенные или приостановленные проекты.</p>
        </>
      ),
      teams: (
        <>
          <h2 style={{ marginTop: 0 }}>Команды</h2>
          <p>Раздел с командами, задействованными в проектах.</p>
        </>
      ),
      developmentTeam: (
        <>
          <h2 style={{ marginTop: 0 }}>Команда разработки</h2>
          <p>Информация о специалистах, отвечающих за реализацию проектов.</p>
        </>
      ),
      analyticsTeam: (
        <>
          <h2 style={{ marginTop: 0 }}>Команда аналитики</h2>
          <p>Информация о команде, которая занимается анализом требований и данных.</p>
        </>
      ),
      settings: (
        <>
          <h2 style={{ marginTop: 0 }}>Настройки</h2>
          <p>Здесь можно разместить настройки приложения или параметры пользователя.</p>
        </>
      ),
      help: (
        <>
          <h2 style={{ marginTop: 0 }}>Помощь</h2>
          <p>Информационный раздел с документацией и подсказками.</p>
        </>
      )
    }),
    []
  );

  return (
    <div
      style={{
        backgroundColor: 'var(--unique-background)',
        minHeight: '80vh',
        width: '100%',
        display: 'flex'
      }}
    >
      <Sidebar
        orientation="vertical"
        currentPath={currentPath}
        isLoggedIn={isLoggedIn}
        userName="Иван"
        userSurname="Иванов"
        systemName="ИС Статистика"
        manualExpansion
        onOpenUser={() => {}}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
      >
        <Sidebar.Avatar imageSrc="" />

        <Sidebar.MenuItem
          path="dashboard"
          label="Дашборд"
          position="top"
          icon="IconKovsh32"
          onClick={() => setCurrentPath('dashboard')}
        />

        <Sidebar.MenuItem
          path="reports"
          label="Отчеты"
          position="top"
          icon="IconChartDonut32"
          onClick={() => setCurrentPath('reports')}
        >
          <Sidebar.SubmenuItem path="daily" label="Ежедневные" onClick={() => setCurrentPath('daily')} />
          <Sidebar.SubmenuItem path="weekly" label="Недельные" onClick={() => setCurrentPath('weekly')} />
        </Sidebar.MenuItem>

        <Sidebar.MenuItem
          path="projects"
          label="Проекты"
          position="top"
          icon="IconFolderOutlined32"
          onClick={() => setCurrentPath('projects')}
        >
          <Sidebar.SubmenuItem
            path="activeProjects"
            label="Активные"
            onClick={() => setCurrentPath('activeProjects')}
          />
          <Sidebar.SubmenuItem path="teams" label="Команды" onClick={() => setCurrentPath('teams')}>
            <Sidebar.SubmenuItem
              path="developmentTeam"
              label="Разработка"
              onClick={() => setCurrentPath('developmentTeam')}
            />
            <Sidebar.SubmenuItem
              path="analyticsTeam"
              label="Аналитика"
              onClick={() => setCurrentPath('analyticsTeam')}
            />
          </Sidebar.SubmenuItem>
          <Sidebar.SubmenuItem
            path="archivedProjects"
            label="Архив"
            onClick={() => setCurrentPath('archivedProjects')}
          />
        </Sidebar.MenuItem>

        <Sidebar.MenuItem
          path="settings"
          label="Настройки"
          position="top"
          icon="IconSettingsAltOutlined32"
          onClick={() => setCurrentPath('settings')}
        />

        <Sidebar.MenuItem
          path="help"
          label="Помощь"
          position="bottom"
          icon="IconInfoOutlined32"
          onClick={() => setCurrentPath('help')}
        />
      </Sidebar>

      <div
        style={{
          flex: 1,
          backgroundColor: 'var(--unique-white)',
          padding: '32px',
          color: 'var(--steel-90)'
        }}
      >
        <div
          style={{
            marginBottom: '16px',
            fontSize: '14px',
            color: 'var(--steel-60)'
          }}
        >
          Текущий путь: {currentPath}
        </div>
        {pageContent[currentPath] ?? (
          <>
            <h2 style={{ marginTop: 0 }}>Страница не найдена</h2>
            <p>Для выбранного пункта меню пока не подготовлен демонстрационный контент.</p>
          </>
        )}
      </div>
    </div>
  );
};
