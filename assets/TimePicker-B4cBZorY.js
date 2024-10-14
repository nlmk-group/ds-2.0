import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as n}from"./index-CpguRmgc.js";import{ag as a,ah as p,ai as c}from"./chunk-HLWAVYOI-DE0BXQ17.js";import{a0 as o,ar as d}from"./index-C8yIAa62.js";import{DecoratorDefault as l}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as m,H as k,E as r}from"./Header-BTkqM39J.js";import{F as u}from"./FigmaEmbed-B7m476zj.js";import{P as g}from"./Properties-fBpJ-g-x.js";import"./generateUUID-7LaMQRml.js";import"./index-KO6O_hQW.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-StdbG6rE.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-Bl5L39jK.js";import"./32-l5SNSvvS.js";import{a as T}from"./argsTypes-Be-OeByn.js";import"./iframe-CCXtlOg0.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./index-BKbm6zW0.js";const x=()=>{const[i,t]=f.useState(0);return e.jsxs("div",{className:m.wrapper,children:[e.jsx(k,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),e.jsx("div",{className:m.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>t(0)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>t(2)})]})}),Number(i)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:250,description:"Основной TimePicker. Позволяет выбирать время.",code:`import { TimePicker } from '@nlmk/ds-2.0';

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
`}),e.jsx(g,{argsTypes:T})]}),Number(i)===1&&e.jsx(u,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"})]})};function s(i){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/TimePicker/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["TimePicker.test.tsx"]}}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(c,{children:e.jsx(x,{})})]})}function te(i={}){const{wrapper:t}={...n(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s()}export{te as default};
