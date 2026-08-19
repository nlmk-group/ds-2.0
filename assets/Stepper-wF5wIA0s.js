import{r as S,j as t,m as x,S as f,U as u}from"./iframe-CiFytELZ.js";import{useMDXComponents as j}from"./index-DybNXUjF.js";import{S as N}from"./index-DvWfCBSL.js";import{DecoratorDefault as b}from"./Decorator.stories-BzItgCqc.js";import{s as m,H as E,E as s}from"./Header-X6Kr5SHJ.js";import{F as g}from"./FigmaEmbed-C2oXb4D3.js";import{P as h,T as C}from"./Tests-BcceQP3J.js";/* empty css               */import{T as p}from"./index-BQkij8xm.js";import{T as k}from"./index-AScBX7ch.js";import{a as w}from"./argsTypes-DcrcMKj0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCkmK5YD.js";import"./clsx-B-dksMZM.js";import"./index-DJ0iMoCC.js";import"./index-DawP55CX.js";import"./index-Caup2jln.js";import"./index-yhpuehNm.js";import"./16-DE4viI8O.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DJEYtQIn.js";import"./index-ageiqw5d.js";import"./32-BUE7duXK.js";import"./32-dCVSFMeK.js";import"./24-CEYPuBp0.js";import"./24-DMYK_POk.js";import"./24-Bt83Uokx.js";import"./24-Cg37IYki.js";import"./24-URZj1P3S.js";import"./24-C7n6mi1f.js";import"./24-B6ivgZpd.js";import"./24-RrFXbNlX.js";import"./24-DG7ZIblO.js";import"./24-C2S-g5KW.js";import"./24-r-rrcgWc.js";import"./16-BfVH5IGj.js";import"./16-CdjU_4JV.js";import"./16-BT9sIG7U.js";import"./16-CqiQVPWz.js";import"./16-D7g-PMEy.js";import"./index-Cw2HZq9h.js";import"./index-g6EAEksG.js";import"./index-BxUgnl0U.js";import"./index-yVptosnr.js";import"./index-DxDzu7P3.js";import"./index-7UQTagkh.js";import"./colorsMapping-C6bFIk14.js";import"./index-DKkLeCla.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BbS2YyIp.js";import"./useFloatingReferenceSync-BSceUB3Q.js";import"./index-BbXZCDfz.js";import"./types-TdnjS80C.js";import"./index-DVfkSf50.js";import"./MenuItem-DEzF3Wos.js";import"./floating-ui.react-KcrBVsuh.js";import"./sizesMapping-D8QavrGc.js";import"./index-BA4dGRCH.js";import"./index-D7Enchig.js";import"./index-JoZBJQz1.js";import"./index-Y7pOMNss.js";import"./index-CRJtbCyP.js";import"./index-CJaX5efT.js";import"./index-5rbdE4ra.js";import"./index-D2T7B9nx.js";import"./index-DpPQjWyC.js";import"./index-BtEyOEDh.js";import"./index-C-AQ4SnI.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DH6FMXCn.js";import"./index-IX9qaxFo.js";import"./index-BJsQCtoC.js";import"./index-GdPBVw6h.js";import"./index-mDMSBCcD.js";import"./index-BBwGQaN3.js";import"./index-PUDlQz6m.js";import"./index-BKVJajSn.js";import"./index-CtOsqJ6t.js";import"./index-B98CSxRp.js";import"./index-A9JPGDIL.js";import"./index-CswK6oZ4.js";import"./index-BB_iyaOG.js";import"./index-CAlDJVEd.js";import"./index-CdHqNcI6.js";import"./index-B7G0hzPa.js";import"./index-BtVPDrmD.js";import"./index-BFdlLUWB.js";import"./index-C9riXii6.js";import"./index-CwibpBsN.js";import"./index-DQFKTQjB.js";import"./index-DaZRXyVS.js";import"./index-3AXam_x1.js";import"./index-Dhsf1Its.js";import"./index-BBOasYPk.js";import"./index-Ce4DEavg.js";import"./index-B-uV3fk6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-0qRpJbl9.js";import"./index-CTO_m6qR.js";import"./index-Co7ZUFcE.js";import"./index-DoIF5vPd.js";import"./index-DptaoNrR.js";import"./index-C3SBMNpO.js";import"./index-CcYULIfU.js";import"./index-Daq8v7vG.js";import"./index-Cz_vA1hZ.js";import"./index-BlRSHBC7.js";import"./ComboBox-PS9Y9Xue.js";import"./index-CYnbSGsW.js";import"./constants-ClWdtWAL.js";import"./TreeList-77y535wQ.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689",T=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
