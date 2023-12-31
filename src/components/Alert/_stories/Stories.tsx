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
        title="Alert"
        description="Компонент Alert представляет собой компонент уведомления или предупреждения. Он используется для отображения важных сообщений пользователю с цветовой кодировкой в зависимости от уровня серьёзности ситуации. Поддерживает несколько вариантов отображения: стандартный, заполненный и с обведённым контуром."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Alert"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A9739&mode=design&t=awyt3Fzj1XS6th7v-1"
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
            description="Компонент Alert разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className."
            code={`import { Alert } from '@nlmk/ds-2.0';              

export default  App = () =>(
  <>   
    <Alert title="Оповещение по умолчанию" />
    <Alert severity="error" title="Оповещение об ошибке" />  
    <Alert severity="warning" title="Оповещение предупреждения" />
    <Alert severity="info" title="Информационное оповещение" />
  </>
)`}
          />

          <Editor
            description="Компонент Alert можно использовать с описанием, которое можно добавить к оповещению."
            code={`import { Alert } from '@nlmk/ds-2.0';              

export default  App = () =>( 
  <>
  <Alert
    severity="error"
    title="Оповещение с контентом"
  >
    <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности прекрасно подходит для реализации существующих финансовых и административных условий.</p>
  </Alert>
  </>
)`}
          />

          <Editor
            description="Компонент Alert может быть добавлен с кнопками, которые выполняют различные действия."
            code={`import { Alert, Button, Icon } from '@nlmk/ds-2.0';              

export default  App = () =>( 
  <Alert severity="info" 
    action={      
      <Button variant="text" onClick={() => alert('Я нажал!')}>
        <Icon
          name="IconClose24"
          containerSize={24}
          htmlColor='var(--ac-alert-info-text)'
        />
      </Button>      
    } 
    title="Оповещение с кнопкой"/>
)`}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A9739&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Alert" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
