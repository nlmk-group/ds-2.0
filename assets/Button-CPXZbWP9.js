import{r as m,j as t,m as p,S as u,U as c}from"./iframe-BPtLBEuk.js";import{useMDXComponents as d}from"./index-DY5aY42c.js";import{B as l}from"./index-C5OaxW6Y.js";import{DecoratorDefault as y}from"./Decorator.stories-Bt-6wqMy.js";import{s as e,H as B,E as s}from"./Header-lxb-Wymn.js";import{F as b}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as x}from"./Properties-u6_xeg7P.js";import{T as f}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as n}from"./index-CX87Y9E4.js";import{a as g}from"./argsTypes-7AKb5mEX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-D-pLh_NR.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712",j=()=>{const[o,r]=m.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(B,{title:"Button",description:"Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как размер, иконки, знаки и стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:i}),t.jsx("div",{className:e.tabs,children:t.jsxs(n,{children:[t.jsx(n.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(n.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(n.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{description:"Базовый компонент кнопки в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки 40px, компактный (s) - высота 32px и экстра компактный (xs) - высота 28px.",code:`import { Button } from '@nlmk/ds-2.0';

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
