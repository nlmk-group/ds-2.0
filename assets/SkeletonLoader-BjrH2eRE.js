import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as n}from"./index-CbmgEnq2.js";import{am as p,an as d,ao as l}from"./chunk-NUUEMKO5-Bk2wbwKH.js";import{a9 as r,T as c}from"./index-Z14Faoel.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as u}from"./index-Bnop-kX6.js";import{s as i,H as h,E as s}from"./Header-Bu8NyEC9.js";import{P as f}from"./Properties-Th7x9zjY.js";import{T as j}from"./Tests-D2nUCyeq.js";/* empty css               */import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import{a as k}from"./argsTypes-ChPN6PXR.js";import{F as b}from"./FigmaEmbed-CeZ_BpEx.js";import"./iframe-CXXxDokO.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-QQPop-pN.js";import"./index-CT8gBKwQ.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1",L=()=>{const[e,o]=u.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(h,{title:"SkeletonLoader",description:"Skeleton Loader — это статический/анимированный элемент для информации, которая все еще загружается.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader",figmaLink:m}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <SkeletonLoader width="350px" />
  </>
)
`}),t.jsx(s,{description:"Компонент лоадера с множественными блоками",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

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
`}),t.jsx(f,{argsTypes:k})]}),Number(e)==1&&t.jsx(b,{url:m}),Number(e)==2&&t.jsx(j,{componentName:"SkeletonLoader"})]})};function a(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/SkeletonLoader/Info",component:c,parameters:{jest:["SkeletonLoader.test.tsx"]}}),`
`,t.jsx(d,{of:x}),`
`,t.jsx(l,{children:t.jsx(L,{})})]})}function et(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(a,{...e})}):a()}export{et as default};
