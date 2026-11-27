import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import IconLogotype from '@components/Icon/IconsInternal/Logotype';
import {
  Box,
  Button,
  ESplitterOrientation,
  IconAddPlusOutlined24,
  IconDoneCheckOutlined24,
  IconEyeOutlined24,
  ImagePicture,
  Input,
  OptionItem,
  SimpleSelect,
  Typography
} from '@components/index';
import { BottomComponent, TopComponent, TopComponentSelect } from '@components/Splitter/mock';

import style from './Splitter.stories.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import Splitter from '..';

const IMAGE_MOCK_SRC_MNEMO = 'img/mnemo_image_picture_mock.jpg';

const WrapperDecorator = (Story: any) => {
  return (
    <Box
      alignItems="flex-start"
      justifyContent="safe center"
      st={{ overflow: 'auto', height: 'clamp(320px, 60vh, 480px)', borderRadius: '10px' }}
      className={`${styles.wrapper} ${style.stage}`}
    >
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/Splitter/Stories',
  component: Splitter,
  decorators: [WrapperDecorator]
};

export const SplitterDefault = (): ReactNode => {
  const options = Array.from({ length: 11 }, (_, i) => i);

  const TopComponent = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (wrapperRef.current && wrapperRef.current.parentElement) {
        const parentNode = wrapperRef.current.parentElement;

        parentNode.style.minHeight = '240px';

        const updateHeight = () => {
          const rect = parentNode.getBoundingClientRect();
          setHeight(rect.height);
        };

        updateHeight();

        const resizeObserver = new ResizeObserver(() => {
          updateHeight();
        });
        resizeObserver.observe(parentNode);

        return () => {
          resizeObserver.disconnect();
        };
      }
    }, []);

    return (
      <div ref={wrapperRef} className={style['picture-wrapper']}>
        <div className={style.picture} style={{ height: `${height - 32}px` }}>
          <ImagePicture
            src={IMAGE_MOCK_SRC_MNEMO}
            alt="Mock Image Mnemo"
            aspectRatio="ratio-16x9"
            radius="radius-none"
            zoom={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', overflow: 'hidden' }}
          />
        </div>
      </div>
    );
  };

  const bottomComponent = (
    <div className={style.wrapper} style={{ paddingTop: '16px' }}>
      <Box alignItems="center" gap="8px">
        <Typography className={style.mgtop} variant="Heading4">
          Информация по рассмотрению
        </Typography>
        <Button
          type="button"
          variant="secondary"
          color="ghost"
          style={{ pointerEvents: 'none' }}
          size="s"
          iconButton={<IconEyeOutlined24 htmlColor="var(--brand-sapphire-60)" />}
        />
      </Box>
      <Box justifyContent="center" alignItems="center">
        <Box justifyContent="center" alignItems="center" gap="16px">
          <Typography className={style.mgtop} variant="Body1-Medium">
            Отображать строк
          </Typography>
          <SimpleSelect value={10} style={{ width: '80px' }}>
            {options.map(i => (
              <OptionItem key={i} value={i} label={String(i)}>
                {i}
              </OptionItem>
            ))}
          </SimpleSelect>
        </Box>
        <Box justifyContent="center" alignItems="center" gap="16px">
          <Button
            type="button"
            startIcon={<IconAddPlusOutlined24 htmlColor="var(--unique-bluewhite)" />}
            variant="secondary"
          >
            Добавить
          </Button>
          <Button type="button" startIcon={<IconDoneCheckOutlined24 />}>
            Разрешить
          </Button>
        </Box>
      </Box>
    </div>
  );

  return <Splitter topComponent={<TopComponent />} bottomComponent={bottomComponent} />;
};
SplitterDefault.storyName = 'Разделение панелей · Splitter';

export const SplitterImages = (): ReactNode => (
  <div className={style.comparison} role="group" aria-label="Сравнение логотипа на тёмном и светлом фоне">
    <Splitter
      topComponent={
        <div className={style.darkLayer}>
          <IconLogotype />
        </div>
      }
      bottomComponent={
        <div className={style.lightLayer}>
          <IconLogotype />
        </div>
      }
    />
  </div>
);
SplitterImages.storyName = 'Сравнение логотипа · Splitter';

export const SplitterVertical = (): ReactNode => {
  const leftComponent = (
    <Box className={style.pane} flexDirection="column" justifyContent="center" alignItems="center" gap={8}>
      <Typography variant="Heading4">Задание смены</Typography>
      <Typography>Проверить линию прокатки перед запуском.</Typography>
    </Box>
  );

  const rightComponent = (
    <Box className={style.pane} flexDirection="column" justifyContent="center" alignItems="center" gap={8}>
      <Typography variant="Heading4">Исполнитель</Typography>
      <Typography>Мастер участка</Typography>
    </Box>
  );

  return <Splitter topComponent={leftComponent} bottomComponent={rightComponent} orientation="vertical" />;
};
SplitterVertical.storyName = 'Splitter вертикальный';

export const SplitterWithSizes = (): ReactNode => (
  <Splitter
    topComponent={<TopComponent />}
    bottomComponent={<BottomComponent />}
    topComponentSize={160}
    bottomComponentSize={320}
  />
);
SplitterWithSizes.storyName = 'Горизонтальный Splitter с начальными размерами';

export const VerticalSplitterWithSizes = (): ReactNode => (
  <Splitter
    topComponent={<TopComponent />}
    bottomComponent={<BottomComponent />}
    topComponentSize={520}
    bottomComponentSize={340}
    orientation={ESplitterOrientation.vertical}
  />
);
VerticalSplitterWithSizes.storyName = 'Вертикальный Splitter с начальными размерами';

export const SplitterWithOneSize = (): ReactNode => {
  return <Splitter topComponent={<TopComponent />} bottomComponent={<BottomComponent />} topComponentSize={450} />;
};
SplitterWithOneSize.storyName = 'Splitter с одним заданным размером';

export const SplitterWithHiddenBottom = (): ReactNode => {
  const defaultTabHeight = 130;
  const [showBottom, setShowBottom] = useState(false);
  const [selected, setSelected] = useState('');
  const [bottomHeight, setBottomHeight] = useState(defaultTabHeight);
  const [activeTab, setActiveTab] = useState(1);

  const options = [
    { value: '1', label: 'Окатыши железорудные' },
    { value: '2', label: 'Агломерат' },
    { value: '3', label: 'Кварцит' },
    { value: '4', label: 'Руда марганцевая' }
  ];
  const bottomHeightMap: Record<number, number> = {
    1: defaultTabHeight,
    2: 170,
    3: 210
  };

  const handleTab = (tab: number) => {
    setActiveTab(tab);
    setBottomHeight(bottomHeightMap[tab] ?? defaultTabHeight);
  };

  const selectedRawMaterial = useMemo(() => options.find(item => item.value === selected)?.label, [selected]);

  return (
    <Box flexDirection="column" alignItems="flex-start" width="100%">
      <Splitter
        topComponent={
          <TopComponentSelect
            setShowBottom={setShowBottom}
            selected={selected}
            setSelected={setSelected}
            options={options}
          />
        }
        bottomComponent={
          <BottomComponent
            rawMaterial={selectedRawMaterial}
            setShowBottom={setShowBottom}
            handleTab={handleTab}
            activeTab={activeTab}
          />
        }
        topComponentSize={95}
        bottomComponentSize={bottomHeight}
        isShowBottomComponent={showBottom}
      />
      <Box background="var(--steel-10)" flexDirection="column" width="calc(100% - 32px)" borderRadius={4} p={16}>
        <Typography variant="Body-Bold">Этапы доставки</Typography>
        <Input label="Исходящий номер уведомления" value="341809494" />
        <Input label="Поставщик металла / Сбытовая организация" value="ПАО НЛМК / ПАО НЛМК" />
      </Box>
    </Box>
  );
};
SplitterWithHiddenBottom.storyName = 'Splitter с возможностью скрытия панели';

export const VerticalSplitterWithHiddenBottom = (): ReactNode => {
  const [showBottom, setShowBottom] = useState(false);
  const [selected, setSelected] = useState('');
  const options = [
    { value: '1', label: 'Окатыши железорудные' },
    { value: '2', label: 'Агломерат' },
    { value: '3', label: 'Кварцит' },
    { value: '4', label: 'Руда марганцевая' }
  ];
  const selectedRawMaterial = useMemo(() => options.find(item => item.value === selected)?.label, [selected]);

  return (
    <Box flexDirection="column" alignItems="flex-start" width="100%" height="100%">
      <Splitter
        topComponent={
          <TopComponentSelect
            setShowBottom={setShowBottom}
            selected={selected}
            setSelected={setSelected}
            options={options}
          />
        }
        bottomComponent={
          <BottomComponent rawMaterial={selectedRawMaterial} setShowBottom={setShowBottom} buttonPlacement="bottom" />
        }
        topComponentSize={580}
        bottomComponentSize={340}
        isShowBottomComponent={showBottom}
        orientation={ESplitterOrientation.vertical}
      />
    </Box>
  );
};
VerticalSplitterWithHiddenBottom.storyName = 'Вертикальный Splitter с возможностью скрытия панели';
