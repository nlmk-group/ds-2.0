import{r as s,j as r,f as a,S as d,U as c}from"./iframe-zk5xXBtA.js";import{useMDXComponents as l}from"./index-CSMoqiIu.js";import{S as x}from"./index-nkEoHT74.js";import{DecoratorDefault as f}from"./Decorator.stories-XjMTlGWF.js";import{s as n,H as u,E as i}from"./Header-BMqOixcD.js";import{F as S}from"./FigmaEmbed-Bh-YhisY.js";import{P as j}from"./Properties-BH32KsQA.js";import{T as b}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as o}from"./index-CGZqhooT.js";import{a as g}from"./argsTypes-Bkp85PjB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[e,t]=s.useState(0);return r.jsxs("div",{className:n.wrapper,children:[r.jsx(u,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),r.jsx("div",{className:n.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)==0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

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
`,r.jsx(d,{of:f}),`
`,r.jsx(c,{children:r.jsx(h,{})})]})}function dr(e={}){const{wrapper:t}={...l(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(m,{...e})}):m()}export{dr as default};
