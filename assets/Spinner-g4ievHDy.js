import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-D2yTtfOz.js";import"./index-BnEi3PKH.js";import{af as o,aN as a}from"./TreeList-CKujmJpy.js";import{DecoratorDefault as d}from"./Decorator.stories-D7iJJ_iz.js";import{r as c}from"./index-BcJSXhQi.js";import{s as n,H as l,E as i}from"./Header-W0qZdeSK.js";import{F as x}from"./FigmaEmbed-DxGAIiFc.js";import{P as f}from"./Properties-Bvh17lDI.js";import{T as u}from"./Tests-CyRfR22c.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as S}from"./argsTypes-37pTi2CV.js";import{c as j,S as b,U as g}from"./DocsRenderer-CFRXHY34-Bm_YSRyE.js";import"./index-ChsGqxH_.js";import"./preview-DJTt2ryF.js";import"./iframe-DlyCZmm1.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DF9iIiuz.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[r,t]=c.useState(0);return e.jsxs("div",{className:n.wrapper,children:[e.jsx(l,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),e.jsx("div",{className:n.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>t(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>t(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>t(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

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
`,e.jsx(g,{children:e.jsx(h,{})})]})}function ne(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s()}export{ne as default};
