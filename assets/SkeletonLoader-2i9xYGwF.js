import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as n}from"./index-DtGqrCZN.js";import{ag as p,ah as d,ai as l}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as r,J as c}from"./index-ZojCmbpv.js";import{DecoratorDefault as x}from"./Decorator.stories-CffsLfgf.js";import{r as u}from"./index-Cu9bd8lq.js";import{s as i,H as h,E as s}from"./Header-CN10_-75.js";import{P as f}from"./Properties-Btz1YxCe.js";import{T as j}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as k}from"./argsTypes-DUt--zaH.js";import{F as b}from"./FigmaEmbed-2TZ9ZXkF.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1",L=()=>{const[e,o]=u.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(h,{title:"SkeletonLoader",description:"Skeleton Loader — это статический/анимированный элемент для информации, которая все еще загружается.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader",figmaLink:m}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

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
`,t.jsx(l,{children:t.jsx(L,{})})]})}function rt(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(a,{...e})}):a()}export{rt as default};
