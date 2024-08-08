import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as m}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as n,af as p,ag as d}from"./index-CY6AFN3F.js";import{Q as r,ae as c}from"./index-De6xVjfl.js";import{DecoratorDefault as l}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as i,H as h,E as a}from"./Header-LklIFrOQ.js";import{F as u}from"./FigmaEmbed-oiCkEjTf.js";import{P as g}from"./Properties-DzW4XCsL.js";import{T as b}from"./Tests-BNc6kC-d.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as x}from"./argsTypes-Bb6CK8cT.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const y=()=>{const[t,o]=f.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(h,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29072&mode=design&t=awyt3Fzj1XS6th7v-1"}),e.jsx("div",{className:i.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(a,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
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
)`}),e.jsx(g,{argsTypes:x})]}),Number(t)==1&&e.jsx(u,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29072&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e.jsx(b,{componentName:"Radio"})]})};function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/Radio/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=455%3A4248&t=Ow8CbWmqTqgBRIZ9-0"},jest:["Radio.test.tsx"]}}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(d,{children:e.jsx(y,{})})]})}function ie(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s()}export{ie as default};
