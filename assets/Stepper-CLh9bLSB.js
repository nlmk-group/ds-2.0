import{r as S,j as t,m as x,S as f,U as u}from"./iframe-D_geb98U.js";import{useMDXComponents as j}from"./index-DEBIPiNl.js";import{S as N}from"./index-DwD6M5XP.js";import{DecoratorDefault as b}from"./Decorator.stories-CtbByLLQ.js";import{s as m,H as E,E as s}from"./Header-Cp8G-9CM.js";import{F as g}from"./FigmaEmbed-CpTK-aEq.js";import{P as h,T as C}from"./Tests-BFrILV54.js";/* empty css               */import{T as p}from"./index-Cbxger2I.js";import{T as k}from"./index-DVKWK4-j.js";import{a as w}from"./argsTypes-BYT0KtQm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hZv1vyiY.js";import"./clsx-B-dksMZM.js";import"./index-CmX5uS9r.js";import"./index-CV6hzqCP.js";import"./index-DzpyBbEs.js";import"./index-BOQlEYEy.js";import"./16-ytttYgy7.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CRYZ0TC_.js";import"./index-DXqbsWBL.js";import"./32-CJsTn9GR.js";import"./32-CSeewk7k.js";import"./24-Dks7beat.js";import"./24-wTI-a7Qj.js";import"./24-B20dUB8u.js";import"./24-ckbWkRdy.js";import"./24-Cpo6jKx5.js";import"./24-8OlOIiot.js";import"./24-D4VquirR.js";import"./24-Dh3bHrWZ.js";import"./24-l18nGkor.js";import"./24-CvT8JzoY.js";import"./24-Bgy5v27I.js";import"./16-CQHHA9le.js";import"./16-ZmyXGQ60.js";import"./16-Dy6XUum1.js";import"./16-CAqgkR1g.js";import"./16-B1x2jzVj.js";import"./index-gGDdMD4Z.js";import"./index-Dc0Smdiq.js";import"./index-DY6Wauvi.js";import"./index-DskztHOz.js";import"./index-DziAzwH5.js";import"./index-CdX0h1x8.js";import"./colorsMapping-C6bFIk14.js";import"./index-C9yrXfLO.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DtINpL4z.js";import"./useFloatingReferenceSync-Uu7LJ-ip.js";import"./index-Ds2s981t.js";import"./types-TdnjS80C.js";import"./index-CHLxKCE-.js";import"./MenuItem-RKU4owtw.js";import"./floating-ui.react-C_U8tQaz.js";import"./sizesMapping-D8QavrGc.js";import"./index-CVwy7aMy.js";import"./index-B82E4k1I.js";import"./index-DurTHLjl.js";import"./index-BmAyGkEC.js";import"./index-B207YH3y.js";import"./index-D2pVVHYb.js";import"./index-D-VB7JJf.js";import"./index-CNpEsrMB.js";import"./index-CS6EpHju.js";import"./index-B4KF8t6p.js";import"./index-Col1tz7G.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CTGxoHFE.js";import"./index-8pjDucJj.js";import"./index-XAV3gP1c.js";import"./index-CqItqX1T.js";import"./index-B4Lvy_xN.js";import"./index-BsU4-z2O.js";import"./index-DGVoojgO.js";import"./index-BJ_EJkVt.js";import"./index-DWfoHQZi.js";import"./index-BEr6Yej_.js";import"./index-DsiBS6O_.js";import"./index-BRmfAQM5.js";import"./index-7M5-vNro.js";import"./index-BBQxN6Hh.js";import"./index-WEJ-wiwM.js";import"./index-B0vyHZT0.js";import"./index-DOrebIlF.js";import"./index-DUNXWP3K.js";import"./index-CRQ1F-kQ.js";import"./index-IhMb7mOd.js";import"./index-Dk_eh4hq.js";import"./index-BHIlvHWF.js";import"./index-CmZWJowM.js";import"./index-CUlZZogs.js";import"./index-CdZRxSQR.js";import"./index-BCQKokda.js";import"./index-Cml4jBdN.js";import"./index-DEt2dyhg.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CsAs8tg2.js";import"./index-Tlp5L_x6.js";import"./index-Bg9A9_j3.js";import"./index-BRE8g-Px.js";import"./index-vrktoCUN.js";import"./index-Cd99GZ_P.js";import"./index-B34m8eE0.js";import"./index-D0nJVAiy.js";import"./index-B5MzhOMl.js";import"./ComboBox-ru-vv14S.js";import"./index-NvAUagqQ.js";import"./constants-DBot8vvE.js";import"./TreeList-DmNOIBRU.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689",T=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
