import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as m}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as s,af as a,ag as d}from"./index-CY6AFN3F.js";import{Q as i,ak as l}from"./index-De6xVjfl.js";import{DecoratorDefault as c}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as n,H as x,E as o}from"./Header-LklIFrOQ.js";import{F as u}from"./FigmaEmbed-oiCkEjTf.js";import{P as S}from"./Properties-DzW4XCsL.js";import{T as j}from"./Tests-BNc6kC-d.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as g}from"./argsTypes-CLokJJHQ.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const b=()=>{const[r,t]=f.useState(0);return e.jsxs("div",{className:n.wrapper,children:[e.jsx(x,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:"https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?node-id=2%3A10&mode=dev"}),e.jsx("div",{className:n.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>t(0)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>t(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

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
`}),e.jsx(S,{argsTypes:g})]}),Number(r)==1&&e.jsx(u,{url:"https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?type=design&node-id=2-10&mode=design&t=VPWVvr1xxRraTKwa-0"}),Number(r)==2&&e.jsx(j,{componentName:"Spinner"})]})};function p(r){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Spinner/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?type=design&node-id=2-10&mode=design&t=VPWVvr1xxRraTKwa-0"},jest:["Spinner.test.tsx"]}}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(d,{children:e.jsx(b,{})})]})}function ie(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(p,{...r})}):p()}export{ie as default};
