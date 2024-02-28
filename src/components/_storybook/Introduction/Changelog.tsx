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
            <Button variant="greyOutline">NPM</Button>
          </Link>
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
              <li>
                • Добавлен компонент
                <Link href="./?path=/docs/components-modal-info--docs" target="blank">
                  Modal
                </Link>
                .
              </li>
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
