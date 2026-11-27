import React from 'react';

import { EIconsAccordion, EVariantsAccordion } from '@components/Accordion/enums';
import { IconChevronArrowUpOutlined24, IconCloseOutlined16 } from '@components/Icon/IconsDirectory';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { IAccordionItemProps } from './types';

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
      <span
        data-testid={testid}
        className={clsx(
          styles['icon_helper'],
          isExpanded ? styles[iconsStyles[icon][0]] : styles[iconsStyles[icon][1]]
        )}
      >
        <Icon {...iconProps} />
      </span>
    );
  };

  const panelId = React.useId();

  return (
    <div
      className={clsx(styles.item, styles[size], styles[variant], { [styles.disabled]: disabled }, className)}
      {...props}
      data-expanded={isExpanded}
      data-ui-accordion-item
    >
      <button
        type="button"
        className={styles.header}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        disabled={disabled}
        onClick={() => onExpand(id)}
        data-ui-accordion-header
      >
        {startIcon ? (
          <span className={styles.icon} data-ui-accordion-start-icon>
            {getExpandIcon(startIcon, 'ACCORDION_LEFT_ICON')}
          </span>
        ) : null}
        <span style={{ flexGrow: 1 }} data-ui-accordion-title>
          <Typography variant={TYPOGRAPHY_TITLE_VARIANTS[size]}>{title}</Typography>
        </span>
        {endIcon ? (
          <span className={styles.icon} data-ui-accordion-end-icon>
            {getExpandIcon(endIcon, 'ACCORDION_RIGHT_ICON')}
          </span>
        ) : null}
      </button>
      <div
        ref={panel => {
          panel?.toggleAttribute('inert', !isExpanded);
        }}
        id={panelId}
        aria-hidden={!isExpanded}
        className={clsx(styles.expandable, isExpanded && styles.expanded)}
        data-ui-accordion-content-container
      >
        <div className={styles.clip}>
          <Typography
            variant={TYPOGRAPHY_CONTENT_VARIANTS[size]}
            className={clsx(styles.content, variant === EVariantsAccordion.paper && styles['content_paper'])}
            data-ui-accordion-content
          >
            {children}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
