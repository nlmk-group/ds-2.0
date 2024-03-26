import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import Stories from './components/_storybook/Stories';
import { IFile } from './components/AttachFiles/subcomponents/File/types';

import { Accordion, Alert, DragAndDrop, Select, Switch, Tabs, ThemeSwitcher, ToggleButtonGroup } from './components';

const { Button } = ToggleButtonGroup;

const container = document.getElementById('root');
const root = createRoot(container!);

const items = [
  { id: '1', title: 'title 1', content: 'content 1' },
  { id: '2', title: 'title 2', content: 'content 2' },
  { id: '3', title: 'title 3', content: 'content 3' }
];

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry', disabled: true },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' }
];

const SomeTabs = () => {
  return (
    <ToggleButtonGroup>
      <Button>
        <Button.Label>Plus</Button.Label>
      </Button>
      <ToggleButtonGroup.Button>
        <ToggleButtonGroup.Button.Label>Check result</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button>
        <ToggleButtonGroup.Button.Label>Minus</ToggleButtonGroup.Button.Label>
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  );
};

const App = () => {
  const [files, setFiles] = useState<IFile>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadingFile, setUploadingFile] = useState<string>('');
  const handleOnUpload = async (a: IFile) => {
    setLoading(true);
    await new Promise(() =>
      setTimeout(() => {
        setLoading(false);
        setFiles(a);
      }, 1000)
    );
  };

  useEffect(() => {
    if (files.length !== 0) {
      setUploadingFile(`${files[0].name}, ${files[0].size}`);
    }
  }, [files]);

  return (
    <DragAndDrop
      onUpload={handleOnUpload}
      loading={loading}
      percentUpload={50}
      description={loading ? uploadingFile : undefined}
    />
  );
};

const RenderSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  return (
    <>
      <Switch
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
        label="Произвольный текст"
      />
      <br/>
      <Switch
        checked={true}
        onChange={() => {
          setSecondChecked(!secondChecked);
        }}
        label="Произвольный текст"
      />
    </>
  );
};

root.render(
  <StrictMode>
    <div className="development-block">
      <RenderSwitch />
      {/* <App />
      <br />
      <ThemeSwitcher /> */}
      {/* <SomeTabs /> */}
      {/* <Select options={options} label="Одиночный выбор" multiple={false} /> */}
      {/* <ThemeSwitcher />
      <Button variant="primary">Great day!</Button>
      <DatePicker /> */}
    </div>
  </StrictMode>
);

// Only for development preview options
if (import.meta.hot) {
  import.meta.hot.accept();
}
