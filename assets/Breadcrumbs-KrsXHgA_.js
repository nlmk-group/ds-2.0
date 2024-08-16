import{j as r}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as p}from"./index-CpguRmgc.js";import{ag as n,ah as d,ai as c}from"./chunk-HLWAVYOI-CrtBrDc8.js";import{U as s,q as u}from"./index-Bq8dHBmc.js";import{DecoratorDefault as b}from"./Decorator.stories-BP3ijO2B.js";import{r as l}from"./index-DQ2WTIsS.js";import{s as o,H as f,E as m}from"./Header-CkulZeNq.js";import{F as x}from"./FigmaEmbed-CDmAdgKA.js";import{P as g}from"./Properties-CGeqwL7I.js";import{T as j}from"./Tests-B9WZldn2.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as y,c as i,d as h}from"./constants-DOnFCYZf.js";import{a as N}from"./argsTypes-C59XVg-Y.js";import"./iframe-BEd3PU3T.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-CchupG2v.js";import"./index-0sbKER3h.js";const S=()=>{const[t,e]=l.useState(0);return r.jsxs("div",{className:o.wrapper,children:[r.jsx(f,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20843&mode=design&t=awyt3Fzj1XS6th7v-1"}),r.jsx("div",{className:o.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),r.jsx(s.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)==0&&r.jsxs(r.Fragment,{children:[r.jsx(m,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(y,null,4)}} />
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
            `}),r.jsx(g,{argsTypes:N})]}),Number(t)==1&&r.jsx(x,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20843&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&r.jsx(j,{componentName:"Breadcrumbs"})]})};function a(t){return r.jsxs(r.Fragment,{children:[r.jsx(n,{title:"Components/Breadcrumbs/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]}}),`
`,r.jsx(d,{of:b}),`
`,r.jsx(c,{children:r.jsx(S,{})})]})}function ar(t={}){const{wrapper:e}={...p(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(a,{...t})}):a()}export{ar as default};
