import{j as o}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as d}from"./index-CpguRmgc.js";import{ag as l,ah as u,ai as c}from"./chunk-HLWAVYOI-DvyrZeHL.js";import{Y as e,n as D}from"./index-BGpPsu4k.js";import{DecoratorDefault as w}from"./Decorator.stories-BP3ijO2B.js";import{r as b}from"./index-DQ2WTIsS.js";import{s as n,H as x,E as s}from"./Header-Bt-oxRaL.js";import{F as f}from"./FigmaEmbed-BRi3XZKB.js";import{P as v}from"./Properties-Do0KQQZq.js";import{T as g}from"./Tests-CSfu_vhY.js";import"./generateUUID-C8XntvAg.js";import"./index-ByiRgrzj.js";import"./index-Cd-Fhxqm.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-ehXB0alm.js";import"./index-CFeGFBie.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CTg4GkBi.js";import"./32-CkcGOl0S.js";import{a as j}from"./argsTypes-DxK5e4wP.js";import"./iframe-BX8EaEtl.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-FuqlRU2D.js";import"./index-BKbm6zW0.js";const y=()=>{const[t,r]=b.useState(0),p=`const positions = [
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
`,m=`
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
`;return o.jsxs("div",{className:n.wrapper,children:[o.jsx(x,{title:"Dropdown",description:"Dropdown позволяет пользователям выбирать одно действие из выпадающего меню",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown"}),o.jsx("div",{className:n.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),o.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o.jsxs(o.Fragment,{children:[o.jsx(s,{description:"Компонент Dropdown с одиночным выбором",code:a}),o.jsx(s,{description:"Dropdown в состоянии disabled",code:m}),o.jsx(v,{argsTypes:j})]}),Number(t)===1&&o.jsx(f,{url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-93163&t=nJ2tmRpMpk8P3SWk-0"}),Number(t)===2&&o.jsx(g,{componentName:"Dropdown"})]})};function i(t){return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Components/Dropdown/Info",component:D,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-44563&t=MxuLEhntbltPQsDg-0"},jest:["Dropdown.test.tsx"]}}),`
`,o.jsx(u,{of:w}),`
`,o.jsx(c,{children:o.jsx(y,{})})]})}function no(t={}){const{wrapper:r}={...d(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i()}export{no as default};
