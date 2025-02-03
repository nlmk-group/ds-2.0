import React, { ReactNode, useEffect, useRef, useState } from 'react';

import IconLogotype from '@components/Icon/IconsInternal/Logotype';
import {
  Box,
  Button,
  IconAddPlusOutlined24,
  IconDoneCheckOutlined24,
  IconEyeOutlined24,
  ImagePicture,
  OptionItem,
  SimpleSelect,
  Typography
} from '@components/index';

import style from './Splitter.stories.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import Splitter from '..';

const IMAGE_MOCK_SRC_MNEMO = 'img/mnemo_image_picture_mock.jpg';

const WrapperDecorator = (Story: any) => {
  return (
    <Box
      alignItems="flex-start"
      justifyContent="center"
      st={{ height: '530px', maxWidth: '1400px', marginTop: '40px', borderRadius: '10px' }}
      className={styles.wrapper}
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
          variant="secondary"
          color="ghost"
          style={{ pointerEvents: 'none' }}
          size="s"
          iconButton={<IconEyeOutlined24 htmlColor="var(--brand-sapphire-60)" />}
        />
      </Box>
      <Box justifyContent="center" alignItems="center">
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
        <Box justifyContent="center" alignItems="center" gap="16px">
          <Button startIcon={<IconAddPlusOutlined24 htmlColor="var(--unique-bluewhite)" />} variant="secondary">
            Добавить
          </Button>
          <Button startIcon={<IconDoneCheckOutlined24 />}>Разрешить</Button>
        </Box>
      </Box>
    </div>
  );

  return <Splitter topComponent={<TopComponent />} bottomComponent={bottomComponent} />;
};
SplitterDefault.storyName = 'Splitter по умолчанию';

export const SplitterImages = (): ReactNode => {
  const topComponent = (
    <div className={style['wrapper-light']}>
      <IconLogotype className={style['icon-light']} />
    </div>
  );

  const bottomComponent = (
    <div className={style['wrapper-dark']}>
      <IconLogotype className={style['icon-dark']} />
    </div>
  );

  return <Splitter bottomComponent={bottomComponent} topComponent={topComponent} />;
};
SplitterImages.storyName = 'Splitter c логотипами';
