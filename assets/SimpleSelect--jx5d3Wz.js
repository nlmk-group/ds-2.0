import{r as v,j as e,m as x,S as f,U as g}from"./iframe-GHQjEpsb.js";import{useMDXComponents as h}from"./index-B8Cb6mvA.js";import{S as I}from"./index-B2itxtYy.js";import{DecoratorDefault as j}from"./Decorator.stories-CCUX5JA5.js";import{s as m,H as C,E as l}from"./Header-BXWzIQpV.js";import{F as k}from"./FigmaEmbed-Br_KB3qr.js";import{P as O,T as V}from"./Tests-uugUZoLC.js";import{T as p}from"./index-CV-3xeQ8.js";import{a as A}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-C3jjOzzq.js";import"./index-ByRS7bpi.js";import"./index-DJb1dn78.js";import"./clsx-B-dksMZM.js";import"./index-CwMtZ6LD.js";import"./24-BT3VdodN.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B6KRA3ZB.js";import"./index-DDjduPuu.js";import"./index-BhXb1I4E.js";import"./index-CAqv-5FK.js";import"./32-Ch8UEd8D.js";import"./24-CvJc9f8d.js";import"./24-V-842Hd4.js";import"./24-BFYJrOCK.js";import"./24-CFV5ODyi.js";import"./24-CD438uYz.js";import"./24-NYxH4Wn7.js";import"./24-0wMAnnTO.js";import"./24-xN4MxKIZ.js";import"./16-BqW1rNBw.js";import"./24-Ec1WffcD.js";import"./24-Bf3BEapt.js";import"./16-Dc97ioNZ.js";import"./16-CwgMkzPr.js";import"./16-FVLzaVo_.js";import"./index-9xxbj185.js";import"./useFloatingReferenceSync-BPKQ-_Ey.js";import"./index-BNokyj4D.js";import"./index-gU83LE3e.js";import"./types-TdnjS80C.js";import"./floating-ui.react-C_9nhsMo.js";import"./index-CdSRMft-.js";import"./index-CxExZRzk.js";import"./index-CbMtuaR9.js";import"./index-Cb1Vgv7Y.js";import"./index-CrbCcHei.js";import"./index-Dw4HSGie.js";import"./MenuItem-cwmhea0w.js";import"./sizesMapping-D8QavrGc.js";import"./index-D5tiDrSz.js";import"./index-DB2EGOHJ.js";import"./index-DfeOlOst.js";import"./index-qKoEXpn1.js";import"./index-BSlyJZDR.js";import"./index-CtknrjY8.js";import"./index-Cl3rcdje.js";import"./index-Cdnk68Wu.js";import"./index-DdQSMaZ7.js";import"./index-CzKhCsRQ.js";import"./index-BrzikNzy.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-BEyzHPFb.js";import"./index-DW1qxpHI.js";import"./index-D40PzGBW.js";import"./index-DXM8gjTJ.js";import"./index-BgqdrSax.js";import"./index-GcZm5qpl.js";import"./index-DimFK3AM.js";import"./index-DubUX2Fh.js";import"./index-DyQbf3Bh.js";import"./index-wFL7JQ-x.js";import"./index-DWnr0vN9.js";import"./index-CelkrSVu.js";import"./index-UmocORK-.js";import"./index-D1KDSdER.js";import"./index-DkqDQe7V.js";import"./index-Bro8qKYA.js";import"./index-PXofUIZt.js";import"./index-DbSaRUy7.js";import"./index-BVyDT0rk.js";import"./index-CEj65Quy.js";import"./index-hoM-fUW3.js";import"./index-CH2jIRDc.js";import"./index-B-moVc61.js";import"./index-B9gAWxrO.js";import"./index-DFBiLkHj.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-B_r75_Ag.js";import"./index-zf3baTui.js";import"./index-CUmnQamA.js";import"./index-DHdy5BVi.js";import"./index-BKpcjK-S.js";import"./index-DClnzsLR.js";import"./index-CD_D33wX.js";import"./index-CA7cvvjp.js";import"./index-C22prfeM.js";import"./index-CJWWB0hS.js";import"./ComboBox-B8JamNo2.js";import"./index-DmgKK2CE.js";import"./TreeList-DV7BpuGG.js";import"./copyToClipboard-DB_KM_BY.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",y="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",N=()=>{const[t,i]=v.useState(0),o=`const options = [
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
