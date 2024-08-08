import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as c}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as d,af as l,ag as x}from"./index-CY6AFN3F.js";import{Q as o,K as f}from"./index-De6xVjfl.js";import{DecoratorDefault as g}from"./Decorator.stories-BP3ijO2B.js";import{r as j}from"./index-DQ2WTIsS.js";import{s as p,H as u,E as S}from"./Header-LklIFrOQ.js";import{F as h}from"./FigmaEmbed-oiCkEjTf.js";import{P as b}from"./Properties-DzW4XCsL.js";import{T as y}from"./Tests-BNc6kC-d.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import{T as v}from"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as N}from"./argsTypes-mPCk58rO.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const s="Stepper",m="https://www.figma.com/design/byZZI6bYz2Iv2Jst7ycZ7M/Navigation-DS-3.0?node-id=1691-27062&t=I1IeUAVDniHLRdle-0",w=()=>{const[e,r]=j.useState(0),i=n=>e===n;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:s,description:"Компонент Stepper представляет из себя пользовательный компонент, который отображает текущий Step (с помощью компонента Badge), его название и линию - Divider. По нему можно кликнуть и получить его состояние и индекс.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:m}),t.jsx("div",{className:p.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:i(0),onClick:()=>r(0)}),t.jsx(o.Tab,{label:"Тестирование",active:i(2),onClick:()=>r(2)})]})}),e==0&&t.jsxs(t.Fragment,{children:[t.jsx(S,{height:420,description:"Stepper в состоянии filled",code:`import { Box, Stepper } from '@nlmk/ds-2.0';

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
              `}),t.jsx(b,{argsTypes:N})]}),e==1&&t.jsx(h,{url:m}),e==2&&t.jsx(v,{variant:"Heading4",color:"primary",children:t.jsx(y,{componentName:s})})]})};function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Stepper/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/design/byZZI6bYz2Iv2Jst7ycZ7M/Navigation-DS-3.0?node-id=1691-27062"},jest:["Stepper.test.tsx"]}}),`
`,t.jsx(l,{of:g}),`
`,t.jsx(x,{children:t.jsx(w,{})})]})}function nt(e={}){const{wrapper:r}={...c(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(a,{...e})}):a()}export{nt as default};
