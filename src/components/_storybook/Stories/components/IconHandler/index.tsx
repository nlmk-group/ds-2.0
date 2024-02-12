import React, { FC } from 'react';
import styles from '../../Stories.module.scss'

interface IIconHandler {
  name: 'moon' | 'sun'
}

const handlePath = {
  moon: 'M13 6V3m5.5 9V7m-4-2.5h-3m9.5 5h-5m-.445 7.315a8.34 8.34 0 0 0 3.445-.74A8.37 8.37 0 1 1 7.925 5a8.37 8.37 0 0 0 7.63 11.815Z',
  sun: 'M12 3v1m0 16v1m-8-9H3m3.314-5.686L5.5 5.5m12.186.814L18.5 5.5M6.314 17.69l-.814.81m12.186-.81.814.81M21 12h-1m-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
}

const IconHandler: FC<IIconHandler> = ({
  name
}) => {
  return (
    <div className={styles['icon-svg-wrapper']}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={handlePath[name]}
        />
      </svg>
    </div>
  )
}

export default IconHandler