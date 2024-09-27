import React from 'react';

import { EIconsAccordion, EVariantsAccordion } from '@components/Accordion/enums';
import { IconChevronArrowUpOutlined24, IconCloseOutlined16 } from '@components/Icon/IconsDirectory';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { IAccordionItemProps, TAccordionItem } from './types';

import styles from './AccordionItem.module.scss';

import { TYPOGRAPHY_CONTENT_VARIANTS, TYPOGRAPHY_TITLE_VARIANTS } from './constants';

/**
 * Компонент AccordionItem представляет собой отдельный элемент аккордеона.
 *
 * @param {object} props - Свойства компонента AccordionItem.
 * @param {TAccordionItem['id']} props.id - Идентификатор элемента аккордеона.
 * @param {string} props.title - Заголовок элемента аккордеона.
 * @param {ESizesAccordion} props.size - Размер элемента аккордеона.
 * @param {EVariantsAccordion} props.variant - Вариант внешнего вида элемента аккордеона.
 * @param {EIconsAccordion} props.startIcon - Иконка в начале заголовка элемента аккордеона.
 * @param {EIconsAccordion} props.endIcon - Иконка в конце заголовка элемента аккордеона.
 * @param {boolean} props.isExpanded - Определяет, развернут ли элемент аккордеона.
 * @param {function} props.onExpand - Функция, вызываемая при развертывании элемента.
 * @param {boolean} props.disabled - Определяет, отключен ли элемент.
 * @param {ReactNode} props.children - Содержимое элемента аккордеона.
 * @param {string} props.className - Дополнительный CSS-класс.
 * @returns {JSX.Element} - Компонент AccordionItem.
 */
const AccordionItem: React.FC<IAccordionItemProps> = ({
  id,
  title,
  size,
  variant,
  startIcon,
  endIcon,
  isExpanded,
  onExpand,
  disabled,
  children,
  className,
  ...props
}) => {
  const iconProps = {
    htmlColor: 'var(--steel-90)'
  };

  const getExpandIcon = (icon: `${EIconsAccordion}`, testid: string) => {
    const iconsStyles = {
      plus: ['icon_cross', 'icon_plus'],
      arrow: ['icon_down', 'icon_up']
    };

    const Icon = icon === EIconsAccordion.plus ? IconCloseOutlined16 : IconChevronArrowUpOutlined24;

    return (
      <div
        data-testid={testid}
        className={clsx(
          styles['icon_helper'],
          isExpanded ? styles[iconsStyles[icon][0]] : styles[iconsStyles[icon][1]]
        )}
      >
        <Icon {...iconProps} />
      </div>
    );
  };

  const handleClick = (id: TAccordionItem['id']): void => {
    if (disabled) {
      return;
    }
    onExpand(id);
  };

  return (
    <div
      className={clsx(
        styles.item,
        styles[size],
        styles[variant],
        { [styles.disabled]: disabled },
        className
      )}
      {...props}
    >
      <div className={styles.header} onClick={() => handleClick(id)}>
        {startIcon ? <div className={styles.icon}>{getExpandIcon(startIcon, 'ACCORDION_LEFT_ICON')}</div> : null}
        <div style={{ flexGrow: 1 }}>
          <Typography variant={TYPOGRAPHY_TITLE_VARIANTS[size]}>{title}</Typography>
        </div>
        {endIcon ? <div className={styles.icon}>{getExpandIcon(endIcon, 'ACCORDION_RIGHT_ICON')}</div> : null}
      </div>
      <div className={clsx(styles.expandable, isExpanded && styles.expanded)}>
        <Typography
          variant={TYPOGRAPHY_CONTENT_VARIANTS[size]}
          className={clsx(
            styles['content_basic'],
            isExpanded && styles.content,
            variant === EVariantsAccordion.paper && styles['content_paper']
          )}
        >
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default AccordionItem;
