import{r as S,j as t,m as x,S as f,U as u}from"./iframe-BYEcINU_.js";import{useMDXComponents as j}from"./index-Bpsqjrzl.js";import{S as N}from"./index-Bbvb6W_F.js";import{DecoratorDefault as b}from"./Decorator.stories-BJBADL9m.js";import{s as m,H as E,E as s}from"./Header-QIn0U31P.js";import{F as g}from"./FigmaEmbed-DhnyYYAw.js";import{P as h,T as C}from"./Tests-BIMEJe_y.js";/* empty css               */import{T as p}from"./index-nj7VEw_R.js";import{T as k}from"./index-CTms4VQ3.js";import{a as w}from"./argsTypes-CNoDWpGz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6OuuQjE.js";import"./clsx-B-dksMZM.js";import"./index-CkchZA1S.js";import"./index-CrpGn3Cf.js";import"./index-DEnU3uQc.js";import"./index-XP9rVAlC.js";import"./16-BbOPmjLm.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CaNWwqgI.js";import"./index-aRgZryTI.js";import"./32-BcLCWGHn.js";import"./32-DEU7E1yO.js";import"./24-nElrukLD.js";import"./24-CuYChjrW.js";import"./24-Bg-YkJof.js";import"./24-DOSHn3uj.js";import"./24-qZuYAR8B.js";import"./24-Mxvma0Zx.js";import"./24-wPS-GG8M.js";import"./24-mlyJft-U.js";import"./24-DTKLnnJ8.js";import"./24-CSKlV1Hw.js";import"./24-BeWDWat7.js";import"./16-DVw9RX5j.js";import"./16-BucT6FLY.js";import"./16-CjgRgEbF.js";import"./16--L8JfMjs.js";import"./16-B5oEirVJ.js";import"./index-BQVhB4iE.js";import"./index-D2JaD0OQ.js";import"./index-U8G7M_Zs.js";import"./index-DH6ASFUC.js";import"./index-si5AuEoF.js";import"./index-COgWJkER.js";import"./colorsMapping-C6bFIk14.js";import"./index-BYOusy-M.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CK0J7sHo.js";import"./useFloatingReferenceSync-CsYvYhZU.js";import"./index-DzEvNTCJ.js";import"./types-TdnjS80C.js";import"./index-DZzZHuYh.js";import"./MenuItem-DdgCvPH4.js";import"./floating-ui.react-_Zuln8if.js";import"./sizesMapping-D8QavrGc.js";import"./index-Bzsm1X0Z.js";import"./index-CyD8HQ96.js";import"./index-COznie4U.js";import"./index-ZNnHXGDD.js";import"./index-BC0Sks76.js";import"./index-uwXEqcGR.js";import"./index-BBfWv7b0.js";import"./index-C0g5OMD9.js";import"./index-CojpXGg7.js";import"./index-C39GlgiC.js";import"./index-CaLPl1qK.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CA87DmbL.js";import"./index-C3exR97g.js";import"./index-7nLr9Lje.js";import"./index-7AUFuuQ2.js";import"./index-DY9r7tva.js";import"./index-D0bmCGQd.js";import"./index-8w1in6Dy.js";import"./index-CadNeeou.js";import"./index-DEdwYyQK.js";import"./index-dQ62oyVP.js";import"./index-BLillJGO.js";import"./index-BiaIOUue.js";import"./index-BUTff1zv.js";import"./index-D1Kdw1Ur.js";import"./index-CMCaOPVQ.js";import"./index-De9lbcqo.js";import"./index-CkFogjvg.js";import"./index-DNO6SmUQ.js";import"./index-atP-xhLu.js";import"./index-NFm-qVra.js";import"./index-CCZFPEUL.js";import"./index-CgIvrtde.js";import"./index-Ch64POBU.js";import"./index-DCa7h74_.js";import"./index-CWpqocMb.js";import"./index-D0MIXxpi.js";import"./index-BQH0MRqt.js";import"./index-Dbavy875.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-2AxAz-gb.js";import"./index-CVi-cyUF.js";import"./index-YYfSsAzR.js";import"./index-YVaISHls.js";import"./index-CQY7sNNS.js";import"./index-DOV__V4z.js";import"./index-QJ3E8HAN.js";import"./index-ByTrgoFe.js";import"./index-Brevh8m6.js";import"./ComboBox-4epN55r0.js";import"./index-7YhxVk_9.js";import"./constants-C9-wC4hs.js";import"./TreeList-DI_XRzGG.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689",T=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
