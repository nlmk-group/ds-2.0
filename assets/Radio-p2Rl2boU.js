import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as n}from"./index-CbmgEnq2.js";import{am as p,an as d,ao as c}from"./chunk-NUUEMKO5-D6WHLBUX.js";import{ag as r,U as l}from"./TreeList-nratkZsU.js";import{DecoratorDefault as u}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s,H as h,E as a}from"./Header-BTNj6gKe.js";import{F as b}from"./FigmaEmbed-CNAs0AGD.js";import{P as f}from"./Properties-DVs4NaDI.js";import{T as g}from"./Tests-C2SgintH.js";/* empty css               */import"./generateUUID-CKWu6hxV.js";import"./index-GIq1hJAH.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-BDwZaM9Z.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-8bMf8-rB.js";import"./index-DokmLR-l.js";import"./32-DOo0Pdng.js";import{a as j}from"./argsTypes-D45k_V9r.js";import"./iframe-6e6dWBoL.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-BeG1DPgZ.js";import"./index-B5g4YLzC.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165",y=()=>{const[t,o]=x.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(h,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:i}),e.jsx("div",{className:s.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(a,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
import { Radio } from '@nlmk/ds-2.0';

export default  App = () => {
  const [checked, setChecked] = useState('yes');
  const handleChange = (event) => {
    setChecked(event.target.value);
  };
  return (
    <>
      <Radio
        checked={checked === 'yes'}
        onChange={handleChange}
        value="yes"
        label="Yes"
      />
      <Radio
        checked={checked === 'no'}
        onChange={handleChange}
        value="no"
        label="No"
      />
    </>
  )
}`}),e.jsx(a,{description:"Компонент может быть неактивным для пользователя (disabled).",code:`import { Radio, Typography } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Radio disabled />
    <Typography variant="Body1-Bold" color="var(--steel-90)" style={{ opacity: '0.5' }}>Я Радиокнопка</Typography>
  </>
)`}),e.jsx(f,{argsTypes:j})]}),Number(t)==1&&e.jsx(b,{url:i}),Number(t)==2&&e.jsx(g,{componentName:"Radio"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/Radio/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165"},jest:["Radio.test.tsx"]}}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(c,{children:e.jsx(y,{})})]})}function re(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(m,{...t})}):m()}export{re as default};
