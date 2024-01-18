import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './BadgeSpecialOverlay.module.scss';

type TProps = {
  className?: string;
};

const BadgeSpecialOverlay: FC<TProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      fill="none"
      className={clsx(styles['badge-special-overlay'], className)}
    >
      <g filter="url(#filter0_dd_662_1961)">
        <path
          d="M17 5L18.4642 5.75524L20.0902 5.48944L21.2494 6.66018L22.8779 6.90983L23.6185 8.38148L25.0902 9.12215L25.3398 10.7506L26.5106 11.9098L26.2448 13.5358L27 15L26.2448 16.4642L26.5106 18.0902L25.3398 19.2494L25.0902 20.8779L23.6185 21.6185L22.8779 23.0902L21.2494 23.3398L20.0902 24.5106L18.4642 24.2448L17 25L15.5358 24.2448L13.9098 24.5106L12.7506 23.3398L11.1221 23.0902L10.3815 21.6185L8.90983 20.8779L8.66018 19.2494L7.48944 18.0902L7.75524 16.4642L7 15L7.75524 13.5358L7.48944 11.9098L8.66018 10.7506L8.90983 9.12215L10.3815 8.38148L11.1221 6.90983L12.7506 6.66018L13.9098 5.48944L15.5358 5.75524L17 5Z"
          fill="var(--spectrum-violet-600)"
        />
        <path
          d="M17.2292 4.55563L17 4.43741L16.7708 4.55563L15.4534 5.23513L13.9905 4.99599L13.736 4.95438L13.5545 5.13764L12.5116 6.19099L11.0464 6.4156L10.7915 6.45468L10.6755 6.68505L10.0091 8.00913L8.68505 8.67552L8.45468 8.79146L8.4156 9.04638L8.19099 10.5116L7.13764 11.5545L6.95438 11.736L6.99599 11.9905L7.23513 13.4534L6.55563 14.7708L6.43741 15L6.55563 15.2292L7.23513 16.5466L6.99599 18.0095L6.95438 18.264L7.13764 18.4455L8.19099 19.4884L8.4156 20.9536L8.45468 21.2085L8.68505 21.3245L10.0091 21.9909L10.6755 23.315L10.7915 23.5453L11.0464 23.5844L12.5116 23.809L13.5545 24.8624L13.736 25.0456L13.9905 25.004L15.4534 24.7649L16.7708 25.4444L17 25.5626L17.2292 25.4444L18.5466 24.7649L20.0095 25.004L20.264 25.0456L20.4455 24.8624L21.4884 23.809L22.9536 23.5844L23.2085 23.5453L23.3245 23.315L23.9909 21.9909L25.315 21.3245L25.5453 21.2085L25.5844 20.9536L25.809 19.4884L26.8624 18.4455L27.0456 18.264L27.004 18.0095L26.7649 16.5466L27.4444 15.2292L27.5626 15L27.4444 14.7708L26.7649 13.4534L27.004 11.9905L27.0456 11.736L26.8624 11.5545L25.809 10.5116L25.5844 9.04638L25.5453 8.79146L25.315 8.67552L23.9909 8.00913L23.3245 6.68505L23.2085 6.45468L22.9536 6.4156L21.4884 6.19099L20.4455 5.13764L20.264 4.95438L20.0095 4.99599L18.5466 5.23513L17.2292 4.55563Z"
          stroke="var(--never-changes-white)"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_662_1961"
          x="0.874756"
          y="0.874756"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.403922 0 0 0 0 0.431373 0 0 0 0 0.462745 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_662_1961" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_662_1961" result="effect2_dropShadow_662_1961" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_662_1961" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default BadgeSpecialOverlay;
