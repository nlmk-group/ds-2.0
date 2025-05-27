import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as c}from"./index-D2yTtfOz.js";import"./index-CN1eQlic.js";import{af as r,a7 as d}from"./TreeList-e8j-Ky4T.js";import{DecoratorDefault as l}from"./Decorator.stories-D7iJJ_iz.js";import{r as x}from"./index-BcJSXhQi.js";import{s as i,H as S,E as f}from"./Header-BrWYEqIC.js";import{F as u}from"./FigmaEmbed-BkQST_zI.js";import{P as j}from"./Properties-BoQ2l1w8.js";import{T as b}from"./Tests-DcYMo3_q.js";/* empty css               */import"./generateUUID-D5yDV8CF.js";import"./index-BrUUz505.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import{T as g}from"./index-DmffzHLE.js";import"./index-CsQ_b7hm.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-SjOgrvem.js";import"./index-C1EIKtiR.js";import"./32-CiI8XTkU.js";import{a as h}from"./argsTypes-B8O1emli.js";import{c as N,S as v,U as E}from"./DocsRenderer-CFRXHY34-BPBVHBN3.js";import"./index-ChsGqxH_.js";import"./preview-D8KYfSLE.js";import"./iframe-D_gWuCK3.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DXzpFVcb.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const o="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",y=()=>{const[e,s]=x.useState(0),p=n=>e===n;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(S,{title:o,description:"Компонент Stepper представляет из себя пользовательный компонент, который отображает текущий Step (с помощью компонента Badge), его название и линию - Divider. По нему можно кликнуть и получить его состояние и индекс.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${o}`,figmaLink:a}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:p(0),onClick:()=>s(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>s(1)}),t.jsx(r.Tab,{label:"Тестирование",active:p(2),onClick:()=>s(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(f,{height:420,description:"Stepper в состоянии filled",code:`import { Box, Stepper } from '@nlmk/ds-2.0';
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
`,t.jsx(E,{children:t.jsx(y,{})})]})}function nt(e={}){const{wrapper:s}={...c(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(m,{...e})}):m()}export{nt as default};
