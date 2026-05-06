import{r as D,j as o,m as y,S as b,U as h}from"./iframe-D_geb98U.js";import{useMDXComponents as v}from"./index-DEBIPiNl.js";import{D as g}from"./index-CS6EpHju.js";import{DecoratorDefault as x}from"./Decorator.stories-CtbByLLQ.js";import{s as n,H as f,E as e}from"./Header-Cp8G-9CM.js";import{F as M}from"./FigmaEmbed-CpTK-aEq.js";import{P as I,T}from"./Tests-BFrILV54.js";import{T as i}from"./index-Cbxger2I.js";import{a as j}from"./argsTypes-BkbNYfS4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzpyBbEs.js";import"./index-DVKWK4-j.js";import"./clsx-B-dksMZM.js";import"./index-CV6hzqCP.js";import"./index-Dc0Smdiq.js";import"./index-DY6Wauvi.js";import"./16-B1x2jzVj.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-Cpo6jKx5.js";import"./useFloatingReferenceSync-Uu7LJ-ip.js";import"./index-Ds2s981t.js";import"./types-TdnjS80C.js";import"./floating-ui.react-C_U8tQaz.js";import"./index-BOQlEYEy.js";import"./16-ytttYgy7.js";import"./index-CRYZ0TC_.js";import"./index-DXqbsWBL.js";import"./32-CJsTn9GR.js";import"./32-CSeewk7k.js";import"./24-Dks7beat.js";import"./24-wTI-a7Qj.js";import"./24-B20dUB8u.js";import"./24-ckbWkRdy.js";import"./24-8OlOIiot.js";import"./24-D4VquirR.js";import"./24-Dh3bHrWZ.js";import"./24-l18nGkor.js";import"./24-CvT8JzoY.js";import"./24-Bgy5v27I.js";import"./16-CQHHA9le.js";import"./16-ZmyXGQ60.js";import"./16-Dy6XUum1.js";import"./16-CAqgkR1g.js";import"./index-gGDdMD4Z.js";import"./index-DskztHOz.js";import"./index-DziAzwH5.js";import"./index-CdX0h1x8.js";import"./colorsMapping-C6bFIk14.js";import"./index-C9yrXfLO.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DtINpL4z.js";import"./index-hZv1vyiY.js";import"./index-CHLxKCE-.js";import"./MenuItem-RKU4owtw.js";import"./sizesMapping-D8QavrGc.js";import"./index-CVwy7aMy.js";import"./index-B82E4k1I.js";import"./index-DurTHLjl.js";import"./index-BmAyGkEC.js";import"./index-B207YH3y.js";import"./index-D2pVVHYb.js";import"./index-D-VB7JJf.js";import"./index-CNpEsrMB.js";import"./index-B4KF8t6p.js";import"./index-Col1tz7G.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CTGxoHFE.js";import"./index-CmX5uS9r.js";import"./index-8pjDucJj.js";import"./index-XAV3gP1c.js";import"./index-CqItqX1T.js";import"./index-B4Lvy_xN.js";import"./index-BsU4-z2O.js";import"./index-DGVoojgO.js";import"./index-BJ_EJkVt.js";import"./index-DWfoHQZi.js";import"./index-BEr6Yej_.js";import"./index-DsiBS6O_.js";import"./index-BRmfAQM5.js";import"./index-7M5-vNro.js";import"./index-BBQxN6Hh.js";import"./index-WEJ-wiwM.js";import"./index-B0vyHZT0.js";import"./index-DOrebIlF.js";import"./index-DUNXWP3K.js";import"./index-CRQ1F-kQ.js";import"./index-IhMb7mOd.js";import"./index-Dk_eh4hq.js";import"./index-BHIlvHWF.js";import"./index-CmZWJowM.js";import"./index-CUlZZogs.js";import"./index-CdZRxSQR.js";import"./index-BCQKokda.js";import"./index-Cml4jBdN.js";import"./index-DEt2dyhg.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CsAs8tg2.js";import"./index-Tlp5L_x6.js";import"./index-Bg9A9_j3.js";import"./index-BRE8g-Px.js";import"./index-vrktoCUN.js";import"./index-DwD6M5XP.js";import"./index-Cd99GZ_P.js";import"./index-B34m8eE0.js";import"./index-D0nJVAiy.js";import"./index-B5MzhOMl.js";import"./ComboBox-ru-vv14S.js";import"./index-NvAUagqQ.js";import"./constants-DBot8vvE.js";import"./TreeList-DmNOIBRU.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112",C=()=>{const[t,r]=D.useState(0),p=`const positions = [
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
`,w=`
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
`;return o.jsxs("div",{className:n.wrapper,children:[o.jsx(f,{title:"Dropdown",description:"Dropdown отображает выпадающее меню действий, связанное с кнопкой-триггером. Компонент поддерживает наследование настроек Button, кастомный контент пунктов и рендер меню через портал.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown",figmaLink:m}),o.jsx("div",{className:n.tabs,children:o.jsxs(i,{children:[o.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),o.jsx(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),o.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{minHeight:400,description:"Базовый Dropdown со списком пунктов.",code:a}),o.jsx(e,{minHeight:400,description:"Dropdown в состоянии disabled.",code:w}),o.jsx(e,{minHeight:400,description:"Настройка кнопки через color, variant и startIcon.",code:s}),o.jsx(e,{minHeight:400,description:"Бейджи кнопки через startBadge и endBadge.",code:l}),o.jsx(e,{minHeight:400,description:"Иконка-кнопка через iconButton.",code:u}),o.jsx(e,{minHeight:400,description:"Рендер меню в портале и кастомные стили кнопки/меню.",code:c}),o.jsx(I,{argsTypes:j})]}),Number(t)===1&&o.jsx(M,{url:m}),Number(t)===2&&o.jsx(T,{componentName:"Dropdown"})]})};function d(t){return o.jsxs(o.Fragment,{children:[o.jsx(y,{title:"Components/Dropdown/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112"},jest:["Dropdown.test.tsx"]}}),`
`,o.jsx(b,{of:x}),`
`,o.jsx(h,{children:o.jsx(C,{})})]})}function Ht(t={}){const{wrapper:r}={...v(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(d,{...t})}):d()}export{Ht as default};
