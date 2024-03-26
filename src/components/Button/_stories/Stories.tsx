import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';
import { EFill, ESizes, EVariant } from '../enums'
import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=102-26898&mode=design&t=AyZ6cEr1XAJLQdOB-0'

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Button"
        description="Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как
          размер, иконки, знаки и стили."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            description="Компонент кнопки по умолчанию в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки
          в таком случае составляет 40px, компактный (s) - высота такой кнопки составляет 32px и экстра компактный
          (xs) с высотой в 28px."
            code={`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
  <Button>
    Button
  </Button>
  <Button size="${ESizes.s}">
    Button
  </Button>
  <Button size="${ESizes.xs}">
    Button
  </Button>
  </>
)`}
          />

          <Editor
            description="Всего представлено для кнопки семь различных стилей – primary (отображается по умолчанию), secondary,
          grey, outline, greyOutline, text."
            code={`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button>
      Button
    </Button>
    <Button fill="${EFill.outline}">
      Button
    </Button>
    <Button fill="${EFill.clear}">
      Button
    </Button>
    <Button variant="${EVariant.secondary}">
      Button
    </Button>
    <Button variant="${EVariant.grey}">
      Button
    </Button>
    <Button variant="${EVariant.grey}" fill="${EFill.outline}">
      Button
    </Button>
    <Button variant="${EVariant.grey}" fill="${EFill.clear}">
      Button
    </Button>
    <Button variant="${EVariant.black}">
      Button
    </Button>
    <Button variant="${EVariant.black}" fill="${EFill.outline}">
      Button
    </Button>
    <Button variant="${EVariant.black}" fill="${EFill.clear}">
      Button
    </Button>
  </>
)`}
          />

          <Editor
            description="Компонент кнопки может быть неактивным для пользователя (disabled)."
            code={`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button disabled>
      Button
    </Button>
    <Button fill="${EFill.outline}" disabled>
      Button
    </Button>
    <Button fill="${EFill.clear}" disabled>
      Button
    </Button>
    <Button variant="${EVariant.secondary}" disabled>
      Button
    </Button>
    <Button variant="${EVariant.grey}" disabled>
      Button
    </Button>
    <Button variant="${EVariant.grey}" fill="${EFill.outline}" disabled>
      Button
    </Button>
    <Button variant="${EVariant.grey}" fill="${EFill.clear}" disabled>
      Button
    </Button>
    <Button variant="${EVariant.black}" disabled>
      Button
    </Button>
    <Button variant="${EVariant.black}" fill="${EFill.outline}" disabled>
      Button
    </Button>
    <Button variant="${EVariant.black}" fill="${EFill.clear}" disabled>
      Button
    </Button>
  </>
)`}
          />

          <Editor
            description=" Компонент может быть стилизован с помощью иконок. Они могут быть отображены слева (startIcon) и справа
          (endIcon) или одновременно с двух сторон от текста кнопки или только отображать иконку."
            code={`import { Button, IconArticleFilled24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button startIcon={<IconArticleFilled24 />}>
      Button
    </Button>
    <Button variant="${EVariant.secondary}" endIcon={<IconArticleFilled24 />}>
      Button
    </Button>
    <Button fill="${EFill.outline}" iconButton={<IconArticleFilled24 />}/>

  </>
)`}
          />

          <Editor
            description="Компонент может быть стилизован с помощью бэйджа. Бэйдж может отоброжаться непосредственно справа от
          лэйбла или справа от иконки (startIcon)."
            code={`import { Button, Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button badge={1}>
      Button
    </Button>
    <Button variant="${EVariant.secondary}" badge={1}>
      Button
    </Button>
    <Button fill="${EFill.outline}" badge={1}>
      Button
    </Button>
  </>
)`}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url={FIGMA_LINK} />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Button" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
