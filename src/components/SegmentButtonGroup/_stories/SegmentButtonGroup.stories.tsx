import React, { ReactNode } from 'react';

import { Box, Button, SegmentButton, SegmentButtonGroup, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from '@components/_storybook/styles.module.scss';

import { ESegmentButtonGroupSizes } from '../enums';
import { ISegmentButtonGroupProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/SegmentButtonGroup/Stories',
  component: SegmentButtonGroup,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof SegmentButtonGroup>;

export const SegmentButtonGroupDefault = (argTypes: ISegmentButtonGroupProps): ReactNode => {
  return (
    <SegmentButtonGroup {...argTypes}>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Сталь
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Цинк
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Чугун
        </Typography>
      </SegmentButton>
    </SegmentButtonGroup>
  );
};

SegmentButtonGroupDefault.storyName = 'SegmentButtonGroup по умолчанию';

export const SegmentButtonGroupWithTypography = (argTypes: ISegmentButtonGroupProps): ReactNode => {
  return (
    <Box flexDirection="column" gap={12}>
      {Object.values(ESegmentButtonGroupSizes).map((size, index) => (
        <Box key={index} flexDirection="column" gap={8}>
          <Typography variant="Body1-Bold" color="var(--steel-90)">
            {`Размер ${size} `}
          </Typography>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Сталь
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Цинк
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Bold" color="var(--steel-90)">
                Чугун
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>

          <SegmentButtonGroup size={size} {...argTypes}>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Сталь
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Цинк
              </Typography>
            </SegmentButton>
            <SegmentButton onClick={action('onClick')}>
              <Typography variant="Body1-Medium" color="var(--steel-90)">
                Чугун
              </Typography>
            </SegmentButton>
          </SegmentButtonGroup>
        </Box>
      ))}
    </Box>
  );
};
SegmentButtonGroupWithTypography.storyName = 'SegmentButtonGroup с разными обертками для текста';
SegmentButtonGroupWithTypography.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const SegmentButtonGroupWithDefaultActive = (): ReactNode => {
  return (
    <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Первая кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton active onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Средняя кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton active onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Последняя кнопка активна по умолчанию
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton active onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>
    </Box>
  );
};
SegmentButtonGroupWithDefaultActive.storyName = 'SegmentButtonGroup с активной кнопкой по умолчанию';
SegmentButtonGroupWithDefaultActive.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const SegmentButtonGroupDisabled = (): ReactNode => {
  return (
    <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Вся группа отключена
        </Typography>
        <SegmentButtonGroup disabled>
          <SegmentButton onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Отдельные кнопки отключены
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton disabled onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк (отключено)
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>

      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Комбинация: активная по умолчанию + отключена одна кнопка
        </Typography>
        <SegmentButtonGroup>
          <SegmentButton active onClick={action('Сталь clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton onClick={action('Цинк clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton disabled onClick={action('Чугун clicked')}>
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун (отключено)
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>
      </Box>
    </Box>
  );
};
SegmentButtonGroupDisabled.storyName = 'SegmentButtonGroup с отключенными кнопками';
SegmentButtonGroupDisabled.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const SegmentButtonGroupControlled = (): ReactNode => {
  const [activeButton, setActiveButton] = React.useState<'steel' | 'zinc' | 'iron'>('steel');

  return (
    <Box flexDirection="column" gap={24}>
      <Box flexDirection="column" gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Управление активной кнопкой извне
        </Typography>
        <Typography variant="Body1-Medium" color="var(--steel-70)">
          Текущая активная: {activeButton === 'steel' ? 'Сталь' : activeButton === 'zinc' ? 'Цинк' : 'Чугун'}
        </Typography>

        <SegmentButtonGroup>
          <SegmentButton
            active={activeButton === 'steel'}
            onClick={() => {
              setActiveButton('steel');
              action('Сталь clicked')();
            }}
          >
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Сталь
            </Typography>
          </SegmentButton>
          <SegmentButton
            active={activeButton === 'zinc'}
            onClick={() => {
              setActiveButton('zinc');
              action('Цинк clicked')();
            }}
          >
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Цинк
            </Typography>
          </SegmentButton>
          <SegmentButton
            active={activeButton === 'iron'}
            onClick={() => {
              setActiveButton('iron');
              action('Чугун clicked')();
            }}
          >
            <Typography variant="Body1-Bold" color="var(--steel-90)">
              Чугун
            </Typography>
          </SegmentButton>
        </SegmentButtonGroup>

        <Box flexDirection="row" gap={8} pt={16}>
          <Button onClick={() => setActiveButton('steel')}>Активировать Сталь через state</Button>
          <Button onClick={() => setActiveButton('zinc')}>Активировать Цинк через state</Button>
          <Button onClick={() => setActiveButton('iron')}>Активировать Чугун через state</Button>
        </Box>
      </Box>
    </Box>
  );
};
SegmentButtonGroupControlled.storyName = 'SegmentButtonGroup с управлением извне';
SegmentButtonGroupControlled.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
