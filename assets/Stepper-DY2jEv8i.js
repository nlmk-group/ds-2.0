import{r as S,j as t,m as x,S as f,U as u}from"./iframe-auckHHdj.js";import{useMDXComponents as j}from"./index-D2-gUu9G.js";import{S as E}from"./index-1SaxXTAW.js";import{DecoratorDefault as b}from"./Decorator.stories-CU9Bre90.js";import{s as m,H as N,E as s}from"./Header-Xv1TykH5.js";import{F as g}from"./FigmaEmbed-UYJ3_Lxu.js";import{P as h,T as C}from"./Tests-Be3Z9p2z.js";/* empty css               */import{T as v}from"./index-DVSj14ZC.js";import{T as p}from"./index-DeGyB7Dd.js";import{a as w}from"./argsTypes-SFd7A7eR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXN1ldU3.js";import"./clsx-B-dksMZM.js";import"./index-B4KZvEgZ.js";import"./index-Bi3cHAEE.js";import"./index-p7YOrb6p.js";import"./index-Pjjb9oj1.js";import"./index-WoM53gF_.js";import"./16-DXAjwKj0.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-JpVCCs1C.js";import"./24-BbN_tXia.js";import"./index-c4yDlpPS.js";import"./16-DoCVdKUE.js";import"./index-CczZHqJG.js";import"./index-BLWgIzMD.js";import"./32-Dgon7Y2a.js";import"./24-D3OVyFof.js";import"./24-CZ9ZAk74.js";import"./24-D-Ce91Qj.js";import"./24-DCTJG6OU.js";import"./24-BOn3Xrid.js";import"./24-BC-oV7QY.js";import"./24-Gcxv2DAi.js";import"./24-zuSrA0QY.js";import"./24-aRDAvjva.js";import"./16-BIzc6kNX.js";import"./16-CQDnK6-A.js";import"./index-CznkRUli.js";import"./index-HmkWsx8T.js";import"./index-7B7uGpjf.js";import"./index-D6wJCd8e.js";import"./index-qO9dtrtH.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bay6_7KL.js";import"./index-CHU7bacX.js";import"./index-CsbgtAb7.js";import"./index-Dtv-oYzE.js";import"./index-B-ej4zbU.js";import"./types-TdnjS80C.js";import"./floating-ui.react-2bHrE470.js";import"./sizesMapping-D8QavrGc.js";import"./index-Toxo3H46.js";import"./index-BQRpE3vE.js";import"./index-DIknRWC4.js";import"./index-BTrYr-DM.js";import"./index-NkgoTVoy.js";import"./index-DI5MKq0T.js";import"./index-DI7c4HX8.js";import"./index-5_PQcWJ_.js";import"./index-BJ_pO-nS.js";import"./index-Bgj3TetA.js";import"./index-7Ftiwmbj.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DQjzjF05.js";import"./useFloatingReferenceSync-y2Sb52o3.js";import"./index-MeCbP8N7.js";import"./index-DJL6Ketu.js";import"./index-DEqo2gt9.js";import"./index-DEdd9dJR.js";import"./index-symdhavQ.js";import"./index-mikXIReK.js";import"./index-DjEbf1Sc.js";import"./index-Clnp6vy5.js";import"./index-DPDFUXOz.js";import"./index-BcPHqDDB.js";import"./index-CmECfUaS.js";import"./index-CfC-iwgs.js";import"./index-D5mVsZu_.js";import"./index-CMGZFX1T.js";import"./index-DaTNyn08.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CYpVoyww.js";import"./index-C4xiOmXd.js";import"./index-Ckcsg1R_.js";import"./index-B4AAAwTV.js";import"./index-BbQCbaJ_.js";import"./index-Bfe18qq-.js";import"./index-DBO3Tr6M.js";import"./index-eQTa5KLe.js";import"./index-jYXTCRtU.js";import"./index-DKRvyNZX.js";import"./index-Cwm_m_JE.js";import"./index-DSyAIbs-.js";import"./index-D9WAgLdq.js";import"./index-BgB7HTk8.js";import"./index-84_n7Alc.js";import"./index-EESLLEw6.js";import"./index-CLlcyrdp.js";import"./ComboBox-0tLuTHDp.js";import"./index-D1zl6Im_.js";import"./TreeList-BsnCF1G8.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",k=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
`,o=d=>e===d;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(N,{title:i,description:"Stepper отображает последовательность шагов и их состояние в процессе выполнения. Компонент поддерживает интерактивный выбор шага и визуальные состояния успеха, ошибки и блокировки.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:a}),t.jsx("div",{className:m.tabs,children:t.jsxs(p,{children:[t.jsx(p.Tab,{label:"Разработчику",active:o(0),onClick:()=>r(0)}),t.jsx(p.Tab,{label:"Дизайнеру",active:o(1),onClick:()=>r(1)}),t.jsx(p.Tab,{label:"Тестирование",active:o(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{description:"Интерактивный stepper с переходом между шагами.",code:c}),t.jsx(s,{description:"Состояния stepper с ошибкой и цветовым акцентом.",code:l}),t.jsx(h,{argsTypes:w})]}),e==1&&t.jsx(g,{url:a}),e==2&&t.jsx(v,{variant:"Heading4",color:"primary",children:t.jsx(C,{componentName:i})})]})};function n(e){return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Components/Stepper/Info",component:E,parameters:{design:{type:"figma",url:"https://www.figma.com/design/byZZI6bYz2Iv2Jst7ycZ7M/Navigation-DS-3.0?node-id=1691-27062"},jest:["Stepper.test.tsx"]}}),`
`,t.jsx(f,{of:b}),`
`,t.jsx(u,{children:t.jsx(k,{})})]})}function we(e={}){const{wrapper:r}={...j(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{we as default};
