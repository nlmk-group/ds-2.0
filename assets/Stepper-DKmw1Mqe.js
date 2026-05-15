import{r as S,j as t,m as x,S as f,U as u}from"./iframe-D_LYy3fl.js";import{useMDXComponents as j}from"./index-BGCmU5NS.js";import{S as N}from"./index-B32oSB5V.js";import{DecoratorDefault as b}from"./Decorator.stories-BO1qjJJ1.js";import{s as m,H as E,E as s}from"./Header-BLbLqtI-.js";import{F as g}from"./FigmaEmbed-DSb0w-ZX.js";import{P as h,T as C}from"./Tests-BJKeRIHR.js";/* empty css               */import{T as p}from"./index-B0cY82zJ.js";import{T as k}from"./index-B1PU1CNi.js";import{a as w}from"./argsTypes-Dwe-bvu-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtP4eAFz.js";import"./clsx-B-dksMZM.js";import"./index-BIF_MlAn.js";import"./index-BU_GnhDV.js";import"./index-C_cRJjro.js";import"./index-BiOm7QyS.js";import"./16-DkYOHGQf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-R8QHUFR1.js";import"./index-Y_-eDXu7.js";import"./32-BBjrBt_R.js";import"./32-B1ex1Qfl.js";import"./24-BzTqzIQp.js";import"./24-b_koWyIs.js";import"./24-XaiESbAO.js";import"./24-SvF-uGUY.js";import"./24-DBpiE5RN.js";import"./24-C31X8Df1.js";import"./24-DjRuCPMC.js";import"./24-owNDVSH-.js";import"./24-BoWyYuma.js";import"./24-ZwSrW1fV.js";import"./24-D4x4T2Vm.js";import"./16-BrwH80oO.js";import"./16-CXgWdZwH.js";import"./16-C70VLwWe.js";import"./16-DJp-l2qz.js";import"./16-8C7xLZBI.js";import"./index-BkmiSUDO.js";import"./index-Q5YcqIYP.js";import"./index-Bj6Bthvm.js";import"./index-BDsANEzD.js";import"./index-yDzNc95d.js";import"./index-B95bsGI0.js";import"./colorsMapping-C6bFIk14.js";import"./index-5PnItkP7.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-oJloIZca.js";import"./useFloatingReferenceSync-DtnNKvIM.js";import"./index-BWcODPGj.js";import"./types-TdnjS80C.js";import"./index-CzXcIb-j.js";import"./MenuItem-CMiMvsFX.js";import"./floating-ui.react-XEmCJJOr.js";import"./sizesMapping-D8QavrGc.js";import"./index-CLHUbwEU.js";import"./index-BRXpQ6Hr.js";import"./index-D0zaiIGb.js";import"./index-BsdBWJ3a.js";import"./index-CAVMCCtJ.js";import"./index-CMQId7KD.js";import"./index-DqUjQ6V8.js";import"./index-S_LgkFS5.js";import"./index-D3lr74sg.js";import"./index-C3TSEdgN.js";import"./index-B1rmkdDL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cus-K6LR.js";import"./index-DReekAV_.js";import"./index-P7ZTb--l.js";import"./index-BZOhfber.js";import"./index-CtdZrVFs.js";import"./index-zXTcph7i.js";import"./index-DQYYPt0I.js";import"./index-C3JMqomg.js";import"./index-C_UiSZZG.js";import"./index-lR55cdNn.js";import"./index-D0qqrzz7.js";import"./index-C4C0VBq-.js";import"./index-D0bJ_vk5.js";import"./index-BJJ_y91S.js";import"./index-Bm_nqkYB.js";import"./index-C9OsoAfb.js";import"./index-Bg0Nv3pS.js";import"./index-DPxKDXZx.js";import"./index-BrBqwFe2.js";import"./index-C1VUP76c.js";import"./index-B68SVRmH.js";import"./index-D2Bt9vO-.js";import"./index-BJHfEa9h.js";import"./index-BvNJt26d.js";import"./index-BPOlQxyv.js";import"./index-CeTCku7Z.js";import"./index-EATrCG3U.js";import"./index-BNXMfZxy.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-hZhhfzT2.js";import"./index-Dm1Av42Y.js";import"./index-D-Ucr6ou.js";import"./index-DK6KR7s9.js";import"./index-Br2zG6qh.js";import"./index-DVf28Hrl.js";import"./index-DmvA6fX4.js";import"./index-uifo1Fcm.js";import"./index-CTJfTsFr.js";import"./ComboBox-D7VaQLp6.js";import"./index-BUSsu5Rl.js";import"./constants-DVt2R2sY.js";import"./TreeList-B_Os3dVZ.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689",T=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
