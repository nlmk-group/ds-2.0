import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as d}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as s,aF as b}from"./TreeList-ChyggQS5.js";import{DecoratorDefault as v}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as i,H as f,E as o}from"./Header-DoEz7EVi.js";import{F as g}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as j}from"./Properties-BySoTS4I.js";import{T as C}from"./Tests-OdO6CFav.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as I}from"./argsTypes-ohjtB7dW.js";import{c as h,e as k,U as N}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",A="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",O=()=>{const[t,l]=x.useState(0),a=`const options = [
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

${a}

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

${a}

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

${a}

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

${a}

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

${a}

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
`;return e.jsxs("div",{className:i.wrapper,children:[e.jsx(f,{title:"SimpleSelect",description:"SimpleSelect позволяет пользователям выбирать один элемент из списка. Он поддерживает различные настройки и стили.",isStable:!0,codeLink:A,figmaLink:p}),e.jsx("div",{className:i.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>l(1)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>l(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент SimpleSelect с одиночным выбором",code:r}),e.jsx(o,{description:"SimpleSelect в состоянии disabled",code:n}),e.jsx(o,{description:"Экстра компактный SimpleSelect",code:c}),e.jsx(o,{description:"SimpleSelect с установленным скроллом",code:u}),e.jsx(o,{description:"SimpleSelect с цветом success",code:S}),e.jsx(o,{height:200,description:"Пустой SimpleSelect",code:`
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
`}),e.jsx(j,{argsTypes:I})]}),Number(t)===1&&e.jsx(g,{url:p}),Number(t)===2&&e.jsx(C,{componentName:"SimpleSelect"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Components/SimpleSelect/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["SimpleSelect.test.tsx"]}}),`
`,e.jsx(k,{of:v}),`
`,e.jsx(N,{children:e.jsx(O,{})})]})}function ne(t={}){const{wrapper:l}={...d(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(m,{...t})}):m()}export{ne as default};
