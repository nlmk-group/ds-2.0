import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as n}from"./index-CbmgEnq2.js";import"./index-CDNBfPUD.js";import{ag as r,R as p}from"./TreeList-KafSWxD5.js";import{DecoratorDefault as d}from"./Decorator.stories-B1hjNCvN.js";import{r as c}from"./index-Bnop-kX6.js";import{s,H as l,E as i}from"./Header-C1-O-XnO.js";import{F as u}from"./FigmaEmbed-BdmsVGpE.js";import{P as x}from"./Properties-C1uV5wRN.js";import{T as h}from"./Tests-DV49_lgf.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as b}from"./argsTypes-CAT5NRCx.js";import{c as f,e as g,U as j}from"./DocsRenderer-CFRXHY34-D9cGPbCT.js";import"./preview-B_gHuUAG.js";import"./iframe-Bi6NeCl1.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-AvLRxKSw.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165",y=()=>{const[t,o]=c.useState(0);return e.jsxs("div",{className:s.wrapper,children:[e.jsx(l,{title:"Radio",description:"Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio",figmaLink:a}),e.jsx("div",{className:s.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{description:"Компонент radio по умолчанию.",code:`import { useState } from 'react';
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
}`}),e.jsx(i,{description:"Компонент может быть неактивным для пользователя (disabled).",code:`import { Radio, Typography } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Radio disabled />
    <Typography variant="Body1-Bold" color="var(--steel-90)" style={{ opacity: '0.5' }}>Я Радиокнопка</Typography>
  </>
)`}),e.jsx(x,{argsTypes:b})]}),Number(t)==1&&e.jsx(u,{url:a}),Number(t)==2&&e.jsx(h,{componentName:"Radio"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Components/Radio/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165"},jest:["Radio.test.tsx"]}}),`
`,e.jsx(g,{of:d}),`
`,e.jsx(j,{children:e.jsx(y,{})})]})}function re(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(m,{...t})}):m()}export{re as default};
