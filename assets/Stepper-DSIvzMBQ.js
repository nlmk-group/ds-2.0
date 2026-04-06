import{r as S,j as t,m as x,S as f,U as u}from"./iframe-adG_7yRG.js";import{useMDXComponents as j}from"./index-Cg8Pf3Pw.js";import{S as E}from"./index-Bikxfajv.js";import{DecoratorDefault as b}from"./Decorator.stories-Beo23sgK.js";import{s as m,H as N,E as s}from"./Header-cMHYDLeC.js";import{F as g}from"./FigmaEmbed-BWR-OLCZ.js";import{P as h,T as C}from"./Tests-C1XQ0sNC.js";/* empty css               */import{T as v}from"./index-TjqOvBrG.js";import{T as p}from"./index-Yehuvb9K.js";import{a as w}from"./argsTypes-keeGVnEo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dy1IE1cv.js";import"./clsx-B-dksMZM.js";import"./index-D02QEMLS.js";import"./index-DzN3aT-y.js";import"./index-N0HJx9V2.js";import"./index-CnTjgQRx.js";import"./index-y2k2yeKx.js";import"./16-C5RTlL5k.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-C2G2GNsa.js";import"./24-B-tnmrg_.js";import"./index-C6st097g.js";import"./16-LI8OsMJg.js";import"./index-DSz2Fxi8.js";import"./index-DC_nQVbx.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-B4fAX0Ec.js";import"./24-Wv8b4C8A.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./index-BSzISWDV.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-Dyd59tUY.js";import"./index-BhxlvnnA.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-COV9g-2Q.js";import"./index-DJrVOycg.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./sizesMapping-D8QavrGc.js";import"./index-Da_FDSx_.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-CZ0fPPTA.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CjWSOjsl.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-B9-K2gEf.js";import"./index-BkYL4d7S.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DvU_tOJJ.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DvSn1Rpa.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",k=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
