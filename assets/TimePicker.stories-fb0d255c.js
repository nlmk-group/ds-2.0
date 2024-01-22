import{M as T,U as f}from"./chunk-HLWAVYOI-e1995a53.js";import{a as r,$ as p}from"./index-dd92ee6a.js";import{a as o,j as e,F as c}from"./clsx.m-3764cf42.js";import{r as u}from"./index-f1f749bf.js";import{s,H as k,E as n,T as b}from"./Tests-d094d0a4.js";import{F as h}from"./FigmaEmbed-7b496b2b.js";import{P as w}from"./Properties-2883da47.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as y}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as P}from"./argsTypes-e2c854a8.js";import{u as C}from"./index-4fb8b842.js";import"./iframe-598e9222.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-ac5f6bbf.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-9aba1bea.js";import"./index-c1da5c13.js";const v=()=>{const[t,i]=u.useState(0),d=`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`,l=`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    label="Время"
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`,g=`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    disabled
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`;return o("div",{className:s.wrapper,children:[e(k,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:s.tabs,children:o(r,{children:[e(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&o(c,{children:[e(n,{height:250,description:"Основной TimePicker. Позволяет выбирать время.",code:d}),e(n,{height:250,description:"TimePicker с лейблом.",code:l}),e(n,{height:250,description:"Отключенный TimePicker. Не доступен для взаимодействия.",code:g}),e(w,{argsTypes:P})]}),Number(t)===1&&e(h,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(y,{variant:"Heading4",color:"primary",children:e(b,{componentName:"Select"})})]})};function a(t){return o(c,{children:[e(T,{title:"Components/TimePicker/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["TimePicker.test.tsx"]}}),`
`,e(f,{children:e(v,{})})]})}function N(t={}){const{wrapper:i}=Object.assign({},C(),t.components);return i?e(i,{...t,children:e(a,{...t})}):a()}const D=()=>{throw new Error("Docs-only story")};D.parameters={docsOnly:!0};const m={title:"Components/TimePicker/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["TimePicker.test.tsx"]},component:p,tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:N};const le=["__page"];export{le as __namedExportsOrder,D as __page,m as default};
