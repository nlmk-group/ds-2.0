import React, { useState } from 'react';

import { Button, IconArticleOutlined24, Input, SlideToggle, Typography } from '@components/index';
import { Meta } from '@storybook/react';

import style from './SlideToggle.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { ESizeMapping } from '../enum';
import { ISlideToggleProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/SlideToggle/Stories',
  component: SlideToggle,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof SlideToggle>;

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero';

export const SlideToggleDefault = (argTypes: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <SlideToggle {...argTypes} title={'Заголовок'} isShow={show} onToggle={() => setShow(!show)}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>
  );
};
SlideToggleDefault.storyName = 'SlideToggle по умолчанию';

export const SlideToggleSizes = (argTypes: ISlideToggleProps): JSX.Element => {
  const [showDefault, setShowDefault] = useState<boolean>(false);
  const [showCompact, setShowCompact] = useState<boolean>(false);
  return (
    <>
      <SlideToggle
        {...argTypes}
        title={'Заголовок'}
        isShow={showDefault}
        onToggle={() => setShowDefault(!showDefault)}
        size={ESizeMapping.default}
      >
        <Typography color="primary">{loremIpsum}</Typography>
      </SlideToggle>
      <SlideToggle
        {...argTypes}
        title={'Заголовок'}
        isShow={showCompact}
        onToggle={() => setShowCompact(!showCompact)}
        size={ESizeMapping.compact}
      >
        <Typography color="primary">{loremIpsum}</Typography>
      </SlideToggle>
    </>
  );
};
SlideToggleSizes.storyName = 'SlideToggle с разными размерами';

export const SlideToggleShadow = (argTypes: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <SlideToggle {...argTypes} title={'Заголовок'} isShow={show} onToggle={() => setShow(!show)}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>
  );
};
SlideToggleShadow.storyName = 'SlideToggle с тенью';
SlideToggleShadow.args = {
  toggleContainerShadow: true
};

export const SlideToggleCustomized = (argTypes: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const title = (
    <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '16px'}}>
      <Button iconButton={<IconArticleOutlined24 />} />
      <Typography>Это кастомный title компонента SlideToggle</Typography>
    </div>
  );

  const actionBlock = (
    <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '16px'}}>
      <Input label='input в action block' />
      <Button iconButton={<IconArticleOutlined24 />} />
      <Button iconButton={<IconArticleOutlined24 />} />
      <Button iconButton={<IconArticleOutlined24 />} />
    </div>
  );

  return (
    <SlideToggle {...argTypes} isShow={show} onToggle={() => setShow(!show)} title={title} after={actionBlock}>
      <Typography color="primary">{loremIpsum}</Typography>
    </SlideToggle>
  );
};
SlideToggleCustomized.storyName = 'SlideToggle кастомный';
SlideToggleCustomized.args = {
  className: style['color'],
  toggleContainerShadow: true
};
