import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as c}from"./index-DtGqrCZN.js";import{ag as d,ah as l,ai as x}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as o,Q as f}from"./index-ZojCmbpv.js";import{DecoratorDefault as g}from"./Decorator.stories-CffsLfgf.js";import{r as j}from"./index-Cu9bd8lq.js";import{s as p,H as u,E as h}from"./Header-CN10_-75.js";import{F as S}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as b}from"./Properties-Btz1YxCe.js";import{T as N}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import{T as v}from"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as k}from"./argsTypes-Ibt_u-yr.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const i="Stepper",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=50-13689&t=EnvIMGos3m33avAX-1",y=()=>{const[e,r]=j.useState(0),s=n=>e===n;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:i,description:"Компонент Stepper представляет из себя пользовательный компонент, который отображает текущий Step (с помощью компонента Badge), его название и линию - Divider. По нему можно кликнуть и получить его состояние и индекс.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:m}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:s(0),onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>r(1)}),t.jsx(o.Tab,{label:"Тестирование",active:s(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(h,{height:420,description:"Stepper в состоянии filled",code:`import { Box, Stepper } from '@nlmk/ds-2.0';

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
