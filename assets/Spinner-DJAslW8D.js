import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as m}from"./index-DtGqrCZN.js";import{ag as a,ah as d,ai as c}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as i,ap as l}from"./index-ZojCmbpv.js";import{DecoratorDefault as x}from"./Decorator.stories-CffsLfgf.js";import{r as f}from"./index-Cu9bd8lq.js";import{s as n,H as u,E as o}from"./Header-CN10_-75.js";import{F as S}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as j}from"./Properties-Btz1YxCe.js";import{T as b}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as g}from"./argsTypes-dyMm5S2t.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[r,t]=f.useState(0);return e.jsxs("div",{className:n.wrapper,children:[e.jsx(u,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),e.jsx("div",{className:n.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>t(0)}),e.jsx(i.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>t(1)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>t(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner />
  </>
)
`}),e.jsx(o,{height:250,description:"Spinner размера medium и large",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner size="m" />
    <div/>
    <Spinner size="l" />
  </>
)
`}),e.jsx(o,{height:200,description:"Spinner с разными цветами",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner bgColor="#ff6e40" color="#1e3d59" />
  </>
)
`}),e.jsx(o,{description:"Spinner где Icon, как children (JSX.Element)",code:`import { Spinner, IconAutoRenewReloadOutlined24 } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner>
      <IconAutoRenewReloadOutlined24 />
    </Spinner>
  </>
)
`}),e.jsx(j,{argsTypes:g})]}),Number(r)==1&&e.jsx(S,{url:p}),Number(r)==2&&e.jsx(b,{componentName:"Spinner"})]})};function s(r){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Spinner/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?type=design&node-id=2-10&mode=design&t=VPWVvr1xxRraTKwa-0"},jest:["Spinner.test.tsx"]}}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(c,{children:e.jsx(h,{})})]})}function ie(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s()}export{ie as default};
