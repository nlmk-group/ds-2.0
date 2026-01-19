import{r as c,j as t,m as d,S as l,U as S}from"./iframe-DUDunD5j.js";import{useMDXComponents as x}from"./index-CDbv5Jgm.js";import{a as f,S as u}from"./argsTypes-9EnJO62V.js";import{DecoratorDefault as j}from"./Decorator.stories-DJdCAXEf.js";import{s as o,H as b,E as g}from"./Header-BrZEypuE.js";import{F as h}from"./FigmaEmbed-DovFRgvJ.js";import{P as N}from"./Properties-CcP2VO-p.js";import{T as v}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as E}from"./index-DyX2qzoz.js";import{T as s}from"./index-DntXJei4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BjTLv_jS.js";import"./clsx-B-dksMZM.js";import"./index-z_YeHj0K.js";import"./index-aoSKrGJR.js";import"./index-YMfOmFJ1.js";import"./index-rc7u3FmU.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./24-C5ui32Ki.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-BE6Pvktf.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",y=()=>{const[e,r]=c.useState(0),p=n=>e===n;return t.jsxs("div",{className:o.wrapper,children:[t.jsx(b,{title:i,description:"Компонент Stepper представляет из себя пользовательный компонент, который отображает текущий Step (с помощью компонента Badge), его название и линию - Divider. По нему можно кликнуть и получить его состояние и индекс.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:a}),t.jsx("div",{className:o.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:p(0),onClick:()=>r(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>r(1)}),t.jsx(s.Tab,{label:"Тестирование",active:p(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(g,{height:420,description:"Stepper в состоянии filled",code:`import { Box, Stepper } from '@nlmk/ds-2.0';
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
