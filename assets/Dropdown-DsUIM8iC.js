import{r as w,j as o,m as y,S as b,U as h}from"./iframe-GHQjEpsb.js";import{useMDXComponents as g}from"./index-B8Cb6mvA.js";import{D as v}from"./index-DdQSMaZ7.js";import{DecoratorDefault as x}from"./Decorator.stories-CCUX5JA5.js";import{s as n,H as f,E as e}from"./Header-BXWzIQpV.js";import{F as M}from"./FigmaEmbed-Br_KB3qr.js";import{P as I,T}from"./Tests-uugUZoLC.js";import{T as i}from"./index-CV-3xeQ8.js";import{a as j}from"./argsTypes-MBWSHgtN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ByRS7bpi.js";import"./index-DJb1dn78.js";import"./clsx-B-dksMZM.js";import"./index-CwMtZ6LD.js";import"./index-B6KRA3ZB.js";import"./index-DDjduPuu.js";import"./24-BT3VdodN.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./useFloatingReferenceSync-BPKQ-_Ey.js";import"./index-gU83LE3e.js";import"./types-TdnjS80C.js";import"./floating-ui.react-C_9nhsMo.js";import"./index-CdSRMft-.js";import"./16-BqW1rNBw.js";import"./index-CxExZRzk.js";import"./index-CAqv-5FK.js";import"./32-Ch8UEd8D.js";import"./24-CvJc9f8d.js";import"./24-V-842Hd4.js";import"./24-BFYJrOCK.js";import"./24-CFV5ODyi.js";import"./24-CD438uYz.js";import"./24-NYxH4Wn7.js";import"./24-0wMAnnTO.js";import"./24-xN4MxKIZ.js";import"./24-Ec1WffcD.js";import"./24-Bf3BEapt.js";import"./16-Dc97ioNZ.js";import"./16-CwgMkzPr.js";import"./16-FVLzaVo_.js";import"./index-C3jjOzzq.js";import"./index-CbMtuaR9.js";import"./index-Cb1Vgv7Y.js";import"./index-CrbCcHei.js";import"./colorsMapping-C6bFIk14.js";import"./index-BhXb1I4E.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-9xxbj185.js";import"./index-BNokyj4D.js";import"./index-Dw4HSGie.js";import"./MenuItem-cwmhea0w.js";import"./sizesMapping-D8QavrGc.js";import"./index-D5tiDrSz.js";import"./index-DB2EGOHJ.js";import"./index-DfeOlOst.js";import"./index-qKoEXpn1.js";import"./index-BSlyJZDR.js";import"./index-CtknrjY8.js";import"./index-Cl3rcdje.js";import"./index-Cdnk68Wu.js";import"./index-CzKhCsRQ.js";import"./index-BrzikNzy.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-BEyzHPFb.js";import"./index-DW1qxpHI.js";import"./index-D40PzGBW.js";import"./index-DXM8gjTJ.js";import"./index-BgqdrSax.js";import"./index-GcZm5qpl.js";import"./index-DimFK3AM.js";import"./index-DubUX2Fh.js";import"./index-DyQbf3Bh.js";import"./index-wFL7JQ-x.js";import"./index-DWnr0vN9.js";import"./index-CelkrSVu.js";import"./index-UmocORK-.js";import"./index-D1KDSdER.js";import"./index-DkqDQe7V.js";import"./index-Bro8qKYA.js";import"./index-PXofUIZt.js";import"./index-DbSaRUy7.js";import"./index-BVyDT0rk.js";import"./index-B2itxtYy.js";import"./index-CEj65Quy.js";import"./index-hoM-fUW3.js";import"./index-CH2jIRDc.js";import"./index-B-moVc61.js";import"./index-B9gAWxrO.js";import"./index-DFBiLkHj.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-B_r75_Ag.js";import"./index-zf3baTui.js";import"./index-CUmnQamA.js";import"./index-DHdy5BVi.js";import"./index-BKpcjK-S.js";import"./index-DClnzsLR.js";import"./index-CD_D33wX.js";import"./index-CA7cvvjp.js";import"./index-C22prfeM.js";import"./index-CJWWB0hS.js";import"./ComboBox-B8JamNo2.js";import"./index-DmgKK2CE.js";import"./TreeList-DV7BpuGG.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[t,r]=w.useState(0),p=`const positions = [
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
