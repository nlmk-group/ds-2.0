import{r as w,j as o,m as y,S as b,U as h}from"./iframe-DfRM7LXF.js";import{useMDXComponents as g}from"./index-s3G8uf3c.js";import{D as v}from"./index-C1EDehIY.js";import{DecoratorDefault as x}from"./Decorator.stories-Dc5cDQ_A.js";import{s as n,H as f,E as e}from"./Header-BrYoDfav.js";import{F as M}from"./FigmaEmbed-B7TLU8Q3.js";import{P as I,T}from"./Tests-Bl_4nCEK.js";import{T as i}from"./index-HQdxBngH.js";import{a as j}from"./argsTypes-DiaC3TqI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBdLC-OA.js";import"./index--nFqMQdT.js";import"./clsx-B-dksMZM.js";import"./index-DINl29EL.js";import"./index-D2Kz8Cjc.js";import"./index-DVB7RJDK.js";import"./24-CLWtzJRM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./useFloatingReferenceSync-B2OO83Jd.js";import"./index-DZtnbN5A.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CdQVfeSt.js";import"./index-B2VJ83In.js";import"./index-CbWBwQI3.js";import"./16-BAUAAMRf.js";import"./24-DPno0QZj.js";import"./24-D3pKJ1t3.js";import"./index-BRJ-Ua9i.js";import"./16-fn2TPoua.js";import"./index-eg8itsWK.js";import"./index-CN5IEPbV.js";import"./32-Bjn7Co6i.js";import"./24-D-2FQCka.js";import"./24-Bx5Ko4Zf.js";import"./24-CWpuPGUf.js";import"./24-Cp5qlwo7.js";import"./24-LAGNS7eA.js";import"./24-CSBD1goG.js";import"./24-DunoRfpD.js";import"./24-WTey2qPh.js";import"./16-B4jpe3eU.js";import"./16-UKcUYuG7.js";import"./index-CqGpx5F6.js";import"./index-Bbrpw_Ow.js";import"./index-rkxnOxqa.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BGl-7D4l.js";import"./index-BqE4MY4m.js";import"./index-wON6kCEo.js";import"./index-CRXfl0Vt.js";import"./index-UMg-UgH6.js";import"./sizesMapping-D8QavrGc.js";import"./index-DyLcPuXd.js";import"./index-DkFFLpKU.js";import"./index-BRcbigKy.js";import"./index-Bs9bu8w1.js";import"./index-CAWkMWRs.js";import"./index-B6F_DLS2.js";import"./index-D0L1Sk36.js";import"./index-CPQdLsa5.js";import"./index-CJQswicC.js";import"./index-DmFtZ-Ny.js";import"./index-wY5Em-zL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-nVILX9LA.js";import"./index-TH-r5Kbz.js";import"./index-Di10VY84.js";import"./index-CKR5Megx.js";import"./index-Baxn1nZN.js";import"./index-D3rQde2D.js";import"./index-W4qf1pCz.js";import"./index-B7Cg2_me.js";import"./index-BsZ7Kff4.js";import"./index-D2NcEt1k.js";import"./index-DUe44RxZ.js";import"./index-CzpPczJJ.js";import"./index-oHV1kBbR.js";import"./index-ydaVehZ7.js";import"./index-D_2odW5T.js";import"./index-B4s-8p3z.js";import"./index-C6yYWo4G.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DsM1Nq1m.js";import"./index-S_twP3Il.js";import"./index-BfvSM5Fb.js";import"./index-DTIMN90s.js";import"./index-syqq8EGq.js";import"./index-Dj81d4ZI.js";import"./index-Casca5S3.js";import"./index-Ba4KYGTt.js";import"./index-BvJOeOlN.js";import"./index-C6jCapMo.js";import"./index-BzMT43aM.js";import"./index-DsvUz8Pz.js";import"./index-Bk5TUS1W.js";import"./index-DRK0Fag0.js";import"./index-DUBAR20C.js";import"./index-DRVnFPP8.js";import"./ComboBox-Dt4xV1fo.js";import"./index-Cotw6HSH.js";import"./TreeList-k1lhCedt.js";import"./copyToClipboard-DB_KM_BY.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[t,r]=w.useState(0),p=`const positions = [
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
`,o.jsx(h,{children:o.jsx(C,{})})]})}function Tt(t={}){const{wrapper:r}={...g(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(a,{...t})}):a()}export{Tt as default};
