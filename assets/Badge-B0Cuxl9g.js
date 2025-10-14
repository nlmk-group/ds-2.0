import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as d}from"./index-D2yTtfOz.js";import"./index-DdXQuNHV.js";import{ah as t,ai as p}from"./TreeList-BLZWONv9.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{r as g}from"./index-BcJSXhQi.js";import{s,H as c,E as a}from"./Header-BAtFoR7j.js";import{F as l}from"./FigmaEmbed-iL38sq9v.js";import{P as B}from"./Properties-DyMPcb7Z.js";import{T as x}from"./Tests-BetImSxx.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as u}from"./argsTypes-bhSIvJ7J.js";import{c as f,S as j,U as b}from"./DocsRenderer-CFRXHY34-mULDhUCX.js";import"./index-ChsGqxH_.js";import"./preview-BTcIOkug.js";import"./iframe-tAyiefTe.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DvnLtGpU.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=247-12141",h=()=>{const[r,o]=g.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(c,{title:"Badge",description:"Компонент Badge используется для отображения меток (badges), таких как лейблы, тэги, статусы и т.д. Обычно Badge используют внутри или в непосредственной близости от другого более крупного компонента интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Badge",figmaLink:i}),e.jsx("div",{className:s.tabs,children:e.jsxs(t,{children:[e.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),e.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),e.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(a,{height:150,description:"Компонент бэйджа по умолчанию.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <Badge>1</Badge>
)`}),e.jsx(a,{description:"Badge является компоненетом с обязательно примененными стилем: цветом (color). Доступные стили: primary (отображается по умолчанию), secondary, grey, error, warning, success.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge>1</Badge>
    <Badge color="grey">1</Badge>
    <Badge color="error">1</Badge>
    <Badge color="warning">1</Badge>
    <Badge color="success">1</Badge>
  </>
)`}),e.jsx(a,{description:"Badge представлен в нескольких вариациях (стилях): solid (с заливкой) и outline (с контуром).",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge variant="outline">1</Badge>
    <Badge color="grey" variant="outline">1</Badge>
    <Badge color="error" variant="outline">1</Badge>
    <Badge color="warning" variant="outline">1</Badge>
    <Badge color="success" variant="outline">1</Badge>
  </>
)`}),e.jsx(a,{description:"Компонент Badge доступен в трёх размерах: s - маленький бэйдж с высотой 16px, m - средний бэйдж, его высота 24px и l - большой бэйдж высотой 26px.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge size="l">1</Badge>
    <Badge size="m">1</Badge>
    <Badge size="s">1</Badge>
    <Badge size="xs">1</Badge>
  </>
)`}),e.jsx(B,{argsTypes:u})]}),Number(r)==1&&e.jsx(l,{url:i}),Number(r)==2&&e.jsx(x,{componentName:"Badge"})]})};function m(r){return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Components/Badge/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=247-12141"},jest:["Badge.test.tsx"]}}),`
`,e.jsx(j,{of:n}),`
`,e.jsx(b,{children:e.jsx(h,{})})]})}function se(r={}){const{wrapper:o}={...d(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(m,{...r})}):m()}export{se as default};
