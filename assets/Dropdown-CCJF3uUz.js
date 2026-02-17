import{r as l,j as o,m as u,S as c,U as D}from"./iframe-DVMl8sUd.js";import{useMDXComponents as b}from"./index-CAw1kPaN.js";import{D as w}from"./index-D1p2RRKl.js";import{DecoratorDefault as x}from"./Decorator.stories-CV1kor5g.js";import{s as m,H as f,E as e}from"./Header-CsvOsVxR.js";import{F as v}from"./FigmaEmbed-BhcSTkWa.js";import{P as g}from"./Properties-D_4CcFrq.js";import{T as j}from"./Tests-BBMIGr6p.js";import{T as p}from"./index-BKzSZHPo.js";import{a as y}from"./argsTypes-D_33N--0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bp2By6__.js";import"./index-BiQzV66K.js";import"./clsx-B-dksMZM.js";import"./index-DBP40flF.js";import"./index-D9mSQM-g.js";import"./index-BDf5uUdD.js";import"./24-CWuMWKc-.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./useFloatingReferenceSync-7YTNcl0h.js";import"./index-BAf8pb65.js";import"./types-TdnjS80C.js";import"./floating-ui.react-DI7kI9D-.js";import"./index-c_cWNEvj.js";import"./index-B6wmWkKl.js";import"./16-DS6pkd6h.js";import"./24-B6TQx9cH.js";import"./24-zy_Eb8yW.js";import"./index-ckEmqNWl.js";import"./16-B_-dTBZH.js";import"./index-BkEnu_9U.js";import"./index-DXlbLt0r.js";import"./32-DlVlhRBC.js";import"./24-Dxm6iXAZ.js";import"./24-BpU9xG6s.js";import"./24-B8I_S3Z2.js";import"./24-dsfZEEjk.js";import"./24-wxW4P8Ns.js";import"./24-C_f6t1jh.js";import"./24-IUyK1JcU.js";import"./24-CEGSM-Jk.js";import"./16-CGhI_ilc.js";import"./16-BX8-DyZt.js";import"./index-CJD9gF_1.js";import"./index-DyUq_Ha8.js";import"./index-DFTiKKVp.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-qgNwGWRd.js";import"./index-BT2IFx4q.js";import"./index-CxKYaCMZ.js";import"./index-JdG74ms_.js";import"./index-C9A9Gets.js";import"./sizesMapping-D8QavrGc.js";import"./index-B9DaXCaB.js";import"./index-FpPixloK.js";import"./index-0BERZfC3.js";import"./index-CLCIgSqb.js";import"./index-DSj7G5qX.js";import"./index-DSuX4nuo.js";import"./index-iSEbVQin.js";import"./index-iQSHIB6o.js";import"./index-B85_aTFp.js";import"./index-BkR2z-Xc.js";import"./index-vUoPUndJ.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-C0GcVDfG.js";import"./index-B08U8Eji.js";import"./index-Ek0LlI95.js";import"./index-C45P8Ih7.js";import"./index-Dpl1hQuk.js";import"./index-CphKjyIZ.js";import"./index-Db0U5WML.js";import"./index-CQVR9uK0.js";import"./index-b7tpmXVt.js";import"./index-IJGfvyRE.js";import"./index-DAfqaa2G.js";import"./index-DTcCV-Je.js";import"./index-Cn8Pdxua.js";import"./index-DmVjcjny.js";import"./index-CPDTjkl_.js";import"./index-DESvXwG_.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-Bg1GYGiZ.js";import"./index-yBXS77Dw.js";import"./index-q_lPpOLF.js";import"./index-CYrbOrYX.js";import"./index-CAzTY8lY.js";import"./index-Dkm8jcwi.js";import"./index-C6xjJOKz.js";import"./index-wSRpoQej.js";import"./index-Du6dXHHd.js";import"./index-DiVXqmN1.js";import"./index-CBUFRF6B.js";import"./index-DMJQuZMx.js";import"./index-B3TyGJqx.js";import"./index-DqRlCSI9.js";import"./index-CD2cCXFu.js";import"./ComboBox-BKCir-_v.js";import"./index-BYHclbdr.js";import"./TreeList-WfFaeHrC.js";import"./copyToClipboard-DB_KM_BY.js";const s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",h=()=>{const[t,r]=l.useState(0),i=`const positions = [
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
