import{r as l,j as o,m as u,S as c,U as D}from"./iframe-BiRbIEmb.js";import{useMDXComponents as b}from"./index-DFADegm-.js";import{D as w}from"./index-DD1-reH9.js";import{DecoratorDefault as x}from"./Decorator.stories-Cq2K7ZK_.js";import{s as i,H as f,E as s}from"./Header-BOuFM4z3.js";import{F as v}from"./FigmaEmbed-DXWxjqCs.js";import{P as g}from"./Properties-CTw5qxDW.js";import{T as j}from"./Tests-u2K_XUZf.js";import{T as e}from"./index-Bc-rzIjC.js";import{a as y}from"./argsTypes-DQybtOHp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDGZFkub.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CuPa9ZS_.js";import"./24-CkBhKuNp.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./useFloatingReferenceSync-DMzAqXRO.js";import"./index-C19NiVwF.js";import"./index-DNr8MeMf.js";import"./index-BE82tuFH.js";import"./types-TdnjS80C.js";import"./floating-ui.react-Cvixt3Zk.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",h=()=>{const[t,r]=l.useState(0),p=`const positions = [
  { value: 'Сталь'},
  { value: 'Железо'},
  { value: 'Чугун', disabled: true},
  { value: 'Медь'},
  { value: 'Цинк'},
  { value: 'Титан'},
  { value: 'Хром'}
];`,a=`
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
`;return o.jsxs("div",{className:i.wrapper,children:[o.jsx(f,{title:"Dropdown",description:"Dropdown позволяет пользователям выбирать одно действие из выпадающего меню",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown",figmaLink:n}),o.jsx("div",{className:i.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),o.jsx(e.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),o.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o.jsxs(o.Fragment,{children:[o.jsx(s,{description:"Компонент Dropdown с одиночным выбором",code:a}),o.jsx(s,{description:"Dropdown в состоянии disabled",code:d}),o.jsx(g,{argsTypes:y})]}),Number(t)===1&&o.jsx(v,{url:n}),Number(t)===2&&o.jsx(j,{componentName:"Dropdown"})]})};function m(t){return o.jsxs(o.Fragment,{children:[o.jsx(u,{title:"Components/Dropdown/Info",component:w,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-44563&t=MxuLEhntbltPQsDg-0"},jest:["Dropdown.test.tsx"]}}),`
`,o.jsx(c,{of:x}),`
`,o.jsx(D,{children:o.jsx(h,{})})]})}function vo(t={}){const{wrapper:r}={...b(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(m,{...t})}):m()}export{vo as default};
