import React, { useState } from 'react';

import { argsTypes } from './argsTypes';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import '@components/_storybook/Stories/styles.css';

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
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20844&mode=design&t=awyt3Fzj1XS6th7v-1"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
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
  <Button size="s">
    Button
  </Button>
  <Button size="xs">
    Button
  </Button>
  </>
)`}
          />

          <Editor
            description="Всего представлено для кнопки семь различных стилей – primary (отображается по умолчанию), secondary,
          grey, outline, greyOutline, text, bar."
            code={`import { Button } from '@nlmk/ds-2.0';              

export default  App = () =>( 
  <>
    <Button>
      Button
    </Button>
    <Button variant="secondary">
      Button
    </Button>
    <Button variant="grey">
      Button
    </Button>
    <Button variant="outline">
    Button
  </Button>
  <Button variant="greyOutline">
    Button
  </Button>
  <Button variant="text">
    Button
  </Button>
  <Button variant="bar">
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
    <Button variant="secondary" disabled>
      Button
    </Button>
    <Button variant="grey" disabled>
      Button
    </Button>
    <Button variant="outline" disabled>
    Button
  </Button>
  <Button variant="greyOutline" disabled>
    Button
  </Button>
  <Button variant="text" disabled>
    Button
  </Button>
  <Button variant="bar" disabled>
    Button
  </Button>
  </>
)`}
          />

          <Editor
            description=" Компонент может быть стилизован с помощью иконок. Они могут быть отображены слева (startIcon) и справа
          (endIcon) или одновременно с двух сторон от текста кнопки или только отображать иконку."
            code={`import { Button, Icon } from '@nlmk/ds-2.0';              

export default  App = () =>( 
  <>
    <Button startIcon={<Icon
      htmlColor="white"
      containerSize={24}
      name="IconArticle24"
    />}>
      Button
    </Button>
    <Button variant="secondary" endIcon={<Icon
      color="primary"
      containerSize={24}
      name="IconArticle24"
    />}>
      Button
    </Button>
    <Button variant="outline" iconButton={<Icon
      color="primary"
      containerSize={24}
      name="IconArticle24"
    />}/>
       
  </>
)`}
          />

          <Editor
            description="Компонент может быть стилизован с помощью бэйджа. Бэйдж может отоброжаться непосредственно справа от
          лэйбла или справа от иконки (startIcon)."
            code={`import { Button, Badge } from '@nlmk/ds-2.0';              

export default  App = () =>( 
  <>
  <Button badge={<Badge color="secondary">1</Badge>}>
  Button
</Button>
<Button variant="secondary" badge={<Badge color="primary">1</Badge>}>
  Button
</Button>
<Button variant="outline" badge={<Badge color="primary">1</Badge>}>
  Button
</Button>
  </>
)`}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20844&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Button"/>
        </Typography>
      )}
    </div>
  );
};

export default Stories;
