import{r as p,j as e,m as n,S as c,U as d}from"./iframe-DUDunD5j.js";import{useMDXComponents as u}from"./index-CDbv5Jgm.js";import{D as l}from"./index-B3i54paY.js";import{DecoratorDefault as f}from"./Decorator.stories-DJdCAXEf.js";import{s as i,H as D,E as o}from"./Header-BrZEypuE.js";import{F as k}from"./FigmaEmbed-DovFRgvJ.js";import{P as x}from"./Properties-CcP2VO-p.js";import{T as j}from"./Tests-CSK3RYMm.js";import{T as a}from"./index-DntXJei4.js";import{a as v}from"./argsTypes-4391VV54.js";import"./preload-helper-PPVm8Dsz.js";import"./hook-BrgnIdXy.js";import"./useFloatingReferenceSync-DB9ttEJp.js";import"./index-BBEOAWV5.js";import"./colorsMapping-C6bFIk14.js";import"./index-YMfOmFJ1.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./index-BpbvmvtH.js";import"./types-TdnjS80C.js";import"./floating-ui.react-DkiUDhV9.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-CuTegHCu.js";import"./generateUUID-M57HTP56.js";import"./index-DdmbHqmW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./index-z_YeHj0K.js";import"./index-aoSKrGJR.js";import"./index-rc7u3FmU.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[t,r]=p.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(D,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
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
