import React, { FC, Fragment, useState, useMemo } from 'react'
import {
  IToggleButtonGroup,
  IToggleButtonGroupItem,
  IBaseToggleButtonGroupItem,
  IActiveHelper
} from './types'
import styles from './ToggleButtonGroup.module.scss';
import ToggleButton from './ToggleButton'
import { Divider } from '..';
import { clsx } from 'clsx';
import { sizeMapping, statusMapping } from './enums';

const ToggleButtonGroup: FC<IToggleButtonGroup> = ({
  className = '',
  btnGroup,
  size = sizeMapping.default,
  status = statusMapping.default
}) => {
  const toggleBtn = (id: number, isActive: boolean) => {
    const result = group.map((btn: IActiveHelper) => ({
      ...btn,
      active: btn.id === id ? !isActive : false
    }));
    setGroup(result)
  }

  const createGroup = () => {
    return btnGroup.map((btn: IBaseToggleButtonGroupItem, index) => ({
      ...btn,
      id: index,
      onBtnClick: toggleBtn
    }));
  };
  
  const transformedBtnGroup = useMemo(() => createGroup(), [btnGroup])
  const [group, setGroup] = useState<IActiveHelper[]>(transformedBtnGroup.map((btn) => ({id: btn.id, active: !!btn.active})));

  return (
    <div className={clsx(className, styles.wrapper)}>
      {transformedBtnGroup.map((btn: IToggleButtonGroupItem, index: number) => (
        <Fragment key={index}>
          <ToggleButton
            {...btn}
            active={group[index].active}
            size={size}
            status={btn.status || status}
          />
          {btn !== transformedBtnGroup.at(-1) && (
            <div className={styles['divider-wrapper']}>
              <Divider type="vertical" className={styles['divider-space-color']} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default ToggleButtonGroup
