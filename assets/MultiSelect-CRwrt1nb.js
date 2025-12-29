import{r as v,j as e,f as x,S,U as h}from"./iframe-CxLN9ksd.js";import{useMDXComponents as y}from"./index-CeChe1UL.js";import{a as g,M}from"./argsTypes-qfXfPoY6.js";import{DecoratorDefault as C}from"./Decorator.stories-DWPS1QvQ.js";import{s as p,H as f,E as o}from"./Header-B1Tht5jw.js";import{F as k}from"./FigmaEmbed-gwemKUEC.js";import{P as I}from"./Properties-Be6XSfnk.js";import{T}from"./Tests-B-cCRdNI.js";import{T as a}from"./index-Bs6EWGDb.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-Qhn2sPqo.js";import"./index-D3DoxRCP.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./index-LyR6p6RN.js";import"./24-BFZg9aq0.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BN0H6Yla.js";import"./index-DcM-4FYU.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./24-CbC-8o3Y.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";import"./generateUUID-M57HTP56.js";import"./useFloatingReferenceSync-DscYnpdV.js";import"./index-CosC_TVD.js";import"./index-AybKi-wv.js";import"./index-CT_Q_AhL.js";import"./index-CYd80pzx.js";import"./types-TdnjS80C.js";import"./index-B5AbqdmT.js";import"./index-Boblobe5.js";import"./floating-ui.react-B9Baa2-L.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-BniRS5vs.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",j="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect",B=()=>{const[t,l]=v.useState(0),i=`const options = [
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
