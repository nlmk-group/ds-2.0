import{j as o}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as l}from"./index-DtGqrCZN.js";import{ag as u,ah as c,ai as D}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as e,o as b}from"./index-ZojCmbpv.js";import{DecoratorDefault as w}from"./Decorator.stories-CffsLfgf.js";import{r as x}from"./index-Cu9bd8lq.js";import{s,H as f,E as n}from"./Header-CN10_-75.js";import{F as g}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as v}from"./Properties-Btz1YxCe.js";import{T as j}from"./Tests-CWaY5hDn.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as h}from"./argsTypes-C-QEbOC7.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",y=()=>{const[t,r]=x.useState(0),p=`const positions = [
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
`;return o.jsxs("div",{className:s.wrapper,children:[o.jsx(f,{title:"Dropdown",description:"Dropdown позволяет пользователям выбирать одно действие из выпадающего меню",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown",figmaLink:i}),o.jsx("div",{className:s.tabs,children:o.jsxs(e,{children:[o.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),o.jsx(e.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),o.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o.jsxs(o.Fragment,{children:[o.jsx(n,{description:"Компонент Dropdown с одиночным выбором",code:m}),o.jsx(n,{description:"Dropdown в состоянии disabled",code:d}),o.jsx(v,{argsTypes:h})]}),Number(t)===1&&o.jsx(g,{url:i}),Number(t)===2&&o.jsx(j,{componentName:"Dropdown"})]})};function a(t){return o.jsxs(o.Fragment,{children:[o.jsx(u,{title:"Components/Dropdown/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-44563&t=MxuLEhntbltPQsDg-0"},jest:["Dropdown.test.tsx"]}}),`
`,o.jsx(c,{of:w}),`
`,o.jsx(D,{children:o.jsx(y,{})})]})}function so(t={}){const{wrapper:r}={...l(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(a,{...t})}):a()}export{so as default};
