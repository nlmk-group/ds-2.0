import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as n}from"./index-D2yTtfOz.js";import"./index-DG7FY6lx.js";import{ah as r,_ as a}from"./TreeList-BIo8dH0F.js";import{DecoratorDefault as d}from"./Decorator.stories-D7iJJ_iz.js";import{r as l}from"./index-BcJSXhQi.js";import{s,H as c,E as i}from"./Header-DhwBuQVQ.js";import{F as x}from"./FigmaEmbed--kL_A2fK.js";import{P as h}from"./Properties-rSfIy85H.js";import{T as u}from"./Tests-B6X2FKmr.js";/* empty css               */import"./generateUUID-CpKhmTry.js";import"./index-CzNzGEue.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CaDFz05s.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./32-icvDJE6i.js";import{a as k}from"./argsTypes-CDeke35L.js";import{c as f,S as j,U as L}from"./DocsRenderer-CFRXHY34-LFjC-byd.js";import"./index-ChsGqxH_.js";import"./preview-CZLVd0OK.js";import"./iframe-C5vBzuxd.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-Pec5pZpL.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1",b="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader",S=()=>{const[e,o]=l.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(c,{title:"SkeletonLoader",description:"SkeletonLoader используется для отображения анимированных заглушек во время загрузки контента.",isStable:!0,codeLink:b,figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

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
`}),t.jsx(h,{argsTypes:k})]}),Number(e)==1&&t.jsx(x,{url:m}),Number(e)==2&&t.jsx(u,{componentName:"SkeletonLoader"})]})};function p(e){return t.jsxs(t.Fragment,{children:[t.jsx(f,{title:"Components/SkeletonLoader/Info",component:a,parameters:{jest:["SkeletonLoader.test.tsx"]}}),`
`,t.jsx(j,{of:d}),`
`,t.jsx(L,{children:t.jsx(S,{})})]})}function mt(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(p,{...e})}):p()}export{mt as default};
