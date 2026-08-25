import{r as D,j as o,m as y,S as b,U as h}from"./iframe-B07kYXZc.js";import{useMDXComponents as v}from"./index-CjGunqbw.js";import{D as g}from"./index-B2smvyda.js";import{DecoratorDefault as x}from"./Decorator.stories-B0DPksjy.js";import{s as n,H as f,E as e}from"./Header-BWIBo_NL.js";import{F as M}from"./FigmaEmbed-BR9XTrZ3.js";import{P as I,T}from"./Tests-Ddqg8ow3.js";import{T as i}from"./index-Cp_gevaj.js";import{a as j}from"./argsTypes-CmjsZ1Tv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0sw3GI3b.js";import"./index-6XMOLgd-.js";import"./clsx-B-dksMZM.js";import"./index-CTuNz-uH.js";import"./index-DlVjw_Iw.js";import"./index-CwfAWzLk.js";import"./16-DlJ0H2so.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-BvO12ahp.js";import"./useFloatingReferenceSync-DbQMH-3c.js";import"./index-COK94YB4.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CDNbLsbS.js";import"./index-IzK8PPRw.js";import"./16-pHftyEs8.js";import"./index-RqeUiUBw.js";import"./index-d9zAT72g.js";import"./32-BZSRNIXj.js";import"./32-QMp9o6yj.js";import"./24-Ccs2DJDL.js";import"./24-z3_ytzpX.js";import"./24-BwrZtwQH.js";import"./24-C1AoWM2r.js";import"./24-B7RF46pu.js";import"./24-Bx4D2aXR.js";import"./24-BEhrtGbq.js";import"./24-BbpZ1avt.js";import"./24-DMSuIbyM.js";import"./24-k5ICTj37.js";import"./16-B0Y2v5mC.js";import"./16-7D2L3psa.js";import"./16-Cw3IW5wm.js";import"./16-TYDaleCn.js";import"./index-BqdfdXLw.js";import"./index-DOy_CavS.js";import"./index-BoP19oSV.js";import"./index-BejtXQk_.js";import"./colorsMapping-C6bFIk14.js";import"./index-X7iBD8Fn.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bwgk6Sxb.js";import"./index-Cy6t6Ezk.js";import"./index-BBjCAhaL.js";import"./MenuItem-CIRsK8he.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNDfqOtX.js";import"./index-FEAihz4M.js";import"./index-B_xFOywu.js";import"./index-BQZWcYlM.js";import"./index-BTSmrueN.js";import"./index-DScTDMmh.js";import"./index-SJgOFp9t.js";import"./index-CSqN0A7u.js";import"./index-CFAtiP4c.js";import"./index-DbxPhvPc.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CJa8o8cf.js";import"./index-8nOplKbR.js";import"./index-B0gG98-R.js";import"./index-DgGoLy7y.js";import"./index-J7Njc-PT.js";import"./index-Dklje7JM.js";import"./index-CJa1u0t1.js";import"./index-C6ef_7XJ.js";import"./index-CMWxTnoS.js";import"./index-BoUKONT_.js";import"./index-DJFZ0Zdl.js";import"./index-CHgcPGEu.js";import"./index-Byj_yMGc.js";import"./index-ClDlTn4P.js";import"./index-UkfqzCFW.js";import"./index-fequeZGH.js";import"./index-B1FDloAn.js";import"./index-B8GZkxEV.js";import"./index-DjgiFHNl.js";import"./index-DeLkfcTC.js";import"./index-DafsOy6K.js";import"./index-DKxgdZhf.js";import"./index-BHmgEshV.js";import"./index-D3bQP97z.js";import"./index-mBiA4WNY.js";import"./index-Yuhpfewd.js";import"./index-T2XevpS6.js";import"./index-vOYRqFvw.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CGrwobg7.js";import"./index-DBMo2nZZ.js";import"./index-BEy1wh23.js";import"./index-OtFZfMgj.js";import"./index-D2n5mAtP.js";import"./index-DdwT-0gn.js";import"./index-C3EtJTZW.js";import"./index-BO8JYT_u.js";import"./index-DXXEuEBS.js";import"./index-Ca-tiPXF.js";import"./index-DpajdaDu.js";import"./ComboBox-Dwq3rPDU.js";import"./index-DqxhwPYk.js";import"./constants-eZqyrgzW.js";import"./TreeList-g0RzoTR-.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112",C=()=>{const[t,r]=D.useState(0),p=`const positions = [
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
