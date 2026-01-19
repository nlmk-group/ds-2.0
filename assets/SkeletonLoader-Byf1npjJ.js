import{r as n,j as t,m as a,S as d,U as l}from"./iframe-BPtLBEuk.js";import{useMDXComponents as c}from"./index-DY5aY42c.js";import{a as x,S as u}from"./argsTypes-C9fH82AI.js";import{DecoratorDefault as h}from"./Decorator.stories-Bt-6wqMy.js";import{s,H as k,E as i}from"./Header-lxb-Wymn.js";import{F as j}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as f}from"./Properties-u6_xeg7P.js";import{T as L}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as r}from"./index-CX87Y9E4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-C9_7xPUt.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1",S="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader",b=()=>{const[o,e]=n.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(k,{title:"SkeletonLoader",description:"SkeletonLoader используется для отображения анимированных заглушек во время загрузки контента.",isStable:!0,codeLink:S,figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

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
