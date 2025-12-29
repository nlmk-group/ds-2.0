import{r as s,j as r,f as a,S as d,U as c}from"./iframe-CVAHojaF.js";import{useMDXComponents as l}from"./index-DqTt4rKv.js";import{S as x}from"./index-BkUb-THO.js";import{DecoratorDefault as f}from"./Decorator.stories-Pdz9giCE.js";import{s as n,H as u,E as i}from"./Header-P01wOpj2.js";import{F as S}from"./FigmaEmbed-g9QqaeRo.js";import{P as j}from"./Properties-1BWy3pzy.js";import{T as b}from"./Tests-MQmjhMeS.js";/* empty css               */import{T as o}from"./index-Cyj4_MYZ.js";import{a as g}from"./argsTypes-B4rMfy8l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./generateUUID-M57HTP56.js";import"./24-BKsua3Hk.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-x8Y8AkZd.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-DZ_c8xXN.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[e,t]=s.useState(0);return r.jsxs("div",{className:n.wrapper,children:[r.jsx(u,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),r.jsx("div",{className:n.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)==0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

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
