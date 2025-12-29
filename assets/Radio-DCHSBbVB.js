import{r as p,j as t,f as n,S as d,U as c}from"./iframe-CxLN9ksd.js";import{useMDXComponents as l}from"./index-CeChe1UL.js";import{a as u,R as x}from"./argsTypes-DOoJTJfx.js";import{DecoratorDefault as h}from"./Decorator.stories-DWPS1QvQ.js";import{s as i,H as b,E as s}from"./Header-B1Tht5jw.js";import{F as f}from"./FigmaEmbed-gwemKUEC.js";import{P as g}from"./Properties-Be6XSfnk.js";import{T as j}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as r}from"./index-Bs6EWGDb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./generateUUID-M57HTP56.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-LyR6p6RN.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165",y=()=>{const[e,o]=p.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(b,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:a}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t.jsx(r.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
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
