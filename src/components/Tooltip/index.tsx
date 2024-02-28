import React, { FC, MouseEvent, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ITooltipProps } from './types';
import Typography from '@components/Typography';
import clsx from 'clsx';

import styles from './Tooltip.module.scss';

const Tooltip: FC<ITooltipProps> = ({
  className,
  children,
  behavior = 'hover',
  placement = 'top',
  title,
  list,
  description,
  render
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const targetRef = React.useRef<HTMLDivElement>(null);

  const IsShowTooltip = useMemo(() => {
    switch (behavior) {
      case 'click':
        return isClicked;
      case 'focus':
        return isFocused;
      default:
        return isHovered;
    }
  }, [behavior, isHovered, isFocused, isClicked]);

  const handleOutsideClick = (event: Event) => {
    if (targetRef.current) {
      if (targetRef.current.contains(event.target as HTMLElement)) {
        return;
      }
      setIsClicked(false);
    }
  };
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const clickBehavior = behavior === 'click';

    if (clickBehavior) {
      document[!isClicked ? 'addEventListener' : 'removeEventListener']('click', handleOutsideClick, false);
      setIsClicked(prevState => !prevState);
    }

    if (!clickBehavior && targetRef.current) {
      targetRef.current.blur();
    }
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const renderTitle = (title: string): JSX.Element => {
    return (
      <Typography className={styles['tooltip-title']} variant="Caption-Bold">
        {title}
      </Typography>
    );
  };

  const renderDescription = (description: string): JSX.Element => {
    return (
      <Typography className={styles['tooltip-description']} variant="Caption-Medium">
        {description}
      </Typography>
    );
  };

  const renderListItems = (list: string[]) => {
    return (
      <div className={styles['tooltip-list']}>
        {list.map((item, index) => (
          <Typography className={styles['tooltip-list-item']} variant="Caption-Medium" key={String(index)}>
            <li>{item}</li>
          </Typography>
        ))}
      </div>
    );
  };

  return (
    <div className={clsx(styles.tooltip, className)}>
      <div
        className={styles['tooltip-target']}
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        {children}
      </div>
      <CSSTransition
        in={IsShowTooltip}
        timeout={200}
        classNames={styles['tooltip-transition' as keyof typeof styles]}
        unmountOnExit
        data-testid="tooltip"
      >
        <div
          className={clsx(
            styles['tooltip-container'],
            styles[`tooltip-container--${placement}` as keyof typeof styles]
          )}
        >
          <div className={styles['tooltip-content']}>
            {title && renderTitle(title)}
            {list && renderListItems(list)}
            {description && renderDescription(description)}
            {render && <>{render}</>}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Tooltip;
