import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as d}from"./index-D2yTtfOz.js";import"./index-D6_S9Wxc.js";import{af as t,ag as p}from"./TreeList-BqxVwK_V.js";import{DecoratorDefault as n}from"./Decorator.stories-D7iJJ_iz.js";import{r as g}from"./index-BcJSXhQi.js";import{s,H as c,E as a}from"./Header--yT6lINj.js";import{F as l}from"./FigmaEmbed-qtKAclLv.js";import{P as B}from"./Properties-D9m8XxST.js";import{T as x}from"./Tests-BCbKFRWX.js";/* empty css               */import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BQAMZg9d.js";import"./index-C1EIKtiR.js";import"./32-DMwn_7G4.js";import{a as u}from"./argsTypes-CjcFAnXr.js";import{c as f,S as j,U as b}from"./DocsRenderer-CFRXHY34-CFH1eQhb.js";import"./index-ChsGqxH_.js";import"./preview-a1BA6wSx.js";import"./iframe-CgXnHU-M.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DsmJLuSk.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=247-12141",N=()=>{const[r,o]=g.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(c,{title:"Badge",description:"Компонент Badge используется для отображения меток (badges), таких как лейблы, тэги, статусы и т.д. Обычно Badge используют внутри или в непосредственной близости от другого более крупного компонента интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Badge",figmaLink:i}),e.jsx("div",{className:s.tabs,children:e.jsxs(t,{children:[e.jsx(t.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),e.jsx(t.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),e.jsx(t.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)==0&&e.jsxs(e.Fragment,{children:[e.jsx(a,{height:150,description:"Компонент бэйджа по умолчанию.",code:`import { Badge } from '@nlmk/ds-2.0';

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
`,e.jsx(b,{children:e.jsx(N,{})})]})}function se(r={}){const{wrapper:o}={...d(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(m,{...r})}):m()}export{se as default};
