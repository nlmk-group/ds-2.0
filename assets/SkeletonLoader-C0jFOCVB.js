import{r as n,j as t,m as a,S as d,U as l}from"./iframe-tXE4xoYc.js";import{useMDXComponents as c}from"./index-BU2Hc1BN.js";import{a as x,S as u}from"./argsTypes-M7Uk4y64.js";import{DecoratorDefault as h}from"./Decorator.stories-DX_mk-19.js";import{s,H as k,E as i}from"./Header-D7Lkw1fr.js";import{F as j}from"./FigmaEmbed-DGce_rmk.js";import{P as f}from"./Properties-3Caa_vUq.js";import{T as L}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as r}from"./index-BdAkzp84.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-IJbXH1LS.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./24-CGaTDQAV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-UIqxTLHU.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-DfJPKXXV.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1",S="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader",b=()=>{const[o,e]=n.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(k,{title:"SkeletonLoader",description:"SkeletonLoader используется для отображения анимированных заглушек во время загрузки контента.",isStable:!0,codeLink:S,figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <SkeletonLoader width="350px" />
  </>
)
`}),t.jsx(i,{height:200,description:"Компонент лоадера с анимацией пульсации",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <SkeletonLoader width="350px" animation="pulse" />
  </>
)
`}),t.jsx(i,{description:"Компонент лоадера с множественными блоками",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <div>
      <SkeletonLoader width="40px" count={1} height="50px" />
      <SkeletonLoader width="310px" count={1} height="50px" />
    </div>
    <SkeletonLoader width="115px" count={3} height="50px" />
    <SkeletonLoader width="177px" count={2} height="50px" />
  </>
)
`}),t.jsx(f,{argsTypes:x})]}),Number(o)==1&&t.jsx(j,{url:m}),Number(o)==2&&t.jsx(L,{componentName:"SkeletonLoader"})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/SkeletonLoader/Info",component:u,parameters:{jest:["SkeletonLoader.test.tsx"]}}),`
`,t.jsx(d,{of:h}),`
`,t.jsx(l,{children:t.jsx(b,{})})]})}function dt(o={}){const{wrapper:e}={...c(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(p,{...o})}):p()}export{dt as default};
