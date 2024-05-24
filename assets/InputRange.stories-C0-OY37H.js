import{U as p,M as g,e as b}from"./chunk-HLWAVYOI-Wi0ATan8.js";import{I as u}from"./index-BLysk004.js";import{a as r,j as e,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as y}from"./index-CBqU2yxZ.js";import{s as i,H as f,E as s,T as h}from"./Tests-hVRqW0BD.js";import{F as x}from"./FigmaEmbed-DBQmzHRF.js";import{P as I}from"./Properties-DNETG4cA.js";/* empty css               */import{L as a}from"./index-BXHiB0mH.js";import"./generateUUID-C4dJbmAm.js";import"./index-DdUHXjGd.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as v}from"./index-nWYpQihe.js";import"./index-tm22VGJr.js";import"./index-DHsx0XSp.js";import"./index-D-OkhesI.js";import"./32-CjiFhZy5.js";import{useMDXComponents as R}from"./index-DI5IigMn.js";import"./iframe-D9vks-F5.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-8oLKRMwh.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./index-CMH8wQUv.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DO37e2Gf.js";const w={onChange:{description:"Callback, который будет вызван при изменении значения внутри компонента InputRange",action:"изменено value"},value:{description:"Значения компонента InputRange"},step:{description:"Шаг изменения значения в компоненте InputRange",table:{defaultValue:{summary:1},type:{summary:"number"}},control:{type:"number"}},min:{description:"Минимальное значение компонента InputRange",control:{type:"number"}},max:{description:"Максимальное значение компонента InputRange",control:{type:"number"}},disabled:{description:"Условие блокировки input для ввода/изменений",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},l=()=>{const[t,n]=y.useState(0);return r("div",{className:i.wrapper,children:[e(f,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
        значений. Компонент подходит для настройки таких параметров, как громкость, яркость или применение фильтров
        изображения.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20851&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:i.tabs,children:r(a,{children:[e(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>n(0)}),e(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>n(1)}),e(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>n(2)})]})}),Number(t)==0&&r(d,{children:[e(s,{description:"Компонент InputRange представляет собой отрезок с min/max величинами.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
}`}),e(s,{description:"Компонент не доступен для ввода/изменения.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
`}),e(I,{argsTypes:w})]}),Number(t)==1&&e(x,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20851&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e(v,{variant:"Heading4",color:"primary",children:e(h,{componentName:"InputRange"})})]})};function m(t){return r(d,{children:[e(g,{title:"Components/InputRange/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]}}),`
`,e(b,{name:"Docs",children:e(p,{children:e(l,{})})})]})}function C(t={}){const{wrapper:n}=Object.assign({},R(),t.components);return n?e(n,{...t,children:e(m,{...t})}):m()}const c=()=>e(p,{children:e(l,{})});c.storyName="Docs";c.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const o={title:"Components/InputRange/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]},component:u,tags:["stories-mdx"],includeStories:["docs"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:C};const ie=["docs"];export{ie as __namedExportsOrder,o as default,c as docs};
