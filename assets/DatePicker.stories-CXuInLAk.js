import{U as p,M as f,e as k}from"./chunk-HLWAVYOI-CUNbYoBU.js";import{J as s,R as c}from"./index-4w0GPB2W.js";import{a,j as e,F as d}from"./clsx.m-CcuEzMhP.js";import{r as D}from"./index-CBqU2yxZ.js";import{s as n,H as g,E as o,T as y}from"./Tests-DLeBDtOW.js";import{F as v}from"./FigmaEmbed-C5HTb5rS.js";import{P as b}from"./Properties-B60pte38.js";import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import{T as h}from"./index-fbTu1Hcf.js";import"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import{a as w}from"./argsTypes-CagDWCIH.js";import{useMDXComponents as C}from"./index-DI5IigMn.js";import"./iframe-vZ3FYMC0.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BhBVvAvs.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BMC0l3yZ.js";import"./index-BO3pQ7ot.js";const l=()=>{const[t,r]=D.useState(0);return a("div",{className:n.wrapper,children:[e(g,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:n.tabs,children:a(s,{children:[e(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&a(d,{children:[e(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
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
