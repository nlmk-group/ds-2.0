import{r as S,j as t,m as x,S as f,U as u}from"./iframe-B-8SjXGq.js";import{useMDXComponents as j}from"./index-BM0F5ub6.js";import{S as E}from"./index-BistaHJu.js";import{DecoratorDefault as b}from"./Decorator.stories-Dr4lnSCK.js";import{s,H as N,E as m}from"./Header-Bt2eZ0XI.js";import{F as g}from"./FigmaEmbed-Cp-K0Ho-.js";import{P as h,T as C}from"./Tests-BJxC6M0y.js";/* empty css               */import{T as v}from"./index-BRmunlbh.js";import{T as p}from"./index-lTVAi1na.js";import{a as w}from"./argsTypes-C9RV0j_1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVbeuYKL.js";import"./clsx-B-dksMZM.js";import"./index-lbMvjW_5.js";import"./index-CgN-9tGr.js";import"./index-Dfriq7lO.js";import"./index-DWjwH6nq.js";import"./index-DcMeZWW2.js";import"./16-BDcju3io.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Dnj2eOeL.js";import"./24-CcDcN9Vt.js";import"./index-SApy96bT.js";import"./16-BNHSjjb0.js";import"./index-WkQvqD6p.js";import"./index-DqQiUiOd.js";import"./32-CnDyPHET.js";import"./24-DwPXEH6E.js";import"./24-2N5QtnbH.js";import"./24-nrV1efA2.js";import"./24-CjfWKKEu.js";import"./24-BSP12KOo.js";import"./24-rC0gEzBb.js";import"./24-DxfkYE9X.js";import"./24-CBHgkWPK.js";import"./24-FlXbOQvU.js";import"./16-B09-A838.js";import"./16-Bjal1Kcy.js";import"./index-1sCEIwws.js";import"./index-D81MGMsd.js";import"./index-O63UzFtM.js";import"./index-BG3v9Uex.js";import"./index-DjGSmZX3.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BA-hOJmZ.js";import"./index-C0fhG72W.js";import"./index-CDSure0q.js";import"./index-DLvwH50I.js";import"./index-DHxtbo6p.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D9KZKjfI.js";import"./sizesMapping-D8QavrGc.js";import"./index-aEU1GZqG.js";import"./index-BFb5q96r.js";import"./index-nnfFZ9zh.js";import"./index-CJXb8S3m.js";import"./index-DQp-at3f.js";import"./index-BKV_kQZi.js";import"./index-BsPt_Eeq.js";import"./index-CA4vmu2I.js";import"./index-DmKJBqLb.js";import"./index-BpxvuqRy.js";import"./index-Bwm1RwE7.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CezGHJxo.js";import"./useFloatingReferenceSync-Dse8FenO.js";import"./index-BQw9APNC.js";import"./index-BIIYwqts.js";import"./index-gTdR2BgD.js";import"./index-BO_pppR1.js";import"./index-CA8coT2V.js";import"./index-BOvyB9Hg.js";import"./index-D0y26aqM.js";import"./index-nMsf_JLJ.js";import"./index-CbDdcaTf.js";import"./index-Bemzq2Pd.js";import"./index-CZwmGRm1.js";import"./index-BsUh_WOc.js";import"./index-BiLYqWzA.js";import"./index-CRdPa-5u.js";import"./index-DXDnCKkm.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CHI72_Mb.js";import"./index-6SN77Vs_.js";import"./index-J-DZaU2Z.js";import"./index-DRE2VGwx.js";import"./index-pTCHtkWj.js";import"./index-CdcbwH8N.js";import"./index-D7Pw4d7U.js";import"./index-B09XZxaV.js";import"./index-DTtZr5oI.js";import"./index--AS7wYhz.js";import"./index-XCg4i2Qb.js";import"./index-K1Up07vg.js";import"./index-CCVipuRP.js";import"./index-CYq0uzEC.js";import"./index-D9xdw-kV.js";import"./ComboBox-D53aWZPr.js";import"./index-CIaEAtE8.js";import"./TreeList-u3mntEr0.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",k=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
`,o=d=>e===d;return t.jsxs("div",{className:s.wrapper,children:[t.jsx(N,{title:i,description:"Stepper отображает последовательность шагов и их состояние в процессе выполнения. Компонент поддерживает интерактивный выбор шага и визуальные состояния успеха, ошибки и блокировки.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:a}),t.jsx("div",{className:s.tabs,children:t.jsxs(p,{children:[t.jsx(p.Tab,{label:"Разработчику",active:o(0),onClick:()=>r(0)}),t.jsx(p.Tab,{label:"Дизайнеру",active:o(1),onClick:()=>r(1)}),t.jsx(p.Tab,{label:"Тестирование",active:o(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(m,{description:"Интерактивный stepper с переходом между шагами.",code:c}),t.jsx(m,{description:"Состояния stepper с ошибкой и цветовым акцентом.",code:l}),t.jsx(h,{argsTypes:w})]}),e==1&&t.jsx(g,{url:a}),e==2&&t.jsx(v,{variant:"Heading4",color:"primary",children:t.jsx(C,{componentName:i})})]})};function n(e){return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Components/Stepper/Info",component:E,parameters:{design:{type:"figma",url:"https://www.figma.com/design/byZZI6bYz2Iv2Jst7ycZ7M/Navigation-DS-3.0?node-id=1691-27062"},jest:["Stepper.test.tsx"]}}),`
`,t.jsx(f,{of:b}),`
`,t.jsx(u,{children:t.jsx(k,{})})]})}function Ce(e={}){const{wrapper:r}={...j(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n()}export{Ce as default};
