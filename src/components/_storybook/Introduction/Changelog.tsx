import React from 'react';

import { Button, Chip, Link, Typography } from '@components/index';

import styles from './Welcome.module.scss';

export const Changelog = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.description}>
          <Typography variant="Heading1">История изменений</Typography>
          <br />
          <Link
            href="https://www.npmjs.com/package/@nlmk/ds-2.0?activeTab=versions"
            target="blank"
            className={styles.link}
          >
            <Button color="grey" type="button" variant="secondary">
              NPM
            </Button>
          </Link>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.8 - <span className={styles.date}>24.04.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-combobox-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ComboBox
              </Link>
              <li className={styles['left-padding']}>- Убрано значение maxLevel по умолчанию у ComboTreeList</li>
              <li className={styles['left-padding']}>
                - Доработана логика рендеринга последнего элемента у ComboTreeList
              </li>
              <li className={styles['left-padding']}>
                - Добавлено выравнивание для листьев TreeList, не имеющих дочерние элементы
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.7 - <span className={styles.date}>23.04.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Улучшена кросс-платформенная совместимость
              <li className={styles['left-padding']}>- Добавлена поддержка Windows при работе с библиотекой</li>
              <li className={styles['left-padding']}>
                - Исправлены пути с двоеточиями, которые вызывали ошибки при использовании в Windows
              </li>
              <li className={styles['left-padding']}>
                - Библиотеки react-dnd, react-dnd-html5-backend и rc-tree перемещены в optionalDependencies
              </li>
              <li className={styles['left-padding']}>
                - Добавлен Snowpack плагин для автоматического переименования файлов с двоеточиями
              </li>
              <li className={styles['left-padding']}>- Отключены полифиллы Node.js для уменьшения размера сборки</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлены новые иконки Grafana, RezMetallaOutlined, PennantOutlined и PennantFilled
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.6 - <span className={styles.date}>21.04.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-dropdown-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Dropdown
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлена работа атрибутов data-ui-dropdown-menu и data-ui-dropdown-menu-portal в компоненте
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.5 - <span className={styles.date}>18.04.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link href="./?path=/docs/table-stories--docs" target="blank" className={styles['link-changelog']}>
                ColumnSetting
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.4 - <span className={styles.date}>16.04.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              <li className={styles['left-padding']}>- Добавлены свойства onDragStart и onDragEnd</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/table-stories--docs" target="blank" className={styles['link-changelog']}>
                Top
              </Link>
              .<li className={styles['left-padding']}>- Изменен тип свойства title. Теперь принимает ReactNode</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-drawer-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Drawer
              </Link>
              <li className={styles['left-padding']}>
                - Добавлено свойство clickAwayEventType для указания типа события для закрытия панели при клике вне её
                области
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.3 - <span className={styles.date}>14.04.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              <li className={styles['left-padding']}>
                - Исправлены стили элементов дерева в состояниях hover и selected
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.2 - <span className={styles.date}>11.04.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .<li className={styles['left-padding']}>- Добавлена новая иконка MES (ClaimScan)</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлено визуальное отображение обязательного поля при наличии атрибута required
              </li>
              <li className={styles['left-padding']}>- Изменены отступы в компоненте</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.1 - <span className={styles.date}>03.04.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .<li className={styles['left-padding']}>- Добавлена поддержка асинхронной загрузки опций через onOpen</li>
              <li className={styles['left-padding']}>- Добавлена поддержка асинхронного поиска через onSearch</li>
              <li className={styles['left-padding']}>
                - Добавлен индикатор загрузки (isLoading) при асинхронных операциях
              </li>
              <li className={styles['left-padding']}>
                - Оптимизирована производительность при работе с большими списками
              </li>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>
              • Обновлен компонент{' '}
              <Link href="./?path=/docs/components-tabs-info--docs" target="blank" className={styles['link-changelog']}>
                Tabs
              </Link>
              .<li className={styles['left-padding']}>- Высота компонента Tab уменьшена с 44px до 38px</li>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>
              • Обновлен компонент{' '}
              <Link href="./?path=/docs/table-stories--docs" target="blank" className={styles['link-changelog']}>
                Table
              </Link>
              .<li className={styles['left-padding']}>- Установлен цвет текста по умолчанию для компонента</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.22.0 - <span className={styles.date}>27.03.25</span>
          </Typography>
          <Chip variant="outline" color="warning">
            Breaking Changes
          </Chip>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-datetime-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DateTime
              </Link>
              .<li className={styles['left-padding']}>- Актуализированы стили согласно макету и типография</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-header-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Header
              </Link>
              .<li className={styles['left-padding']}>- Удалены свойства type и bg</li>
              <li className={styles['left-padding']}>- Актуализированы стили согласно макету</li>
              <li className={styles['left-padding']}>
                - Изменена логика использования и переименованы свойства для кнопок-обработчиков
              </li>
              <li className={styles['left-padding']}>- Добавлены кнопки message, print и video</li>
              <li className={styles['left-padding']}>- Обновлена документация компонента</li>
            </li>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлены новые пропсы: logo для возможности добавить пользовательский логотип или другую ReactNode,
                isShowUserControl для управления отображением блока пользователя, className и style для расширенной
                стилизации
              </li>
              <li className={styles['left-padding']}>
                - Улучшена поддержка data-ui атрибутов для всех внутренних компонентов для более гибкой кастомизации
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.21.2 - <span className={styles.date}>26.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Исправлен баг со сборкой файлов в библиотеке</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.21.1 - <span className={styles.date}>26.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              .
              <li className={styles['left-padding']}>
                - Улучшена логика отображения чекбоксов с поддержкой режимов checkable и checkableSimple
              </li>
              <li className={styles['left-padding']}>
                - Добавлено корректное отображение состояния multiple (indeterminate) у родительских чекбоксов
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.21.0 - <span className={styles.date}>26.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-videowindow-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                VideoWindow
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.20.5 - <span className={styles.date}>25.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлено отображение состояния чекбокса родительского узла при частичном выборе дочерних элементов
                (добавлен multiple с checked состоянием)
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.20.4 - <span className={styles.date}>24.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Задан тип компонента{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              , в остальных компонентах Дизайн системы.
            </li>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлено значение z-index для компонентов Sidebar, Submenu и SubmenuItem
              </li>
              <li className={styles['left-padding']}>- Добавлен title в SubmenuItem для label</li>
            </li>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-simpleselect-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SimpleSelect
              </Link>
              .
              <li className={styles['left-padding']}>
                - Изменено значение z-index для компонента при использовании withPortal
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.20.3 - <span className={styles.date}>21.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-segmentbuttongroup-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SegmentButtonGroup
              </Link>
              .<li className={styles['left-padding']}>- Добавлен экспорт SegmentButton</li>
              <li className={styles['left-padding']}>
                - Обновлен раздел Info в Storybook компонента SegmentButtonGroup
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.20.2 - <span className={styles.date}>17.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-autocomplete-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Autocomplete
              </Link>
              .<li className={styles['left-padding']}>- Исправлена логика работы свойства onLoadOptions</li>
              <li className={styles['left-padding']}>
                - Выпадающий список теперь не закрывается после выбора через onClick
              </li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              .<li className={styles['left-padding']}>- Добавлено свойство style для iconButton</li>
            </li>
            <li>
              • Улучшен компонент{' '}
              <Link
                href="./?path=/docs/components-pagination-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Pagination
              </Link>
              .
              <li className={styles['left-padding']}>
                - Свойство setCurrentPage стало опциональным. Теперь компонент поддерживает два подхода к управлению
                состоянием: через прямое обновление состояния (setCurrentPage) или через обработку событий
                (onPageChange).
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.20.1 - <span className={styles.date}>13.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлен useEffect для обновления внутреннего состояния при изменении входных данных
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.20.0 - <span className={styles.date}>12.03.25</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-segmentbuttongroup-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SegmentButtonGroup
              </Link>
              . Обновлены типы, добавлены новые пропсы и изменена структура компонента.
              <li className={styles['left-padding']}>- Изменены свойства компонента SegmentButton</li>
              <li className={styles['left-padding']}>- Добавлен контекст для передачи свойств</li>
              <li className={styles['left-padding']}>
                - Изменена реализация использования компонента SegmentButtonGroup
              </li>
              <li className={styles['left-padding']}>- Обновлены stories в Storybook</li>
              <li className={styles['left-padding']}>- Актуализированы тесты</li>
              <li className={styles['left-padding']}>- Удалено свойство color</li>
              <li className={styles['left-padding']}>- Актуализированы стили согласно макету</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые иконки MES, Metallurgy и System</li>
              <li className={styles['left-padding']}>- Добавлена новая директория иконок CRS</li>
              <li className={styles['left-padding']}>- Обновлен скрипт для генерации импортов иконок</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.19.1 - <span className={styles.date}>05.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-combobox-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ComboBox
              </Link>
              .
              <li className={styles['left-padding']}>
                - Изменено отображение Tooltip внутри компонента ComboBox в темной теме
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.19.0 - <span className={styles.date}>04.03.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-combobox-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ComboBox
              </Link>
              .
            </li>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлен вызов onSelectedNode в компоненте TreeList при использовании checkableSimple
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.9 - <span className={styles.date}>28.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлен баг, при котором autofill использовал браузерные стили
              </li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-breadcrumbs-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Breadcrumbs
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлен баг, при котором появлялся двойной тултип при использовании компонента Tooltip для обертки
              </li>
            </li>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-dropdown-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Dropdown
              </Link>
              .
              <li className={styles['left-padding']}>
                - Изменено отображение выпадающего списка с использованием Popper.js
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.8 - <span className={styles.date}>27.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Устранена циклическая зависимость между компонентами Table и Icon.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.7 - <span className={styles.date}>26.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-stepper-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Stepper
              </Link>
              .<li className={styles['left-padding']}>- Добавлены состояния hover и active</li>
              <li className={styles['left-padding']}>- Обновлены стили компонента, включая кнопки и бейджи</li>
              <li className={styles['left-padding']}>- Удалены неактуальные состояния</li>
              <li className={styles['left-padding']}>- Адаптированы новые истории для сторибука</li>
              <li className={styles['left-padding']}>- Добавлены новые свойства для состояния active</li>
              <li className={styles['left-padding']}>- Обновлены тесты</li>
            </li>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-pseudoinput-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                PseudoInput
              </Link>
              .
              <li className={styles['left-padding']}>
                - Улучшено выравнивание элементов для разных размеров компонента
              </li>
              <li className={styles['left-padding']}>
                - Добавлен Pick&lt;IBadgeProps&gt; для типизации пропсов бейджа внутри компонента
              </li>
            </li>
            <li>
              • Исправлен экспорт компонента{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.6 - <span className={styles.date}>26.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлена проблема в компоненте{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлены теги &lt;a&gt; на &lt;div&gt; в компонентах MenuItem и SubmenuItem для корректной работы с
                react-router и предотвращения нежелательных перенаправлений
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.5 - <span className={styles.date}>25.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлено свойство компонента initialCheckedKeys, которое используется для установки начального
                состояния выбранных элементов
              </li>
              <li className={styles['left-padding']}>
                - Добавлено свойство компонента initialExpandedKeys - используется для установки начального состояния
                раскрытых элементов
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.4 - <span className={styles.date}>20.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обновлен компонент{' '}
              <Link href="./?path=/docs/table-stories--docs" target="blank" className={styles['link-changelog']}>
                Top
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлен флаг lastInGroup для компонента Top. Флаг для отображения границы справа в последней колонке
                группы в таблице с группировкой в шапке таблицы
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.3 - <span className={styles.date}>20.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-pseudoinput-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                PseudoInput
              </Link>
              <li className={styles['left-padding']}>
                - Добавлены свойства fullWidth, suffix, badgeChildren и пропсы от компонента Badge (color, variant)
              </li>
              <li className={styles['left-padding']}>- Обновлены стили в соответствии с макетом</li>
              <li className={styles['left-padding']}>- Добавлен размер xs</li>
              <li className={styles['left-padding']}>- Актуализированы истории и документация</li>
            </li>
            <li className={styles['left-padding']}>- Компонент Chip отмечен как deprecated!</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.2 - <span className={styles.date}>19.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-pagination-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Pagination
              </Link>
              .
              <li className={styles['left-padding']}>
                - Изменены цвета кнопок-стрелочек для переключения между страницами
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.1 - <span className={styles.date}>19.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-simpleselect-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SimpleSelect
              </Link>
              .
              <li className={styles['left-padding']}>
                - Изменено отображение выпадающего списка с использованием Popper.js
              </li>
            </li>
            <li>
              • Обновлены компоненты{' '}
              <Link href="./?path=/docs/table-stories--docs" target="blank" className={styles['link-changelog']}>
                Top, Cell
              </Link>
              .<li className={styles['left-padding']}>- Изменена логика работы стилей компонентов</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.18.0 - <span className={styles.date}>14.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-treelist-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TreeList
              </Link>
              .
              <li className={styles['left-padding']}>
                - Реализован древовидный список на основе библиотеки rc-tree с поддержкой чекбоксов (включая каскадное
                выделение)
              </li>
              <li className={styles['left-padding']}>- Поддержка drag-n-drop функциональности</li>
              <li className={styles['left-padding']}>
                - Кастомизация стилей узлов и поддержка правых контролов для узлов
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.17.0 - <span className={styles.date}>11.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link href="./?path=/docs/table-stories--docs" target="blank" className={styles['link-changelog']}>
                Table, Top, Cell, Row, Theader, Tfooter, Tbody
              </Link>
              .
              <li className={styles['left-padding']}>
                - Реализованы базовые компоненты таблицы: Table, Top, Cell, Row, Theader, Tfooter, Tbody
              </li>
              <li className={styles['left-padding']}>
                - Добавлены примеры использования с библиотекой @tanstack/react-table. Примеры сортировки, фильтрации,
                пагинации, изменения размеров колонок и выбора строк
              </li>
              <li className={styles['left-padding']}>
                - Реализован headless ui подход к построению табличного компонента
              </li>
            </li>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
              <li className={styles['left-padding']}>
                - Улучшена логика работы placeholder и label. Теперь можно использовать одновременно placeholder и
                label. Подробнее в README к компоненту.
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.9 - <span className={styles.date}>04.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Оптимизирован компонент{' '}
              <Link
                href="./?path=/docs/components-tooltip-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Tooltip
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлена мемоизация для генерации уникального идентификатора тултипа
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.8 - <span className={styles.date}>03.02.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .<li className={styles['left-padding']}>- Переделаны div-элементы навигации на a-ссылки</li>
              <li className={styles['left-padding']}>- Обновлены стили</li>
              <li className={styles['left-padding']}>
                - Добавлена возможность открывать контекстное меню правой кнопкой и ссылки в новом окне средней кнопкой
                мыши
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.7 - <span className={styles.date}>27.01.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .<li className={styles['left-padding']}>- Добавлена новая иконка MES (IconSpectatTelega)</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.6 - <span className={styles.date}>20.01.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-dropdown-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Dropdown
              </Link>
              .<li className={styles['left-padding']}>- Удалены иконки по умолчанию слева от элементов меню</li>
              <li className={styles['left-padding']}>- Обновлена логика работы DropdownMenuItem</li>
              <li className={styles['left-padding']}>- Актуализированы стили</li>
              <li className={styles['left-padding']}>- Добавлена типография по умолчанию</li>
              <li className={styles['left-padding']}>
                - Актуализированы истории в сторибуке для лучшего понимания работы компонента
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.5 - <span className={styles.date}>14.01.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлен обработчик onChangeFavorites, позволяющий отслеживать изменения в списке избранного
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.4 - <span className={styles.date}>14.01.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Добавлены data-атрибуты в компоненты</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.3 - <span className={styles.date}>13.01.25</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые иконки MES и System</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.2 - <span className={styles.date}>28.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-togglebuttongroup-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ToggleButtonGroup
              </Link>
              .<li className={styles['left-padding']}>- Стили актуализированы в соответствии с макетом</li>
              <li className={styles['left-padding']}>- Удалено свойство status</li>
              <li className={styles['left-padding']}>- Обновлены истории для Storybook</li>
              <li className={styles['left-padding']}>- Изменена логика работы разделителя</li>
              <li className={styles['left-padding']}>- Изменены нейминги подкомпонентов</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.1 - <span className={styles.date}>27.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-timepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                TimePicker
              </Link>
              .<li className={styles['left-padding']}>- Добавлена панель выбора времени при выборе периода</li>
              <li className={styles['left-padding']}>- Обновлены дочерние компоненты</li>
              <li className={styles['left-padding']}>- Добавлена реализация кнопки сброса onReset</li>
              <li className={styles['left-padding']}>- Добавлены data-атрибуты для удобной стилизации</li>
              <li className={styles['left-padding']}>
                - Исправлен баг, при котором при введении невалидного времени в периоде вызывалась ошибка
              </li>
              <li className={styles['left-padding']}>- Улучшена логика валидации значений при ручном вводе периода</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.16.0 - <span className={styles.date}>26.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-pdfpreview-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                PdfPreview
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.15.1 - <span className={styles.date}>24.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-filtertip-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                FilterTip
              </Link>
              .<li className={styles['left-padding']}>- Изменен padding у основного компонента</li>
              <li className={styles['left-padding']}>- Изменен цвет текста в активном состоянии</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-autocomplete-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Autocomplete
              </Link>
              .<li className={styles['left-padding']}>- Исправлен баг с trim при точном совпадении</li>
              <li className={styles['left-padding']}>- Исправлена подсветка при наличии лишних пробелов</li>
              <li className={styles['left-padding']}>- Исправлена работа истории Autocomplete</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.15.0 - <span className={styles.date}>20.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-filtertip-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Filter Tip
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.14.1 - <span className={styles.date}>19.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен баги в компоненте{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлено отображение иконки для сброса значения в многострочном поле ввода multiline
              </li>
              <li className={styles['left-padding']}>
                - Исправлена логика работы с placeholder, подробности добавлены в README
              </li>
              <li className={styles['left-padding']}>
                - Исправлены стили метки (label) и обновлены отступы для иконок внутри компонента
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.14.0 - <span className={styles.date}>18.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-legend-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Legend
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.13.2 - <span className={styles.date}>17.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Удалена анимация opacity в компоненте{' '}
              <Link
                href="./?path=/docs/components-tooltip-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Tooltip
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.13.1- <span className={styles.date}>16.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-inputrange-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                InputRange
              </Link>
              .<li className={styles['left-padding']}>- Стили актуализированы в соответствии с макетом</li>
              <li className={styles['left-padding']}>- Добавлена возможность управления процентами у ползунков</li>
              <li className={styles['left-padding']}>- Истории для storybook обновлены</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-inputslider-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                InputSlider
              </Link>
              .<li className={styles['left-padding']}>- Стили актуализированы в соответствии с макетом</li>
              <li className={styles['left-padding']}>- Добавлены label и проценты заполнения над компонентом</li>
              <li className={styles['left-padding']}>- Добавлена возможность управлять состоянием процентов</li>
              <li className={styles['left-padding']}>- Убраны проценты у ползунка</li>
              <li className={styles['left-padding']}>- Истории для storybook обновлены</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-inputslider-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Slider
              </Link>
              .<li className={styles['left-padding']}>- Стили актуализированы в соответствии с макетом</li>
              <li className={styles['left-padding']}>
                - Добавлены новые состояния для управления процентами в дочерних компонентах
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.13.0 - <span className={styles.date}>14.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-autocomplete-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Autocomplete
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.12.0 - <span className={styles.date}>12.12.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              . Обновлены типы, добавлены новые пропсы и изменена структура компонента.
              <li className={styles['left-padding']}>- Удалено свойство fill</li>
              <li className={styles['left-padding']}>- Изменено свойство variant</li>
              <li className={styles['left-padding']}>- Добавлены новое свойство color</li>
              <li className={styles['left-padding']}>- Добавлены data-атрибуты для удобной стилизации</li>
              <li className={styles['left-padding']}>- Обновлена документация компонента</li>
              <li className={styles['left-padding']}>- Актуализированы тесты</li>
              <li className={styles['left-padding']}>- Обновлены stories в Storybook</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.11.0 - <span className={styles.date}>06.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-illustration-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Illustration
              </Link>
              .
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-errorpage-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ErrorPage
              </Link>
              .<li className={styles['left-padding']}>- Заменены токены на статические значения</li>
              <li className={styles['left-padding']}>- Добавлена документация</li>
            </li>
            <li>
              • Исправлен баг c z-index и отображением контента в компоненте{' '}
              <Link
                href="./?path=/docs/components-modal-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Modal
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}></div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.10.1 - <span className={styles.date}>02.12.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-link-info--docs" target="blank" className={styles['link-changelog']}>
                Link
              </Link>
              .<li className={styles['left-padding']}>- Обновлены отступы между иконками и текстом</li>
              <li className={styles['left-padding']}>- Добавлены data-атрибуты для упрощения кастомизации стилей</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.10.0 - <span className={styles.date}>01.12.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-snackbar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Snackbar
              </Link>
              .
              <li className={styles['left-padding']}>
                - Переименован prop close в onClose для соответствия общим правилам именования
              </li>
              <li className={styles['left-padding']}>
                - Удален prop variant в пользу нового prop type для унификации с другими компонентами
              </li>
              <li className={styles['left-padding']}>- Изменен prop color для поддержки новых вариантов отображения</li>
              <li className={styles['left-padding']}>
                - Добавлен prop showCountdown для отображения таймера автоматического закрытия
              </li>
              <li className={styles['left-padding']}>- Добавлен prop style для кастомизации стилей компонента</li>
              <li className={styles['left-padding']}>- Добавлен prop startIcon для отображения иконки статуса</li>
              <li className={styles['left-padding']}>- Добавлены data-атрибуты для упрощения кастомизации стилей</li>
              <li className={styles['left-padding']}>- Актуализированы стили в соответствии с новым дизайном</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.9.3 - <span className={styles.date}>27.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые иконки MES</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.9.2 - <span className={styles.date}>26.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .<li className={styles['left-padding']}>- Добавлена возможность включить оверлей при открытии подменю</li>
              <li className={styles['left-padding']}>
                - Добавлены возможность задать значение по умолчанию для раскрытия меню
              </li>
              <li className={styles['left-padding']}>- Обновлены истории компонента в Storybook</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-switch-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Switch
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлены новые токены цветов, актуализированы и изменены стили
              </li>
              <li className={styles['left-padding']}>- Добавлены props style и color</li>
              <li className={styles['left-padding']}>- Обновлена документация</li>
              <li className={styles['left-padding']}>- Обновлены тесты для новых цветов</li>
              <li className={styles['left-padding']}>- Добавлена история для просмотра новых цветов Switch</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.9.1 - <span className={styles.date}>25.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые иконки MES</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.9.0 - <span className={styles.date}>22.11.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменены компоненты{' '}
              <Link
                href="./?path=/docs/components-badge-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Badge
              </Link>
              ,{' '}
              <Link href="./?path=/docs/components-chip-info--docs" target="blank" className={styles['link-changelog']}>
                Chip
              </Link>
              ,{' '}
              <Link
                href="./?path=/docs/components-checkbox-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Checkbox
              </Link>
              ,{' '}
              <Link
                href="./?path=/docs/components-radio-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Radio
              </Link>
              .<li className={styles['left-padding']}>- Добавлен пропс style для кастомизации стилей компонентов.</li>
              <li className={styles['left-padding']}>- Изменён пропс color в соответствии с новыми требованиями.</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.8.2- <span className={styles.date}>13.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен баг в компоненте{' '}
              <Link
                href="./?path=/docs/components-spinner-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Spinner
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлено отображение компонента в растянутом контейнере, когда фон и иконка разъезжались
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.8.1 - <span className={styles.date}>15.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-alert-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Alert
              </Link>
              .<li className={styles['left-padding']}>- Актуализированы стили в соответствии макету</li>
              <li className={styles['left-padding']}>- Обновлены истории для Storybook</li>
              <li className={styles['left-padding']}>- Заменена иконка закрытия Alert</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-draganddrop-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DragAndDrop
              </Link>
              .<li className={styles['left-padding']}>- Актуализированы стили в соответствии макету</li>
            </li>
            <li>
              • Исправлен баг в компоненте{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DatePicker
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлено поведение полосы прокрутки в TimeSelector для браузеров Mozilla
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.8.0 - <span className={styles.date}>13.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-status-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Status
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.7.3 - <span className={styles.date}>11.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменены компонент{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DatePicker
              </Link>
              .<li className={styles['left-padding']}>- Добавлен props error в DatePicker</li>
            </li>
            <li>
              • Исправлен компонент{' '}
              <Link href="./?path=/docs/components-tabs-info--docs" target="blank" className={styles['link-changelog']}>
                Tabs
              </Link>
              .<li className={styles['left-padding']}>- Исправлено значение z-index для компонента</li>
            </li>
            <li>
              • Изменены компоненты List и ListItem.
              <li className={styles['left-padding']}>- Актуализированы внешние отступы для ListItem</li>
              <li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.7.2 - <span className={styles.date}>11.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Исправлена типизация в компонентах DatePicker и SimpleSelect</li>
            <li>
              • Исправлен баг в компоненте{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .<li className={styles['left-padding']}>- Исправлено наложение placeholder и label в браузере Firefox</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.7.1 - <span className={styles.date}>08.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-pagination-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Pagination
              </Link>
              .<li className={styles['left-padding']}>- Испралвлен цвет троеточия между выбором страниц</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.7.0 - <span className={styles.date}>07.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-pagination-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Pagination
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.6.3 - <span className={styles.date}>07.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .<li className={styles['left-padding']}>- Изменены стили Sidebar</li>
              <li className={styles['left-padding']}>- Добавлены новые токены цветов для Sidebar</li>
              <li className={styles['left-padding']}>- Изменена логика для SubmenuItem в Sidebar</li>
              <li className={styles['left-padding']}>- Добавлен отдельный hover для иконок в Sidebar</li>
              <li className={styles['left-padding']}>
                - Изменена логика для MenuItem в горизонтальном и вертикальном Sidebar
              </li>
              <li className={styles['left-padding']}>- Актуализированы истории для Sidebar</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.6.2 - <span className={styles.date}>05.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен баг в компоненте{' '}
              <Link
                href="./?path=/docs/components-splitter-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Splitter
              </Link>
              <li className={styles['left-padding']}>- Исправлены отступы между компонентом и его пропсами</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.6.1 - <span className={styles.date}>05.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен баг в компоненте{' '}
              <Link
                href="./?path=/docs/components-alert-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Alert
              </Link>
              <li className={styles['left-padding']}>- Исправлено отображение кнопки закрытия в компоненте</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.6.0 - <span className={styles.date}>02.11.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-splitter-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Splitter
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.22 - <span className={styles.date}>30.10.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-breadcrumbs-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Breadcrumbs
              </Link>
              .<li className={styles['left-padding']}>- Изменена архитектура компонента</li>
              <li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Добавлен новый компонент Crumb</li>
              <li className={styles['left-padding']}>
                - Исправлена ситуация, когда при наведении на элементы списка, ховер-эффект неправильно обрабатывался в
                хлебных крошках
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.21 - <span className={styles.date}>24.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-skeletonloader-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SkeletonLoader
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.20 - <span className={styles.date}>18.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-attachfiles-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                AttachFiles
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Актуализированы стили компонента в соответствии с Figma</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.19 - <span className={styles.date}>17.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлены стили размеров в компоненте{' '}
              <Link
                href="./?path=/docs/components-modal-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Modal
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.18 - <span className={styles.date}>15.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Удалены неиспользуемые папки в иконках</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.17 - <span className={styles.date}>14.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .<li className={styles['left-padding']}>- Исправлена проблема с отображением длинного label в Input</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.16 - <span className={styles.date}>09.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые иконки NLMK One и MES</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.15 - <span className={styles.date}>04.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-tabs-info--docs" target="blank" className={styles['link-changelog']}>
                Tabs
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов для Tabs</li>
              <li className={styles['left-padding']}>
                - Добавлен новый props: scrollable (позволяет прокручивать вкладки)
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.14 - <span className={styles.date}>02.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-header-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Header
              </Link>
              .<li className={styles['left-padding']}>- Добавлен props children, расположенный после title</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.13 - <span className={styles.date}>01.10.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-divider-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Divider
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов для Divider</li>
              <li className={styles['left-padding']}>
                - Исправлены баги в Spinner и ProgressBar, когда проценты переносились на следующую строку
              </li>
              <li className={styles['left-padding']}>
                - Актуализированы компоненты Spinner, Divider и ProgressBar согласно макетам
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.12 - <span className={styles.date}>26.09.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-tooltip-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Tooltip
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Изменен стиль компонента согласно макетам</li>
              <li className={styles['left-padding']}>- Удалены !important в стилях и настроена специфичность</li>
              <li className={styles['left-padding']}>
                - Стили теперь так же применены к дополнительному render&apos;у
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.11 - <span className={styles.date}>25.09.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-draganddrop-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DragnAndDrop
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Изменен стиль компонента согласно макетам</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.10 - <span className={styles.date}>17.09.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DatePicker
              </Link>
              .
              <li className={styles['left-padding']}>
                - Исправлена логика работы с часами в компоненте DatePicker. Теперь корректно обрабатываются случаи,
                когда enabledHourFrom меньше, чем enabledHourTo (такое может быть, если enabledFrom и enabledTo
                находятся в разных днях).
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.9 - <span className={styles.date}>14.09.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-switch-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Switch
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Изменен стиль компонента согласно макетам</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.8 - <span className={styles.date}>12.09.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              .{' '}
              <li className={styles['left-padding']}>
                - Обновлены типы, добавлены новые пропсы и изменена структура компонента
              </li>
              <li className={styles['left-padding']}>- Изменены варианты свойства variant и fill</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-spinner-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Spinner
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Изменен стиль компонента согласно макетам</li>
              <li className={styles['left-padding']}>- Добавлен новое свойство: progressPercentage</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.7 - <span className={styles.date}>11.09.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлен флаг isClearInputOnSelect для удаления содержимого Input после выбора
              </li>
            </li>
            <li>
              • Обновлён компонент{' '}
              <Link
                href="./?path=/docs/components-accordion-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Accordion
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Добавлен эффект hover и disabled</li>
              <li className={styles['left-padding']}>- Фикс расположения иконок и текста</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.6 - <span className={styles.date}>08.09.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обновлён компонент{' '}
              <Link
                href="./?path=/docs/components-progressbar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ProgressBar
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
            </li>
            <li>
              • Обновлён компонент{' '}
              <Link
                href="./?path=/docs/components-imagepicture-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ImagePicture
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Изменен стиль компонента согласно макетам</li>
            </li>
            <li>
              • Обновлён компонент{' '}
              <Link href="./?path=/docs/components-card-info--docs" target="blank" className={styles['link-changelog']}>
                Card
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Изменен стиль компонента согласно макетам</li>
            </li>
            <li>
              • Обновлён компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .<li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
              <li className={styles['left-padding']}>- Изменен цвет иконок по умолчанию</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.5 - <span className={styles.date}>31.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обновлён компонент{' '}
              <Link
                href="./?path=/docs/components-slidetoggle-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SlideToggle
              </Link>
              .<li className={styles['left-padding']}>- Изменены отступы</li>
              <li className={styles['left-padding']}>- Добавлена новая story</li>
              <li className={styles['left-padding']}>- Добавлены новые токены цветов</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.4 - <span className={styles.date}>30.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link href="./?path=/docs/components-link-info--docs" target="blank" className={styles['link-changelog']}>
                Link
              </Link>
              .<li className={styles['left-padding']}>- Изменены цвета компонента</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.3 - <span className={styles.date}>29.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлены баги внутри компонентов.
              <li className={styles['left-padding']}>- Modal</li>
              <li className={styles['left-padding']}>- Tooltip</li>
              <li className={styles['left-padding']}>- Button</li>
              <li className={styles['left-padding']}>- Tabs</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.2 - <span className={styles.date}>28.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-avatar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Avatar
              </Link>
              .<li className={styles['left-padding']}>- Добавлен размер 3xl для Avatar</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.1 - <span className={styles.date}>23.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-segmentbuttongroup-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SegmentButtonGroup
              </Link>
              .<li className={styles['left-padding']}>- Изменен цвет обводки кнопок</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.5.0 - <span className={styles.date}>22.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-segmentbuttongroup-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SegmentButtonGroup
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.4.1 - <span className={styles.date}>19.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-pseudoinput-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                PseudoInput
              </Link>
              .<li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-radio-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Radio
              </Link>
              .<li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.4.0 - <span className={styles.date}>16.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .<li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-timepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Timepicker
              </Link>
              .<li className={styles['left-padding']}>- Добавлены свойства: reset, onReset</li>
              <li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Datepicker
              </Link>
              .<li className={styles['left-padding']}>- Добавлены свойства: reset, onReset</li>
              <li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
            <li>
              • Обновлен компонент{' '}
              <Link
                href="./?path=/docs/components-simpleselect-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SimpleSelect
              </Link>
              .<li className={styles['left-padding']}>- Добавлены свойства: reset, onReset</li>
              <li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.3.3 - <span className={styles.date}>14.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
              <li className={styles['left-padding']}>
                - Добавлен флаг autoSelectSingleOnEnter для автоматического выбора по Enter, если найдена 1 опция
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.3.2 - <span className={styles.date}>13.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-drawer-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Drawer
              </Link>
              .<li className={styles['left-padding']}>- Обновлены токены цветов</li>
              <li className={styles['left-padding']}>- Добавлена документация для компонента</li>
            </li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-modal-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Modal
              </Link>
              .<li className={styles['left-padding']}>- Обновлены токены цветов</li>
              <li className={styles['left-padding']}>- Обновлен стиль overlay</li>
              <li className={styles['left-padding']}>- Добавлена документация для компонента</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.3.1 - <span className={styles.date}>12.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-dropdown-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Dropdown
              </Link>
              .<li className={styles['left-padding']}>- Удалены свойства: startIcon, buttonText</li>
              <li className={styles['left-padding']}>
                - Добавлено свойство: buttonChildren для контента внутри кнопки компнента
              </li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.2.1 - <span className={styles.date}>09.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Исправлена генерация токенов темной темы.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.2.0 - <span className={styles.date}>08.08.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-stepper-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Stepper
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.1.0 - <span className={styles.date}>07.08.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-alert-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Alert
              </Link>
              <li className={styles['left-padding']}>- Изменен props color и размеры шрифтов</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v2.0.0 - <span className={styles.date}>05.08.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>• Переход на новые цвета DS 3.0</li>
            <li>
              • Изменен компонент{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              . Обновлены типы, добавлены новые пропсы и изменена структура компонента.
              <li className={styles['left-padding']}>- Добавлены свойства: startBadge, endBadge</li>
              <li className={styles['left-padding']}>- Удалено свойство: badge</li>
              <li className={styles['left-padding']}>- Изменены варианты свойства variant</li>
              <li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
            <li>
              • Обновлен компонент{' '}
              <Link href="./?path=/docs/components-chip-info--docs" target="blank" className={styles['link-changelog']}>
                Chip
              </Link>
              . Добавлены новые пропсы и изменена структура компонента.
              <li className={styles['left-padding']}>- Изменено свойство color по умолчанию</li>
              <li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
            <li>
              • Модифицирован компонент{' '}
              <Link
                href="./?path=/docs/components-badge-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Badge
              </Link>
              . Обновлены типы и добавлены новые варианты отображения.
              <li className={styles['left-padding']}>- Изменены варианты свойства color</li>
              <li className={styles['left-padding']}>- Изменены цвета и размеры шрифтов</li>
            </li>
            <li>
              • Улучшен компонент{' '}
              <Link
                href="./?path=/docs/components-typography-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Typography
              </Link>
              . Добавлены новые пропсы для управления стилями.
              <li className={styles['left-padding']}>- Изменено поведение свойства color и его варианты</li>
              <li className={styles['left-padding']}>- Добавлены новые варинты типографии</li>
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.8 - <span className={styles.date}>26.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Обновлена библиотека react-tooltip.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.7 - <span className={styles.date}>25.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Добавлены новые переменные цветов.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.6 - <span className={styles.date}>24.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена иконка в компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li className={styles['left-padding']}>- ListDelete</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.5 - <span className={styles.date}>23.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена иконка в компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li className={styles['left-padding']}>- Signal</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.4 - <span className={styles.date}>17.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлены стили OptionItem для компонента{' '}
              <Link
                href="./?path=/docs/components-simpleselect-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SimpleSelect
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.3 - <span className={styles.date}>16.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлено свойство indicator, оно отвечает за визуальное отображение индикатора в уведомлении для
              компонента{' '}
              <Link
                href="./?path=/docs/components-snackbar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Snackbar
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.2 - <span className={styles.date}>15.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлена работа backdrop (теперь реагирует непосредственно на нажатие) для компонента{' '}
              <Link
                href="./?path=/docs/components-modal-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Modal
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.1 - <span className={styles.date}>13.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен бесконечный скролл при выборе времени{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DatePicker
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.9.0 - <span className={styles.date}>10.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент SimpleSelect{' '}
              <Link
                href="./?path=/docs/components-simpleselect-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SimpleSelect
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.16 - <span className={styles.date}>01.07.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена возможность добавления стилей к всплывающему окну{' '}
              <Link
                href="./?path=/docs/components-tooltip-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Tooltip
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.15 - <span className={styles.date}>27.06.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлены баги отображения компонента{' '}
              <Link
                href="./?path=/docs/components-tooltip-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Tooltip
              </Link>
              .
            </li>
            <li>
              • Добавлена иконка в компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li className={styles['left-padding']}>- ACACriticalityAnalysis</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.14 - <span className={styles.date}>24.06.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена иконка в компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li className={styles['left-padding']}>- Modelling</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.13 - <span className={styles.date}>21.06.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен баг out of memory компонента DateTime, который используется внутри{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DatePicker
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.12 - <span className={styles.date}>18.06.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлена ширина меню компонента{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.11 - <span className={styles.date}>13.06.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен callback, вызываемый при изменении панели дней, месяца, квартала или года внутри компонента{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DatePicker
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.10 - <span className={styles.date}>12.06.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена иконка в компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li className={styles['left-padding']}>- Formula</li>
            <li>
              • Исправлен тип кнопки в компоненте{' '}
              <Link
                href="./?path=/docs/components-select-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.9 - <span className={styles.date}>07.06.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлена иллюстрация для компонента{' '}
              <Link
                href="./?path=/docs/components-errorpage-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ErrorPage
              </Link>
              .
            </li>
            <li>
              • Исправлен hover для компонента{' '}
              <Link
                href="./?path=/docs/components-select-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.8 - <span className={styles.date}>03.06.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена кнопка сброса для компонента{' '}
              <Link
                href="./?path=/docs/components-input-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.7 - <span className={styles.date}>30.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлены иконки в компонент{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li className={styles['left-padding']}>- IdentificationOutlined</li>
            <li className={styles['left-padding']}>- MatrixOutlined</li>
            <li className={styles['left-padding']}>- RMRecommendationOutlined</li>
            <li className={styles['left-padding']}>- ASIImplementationOutlined</li>
            <li className={styles['left-padding']}>- HeartOutlined</li>
            <li>
              • Удален отступ иконки справа в компоненте{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.6 - <span className={styles.date}>24.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен outline border и его позиционирование для компонента{' '}
              <Link
                href="./?path=/docs/components-badge-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Badge
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.5 - <span className={styles.date}>23.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена возможность использовать Badge в компоненте{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li>
              • Добавлен размер xs для компонента{' '}
              <Link
                href="./?path=/docs/components-badge-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Badge
              </Link>
              .
            </li>
            <li>
              • Исправлено добавление JSX.Element для title и description{' '}
              <Link
                href="./?path=/docs/components-draganddrop-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DragAndDrop
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.4 - <span className={styles.date}>22.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ClickAwayListener"
                target="blank"
                className={styles['link-changelog']}
              >
                ClickAwayListener
              </Link>
            </li>
            <li className={styles['left-padding']}>
              - Компонент может принимать массив рефов в проп excludeRef для исключения элементов из обработки кликов
              вне компонента.
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.3 - <span className={styles.date}>20.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен скроллбар в компоненте{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.2 - <span className={styles.date}>19.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена возможность изменять тип события в компоненте{' '}
              <Link
                href="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ClickAwayListener"
                target="blank"
                className={styles['link-changelog']}
              >
                ClickAwayListener
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.1 - <span className={styles.date}>17.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлено нижнее подчеркивание в компоненте{' '}
              <Link href="./?path=/docs/components-link-info--docs" target="blank" className={styles['link-changelog']}>
                Link
              </Link>
              .
            </li>
          </ul>
        </div>

        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.8.0 - <span className={styles.date}>16.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-drawer-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Drawer
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.7.1 - <span className={styles.date}>15.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен клик по иконкам в DragAndDrop{' '}
              <Link
                href="./?path=/docs/components-draganddrop-stories--dnd-small-icon"
                target="blank"
                className={styles['link-changelog']}
              >
                Dnd Small Icon
              </Link>
              .
            </li>
            <li>
              • Исправлено поведение при hover эффекте на{' '}
              <Link
                href="./?path=/docs/components-avatar-stories--avatar-with-special-badge"
                target="blank"
                className={styles['link-changelog']}
              >
                Avatar with special badge
              </Link>
              .
            </li>
            <li>
              • Исправлено смещение чекбокса с label{' '}
              <Link
                href="./?path=/docs/components-checkbox-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Checkbox
              </Link>
              .
            </li>
            <li>
              • Исправлена реакция disabled checkbox на hover{' '}
              <Link
                href="./?path=/docs/components-checkbox-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Checkbox
              </Link>
              .
            </li>
            <li>
              • Исправлен цвет спиннера с иконкой{' '}
              <Link
                href="./?path=/docs/components-spinner-stories--spinner-with-icon"
                target="blank"
                className={styles['link-changelog']}
              >
                Spinner with icon
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.7.0 - <span className={styles.date}>14.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-slidetoggle-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SlideToggle
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.6.1 - <span className={styles.date}>13.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлены иконки DplayersOutlined, PeopleCheckDoneFilled, DplayersFilled в{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.6.0 - <span className={styles.date}>08.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-errorpage-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ErrorPage
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.9 - <span className={styles.date}>07.05.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлено поведение withPortal и ClickAwayListener в компоненте{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
            </li>
            <li>
              • Исправлено поведение при hover эффекте в состоянии disabled компонента{' '}
              <Link
                href="./?path=/docs/components-inputslider-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                InputSlider
              </Link>
              ,{' '}
              <Link
                href="./?path=/docs/components-inputrange-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                InputRange
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.8 - <span className={styles.date}>26.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен тип свойства name и добавлен обработчик ошибки в компоненте{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li>
              • Добавлено свойство name для{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>{' '}
              и{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.7 - <span className={styles.date}>24.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлены иконки FilterSortAscendedFilled, FilterSortAscendedOutlined, HeartFilled, ResizingOutlined в{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.6 - <span className={styles.date}>19.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-grid-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Grid
              </Link>
              .
            </li>
            <li>
              • Доработана логики отступов в компоненте{' '}
              <Link href="./?path=/docs/components-box-info--docs" target="blank" className={styles['link-changelog']}>
                Box
              </Link>
              .
            </li>
            <li>
              • Добавлен пропс colored для обозначения измененного значения в компоненте{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.5 - <span className={styles.date}>10.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлена логика работы withPortal в компоненте{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              .
            </li>
            <li>
              • Добавлена возможность переноса длинного заголовка в компоненте{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.4 - <span className={styles.date}>09.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Переработана логика и добавлено свойство clickable в компоненте{' '}
              <Link
                href="./?path=/docs/components-tooltip-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Tooltip
              </Link>
              .
            </li>
            <li>
              • Добавлено свойство color для компонента{' '}
              <Link
                href="./?path=/docs/components-box-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Box
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.3 - <span className={styles.date}>08.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлено позиционирование иконки внутри компонента{' '}
              <Link
                href="./?path=/docs/components-checkbox-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Checkbox
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.2 - <span className={styles.date}>05.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Добавлена новая версия токенов.</li>
            <li>
              • Исправлены отступы для компонента{' '}
              <Link
                href="./?path=/docs/components-divider-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Divider
              </Link>
              .
            </li>
            <li>
              • Исправлен label для компонента{' '}
              <Link
                href="./?path=/docs/components-checkbox-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Checkbox
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.1 - <span className={styles.date}>04.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен label для компонента{' '}
              <Link
                href="./?path=/docs/components-radio-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Radio
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.5.0 - <span className={styles.date}>03.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-box-stories--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Box
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.11 - <span className={styles.date}>02.04.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлены стили компонента{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                SideBar
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.10 - <span className={styles.date}>01.04.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>
              . Компонент стал контролируемым.
            </li>
            <li>
              • Обновленный компонент{' '}
              <Link
                href="./?path=/docs/components-select-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Select
              </Link>{' '}
              содержит:
            </li>
            <li className={styles['left-padding']}>- Анимированную иконку раскрытия</li>
            <li className={styles['left-padding']}>- Настраиваемый скроллбар</li>
            <li className={styles['left-padding']}>- Автофокус на активном элементе</li>
            <li className={styles['left-padding']}>- Дополнительные иконки и описания</li>
            <li className={styles['left-padding']}>- Улучшенное выделение всех элементов</li>
            <li className={styles['left-padding']}>- Поддержка множественного выбора</li>
            <li className={styles['left-padding']}>- Визуальные подсказки: подсветка и бейджи</li>
            <li className={styles['left-padding']}>- Дизайн &quot;Незаметный&quot; (stealthy)</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.9 - <span className={styles.date}>28.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлено выравнивание текста у компонента{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.8 - <span className={styles.date}>27.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлены отступы у компонента{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              .
            </li>
            <li>
              • ДС-2.0 не конролирует размер иконки в компоненте{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              .
            </li>
            <li>
              • Добавлена опция disableBackdropClick для компонента{' '}
              <Link
                href="./?path=/docs/components-modal-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Modal
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.7 - <span className={styles.date}>26.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлена иконка Player Stop для компонента{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>{' '}
              и исправлен{' '}
              <Link
                href="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Icon"
                target="blank"
                className={styles['link-changelog']}
              >
                Readme
              </Link>{' '}
              в нем.
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.6 - <span className={styles.date}>25.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен бордер компонента{' '}
              <Link
                href="./?path=/docs/components-radio-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Radio
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.5 - <span className={styles.date}>22.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-radio-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Radio
              </Link>{' '}
              согласно дизайну.
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.4 - <span className={styles.date}>21.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлено переключение компонента{' '}
              <Link
                href="./?path=/docs/components-switch-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Switch
              </Link>
              , если на странице их несколько.
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.3 - <span className={styles.date}>20.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлен компонент{' '}
              <Link
                href="./?path=/docs/components-switch-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Switch
              </Link>
              . Компонент стал контролируемым.
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.2 - <span className={styles.date}>15.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлены иконки MES, Metallurgy{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.1 - <span className={styles.date}>12.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлены иконки MES, SPEP{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
            <li>
              • Добавлен аттрибут id с датой в контейнер с днём в компоненте{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DatePicker
              </Link>
              .
            </li>
            <li>
              • Исправлено отображение иконки в{' '}
              <Link
                href="./?path=/docs/components-alert-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Alert
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.4.0 - <span className={styles.date}>04.03.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-sidebar-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Sidebar
              </Link>
              .
            </li>
            <li>
              • Исправлены отступы в компоненте{' '}
              <Link
                href="./?path=/docs/components-switch-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Switch
              </Link>
              .
            </li>
            <li>
              • Исправлен баг с отображением label поверх placeholder в компоненте{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
            </li>
            <li>
              • Добавлена возможность вставлять элементы в аргумент helperText{' '}
              <Link
                href="./?path=/docs/components-input-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Input
              </Link>
              .
            </li>
            <li>
              • Исправлены варианты кнопок{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              .
            </li>
            <li>
              • Добавлен тип заливки в кнопках{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              .
            </li>
            <li>
              • Исправлено присвоение значений badge{' '}
              <Link
                href="./?path=/docs/components-button-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Button
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.3.1 - <span className={styles.date}>28.02.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлены переменные токенов для компонента{' '}
              <Link
                href="./?path=/docs/components-checkbox-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Checkbox
              </Link>{' '}
              и{' '}
              <Link
                href="./?path=/docs/components-tooltip-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Tooltip
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.3.0 - <span className={styles.date}>27.02.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>• Исправлены переменные токенов и работа внутри компонентов.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.2.2 - <span className={styles.date}>19.02.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Исправлено отображение статуса в компоненте Card, добавлено состояние default.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.2.1 - <span className={styles.date}>15.02.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлены новые иконки для таблиц{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.2.0 - <span className={styles.date}>09.02.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлены иконки и документация с поиском для компонента{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.1.3 - <span className={styles.date}>02.02.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлено поведение action для компонента{' '}
              <Link
                href="./?path=/docs/components-alert-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Alert
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.1.2 - <span className={styles.date}>25.01.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Реализована возможность добавить CSS класс для компонента Select.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.1.1 - <span className={styles.date}>22.01.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлена работа компонента{' '}
              <Link
                href="./?path=/docs/components-datepicker-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DatePicker
              </Link>
              .
            </li>
            <li>• Удалены ненужные зависимости из package.json.</li>
            <li>• Обновление версии Storybook до 7.6.10.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.1.0 - <span className={styles.date}>17.01.24</span>
            <Chip variant="outline" color="warning">
              Breaking Changes
            </Chip>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-togglebuttongroup-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ToggleButtonGroup
              </Link>
              .
            </li>
            <li>• Обновление версии Storybook до 7.6.9.</li>
            <li>
              • Сделан рефакторинг компонента{' '}
              <Link href="./?path=/docs/components-tabs-info--docs" target="blank" className={styles['link-changelog']}>
                Tabs
              </Link>{' '}
              , теперь он использует подход compound pattern.
            </li>
            <li>
              • Добавлен компонент
              <Link
                href="./?path=/docs/components-draganddrop-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                DragAndDrop
              </Link>{' '}
              - Beta.
            </li>
            <li>• Добавлены иконки IconAddCircleOutline, DeleteBinOutlined.</li>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-buttongroup-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                ButtonGroup
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.0.2 - <span className={styles.date}>11.12.23</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Исправлена документация к компонентам Radio, PseudoInput.</li>
            <li>• Исправлены стили к компоненту Select.</li>
            <li>• Добавлена возможность добавить className к компоненту Link.</li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.0.1 - <span className={styles.date}>05.12.23</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Добавлен компонент{' '}
              <Link
                href="./?path=/docs/components-modal-info--docs"
                target="blank"
                className={styles['link-changelog']}
              >
                Modal
              </Link>
              .
            </li>
          </ul>
        </div>
        <div className={styles.history}>
          <Typography variant="Subheading3-Medium">
            v1.0.0 - <span className={styles.date}>01.12.23</span>
          </Typography>
          <ul className={styles.list}>
            <li>• Добавлены компоненты ядра дизайн системы.</li>
            <li>• Добавлена страница приветствия дизайн системы.</li>
            <li>• Настройка сборки для выхода в Open Source.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
