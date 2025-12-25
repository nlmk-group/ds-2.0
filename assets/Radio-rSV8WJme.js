import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-DG7FY6lx.js";import{ah as r,S as n}from"./TreeList-BIo8dH0F.js";import{DecoratorDefault as d}from"./Decorator.stories-D7iJJ_iz.js";import{r as c}from"./index-BcJSXhQi.js";import{s as i,H as l,E as s}from"./Header-DhwBuQVQ.js";import{F as h}from"./FigmaEmbed--kL_A2fK.js";import{P as u}from"./Properties-rSfIy85H.js";import{T as x}from"./Tests-B6X2FKmr.js";/* empty css               */import"./generateUUID-CpKhmTry.js";import"./index-CzNzGEue.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CaDFz05s.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-BZ5zMSTm.js";import"./index-C5rKoyII.js";import"./32-icvDJE6i.js";import{a as b}from"./argsTypes-B-FKfx3c.js";import{c as f,S as g,U as j}from"./DocsRenderer-CFRXHY34-LFjC-byd.js";import"./index-ChsGqxH_.js";import"./preview-CZLVd0OK.js";import"./iframe-C5vBzuxd.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-Pec5pZpL.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165",y=()=>{const[t,o]=c.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(l,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:a}),e.jsx("div",{className:i.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(s,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
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
)`}),e.jsx(u,{argsTypes:b})]}),Number(t)==1&&e.jsx(h,{url:a}),Number(t)==2&&e.jsx(x,{componentName:"Radio"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Components/Radio/Info",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165"},jest:["Radio.test.tsx"]}}),`
`,e.jsx(g,{of:d}),`
`,e.jsx(j,{children:e.jsx(y,{})})]})}function se(t={}){const{wrapper:o}={...p(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(m,{...t})}):m()}export{se as default};
