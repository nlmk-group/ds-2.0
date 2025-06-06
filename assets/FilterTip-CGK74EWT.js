import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as n}from"./index-D2yTtfOz.js";import"./index-C29aix7i.js";import{af as r,az as a}from"./TreeList-ChHEVmCs.js";import{DecoratorDefault as c}from"./Decorator.stories-D7iJJ_iz.js";import{r as l}from"./index-BcJSXhQi.js";import{s as o,H as d,E as s}from"./Header-z3o1OyRv.js";import{F as x}from"./FigmaEmbed-DpsoEybb.js";import{P as f}from"./Properties-BTi79naR.js";import{T as u}from"./Tests-COXNRsD6.js";/* empty css               */import"./generateUUID-306HU3fz.js";import"./index-CeXAN7vm.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import"./index-DmffzHLE.js";import"./index-C431fSij.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BAYgGaKw.js";import"./index-C1EIKtiR.js";import"./32-DmJYGC0n.js";import{a as T}from"./argsTypes-85jLbhjT.js";import{c as b,S as j,U as F}from"./DocsRenderer-CFRXHY34-DGBzxuyv.js";import"./index-ChsGqxH_.js";import"./preview-dU7hj7XT.js";import"./iframe-BNNnwtEP.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-CPf5TK1W.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=()=>{const[e,i]=l.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(d,{title:"FilterTip",description:"Компонент FilterTip используется для отображения текущих фильтров и их состояние",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/FilterTip",figmaLink:p}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Компонент FilterTip по умолчанию.",code:`import { FilterTip } from '@nlmk/ds-2.0';

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
