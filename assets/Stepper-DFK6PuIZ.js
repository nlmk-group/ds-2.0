import{r as S,j as t,m as x,S as f,U as u}from"./iframe-D1ppCfJL.js";import{useMDXComponents as j}from"./index-DUXc5yr1.js";import{S as E}from"./index-0w7-TbBZ.js";import{DecoratorDefault as b}from"./Decorator.stories-Ce4quGEU.js";import{s as m,H as N,E as s}from"./Header-CrzktEKM.js";import{F as g}from"./FigmaEmbed-C7Y9lIWu.js";import{P as h,T as C}from"./Tests-ErrWIcVc.js";/* empty css               */import{T as p}from"./index-DlP1k4gA.js";import{T as v}from"./index-B8OV2sj9.js";import{a as w}from"./argsTypes-Bt2cOzN0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1MtTpbs.js";import"./clsx-B-dksMZM.js";import"./index-BtqWnsFW.js";import"./index-pBOwR2Sr.js";import"./index-DQiorVga.js";import"./index-BhAG1mVA.js";import"./16-CJBceTE3.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BbmMdiDL.js";import"./index-1Ia9d37J.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DvGStvE4.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-Dwzv70HG.js";import"./24-hEGWduDH.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-Dg_oBXFF.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";import"./index-D3y4eWrN.js";import"./index-BkONTIs-.js";import"./index-DTDhhVJl.js";import"./index-BQXeN0eF.js";import"./index-_EnS4SPv.js";import"./index-DCLji6qX.js";import"./colorsMapping-C6bFIk14.js";import"./index-BuboyXZl.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CskC-lf5.js";import"./useFloatingReferenceSync-_s1uppib.js";import"./index-BAWCPbpv.js";import"./types-TdnjS80C.js";import"./index-dwkJrdOm.js";import"./MenuItem-BiyJ08nY.js";import"./floating-ui.react-DKQvXyy0.js";import"./sizesMapping-D8QavrGc.js";import"./index-CdGiUjLy.js";import"./index-CoVi-s7L.js";import"./index-CYVJgBAK.js";import"./index-BwhgPU9I.js";import"./index-DwwGufnW.js";import"./index-DuvGnr4P.js";import"./index-Cn43EhjI.js";import"./index-Dq_AZ4Gl.js";import"./index-BKgG2BUu.js";import"./index-CZz4O3t8.js";import"./index-DDTzxOqr.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Ct8-B2RS.js";import"./index-DZ1-9d6d.js";import"./index-BPCh3R_L.js";import"./index-CEUVPE5x.js";import"./index-Bsj2pXl4.js";import"./index-BFBGSixy.js";import"./index-DBTyYIq5.js";import"./index-B2DrMXcC.js";import"./index-CD-VGwDt.js";import"./index-Dt9QaNhs.js";import"./index-C3RlDP0j.js";import"./index-D9eBI-ul.js";import"./index-DvVC4LD1.js";import"./index-ppwxfrOJ.js";import"./index-CZI9tviC.js";import"./index-BvPqZPcI.js";import"./index-CHKV4Xzj.js";import"./index-BDHI1vN6.js";import"./index-RJYyFZKU.js";import"./index-BYlJK5W5.js";import"./index-BBrdAj2S.js";import"./index-C_PjMrzg.js";import"./index-CV1Omkp3.js";import"./index-BDde93qT.js";import"./index-VSWU4_A4.js";import"./index-CFOhRc1z.js";import"./index-BYVv5Ws0.js";import"./index-CRzaLeVS.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D-Ocfrfd.js";import"./index-CSNQVful.js";import"./index-DrgSnG8u.js";import"./index-BOz-GYvQ.js";import"./index-OW61RsAS.js";import"./index-GjSckLp0.js";import"./index-C8eAPz1j.js";import"./index-BZ11wUJ2.js";import"./index-CIHIr33g.js";import"./ComboBox-BIeVukHs.js";import"./index-T1NdoD8u.js";import"./TreeList-COEGgzHL.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",k=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
`,t.jsx(u,{children:t.jsx(k,{})})]})}function De(e={}){const{wrapper:r}={...j(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{De as default};
