import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
// import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const gridExampleCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px" st={{ width: "100%", padding: 0 }}>
      {Array.from({ length: 3 }, (_, index) => (
        <Box
          key={index}
          px="8px"
          py="16px"
          borderRadius="4px"
          background="var(--spectrum-sky-40)"
          st={{ flex: '1' }}
        >
          Контент {index + 1}
        </Box>
      ))}
    </Grid>
);
export default App;
`;

const equalWidthColumnsCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 2
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 2
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`;

const settingOneColumnWidthCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3 (шире)
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="58.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            2 из 3 (шире)
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`;

const variableWidthContentCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Переменная ширина контента
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            1 из 3
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="auto">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Переменная ширина контента
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="16.67%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            3 из 3
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`;

const equalWidthMultiRowCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" width="100%" />
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Колонка
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`;

const verticalAlignmentCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="start">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="center">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" alignItems="end">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из трех колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`;

const horizontalAlignmentCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="center">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="space-around">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" justifyContent="space-between">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Одна из двух колонок
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`;

const columnWrappingCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="75%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-9
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="33.33%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-4
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Поскольку 9 + 4 = 13 &gt; 12, этот div шириной 4 колонки переносится на новую строку как единое целое.
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
          <br />
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            Последующие колонки продолжаются на новой строке.
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`;

const columnBreaksCode = `import { Grid, Box } from '@nlmk/ds-2.0';

const App = () => (
    <Grid borderRadius="4px">
      <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)">
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Row borderRadius="4px" background="var(--spectrum-red-30)" width="100%" />
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Grid.Column>
        <Grid.Column borderRadius="4px" background="var(--spectrum-sky-40)" width="50%">
          <Box
            st={{ flex: '1' }}
            px="8px"
            py="16px"
            borderRadius="4px"
            background="var(--spectrum-sky-40)"
          >
            .col-6
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
export default App;
`;

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Grid"
        description="Компонент Grid представляет собой универсальный контейнер, используемый для позиционирования внутренних компонентов/элементов: горизонтальный или вертикальный. Он обладает различными пропсами, что делает Grid инструментом для создания структурированного и адаптивного интерфейса."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Grid"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Тестирование" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor
            height={500}
            description="Большинство свойств стилей можно настраивать через пропсы компонента. Также все свойства доступны через пропс st."
            code={gridExampleCode}
          />
          <Editor height={500} description="Колонки равной ширины" code={equalWidthColumnsCode} />
          <Editor height={500} description="Установка ширины одной колонки" code={settingOneColumnWidthCode} />
          <Editor height={500} description="Переменная ширина контента" code={variableWidthContentCode} />
          <Editor
            height={500}
            description="Колонки равной ширины с несколькими строками"
            code={equalWidthMultiRowCode}
          />
          <Editor height={500} description="Вертикальное выравнивание" code={verticalAlignmentCode} />
          <Editor height={500} description="Горизонтальное выравнивание" code={horizontalAlignmentCode} />
          <Editor height={500} description="Перенос колонок" code={columnWrappingCode} />
          <Editor height={500} description="Разрывы колонок" code={columnBreaksCode} />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <Tests componentName="Grid" />}
    </div>
  );
};

export default Stories;
