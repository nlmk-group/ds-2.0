import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as o,aO as a}from"./TreeList-ChyggQS5.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as c}from"./index-Bnop-kX6.js";import{s as n,H as l,E as i}from"./Header-DoEz7EVi.js";import{F as x}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as f}from"./Properties-BySoTS4I.js";import{T as u}from"./Tests-OdO6CFav.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as S}from"./argsTypes-D_7bIJlS.js";import{c as j,e as b,U as g}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[r,t]=c.useState(0);return e.jsxs("div",{className:n.wrapper,children:[e.jsx(l,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),e.jsx("div",{className:n.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>t(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>t(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>t(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

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
`}),e.jsx(f,{argsTypes:S})]}),Number(r)==1&&e.jsx(x,{url:p}),Number(r)==2&&e.jsx(u,{componentName:"Spinner"})]})};function s(r){return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Components/Spinner/Info",component:a,parameters:{design:{type:"figma",url:"https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?type=design&node-id=2-10&mode=design&t=VPWVvr1xxRraTKwa-0"},jest:["Spinner.test.tsx"]}}),`
`,e.jsx(b,{of:d}),`
`,e.jsx(g,{children:e.jsx(h,{})})]})}function oe(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s()}export{oe as default};
