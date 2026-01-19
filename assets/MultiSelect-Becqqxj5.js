import{r as v,j as e,m as x,S,U as h}from"./iframe-BPtLBEuk.js";import{useMDXComponents as y}from"./index-DY5aY42c.js";import{a as g,M}from"./argsTypes-BtsFcZ5E.js";import{DecoratorDefault as C}from"./Decorator.stories-Bt-6wqMy.js";import{s as p,H as f,E as o}from"./Header-lxb-Wymn.js";import{F as k}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as I}from"./Properties-u6_xeg7P.js";import{T}from"./Tests-DUUoQDTR.js";import{T as a}from"./index-CX87Y9E4.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-74_uKAUo.js";import"./index-C5OaxW6Y.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-D-pLh_NR.js";import"./24-DOwtHgIx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B8NQmRXS.js";import"./index-Dr7AntG3.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";import"./useFloatingReferenceSync-C_yD6V-Z.js";import"./index-C1n_EcZz.js";import"./index-etTcxdeZ.js";import"./index-d_6bz31j.js";import"./index-jNLleeyk.js";import"./types-TdnjS80C.js";import"./index-D-pYfgAq.js";import"./index-C1wwabMN.js";import"./floating-ui.react-tm3IGrEk.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-CANPVv15.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",j="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect",B=()=>{const[t,l]=v.useState(0),i=`const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
  ];`,r=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Мультивыбор">
      {options.map((option) => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <Box alignItems="center" gap="8px">
            <Checkbox 
              checked={value.includes(option.value)} 
              disabled={option.disabled}
              onChange={() => {}}
              style={{ pointerEvents: 'none' }}
            />
            <Typography variant="Body1-Medium">{option.label}</Typography>
          </Box>
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`,u=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="MultiSelect с поиском" searchable>
      {options.map((option) => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <Box alignItems="center" gap="8px">
            <Checkbox 
              checked={value.includes(option.value)} 
              disabled={option.disabled}
              onChange={() => {}}
              style={{ pointerEvents: 'none' }}
            />
            <Typography variant="Body1-Medium">{option.label}</Typography>
          </Box>
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`,m=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Disabled" disabled>
      {options.map((option) => (
        <OptionItem key={option.value} value={option.value} label={option.label}>
          <Box alignItems="center" gap="8px">
            <Checkbox 
              checked={value.includes(option.value)} 
              disabled
              onChange={() => {}}
              style={{ pointerEvents: 'none' }}
            />
            <Typography variant="Body1-Medium">{option.label}</Typography>
          </Box>
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`,c=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="С кнопкой выбрать все" showSelectAll>
      {options.map((option) => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <Box alignItems="center" gap="8px">
            <Checkbox 
              checked={value.includes(option.value)} 
              disabled={option.disabled}
              onChange={() => {}}
              style={{ pointerEvents: 'none' }}
            />
            <Typography variant="Body1-Medium">{option.label}</Typography>
          </Box>
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`,d=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="С очисткой поиска" searchable clearSearchOnSelect>
      {options.map((option) => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <Box alignItems="center" gap="8px">
            <Checkbox 
              checked={value.includes(option.value)} 
              disabled={option.disabled}
              onChange={() => {}}
              style={{ pointerEvents: 'none' }}
            />
            <Typography variant="Body1-Medium">{option.label}</Typography>
          </Box>
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`,b=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState(['steel', 'aluminum']);
  return (
    <MultiSelect value={value} onChange={setValue} label="С кнопкой сброса" reset onReset={() => setValue([])}>
      {options.map((option) => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <Box alignItems="center" gap="8px">
            <Checkbox 
              checked={value.includes(option.value)} 
              disabled={option.disabled}
              onChange={() => {}}
              style={{ pointerEvents: 'none' }}
            />
            <Typography variant="Body1-Medium">{option.label}</Typography>
          </Box>
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`;return e.jsxs("div",{className:p.wrapper,children:[e.jsx(f,{title:"MultiSelect",description:"MultiSelect позволяет пользователям выбирать несколько элементов из списка. Он поддерживает различные настройки, поиск и стили.",isStable:!0,codeLink:j,figmaLink:n}),e.jsx("div",{className:p.tabs,children:e.jsxs(a,{children:[e.jsx(a.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e.jsx(a.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>l(1)}),e.jsx(a.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>l(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент MultiSelect с мультивыбором",code:r}),e.jsx(o,{description:"MultiSelect с поиском",code:u}),e.jsx(o,{description:"MultiSelect в состоянии disabled",code:m}),e.jsx(o,{description:"MultiSelect с кнопкой выбрать все",code:c}),e.jsx(o,{description:"MultiSelect с очисткой поиска при выборе",code:d}),e.jsx(o,{description:"MultiSelect с кнопкой сброса",code:b}),e.jsx(o,{height:200,description:"Пустой MultiSelect",code:`
  import { MultiSelect } from '@nlmk/ds-2.0';
  import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Пустой MultiSelect">
      {/* No options */}
    </MultiSelect>
  );
};
export default App;
`}),e.jsx(I,{argsTypes:g})]}),Number(t)===1&&e.jsx(k,{url:n}),Number(t)===2&&e.jsx(T,{componentName:"MultiSelect"})]})};function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/MultiSelect/Info",component:M,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["MultiSelect.test.tsx"]}}),`
`,e.jsx(S,{of:C}),`
`,e.jsx(h,{children:e.jsx(B,{})})]})}function Oe(t={}){const{wrapper:l}={...y(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(s,{...t})}):s()}export{Oe as default};
