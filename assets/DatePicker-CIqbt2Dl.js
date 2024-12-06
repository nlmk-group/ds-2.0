import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as n}from"./index-CbmgEnq2.js";import{am as p,an as c,ao as d}from"./chunk-NUUEMKO5-CSFAqZJK.js";import{ad as a,aj as u}from"./index-xrS_0udq.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s as i,H as D,E as o}from"./Header-CXHxv9Ba.js";import{F as k}from"./FigmaEmbed-CxEiM5qP.js";import{P as x}from"./Properties-hjiScgGC.js";import{T as j}from"./Tests-Bl6b2xe7.js";import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{a as v}from"./argsTypes-DuWxR8qA.js";import"./iframe-DV-P8AuF.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BXEf8Yvk.js";import"./index-CT8gBKwQ.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[t,r]=f.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(D,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
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
`}),e.jsx(x,{argsTypes:v})]}),Number(t)===1&&e.jsx(k,{url:s}),Number(t)===2&&e.jsx(j,{componentName:"DatePicker"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/DatePicker/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["DatePicker.test.tsx"]}}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(d,{children:e.jsx(b,{})})]})}function ie(t={}){const{wrapper:r}={...n(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(m,{...t})}):m()}export{ie as default};
