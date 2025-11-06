import React from 'react';

import Typography from '@components/Typography';
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks';
import clsx from 'clsx';

import styles from '../Introduction/Welcome.module.scss';
import currentStyles from './Color.module.scss';

const Colors = () => {
  return (
    <div className={clsx(styles.wrapper, currentStyles.colors)}>
      <div className={styles.intro}>
        <div className={styles.description}>
          <Typography variant="Heading1">Цветовая палитра</Typography>
          <br />
          <ColorPalette>
            <div className={currentStyles['color-item']}>
              <div className={currentStyles['color-item']}>
                <ColorItem
                  title="Spectrum Red"
                  subtitle="Используются для предупреждений пользователя, аварийных сигналов, кнопок экстренного останова и индикации критических параметров работы."
                  colors={[
                    'var(--spectrum-red-10)',
                    'var(--spectrum-red-20)',
                    'var(--spectrum-red-30)',
                    'var(--spectrum-red-40)',
                    'var(--spectrum-red-50)',
                    'var(--spectrum-red-60)'
                  ]}
                />
              </div>
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Green"
                subtitle="Применяются для индикации нормального режима работы, успешно завершенных операций, отображения допустимых значений параметров."
                colors={[
                  'var(--spectrum-green-10)',
                  'var(--spectrum-green-20)',
                  'var(--spectrum-green-30)',
                  'var(--spectrum-green-40)',
                  'var(--spectrum-green-50)',
                  'var(--spectrum-green-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Yellow"
                subtitle="Для обозначения потенциально опасных предельных зон, предупреждений о приближении к предельным значениям, сигналов повышенного внимания."
                colors={[
                  'var(--spectrum-yellow-10)',
                  'var(--spectrum-yellow-20)',
                  'var(--spectrum-yellow-30)',
                  'var(--spectrum-yellow-40)',
                  'var(--spectrum-yellow-50)',
                  'var(--spectrum-yellow-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Violet"
                subtitle="Для выделения специальных режимов работы оборудования, индикации редких операций."
                colors={[
                  'var(--spectrum-violet-10)',
                  'var(--spectrum-violet-20)',
                  'var(--spectrum-violet-30)',
                  'var(--spectrum-violet-40)',
                  'var(--spectrum-violet-50)',
                  'var(--spectrum-violet-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Salad"
                subtitle="Для фокусировки внимания на экологические и энергетические показатели."
                colors={[
                  'var(--spectrum-salad-10)',
                  'var(--spectrum-salad-20)',
                  'var(--spectrum-salad-30)',
                  'var(--spectrum-salad-40)',
                  'var(--spectrum-salad-50)',
                  'var(--spectrum-salad-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Tiffany"
                subtitle="Применяется для маркировки водоохлаждаемых элементов, систем очистки и фильтрации."
                colors={[
                  'var(--spectrum-tiffany-10)',
                  'var(--spectrum-tiffany-20)',
                  'var(--spectrum-tiffany-30)',
                  'var(--spectrum-tiffany-40)',
                  'var(--spectrum-tiffany-50)',
                  'var(--spectrum-tiffany-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Coffee"
                subtitle="Индикация высокотемпературных процессов, маркировка огнеупорных материалов."
                colors={[
                  'var(--spectrum-coffee-10)',
                  'var(--spectrum-coffee-20)',
                  'var(--spectrum-coffee-30)',
                  'var(--spectrum-coffee-40)',
                  'var(--spectrum-coffee-50)',
                  'var(--spectrum-coffee-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Blueberry"
                subtitle="Для маркировки автоматизированных систем управления."
                colors={[
                  'var(--spectrum-blueberry-10)',
                  'var(--spectrum-blueberry-20)',
                  'var(--spectrum-blueberry-30)',
                  'var(--spectrum-blueberry-40)',
                  'var(--spectrum-blueberry-50)',
                  'var(--spectrum-blueberry-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Rose"
                subtitle="Используется для обозначения зон с повышенным уровнем электромагнитного излучения."
                colors={[
                  'var(--spectrum-rose-10)',
                  'var(--spectrum-rose-20)',
                  'var(--spectrum-rose-30)',
                  'var(--spectrum-rose-40)',
                  'var(--spectrum-rose-50)',
                  'var(--spectrum-rose-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Khaki"
                subtitle="Индикация пылеулавливающих и аспирационных систем, маркировка фильтрующих элементов."
                colors={[
                  'var(--spectrum-khaki-10)',
                  'var(--spectrum-khaki-20)',
                  'var(--spectrum-khaki-30)',
                  'var(--spectrum-khaki-40)',
                  'var(--spectrum-khaki-50)',
                  'var(--spectrum-khaki-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Sky"
                subtitle="Обозначение систем вентиляции и кондиционирования, индикация качества воздуха."
                colors={[
                  'var(--spectrum-sky-10)',
                  'var(--spectrum-sky-20)',
                  'var(--spectrum-sky-30)',
                  'var(--spectrum-sky-40)',
                  'var(--spectrum-sky-50)',
                  'var(--spectrum-sky-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Spectrum Orange"
                subtitle="Применяется для маркировки горячих поверхностей, зон возможного теплового излучения."
                colors={[
                  'var(--spectrum-orange-10)',
                  'var(--spectrum-orange-20)',
                  'var(--spectrum-orange-30)',
                  'var(--spectrum-orange-40)',
                  'var(--spectrum-orange-50)',
                  'var(--spectrum-orange-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Steel"
                subtitle="Монохромные оттенки с инверсией в тёмной теме. Применяются для текстов, фонов и других нейтральных элементов интерфейса."
                colors={[
                  'var(--steel-10)',
                  'var(--steel-20)',
                  'var(--steel-30)',
                  'var(--steel-40)',
                  'var(--steel-50)',
                  'var(--steel-60)',
                  'var(--steel-70)',
                  'var(--steel-80)',
                  'var(--steel-90)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Brand Jeans"
                subtitle="Применяются в сайдбаре интерфейса и его UI-элементах."
                colors={['var(--brand-jeans-10)', 'var(--brand-jeans-20)', 'var(--brand-jeans-30)']}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Brand Sapphire"
                subtitle="Цвета бренда Группы НЛМК, адаптированные для веб-интерфейсов."
                colors={[
                  'var(--brand-sapphire-10)',
                  'var(--brand-sapphire-20)',
                  'var(--brand-sapphire-30)',
                  'var(--brand-sapphire-40)',
                  'var(--brand-sapphire-50)',
                  'var(--brand-sapphire-60)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Unique"
                subtitle="Цвета, обладающие особенностями и не подходящие ни под одну из категорий."
                colors={[
                  'var(--unique-black)',
                  'var(--unique-background)',
                  'var(--unique-white)',
                  'var(--unique-bluewhite)',
                  'var(--unique-section)',
                  'var(--unique-divider)'
                ]}
              />
            </div>
            <div className={currentStyles['color-item']}>
              <ColorItem
                title="Mnemo"
                subtitle="Созданы для разработки компонентов мнемосхем. Предусматривают инверсию в тёмной теме."
                colors={[
                  'var(--mnemo-10)',
                  'var(--mnemo-20)',
                  'var(--mnemo-30)',
                  'var(--mnemo-40)',
                  'var(--mnemo-50)',
                  'var(--mnemo-60)',
                  'var(--mnemo-70)',
                  'var(--mnemo-80)',
                  'var(--mnemo-90)'
                ]}
              />
            </div>
          </ColorPalette>
        </div>
      </div>
    </div>
  );
};

export default Colors;
