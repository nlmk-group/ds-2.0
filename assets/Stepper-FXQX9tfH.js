import{r as S,j as t,m as x,S as f,U as u}from"./iframe-DfRM7LXF.js";import{useMDXComponents as j}from"./index-s3G8uf3c.js";import{S as E}from"./index-syqq8EGq.js";import{DecoratorDefault as b}from"./Decorator.stories-Dc5cDQ_A.js";import{s as m,H as N,E as s}from"./Header-BrYoDfav.js";import{F as g}from"./FigmaEmbed-B7TLU8Q3.js";import{P as h,T as C}from"./Tests-Bl_4nCEK.js";/* empty css               */import{T as v}from"./index--nFqMQdT.js";import{T as p}from"./index-HQdxBngH.js";import{a as w}from"./argsTypes-CnU4Vhcv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wON6kCEo.js";import"./clsx-B-dksMZM.js";import"./index-TH-r5Kbz.js";import"./index-BBdLC-OA.js";import"./index-DINl29EL.js";import"./index-B2VJ83In.js";import"./index-CbWBwQI3.js";import"./16-BAUAAMRf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DPno0QZj.js";import"./24-D3pKJ1t3.js";import"./index-BRJ-Ua9i.js";import"./16-fn2TPoua.js";import"./index-eg8itsWK.js";import"./index-CN5IEPbV.js";import"./32-Bjn7Co6i.js";import"./24-D-2FQCka.js";import"./24-Bx5Ko4Zf.js";import"./24-CWpuPGUf.js";import"./24-CLWtzJRM.js";import"./24-Cp5qlwo7.js";import"./24-LAGNS7eA.js";import"./24-CSBD1goG.js";import"./24-DunoRfpD.js";import"./24-WTey2qPh.js";import"./16-B4jpe3eU.js";import"./16-UKcUYuG7.js";import"./index-CqGpx5F6.js";import"./index-D2Kz8Cjc.js";import"./index-DVB7RJDK.js";import"./index-Bbrpw_Ow.js";import"./index-rkxnOxqa.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BGl-7D4l.js";import"./index-BqE4MY4m.js";import"./index-CRXfl0Vt.js";import"./index-UMg-UgH6.js";import"./index-DZtnbN5A.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CdQVfeSt.js";import"./sizesMapping-D8QavrGc.js";import"./index-DyLcPuXd.js";import"./index-DkFFLpKU.js";import"./index-BRcbigKy.js";import"./index-Bs9bu8w1.js";import"./index-CAWkMWRs.js";import"./index-B6F_DLS2.js";import"./index-D0L1Sk36.js";import"./index-CPQdLsa5.js";import"./index-CJQswicC.js";import"./index-DmFtZ-Ny.js";import"./index-wY5Em-zL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-nVILX9LA.js";import"./useFloatingReferenceSync-B2OO83Jd.js";import"./index-Di10VY84.js";import"./index-CKR5Megx.js";import"./index-Baxn1nZN.js";import"./index-D3rQde2D.js";import"./index-W4qf1pCz.js";import"./index-B7Cg2_me.js";import"./index-BsZ7Kff4.js";import"./index-D2NcEt1k.js";import"./index-DUe44RxZ.js";import"./index-CzpPczJJ.js";import"./index-oHV1kBbR.js";import"./index-ydaVehZ7.js";import"./index-D_2odW5T.js";import"./index-B4s-8p3z.js";import"./index-C6yYWo4G.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DsM1Nq1m.js";import"./index-S_twP3Il.js";import"./index-C1EDehIY.js";import"./index-BfvSM5Fb.js";import"./index-DTIMN90s.js";import"./index-Dj81d4ZI.js";import"./index-Casca5S3.js";import"./index-Ba4KYGTt.js";import"./index-BvJOeOlN.js";import"./index-C6jCapMo.js";import"./index-BzMT43aM.js";import"./index-DsvUz8Pz.js";import"./index-Bk5TUS1W.js";import"./index-DRK0Fag0.js";import"./index-DUBAR20C.js";import"./index-DRVnFPP8.js";import"./ComboBox-Dt4xV1fo.js";import"./index-Cotw6HSH.js";import"./TreeList-k1lhCedt.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",k=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
`,t.jsx(u,{children:t.jsx(k,{})})]})}function ve(e={}){const{wrapper:r}={...j(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{ve as default};
