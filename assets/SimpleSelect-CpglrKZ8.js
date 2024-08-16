import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as S}from"./index-CpguRmgc.js";import{ag as d,ah as b,ai as v}from"./chunk-HLWAVYOI-CrtBrDc8.js";import{U as i,ah as f}from"./index-Bq8dHBmc.js";import{DecoratorDefault as x}from"./Decorator.stories-BP3ijO2B.js";import{r as g}from"./index-DQ2WTIsS.js";import{s,H as j,E as l}from"./Header-CkulZeNq.js";import{F as h}from"./FigmaEmbed-CDmAdgKA.js";import{P as C}from"./Properties-CGeqwL7I.js";import{T as y}from"./Tests-B9WZldn2.js";import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{a as k}from"./argsTypes-Exr_R_CN.js";import"./iframe-BEd3PU3T.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-CchupG2v.js";import"./index-0sbKER3h.js";const A=()=>{const[t,a]=g.useState(0),o=`const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
  ];`,p=`
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
`,r=`
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
`,n=`
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
`,c=`
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
`,u=`
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
`;return e.jsxs("div",{className:s.wrapper,children:[e.jsx(j,{title:"SimpleSelect",description:"SimpleSelect позволяет пользователям выбирать один элемент из списка. Он поддерживает различные настройки и стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),e.jsx("div",{className:s.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>a(0)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>a(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{description:"Компонент SimpleSelect с одиночным выбором",code:p}),e.jsx(l,{description:"SimpleSelect в состоянии disabled",code:r}),e.jsx(l,{description:"Экстра компактный SimpleSelect",code:n}),e.jsx(l,{description:"SimpleSelect с установленным скроллом",code:c}),e.jsx(l,{description:"SimpleSelect с цветом success",code:u}),e.jsx(l,{height:200,description:"Пустой SimpleSelect",code:`
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
`}),e.jsx(C,{argsTypes:k})]}),Number(t)===1&&e.jsx(h,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e.jsx(y,{componentName:"SimpleSelect"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Components/SimpleSelect/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"},jest:["SimpleSelect.test.tsx"]}}),`
`,e.jsx(b,{of:x}),`
`,e.jsx(v,{children:e.jsx(A,{})})]})}function re(t={}){const{wrapper:a}={...S(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(m,{...t})}):m()}export{re as default};
