import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Stepper';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const filledStepperCode = `import { Box, Stepper } from '@nlmk/ds-2.0';
import React, { useState } from 'react';
import { EStepState } from '@nlmk/ds-2.0';

const App = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const baseSteps = [
    { stepName: 'Шаг 1', index: 0 },
    { stepName: 'Шаг 2', index: 1 },
    { stepName: 'Шаг 3', index: 2 },
    { stepName: 'Шаг 4', index: 3 },
    { stepName: 'Шаг 5', index: 4, state: EStepState.disabled }
  ];

  const steps = baseSteps.map(step => ({
    ...step,
    state:
      step.state === EStepState.disabled
        ? EStepState.disabled
        : step.index <= currentStep
        ? EStepState.filled
        : EStepState.notFilled
  }));

  return (
    <div style={{ width: '100%' }}>
      <Box flexDirection="row" width="100%" gap={16}>
        {steps.map((step, i) => (
          <Stepper
            currentStep={currentStep}
            key={i}
            state={step.state}
            index={i}
            showStep={i !== steps.length - 1}
            stepName={step.stepName}
            onClick={() => setCurrentStep(i)}
          />
        ))}
      </Box>
    </div>
  );
}

export default App;
`;

  const errorStepperCode = `import { Box, Stepper } from '@nlmk/ds-2.0';
import React from 'react';
import { EStepState, EStepColor } from '@nlmk/ds-2.0';

const App = () => {
  const steps = [
    { stepName: 'Шаг 1', state: EStepState.filled, color: EStepColor.success },
    { stepName: 'Шаг 2', state: EStepState.filled, color: EStepColor.success },
    { stepName: 'Шаг 3', state: EStepState.error, color: EStepColor.error },
    { stepName: 'Шаг 4', state: EStepState.notFilled, color: EStepColor.brand }
  ];

  return (
    <Box flexDirection="row" width="100%" gap={16}>
      {steps.map((step, i) => (
        <Stepper
          currentStep={2}
          key={i}
          state={step.state}
          color={step.color}
          index={i}
          showStep={i !== steps.length - 1}
          stepName={step.stepName}
        />
      ))}
    </Box>
  );
}

export default App;
`;

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description={
          'Stepper отображает последовательность шагов и их состояние в процессе выполнения. Компонент поддерживает интерактивный выбор шага и визуальные состояния успеха, ошибки и блокировки.'
        }
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          <Tabs.Tab label="Дизайнеру" active={isActive(TabIds.design)} onClick={() => setActiveTab(TabIds.design)} />
          <Tabs.Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab == TabIds.dev && (
        <>
          <Editor description="Интерактивный stepper с переходом между шагами." code={filledStepperCode} />
          <Editor description="Состояния stepper с ошибкой и цветовым акцентом." code={errorStepperCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab == TabIds.tests && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName={COMPONENT_NAME} />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
