import React, { FC } from 'react';

import CopyCodeButton from '@components/_storybook/Stories/components/CopyCodeButton';
import Card from '@components/Card';
import { FigmaLogoSvgIcon, GitHubSvgIcon, StarSvgIcon, WebSvgIcon } from '@components/Icon/IconsInternal';
import Link from '@components/Link';
import Typography from '@components/Typography';
// Add TS disable error comment for import file from under the root direction
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { version } from '@root/package.json';
import clsx from 'clsx';

import styles from './Welcome.module.scss';
import buttonStyles from '@components/Button/Button.module.scss';

const FooterSection: FC<{
  title: string;
  description: string | JSX.Element;
}> = ({ title, description }) => (
  <Card className={styles['footer-section']}>
    <Typography className={styles['footer-header']} variant="Heading4">
      {title}
    </Typography>
    {description}
  </Card>
);

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <FooterSection
        title="Подключение"
        description={
          <ul className={styles.npm}>
            {['npm install @nlmk/ds-2.0', 'yarn add @nlmk/ds-2.0'].map(command => (
              <li key={command}>
                <CopyCodeButton code={command} label="Копировать команду" copiedLabel="Скопировано">
                  <code className={styles.code}>{command}</code>
                </CopyCodeButton>
              </li>
            ))}
          </ul>
        }
      />
      <FooterSection
        title={`Версия v${version}`}
        description={
          <>
            <Typography variant="Body1">Изменения компонентов и исправления в этом выпуске.</Typography>
            <Link href="./?path=/docs/introduction-changelog--docs" target="_blank">
              История изменений
            </Link>
          </>
        }
      />
      <FooterSection
        title="Контрибьютинг"
        description={
          <>
            <Typography variant="Body1">
              Как предложить изменение, подготовить компонент и отправить его на ревью.
            </Typography>
            <Link href="./?path=/docs/introduction-contributing--docs" target="_blank">
              Руководство
            </Link>
          </>
        }
      />
    </div>
  );
};

export const WelcomePage = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.main}>
        <div className={styles.description}>
          <Typography variant="Heading1" className={styles['description-header']}>
            Дизайн-система НЛМК
          </Typography>
          <Typography variant="Subheading3-Medium" className={styles['description-subheader']}>
            Набор компонентов, инструментов и правил, которые упрощают создание, а также визуальное и техническое
            обновление продуктов НЛМК.
          </Typography>
          <Typography variant="Body1" className={styles['description-definition']}>
            Дизайн-система НЛМК – одна из первых в мире, созданная с ориентацией на сложные MES-cистемы. Предварительно
            мы провели полноценное исследование, в котором собрали обратную связь от пользователей. По результатам
            создали современную дизайн-систему, которая обеспечивает максимально последовательный опыт, а также отражает
            технологичность и готовность компании к изменениям.
          </Typography>
          <div className={clsx(styles['description-buttons'], styles['description-buttons--primary'])}>
            <Link href="https://www.npmjs.com/package/@nlmk/ds-2.0" target="_blank" className={styles.links}>
              <span className={clsx(buttonStyles.button, buttonStyles['brand-primary'], styles.resource)}>
                <StarSvgIcon />
                NPM
              </span>
            </Link>
            <Link href="https://github.com/nlmk-group/ds-2.0" target="_blank" className={styles.links}>
              <span className={clsx(buttonStyles.button, buttonStyles['brand-primary'], styles.resource)}>
                <GitHubSvgIcon />
                GitHub
              </span>
            </Link>
            <Link href="https://ds.nlmk.com/" target="_blank" className={styles.links}>
              <span className={clsx(buttonStyles.button, buttonStyles['brand-primary'], styles.resource)}>
                <WebSvgIcon />
                ДС
              </span>
            </Link>
            <Link href="https://www.figma.com/@nlmk" target="_blank" className={styles.links}>
              <span className={clsx(buttonStyles.button, buttonStyles['brand-primary'], styles.resource)}>
                <FigmaLogoSvgIcon />
                UI-Kit
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.icon}>
          <img src="img/preview.png" alt="NLMK UI Picture" width={420} />
        </div>
      </div>
    </div>
  );
};
