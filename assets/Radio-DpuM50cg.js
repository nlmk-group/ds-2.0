import{r as p,j as t,m as n,S as d,U as c}from"./iframe-BiRbIEmb.js";import{useMDXComponents as l}from"./index-DFADegm-.js";import{a as u,R as x}from"./argsTypes-DtNf2BsO.js";import{DecoratorDefault as h}from"./Decorator.stories-Cq2K7ZK_.js";import{s as i,H as b,E as s}from"./Header-BOuFM4z3.js";import{F as f}from"./FigmaEmbed-DXWxjqCs.js";import{P as g}from"./Properties-CTw5qxDW.js";import{T as j}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as r}from"./index-Bc-rzIjC.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUUID-M57HTP56.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165",y=()=>{const[e,o]=p.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(b,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:a}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
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
}`}),t.jsx(s,{description:"Компонент может быть неактивным для пользователя (disabled).",code:`import { Radio, Typography } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Radio disabled />
    <Typography variant="Body1-Bold" color="var(--steel-90)" style={{ opacity: '0.5' }}>Я Радиокнопка</Typography>
  </>
)`}),t.jsx(g,{argsTypes:u})]}),Number(e)==1&&t.jsx(f,{url:a}),Number(e)==2&&t.jsx(j,{componentName:"Radio"})]})};function m(e){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/Radio/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165"},jest:["Radio.test.tsx"]}}),`
`,t.jsx(d,{of:h}),`
`,t.jsx(c,{children:t.jsx(y,{})})]})}function nt(e={}){const{wrapper:o}={...l(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(m,{...e})}):m()}export{nt as default};
