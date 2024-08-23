import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as s}from"./index-CpguRmgc.js";import{ag as m,ah as p,ai as u}from"./chunk-HLWAVYOI-8cSc4A_q.js";import{I as l}from"./index-wNTT8eSr.js";import{DecoratorDefault as d}from"./Decorator.stories-BP3ijO2B.js";import{r as c}from"./index-DQ2WTIsS.js";import{s as r,H as g,E as o}from"./Header-CCpvyPcu.js";import{F as x}from"./FigmaEmbed-D84Rc2lf.js";import{P as f}from"./Properties-wNTafXk8.js";import{T as b}from"./Tests-yFYV-agI.js";/* empty css               */import{Y as a}from"./index-DlGLur7j.js";import"./generateUUID-CY9Prqwy.js";import"./index-BenQYTIH.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-Dvm_EBHX.js";import"./index-S3KjbRnp.js";import"./index-CWVO2cHI.js";import"./32-CCQbJusC.js";import"./iframe-geO1X4N4.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./index-0sbKER3h.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BPDxFfoz.js";const h={onChange:{description:"Callback, который будет вызван при изменении значения внутри компонента InputRange",action:"изменено value"},value:{description:"Значения компонента InputRange"},step:{description:"Шаг изменения значения в компоненте InputRange",table:{defaultValue:{summary:1},type:{summary:"number"}},control:{type:"number"}},min:{description:"Минимальное значение компонента InputRange",control:{type:"number"}},max:{description:"Максимальное значение компонента InputRange",control:{type:"number"}},disabled:{description:"Условие блокировки input для ввода/изменений",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},y=()=>{const[t,n]=c.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(g,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
        значений. Компонент подходит для настройки таких параметров, как громкость, яркость или применение фильтров
        изображения.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20851&mode=design&t=awyt3Fzj1XS6th7v-1"}),e.jsx("div",{className:r.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>n(0)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>n(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент InputRange представляет собой отрезок с min/max величинами.",code:`import { InputRange } from '@nlmk/ds-2.0';
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
`}),e.jsx(f,{argsTypes:h})]}),Number(t)==1&&e.jsx(x,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20851&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e.jsx(b,{componentName:"InputRange"})]})};function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/InputRange/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=944-6995&t=xN2Xxpz0c5cAQi98-0"},jest:["InputRange.test.tsx"]}}),`
`,e.jsx(p,{of:d}),`
`,e.jsx(u,{children:e.jsx(y,{})})]})}function ne(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i()}export{ne as default};
