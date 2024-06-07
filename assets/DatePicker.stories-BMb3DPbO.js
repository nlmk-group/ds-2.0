import{U as c,M as D,e as k}from"./chunk-HLWAVYOI-ezXNbOe3.js";import{L as s,Z as d}from"./index-BWU1r0v0.js";import{a,j as e,F as l}from"./jsx-runtime-2xDJh5tt.js";import{r as g}from"./index-CBqU2yxZ.js";import{s as n,H as v,E as o,T as y}from"./Tests-BwrYNA6X.js";import{F as P}from"./FigmaEmbed-CsOt3IFB.js";import{P as b}from"./Properties-BTOrmM9C.js";import"./generateUUID-Cuz4oBdd.js";import"./index-BG0PBiA5.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as h}from"./index-nWYpQihe.js";import"./index-B0rYwNoJ.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-wBSyW2WA.js";import"./32-Cvin1aiw.js";import{a as C}from"./argsTypes-CgPPpoLA.js";import{useMDXComponents as T}from"./index-DI5IigMn.js";import"./iframe-DXHWjJsc.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BhGRst0S.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-D1oOZMEU.js";import"./index-CMH8wQUv.js";const m="https://www.figma.com/file/kFsgdsZ2n2j8bDlKW67YTc/DS2.0-Calendar?type=design&node-id=1113-8156&mode=design&t=4GLACqnE6wnER5XM-0",u=()=>{const[t,r]=g.useState(0);return a("div",{className:n.wrapper,children:[e(v,{title:"DatePicker",description:"Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker",figmaLink:m}),e("div",{className:n.tabs,children:a(s,{children:[e(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&a(l,{children:[e(o,{description:"Выбор даты по умолчанию",code:`import { useState } from 'react';
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
`}),e(b,{argsTypes:C})]}),Number(t)===1&&e(P,{url:m}),Number(t)===2&&e(h,{variant:"Heading4",color:"primary",children:e(y,{componentName:"DatePicker"})})]})};function p(t){return a(l,{children:[e(D,{title:"Components/DatePicker/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["DatePicker.test.tsx"]}}),`
`,e(k,{name:"Docs",children:e(c,{children:e(u,{})})})]})}function w(t={}){const{wrapper:r}=Object.assign({},T(),t.components);return r?e(r,{...t,children:e(p,{...t})}):p()}const f=()=>e(c,{children:e(u,{})});f.storyName="Docs";f.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const i={title:"Components/DatePicker/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["DatePicker.test.tsx"]},component:d,tags:["stories-mdx"],includeStories:["docs"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const de=["docs"];export{de as __namedExportsOrder,i as default,f as docs};
