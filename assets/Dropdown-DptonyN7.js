import{r as l,j as o,m as u,S as c,U as D}from"./iframe-DXgTh6Z1.js";import{useMDXComponents as b}from"./index-D5E0TNiY.js";import{D as w}from"./index-D6Zu8-bW.js";import{DecoratorDefault as x}from"./Decorator.stories-Dx4VbD6X.js";import{s as m,H as f,E as e}from"./Header-Cx_iqH4o.js";import{F as v}from"./FigmaEmbed-iMMFN0ni.js";import{P as g}from"./Properties-Bo87EZNs.js";import{T as j}from"./Tests-DMr2Ac1b.js";import{T as p}from"./index-9eeKqrVB.js";import{a as y}from"./argsTypes-Cn7wIQIP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xDA_A-aD.js";import"./index-CnUkpoWG.js";import"./clsx-B-dksMZM.js";import"./index-Crin4Hk2.js";import"./index-C0y4NBi5.js";import"./index-XmWHrheD.js";import"./24-sZrB_4qI.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./useFloatingReferenceSync-DqOI9czm.js";import"./index-DPmsdUVY.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CorT-KP5.js";import"./index-DUoRmuKU.js";import"./index-B4LxWNEW.js";import"./16-B8cH_bM_.js";import"./24-CmuppIra.js";import"./24-BhlAG-0S.js";import"./index-Bl4_x-Wd.js";import"./16-BbwgBG1i.js";import"./index-nfS7job7.js";import"./index-DdxGYpuj.js";import"./32-BZXccBNX.js";import"./24-C30wJjmO.js";import"./24-BbhvzLc-.js";import"./24-CHg1C3ZC.js";import"./24-CivDG4N5.js";import"./24-iRhnmlFx.js";import"./24-SIU2poG3.js";import"./24-Chag6Oqa.js";import"./24-BHCEpASW.js";import"./16-BY5Rr64R.js";import"./16-CRuPnIyY.js";import"./index-DYE4Bi1W.js";import"./index-Nm4Qdu1z.js";import"./index-ucJ0GnFn.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-jEb4Knwf.js";import"./index-DhFDZi2m.js";import"./index-Bd4lHRV0.js";import"./index-D5KpWfD5.js";import"./index-ciSDAmyI.js";import"./sizesMapping-D8QavrGc.js";import"./index-BVnvWAgp.js";import"./index-RnR2fccb.js";import"./index-BeCrIpLY.js";import"./index-v0wPdj4d.js";import"./index-gjDbOsdM.js";import"./index-C0IGfKtj.js";import"./index-wJn_BZHg.js";import"./index-BvFe6bW5.js";import"./index-BxMhlDR6.js";import"./index-Nw7Pfvlf.js";import"./index-CT-QPPa4.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-G2u_ACY6.js";import"./index-DJtob4fj.js";import"./index-BX7kJ5B_.js";import"./index-B4fWoCsE.js";import"./index-B61jHTw_.js";import"./index-Ck2v1TJK.js";import"./index-CRivC9UR.js";import"./index-BEPLxOmT.js";import"./index-DVjmoy4g.js";import"./index-BglbQ0D6.js";import"./index-BYuKbTqS.js";import"./index-BhusuGgV.js";import"./index-h3Z4FQnr.js";import"./index-BC9Rp5Jo.js";import"./index-IVdkDpCO.js";import"./index-ilhepyhL.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D9sJnCBD.js";import"./index-RB1pFFkL.js";import"./index-DavKZYHC.js";import"./index-gi2vkf8n.js";import"./index-B7Ar8a4x.js";import"./index-B_BoipIY.js";import"./index-CBxHuoj8.js";import"./index-ByGDn29v.js";import"./index-Ba6RId1F.js";import"./index-MG8YOKfD.js";import"./index-Cgkxu7Qk.js";import"./index-C_JFYl_R.js";import"./index-7iv8Ztsr.js";import"./index-B-LJSldl.js";import"./index-Bxth20eU.js";import"./ComboBox-KK8W0C81.js";import"./index-CdxmqZWy.js";import"./TreeList-CqXttnbr.js";import"./copyToClipboard-DB_KM_BY.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",h=()=>{const[t,r]=l.useState(0),i=`const positions = [
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
`,o.jsx(D,{children:o.jsx(h,{})})]})}function gt(t={}){const{wrapper:r}={...b(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(n,{...t})}):n()}export{gt as default};
