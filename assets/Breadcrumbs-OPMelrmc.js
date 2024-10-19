import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as n}from"./index-CpguRmgc.js";import{ag as c,ah as d,ai as u}from"./chunk-NUUEMKO5-BfWh-sLJ.js";import{a0 as s,B as b}from"./index-CZcUCixh.js";import{DecoratorDefault as l}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as o,H as x,E as m}from"./Header-D2gbLVua.js";import{F as j}from"./FigmaEmbed-DjqPO1nf.js";import{P as g}from"./Properties-C9DnMm3G.js";import{T as B}from"./Tests-CzPE_ao-.js";/* empty css               */import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as N,c as i,d as h}from"./constants-BSMg4QWo.js";import{a as y}from"./argsTypes-CH0LM9yx.js";import"./iframe-BUM6csBU.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-R5jBLDn_.js";import"./index-BKbm6zW0.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[t,e]=f.useState(0);return r.jsxs("div",{className:o.wrapper,children:[r.jsx(x,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:a}),r.jsx("div",{className:o.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>e(1)}),r.jsx(s.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)==0&&r.jsxs(r.Fragment,{children:[r.jsx(m,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(N,null,4)}} />
  </>
)
            `}),r.jsx(m,{description:"Компоненту можно задать значение ширины в процентах. Процент будет считываться отширины родителя.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(i,null,4)}} />
    <Breadcrumbs width="50" crumbs={${JSON.stringify(i,null,4)}} />
  </>
)
            `}),r.jsx(m,{description:"Компонент может содержать ссылки с разными target.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(h,null,4)}} />
  </>
)
            `}),r.jsx(g,{argsTypes:y})]}),Number(t)==1&&r.jsx(j,{url:a}),Number(t)==2&&r.jsx(B,{componentName:"Breadcrumbs"})]})};function p(t){return r.jsxs(r.Fragment,{children:[r.jsx(c,{title:"Components/Breadcrumbs/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]}}),`
`,r.jsx(d,{of:l}),`
`,r.jsx(u,{children:r.jsx(C,{})})]})}function ar(t={}){const{wrapper:e}={...n(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(p,{...t})}):p()}export{ar as default};
