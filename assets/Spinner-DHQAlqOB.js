import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as a,an as d,ao as c}from"./chunk-NUUEMKO5-CkiiNlyy.js";import{af as o,aA as l}from"./index-ByAgZyky.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s as n,H as u,E as i}from"./Header-EP2jVtSV.js";import{F as S}from"./FigmaEmbed-C-3tISD_.js";import{P as j}from"./Properties-C46i6TC6.js";import{T as b}from"./Tests-4iTQQ7zx.js";/* empty css               */import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{a as g}from"./argsTypes-DYIB93z-.js";import"./iframe-DNfwqCnh.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BiTg2p7s.js";import"./index-CT8gBKwQ.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[r,t]=f.useState(0);return e.jsxs("div",{className:n.wrapper,children:[e.jsx(u,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),e.jsx("div",{className:n.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>t(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>t(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>t(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

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
`,e.jsx(c,{children:e.jsx(h,{})})]})}function te(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s()}export{te as default};
