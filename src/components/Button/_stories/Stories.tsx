import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { EButtonFill, EButtonSizes, EButtonVariant } from '../enums';
import argsTypes from './argsTypes';

const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712&t=HhCDuaOuzHu5rgyf-1';

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
  <Button size="${EButtonSizes.s}">
    Button
  </Button>
  <Button size="${EButtonSizes.xs}">
    Button
  </Button>
  </>
)`}
          />

          <Editor
            description="Всего представлено для кнопки пять вариантов стиля –
            primary (отображается по умолчанию), secondary, grey, black, info.
            Для каждого варианта до шести варинтов заливки: solid, outline, clear, success, warning, error"
            code={`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button>
      Button
    </Button>
    <Button fill="${EButtonFill.outline}">
      Button
    </Button>
    <Button fill="${EButtonFill.clear}">
      Button
    </Button>
     <Button fill="${EButtonFill.success}">
      Button
    </Button>
    <Button fill="${EButtonFill.warning}">
      Button
    </Button>
    <Button fill="${EButtonFill.error}">
      Button
    </Button>
    <Button variant="${EButtonVariant.secondary}">
      Button
    </Button>
    <Button variant="${EButtonVariant.grey}">
      Button
    </Button>
    <Button variant="${EButtonVariant.grey}" fill="${EButtonFill.outline}">
      Button
    </Button>
    <Button variant="${EButtonVariant.grey}" fill="${EButtonFill.clear}">
      Button
    </Button>
    <Button variant="${EButtonVariant.black}">
      Button
    </Button>
    <Button variant="${EButtonVariant.black}" fill="${EButtonFill.outline}">
      Button
    </Button>
    <Button variant="${EButtonVariant.black}" fill="${EButtonFill.clear}">
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
    <Button fill="${EButtonFill.outline}" disabled>
      Button
    </Button>
    <Button fill="${EButtonFill.clear}" disabled>
      Button
    </Button>
    <Button variant="${EButtonVariant.secondary}" disabled>
      Button
    </Button>
    <Button variant="${EButtonVariant.grey}" disabled>
      Button
    </Button>
    <Button variant="${EButtonVariant.grey}" fill="${EButtonFill.outline}" disabled>
      Button
    </Button>
    <Button variant="${EButtonVariant.grey}" fill="${EButtonFill.clear}" disabled>
      Button
    </Button>
    <Button variant="${EButtonVariant.black}" disabled>
      Button
    </Button>
    <Button variant="${EButtonVariant.black}" fill="${EButtonFill.outline}" disabled>
      Button
    </Button>
    <Button variant="${EButtonVariant.black}" fill="${EButtonFill.clear}" disabled>
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
    <Button variant="${EButtonVariant.secondary}" endIcon={<IconArticleFilled24 />}>
      Button
    </Button>
    <Button fill="${EButtonFill.outline}" iconButton={<IconArticleFilled24 />}/>

  </>
)`}
          />

          <Editor
            description="Компонент может быть стилизован с помощью бэйджа. Бэйдж может отоброжаться непосредственно справа от
          лэйбла или справа от иконки (startIcon)."
            code={`import { Button } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Button endBadge={1}>
      Button
    </Button>
    <Button variant="${EButtonVariant.secondary}" endBadge={1}>
      Button
    </Button>
    <Button fill="${EButtonFill.outline}" endBadge={1}>
      Button
    </Button>
  </>
)`}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Button" />}
    </div>
  );
};

export default Stories;
