import{j as o}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as d}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as l,af as u,ag as c}from"./index-CY6AFN3F.js";import{Q as e,a7 as w}from"./index-De6xVjfl.js";import{DecoratorDefault as D}from"./Decorator.stories-BP3ijO2B.js";import{r as b}from"./index-DQ2WTIsS.js";import{s,H as f,E as n}from"./Header-LklIFrOQ.js";import{F as g}from"./FigmaEmbed-oiCkEjTf.js";import{P as x}from"./Properties-DzW4XCsL.js";import{T as v}from"./Tests-BNc6kC-d.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as y}from"./argsTypes-EoFEwxoB.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const j=()=>{const[t,r]=b.useState(0),p=`const positions = [
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
    <Dropdown>
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
    <Dropdown disabled>
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`;return o.jsxs("div",{className:s.wrapper,children:[o.jsx(f,{title:"Dropdown",description:"Dropdown позволяет пользователям выбирать одно действие из выпадающего меню",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown",figmaLink:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-93163&t=nJ2tmRpMpk8P3SWk-0"}),o.jsx("div",{className:s.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),o.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o.jsxs(o.Fragment,{children:[o.jsx(n,{description:"Компонент Dropdown с одиночным выбором",code:a}),o.jsx(n,{description:"Dropdown в состоянии disabled",code:m}),o.jsx(x,{argsTypes:y})]}),Number(t)===1&&o.jsx(g,{url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-93163&t=nJ2tmRpMpk8P3SWk-0"}),Number(t)===2&&o.jsx(v,{componentName:"Dropdown"})]})};function i(t){return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Components/Dropdown/Info",component:w,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-44563&t=MxuLEhntbltPQsDg-0"},jest:["Dropdown.test.tsx"]}}),`
`,o.jsx(u,{of:D}),`
`,o.jsx(c,{children:o.jsx(j,{})})]})}function no(t={}){const{wrapper:r}={...d(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i()}export{no as default};
