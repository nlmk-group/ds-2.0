import{r as S,j as t,m as x,S as f,U as u}from"./iframe-B07kYXZc.js";import{useMDXComponents as j}from"./index-CjGunqbw.js";import{S as N}from"./index-C3EtJTZW.js";import{DecoratorDefault as b}from"./Decorator.stories-B0DPksjy.js";import{s as m,H as E,E as s}from"./Header-BWIBo_NL.js";import{F as g}from"./FigmaEmbed-BR9XTrZ3.js";import{P as h,T as C}from"./Tests-Ddqg8ow3.js";/* empty css               */import{T as p}from"./index-Cp_gevaj.js";import{T as k}from"./index-6XMOLgd-.js";import{a as w}from"./argsTypes-D2G3-Gs1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cy6t6Ezk.js";import"./clsx-B-dksMZM.js";import"./index-8nOplKbR.js";import"./index-CTuNz-uH.js";import"./index-0sw3GI3b.js";import"./index-IzK8PPRw.js";import"./16-pHftyEs8.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-RqeUiUBw.js";import"./index-d9zAT72g.js";import"./32-BZSRNIXj.js";import"./32-QMp9o6yj.js";import"./24-Ccs2DJDL.js";import"./24-z3_ytzpX.js";import"./24-BwrZtwQH.js";import"./24-C1AoWM2r.js";import"./24-BvO12ahp.js";import"./24-B7RF46pu.js";import"./24-Bx4D2aXR.js";import"./24-BEhrtGbq.js";import"./24-BbpZ1avt.js";import"./24-DMSuIbyM.js";import"./24-k5ICTj37.js";import"./16-B0Y2v5mC.js";import"./16-7D2L3psa.js";import"./16-Cw3IW5wm.js";import"./16-TYDaleCn.js";import"./16-DlJ0H2so.js";import"./index-BqdfdXLw.js";import"./index-DlVjw_Iw.js";import"./index-CwfAWzLk.js";import"./index-DOy_CavS.js";import"./index-BoP19oSV.js";import"./index-BejtXQk_.js";import"./colorsMapping-C6bFIk14.js";import"./index-X7iBD8Fn.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bwgk6Sxb.js";import"./useFloatingReferenceSync-DbQMH-3c.js";import"./index-COK94YB4.js";import"./types-TdnjS80C.js";import"./index-BBjCAhaL.js";import"./MenuItem-CIRsK8he.js";import"./floating-ui.react-CDNbLsbS.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNDfqOtX.js";import"./index-FEAihz4M.js";import"./index-B_xFOywu.js";import"./index-BQZWcYlM.js";import"./index-BTSmrueN.js";import"./index-DScTDMmh.js";import"./index-SJgOFp9t.js";import"./index-CSqN0A7u.js";import"./index-B2smvyda.js";import"./index-CFAtiP4c.js";import"./index-DbxPhvPc.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CJa8o8cf.js";import"./index-B0gG98-R.js";import"./index-DgGoLy7y.js";import"./index-J7Njc-PT.js";import"./index-Dklje7JM.js";import"./index-CJa1u0t1.js";import"./index-C6ef_7XJ.js";import"./index-CMWxTnoS.js";import"./index-BoUKONT_.js";import"./index-DJFZ0Zdl.js";import"./index-CHgcPGEu.js";import"./index-Byj_yMGc.js";import"./index-ClDlTn4P.js";import"./index-UkfqzCFW.js";import"./index-fequeZGH.js";import"./index-B1FDloAn.js";import"./index-B8GZkxEV.js";import"./index-DjgiFHNl.js";import"./index-DeLkfcTC.js";import"./index-DafsOy6K.js";import"./index-DKxgdZhf.js";import"./index-BHmgEshV.js";import"./index-D3bQP97z.js";import"./index-mBiA4WNY.js";import"./index-Yuhpfewd.js";import"./index-T2XevpS6.js";import"./index-vOYRqFvw.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CGrwobg7.js";import"./index-DBMo2nZZ.js";import"./index-BEy1wh23.js";import"./index-OtFZfMgj.js";import"./index-D2n5mAtP.js";import"./index-DdwT-0gn.js";import"./index-BO8JYT_u.js";import"./index-DXXEuEBS.js";import"./index-Ca-tiPXF.js";import"./index-DpajdaDu.js";import"./ComboBox-Dwq3rPDU.js";import"./index-DqxhwPYk.js";import"./constants-eZqyrgzW.js";import"./TreeList-g0RzoTR-.js";import"./copyToClipboard-DB_KM_BY.js";const i="Stepper",a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689",T=()=>{const[e,r]=S.useState(0),c=`import { Box, Stepper } from '@nlmk/ds-2.0';
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
