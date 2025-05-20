import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import"./index-CYB2H57i.js";import{ag as r,a8 as d}from"./TreeList-BlowYYWI.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as i,H as S,E as f}from"./Header-BIXWiZL1.js";import{F as u}from"./FigmaEmbed-BTR1upu5.js";import{P as j}from"./Properties-BJfkkXUE.js";import{T as b}from"./Tests-0MM5H8rT.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as g}from"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as h}from"./argsTypes-BMqPYdFN.js";import{c as N,e as v,U as E}from"./DocsRenderer-CFRXHY34-xGBwJgAN.js";import"./preview-yGuw84d4.js";import"./iframe-DdMYiHlZ.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-Cto72PH8.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const o="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",y=()=>{const[e,s]=x.useState(0),p=n=>e===n;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(S,{title:o,description:"Компонент Stepper представляет из себя пользовательный компонент, который отображает текущий Step (с помощью компонента Badge), его название и линию - Divider. По нему можно кликнуть и получить его состояние и индекс.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${o}`,figmaLink:a}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:p(0),onClick:()=>s(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>s(1)}),t.jsx(r.Tab,{label:"Тестирование",active:p(2),onClick:()=>s(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(f,{height:420,description:"Stepper в состоянии filled",code:`import { Box, Stepper } from '@nlmk/ds-2.0';
                   import React, { useState } from 'react';
                   import {EStepState, EStepColor} from '@nlmk/ds-2.0';

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
    <div className={styles.wrapper}>
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
              `}),t.jsx(j,{argsTypes:h})]}),e==1&&t.jsx(u,{url:a}),e==2&&t.jsx(g,{variant:"Heading4",color:"primary",children:t.jsx(b,{componentName:o})})]})};function m(e){return t.jsxs(t.Fragment,{children:[t.jsx(N,{title:"Components/Stepper/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/byZZI6bYz2Iv2Jst7ycZ7M/Navigation-DS-3.0?node-id=1691-27062"},jest:["Stepper.test.tsx"]}}),`
`,t.jsx(v,{of:l}),`
`,t.jsx(E,{children:t.jsx(y,{})})]})}function at(e={}){const{wrapper:s}={...c(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(m,{...e})}):m()}export{at as default};
