import{M as u,U as l}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as m,e as d}from"./index-f014e98c.js";import{a as s,j as r,F as c}from"./clsx.m-3764cf42.js";import{r as b}from"./index-f1f749bf.js";import{s as i,H as f,E as a,T as g}from"./Tests-605cd25b.js";import{F as y}from"./FigmaEmbed-6f82f7c8.js";import{P as h}from"./Properties-83346e89.js";/* empty css               */import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as w}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{b as B,a as n,c as N}from"./constants-ce9ada02.js";import{a as S}from"./argsTypes-7335303f.js";import{u as C}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const x=()=>{const[e,t]=b.useState(0);return s("div",{className:i.wrapper,children:[r(f,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20843&mode=design&t=awyt3Fzj1XS6th7v-1"}),r("div",{className:i.tabs,children:s(m,{children:[r(m.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r(m.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r(m.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)==0&&s(c,{children:[r(a,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(B,null,4)}} />
  </>
)
            `}),r(a,{description:"Компоненту можно задать значение ширины в процентах. Процент будет считываться отширины родителя.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(n,null,4)}} />
    <Breadcrumbs width="50" crumbs={${JSON.stringify(n,null,4)}} />
  </>
)
            `}),r(a,{description:"Компонент может содержать ссылки с разными target.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(N,null,4)}} />
  </>
)
            `}),r(h,{argsTypes:S})]}),Number(e)==1&&r(y,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20843&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)==2&&r(w,{variant:"Heading4",color:"primary",children:r(g,{componentName:"Breadcrumbs"})})]})};function p(e){return s(c,{children:[r(u,{title:"Components/Breadcrumbs/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]}}),`
`,r(l,{children:r(x,{})})]})}function M(e={}){const{wrapper:t}=Object.assign({},C(),e.components);return t?r(t,{...e,children:r(p,{...e})}):p()}const T=()=>{throw new Error("Docs-only story")};T.parameters={docsOnly:!0};const o={title:"Components/Breadcrumbs/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:M};const dr=["__page"];export{dr as __namedExportsOrder,T as __page,o as default};
