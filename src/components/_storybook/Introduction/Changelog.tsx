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
            <Button variant="grey" fill="outline">
              NPM
            </Button>
          </Link>
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
              <li className={styles['left-padding']}>- Стили теперь так же применены к дополнительному render'у</li>
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
              . Обновлены типы, добавлены новые пропсы и изменена структура компонента.
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
            <li className={styles['left-padding']}>- Дизайн "Незаметный" (stealthy)</li>
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
              </Link>
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
