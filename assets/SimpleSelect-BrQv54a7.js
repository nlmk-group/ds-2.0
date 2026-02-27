import{r as d,j as e,m as b,S as v,U as x}from"./iframe-DXeeMUlS.js";import{useMDXComponents as f}from"./index-CAD-9v6k.js";import{S as j}from"./index-5p4PnV8M.js";import{DecoratorDefault as g}from"./Decorator.stories-DJYsOzS0.js";import{s as m,H as C,E as l}from"./Header-BbzYBLL5.js";import{F as I}from"./FigmaEmbed-B75WbRzj.js";import{P as h}from"./Properties-CfZ39wJO.js";import{T as k}from"./Tests-C8_7PxaT.js";import{T as p}from"./index-CfeZzpgs.js";import{a as N}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CS-N0axT.js";import"./index-DVWmtr1D.js";import"./index-BHI3eI3g.js";import"./clsx-B-dksMZM.js";import"./index-DZc_Je-I.js";import"./24-BXEslVYf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DTjMDcvY.js";import"./index-Dgj4-etr.js";import"./index-D6zPR6x_.js";import"./index-DKJTyuxe.js";import"./index-IY4AFwls.js";import"./32-CGcqymZX.js";import"./24-DzDWDUmy.js";import"./24-DpK5eddQ.js";import"./24-CBLD6MwG.js";import"./24-BtzwVLrk.js";import"./24-BO1wVPpM.js";import"./24-Bdd9D4Ti.js";import"./24-BEN_WnoL.js";import"./24-CHgX55v6.js";import"./16-eB7nAebF.js";import"./24-yThwR12y.js";import"./24-CsKtuqYo.js";import"./16-DPaGmQaD.js";import"./16-9aNWehyQ.js";import"./16-C_DfNdCf.js";import"./useFloatingReferenceSync-D1-TZfLV.js";import"./index-BMRC5SOo.js";import"./index-BAiw0P9_.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D6vM1ylD.js";import"./index-PnnjiXFF.js";import"./index-CuRTdhZw.js";import"./index-D5lDtE6T.js";import"./index-BeR8cofE.js";import"./index-C5-mffQZ.js";import"./index-CIN4IkhO.js";import"./index-CpO2fZ6u.js";import"./index-BXmVr5wC.js";import"./sizesMapping-D8QavrGc.js";import"./index-CszhfbMz.js";import"./index-lmS2Z8XU.js";import"./index-DEU_C-CF.js";import"./index-Cd-LHCBs.js";import"./index-CwewWkbt.js";import"./index-Cs5S9q8Y.js";import"./index-CtqkFbMR.js";import"./index-BKA76Ifo.js";import"./index-BO90VTyW.js";import"./index-CM6F5ah0.js";import"./index-zw_MLesm.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CE7G7CXw.js";import"./index-njfCmUMO.js";import"./index-B5y6kVop.js";import"./index-5ou-46if.js";import"./index-C27yRONQ.js";import"./index-1AKTzjWH.js";import"./index-BSNOoPXq.js";import"./index-n2Qh6IgR.js";import"./index-Cip2TGbq.js";import"./index-DfF7qLpq.js";import"./index-DEuU-g3N.js";import"./index-PB-RB5Z0.js";import"./index-CI_iOl8v.js";import"./index-dihm09I5.js";import"./index-DNE-7B4q.js";import"./index-DR0r2zXh.js";import"./index-CQ-4hoeh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DSmhyhqI.js";import"./index-SGPmwNfG.js";import"./index-DnB9MQyQ.js";import"./index-CocQ4obD.js";import"./index-DyZjUOWl.js";import"./index-BE70tGtN.js";import"./index-DW8OwNMu.js";import"./index-BONO3tZk.js";import"./index-FvFNIRYR.js";import"./index-BSOjBlgq.js";import"./index-aMJa5hfH.js";import"./index-DazVin3p.js";import"./index-6n6_bedz.js";import"./index-BYbdmuaq.js";import"./index-C3_SrVzw.js";import"./ComboBox-DH4E0EfK.js";import"./index-bQdqyENo.js";import"./TreeList-6f3aQ_TB.js";import"./copyToClipboard-DB_KM_BY.js";const r="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",A="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",O=()=>{const[t,o]=d.useState(0),i=`const options = [
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
`;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(C,{title:"SimpleSelect",description:"SimpleSelect позволяет пользователям выбирать один элемент из списка. Он поддерживает различные настройки и стили.",isStable:!0,codeLink:A,figmaLink:r}),e.jsx("div",{className:m.tabs,children:e.jsxs(p,{children:[e.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{description:"Компонент SimpleSelect с одиночным выбором",code:s}),e.jsx(l,{description:"SimpleSelect в состоянии disabled",code:n}),e.jsx(l,{description:"Экстра компактный SimpleSelect",code:c}),e.jsx(l,{description:"SimpleSelect с установленным скроллом",code:u}),e.jsx(l,{description:"SimpleSelect с цветом success",code:S}),e.jsx(l,{height:200,description:"Пустой SimpleSelect",code:`
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
`}),e.jsx(h,{argsTypes:N})]}),Number(t)===1&&e.jsx(I,{url:r}),Number(t)===2&&e.jsx(k,{componentName:"SimpleSelect"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Components/SimpleSelect/Info",component:j,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["SimpleSelect.test.tsx"]}}),`
`,e.jsx(v,{of:g}),`
`,e.jsx(x,{children:e.jsx(O,{})})]})}function Nt(t={}){const{wrapper:o}={...f(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a()}export{Nt as default};
