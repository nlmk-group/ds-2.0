import{r as S,j as t,m as x,S as f,U as u}from"./iframe-BdOpgzrS.js";import{useMDXComponents as j}from"./index-DJy09qRq.js";import{S as N}from"./index-G-edGsEt.js";import{DecoratorDefault as b}from"./Decorator.stories-C28-sXLg.js";import{s as m,H as E,E as s}from"./Header-DXi6_hVE.js";import{F as g}from"./FigmaEmbed-Chyrs9ER.js";import{P as h,T as C}from"./Tests-Oc7S5ZKL.js";/* empty css               */import{T as p}from"./index-BSn6HQzr.js";import{T as k}from"./index-CJQtOKfQ.js";import{a as w}from"./argsTypes-DyOIXN01.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWizWQ-f.js";import"./clsx-B-dksMZM.js";import"./index-WpmEvsZB.js";import"./index-BKLHPlSR.js";import"./index-B7PkToN1.js";import"./index-CLAZw8N4.js";import"./16--IL1VHaj.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DVTrHQKM.js";import"./index-OONZivDn.js";import"./32-ChopWT_z.js";import"./32-ChxPjCDA.js";import"./24-BmvAwPvh.js";import"./24-CV0PNOey.js";import"./24-CRWfoU4Z.js";import"./24-DOFnqipN.js";import"./24-PBHXpKVH.js";import"./24-CBMXdyoG.js";import"./24-BVmNVZn4.js";import"./24-WjLrdny4.js";import"./24-K0yWzWKj.js";import"./24-BznlLpgc.js";import"./24-VDHIr0Dv.js";import"./16-CEnZ3psN.js";import"./16-C2Q8nrRG.js";import"./16-Du9yZ744.js";import"./16-DeFUxAIB.js";import"./16-Cnsgcg9g.js";import"./index-vv3ZnJjs.js";import"./index-CRHD1rp7.js";import"./index-BYrUxwbP.js";import"./index-Ck-XN-ge.js";import"./index-Eg_8IEpf.js";import"./index-BCWgfUlh.js";import"./colorsMapping-C6bFIk14.js";import"./index-D7hqcCmB.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BO8DxY49.js";import"./useFloatingReferenceSync-DqthvRxQ.js";import"./index-CeyXG_zt.js";import"./types-TdnjS80C.js";import"./index-BGK3vMRu.js";import"./MenuItem-lW_S4VfZ.js";import"./floating-ui.react-B81N47Rb.js";import"./sizesMapping-D8QavrGc.js";import"./index-BXEDdhur.js";import"./index-Bo3DQfvQ.js";import"./index-BAERPvu_.js";import"./index-4jA536FU.js";import"./index-B-NoUIZI.js";import"./index-CL6fgpqk.js";import"./index-CoT1f0LI.js";import"./index-Bua5qXkb.js";import"./index-DDPpfVml.js";import"./index-B43IYv7N.js";import"./index-imlWOh4l.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CYye5MAA.js";import"./index-C1BAN_9s.js";import"./index-B6XbamL1.js";import"./index-BN5r_AV-.js";import"./index-C8MSIeIN.js";import"./index-B0j95XIR.js";import"./index-CeFYkyd7.js";import"./index-R9IHYOO5.js";import"./index-DPvTpWrG.js";import"./index-DkWAreVa.js";import"./index-1Qe_4yAi.js";import"./index-BH6jN-u0.js";import"./index-CUsaH7j6.js";import"./index-jvRyrw0B.js";import"./index-BRrp3xVQ.js";import"./index-ljDOKoqn.js";import"./index-DHYk6Txp.js";import"./index-D9BCvHbX.js";import"./index-k1EAulh0.js";import"./index-C2cVSUod.js";import"./index-D7Mf3A5i.js";import"./index-9Dq95OiO.js";import"./index-Cl4xrWxE.js";import"./index-CrczCUl4.js";import"./index-DcZWdIUK.js";import"./index-DLQT8wYk.js";import"./index-BI0qJ3c6.js";import"./index-B2RalwUT.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-BYJCkP-K.js";import"./index-D-LNKzPH.js";import"./index-C0Y8rlI2.js";import"./index-y60vd0es.js";import"./index-BSXV1Fg-.js";import"./index-BYR3WDA_.js";import"./index-COjirL-c.js";import"./index-B_UPuCF1.js";import"./index-5UE0QfQE.js";import"./ComboBox-C09mBvpI.js";import"./index-Dse-RVNj.js";import"./constants-DdJvlSUO.js";import"./TreeList-CxWBdKx_.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689",T=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
`,l=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
`,o=d=>e===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(E,{title:i,description:"Stepper отображает последовательность шагов и их состояние в процессе выполнения. Компонент поддерживает интерактивный выбор шага и визуальные состояния успеха, ошибки и блокировки.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:a}),t.jsx("div",{className:m.tabs,children:t.jsxs(p,{children:[t.jsx(p.Tab,{label:"Разработчику",active:o(0),onClick:()=>r(0)}),t.jsx(p.Tab,{label:"Дизайнеру",active:o(1),onClick:()=>r(1)}),t.jsx(p.Tab,{label:"Тестирование",active:o(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{description:"Интерактивный stepper с переходом между шагами.",code:c}),t.jsx(s,{description:"Состояния stepper с ошибкой и цветовым акцентом.",code:l}),t.jsx(h,{argsTypes:w})]}),e==1&&t.jsx(g,{url:a}),e==2&&t.jsx(k,{variant:"Heading4",color:"primary",children:t.jsx(C,{componentName:i})})]})};function n(e){return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Components/Stepper/Info",component:N,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689"},jest:["Stepper.test.tsx"]}}),`
`,t.jsx(f,{of:b}),`
`,t.jsx(u,{children:t.jsx(T,{})})]})}function Fe(e={}){const{wrapper:r}={...j(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{Fe as default};
