import React, { useState } from 'react';

import {
  Badge,
  Button,
  IconCloseOutlined24,
  IconDoneCheckOutlined24,
  IconQuestionMarkOutlined24,
  Link,
  Tooltip
} from '@components/index';
import Typography from '@components/Typography';
import { Args } from '@storybook/react-vite';
import clsx from 'clsx';

import styles from './Tooltip.stories.module.scss';
import globalStyles from '@components/_storybook/styles.module.scss';

import { ETooltipPlacementType } from '../enums';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: () => any) => <div className={globalStyles.wrapper}><Story/></div>;
export default {
  title: 'Components/Tooltip/Stories',
  component: Tooltip,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const TooltipDefault = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tooltip title="Тултип по умолчанию" {...argsTypes}>
        <Link preventRedirect={true} href="">
          Наведи на меня курсор
        </Link>
      </Tooltip>
    </div>
  );
};

TooltipDefault.storyName = 'Тултип по умолчанию';

export const TooltipWithOpacity = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tooltip title="Тултип c кастомным стилем" {...argsTypes} popupClassName={styles.popup}>
        <Link preventRedirect={true} href="">
          Наведи на меня курсор
        </Link>
      </Tooltip>
    </div>
  );
};
TooltipWithOpacity.storyName = 'Тултип c кастомным стилем';

export const TooltipWrappedDisabled = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента" {...argsTypes}>
        <span>
          <Link preventRedirect={true} href="">
            Наведи на меня курсор
          </Link>
        </span>
      </Tooltip>
    </div>
  );
};
TooltipWrappedDisabled.storyName = 'Тултип обернутый вокруг disabled элемента';

export const TooltipPlacements = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.placements}>
        <div className={styles['tooltip-top']}>
          <Tooltip placement={ETooltipPlacementType.top} description="Tooltip on top" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи на меня курсор, тултип будет сверху
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-top-left']}>
          <Tooltip placement={ETooltipPlacementType['top-start']} description="Tooltip on top start" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи на меня курсор, тултип будет сверх слева
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-top-right']}>
          <Tooltip placement={ETooltipPlacementType['top-end']} description="Tooltip on top end" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи на меня курсор, тултип будет сверху
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left-start']}>
          <Tooltip placement={ETooltipPlacementType['left-start']} description="Tooltip on left start" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет слева!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right-start']}>
          <Tooltip placement={ETooltipPlacementType['right-start']} description="Tooltip on right start" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет справа!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left']}>
          <Tooltip placement={ETooltipPlacementType['left']} description="Tooltip on left" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет слева!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right']}>
          <Tooltip placement={ETooltipPlacementType['right']} description="Tooltip on right" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет справа!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-left-end']}>
          <Tooltip placement={ETooltipPlacementType['left-end']} description="Tooltip on left end" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет слева!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-right-end']}>
          <Tooltip placement={ETooltipPlacementType['right-end']} description="Tooltip on right end" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет справа!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom']}>
          <Tooltip placement={ETooltipPlacementType.bottom} description="Tooltip on bottom" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет снизу!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom-left']}>
          <Tooltip
            placement={ETooltipPlacementType['bottom-start']}
            description="Tooltip on bottom start"
            {...argsTypes}
          >
            <Link preventRedirect={true} href="">
              Наведи, тултип будет снизу слева!
            </Link>
          </Tooltip>
        </div>
        <div className={styles['tooltip-bottom-right']}>
          <Tooltip placement={ETooltipPlacementType['bottom-end']} description="Tooltip on bottom end" {...argsTypes}>
            <Link preventRedirect={true} href="">
              Наведи, тултип будет снизу справа!
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
TooltipPlacements.storyName = 'Варианты расположения тултипа';

export const TooltipBehaviors = (argsTypes: Args): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.behaviors}>
        <Tooltip placement="top" behavior="hover" description="Tooltip on hover" {...argsTypes}>
          <Link preventRedirect={true} href="">
            Тултип появится при наведении!
          </Link>
        </Tooltip>
        <Tooltip placement="top" behavior="click" description="Tooltip on click" {...argsTypes}>
          <Link preventRedirect={true} href="">
            Тултип появится при клике!
          </Link>
        </Tooltip>
        <Tooltip placement="top" behavior="focus" description="Tooltip on focus" {...argsTypes}>
          <Link preventRedirect={true} href="">
            Тултип появится при фокусе!
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};
TooltipBehaviors.storyName = 'Варианты поведения тултипа';

export const TooltipWithCustom = (argsTypes: Args): JSX.Element => {
  const renderCustom = () => {
    const customMap = ['Первый пункт', 'Второй пункт', 'Третий пункт'];
    return (
      <div className={styles['traffic-wrapper']}>
        <Typography variant="Body2-Bold">Список</Typography>
        <Typography variant="Body2-Medium">Просто обычный пример списка</Typography>
        <div className={styles.custom}>
          {customMap.map((item, index) => (
            <div key={`${item}-${index}`} className={styles['custom-item']}>
              <IconDoneCheckOutlined24 color="success" />
              <Typography variant="Caption-Medium">{item}</Typography>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const trafficLights = () => (
    <div className={styles['traffic-wrapper']}>
      <div>
        <Typography variant="Body2-Bold">Светофор</Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <Badge color="success" size="s" />
          <Typography variant="Body2-Medium">Зеленая зона</Typography>
        </div>
        <div className={styles['traffic-item']}>
          <Badge color="warning" size="s" />
          <Typography variant="Body2-Medium">Желтая зона</Typography>
        </div>
        <div className={styles['traffic-item']}>
          <Badge color="error" size="s" />
          <Typography variant="Body2-Medium">Красная зона</Typography>
        </div>
      </div>
      <div>
        <Typography variant="Body2-Bold">Карточки</Typography>
      </div>
      <div className={styles['traffic-wrapper']}>
        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-success'])} />
          </div>
          <Typography variant="Body2-Medium" className={styles['text-card']}>
            Считаются по формуле, информация собирается с КПЭ нижних уровней
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-warning'])} />
          </div>
          <Typography variant="Body2-Medium" className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено путем математического
            моделирования
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-primary'])} />
          </div>
          <Typography variant="Body2-Medium" className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет /
            не влияет)
          </Typography>
        </div>

        <div className={styles['card-wrapper']}>
          <div className={styles['line-wrapper']}>
            <div className={clsx(styles.line, styles['line-error'])} />
          </div>
          <Typography variant="Body2-Medium" className={styles['text-card']}>
            Формула отсутствует, информация не собирается с КПЭ нижних уровней, влияние определено экспертно (влияет /
            не влияет)
          </Typography>
        </div>
      </div>
      <div>
        <Link preventRedirect={true} href="">
          Настройки
        </Link>
      </div>
    </div>
  );

  const speciality = () => (
    <div className={styles['traffic-wrapper']}>
      <div>
        <Typography variant="Body2-Bold">Специалист по коммерции</Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <IconDoneCheckOutlined24 color="success" />
          <Typography variant="Body2-Medium">Капранчиков С.Н. — 20.02.2021</Typography>
        </div>
        <div className={styles['traffic-item']}>
          <IconQuestionMarkOutlined24 color="primary" />
          <Typography variant="Body2-Medium">Райкова Н.С. — 25.02.2021</Typography>
        </div>
      </div>
      <div>
        <Typography variant="Body2-Bold">Генеральный директор</Typography>
      </div>
      <div>
        <div className={styles['traffic-item']}>
          <IconCloseOutlined24 color="error" />
          <Typography variant="Body2-Medium">Тевс М.В. — 25.02.2021</Typography>
        </div>
      </div>
    </div>
  );

  return (
    <div className={clsx(styles.wrapper, styles['wrapper-height'])}>
      <Tooltip behavior="click" render={renderCustom()} {...argsTypes}>
        <Link preventRedirect={true} href="">
          Нажми на меня для появления тултипа!
        </Link>
      </Tooltip>
      <Tooltip behavior="click" render={trafficLights()} {...argsTypes} placement="right" clickable>
        <Link preventRedirect={true} href="">
          Нажми на меня для появления тултипа!
        </Link>
      </Tooltip>
      <Tooltip behavior="click" render={speciality()} {...argsTypes} placement="top-end">
        <Link preventRedirect={true} href="">
          Нажми на меня для появления тултипа!
        </Link>
      </Tooltip>
    </div>
  );
};
TooltipWithCustom.storyName = 'Тултип с кастомным элементом внутри';

export const TooltipWithManualOpen = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles['manual-wrapper']}>
        <Tooltip title="Заголовок тултипа" isOpen={isOpen}>
          <Button type="button" variant="secondary">Кнопка с тултипом</Button>
        </Tooltip>
        <Button type="button" variant="secondary" onClick={() => setOpen(!isOpen)}>
          Нажми на меня для переключения тултипа!
        </Button>
      </div>
    </div>
  );
};
TooltipWithManualOpen.storyName = 'Тултип с ручным открытием';
