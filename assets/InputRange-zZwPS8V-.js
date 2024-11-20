import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as m}from"./index-CbmgEnq2.js";import{am as p,an as u,ao as l}from"./chunk-NUUEMKO5-dBm1alr4.js";import{I as c}from"./index-CocscvOf.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as g}from"./index-Bnop-kX6.js";import{s as r,H as x,E as o}from"./Header-qj4SNJue.js";import{F as b}from"./FigmaEmbed-R2hIZcYQ.js";import{P as f}from"./Properties-DRW4mgpN.js";import{T as I}from"./Tests-SAvD4l8-.js";/* empty css               */import{a9 as a}from"./index-N7PQoZjI.js";import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import"./iframe-BexKgGB-.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./index-CT8gBKwQ.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BmSRDSfW.js";const h={onChange:{description:"Callback, который будет вызван при изменении значения внутри компонента InputRange",action:"изменено value"},value:{description:"Значения компонента InputRange"},step:{description:"Шаг изменения значения в компоненте InputRange",table:{defaultValue:{summary:1},type:{summary:"number"}},control:{type:"number"}},min:{description:"Минимальное значение компонента InputRange",control:{type:"number"}},max:{description:"Максимальное значение компонента InputRange",control:{type:"number"}},disabled:{description:"Условие блокировки input для ввода/изменений",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=502-2809&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[t,n]=g.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(x,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
        значений. Компонент подходит для настройки таких параметров, как громкость, яркость или применение фильтров
        изображения.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:s}),e.jsx("div",{className:r.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>n(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>n(1)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>n(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент InputRange представляет собой отрезок с min/max величинами.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
}`}),e.jsx(o,{description:"Компонент не доступен для ввода/изменения.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
`}),e.jsx(f,{argsTypes:h})]}),Number(t)==1&&e.jsx(b,{url:s}),Number(t)==2&&e.jsx(I,{componentName:"InputRange"})]})};function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/InputRange/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]}}),`
`,e.jsx(u,{of:d}),`
`,e.jsx(l,{children:e.jsx(j,{})})]})}function ee(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i()}export{ee as default};
