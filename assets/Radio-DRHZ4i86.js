import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-DBJrpVqj.js";import{af as r,R as n}from"./TreeList-Dx-quzH6.js";import{DecoratorDefault as d}from"./Decorator.stories-D7iJJ_iz.js";import{r as c}from"./index-BcJSXhQi.js";import{s as i,H as l,E as s}from"./Header-_Kvo3PlW.js";import{F as u}from"./FigmaEmbed-vM6gHhjJ.js";import{P as x}from"./Properties-Bc2FKMFa.js";import{T as h}from"./Tests-CRUl_eaF.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-0Ow6mfXJ.js";import"./index-DMhwcTYd.js";import"./index-Dl1-T1_Z.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DWrMXfke.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as b}from"./argsTypes-eAJP-cXB.js";import{c as f,S as g,U as j}from"./DocsRenderer-CFRXHY34-DGF3tSn7.js";import"./index-ChsGqxH_.js";import"./preview-Du4KB2sj.js";import"./iframe-CIjGc7rL.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-kFSDrB5T.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165",y=()=>{const[t,o]=c.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(l,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:a}),e.jsx("div",{className:i.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(s,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
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
}`}),e.jsx(s,{description:"Компонент может быть неактивным для пользователя (disabled).",code:`import { Radio, Typography } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Radio disabled />
    <Typography variant="Body1-Bold" color="var(--steel-90)" style={{ opacity: '0.5' }}>Я Радиокнопка</Typography>
  </>
)`}),e.jsx(x,{argsTypes:b})]}),Number(t)==1&&e.jsx(u,{url:a}),Number(t)==2&&e.jsx(h,{componentName:"Radio"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Components/Radio/Info",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165"},jest:["Radio.test.tsx"]}}),`
`,e.jsx(g,{of:d}),`
`,e.jsx(j,{children:e.jsx(y,{})})]})}function se(t={}){const{wrapper:o}={...p(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(m,{...t})}):m()}export{se as default};
