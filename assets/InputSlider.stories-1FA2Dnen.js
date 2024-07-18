import{U as m,M as S,e as f}from"./chunk-HLWAVYOI-SF85AK4L.js";import{I as d}from"./index-DHsx0XSp.js";import{a as o,j as e,F as l}from"./jsx-runtime-2xDJh5tt.js";import{r as h}from"./index-CBqU2yxZ.js";import{s as a,H as b,E as s,T as g}from"./Tests-Blt8Zyt5.js";import{F as y}from"./FigmaEmbed-C1VnM6Sb.js";import{P as C}from"./Properties-BqRv8IKb.js";import{J as i}from"./index-B_lQn97I.js";import"./generateUUID-BitdulAq.js";import"./index-D_z3tN8U.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as I}from"./index-nWYpQihe.js";import"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import{useMDXComponents as v}from"./index-DI5IigMn.js";import"./iframe-C_y8s-SQ.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-uzXR7sYQ.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./index-CMH8wQUv.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-Oo-_7YZz.js";const w={onChange:{description:"Callback, который будет вызван при изменении значения внутри компонента InputSlider",action:"изменено value"},value:{description:"Значения компонента InputSlider"},step:{description:"Шаг изменения значения в компоненте InputSlider",table:{defaultValue:{summary:1},type:{summary:"number"}},control:{type:"number"}},min:{description:"Минимальное значение компонента InputSlider",control:{type:"number"}},max:{description:"Максимальное значение компонента InputSlider",control:{type:"number"}},disabled:{description:"Условие блокировки input для ввода/изменений",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},u=()=>{const[t,r]=h.useState(0);return o("div",{className:a.wrapper,children:[e(b,{title:"InputSlider",description:"InputSlider представляет собой слайдер для ввода числовых значений, который позволяет пользователю выбирать значение в заданном диапазоне.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputSlider",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20852&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:a.tabs,children:o(i,{children:[e(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),e(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o(l,{children:[e(s,{height:350,description:"InputSlider по умолчанию. Позволяет пользователю выбирать значение от 0 до 100.",code:`import { useState } from 'react';
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
`}),e(s,{height:350,description:"Неактивный InputSlider. Слайдер установлен в состояние 'disabled', что предотвращает взаимодействие пользователя.",code:`import { useState } from 'react';

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
`}),e(C,{argsTypes:w})]}),Number(t)===1&&e(y,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20852&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(I,{variant:"Heading4",color:"primary",children:e(g,{componentName:"InputSlider"})})]})};function p(t){return o(l,{children:[e(S,{title:"Components/InputSlider/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputSlider.test.tsx"]}}),`
`,e(f,{name:"Docs",children:e(m,{children:e(u,{})})})]})}function x(t={}){const{wrapper:r}=Object.assign({},v(),t.components);return r?e(r,{...t,children:e(p,{...t})}):p()}const c=()=>e(m,{children:e(u,{})});c.storyName="Docs";c.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const n={title:"Components/InputSlider/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputSlider.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["docs"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:x};const se=["docs"];export{se as __namedExportsOrder,n as default,c as docs};
