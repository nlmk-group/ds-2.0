import React, { useState } from 'react';

import { EBadgeColors } from '@components/Badge/enums';
import {
  Badge,
  Button,
  IconArticleOutlined24,
  IconStarFilled16,
  IconStarFilled24,
  IconStarOutlined16,
  IconStarOutlined24,
  Input,
  SlideToggle,
  Typography
} from '@components/index';
import { Meta } from '@storybook/react';

import style from './SlideToggle.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { ESizeMapping } from '../enum';
import { ISlideToggleProps, ISlideToggleWithButtonProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/SlideToggle/Stories',
  component: SlideToggle,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof SlideToggle>;

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus tellus non arcu dignissim, sed venenatis tortor sollicitudin. Phasellus sodales urna ut mi porttitor blandit. Integer id ligula quis ante ultrices rhoncus. Aenean mi augue, venenatis id volutpat a, vehicula vitae massa. Nullam aliquam diam eu dui imperdiet rutrum. Nam porta quam eu dolor malesuada consequat. Cras non lacinia orci, scelerisque tincidunt mi. Praesent velit turpis, euismod a dictum et, viverra et diam. Morbi feugiat erat a bibendum commodo. Nullam facilisis pulvinar justo, et posuere leo dapibus et. Morbi quam mi, rutrum sed egestas eu, rutrum vitae ipsum. Integer dignissim ex in mauris suscipit volutpat. Donec nec ipsum rutrum lectus venenatis pulvinar. Sed molestie id ex a tristique. Sed arcu augue, rhoncus at commodo ut, rutrum in libero';

export const SlideToggleDefault = (args: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>
  );
};
SlideToggleDefault.storyName = 'SlideToggle по умолчанию';
SlideToggleDefault.args = {
  title: 'Заголовок'
};

export const SlideToggleSizes = (args: ISlideToggleProps): JSX.Element => {
  const [showDefault, setShowDefault] = useState<boolean>(false);
  const [showCompact, setShowCompact] = useState<boolean>(false);
  return (
    <>
      <SlideToggle
        {...args}
        title={args.title}
        isShow={showDefault}
        onToggle={() => setShowDefault(!showDefault)}
        size={ESizeMapping.default}
      >
        <Typography variant="Body2-Medium" color="primary">
          {loremIpsum}
        </Typography>
      </SlideToggle>
      <SlideToggle
        {...args}
        title={args.title}
        isShow={showCompact}
        onToggle={() => setShowCompact(!showCompact)}
        size={ESizeMapping.compact}
      >
        <Typography variant="Body2-Medium" color="primary">
          {loremIpsum}
        </Typography>
      </SlideToggle>
    </>
  );
};
SlideToggleSizes.storyName = 'SlideToggle с разными размерами';
SlideToggleSizes.args = {
  title: 'Заголовок'
};

export const SlideToggleWithButton = (args: ISlideToggleWithButtonProps): JSX.Element => {
  const [showDefault, setShowDefault] = useState<boolean>(false);
  const [showCompact, setShowCompact] = useState<boolean>(false);

  const [isCompactStarFilled, setIsCompactStarFilled] = useState(false);
  const [isDefaultStarFilled, setIsDefaultStarFilled] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    console.log('click', e);
  };

  const actionBlockCompact = (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '4px', gap: '4px' }}>
      <Button
        type="button"
        onClick={e => {
          e.stopPropagation();
          handleClick(e);
          setIsCompactStarFilled(!isCompactStarFilled);
        }}
        size="s"
        style={{ padding: '4px' }}
        startIcon={isCompactStarFilled ? <IconStarFilled16 /> : <IconStarOutlined16 />}
        color="ghost"
        variant="secondary"
      />
      <Badge size="s" color={args.badgeColor}>
        {args.badgeChildren}
      </Badge>
    </div>
  );

  const actionBlockDefault = (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '4px', gap: '4px' }}>
      <Button
        type="button"
        onClick={e => {
          e.stopPropagation();
          handleClick(e);
          setIsDefaultStarFilled(!isDefaultStarFilled);
        }}
        color="ghost"
        variant="secondary"
        size="m"
        style={{ padding: '4px' }}
        startIcon={isDefaultStarFilled ? <IconStarFilled24 /> : <IconStarOutlined24 />}
      />
      <Badge size="l" color={args.badgeColor}>
        {args.badgeChildren}
      </Badge>
    </div>
  );

  return (
    <>
      <SlideToggle
        {...args}
        title={args.title}
        isShow={showDefault}
        onToggle={() => setShowDefault(!showDefault)}
        size={ESizeMapping.default}
        after={actionBlockDefault}
      >
        <Typography variant="Body2-Medium" color="primary">
          {loremIpsum}
        </Typography>
      </SlideToggle>

      <SlideToggle
        {...args}
        title={args.title}
        isShow={showCompact}
        onToggle={() => setShowCompact(!showCompact)}
        size={ESizeMapping.compact}
        after={actionBlockCompact}
      >
        <Typography variant="Body2-Medium" color="primary">
          {loremIpsum}
        </Typography>
      </SlideToggle>
    </>
  );
};
SlideToggleWithButton.storyName = 'SlideToggle с иконкой-кнопкой';
SlideToggleWithButton.args = {
  title: 'Заголовок',
  badgeChildren: '1',
  badgeColor: EBadgeColors.error
};
SlideToggleWithButton.argTypes = {
  badgeColor: {
    description: 'Заливка Badge',
    options: Object.values(EBadgeColors),
    control: { type: 'select' }
  },
  badgeChildren: {
    description: 'Содержимое Badge',
    control: { type: 'text' }
  }
};

export const SlideToggleCustomized = (args: ISlideToggleProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('click');
  };
  const title = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '16px' }}>
      <Button type="button" onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Typography variant="Body2-Medium">{args.title}</Typography>
    </div>
  );

  const actionBlock = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '16px' }}>
      <Input label="input в action block" />
      <Button type="button" onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Button type="button" onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
      <Button type="button" onClick={handleClick} iconButton={<IconArticleOutlined24 />} />
    </div>
  );

  return (
    <SlideToggle {...args} isShow={show} onToggle={() => setShow(!show)} title={title} after={actionBlock}>
      <Typography variant="Body2-Medium" color="primary">
        {loremIpsum}
      </Typography>
    </SlideToggle>
  );
};
SlideToggleCustomized.storyName = 'SlideToggle кастомный';
SlideToggleCustomized.args = {
  className: style['color'],
  title: 'Это кастомный title компонента SlideToggle'
};
