import{M as c,U as l}from"./chunk-HLWAVYOI-bd2949d1.js";import{S as m}from"./index-28363b14.js";import{a as r,j as e,F as d}from"./clsx.m-3764cf42.js";import{r as h}from"./index-f1f749bf.js";import{s as p,H as u,E as n,T as k}from"./Tests-605cd25b.js";import{P as S}from"./Properties-83346e89.js";/* empty css               */import{a as i}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as x}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-bc089e17.js";import{a as f}from"./argsTypes-027139f8.js";import{u as L}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const g=()=>{const[t,o]=h.useState(0);return r("div",{className:p.wrapper,children:[e(u,{title:"SkeletonLoader",description:"Skeleton Loader — это статический/анимированный элемент для информации, которая все еще загружается.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader"}),e("div",{className:p.tabs,children:r(i,{children:[e(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&r(d,{children:[e(n,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <SkeletonLoader width="350px" />
  </>
)
`}),e(n,{description:"Компонент лоадера с множественными блоками",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

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
`}),e(S,{argsTypes:f})]}),Number(t)==2&&e(x,{variant:"Heading4",color:"primary",children:e(k,{componentName:"SkeletonLoader"})})]})};function s(t){return r(d,{children:[e(c,{title:"Components/SkeletonLoader/Info",component:m,parameters:{jest:["SkeletonLoader.test.tsx"]}}),`
`,e(l,{children:e(g,{})})]})}function b(t={}){const{wrapper:o}=Object.assign({},L(),t.components);return o?e(o,{...t,children:e(s,{...t})}):s()}const y=()=>{throw new Error("Docs-only story")};y.parameters={docsOnly:!0};const a={title:"Components/SkeletonLoader/Info",parameters:{jest:["SkeletonLoader.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:b};const ae=["__page"];export{ae as __namedExportsOrder,y as __page,a as default};
