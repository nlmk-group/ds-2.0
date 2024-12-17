import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as c,an as p,ao as u}from"./chunk-NUUEMKO5-CkiiNlyy.js";import{af as n,B as d}from"./index-ByAgZyky.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{r as B}from"./index-Bnop-kX6.js";import{s,H as x,E as e}from"./Header-EP2jVtSV.js";import{F as y}from"./FigmaEmbed-C-3tISD_.js";import{P as f}from"./Properties-C46i6TC6.js";import{T as b}from"./Tests-4iTQQ7zx.js";/* empty css               */import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{a as g}from"./argsTypes-Cxg197Ot.js";import"./iframe-DNfwqCnh.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BiTg2p7s.js";import"./index-CT8gBKwQ.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712",j=()=>{const[o,r]=B.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(x,{title:"Button",description:"Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как размер, иконки, знаки и стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:a}),t.jsx("div",{className:s.tabs,children:t.jsxs(n,{children:[t.jsx(n.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(n.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(n.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{description:"Базовый компонент кнопки в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки 40px, компактный (s) - высота 32px и экстра компактный (xs) - высота 28px.",code:`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button>
      Button
    </Button>
    <Button size="s">
      Button
    </Button>
    <Button size="xs">
      Button
    </Button>
  </>
)`}),t.jsx(e,{description:"Кнопка поддерживает различные цветовые схемы и варианты отображения. Каждый цвет может быть отображен в primary или secondary варианте.",code:`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button color="brand">
      Brand Primary
    </Button>
    <Button color="brand" variant="secondary">
      Brand Secondary
    </Button>

    <Button color="grey">
      Grey Primary
    </Button>
    <Button color="grey" variant="secondary">
      Grey Secondary
    </Button>

    <Button color="ghost">
      Ghost Primary
    </Button>
    <Button color="ghost" variant="secondary">
      Ghost Secondary
    </Button>

    <Button color="error">
      Error Primary
    </Button>
    <Button color="error" variant="secondary">
      Error Secondary
    </Button>

    <Button color="warning">
      Warning Primary
    </Button>
    <Button color="warning" variant="secondary">
      Warning Secondary
    </Button>

    <Button color="success">
      Success Primary
    </Button>
    <Button color="success" variant="secondary">
      Success Secondary
    </Button>
  </>
)`}),t.jsx(f,{argsTypes:g})]}),Number(o)===1&&t.jsx(y,{url:a}),Number(o)===2&&t.jsx(b,{componentName:"Button"})]})};function i(o){return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Components/Button/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712"},jest:["Button.test.tsx"]}}),`
`,t.jsx(p,{of:l}),`
`,t.jsx(u,{children:t.jsx(j,{})})]})}function rt(o={}){const{wrapper:r}={...m(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(i,{...o})}):i()}export{rt as default};
