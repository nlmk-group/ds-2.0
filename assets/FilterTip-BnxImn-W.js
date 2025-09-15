import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as n}from"./index-D2yTtfOz.js";import"./index-BZj5W0-3.js";import{af as r,az as a}from"./TreeList-Dfumwbts.js";import{DecoratorDefault as c}from"./Decorator.stories-D7iJJ_iz.js";import{r as l}from"./index-BcJSXhQi.js";import{s as o,H as d,E as s}from"./Header-DMN9oXvM.js";import{F as x}from"./FigmaEmbed-CdX5UTsK.js";import{P as f}from"./Properties-D2HIDxL_.js";import{T as u}from"./Tests-Beah3iGJ.js";/* empty css               */import"./generateUUID-BavcPfJ4.js";import"./index-Inj23kr-.js";import"./index-2_my9O6o.js";import"./index-BTu6RRiT.js";import"./index-CkFns3eu.js";import"./index-DmffzHLE.js";import"./index-Btxx-I9m.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-DqPMIbXX.js";import"./index-C5rKoyII.js";import"./32-DGpMxF8b.js";import{a as T}from"./argsTypes-DMKhMXWK.js";import{c as b,S as j,U as F}from"./DocsRenderer-CFRXHY34-Bxb1GJd9.js";import"./index-ChsGqxH_.js";import"./preview-CFLYHfFH.js";import"./iframe-Vwkb464U.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-4j-JTKdD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=()=>{const[e,i]=l.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(d,{title:"FilterTip",description:"Компонент FilterTip используется для отображения текущих фильтров и их состояние",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/FilterTip",figmaLink:p}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Компонент FilterTip по умолчанию.",code:`import { FilterTip } from '@nlmk/ds-2.0';

    const App = () => {
      return <FilterTip isActive text="ГК Партии" />
    }
    export default App;
  `}),t.jsx(s,{height:250,description:"Переключаемый FilterTip.",code:`import { useState } from 'react'
    import { FilterTip } from '@nlmk/ds-2.0';

    const App = () => {
      const [isActive, setIsActive] = useState(false);

      const onChange = () => {
        setIsActive((prev) => !prev);
      }

      return (
        <FilterTip isActive={isActive} text="ГК Партии" onClick={onChange} />
      );
    }
    export default App;
  `}),t.jsx(f,{argsTypes:T})]}),Number(e)===1&&t.jsx(x,{url:p}),Number(e)===2&&t.jsx(u,{componentName:"FilterTip"})]})};function m(e){return t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Components/FilterTip/Info",component:a,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964"},jest:["FilterTip.test.tsx"]}}),`
`,t.jsx(j,{of:c}),`
`,t.jsx(F,{children:t.jsx(g,{})})]})}function mt(e={}){const{wrapper:i}={...n(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(m,{...e})}):m()}export{mt as default};
