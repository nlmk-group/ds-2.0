import{r as p,j as e,m as n,S as c,U as d}from"./iframe-BPtLBEuk.js";import{useMDXComponents as u}from"./index-DY5aY42c.js";import{D as l}from"./index-BaLDjn2V.js";import{DecoratorDefault as f}from"./Decorator.stories-Bt-6wqMy.js";import{s as i,H as D,E as o}from"./Header-lxb-Wymn.js";import{F as k}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as x}from"./Properties-u6_xeg7P.js";import{T as j}from"./Tests-DUUoQDTR.js";import{T as a}from"./index-CX87Y9E4.js";import{a as v}from"./argsTypes-4391VV54.js";import"./preload-helper-PPVm8Dsz.js";import"./hook-JwTY4vm2.js";import"./useFloatingReferenceSync-C_yD6V-Z.js";import"./index-Dr7AntG3.js";import"./colorsMapping-C6bFIk14.js";import"./index-D-pLh_NR.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-jNLleeyk.js";import"./types-TdnjS80C.js";import"./floating-ui.react-tm3IGrEk.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-B8NQmRXS.js";import"./generateUUID-M57HTP56.js";import"./index-CDRf2h9x.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";import"./index-BUWLdeqz.js";import"./index-C5OaxW6Y.js";import"./index-DZQvJksB.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[t,r]=p.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(D,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
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
