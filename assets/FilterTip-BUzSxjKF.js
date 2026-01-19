import{r as n,j as t,m as a,S as l,U as c}from"./iframe-tXE4xoYc.js";import{useMDXComponents as d}from"./index-BU2Hc1BN.js";import{a as x,F as u}from"./argsTypes-CzTO4o14.js";import{DecoratorDefault as f}from"./Decorator.stories-DX_mk-19.js";import{s as o,H as T,E as s}from"./Header-D7Lkw1fr.js";import{F as b}from"./FigmaEmbed-DGce_rmk.js";import{P as j}from"./Properties-3Caa_vUq.js";import{T as F}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as r}from"./index-BdAkzp84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfJPKXXV.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-UIqxTLHU.js";import"./index-BavAFXG7.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./24-CGaTDQAV.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=()=>{const[e,i]=n.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(T,{title:"FilterTip",description:"Компонент FilterTip используется для отображения текущих фильтров и их состояние",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/FilterTip",figmaLink:p}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Компонент FilterTip по умолчанию.",code:`import { FilterTip } from '@nlmk/ds-2.0';

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
