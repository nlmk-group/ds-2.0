import{r as c,j as t,f as d,S as l,U as S}from"./iframe-CxLN9ksd.js";import{useMDXComponents as x}from"./index-CeChe1UL.js";import{a as f,S as u}from"./argsTypes-zAeEwR0j.js";import{DecoratorDefault as j}from"./Decorator.stories-DWPS1QvQ.js";import{s as o,H as b,E as g}from"./Header-B1Tht5jw.js";import{F as h}from"./FigmaEmbed-gwemKUEC.js";import{P as N}from"./Properties-Be6XSfnk.js";import{T as v}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as E}from"./index-CORENSTS.js";import{T as s}from"./index-Bs6EWGDb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT_Q_AhL.js";import"./clsx-B-dksMZM.js";import"./index-Bz6VJdOb.js";import"./index-D3DoxRCP.js";import"./index-LyR6p6RN.js";import"./index-DUSNaC2m.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-BniRS5vs.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",y=()=>{const[e,r]=c.useState(0),p=n=>e===n;return t.jsxs("div",{className:o.wrapper,children:[t.jsx(b,{title:i,description:"Компонент Stepper представляет из себя пользовательный компонент, который отображает текущий Step (с помощью компонента Badge), его название и линию - Divider. По нему можно кликнуть и получить его состояние и индекс.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:a}),t.jsx("div",{className:o.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:p(0),onClick:()=>r(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>r(1)}),t.jsx(s.Tab,{label:"Тестирование",active:p(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(g,{height:420,description:"Stepper в состоянии filled",code:`import { Box, Stepper } from '@nlmk/ds-2.0';
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
              `}),t.jsx(N,{argsTypes:f})]}),e==1&&t.jsx(h,{url:a}),e==2&&t.jsx(E,{variant:"Heading4",color:"primary",children:t.jsx(v,{componentName:i})})]})};function m(e){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Stepper/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/byZZI6bYz2Iv2Jst7ycZ7M/Navigation-DS-3.0?node-id=1691-27062"},jest:["Stepper.test.tsx"]}}),`
`,t.jsx(l,{of:j}),`
`,t.jsx(S,{children:t.jsx(y,{})})]})}function St(e={}){const{wrapper:r}={...x(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(m,{...e})}):m()}export{St as default};
