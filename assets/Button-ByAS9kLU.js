import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as m}from"./index-D2yTtfOz.js";import"./index-Ceocx6vA.js";import{ah as n,B as p}from"./TreeList-ls9Njcdr.js";import{DecoratorDefault as u}from"./Decorator.stories-D7iJJ_iz.js";import{r as c}from"./index-BcJSXhQi.js";import{s as e,H as d,E as s}from"./Header-CJB5cioC.js";import{F as l}from"./FigmaEmbed-DDflHzmd.js";import{P as y}from"./Properties-3USjPPd0.js";import{T as B}from"./Tests-BZxq-0ur.js";/* empty css               */import"./generateUUID-CpKhmTry.js";import"./index-CzNzGEue.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CaDFz05s.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./32-icvDJE6i.js";import{a as b}from"./argsTypes-BR28JdRL.js";import{c as x,S as f,U as g}from"./DocsRenderer-CFRXHY34-DrtSSUxY.js";import"./index-ChsGqxH_.js";import"./preview-Rx2hgzzb.js";import"./iframe-DMa-tgy1.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-2cKemHd6.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712",j=()=>{const[o,r]=c.useState(0);return t.jsxs("div",{className:e.wrapper,children:[t.jsx(d,{title:"Button",description:"Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как размер, иконки, знаки и стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button",figmaLink:i}),t.jsx("div",{className:e.tabs,children:t.jsxs(n,{children:[t.jsx(n.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>r(0)}),t.jsx(n.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>r(1)}),t.jsx(n.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>r(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{description:"Базовый компонент кнопки в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки 40px, компактный (s) - высота 32px и экстра компактный (xs) - высота 28px.",code:`import { Button } from '@nlmk/ds-2.0';

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
)`}),t.jsx(y,{argsTypes:b})]}),Number(o)===1&&t.jsx(l,{url:i}),Number(o)===2&&t.jsx(B,{componentName:"Button"})]})};function a(o){return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Components/Button/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712"},jest:["Button.test.tsx"]}}),`
`,t.jsx(f,{of:u}),`
`,t.jsx(g,{children:t.jsx(j,{})})]})}function st(o={}){const{wrapper:r}={...m(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(a,{...o})}):a()}export{st as default};
