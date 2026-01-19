import{r as d,j as e,m as p,S as n,U as g}from"./iframe-tXE4xoYc.js";import{useMDXComponents as c}from"./index-BU2Hc1BN.js";import{B as l}from"./index-UIqxTLHU.js";import{DecoratorDefault as B}from"./Decorator.stories-DX_mk-19.js";import{s as i,H as x,E as t}from"./Header-D7Lkw1fr.js";import{F as u}from"./FigmaEmbed-DGce_rmk.js";import{P as f}from"./Properties-3Caa_vUq.js";import{T as j}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as a}from"./index-BdAkzp84.js";import{a as b}from"./argsTypes-CS5x7rFg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./24-CGaTDQAV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-DfJPKXXV.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=247-12141",N=()=>{const[r,o]=d.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(x,{title:"Badge",description:"Компонент Badge используется для отображения меток (badges), таких как лейблы, тэги, статусы и т.д. Обычно Badge используют внутри или в непосредственной близости от другого более крупного компонента интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Badge",figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(t,{height:150,description:"Компонент бэйджа по умолчанию.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <Badge>1</Badge>
)`}),e.jsx(t,{description:"Badge является компоненетом с обязательно примененными стилем: цветом (color). Доступные стили: primary (отображается по умолчанию), secondary, grey, error, warning, success.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge>1</Badge>
    <Badge color="grey">1</Badge>
    <Badge color="error">1</Badge>
    <Badge color="warning">1</Badge>
    <Badge color="success">1</Badge>
  </>
)`}),e.jsx(t,{description:"Badge представлен в нескольких вариациях (стилях): solid (с заливкой) и outline (с контуром).",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge variant="outline">1</Badge>
    <Badge color="grey" variant="outline">1</Badge>
    <Badge color="error" variant="outline">1</Badge>
    <Badge color="warning" variant="outline">1</Badge>
    <Badge color="success" variant="outline">1</Badge>
  </>
)`}),e.jsx(t,{description:"Компонент Badge доступен в трёх размерах: s - маленький бэйдж с высотой 16px, m - средний бэйдж, его высота 24px и l - большой бэйдж высотой 26px.",code:`import { Badge } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Badge size="l">1</Badge>
    <Badge size="m">1</Badge>
    <Badge size="s">1</Badge>
    <Badge size="xs">1</Badge>
  </>
)`}),e.jsx(f,{argsTypes:b})]}),Number(r)==1&&e.jsx(u,{url:s}),Number(r)==2&&e.jsx(j,{componentName:"Badge"})]})};function m(r){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/Badge/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=247-12141"},jest:["Badge.test.tsx"]}}),`
`,e.jsx(n,{of:B}),`
`,e.jsx(g,{children:e.jsx(N,{})})]})}function pe(r={}){const{wrapper:o}={...c(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(m,{...r})}):m()}export{pe as default};
