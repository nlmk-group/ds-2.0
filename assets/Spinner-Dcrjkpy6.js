import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as a,an as d,ao as c}from"./chunk-NUUEMKO5-JpSA_IYz.js";import{ae as o,aM as l}from"./TreeList--IdMnsib.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s as n,H as u,E as i}from"./Header-CYkIemZG.js";import{F as S}from"./FigmaEmbed-CWbT5A-_.js";import{P as j}from"./Properties-Baf9lqU9.js";import{T as b}from"./Tests-C3Lj5gnf.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as g}from"./argsTypes-CyEINUhU.js";import"./iframe--t2Gcnv8.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DVkCitDq.js";import"./index-B5g4YLzC.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[r,t]=f.useState(0);return e.jsxs("div",{className:n.wrapper,children:[e.jsx(u,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),e.jsx("div",{className:n.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>t(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>t(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>t(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner />
  </>
)
`}),e.jsx(i,{height:250,description:"Spinner размера medium и large",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner size="m" />
    <div/>
    <Spinner size="l" />
  </>
)
`}),e.jsx(i,{height:200,description:"Spinner с разными цветами",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner bgColor="#ff6e40" color="#1e3d59" />
  </>
)
`}),e.jsx(i,{description:"Spinner где Icon, как children (JSX.Element)",code:`import { Spinner, IconAutoRenewReloadOutlined24 } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner>
      <IconAutoRenewReloadOutlined24 />
    </Spinner>
  </>
)
`}),e.jsx(j,{argsTypes:g})]}),Number(r)==1&&e.jsx(S,{url:p}),Number(r)==2&&e.jsx(b,{componentName:"Spinner"})]})};function s(r){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Spinner/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?type=design&node-id=2-10&mode=design&t=VPWVvr1xxRraTKwa-0"},jest:["Spinner.test.tsx"]}}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(c,{children:e.jsx(h,{})})]})}function oe(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s()}export{oe as default};
