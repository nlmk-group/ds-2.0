import{r as S,j as t,m as x,S as f,U as u}from"./iframe-GHQjEpsb.js";import{useMDXComponents as j}from"./index-B8Cb6mvA.js";import{S as E}from"./index-DClnzsLR.js";import{DecoratorDefault as b}from"./Decorator.stories-CCUX5JA5.js";import{s as m,H as N,E as s}from"./Header-BXWzIQpV.js";import{F as g}from"./FigmaEmbed-Br_KB3qr.js";import{P as h,T as C}from"./Tests-uugUZoLC.js";/* empty css               */import{T as p}from"./index-CV-3xeQ8.js";import{T as v}from"./index-DJb1dn78.js";import{a as w}from"./argsTypes-BgTbGmMp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BNokyj4D.js";import"./clsx-B-dksMZM.js";import"./index-DW1qxpHI.js";import"./index-CwMtZ6LD.js";import"./index-ByRS7bpi.js";import"./index-CdSRMft-.js";import"./16-BqW1rNBw.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CxExZRzk.js";import"./index-CAqv-5FK.js";import"./32-Ch8UEd8D.js";import"./24-CvJc9f8d.js";import"./24-V-842Hd4.js";import"./24-BFYJrOCK.js";import"./24-CFV5ODyi.js";import"./24-BT3VdodN.js";import"./24-CD438uYz.js";import"./24-NYxH4Wn7.js";import"./24-0wMAnnTO.js";import"./24-xN4MxKIZ.js";import"./24-Ec1WffcD.js";import"./24-Bf3BEapt.js";import"./16-Dc97ioNZ.js";import"./16-CwgMkzPr.js";import"./16-FVLzaVo_.js";import"./index-C3jjOzzq.js";import"./index-B6KRA3ZB.js";import"./index-DDjduPuu.js";import"./index-CbMtuaR9.js";import"./index-Cb1Vgv7Y.js";import"./index-CrbCcHei.js";import"./colorsMapping-C6bFIk14.js";import"./index-BhXb1I4E.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-9xxbj185.js";import"./useFloatingReferenceSync-BPKQ-_Ey.js";import"./index-gU83LE3e.js";import"./types-TdnjS80C.js";import"./index-Dw4HSGie.js";import"./MenuItem-cwmhea0w.js";import"./floating-ui.react-C_9nhsMo.js";import"./sizesMapping-D8QavrGc.js";import"./index-D5tiDrSz.js";import"./index-DB2EGOHJ.js";import"./index-DfeOlOst.js";import"./index-qKoEXpn1.js";import"./index-BSlyJZDR.js";import"./index-CtknrjY8.js";import"./index-Cl3rcdje.js";import"./index-Cdnk68Wu.js";import"./index-DdQSMaZ7.js";import"./index-CzKhCsRQ.js";import"./index-BrzikNzy.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-BEyzHPFb.js";import"./index-D40PzGBW.js";import"./index-DXM8gjTJ.js";import"./index-BgqdrSax.js";import"./index-GcZm5qpl.js";import"./index-DimFK3AM.js";import"./index-DubUX2Fh.js";import"./index-DyQbf3Bh.js";import"./index-wFL7JQ-x.js";import"./index-DWnr0vN9.js";import"./index-CelkrSVu.js";import"./index-UmocORK-.js";import"./index-D1KDSdER.js";import"./index-DkqDQe7V.js";import"./index-Bro8qKYA.js";import"./index-PXofUIZt.js";import"./index-DbSaRUy7.js";import"./index-BVyDT0rk.js";import"./index-B2itxtYy.js";import"./index-CEj65Quy.js";import"./index-hoM-fUW3.js";import"./index-CH2jIRDc.js";import"./index-B-moVc61.js";import"./index-B9gAWxrO.js";import"./index-DFBiLkHj.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-B_r75_Ag.js";import"./index-zf3baTui.js";import"./index-CUmnQamA.js";import"./index-DHdy5BVi.js";import"./index-BKpcjK-S.js";import"./index-CD_D33wX.js";import"./index-CA7cvvjp.js";import"./index-C22prfeM.js";import"./index-CJWWB0hS.js";import"./ComboBox-B8JamNo2.js";import"./index-DmgKK2CE.js";import"./TreeList-DV7BpuGG.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",k=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
