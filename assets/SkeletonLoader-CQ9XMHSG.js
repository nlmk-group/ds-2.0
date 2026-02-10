import{r as n,j as t,m as a,S as d,U as l}from"./iframe-BiRbIEmb.js";import{useMDXComponents as c}from"./index-DFADegm-.js";import{a as x,S as u}from"./argsTypes-b-Hh16w_.js";import{DecoratorDefault as h}from"./Decorator.stories-Cq2K7ZK_.js";import{s,H as k,E as i}from"./Header-BOuFM4z3.js";import{F as j}from"./FigmaEmbed-DXWxjqCs.js";import{P as f}from"./Properties-CTw5qxDW.js";import{T as L}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as r}from"./index-Bc-rzIjC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CIk7IDPA.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1",S="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader",b=()=>{const[o,e]=n.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(k,{title:"SkeletonLoader",description:"SkeletonLoader используется для отображения анимированных заглушек во время загрузки контента.",isStable:!0,codeLink:S,figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

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
