import{r as S,j as t,m as x,S as f,U as u}from"./iframe-C2j-UzJI.js";import{useMDXComponents as j}from"./index-CnUiOmhK.js";import{S as N}from"./index-D5Omujth.js";import{DecoratorDefault as b}from"./Decorator.stories-DBUaiF2k.js";import{s as m,H as E,E as s}from"./Header-CS8Ul-7Z.js";import{F as g}from"./FigmaEmbed-BXpMjOC7.js";import{P as h,T as C}from"./Tests-BzXlcuiS.js";/* empty css               */import{T as p}from"./index-j_056LZh.js";import{T as k}from"./index-P9-ONPUI.js";import{a as w}from"./argsTypes-344O1Kt2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DniZBuyb.js";import"./clsx-B-dksMZM.js";import"./index-ClEzh6W5.js";import"./index-D3z7S9ph.js";import"./index-EKbY0pty.js";import"./index-B6CIWydZ.js";import"./16-049IwUhX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BI-uMOwr.js";import"./index-Cgs4mkOo.js";import"./32-BI8xtbsU.js";import"./32-CJ0o-VIC.js";import"./24-CuDIHvWX.js";import"./24-Cva_JBwh.js";import"./24-KVke6soD.js";import"./24-BrI2by3D.js";import"./24-B5ODlOpD.js";import"./24-OjUQZVfT.js";import"./24-CeOxJPqx.js";import"./24-CHP3BsWo.js";import"./24-CKMbmC7d.js";import"./24-nYvLFNAE.js";import"./24-fUQbig4h.js";import"./16-BMa1J7tj.js";import"./16-SQC_C9px.js";import"./16-BuZexhOR.js";import"./16-DPV7Mbm7.js";import"./16-ChsbLgyw.js";import"./index-D9e0IWV-.js";import"./index-yGzPLeeo.js";import"./index-Cm_Ba9v7.js";import"./index-CtJ4Gng-.js";import"./index-DQwYpJV-.js";import"./index-Cdr1B_yf.js";import"./colorsMapping-C6bFIk14.js";import"./index-DRJdSF_u.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DubnQ8iR.js";import"./useFloatingReferenceSync-B9wLGTQm.js";import"./index-mz-Fux1b.js";import"./types-TdnjS80C.js";import"./index-DJNN3joX.js";import"./MenuItem-2rBr_5IO.js";import"./floating-ui.react-B-hVAgIp.js";import"./sizesMapping-D8QavrGc.js";import"./index-BlB3gbyn.js";import"./index-BxD8CrGk.js";import"./index-D--QrFHf.js";import"./index-CNN_3_D-.js";import"./index-DKRZUTnz.js";import"./index-BIghOfGk.js";import"./index-BCWSZamI.js";import"./index-dafhDTNg.js";import"./index-DBzDQ-ch.js";import"./index-AnGV7slG.js";import"./index-Dw3c2VVg.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DZ9AfOMR.js";import"./index-BpckL99B.js";import"./index-DxVRZIMU.js";import"./index-BYk4kF2r.js";import"./index-p4R0JKbs.js";import"./index-DX43l6l8.js";import"./index-BYjJWpD4.js";import"./index-D_f15RZF.js";import"./index-dHWQfCU4.js";import"./index-B9O-LOtF.js";import"./index-B8k0jrF3.js";import"./index-EikiiVfW.js";import"./index-jAVg74ZN.js";import"./index-DhCmc_-U.js";import"./index-DGfhABU5.js";import"./index-CrdTlCOS.js";import"./index-Cjmo6ss0.js";import"./index-mFyay1Jh.js";import"./index-CWWsFxD8.js";import"./index-CFvqY2-I.js";import"./index-CLjZt-U5.js";import"./index-DxU2rFyU.js";import"./index-BztNwpqP.js";import"./index-C3s3_K12.js";import"./index-BPEi8AAc.js";import"./index-nrqGK399.js";import"./index-D_AdWthx.js";import"./index-CC1rooLK.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DqweFzDp.js";import"./index-BP9NHWE2.js";import"./index-DTAmrxZ5.js";import"./index-Cia1E6ra.js";import"./index-C7GKKkXm.js";import"./index-CzeiuUcG.js";import"./index-CBv4Ru4y.js";import"./index-CCMQkG81.js";import"./index-BmhtsoHO.js";import"./ComboBox-DginoVkT.js";import"./index-B_pht6vj.js";import"./constants-C_zUGLqh.js";import"./TreeList-CmR72Klg.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689",T=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
