import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as l}from"./index-D2yTtfOz.js";import"./index-D51FTQdC.js";import{ah as e,G as u}from"./TreeList-DLKvZc0E.js";import{DecoratorDefault as c}from"./Decorator.stories-D7iJJ_iz.js";import{r as D}from"./index-BcJSXhQi.js";import{s,H as b,E as n}from"./Header-CVW-BCYd.js";import{F as w}from"./FigmaEmbed-BHXrOc1d.js";import{P as x}from"./Properties-CjgjNLHH.js";import{T as f}from"./Tests-B90gQPeH.js";import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import"./32-BKmqX1Rw.js";import{a as v}from"./argsTypes-B4y3bFt9.js";import{c as g,S as j,U as h}from"./DocsRenderer-CFRXHY34-D8yK2Ik1.js";import"./index-ChsGqxH_.js";import"./preview-IyyJl8-N.js";import"./iframe-qhDvbGIv.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-CstQolbU.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",y=()=>{const[t,r]=D.useState(0),p=`const positions = [
  { value: 'Сталь'},
  { value: 'Железо'},
  { value: 'Чугун', disabled: true},
  { value: 'Медь'},
  { value: 'Цинк'},
  { value: 'Титан'},
  { value: 'Хром'}
];`,m=`
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

${p}

const App = () => {
  return (
    <Dropdown buttonChildren='Dropdown'>
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`,d=`
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';
import { useState } from 'react';

${p}

const App = () => {
  return (
    <Dropdown disabled buttonChildren='Dropdown'>
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`;return o.jsxs("div",{className:s.wrapper,children:[o.jsx(b,{title:"Dropdown",description:"Dropdown позволяет пользователям выбирать одно действие из выпадающего меню",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown",figmaLink:i}),o.jsx("div",{className:s.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),o.jsx(e.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),o.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o.jsxs(o.Fragment,{children:[o.jsx(n,{description:"Компонент Dropdown с одиночным выбором",code:m}),o.jsx(n,{description:"Dropdown в состоянии disabled",code:d}),o.jsx(x,{argsTypes:v})]}),Number(t)===1&&o.jsx(w,{url:i}),Number(t)===2&&o.jsx(f,{componentName:"Dropdown"})]})};function a(t){return o.jsxs(o.Fragment,{children:[o.jsx(g,{title:"Components/Dropdown/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-44563&t=MxuLEhntbltPQsDg-0"},jest:["Dropdown.test.tsx"]}}),`
`,o.jsx(j,{of:c}),`
`,o.jsx(h,{children:o.jsx(y,{})})]})}function io(t={}){const{wrapper:r}={...l(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(a,{...t})}):a()}export{io as default};
