import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import{am as p,an as c,ao as l}from"./chunk-NUUEMKO5-CSFAqZJK.js";import{ad as o,aA as d}from"./index-xrS_0udq.js";import{DecoratorDefault as k}from"./Decorator.stories-B1hjNCvN.js";import{r as u}from"./index-Bnop-kX6.js";import{s as m,H as x,E as r}from"./Header-CXHxv9Ba.js";import{F as T}from"./FigmaEmbed-CxEiM5qP.js";import{P as f}from"./Properties-hjiScgGC.js";import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{a as b}from"./argsTypes-Be-OeByn.js";import"./iframe-DV-P8AuF.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./index-CT8gBKwQ.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1",j=()=>{const[i,t]=u.useState(0);return e.jsxs("div",{className:m.wrapper,children:[e.jsx(x,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",figmaLink:s}),e.jsx("div",{className:m.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>t(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>t(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>t(2)})]})}),Number(i)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:250,description:"Основной TimePicker. Позволяет выбирать время.",code:`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`}),e.jsx(r,{height:250,description:"TimePicker с лейблом.",code:`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    label="Время"
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`}),e.jsx(r,{height:250,description:"Отключенный TimePicker. Не доступен для взаимодействия.",code:`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    disabled
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`}),e.jsx(f,{argsTypes:b})]}),Number(i)===1&&e.jsx(T,{url:s})]})};function n(i){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/TimePicker/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["TimePicker.test.tsx"]}}),`
`,e.jsx(c,{of:k}),`
`,e.jsx(l,{children:e.jsx(j,{})})]})}function ie(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n()}export{ie as default};
