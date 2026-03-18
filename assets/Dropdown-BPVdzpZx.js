import{r as w,j as o,m as y,S as b,U as h}from"./iframe-CiNcYurr.js";import{useMDXComponents as g}from"./index-BaUxFINc.js";import{D as v}from"./index-BSRH1Q8Z.js";import{DecoratorDefault as x}from"./Decorator.stories-CMY6PrD1.js";import{s as n,H as f,E as e}from"./Header-CSF8pD8M.js";import{F as M}from"./FigmaEmbed-BgSjDHDG.js";import{P as I,T}from"./Tests-CuCRZHAs.js";import{T as i}from"./index-BGUexdM0.js";import{a as j}from"./argsTypes-DkTlcahz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BW3E00_d.js";import"./index-ChNBy6a5.js";import"./clsx-B-dksMZM.js";import"./index-C62Rz3pb.js";import"./index-DMves0z1.js";import"./index-Cc3zI-Zi.js";import"./24-ByfXT0PC.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./useFloatingReferenceSync-N5nxTT3h.js";import"./index-5P6wQBGT.js";import"./types-TdnjS80C.js";import"./floating-ui.react-kz-yE5c0.js";import"./index-BK6wfwgJ.js";import"./index-BgSHXntA.js";import"./16-DGHcuNOQ.js";import"./24-CM41UcFe.js";import"./24-Hf1fmE8D.js";import"./index-B5JbKXfP.js";import"./16-Bzi-BRTw.js";import"./index-Bmplgm43.js";import"./index-KTbM5ka_.js";import"./32-BIZlbf4u.js";import"./24-C4GcDMUE.js";import"./24-BpIVUa9s.js";import"./24-CuMa5vAe.js";import"./24-Dn2lqm-y.js";import"./24-WK1b6lfV.js";import"./24-CbtCS4aD.js";import"./24-Bt6gBPsC.js";import"./24-B1PR4U9W.js";import"./16-87YGvwqM.js";import"./16-D_wDoKTV.js";import"./index-Bm9ZTaRK.js";import"./index-BTbdo8J6.js";import"./index-DKGBjWfT.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BAO_EFiP.js";import"./index-nCUMzYDY.js";import"./index-ipRY-F18.js";import"./index-BnnFEDSq.js";import"./index-C0rE8VRv.js";import"./sizesMapping-D8QavrGc.js";import"./index-B6F5exii.js";import"./index-WfOI5tKp.js";import"./index-Di3Tf_NZ.js";import"./index-BSCmrBEE.js";import"./index-k-8s0_Jc.js";import"./index-DtsZdW_k.js";import"./index-BASSBPqG.js";import"./index-BDsxwAhX.js";import"./index-7l3FwTp_.js";import"./index-C19bQcdj.js";import"./index-BvLTT0Bc.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-xNLQpI5_.js";import"./index-tFFXhZ5g.js";import"./index-CctpJQDv.js";import"./index-BR9FB4KQ.js";import"./index-BPA0dgrp.js";import"./index-CC8vLZx7.js";import"./index-8zO7yMOe.js";import"./index-DGAhwUTe.js";import"./index-DXyu3KnF.js";import"./index-TMf-q5Af.js";import"./index-DwZld9Xy.js";import"./index-Bfa5kPEf.js";import"./index-CWXYOrIJ.js";import"./index-C5ZdoSw6.js";import"./index-G7kzCBo_.js";import"./index-BlcuogSf.js";import"./index-DiIsinIh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-MwaXdhFc.js";import"./index-Vn4Jr9MH.js";import"./index-Djipz1eP.js";import"./index-oG78am6U.js";import"./index-5yXCpVDE.js";import"./index-B5C_MfFj.js";import"./index-CPQDgGpy.js";import"./index-C-OYgTT5.js";import"./index-DpcbdR_F.js";import"./index-Dk716a-C.js";import"./index-BErnz41e.js";import"./index-Cd5eTZd_.js";import"./index-CUllg0k1.js";import"./index-BdhXnQ-k.js";import"./index-C-hD1Qn7.js";import"./index-Dcu3xPiM.js";import"./index-FqvjfKzP.js";import"./ComboBox-moTAJumu.js";import"./index-CLQNWR2i.js";import"./TreeList-Amzwxkac.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[t,r]=w.useState(0),p=`const positions = [
  { value: 'Сталь'},
  { value: 'Железо'},
  { value: 'Чугун', disabled: true},
  { value: 'Медь'},
  { value: 'Цинк'},
  { value: 'Титан'},
  { value: 'Хром'}
];`,d=`
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
`,s=`
import { Dropdown, DropdownMenuItem, IconSearchOutlined24, Typography } from '@nlmk/ds-2.0';

${p}

const App = () => {
  return (
    <Dropdown
      buttonChildren="Фильтры"
      variant="primary"
      color="brand"
      startIcon={<IconSearchOutlined24 />}
    >
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`,l=`
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

${p}

const App = () => {
  return (
    <Dropdown
      buttonChildren="Уведомления"
      startBadge={3}
      endBadge={12}
    >
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`,u=`
import { Dropdown, DropdownMenuItem, IconSearchOutlined24, Typography } from '@nlmk/ds-2.0';

${p}

const App = () => {
  return (
    <Dropdown
      iconButton={<IconSearchOutlined24 />}
      variant="secondary"
      color="ghost"
      size="s"
    >
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`,c=`
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

${p}

const App = () => {
  return (
    <Dropdown
      buttonChildren="Dropdown в портале"
      withPortal
      portalContainerId="root"
      buttonStyle={{ minWidth: 220 }}
      menuStyle={{ maxHeight: 260, overflowY: 'auto' }}
      className="custom-dropdown"
    >
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`,D=`
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
`;return o.jsxs("div",{className:n.wrapper,children:[o.jsx(f,{title:"Dropdown",description:"Dropdown отображает выпадающее меню действий, связанное с кнопкой-триггером. Компонент поддерживает наследование настроек Button, кастомный контент пунктов и рендер меню через портал.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown",figmaLink:m}),o.jsx("div",{className:n.tabs,children:o.jsxs(i,{children:[o.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),o.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),o.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{minHeight:400,description:"Базовый Dropdown со списком пунктов.",code:d}),o.jsx(e,{minHeight:400,description:"Dropdown в состоянии disabled.",code:D}),o.jsx(e,{minHeight:400,description:"Настройка кнопки через color, variant и startIcon.",code:s}),o.jsx(e,{minHeight:400,description:"Бейджи кнопки через startBadge и endBadge.",code:l}),o.jsx(e,{minHeight:400,description:"Иконка-кнопка через iconButton.",code:u}),o.jsx(e,{minHeight:400,description:"Рендер меню в портале и кастомные стили кнопки/меню.",code:c}),o.jsx(I,{argsTypes:j})]}),Number(t)===1&&o.jsx(M,{url:m}),Number(t)===2&&o.jsx(T,{componentName:"Dropdown"})]})};function a(t){return o.jsxs(o.Fragment,{children:[o.jsx(y,{title:"Components/Dropdown/Info",component:v,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=6070-44563&t=MxuLEhntbltPQsDg-0"},jest:["Dropdown.test.tsx"]}}),`
`,o.jsx(b,{of:x}),`
`,o.jsx(h,{children:o.jsx(C,{})})]})}function jt(t={}){const{wrapper:r}={...g(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(a,{...t})}):a()}export{jt as default};
