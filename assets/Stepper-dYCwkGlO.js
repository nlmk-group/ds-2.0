import{r as S,j as t,m as x,S as f,U as u}from"./iframe-CHHQDVoX.js";import{useMDXComponents as j}from"./index-B1LTtkqD.js";import{S as E}from"./index-DdD0P9sc.js";import{DecoratorDefault as b}from"./Decorator.stories-DNZYnr5K.js";import{s as m,H as N,E as s}from"./Header-C4Gtm_L5.js";import{F as g}from"./FigmaEmbed-pveWd2DR.js";import{P as h,T as C}from"./Tests-B0qmEzAm.js";/* empty css               */import{T as v}from"./index-C5RO9eqh.js";import{T as p}from"./index-BTZVm9Y3.js";import{a as w}from"./argsTypes-C4VKeob9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-9sGLZR.js";import"./clsx-B-dksMZM.js";import"./index-KI_mLAAh.js";import"./index-DYQTidD-.js";import"./index-CwmmLxy5.js";import"./index-DucDzwTg.js";import"./index-DBfCc0Jn.js";import"./16-CzdCZHDH.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-O653EECt.js";import"./24-JhZx5C50.js";import"./index-XGZPkqjb.js";import"./16-1skbPHrv.js";import"./index-vSQLaUqp.js";import"./index-Di9izlqG.js";import"./32-BrvnL8Hj.js";import"./24-BunGgvie.js";import"./24-CZW84qpr.js";import"./24-DIXfQiLz.js";import"./24-CD6xrv2j.js";import"./24-CWmeerJT.js";import"./24-Gpv48tUf.js";import"./24-BKM1KU47.js";import"./24-Bp815V0R.js";import"./24-BaGOPWtX.js";import"./16-CjM46jjK.js";import"./16-DL1hQxMw.js";import"./index-BEx0Kzll.js";import"./index-CJmLln8K.js";import"./index-CSuovX3X.js";import"./index-BHnpI8kT.js";import"./index-dSmaknGw.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-De57FWCK.js";import"./index-BzIC8vFU.js";import"./index-BANVVOGG.js";import"./index-DZgd0Qfe.js";import"./index-IsGk3ZIX.js";import"./types-TdnjS80C.js";import"./floating-ui.react-6VfTZOrw.js";import"./sizesMapping-D8QavrGc.js";import"./index-CdHeQl8P.js";import"./index-DxMlVd1J.js";import"./index-DtzYchqB.js";import"./index-D-VDIxFn.js";import"./index-BmtuxTTp.js";import"./index-CMjJ_rHR.js";import"./index-Y1gY5mOJ.js";import"./index-DmLZE8cz.js";import"./index-BI9I3JHz.js";import"./index-8V-zlFGO.js";import"./index-qkZhGjnb.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-01GcG0LR.js";import"./useFloatingReferenceSync-adXaq3Ya.js";import"./index-BtFeD-3X.js";import"./index-CxXtU9jM.js";import"./index-DD65tyqZ.js";import"./index-3J2s6a0v.js";import"./index-C6OX9F5-.js";import"./index-DvPBu460.js";import"./index-BhlmHl_K.js";import"./index-DicmkMu7.js";import"./index-CRrW3b0X.js";import"./index-G8_-uYaZ.js";import"./index-CC5B16j-.js";import"./index-TWHnUoEw.js";import"./index-a9LznR3Q.js";import"./index-HGD0h4gs.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CWser92f.js";import"./index-CQek3CAN.js";import"./index-p2bUiyyW.js";import"./index-CzvxnUYC.js";import"./index-B1ffb27g.js";import"./index-DhCDiUD2.js";import"./index-DgjlDdW0.js";import"./index-Ge3Tw8iO.js";import"./index-CNVqUNB9.js";import"./index-BGj-2ukp.js";import"./index-Bg5xPX9b.js";import"./index-c_MoiZvK.js";import"./index-U8RdPQdR.js";import"./index-rMcQZCT_.js";import"./index-DqjA2CJI.js";import"./index-DUcChkPA.js";import"./index-Bd568ebt.js";import"./index-CXzLkByr.js";import"./ComboBox-BthUrrTu.js";import"./index-CV7DnwVd.js";import"./TreeList-BLcOMBIT.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",k=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
