import{r as s,j as r,m as a,S as d,U as c}from"./iframe-BiRbIEmb.js";import{useMDXComponents as l}from"./index-DFADegm-.js";import{S as x}from"./index-CjK98hBI.js";import{DecoratorDefault as u}from"./Decorator.stories-Cq2K7ZK_.js";import{s as n,H as f,E as i}from"./Header-BOuFM4z3.js";import{F as S}from"./FigmaEmbed-DXWxjqCs.js";import{P as j}from"./Properties-CTw5qxDW.js";import{T as b}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as o}from"./index-Bc-rzIjC.js";import{a as g}from"./argsTypes-DPDI34C1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[e,t]=s.useState(0);return r.jsxs("div",{className:n.wrapper,children:[r.jsx(f,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),r.jsx("div",{className:n.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)==0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner />
  </>
)
`}),r.jsx(i,{height:250,description:"Spinner размера medium и large",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner size="m" />
    <div/>
    <Spinner size="l" />
  </>
)
`}),r.jsx(i,{height:200,description:"Spinner с разными цветами",code:`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner bgColor="#ff6e40" color="#1e3d59" />
  </>
)
`}),r.jsx(i,{description:"Spinner где Icon, как children (JSX.Element)",code:`import { Spinner, IconAutoRenewReloadOutlined24 } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner>
      <IconAutoRenewReloadOutlined24 />
    </Spinner>
  </>
)
`}),r.jsx(j,{argsTypes:g})]}),Number(e)==1&&r.jsx(S,{url:p}),Number(e)==2&&r.jsx(b,{componentName:"Spinner"})]})};function m(e){return r.jsxs(r.Fragment,{children:[r.jsx(a,{title:"Components/Spinner/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/file/aTZAtKI8GYQvLF5bOK84ZH/DS2.0-Loader-%26-Overlay?type=design&node-id=2-10&mode=design&t=VPWVvr1xxRraTKwa-0"},jest:["Spinner.test.tsx"]}}),`
`,r.jsx(d,{of:u}),`
`,r.jsx(c,{children:r.jsx(h,{})})]})}function dr(e={}){const{wrapper:t}={...l(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(m,{...e})}):m()}export{dr as default};
