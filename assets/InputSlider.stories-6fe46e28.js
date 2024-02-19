import{M as c,U as g}from"./chunk-HLWAVYOI-bd2949d1.js";import{I as m}from"./index-2cdebf62.js";import{a as n,j as e,F as l}from"./clsx.m-3764cf42.js";import{r as f}from"./index-f1f749bf.js";import{s as a,H as h,E as p,T as b}from"./Tests-605cd25b.js";import{F as S}from"./FigmaEmbed-6f82f7c8.js";import{P as y}from"./Properties-83346e89.js";import{a as i}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as I}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{u as v}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./index-c1da5c13.js";import"./.jest-test-results-108bf634.js";const C={onChange:{description:"Callback, который будет вызван при изменении значения внутри компонента InputSlider",action:"изменено value"},value:{description:"Значения компонента InputSlider"},step:{description:"Шаг изменения значения в компоненте InputSlider",table:{defaultValue:{summary:1},type:{summary:"number"}},control:{type:"number"}},min:{description:"Минимальное значение компонента InputSlider",control:{type:"number"}},max:{description:"Максимальное значение компонента InputSlider",control:{type:"number"}},disabled:{description:"Условие блокировки input для ввода/изменений",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},w=()=>{const[t,r]=f.useState(0),d=`import { useState } from 'react';
import { InputSlider, Chip } from '@nlmk/ds-2.0';

const App = () => {
    const [value, setValue] = useState(20);

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
        <div style={{width: '400px', marginTop: '50px'}}>
            <InputSlider
                min={0}
                max={100}
                step={1}
                value={value}
                onChange={handleChange}
            />
            <Chip>{value}</Chip>
        </div>
    );
  };

export default App;
`,u=`import { useState } from 'react';

import { InputSlider } from '@nlmk/ds-2.0';

const App = () => {
    const [value, setValue] = useState(500);

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
        <div style={{width: '400px', marginTop: '50px'}}>
            <InputSlider
                min={100}
                max={1000}
                step={10}
                value={value}
                onChange={handleChange}
                disabled
            />
        </div>
    );
  };

export default App;
`;return n("div",{className:a.wrapper,children:[e(h,{title:"InputSlider",description:"InputSlider представляет собой слайдер для ввода числовых значений, который позволяет пользователю выбирать значение в заданном диапазоне.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputSlider",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20852&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:a.tabs,children:n(i,{children:[e(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),e(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&n(l,{children:[e(p,{height:350,description:"InputSlider по умолчанию. Позволяет пользователю выбирать значение от 0 до 100.",code:d}),e(p,{height:350,description:"Неактивный InputSlider. Слайдер установлен в состояние 'disabled', что предотвращает взаимодействие пользователя.",code:u}),e(y,{argsTypes:C})]}),Number(t)===1&&e(S,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20852&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(I,{variant:"Heading4",color:"primary",children:e(b,{componentName:"InputSlider"})})]})};function s(t){return n(l,{children:[e(c,{title:"Components/InputSlider/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputSlider.test.tsx"]}}),`
`,e(g,{children:e(w,{})})]})}function x(t={}){const{wrapper:r}=Object.assign({},v(),t.components);return r?e(r,{...t,children:e(s,{...t})}):s()}const N=()=>{throw new Error("Docs-only story")};N.parameters={docsOnly:!0};const o={title:"Components/InputSlider/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputSlider.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:x};const ae=["__page"];export{ae as __namedExportsOrder,N as __page,o as default};
