import{r as d,j as e,m as b,S as v,U as x}from"./iframe-tXE4xoYc.js";import{useMDXComponents as f}from"./index-BU2Hc1BN.js";import{S as j}from"./index-CtNEMVMn.js";import{DecoratorDefault as g}from"./Decorator.stories-DX_mk-19.js";import{s as p,H as C,E as o}from"./Header-D7Lkw1fr.js";import{F as I}from"./FigmaEmbed-DGce_rmk.js";import{P as h}from"./Properties-3Caa_vUq.js";import{T as k}from"./Tests-COuvSTuJ.js";import{T as a}from"./index-BdAkzp84.js";import{a as N}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-c0V9lvMd.js";import"./index-DfJPKXXV.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-UIqxTLHU.js";import"./24-DRYMupHO.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-q3_oAMiW.js";import"./index-CnPKv_iQ.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./24-CGaTDQAV.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";import"./useFloatingReferenceSync-BoqrGUtC.js";import"./index-BYo_Qif0.js";import"./index-DlYR7-H3.js";import"./index-Cx9ne2MY.js";import"./index-mWxT_Pnt.js";import"./types-TdnjS80C.js";import"./floating-ui.react-rIU8UbdJ.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-CjsErmK6.js";const m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",A="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",O=()=>{const[t,l]=d.useState(0),i=`const options = [
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
