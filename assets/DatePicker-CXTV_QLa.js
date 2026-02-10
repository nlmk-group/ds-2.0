import{r as p,j as e,m as n,S as c,U as d}from"./iframe-BiRbIEmb.js";import{useMDXComponents as u}from"./index-DFADegm-.js";import{D as l}from"./index-C82bUzEQ.js";import{DecoratorDefault as f}from"./Decorator.stories-Cq2K7ZK_.js";import{s as i,H as D,E as o}from"./Header-BOuFM4z3.js";import{F as k}from"./FigmaEmbed-DXWxjqCs.js";import{P as x}from"./Properties-CTw5qxDW.js";import{T as j}from"./Tests-u2K_XUZf.js";import{T as a}from"./index-Bc-rzIjC.js";import{a as v}from"./argsTypes-4391VV54.js";import"./preload-helper-PPVm8Dsz.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CquVQWfr.js";import"./useFloatingReferenceSync-DMzAqXRO.js";import"./index-BkTYmJOH.js";import"./colorsMapping-C6bFIk14.js";import"./index-CuPa9ZS_.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-BE82tuFH.js";import"./types-TdnjS80C.js";import"./floating-ui.react-Cvixt3Zk.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-CAP2lHO4.js";import"./generateUUID-M57HTP56.js";import"./index-D4AgSARz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-DDnqRqhr.js";import"./index-BDGZFkub.js";import"./index-CDeU-sH7.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[t,r]=p.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(D,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
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
`,e.jsx(d,{children:e.jsx(b,{})})]})}function Ce(t={}){const{wrapper:r}={...u(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(m,{...t})}):m()}export{Ce as default};
