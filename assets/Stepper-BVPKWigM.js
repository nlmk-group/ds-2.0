import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import{am as d,an as l,ao as x}from"./chunk-NUUEMKO5-CYeaHTsV.js";import{af as o,a7 as f}from"./TreeList-BjAYGU6i.js";import{DecoratorDefault as g}from"./Decorator.stories-B1hjNCvN.js";import{r as j}from"./index-Bnop-kX6.js";import{s as p,H as u,E as h}from"./Header-ClKrHdpp.js";import{F as S}from"./FigmaEmbed-DHnX0NKb.js";import{P as b}from"./Properties-N-2-JxOc.js";import{T as N}from"./Tests-BTN5Mu5Y.js";/* empty css               */import"./generateUUID-BLuKx6pe.js";import"./index-DcUsRIWc.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import{T as v}from"./index-qC5wYQgy.js";import"./index-Dj-Wh1Bz.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-C9xHhmyi.js";import"./index-DokmLR-l.js";import"./32-70JnsVF1.js";import{a as k}from"./argsTypes-Cu-b1_aL.js";import"./iframe-Bfxx6DB4.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-6mv60_jZ.js";import"./index-B5g4YLzC.js";const i="Stepper",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",y=()=>{const[e,r]=j.useState(0),s=n=>e===n;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:i,description:"Компонент Stepper представляет из себя пользовательный компонент, который отображает текущий Step (с помощью компонента Badge), его название и линию - Divider. По нему можно кликнуть и получить его состояние и индекс.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:m}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:s(0),onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>r(1)}),t.jsx(o.Tab,{label:"Тестирование",active:s(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(h,{height:420,description:"Stepper в состоянии filled",code:`import { Box, Stepper } from '@nlmk/ds-2.0';

const App = () => {
  const mockSteps = [{
    state: 'filled',
    stepName: 'Filled'
  }, {
    state: 'focused',
    stepName: 'Focused'
  }, {
    state: 'inProgress',
    stepName: 'In Progress'
  }];

  return (
        <Box flexDirection="row" width="100%" gap={16}>
          {mockSteps.map((step, i) => <Stepper key={i} state={step.state} index={i} showStep={i !== mockSteps.length - 1} stepName={step.stepName} />)}
        </Box>
    )
}

export default App;
              `}),t.jsx(b,{argsTypes:k})]}),e==1&&t.jsx(S,{url:m}),e==2&&t.jsx(v,{variant:"Heading4",color:"primary",children:t.jsx(N,{componentName:i})})]})};function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Stepper/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/design/byZZI6bYz2Iv2Jst7ycZ7M/Navigation-DS-3.0?node-id=1691-27062"},jest:["Stepper.test.tsx"]}}),`
`,t.jsx(l,{of:g}),`
`,t.jsx(x,{children:t.jsx(y,{})})]})}function mt(e={}){const{wrapper:r}={...c(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(a,{...e})}):a()}export{mt as default};
