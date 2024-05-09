import React, { createElement, ReactNode, useEffect, useRef, useState } from 'react';

import { CopyWrapper } from '@components/Colors/subcomponents/CopyWrapper';
import argsTypes from '@components/Icon/_stories/argsTypes';
import { TIconName } from '@components/Icon/IconsDirectory/unionType';
import { TIconProps, TIconsObject } from '@components/Icon/types';
import { Card, Icon, Input, Typography } from '@components/index';
import { Meta, StoryFn } from '@storybook/react';
import { clsx } from 'clsx';
import { startCase } from 'lodash';

import styles from './Icon.module.scss';

import icons from '../IconsDirectory';

export default {
  title: 'Components/Icon/Stories',
  component: Icon,
  argTypes: argsTypes,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Icon>;

interface IconsWithSizesAndColors {
  [iconName: string]: {
    [size: string]: ReactNode;
  };
}

export const IconComponent = ({
  name = 'IconArmatura32',
  color = 'primary',
  containerSize = 32,
  ...args
}: TIconProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, styles.sized)}>
      <Icon name="IconArmatura32" color={color} containerSize={containerSize} {...args} />
    </div>
  );
};

IconComponent.storyName = 'Компонент Icon по умолчанию';
IconComponent.args = {
  name: 'IconArmatura32',
  color: 'primary',
  containerSize: 32
};
IconComponent.decorators = [
  (Story: StoryFn) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
      <Story />
    </div>
  )
];

export const AllIcons = (): JSX.Element => {
  // Иконки только со stroke
  const iconsUseStroke = [
    'IconJsonOutlined24',
    'IconLightningStroke16',
    'IconLightningStroke24',
    'IconLightningStroke32',
    'IconPhoneCallContact16',
    'IconPhoneCallContact24',
    'IconPhoneCallContact32',
    'IconTemperatureStroke16',
    'IconTemperatureStroke24',
    'IconTemperatureStroke32',
    'IconWeightTypeOutlined16',
    'IconWeightTypeOutlined24',
    'IconWeightTypeOutlined32',
    'IconMesBunkerOutlined16',
    'IconMesBunkerOutlined24',
    'IconMesBunkerOutlined32',
    'IconPicInPic16',
    'IconPicInPic24',
    'IconPicInPic32'
  ];
  // Иконки и с fill, и со stroke
  const iconsUseFillAndStroke = [
    'IconLightningFilled16',
    'IconLightningFilled24',
    'IconLightningFilled32',
    'IconBasketBuying16',
    'IconBasketBuying24',
    'IconBasketBuying32',
    'IconPlay16',
    'IconPlay24',
    'IconPlay32',
    'IconBalanceOutlined16',
    'IconBalanceOutlined24',
    'IconBalanceOutlined32',
    'IconKovsh16',
    'IconKovsh24',
    'IconKovsh32',
    'IconWeightTypeFilled16',
    'IconWeightTypeFilled24',
    'IconWeightTypeFilled32'
  ];
  // Иконки которые задуманы для использования только в одном цвете
  const iconsAlwaysDefaultColor = ['IconBorder16', 'IconBorder24', 'IconBorder32'];

  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const iconsByNames: IconsWithSizesAndColors = {};

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty('--icon-color', newColor);
  };

  const formatIconName = (name: string) => {
    return name.replace('Icon', '');
  };

  Object.keys(icons).forEach((size: keyof TIconsObject) => {
    Object.keys(icons[size] || {}).forEach((iconName: string) => {
      const formattedIconName = formatIconName(iconName as TIconName).replace(size.toString(), '');
      if (!iconsByNames[formattedIconName]) {
        iconsByNames[formattedIconName] = {};
      }
      const useStroke = iconName.includes('Kovsh');
      const iconComponent = icons[size][iconName as TIconName];
      if (iconComponent) {
        const iconProps: Record<string, any> = {
          style: {
            ...(useStroke && { stroke: 'var(--icon-color)' })
          }
        };
        iconsByNames[formattedIconName][size.toString()] = createElement(iconComponent, iconProps);
      }
    });
  });

  const filteredIcons = Object.keys(iconsByNames)
    .filter(iconName => {
      const searchWords = debouncedSearchText.toLowerCase().split(' ');
      return searchWords.every(word => iconName.toLowerCase().includes(word));
    })
    .map(iconName => ({
      title: iconName,
      sizes: iconsByNames[iconName]
    }));

  const colorInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initialColor =
      getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim() || '#167ffb';
    if (colorInputRef.current) {
      colorInputRef.current.value = initialColor;
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Input
          label="Поиск иконок"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className={styles.input}
        />
        <div className={styles.colorControl}>
          <Typography variant="Body1" className={styles.colorControlTitle}>
            Выберите цвет:
          </Typography>
          <input
            type="color"
            ref={colorInputRef}
            defaultValue="#167ffb"
            onChange={handleChangeColor}
            className={styles.colorInput}
          />
        </div>
      </div>
      <div className={styles.table}>
        {filteredIcons.length > 0 ? (
          filteredIcons.map((icon, key) => (
            <Card key={key} className={styles.card} indicatorStatus="info">
              <div className={styles.cardHeader}>
                <Typography variant="Body1" color="primary">
                  {startCase(formatIconName(icon.title))}
                </Typography>
              </div>
              <div className={styles.icons}>
                {Object.entries(icon.sizes).map(([size, iconElement]) => {
                  const useStroke = iconsUseStroke.includes(`Icon${icon.title}${size}`);
                  const useFillAndStroke = iconsUseFillAndStroke.includes(`Icon${icon.title}${size}`);
                  const isAlwaysDefaultColorIcon = iconsAlwaysDefaultColor.includes(`Icon${icon.title}${size}`);
                  return (
                    <CopyWrapper key={`Icon${icon.title}${size}`} copy={`Icon${icon.title}${size}`} placement="bottom">
                      <div
                        key={size}
                        className={clsx(styles.icon, {
                          [styles.strokeIcon]: useStroke,
                          [styles.fillAndStrokeIcon]: useFillAndStroke,
                          [styles.iconFill]: !useStroke && !useFillAndStroke && !isAlwaysDefaultColorIcon
                        })}
                      >
                        {iconElement}
                      </div>
                    </CopyWrapper>
                  );
                })}
              </div>
            </Card>
          ))
        ) : (
          <Typography variant="Heading2" color="primary" className={styles.noResults}>
            Ничего не найдено
          </Typography>
        )}
      </div>
    </div>
  );
};
AllIcons.storyName = 'Все доступные иконки';
