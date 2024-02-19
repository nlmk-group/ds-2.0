import{M as l,U as d}from"./chunk-HLWAVYOI-bd2949d1.js";import{I as s}from"./index-5196d16d.js";import{a as r,j as e,F as u}from"./clsx.m-3764cf42.js";import{r as c}from"./index-f1f749bf.js";import{s as i,H as g,E as p,T as b}from"./Tests-605cd25b.js";import{F as f}from"./FigmaEmbed-6f82f7c8.js";import{P as y}from"./Properties-83346e89.js";/* empty css               */import{a}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as h}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{u as x}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./index-c1da5c13.js";import"./.jest-test-results-108bf634.js";const I={onChange:{description:"Callback, который будет вызван при изменении значения внутри компонента InputRange",action:"изменено value"},value:{description:"Значения компонента InputRange"},step:{description:"Шаг изменения значения в компоненте InputRange",table:{defaultValue:{summary:1},type:{summary:"number"}},control:{type:"number"}},min:{description:"Минимальное значение компонента InputRange",control:{type:"number"}},max:{description:"Максимальное значение компонента InputRange",control:{type:"number"}},disabled:{description:"Условие блокировки input для ввода/изменений",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},v=()=>{const[t,n]=c.useState(0);return r("div",{className:i.wrapper,children:[e(g,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
        значений. Компонент подходит для настройки таких параметров, как громкость, яркость или применение фильтров
        изображения.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20851&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:i.tabs,children:r(a,{children:[e(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>n(0)}),e(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>n(1)}),e(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>n(2)})]})}),Number(t)==0&&r(u,{children:[e(p,{description:"Компонент InputRange представляет собой отрезок с min/max величинами.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
}`}),e(p,{description:"Компонент не доступен для ввода/изменения.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
`}),e(y,{argsTypes:I})]}),Number(t)==1&&e(f,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20851&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e(h,{variant:"Heading4",color:"primary",children:e(b,{componentName:"InputRange"})})]})};function m(t){return r(u,{children:[e(l,{title:"Components/InputRange/Info",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]}}),`
`,e(d,{children:e(v,{})})]})}function w(t={}){const{wrapper:n}=Object.assign({},x(),t.components);return n?e(n,{...t,children:e(m,{...t})}):m()}const R=()=>{throw new Error("Docs-only story")};R.parameters={docsOnly:!0};const o={title:"Components/InputRange/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]},component:s,tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:w};const oe=["__page"];export{oe as __namedExportsOrder,R as __page,o as default};
