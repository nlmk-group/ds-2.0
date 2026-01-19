import{r as p,j as e,m as n,S as c,U as d}from"./iframe-tXE4xoYc.js";import{useMDXComponents as u}from"./index-BU2Hc1BN.js";import{D as l}from"./index-DahhhfTS.js";import{DecoratorDefault as f}from"./Decorator.stories-DX_mk-19.js";import{s as i,H as D,E as o}from"./Header-D7Lkw1fr.js";import{F as k}from"./FigmaEmbed-DGce_rmk.js";import{P as x}from"./Properties-3Caa_vUq.js";import{T as j}from"./Tests-COuvSTuJ.js";import{T as a}from"./index-BdAkzp84.js";import{a as v}from"./argsTypes-4391VV54.js";import"./preload-helper-PPVm8Dsz.js";import"./hook-CbfYfmAI.js";import"./useFloatingReferenceSync-BoqrGUtC.js";import"./index-CnPKv_iQ.js";import"./colorsMapping-C6bFIk14.js";import"./index-UIqxTLHU.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-mWxT_Pnt.js";import"./types-TdnjS80C.js";import"./floating-ui.react-rIU8UbdJ.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-q3_oAMiW.js";import"./generateUUID-M57HTP56.js";import"./index-BavAFXG7.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./24-CGaTDQAV.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";import"./index-DnvHMcnj.js";import"./index-DfJPKXXV.js";import"./index-BJ8dPBsg.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[t,r]=p.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(D,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker value={value} onChange={setValue} />
  );
};
export default App;
`}),e.jsx(o,{description:"В DatePicker с типом time пользователь может выбрать дату и время",code:`import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker type="time" value={value} onChange={setValue} />
  );
};
export default App;
`}),e.jsx(o,{description:"С типом period пользователь может выбрать период времени",code:`import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [valueFrom, setValueFrom] = useState(new Date());
  const [valueTo, setValueTo] = useState(new Date());

  return (
    <DatePicker type="period" valueFrom={valueFrom} valueTo={valueTo} onPeriodChange={(from, to) => { setValueFrom(from); setValueTo(to); }} />
  );
};
export default App;
`}),e.jsx(o,{description:"Возможно установить ограничение выбора дат в определенном диапазоне с помощью пропсов с приставкой enabled",code:`import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());
  const today = new Date();

  return (
    <DatePicker value={value} onChange={setValue} enabledFrom={new Date(today.getFullYear(), 0, 1)} enabledTo={new Date(today.getFullYear(), 11, 31)} />
  );
};
export default App;
`}),e.jsx(x,{argsTypes:v})]}),Number(t)===1&&e.jsx(k,{url:s}),Number(t)===2&&e.jsx(j,{componentName:"DatePicker"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/DatePicker/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["DatePicker.test.tsx"]}}),`
`,e.jsx(c,{of:f}),`
`,e.jsx(d,{children:e.jsx(b,{})})]})}function Pe(t={}){const{wrapper:r}={...u(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(m,{...t})}):m()}export{Pe as default};
