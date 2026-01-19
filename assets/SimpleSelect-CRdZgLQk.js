import{r as d,j as e,m as b,S as v,U as x}from"./iframe-DUDunD5j.js";import{useMDXComponents as f}from"./index-CDbv5Jgm.js";import{S as j}from"./index-CJbix_Uw.js";import{DecoratorDefault as g}from"./Decorator.stories-DJdCAXEf.js";import{s as p,H as C,E as o}from"./Header-BrZEypuE.js";import{F as I}from"./FigmaEmbed-DovFRgvJ.js";import{P as h}from"./Properties-CcP2VO-p.js";import{T as k}from"./Tests-CSK3RYMm.js";import{T as a}from"./index-DntXJei4.js";import{a as N}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-vYUqBTVu.js";import"./index-aoSKrGJR.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./index-YMfOmFJ1.js";import"./24-CAewpWgK.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuTegHCu.js";import"./index-BBEOAWV5.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./useFloatingReferenceSync-DB9ttEJp.js";import"./index-DhhcK1qW.js";import"./index-BHis8FFF.js";import"./index-BjTLv_jS.js";import"./index-BpbvmvtH.js";import"./types-TdnjS80C.js";import"./floating-ui.react-DkiUDhV9.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-BE6Pvktf.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",A="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",O=()=>{const[t,l]=d.useState(0),i=`const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
  ];`,r=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

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

${i}

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

${i}

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

${i}

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

${i}

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
`;return e.jsxs("div",{className:p.wrapper,children:[e.jsx(C,{title:"SimpleSelect",description:"SimpleSelect позволяет пользователям выбирать один элемент из списка. Он поддерживает различные настройки и стили.",isStable:!0,codeLink:A,figmaLink:m}),e.jsx("div",{className:p.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>l(1)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>l(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент SimpleSelect с одиночным выбором",code:r}),e.jsx(o,{description:"SimpleSelect в состоянии disabled",code:n}),e.jsx(o,{description:"Экстра компактный SimpleSelect",code:c}),e.jsx(o,{description:"SimpleSelect с установленным скроллом",code:u}),e.jsx(o,{description:"SimpleSelect с цветом success",code:S}),e.jsx(o,{height:200,description:"Пустой SimpleSelect",code:`
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
`}),e.jsx(h,{argsTypes:N})]}),Number(t)===1&&e.jsx(I,{url:m}),Number(t)===2&&e.jsx(k,{componentName:"SimpleSelect"})]})};function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/SimpleSelect/Info",component:j,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["SimpleSelect.test.tsx"]}}),`
`,e.jsx(v,{of:g}),`
`,e.jsx(x,{children:e.jsx(O,{})})]})}function ye(t={}){const{wrapper:l}={...f(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(s,{...t})}):s()}export{ye as default};
