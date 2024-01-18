import{M as D,U as g}from"./chunk-HLWAVYOI-efe11a26.js";import{a as s,D as p}from"./index-28aa8d3c.js";import{a,j as e,F as c}from"./clsx.m-3764cf42.js";import{r as k}from"./index-f1f749bf.js";import{s as m,H as y,E as o,T as v}from"./Tests-1d807448.js";import{F as w}from"./FigmaEmbed-5df15644.js";import{P as b}from"./Properties-775b83eb.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as h}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as P}from"./argsTypes-7ddeea42.js";import{u as S}from"./index-4fb8b842.js";import"./iframe-960583ba.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-c338f20d.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-c0ac572a.js";import"./index-c1da5c13.js";const C=()=>{const[t,r]=k.useState(0),d=`
import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker value={value} onChange={setValue} />
  );
};
export default App;
`,l=`
import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker type="time" value={value} onChange={setValue} />
  );
};
export default App;
`,u=`
import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [valueFrom, setValueFrom] = useState(new Date());
  const [valueTo, setValueTo] = useState(new Date());

  return (
    <DatePicker type="period" valueFrom={valueFrom} valueTo={valueTo} onPeriodChange={(from, to) => { setValueFrom(from); setValueTo(to); }} />
  );
};
export default App;
`,f=`
import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());
  const today = new Date();

  return (
    <DatePicker value={value} onChange={setValue} enabledFrom={new Date(today.getFullYear(), 0, 1)} enabledTo={new Date(today.getFullYear(), 11, 31)} />
  );
};
export default App;
`;return a("div",{className:m.wrapper,children:[e(y,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:m.tabs,children:a(s,{children:[e(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&a(c,{children:[e(o,{description:"Выбор даты по умолчанию",code:d}),e(o,{description:"В DatePicker с типом time пользователь может выбрать дату и время",code:l}),e(o,{description:"С типом period пользователь может выбрать период времени",code:u}),e(o,{description:"Возможно установить ограничение выбора дат в определенном диапазоне с помощью пропсов с приставкой enabled",code:f}),e(b,{argsTypes:P})]}),Number(t)===1&&e(w,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(h,{variant:"Heading4",color:"primary",children:e(v,{componentName:"DatePicker"})})]})};function n(t){return a(c,{children:[e(D,{title:"Components/DatePicker/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["DatePicker.test.tsx"]}}),`
`,e(g,{children:e(C,{})})]})}function T(t={}){const{wrapper:r}=Object.assign({},S(),t.components);return r?e(r,{...t,children:e(n,{...t})}):n()}const F=()=>{throw new Error("Docs-only story")};F.parameters={docsOnly:!0};const i={title:"Components/DatePicker/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["DatePicker.test.tsx"]},component:p,tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:T};const ue=["__page"];export{ue as __namedExportsOrder,F as __page,i as default};
