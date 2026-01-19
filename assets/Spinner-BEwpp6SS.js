import{r as s,j as r,m as a,S as d,U as c}from"./iframe-tXE4xoYc.js";import{useMDXComponents as l}from"./index-BU2Hc1BN.js";import{S as x}from"./index-CZmf5b9z.js";import{DecoratorDefault as u}from"./Decorator.stories-DX_mk-19.js";import{s as n,H as f,E as i}from"./Header-D7Lkw1fr.js";import{F as S}from"./FigmaEmbed-DGce_rmk.js";import{P as j}from"./Properties-3Caa_vUq.js";import{T as b}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as o}from"./index-BdAkzp84.js";import{a as g}from"./argsTypes-DXNIA76w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./24-CGaTDQAV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-UIqxTLHU.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-DfJPKXXV.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1",h=()=>{const[e,t]=s.useState(0);return r.jsxs("div",{className:n.wrapper,children:[r.jsx(f,{title:"Spinner",description:"Spinner — это компонент который используется в качестве индикатора загрузки.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:p}),r.jsx("div",{className:n.tabs,children:r.jsxs(o,{children:[r.jsx(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r.jsx(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r.jsx(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)==0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:200,description:"Spinner состояние по умолчанию",code:`import { Spinner } from '@nlmk/ds-2.0';

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
