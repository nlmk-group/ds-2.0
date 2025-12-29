import{r as m,j as t,f as p,S as u,U as c}from"./iframe-zk5xXBtA.js";import{useMDXComponents as d}from"./index-CSMoqiIu.js";import{B as l}from"./index-CTfBpVCI.js";import{DecoratorDefault as y}from"./Decorator.stories-XjMTlGWF.js";import{s as e,H as B,E as s}from"./Header-BMqOixcD.js";import{F as b}from"./FigmaEmbed-Bh-YhisY.js";import{P as x}from"./Properties-BH32KsQA.js";import{T as f}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as n}from"./index-CGZqhooT.js";import{a as g}from"./argsTypes-_ek9Uatx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-B9FTsAqd.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712",j=()=>{const[o,r]=m.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(B,{title:"Button",description:"Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как размер, иконки, знаки и стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:i}),t.jsx("div",{className:e.tabs,children:t.jsxs(n,{children:[t.jsx(n.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(n.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(n.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{description:"Базовый компонент кнопки в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки 40px, компактный (s) - высота 32px и экстра компактный (xs) - высота 28px.",code:`import { Button } from '@nlmk/ds-2.0';

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
