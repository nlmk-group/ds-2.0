import{r as n,j as t,f as a,S as l,U as c}from"./iframe-CxLN9ksd.js";import{useMDXComponents as d}from"./index-CeChe1UL.js";import{a as x,F as u}from"./argsTypes-Cq661ph8.js";import{DecoratorDefault as f}from"./Decorator.stories-DWPS1QvQ.js";import{s as o,H as T,E as s}from"./Header-B1Tht5jw.js";import{F as b}from"./FigmaEmbed-gwemKUEC.js";import{P as j}from"./Properties-Be6XSfnk.js";import{T as F}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as r}from"./index-Bs6EWGDb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3DoxRCP.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./index-LyR6p6RN.js";import"./index-M8Uj9-kW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./24-CbC-8o3Y.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964",g=()=>{const[e,i]=n.useState(0);return t.jsxs("div",{className:o.wrapper,children:[t.jsx(T,{title:"FilterTip",description:"Компонент FilterTip используется для отображения текущих фильтров и их состояние",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/FilterTip",figmaLink:p}),t.jsx("div",{className:o.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>i(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>i(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>i(2)})]})}),Number(e)===0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Компонент FilterTip по умолчанию.",code:`import { FilterTip } from '@nlmk/ds-2.0';

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
