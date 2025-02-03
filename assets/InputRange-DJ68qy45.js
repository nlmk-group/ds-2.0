import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as i}from"./index-CbmgEnq2.js";import{am as p,an as u,ao as l}from"./chunk-NUUEMKO5-Cd7bABYI.js";import{I as d}from"./index-cR4M_wwG.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as r,H as g,E as s}from"./Header-qpworjwL.js";import{F as f}from"./FigmaEmbed-B10UhZ2Y.js";import{P as b}from"./Properties-CeG-woxn.js";import{T as h}from"./Tests-Byh4FwCQ.js";/* empty css               */import{ah as a}from"./index-C4t5CiEI.js";import"./generateUUID-CwQfW92c.js";import"./index-D73feNss.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-NOJR75CD.js";import"./index-FnAFVao7.js";import"./index-bks6ELD5.js";import"./index-DokmLR-l.js";import"./32-DRujtrbd.js";import{a as j}from"./argsTypes-ClHr9njU.js";import"./iframe-73SD5tIC.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./index-B5g4YLzC.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-Dj_CiLiI.js";const o="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=502-2809&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[t,n]=x.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(g,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
        значений. Компонент подходит для настройки таких параметров, как громкость, яркость или применение фильтров
        изображения.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:o}),e.jsx("div",{className:r.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>n(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>n(1)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>n(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(s,{description:"Компонент InputRange представляет собой отрезок с min/max величинами.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
}`}),e.jsx(s,{description:"Компонент не доступен для ввода/изменения.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
`}),e.jsx(b,{argsTypes:j})]}),Number(t)==1&&e.jsx(f,{url:o}),Number(t)==2&&e.jsx(h,{componentName:"InputRange"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/InputRange/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]}}),`
`,e.jsx(u,{of:c}),`
`,e.jsx(l,{children:e.jsx(I,{})})]})}function ne(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m()}export{ne as default};
