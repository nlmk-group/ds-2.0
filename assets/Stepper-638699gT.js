import{r as S,j as t,m as x,S as f,U as u}from"./iframe-DaRyOQD4.js";import{useMDXComponents as j}from"./index-BgkguWCX.js";import{S as N}from"./index-BM0Ab2WA.js";import{DecoratorDefault as b}from"./Decorator.stories-Bdka78jy.js";import{s as m,H as E,E as s}from"./Header-DystUPED.js";import{F as g}from"./FigmaEmbed-BGn6m26F.js";import{P as h,T as C}from"./Tests-CYj1CAIQ.js";/* empty css               */import{T as p}from"./index-gu4HNhdT.js";import{T as k}from"./index-Dvw5dMma.js";import{a as w}from"./argsTypes-BZaZOqUd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1k1NS-B.js";import"./clsx-B-dksMZM.js";import"./index-Bm7gwrWd.js";import"./index-CBZ_keLy.js";import"./index-CmkzyLkL.js";import"./index-CkK1Msss.js";import"./16-CvdS6GvX.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CNjWEkXp.js";import"./index-7E4T5yQV.js";import"./32-BBsCXdKC.js";import"./32-BjfT3i4e.js";import"./24-CISCaQ63.js";import"./24-60eD6Z-I.js";import"./24-qK0x_3Ma.js";import"./24-B-wOqD5j.js";import"./24-B-h9yLtA.js";import"./24-B_dTG4ub.js";import"./24-D0g0E23x.js";import"./24-gNed2SUN.js";import"./24-C175QdoB.js";import"./24-BGR-3ALd.js";import"./24-DFKe0nyJ.js";import"./16-0E3xB5Tl.js";import"./16-lUiuHRHz.js";import"./16-rE0E2ssb.js";import"./16-BvoUreEM.js";import"./16-BqEOmvvO.js";import"./index-BZ_Hg5x5.js";import"./index-BXFNtNVO.js";import"./index-Chib2uHL.js";import"./index-D8NQ-OjL.js";import"./index-DEiYNjzB.js";import"./index-DdSJm2q8.js";import"./colorsMapping-C6bFIk14.js";import"./index-CcSpOCs_.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Cf3JpTrJ.js";import"./useFloatingReferenceSync-e0QbxRQz.js";import"./index-gWNSPh3n.js";import"./types-TdnjS80C.js";import"./index-zgHibT2s.js";import"./MenuItem-DG7Boi2a.js";import"./floating-ui.react-CBGLEHeQ.js";import"./sizesMapping-D8QavrGc.js";import"./index-DU1S_Fke.js";import"./index-BS7WuNoV.js";import"./index-Bhkau184.js";import"./index-BXCEi6ek.js";import"./index-BS3dtI07.js";import"./index-DNRaPIJY.js";import"./index-nmEIrJRc.js";import"./index-XqCM6NuH.js";import"./index--gKAIURH.js";import"./index-C0zJEJdb.js";import"./index-PTZ9yk0y.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-VmrMNmoE.js";import"./index-yBLZkpey.js";import"./index-Ct4FpV06.js";import"./index-60xW7gWZ.js";import"./index-CTCWt51c.js";import"./index-Dhp36KE2.js";import"./index-DPciguLF.js";import"./index-WmXQrkmE.js";import"./index-At6H3_hV.js";import"./index-B7ZrQXoO.js";import"./index-Xb4KH60s.js";import"./index-DBz_mHH6.js";import"./index-3og25uON.js";import"./index-BmyIjWMa.js";import"./index-B1-FWV8A.js";import"./index-CzJ2Yzrx.js";import"./index-BOIqM1VF.js";import"./index-Dbbtu5hK.js";import"./index-D3a3kz2n.js";import"./index-DA40l4_1.js";import"./index-C1bYJrqZ.js";import"./index-CM0OZ7FR.js";import"./index-DsgmYFjz.js";import"./index-C-tPqMqK.js";import"./index-97oQTlpb.js";import"./index-C2vyTmKj.js";import"./index-Ce0aIdaY.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DCWLVNT4.js";import"./index-DJzDGIrh.js";import"./index-11gloAds.js";import"./index-DQw_TNDK.js";import"./index-olQ11wq4.js";import"./index-B2WtkI7A.js";import"./index-BZgFgbpd.js";import"./index-Dxzj7Vk2.js";import"./index-DRVVT9BA.js";import"./index-D3Fscyv-.js";import"./ComboBox-BsvZu-Eq.js";import"./index-NjTwKeYa.js";import"./constants-rrTgojkT.js";import"./TreeList-BR8MQBpg.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689",T=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
