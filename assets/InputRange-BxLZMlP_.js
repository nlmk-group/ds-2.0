import{r as m,j as t,f as p,S as u,U as l}from"./iframe-zk5xXBtA.js";import{useMDXComponents as d}from"./index-CSMoqiIu.js";import{a as c,I as x}from"./argsTypes-fh8_ko_x.js";import{DecoratorDefault as g}from"./Decorator.stories-XjMTlGWF.js";import{s as a,H as f,E as o}from"./Header-BMqOixcD.js";import{F as b}from"./FigmaEmbed-Bh-YhisY.js";import{P as j}from"./Properties-BH32KsQA.js";import{T as h}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as r}from"./index-CGZqhooT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DGIAH_IE.js";import"./clsx-B-dksMZM.js";import"./index-9BCGLlQQ.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=502-2809&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[e,n]=m.useState(0);return t.jsxs("div",{className:a.wrapper,children:[t.jsx(f,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
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
