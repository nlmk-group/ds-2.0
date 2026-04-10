import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626&t=HhCDuaOuzHu5rgyf-1';

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

  const inputWithIconAndResetCode = `import { useState } from 'react';
import { Input, IconSearchOutlined24 } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState('Поисковый запрос');

  return (
    <Input
      label="Поиск"
      value={value}
      icon={<IconSearchOutlined24 />}
      reset
      onChange={e => setValue(e.target.value)}
      onReset={() => setValue('')}
    />
  );
};

export default App;
`;

  const inputSizeAndRequiredCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ display: 'grid', gap: '12px' }}>
    <Input size="m" label="Размер m" required />
    <Input size="s" label="Размер s" />
    <Input size="xs" label="Размер xs" />
  </div>
);
`;

  const inputColoredCode = `import { Input } from '@nlmk/ds-2.0';

export default App = () => (
  <Input
    label="Input с цветным фоном"
    value="Текст в поле"
    helperText="Подходит для выделения важных полей."
    colored
    readOnly
  />
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
                <Button type="button" onClick={() => setIsPseudo(!isPseudo)} style={{ marginTop: '10px' }}>
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
        description="Input используется для ввода текстовых данных в форме. Компонент поддерживает состояния валидации, размеры, иконки, многострочный режим, сброс значения и pseudo-режим."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Input"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor minHeight={200} description="Базовое поле ввода." code={inputDefaultCode} />

          <Editor minHeight={200} description="Поле с меткой через label." code={inputWithLabelCode} />

          <Editor minHeight={200} description="Метка и вспомогательный текст через helperText." code={inputWithHelperCode} />

          <Editor minHeight={200} description="Заблокированное состояние поля." code={inputDisabledCode} />

          <Editor minHeight={200} description="Состояние ошибки через color=error." code={inputErrorCode} />

          <Editor minHeight={200} description="Предупреждающее состояние через color=warning." code={inputWarningCode} />

          <Editor minHeight={200} description="Состояние успеха через color=success." code={inputSuccessCode} />

          <Editor minHeight={260} description="Иконка и кнопка сброса значения." code={inputWithIconAndResetCode} />

          <Editor minHeight={240} description="Размеры Input и обязательное поле через required." code={inputSizeAndRequiredCode} />

          <Editor minHeight={220} description="Цветной фон поля через colored." code={inputColoredCode} />

          <Editor minHeight={200} description="Многострочный режим textarea." code={inputTextareaCode} />

          <Editor minHeight={200} description="Многострочный режим с ручным изменением размера." code={inputTextareaResizeCode} />

          <Editor
            minHeight={200}
            description="Иконка слева внутри инпута через startIcon."
            code={`import { Input, IconSearchOutlined24 } from '@nlmk/ds-2.0';

export default App = () => (
  <Input
    label="Поиск"
    startIcon={<IconSearchOutlined24 htmlColor="var(--steel-70)" />}
    placeholder="Введите запрос"
  />
)`}
          />

          <Editor
            minHeight={220}
            description="Иконка-подсказка рядом с label через helpIcon. Принимает ReactNode — оберните иконку в Tooltip."
            code={`import { Input, IconHelpOutlined16, Tooltip } from '@nlmk/ds-2.0';

export default App = () => (
  <Input
    label="Email"
    helpIcon={
      <Tooltip description="Введите корпоративную почту вида name@nlmk.com">
        <IconHelpOutlined16 />
      </Tooltip>
    }
    placeholder="name@nlmk.com"
  />
)`}
          />

          <Editor
            minHeight={350}
            description="Переключение в pseudo-режим через проп pseudo."
            code={inputWithPseudoCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Input" />}
    </div>
  );
};

export default InputStories;
