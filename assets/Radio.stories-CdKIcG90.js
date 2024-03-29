import{U as d,M as h,e as u}from"./chunk-HLWAVYOI-VSo3NTqb.js";import{R as p}from"./index-CgSHB1U0.js";import{a,j as e,F as c}from"./jsx-runtime-2xDJh5tt.js";import{r as f}from"./index-CBqU2yxZ.js";import{s,H as y,E as m,T as b}from"./Tests-CMn2Ae2s.js";import{F as C}from"./FigmaEmbed-BZvBpmnf.js";import{P as R}from"./Properties-CxpA6DoR.js";/* empty css               */import{J as r}from"./index-DWTGGx_t.js";import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import{T as v}from"./index-BR2u5piM.js";import"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import"./32-BI8cdrFX.js";import{a as w}from"./argsTypes-B3LXWQAZ.js";import{useMDXComponents as k}from"./index-DI5IigMn.js";import"./iframe-D-x5ZCeL.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-C7bqoVJc.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-wp1zFx1N.js";import"./index-Y8Vz1tB_.js";const l=()=>{const[t,o]=f.useState(0);return a("div",{className:s.wrapper,children:[e(y,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29072&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:s.tabs,children:a(r,{children:[e(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&a(c,{children:[e(m,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
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
}`}),e(m,{description:"Компонент может быть неактивным для пользователя (disabled).",code:`import { Radio, Typography } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Radio disabled />
    <Typography variant="Body1-Bold" color="disabled">Я Радиокнопка</Typography>
  </>
)`}),e(R,{argsTypes:w})]}),Number(t)==1&&e(C,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29072&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e(v,{variant:"Heading4",color:"primary",children:e(b,{componentName:"Radio"})})]})};function n(t){return a(c,{children:[e(h,{title:"Components/Radio/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=455%3A4248&t=Ow8CbWmqTqgBRIZ9-0"},jest:["Radio.test.tsx"]}}),`
`,e(u,{name:"Docs",children:e(d,{children:e(l,{})})})]})}function S(t={}){const{wrapper:o}=Object.assign({},k(),t.components);return o?e(o,{...t,children:e(n,{...t})}):n()}const g=()=>e(d,{children:e(l,{})});g.storyName="Docs";g.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const i={title:"Components/Radio/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=455%3A4248&t=Ow8CbWmqTqgBRIZ9-0"},jest:["Radio.test.tsx"]},component:p,tags:["stories-mdx"],includeStories:["docs"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:S};const se=["docs"];export{se as __namedExportsOrder,i as default,g as docs};
