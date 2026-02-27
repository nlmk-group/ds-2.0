import{r as l,j as o,m as u,S as c,U as D}from"./iframe-DXeeMUlS.js";import{useMDXComponents as b}from"./index-CAD-9v6k.js";import{D as w}from"./index-DnB9MQyQ.js";import{DecoratorDefault as x}from"./Decorator.stories-DJYsOzS0.js";import{s as m,H as f,E as e}from"./Header-BbzYBLL5.js";import{F as v}from"./FigmaEmbed-B75WbRzj.js";import{P as g}from"./Properties-CfZ39wJO.js";import{T as j}from"./Tests-C8_7PxaT.js";import{T as p}from"./index-CfeZzpgs.js";import{a as y}from"./argsTypes-Bes7inpG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVWmtr1D.js";import"./index-BHI3eI3g.js";import"./clsx-B-dksMZM.js";import"./index-DZc_Je-I.js";import"./index-DTjMDcvY.js";import"./index-Dgj4-etr.js";import"./24-BXEslVYf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./useFloatingReferenceSync-D1-TZfLV.js";import"./index-BAiw0P9_.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D6vM1ylD.js";import"./index-PnnjiXFF.js";import"./index-CuRTdhZw.js";import"./16-C_DfNdCf.js";import"./24-CBLD6MwG.js";import"./24-CHgX55v6.js";import"./index-D5lDtE6T.js";import"./16-eB7nAebF.js";import"./index-BeR8cofE.js";import"./index-IY4AFwls.js";import"./32-CGcqymZX.js";import"./24-DzDWDUmy.js";import"./24-DpK5eddQ.js";import"./24-BtzwVLrk.js";import"./24-BO1wVPpM.js";import"./24-Bdd9D4Ti.js";import"./24-BEN_WnoL.js";import"./24-yThwR12y.js";import"./24-CsKtuqYo.js";import"./16-DPaGmQaD.js";import"./16-9aNWehyQ.js";import"./index-CS-N0axT.js";import"./index-C5-mffQZ.js";import"./index-D6zPR6x_.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DKJTyuxe.js";import"./index-CIN4IkhO.js";import"./index-BMRC5SOo.js";import"./index-CpO2fZ6u.js";import"./index-BXmVr5wC.js";import"./sizesMapping-D8QavrGc.js";import"./index-CszhfbMz.js";import"./index-lmS2Z8XU.js";import"./index-DEU_C-CF.js";import"./index-Cd-LHCBs.js";import"./index-CwewWkbt.js";import"./index-Cs5S9q8Y.js";import"./index-CtqkFbMR.js";import"./index-BKA76Ifo.js";import"./index-BO90VTyW.js";import"./index-CM6F5ah0.js";import"./index-zw_MLesm.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CE7G7CXw.js";import"./index-njfCmUMO.js";import"./index-B5y6kVop.js";import"./index-5ou-46if.js";import"./index-C27yRONQ.js";import"./index-1AKTzjWH.js";import"./index-BSNOoPXq.js";import"./index-n2Qh6IgR.js";import"./index-Cip2TGbq.js";import"./index-DfF7qLpq.js";import"./index-DEuU-g3N.js";import"./index-PB-RB5Z0.js";import"./index-CI_iOl8v.js";import"./index-dihm09I5.js";import"./index-DNE-7B4q.js";import"./index-DR0r2zXh.js";import"./index-CQ-4hoeh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DSmhyhqI.js";import"./index-SGPmwNfG.js";import"./index-5p4PnV8M.js";import"./index-CocQ4obD.js";import"./index-DyZjUOWl.js";import"./index-BE70tGtN.js";import"./index-DW8OwNMu.js";import"./index-BONO3tZk.js";import"./index-FvFNIRYR.js";import"./index-BSOjBlgq.js";import"./index-aMJa5hfH.js";import"./index-DazVin3p.js";import"./index-6n6_bedz.js";import"./index-BYbdmuaq.js";import"./index-C3_SrVzw.js";import"./ComboBox-DH4E0EfK.js";import"./index-bQdqyENo.js";import"./TreeList-6f3aQ_TB.js";import"./copyToClipboard-DB_KM_BY.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",h=()=>{const[t,r]=l.useState(0),i=`const positions = [
  { value: 'Сталь'},
  { value: 'Железо'},
  { value: 'Чугун', disabled: true},
  { value: 'Медь'},
  { value: 'Цинк'},
  { value: 'Титан'},
  { value: 'Хром'}
];`,a=`
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

${i}

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

${i}

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
`;return o.jsxs("div",{className:m.wrapper,children:[o.jsx(f,{title:"Dropdown",description:"Dropdown позволяет пользователям выбирать одно действие из выпадающего меню",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown",figmaLink:s}),o.jsx("div",{className:m.tabs,children:o.jsxs(p,{children:[o.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),o.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),o.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{description:"Компонент Dropdown с одиночным выбором",code:a}),o.jsx(e,{description:"Dropdown в состоянии disabled",code:d}),o.jsx(g,{argsTypes:y})]}),Number(t)===1&&o.jsx(v,{url:s}),Number(t)===2&&o.jsx(j,{componentName:"Dropdown"})]})};function n(t){return o.jsxs(o.Fragment,{children:[o.jsx(u,{title:"Components/Dropdown/Info",component:w,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-44563&t=MxuLEhntbltPQsDg-0"},jest:["Dropdown.test.tsx"]}}),`
`,o.jsx(c,{of:x}),`
`,o.jsx(D,{children:o.jsx(h,{})})]})}function jt(t={}){const{wrapper:r}={...b(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(n,{...t})}):n()}export{jt as default};
