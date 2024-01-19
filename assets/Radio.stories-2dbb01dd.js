import{M as c,U as l}from"./chunk-HLWAVYOI-3f61a7cc.js";import{R as p}from"./index-e99519f1.js";import{a,j as e,F as d}from"./clsx.m-3764cf42.js";import{r as g}from"./index-f1f749bf.js";import{s as m,H as h,E as s,T as u}from"./Tests-b01304cc.js";import{F as f}from"./FigmaEmbed-cb81cfd0.js";import{P as b}from"./Properties-8db9f8ae.js";/* empty css               */import{a as r}from"./index-28aa8d3c.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as y}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as C}from"./argsTypes-9bdc84ff.js";import{u as w}from"./index-4fb8b842.js";import"./iframe-e135f03c.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-01ead064.js";import"./index-29c055d1.js";import"./.jest-test-results-279ee287.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./index-c1da5c13.js";const R=()=>{const[t,o]=g.useState(0);return a("div",{className:m.wrapper,children:[e(h,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29072&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:m.tabs,children:a(r,{children:[e(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&a(d,{children:[e(s,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
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
      />
      <Radio
        checked={checked === 'no'}
        onChange={handleChange}
        value="no"
      />
    </>
  )
}`}),e(s,{description:"Компонент может быть неактивным для пользователя (disabled).",code:`import { Radio, Typography } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Radio disabled />
    <Typography variant="Body1-Bold" color="disabled">Я Радиокнопка</Typography>
  </>
)`}),e(b,{argsTypes:C})]}),Number(t)==1&&e(f,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29072&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e(y,{variant:"Heading4",color:"primary",children:e(u,{componentName:"Radio"})})]})};function n(t){return a(d,{children:[e(c,{title:"Components/Radio/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=455%3A4248&t=Ow8CbWmqTqgBRIZ9-0"},jest:["Radio.test.tsx"]}}),`
`,e(l,{children:e(R,{})})]})}function v(t={}){const{wrapper:o}=Object.assign({},w(),t.components);return o?e(o,{...t,children:e(n,{...t})}):n()}const k=()=>{throw new Error("Docs-only story")};k.parameters={docsOnly:!0};const i={title:"Components/Radio/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=455%3A4248&t=Ow8CbWmqTqgBRIZ9-0"},jest:["Radio.test.tsx"]},component:p,tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:v};const de=["__page"];export{de as __namedExportsOrder,k as __page,i as default};
