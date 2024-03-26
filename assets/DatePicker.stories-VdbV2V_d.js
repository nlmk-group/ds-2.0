import{U as p,M as f,e as k}from"./chunk-HLWAVYOI-D1fLzzdK.js";import{J as s,X as c}from"./index-VLfweUxF.js";import{a,j as e,F as d}from"./clsx.m-CcuEzMhP.js";import{r as D}from"./index-CBqU2yxZ.js";import{s as n,H as g,E as o,T as y}from"./Tests-CShFLtrb.js";import{F as v}from"./FigmaEmbed-DCpTw2G9.js";import{P as b}from"./Properties-Ci0YEq_Y.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-Dz0_KCIo.js";import{T as h}from"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{a as w}from"./argsTypes-ChAjl_bA.js";import{useMDXComponents as C}from"./index-DI5IigMn.js";import"./iframe-DpfJ_wxM.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-CImMyoKX.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BdQ446li.js";import"./index-BO3pQ7ot.js";const l=()=>{const[t,r]=D.useState(0);return a("div",{className:n.wrapper,children:[e(g,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:n.tabs,children:a(s,{children:[e(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&a(d,{children:[e(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker value={value} onChange={setValue} />
  );
};
export default App;
`}),e(o,{description:"В DatePicker с типом time пользователь может выбрать дату и время",code:`import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker type="time" value={value} onChange={setValue} />
  );
};
export default App;
`}),e(o,{description:"С типом period пользователь может выбрать период времени",code:`import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [valueFrom, setValueFrom] = useState(new Date());
  const [valueTo, setValueTo] = useState(new Date());

  return (
    <DatePicker type="period" valueFrom={valueFrom} valueTo={valueTo} onPeriodChange={(from, to) => { setValueFrom(from); setValueTo(to); }} />
  );
};
export default App;
`}),e(o,{description:"Возможно установить ограничение выбора дат в определенном диапазоне с помощью пропсов с приставкой enabled",code:`import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());
  const today = new Date();

  return (
    <DatePicker value={value} onChange={setValue} enabledFrom={new Date(today.getFullYear(), 0, 1)} enabledTo={new Date(today.getFullYear(), 11, 31)} />
  );
};
export default App;
`}),e(b,{argsTypes:w})]}),Number(t)===1&&e(v,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(h,{variant:"Heading4",color:"primary",children:e(y,{componentName:"DatePicker"})})]})};function m(t){return a(d,{children:[e(f,{title:"Components/DatePicker/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["DatePicker.test.tsx"]}}),`
`,e(k,{name:"Docs",children:e(p,{children:e(l,{})})})]})}function P(t={}){const{wrapper:r}=Object.assign({},C(),t.components);return r?e(r,{...t,children:e(m,{...t})}):m()}const u=()=>e(p,{children:e(l,{})});u.storyName="Docs";u.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const i={title:"Components/DatePicker/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["DatePicker.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:P};const pe=["docs"];export{pe as __namedExportsOrder,i as default,u as docs};
