import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';

const FIGMA_LINK = 'https://www.figma.com/file/UrNaiI72SjVg0aHW6NYVCi/DS2.0-Grid?type=design&node-id=207-40301&mode=design&t=H6uAggyoryLoFprh-0';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Grid"
        description="Компонент Grid представляет собой универсальный контейнер, используемый для позиционирования внутренних компонентов/элементов: горизонтальный или вертикальный. Он обладает различными пропсами, что делает Grid инструментом для создания структурированного и адаптивного интерфейса."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid"
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
            height={500}
            description="Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st."
            code={`import { Grid } from '@nlmk/ds-2.0';

              export default  App = () =>(
                <div style={{ width: "100%", padding: 0 }}>
                  <Grid>
                    <Grid.Column>
                      <Grid.Row>1</Grid.Row>
                      <Grid.Row>2</Grid.Row>
                      <Grid.Row>3</Grid.Row>
                    </Grid.Column>
                  </Grid>
                </div>
              )
            `}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url={FIGMA_LINK} />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Grid" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
