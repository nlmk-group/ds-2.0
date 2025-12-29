import{r as p,j as e,f as n,S as c,U as d}from"./iframe-zk5xXBtA.js";import{useMDXComponents as u}from"./index-CSMoqiIu.js";import{D as l}from"./index-DExNJYDn.js";import{DecoratorDefault as f}from"./Decorator.stories-XjMTlGWF.js";import{s as i,H as D,E as o}from"./Header-BMqOixcD.js";import{F as k}from"./FigmaEmbed-Bh-YhisY.js";import{P as x}from"./Properties-BH32KsQA.js";import{T as j}from"./Tests-BiRJAIxZ.js";import{T as a}from"./index-CGZqhooT.js";import{a as v}from"./argsTypes-4391VV54.js";import"./preload-helper-PPVm8Dsz.js";import"./hook-DdzhRkzq.js";import"./useFloatingReferenceSync-C6rFkWeV.js";import"./index-DlGInOJ7.js";import"./colorsMapping-C6bFIk14.js";import"./index-B9FTsAqd.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-CsA5WfEK.js";import"./types-TdnjS80C.js";import"./floating-ui.react-0uHpbrLG.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-BbV7Z3ze.js";import"./index-1zUxKm4P.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./24-BkbQ4VQu.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";import"./generateUUID-M57HTP56.js";import"./lodash-CJNAKYux.js";import"./index-6T6AONQH.js";import"./index-CTfBpVCI.js";import"./index-D9zx9C-F.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[t,r]=p.useState(0);return e.jsxs("div",{className:i.wrapper,children:[e.jsx(D,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:s}),e.jsx("div",{className:i.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
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
