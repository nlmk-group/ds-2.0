import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as d}from"./index-CbmgEnq2.js";import{am as p,an as n,ao as g}from"./chunk-NUUEMKO5-C3rHbOkE.js";import{ae as t,af as c}from"./TreeList-DPzHLkJK.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{r as B}from"./index-Bnop-kX6.js";import{s,H as x,E as a}from"./Header-z-Nr0ytk.js";import{F as u}from"./FigmaEmbed-DpRfu8YJ.js";import{P as f}from"./Properties-CmgpJB7E.js";import{T as j}from"./Tests-BZ2SdrCY.js";/* empty css               */import"./generateUUID-4L6n6RLA.js";import"./index-C8k_JyfR.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DLbY_Jxu.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-DxaWDDI2.js";import"./index-DokmLR-l.js";import"./32-bzYAI2s2.js";import{a as b}from"./argsTypes-DsNwYXEm.js";import"./iframe-DPobGRWo.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-BrWlyA1t.js";import"./index-B5g4YLzC.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=247-12141",N=()=>{const[r,o]=B.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(x,{title:"Badge",description:"Компонент Badge используется для отображения меток (badges), таких как лейблы, тэги, статусы и т.д. Обычно Badge используют внутри или в непосредственной близости от другого более крупного компонента интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Badge",figmaLink:i}),e.jsx("div",{className:s.tabs,children:e.jsxs(t,{children:[e.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),e.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),e.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(a,{height:150,description:"Компонент бэйджа по умолчанию.",code:`import { Badge } from '@nlmk/ds-2.0';

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
)`}),e.jsx(f,{argsTypes:b})]}),Number(r)==1&&e.jsx(u,{url:i}),Number(r)==2&&e.jsx(j,{componentName:"Badge"})]})};function m(r){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/Badge/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=247-12141"},jest:["Badge.test.tsx"]}}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(g,{children:e.jsx(N,{})})]})}function te(r={}){const{wrapper:o}={...d(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(m,{...r})}):m()}export{te as default};
