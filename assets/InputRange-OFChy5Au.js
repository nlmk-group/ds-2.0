import{r as m,j as t,f as p,S as u,U as l}from"./iframe-CxLN9ksd.js";import{useMDXComponents as d}from"./index-CeChe1UL.js";import{a as c,I as x}from"./argsTypes-DUV0pKkR.js";import{DecoratorDefault as g}from"./Decorator.stories-DWPS1QvQ.js";import{s as a,H as f,E as o}from"./Header-B1Tht5jw.js";import{F as b}from"./FigmaEmbed-gwemKUEC.js";import{P as j}from"./Properties-Be6XSfnk.js";import{T as h}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as r}from"./index-Bs6EWGDb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CU-uG9qO.js";import"./clsx-B-dksMZM.js";import"./index-CORENSTS.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-LyR6p6RN.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=502-2809&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[e,n]=m.useState(0);return t.jsxs("div",{className:a.wrapper,children:[t.jsx(f,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
        значений. Компонент подходит для настройки таких параметров, как громкость, яркость или применение фильтров
        изображения.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:s}),t.jsx("div",{className:a.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>n(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>n(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>n(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{description:"Компонент InputRange представляет собой отрезок с min/max величинами.",code:`import { InputRange } from '@nlmk/ds-2.0';
import { useState } from 'react'

export default  App = () => {
  const [value, setInputRangeValue] = useState({ min: 20, max: 80 });

  const handleValuesChange = (newValues: { min: number; max: number }) => {
    setInputRangeValue(newValues);
  };

  return (
    <div style={{ width: '500px', padding: '30px 12px' }}>
      <InputRange
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={handleValuesChange}
      />
    </div>
  );
}`}),t.jsx(o,{description:"Компонент не доступен для ввода/изменения.",code:`import { InputRange } from '@nlmk/ds-2.0';
import { useState } from 'react'

export default  App = () => {
  const [value, setInputRangeValue] = useState({ min: 20, max: 80 });

  const handleValuesChange = (newValues: { min: number; max: number }) => {
    setInputRangeValue(newValues);
  };

  return (
    <div style={{ width: '500px', padding: '30px 12px' }}>
      <InputRange
        min={0}
        max={100}
        step={1}
        value={value}
        disabled
        onChange={handleValuesChange}
      />
    </div>
  );
}
`}),t.jsx(j,{argsTypes:c})]}),Number(e)==1&&t.jsx(b,{url:s}),Number(e)==2&&t.jsx(h,{componentName:"InputRange"})]})};function i(e){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/InputRange/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]}}),`
`,t.jsx(u,{of:g}),`
`,t.jsx(l,{children:t.jsx(I,{})})]})}function ut(e={}){const{wrapper:n}={...d(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i()}export{ut as default};
