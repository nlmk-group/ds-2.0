import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-BnEi3PKH.js";import{af as o,aP as a}from"./TreeList-CKujmJpy.js";import{DecoratorDefault as c}from"./Decorator.stories-D7iJJ_iz.js";import{r as l}from"./index-BcJSXhQi.js";import{s as m,H as d,E as r}from"./Header-W0qZdeSK.js";import{F as k}from"./FigmaEmbed-DxGAIiFc.js";import{P as x}from"./Properties-Bvh17lDI.js";import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as f}from"./argsTypes-D8MQ3tZn.js";import{c as u,S as T,U as b}from"./DocsRenderer-CFRXHY34-Bm_YSRyE.js";import"./index-ChsGqxH_.js";import"./preview-DJTt2ryF.js";import"./iframe-DlyCZmm1.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1",g="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",j=()=>{const[i,t]=l.useState(0);return e.jsxs("div",{className:m.wrapper,children:[e.jsx(d,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:g,figmaLink:s}),e.jsx("div",{className:m.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>t(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>t(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>t(2)})]})}),Number(i)===0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{height:250,description:"Основной TimePicker. Позволяет выбирать время.",code:`import { TimePicker } from '@nlmk/ds-2.0';

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
`}),e.jsx(x,{argsTypes:f})]}),Number(i)===1&&e.jsx(k,{url:s})]})};function n(i){return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Components/TimePicker/Info",component:a,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1"},jest:["TimePicker.test.tsx"]}}),`
`,e.jsx(T,{of:c}),`
`,e.jsx(b,{children:e.jsx(j,{})})]})}function me(i={}){const{wrapper:t}={...p(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n()}export{me as default};
