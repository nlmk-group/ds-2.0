import{r as n,j as t,m as a,S as d,U as l}from"./iframe-DUDunD5j.js";import{useMDXComponents as c}from"./index-CDbv5Jgm.js";import{a as x,S as u}from"./argsTypes-BuBpRGSq.js";import{DecoratorDefault as h}from"./Decorator.stories-DJdCAXEf.js";import{s,H as k,E as i}from"./Header-BrZEypuE.js";import{F as j}from"./FigmaEmbed-DovFRgvJ.js";import{P as f}from"./Properties-CcP2VO-p.js";import{T as L}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as r}from"./index-DntXJei4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DyX2qzoz.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./24-C5ui32Ki.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1",S="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader",b=()=>{const[o,e]=n.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(k,{title:"SkeletonLoader",description:"SkeletonLoader используется для отображения анимированных заглушек во время загрузки контента.",isStable:!0,codeLink:S,figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

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
