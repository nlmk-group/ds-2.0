import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as i}from"./index-D2yTtfOz.js";import"./index-ClE_HiBu.js";import{I as p}from"./index-VmJK6twV.js";import{DecoratorDefault as u}from"./Decorator.stories-D7iJJ_iz.js";import{r as l}from"./index-BcJSXhQi.js";import{s as r,H as d,E as s}from"./Header-Oa9t-Pn4.js";import{F as c}from"./FigmaEmbed-CygO8RXc.js";import{P as x}from"./Properties-VyK7iaGI.js";import{T as g}from"./Tests-Ckq55xcF.js";/* empty css               */import{af as a}from"./TreeList-BD5pX8WO.js";import"./generateUUID-Cr6BF8sx.js";import"./index-D9qQUMnP.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-DxgC_uyg.js";import"./index-BQAMZg9d.js";import"./index-C5rKoyII.js";import"./32-DMwn_7G4.js";import{a as f}from"./argsTypes-C-ukLl5C.js";import{c as b,S as j,U as h}from"./DocsRenderer-CFRXHY34-C4XLg-HW.js";import"./index-ChsGqxH_.js";import"./preview-DdssC5kB.js";import"./iframe-Dftw_WZG.js";import"./index-CRm92gKC.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-HQY6Owgx.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const o="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=502-2809&t=HhCDuaOuzHu5rgyf-1",I=()=>{const[t,n]=l.useState(0);return e.jsxs("div",{className:r.wrapper,children:[e.jsx(d,{title:"InputRange",description:`Компонент InputRange отражает диапазон значений вдоль полосы, из которой пользователи могут выбрать диапазон
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
`,e.jsx(h,{children:e.jsx(I,{})})]})}function se(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m()}export{se as default};
