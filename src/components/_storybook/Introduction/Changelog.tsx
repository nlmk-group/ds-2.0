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
              • Добавлены иконки IdentificationOutlined, MatrixOutlined, RMRecommendationOutlined,
              ASIImplementationOutlined, HeartOutlined в{' '}
              <Link href="./?path=/docs/components-icon-info--docs" target="blank" className={styles['link-changelog']}>
                Icon
              </Link>
              .
            </li>
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
              </Link>{' '}
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
              </Link>{' '}
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
