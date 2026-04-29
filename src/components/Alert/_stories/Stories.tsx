import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=41-2';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Alert"
        description="Alert отображает статусные сообщения и предупреждения в интерфейсе. Компонент подходит для информирования пользователя о результате действия, ошибке или важном системном состоянии."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Alert"
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
            description="Варианты severity для Alert: success, error, warning и info."
            code={`import { Alert } from '@nlmk/ds-2.0';
import { Box } from '@nlmk/ds-2.0';

export default  App = () =>(
  <Box display="flex" flexDirection="column" gap={12} width="100%">
    <Alert title="Успешная операция" severity="success" />
    <Alert title="Ошибка сохранения" severity="error" />
    <Alert title="Нужно проверить данные" severity="warning" />
    <Alert title="Системное сообщение" severity="info" />
  </Box>
)`}
          />

          <Editor
            description="Добавление контента в Alert через children."
            code={`import { Alert } from '@nlmk/ds-2.0';

export default  App = () =>(
  <Alert severity="warning" title="Проверьте перед отправкой">
    <ul style={{ margin: 0, paddingLeft: 16 }}>
      <li>Заполните обязательные поля</li>
      <li>Проверьте формат даты</li>
      <li>Убедитесь, что документ приложен</li>
    </ul>
  </Alert>
)`}
          />

          <Editor
            description="Отображение кнопки закрытия через обработчик close."
            code={`
import { Alert } from '@nlmk/ds-2.0';

const App = () => (
  <Alert
    severity="info"
    close={() => alert('Alert закрыт')}
    title="Оповещение с кнопкой закрытия"
  />
)
export default App
`}
          />

          <Editor
            description="Добавление пользовательского действия через свойство action."
            code={`
import { Alert, Button, IconDeleteBinOutlined24 } from '@nlmk/ds-2.0';

const App = () => (
  <Alert
    severity="error"
    action={
      <Button
        type="button"
        color="ghost"
        variant="secondary"
        iconButton={
          <IconDeleteBinOutlined24
            htmlColor='var(--error-red-600)'
          />
        }
        onClick={() => confirm('Подтвердите удаление')}
      />
    }
    title="Оповещение с действием"
  >
    Запись будет удалена без возможности восстановления.
  </Alert>
)
export default App
`}
          />

          <Editor
            description="Кастомизация внешнего вида Alert через className."
            code={`
import { Alert } from '@nlmk/ds-2.0';

const App = () => (
  <Alert
    className="custom-alert"
    severity="success"
    title="Стилизация через className"
  >
    Переопределите цвета и отступы в вашем CSS-классе.
  </Alert>
)
export default App
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Alert" />}
    </div>
  );
};

export default Stories;
