import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as n}from"./index-D2yTtfOz.js";import"./index-DYLblAxs.js";import{af as r,Y as a}from"./TreeList-t5OOsUq-.js";import{DecoratorDefault as d}from"./Decorator.stories-D7iJJ_iz.js";import{r as l}from"./index-BcJSXhQi.js";import{s,H as c,E as i}from"./Header-C9SoisPf.js";import{F as x}from"./FigmaEmbed-D8nHz24n.js";import{P as u}from"./Properties-cxhj142t.js";import{T as h}from"./Tests-CMh306eU.js";/* empty css               */import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BQAMZg9d.js";import"./index-C5rKoyII.js";import"./32-DMwn_7G4.js";import{a as f}from"./argsTypes-ThgHucFC.js";import{c as k,S as j,U as L}from"./DocsRenderer-CFRXHY34-Danf4Mdf.js";import"./index-ChsGqxH_.js";import"./preview-BOf7DvUE.js";import"./iframe-CPAcJ80T.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-BXKwGLWG.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1",b="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader",S=()=>{const[e,o]=l.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(c,{title:"SkeletonLoader",description:"SkeletonLoader используется для отображения анимированных заглушек во время загрузки контента.",isStable:!0,codeLink:b,figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(i,{height:200,description:"Компонент лоадера по умолчанию",code:`import { SkeletonLoader } from '@nlmk/ds-2.0';

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
`}),t.jsx(u,{argsTypes:f})]}),Number(e)==1&&t.jsx(x,{url:m}),Number(e)==2&&t.jsx(h,{componentName:"SkeletonLoader"})]})};function p(e){return t.jsxs(t.Fragment,{children:[t.jsx(k,{title:"Components/SkeletonLoader/Info",component:a,parameters:{jest:["SkeletonLoader.test.tsx"]}}),`
`,t.jsx(j,{of:d}),`
`,t.jsx(L,{children:t.jsx(S,{})})]})}function mt(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(p,{...e})}):p()}export{mt as default};
