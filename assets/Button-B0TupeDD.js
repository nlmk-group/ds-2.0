import{r as m,j as t,m as p,S as u,U as c}from"./iframe-BiRbIEmb.js";import{useMDXComponents as d}from"./index-DFADegm-.js";import{B as l}from"./index-BDGZFkub.js";import{DecoratorDefault as y}from"./Decorator.stories-Cq2K7ZK_.js";import{s as e,H as B,E as s}from"./Header-BOuFM4z3.js";import{F as b}from"./FigmaEmbed-DXWxjqCs.js";import{P as x}from"./Properties-CTw5qxDW.js";import{T as f}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as n}from"./index-Bc-rzIjC.js";import{a as g}from"./argsTypes-9JlAvghj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CuPa9ZS_.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712",j=()=>{const[o,r]=m.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(B,{title:"Button",description:"Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как размер, иконки, знаки и стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:i}),t.jsx("div",{className:e.tabs,children:t.jsxs(n,{children:[t.jsx(n.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(n.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(n.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{description:"Базовый компонент кнопки в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки 40px, компактный (s) - высота 32px и экстра компактный (xs) - высота 28px.",code:`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button type="button">
      Button
    </Button>
    <Button type="button" size="s">
      Button
    </Button>
    <Button type="button" size="xs">
      Button
    </Button>
  </>
)`}),t.jsx(s,{description:"Кнопка поддерживает различные цветовые схемы и варианты отображения. Каждый цвет может быть отображен в primary или secondary варианте.",code:`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button type="button" color="brand">
      Brand Primary
    </Button>
    <Button type="button" color="brand" variant="secondary">
      Brand Secondary
    </Button>

    <Button type="button" color="grey">
      Grey Primary
    </Button>
    <Button type="button" color="grey" variant="secondary">
      Grey Secondary
    </Button>

    <Button type="button" color="ghost">
      Ghost Primary
    </Button>
    <Button type="button" color="ghost" variant="secondary">
      Ghost Secondary
    </Button>

    <Button type="button" color="error">
      Error Primary
    </Button>
    <Button type="button" color="error" variant="secondary">
      Error Secondary
    </Button>

    <Button type="button" color="warning">
      Warning Primary
    </Button>
    <Button type="button" color="warning" variant="secondary">
      Warning Secondary
    </Button>

    <Button type="button" color="success">
      Success Primary
    </Button>
    <Button type="button" color="success" variant="secondary">
      Success Secondary
    </Button>
  </>
)`}),t.jsx(x,{argsTypes:g})]}),Number(o)===1&&t.jsx(b,{url:i}),Number(o)===2&&t.jsx(f,{componentName:"Button"})]})};function a(o){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Button/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712"},jest:["Button.test.tsx"]}}),`
`,t.jsx(u,{of:y}),`
`,t.jsx(c,{children:t.jsx(j,{})})]})}function pt(o={}){const{wrapper:r}={...d(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(a,{...o})}):a()}export{pt as default};
