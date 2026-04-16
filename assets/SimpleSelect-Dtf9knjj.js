import{r as v,j as e,m as x,S as f,U as g}from"./iframe-CHHQDVoX.js";import{useMDXComponents as h}from"./index-B1LTtkqD.js";import{S as I}from"./index-CzvxnUYC.js";import{DecoratorDefault as j}from"./Decorator.stories-DNZYnr5K.js";import{s as m,H as C,E as l}from"./Header-C4Gtm_L5.js";import{F as k}from"./FigmaEmbed-pveWd2DR.js";import{P as O,T as V}from"./Tests-B0qmEzAm.js";import{T as p}from"./index-BTZVm9Y3.js";import{a as A}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BEx0Kzll.js";import"./index-DYQTidD-.js";import"./index-C5RO9eqh.js";import"./clsx-B-dksMZM.js";import"./index-CwmmLxy5.js";import"./24-CD6xrv2j.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CJmLln8K.js";import"./index-CSuovX3X.js";import"./index-dSmaknGw.js";import"./index-De57FWCK.js";import"./index-Di9izlqG.js";import"./32-BrvnL8Hj.js";import"./24-BunGgvie.js";import"./24-CZW84qpr.js";import"./24-O653EECt.js";import"./24-DIXfQiLz.js";import"./24-CWmeerJT.js";import"./24-Gpv48tUf.js";import"./24-BKM1KU47.js";import"./24-JhZx5C50.js";import"./16-1skbPHrv.js";import"./24-Bp815V0R.js";import"./24-BaGOPWtX.js";import"./16-CjM46jjK.js";import"./16-DL1hQxMw.js";import"./16-CzdCZHDH.js";import"./useFloatingReferenceSync-adXaq3Ya.js";import"./index-B-9sGLZR.js";import"./index-IsGk3ZIX.js";import"./types-TdnjS80C.js";import"./floating-ui.react-6VfTZOrw.js";import"./index-DucDzwTg.js";import"./index-DBfCc0Jn.js";import"./index-XGZPkqjb.js";import"./index-vSQLaUqp.js";import"./index-BHnpI8kT.js";import"./index-BzIC8vFU.js";import"./index-BANVVOGG.js";import"./index-DZgd0Qfe.js";import"./sizesMapping-D8QavrGc.js";import"./index-CdHeQl8P.js";import"./index-DxMlVd1J.js";import"./index-DtzYchqB.js";import"./index-D-VDIxFn.js";import"./index-BmtuxTTp.js";import"./index-CMjJ_rHR.js";import"./index-Y1gY5mOJ.js";import"./index-DmLZE8cz.js";import"./index-BI9I3JHz.js";import"./index-8V-zlFGO.js";import"./index-qkZhGjnb.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-01GcG0LR.js";import"./index-KI_mLAAh.js";import"./index-BtFeD-3X.js";import"./index-CxXtU9jM.js";import"./index-DD65tyqZ.js";import"./index-3J2s6a0v.js";import"./index-C6OX9F5-.js";import"./index-DvPBu460.js";import"./index-BhlmHl_K.js";import"./index-DicmkMu7.js";import"./index-CRrW3b0X.js";import"./index-G8_-uYaZ.js";import"./index-CC5B16j-.js";import"./index-TWHnUoEw.js";import"./index-a9LznR3Q.js";import"./index-HGD0h4gs.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CWser92f.js";import"./index-CQek3CAN.js";import"./index-p2bUiyyW.js";import"./index-B1ffb27g.js";import"./index-DdD0P9sc.js";import"./index-DhCDiUD2.js";import"./index-DgjlDdW0.js";import"./index-Ge3Tw8iO.js";import"./index-CNVqUNB9.js";import"./index-BGj-2ukp.js";import"./index-Bg5xPX9b.js";import"./index-c_MoiZvK.js";import"./index-U8RdPQdR.js";import"./index-rMcQZCT_.js";import"./index-DqjA2CJI.js";import"./index-DUcChkPA.js";import"./index-Bd568ebt.js";import"./index-CXzLkByr.js";import"./ComboBox-BthUrrTu.js";import"./index-CV7DnwVd.js";import"./TreeList-BLcOMBIT.js";import"./copyToClipboard-DB_KM_BY.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",y="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",N=()=>{const[t,i]=v.useState(0),o=`const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
  ];`,s=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Одиночный выбор">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label} disabled={disabled}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,n=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Disabled" disabled>
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,c=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Размер xs" size="xs">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,u=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Скролл" scrollingItems={2}>
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,S=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Цвет success" color="success">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,d=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('steel');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Кастомное отображение" displayValue="Выбран металл">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,b=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect
      value={value}
      onChange={setValue}
      label="Меню через портал"
      withPortal
      portalContainerId="root"
      menuWidth="360px"
    >
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(C,{title:"SimpleSelect",description:"SimpleSelect используется для выбора одного значения из списка и поддерживает поиск, портал, стилизацию и управление отображаемым значением.",isStable:!0,codeLink:y,figmaLink:a}),e.jsx("div",{className:m.tabs,children:e.jsxs(p,{children:[e.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{minHeight:400,description:"Базовый выбор одного значения.",code:s}),e.jsx(l,{minHeight:400,description:"Недоступное состояние компонента.",code:n}),e.jsx(l,{minHeight:400,description:"Компактный размер компонента через size='xs'.",code:c}),e.jsx(l,{minHeight:400,description:"Ограничение видимых опций через scrollingItems.",code:u}),e.jsx(l,{minHeight:400,description:"Цветовое состояние через color='success'.",code:S}),e.jsx(l,{minHeight:400,description:"Кастомное отображаемое значение через displayValue.",code:d}),e.jsx(l,{minHeight:400,description:"Рендер списка через портал и настройка ширины меню.",code:b}),e.jsx(l,{minHeight:400,description:"Состояние без доступных опций.",code:`
  import { SimpleSelect } from '@nlmk/ds-2.0';
  import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Пустой select">
      {/* No options */}
    </SimpleSelect>
  );
};
export default App;
`}),e.jsx(O,{argsTypes:A})]}),Number(t)===1&&e.jsx(k,{url:a}),Number(t)===2&&e.jsx(V,{componentName:"SimpleSelect"})]})};function r(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/SimpleSelect/Info",component:I,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["SimpleSelect.test.tsx"]}}),`
`,e.jsx(f,{of:j}),`
`,e.jsx(g,{children:e.jsx(N,{})})]})}function yt(t={}){const{wrapper:i}={...h(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r()}export{yt as default};
