import{r as S,j as t,m as x,S as f,U as u}from"./iframe-Bo4nALm7.js";import{useMDXComponents as j}from"./index-CNvPJL2u.js";import{S as E}from"./index-pRNUvCjI.js";import{DecoratorDefault as b}from"./Decorator.stories-C3iA9RHT.js";import{s as m,H as N,E as s}from"./Header-Bi47uln5.js";import{F as g}from"./FigmaEmbed-CwaUbb0p.js";import{P as h,T as C}from"./Tests-CBVV_6V2.js";/* empty css               */import{T as p}from"./index-DX_ysYvL.js";import{T as v}from"./index-CUIhMP_o.js";import{a as w}from"./argsTypes-B-HNslBo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CptZomEK.js";import"./clsx-B-dksMZM.js";import"./index-BH32iLo9.js";import"./index-DcKSVsFY.js";import"./index-BdFgkFQG.js";import"./index-CRs1WgNz.js";import"./16-aMqW81vf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BBFxLaJS.js";import"./index-DUNZSITs.js";import"./32-DrwGWWyr.js";import"./24-DMCeAA-V.js";import"./24-85pGpdFN.js";import"./24-DO_3r_fK.js";import"./24-BysagIQq.js";import"./24-D5XAI_AH.js";import"./24-BfwlYFIe.js";import"./24-CbRb0MeE.js";import"./24-NHhFZcqx.js";import"./24-gy5ADEN_.js";import"./24-CNhMk3Hk.js";import"./24-Blxmuo2i.js";import"./24-C8hAPZTM.js";import"./16-BT8X9gPM.js";import"./16-CUTQAt8-.js";import"./16-BgwH21Xk.js";import"./16-Bi9OWKG5.js";import"./16-KygOpizh.js";import"./index-cy5tNcXH.js";import"./index-C-nYBGLl.js";import"./index-DMp9sWPh.js";import"./index-D9HYjQb0.js";import"./index-DDZBgTK0.js";import"./index-Bk9qrNZ3.js";import"./colorsMapping-C6bFIk14.js";import"./index-rp9NcFhw.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-yK1xfIEO.js";import"./useFloatingReferenceSync-Bw3HtT9W.js";import"./index-BOLRlznn.js";import"./types-TdnjS80C.js";import"./index-i6hjNmeh.js";import"./MenuItem-Bua9EO5H.js";import"./floating-ui.react-C906_DDE.js";import"./sizesMapping-D8QavrGc.js";import"./index-CiQrrBbP.js";import"./index-D1TI5Y5u.js";import"./index-5mM__hj5.js";import"./index-xjOxjbir.js";import"./index-DFP8AFjH.js";import"./index-Yu4XOZcE.js";import"./index-BcObFQTT.js";import"./index-DLmt8FUL.js";import"./index-Cnz5MgXS.js";import"./index-Cb5WN4nC.js";import"./index-CiKGUfYn.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DLNO0Sc-.js";import"./index-Bi6e8oFp.js";import"./index-DZcyuWQ6.js";import"./index-DCWDgjRo.js";import"./index-R1K1l0qL.js";import"./index-D0KUbv5S.js";import"./index-Cq5dlaEe.js";import"./index-BE9G9-1L.js";import"./index-BMsjPRPD.js";import"./index-BVqpk8_K.js";import"./index-BFSn3M6J.js";import"./index-C-aAOGaG.js";import"./index-B6633_5K.js";import"./index-KMoa1m14.js";import"./index-U5t1T9aa.js";import"./index-BKl3Bi28.js";import"./index-Dg2gdaVK.js";import"./index-DyD8r78B.js";import"./index-t_AVc4Gt.js";import"./index-Bi15G151.js";import"./index-CjPvelGF.js";import"./index-BIa2fxZk.js";import"./index-CVumvtuI.js";import"./index-DF-bDP0l.js";import"./index-BLcxd_1e.js";import"./index-9uW_AGTn.js";import"./index-A-Ir1b2D.js";import"./index-CXj-YKM1.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CNR-ofzU.js";import"./index-DZkdzlJ9.js";import"./index-C9Wj5XRW.js";import"./index-B36MGRax.js";import"./index-B9qru-GC.js";import"./index-BURAcp9Z.js";import"./index-Cs7fUJPF.js";import"./index-C1iGHzcO.js";import"./index-CgLFB2Hb.js";import"./ComboBox-BaEbyY7G.js";import"./index-BWYedRL0.js";import"./index-Xr1AR9qo.js";import"./TreeList-DpVIVhWV.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",k=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
`,t.jsx(u,{children:t.jsx(k,{})})]})}function Fe(e={}){const{wrapper:r}={...j(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{Fe as default};
