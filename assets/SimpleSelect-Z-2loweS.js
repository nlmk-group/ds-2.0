import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as d}from"./index-CbmgEnq2.js";import{am as b,an as v,ao as f}from"./chunk-NUUEMKO5-CYeaHTsV.js";import{af as s,aC as x}from"./TreeList-BjAYGU6i.js";import{DecoratorDefault as j}from"./Decorator.stories-B1hjNCvN.js";import{r as g}from"./index-Bnop-kX6.js";import{s as i,H as C,E as a}from"./Header-ClKrHdpp.js";import{F as h}from"./FigmaEmbed-DHnX0NKb.js";import{P as I}from"./Properties-N-2-JxOc.js";import{T as k}from"./Tests-BTN5Mu5Y.js";import"./generateUUID-BLuKx6pe.js";import"./index-DcUsRIWc.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-Dj-Wh1Bz.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-C9xHhmyi.js";import"./index-DokmLR-l.js";import"./32-70JnsVF1.js";import{a as y}from"./argsTypes-CgOBjlKQ.js";import"./iframe-Bfxx6DB4.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-6mv60_jZ.js";import"./index-B5g4YLzC.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626&t=EnvIMGos3m33avAX-1",A=()=>{const[t,l]=g.useState(0),o=`const options = [
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
`;return e.jsxs("div",{className:i.wrapper,children:[e.jsx(C,{title:"SimpleSelect",description:"SimpleSelect позволяет пользователям выбирать один элемент из списка. Он поддерживает различные настройки и стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",figmaLink:m}),e.jsx("div",{className:i.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>l(1)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>l(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(a,{description:"Компонент SimpleSelect с одиночным выбором",code:r}),e.jsx(a,{description:"SimpleSelect в состоянии disabled",code:n}),e.jsx(a,{description:"Экстра компактный SimpleSelect",code:c}),e.jsx(a,{description:"SimpleSelect с установленным скроллом",code:u}),e.jsx(a,{description:"SimpleSelect с цветом success",code:S}),e.jsx(a,{height:200,description:"Пустой SimpleSelect",code:`
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
`}),e.jsx(I,{argsTypes:y})]}),Number(t)===1&&e.jsx(h,{url:m}),Number(t)===2&&e.jsx(k,{componentName:"SimpleSelect"})]})};function p(t){return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/SimpleSelect/Info",component:x,parameters:{design:{type:"figma",url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"},jest:["SimpleSelect.test.tsx"]}}),`
`,e.jsx(v,{of:j}),`
`,e.jsx(f,{children:e.jsx(A,{})})]})}function re(t={}){const{wrapper:l}={...d(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(p,{...t})}):p()}export{re as default};
