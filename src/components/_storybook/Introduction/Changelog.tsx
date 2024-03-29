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
            v1.4.9 - <span className={styles.date}>28.03.24</span>
          </Typography>
          <ul className={styles.list}>
            <li>
              • Исправлено выравнивание текста у компонента
              <Link href="./?path=/docs/components-button-info--docs" target="blank">
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
              • Исправлены отступы у компонента
              <Link href="./?path=/docs/components-button-info--docs" target="blank">
                Button
              </Link>
              .
            </li>
            <li>
              • ДС-2.0 не конролирует размер иконки в компоненте
              <Link href="./?path=/docs/components-button-info--docs" target="blank">
                Button
              </Link>
              .
            </li>
            <li>
              • Добавлена опция disableBackdropClick для компонента{' '}
              <Link href="./?path=/docs/components-modal-info--docs" target="blank">
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
              • Добавлена иконка Player Stop для компонента
              <Link href="./?path=/docs/components-icon-info--docs" target="blank">
                Icon
              </Link>
              и исправлен
              <Link href="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Icon" target="blank">
                Readme
              </Link>
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
              • Исправлен бордер компонента
              <Link href="./?path=/docs/components-radio-info--docs" target="blank">
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
              • Исправлен компонент
              <Link href="./?path=/docs/components-radio-info--docs" target="blank">
                Radio
              </Link>
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
              • Исправлено переключение компонента
              <Link href="./?path=/docs/components-switch-info--docs" target="blank">
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
              <Link href="./?path=/docs/components-switch-info--docs" target="blank">
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
              • Добавлены иконки MES, Metallurgy
              <Link href="./?path=/docs/components-icon-info--docs" target="blank">
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
              • Добавлены иконки MES, SPEP
              <Link href="./?path=/docs/components-icon-info--docs" target="blank">
                Icon
              </Link>
              .
            </li>
            <li>
              • Добавлен аттрибут id с датой в контейнер с днём в компоненте
              <Link href="./?path=/docs/components-datepicker-info--docs" target="blank">
                DatePicker
              </Link>
              .
            </li>
            <li>
              • Исправлено отображение иконки в
              <Link href="./?path=/docs/components-alert-info--docs" target="blank">
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
              • Добавлен компонент
              <Link href="./?path=/docs/components-sidebar-info--docs" target="blank">
                Sidebar
              </Link>
              .
            </li>
            <li>
              • Исправлены отступы в компоненте{' '}
              <Link href="./?path=/docs/components-switch-info--docs" target="blank">
                Switch
              </Link>
              .
            </li>
            <li>
              • Исправлен баг с отображением label поверх placeholder в компоненте{' '}
              <Link href="./?path=/docs/components-input-info--docs" target="blank">
                Input
              </Link>
              .
            </li>
            <li>
              • Добавлена возможность вставлять элементы в аргумент helperText{' '}
              <Link href="./?path=/docs/components-input-info--docs" target="blank">
                Input
              </Link>
              .
            </li>
            <li>
              • Исправлены варианты кнопок
              <Link href="./?path=/docs/components-button-info--docs" target="blank">
                Button
              </Link>
              .
            </li>
            <li>
              • Добавлен тип заливки в кнопках
              <Link href="./?path=/docs/components-button-info--docs" target="blank">
                Button
              </Link>
              .
            </li>
            <li>
              • Исправлено присвоение значений badge{' '}
              <Link href="./?path=/docs/components-button-info--docs" target="blank">
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
              <Link href="./?path=/docs/components-checkbox-info--docs" target="blank">
                Checkbox
              </Link>{' '}
              и
              <Link href="./?path=/docs/components-tooltip-info--docs" target="blank">
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
              • Добавлены новые иконки для таблиц
              <Link href="./?path=/docs/components-icon-info--docs" target="blank">
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
              • Добавлены иконки и документация с поиском для компонента
              <Link href="./?path=/docs/components-icon-info--docs" target="blank">
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
              • Исправлено поведение action для компонента
              <Link href="./?path=/docs/components-alert-info--docs" target="blank">
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
              • Исправлена работа компонента
              <Link href="./?path=/docs/components-datepicker-info--docs" target="blank">
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
              • Добавлен компонент
              <Link href="./?path=/docs/components-togglebuttongroup-info--docs" target="blank">
                ToggleButtonGroup
              </Link>
              .
            </li>
            <li>• Обновление версии Storybook до 7.6.9.</li>
            <li>
              • Сделан рефакторинг компонента{' '}
              <Link href="./?path=/docs/components-tabs-info--docs" target="blank">
                Tabs
              </Link>
              , теперь он использует подход compound pattern.
            </li>
            <li>
              • Добавлен компонент
              <Link href="./?path=/docs/components-draganddrop-info--docs" target="blank">
                DragAndDrop
              </Link>{' '}
              - Beta.
            </li>
            <li>• Добавлены иконки IconAddCircleOutline, DeleteBinOutlined.</li>
            <li>
              • Добавлен компонент
              <Link href="./?path=/docs/components-buttongroup-info--docs" target="blank">
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
              • Добавлен компонент
              <Link href="./?path=/docs/components-modal-info--docs" target="blank">
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
