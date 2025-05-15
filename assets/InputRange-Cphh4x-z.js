import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as i}from"./index-CbmgEnq2.js";import"./index-CDNBfPUD.js";import{I as p}from"./index-cR4M_wwG.js";import{DecoratorDefault as u}from"./Decorator.stories-B1hjNCvN.js";import{r as l}from"./index-Bnop-kX6.js";import{s as r,H as d,E as s}from"./Header-C1-O-XnO.js";import{F as c}from"./FigmaEmbed-BdmsVGpE.js";import{P as x}from"./Properties-C1uV5wRN.js";import{T as g}from"./Tests-DV49_lgf.js";/* empty css               */import{ag as a}from"./TreeList-KafSWxD5.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as f}from"./argsTypes-ClHr9njU.js";import{c as b,e as j,U as h}from"./DocsRenderer-CFRXHY34-D9cGPbCT.js";import"./preview-B_gHuUAG.js";import"./iframe-Bi6NeCl1.js";import"./index-B5g4YLzC.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-AvLRxKSw.js";import"./index-D0sJu8id.js";import"./tiny-invariant-CopsF_GD.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const o="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=502-2809&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[t,n]=l.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(d,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
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
`}),e.jsx(x,{argsTypes:f})]}),Number(t)==1&&e.jsx(c,{url:o}),Number(t)==2&&e.jsx(g,{componentName:"InputRange"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/InputRange/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]}}),`
`,e.jsx(j,{of:u}),`
`,e.jsx(h,{children:e.jsx(I,{})})]})}function ae(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m()}export{ae as default};
