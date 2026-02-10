import{r as n,j as t,m as a,S as l,U as c}from"./iframe-BiRbIEmb.js";import{useMDXComponents as d}from"./index-DFADegm-.js";import{a as x,F as u}from"./argsTypes-CASDZjub.js";import{DecoratorDefault as f}from"./Decorator.stories-Cq2K7ZK_.js";import{s as o,H as T,E as s}from"./Header-BOuFM4z3.js";import{F as b}from"./FigmaEmbed-DXWxjqCs.js";import{P as j}from"./Properties-CTw5qxDW.js";import{T as F}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as r}from"./index-Bc-rzIjC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDGZFkub.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CuPa9ZS_.js";import"./index-D4AgSARz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=()=>{const[e,i]=n.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(T,{title:"FilterTip",description:"Компонент FilterTip используется для отображения текущих фильтров и их состояние",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/FilterTip",figmaLink:p}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Компонент FilterTip по умолчанию.",code:`import { FilterTip } from '@nlmk/ds-2.0';

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
  `}),t.jsx(j,{argsTypes:x})]}),Number(e)===1&&t.jsx(b,{url:p}),Number(e)===2&&t.jsx(F,{componentName:"FilterTip"})]})};function m(e){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/FilterTip/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964"},jest:["FilterTip.test.tsx"]}}),`
`,t.jsx(l,{of:f}),`
`,t.jsx(c,{children:t.jsx(g,{})})]})}function ct(e={}){const{wrapper:i}={...d(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(m,{...e})}):m()}export{ct as default};
