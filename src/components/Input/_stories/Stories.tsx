import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const InputStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const inputDefaultCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input />
  </>
);
`;

  const inputWithLabelCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input label="Label" />
  </>
);
`;

  const inputWithHelperCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input label="Label" helperText="Helper text" />
  </>
);
`;

  const inputDisabledCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input disabled value="Disabled Input" />
  </>
);
`;

  const inputErrorCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="error" helperText="Error message" />
  </>
);
`;

  const inputWarningCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="warning" helperText="Warning message" />
  </>
);
`;

  const inputSuccessCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input color="success" helperText="Success message" />
  </>
);
`;

  const inputTextareaCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input multiline />
  </>
);
`;

  const inputTextareaResizeCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Input multiline resize />
  </>
);
`;

  const inputWithPseudoCode = `import { useState, SetStateAction } from 'react';
import { Input, Button } from '@nlmk/ds-2.0';

const App = () => {
    const [isPseudo, setIsPseudo] = useState(false);
    const [innerValue, setInnerValue] = useState('value');

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setInnerValue(e.target.value);
    };

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Input pseudo={isPseudo} value={innerValue} label='Label' onChange={handleChange} />
                <Button onClick={() => setIsPseudo(!isPseudo)} style={{ marginTop: '10px' }}>
                    Переключить
                </Button>
            </div>
        </>
    );
};

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Input"
        description="Компонент Input позволяет пользователям вводить текстовую информацию. Он поддерживает различные варианты, включая лейблы, иконки, многострочный ввод и различные стили."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Input"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20850&mode=design&t=awyt3Fzj1XS6th7v-1"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          {/* <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} /> */}
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor height={200} description="Input по умолчанию" code={inputDefaultCode} />

          <Editor height={200} description="Input с лейблом" code={inputWithLabelCode} />

          <Editor height={200} description="Input с лейблом и вспомогательным текстом" code={inputWithHelperCode} />

          <Editor height={200} description="Input в состоянии disabled" code={inputDisabledCode} />

          <Editor height={200} description="Input в состоянии error" code={inputErrorCode} />

          <Editor height={200} description="Input в состоянии warning" code={inputWarningCode} />

          <Editor height={200} description="Input в состоянии success" code={inputSuccessCode} />

          <Editor height={200} description="Textarea по умолчанию" code={inputTextareaCode} />

          <Editor height={200} description="Textarea со свойством ресайз" code={inputTextareaResizeCode} />

          <Editor
            height={350}
            description="Возможно реализовать переключение компонента Input в PseudoInput с помощью пропса pseudo"
            code={inputWithPseudoCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20850&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) === 2 && <Tests componentName="Input" />}
    </div>
  );
};

export default InputStories;
