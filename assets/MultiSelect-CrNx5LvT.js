import{r as v,j as e,m as x,S,U as h}from"./iframe-DXeeMUlS.js";import{useMDXComponents as y}from"./index-CAD-9v6k.js";import{M as g}from"./index-CocQ4obD.js";import{DecoratorDefault as M}from"./Decorator.stories-DJYsOzS0.js";import{s as a,H as C,E as o}from"./Header-BbzYBLL5.js";import{F as f}from"./FigmaEmbed-B75WbRzj.js";import{P as k}from"./Properties-CfZ39wJO.js";import{T as I}from"./Tests-C8_7PxaT.js";import{T as p}from"./index-CfeZzpgs.js";import{a as T}from"./argsTypes-B1cH_Gd8.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CS-N0axT.js";import"./index-DVWmtr1D.js";import"./index-BHI3eI3g.js";import"./clsx-B-dksMZM.js";import"./index-DZc_Je-I.js";import"./24-BXEslVYf.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DTjMDcvY.js";import"./index-Dgj4-etr.js";import"./index-D6zPR6x_.js";import"./index-DKJTyuxe.js";import"./index-IY4AFwls.js";import"./32-CGcqymZX.js";import"./24-DzDWDUmy.js";import"./24-DpK5eddQ.js";import"./24-CBLD6MwG.js";import"./24-BtzwVLrk.js";import"./24-BO1wVPpM.js";import"./24-Bdd9D4Ti.js";import"./24-BEN_WnoL.js";import"./24-CHgX55v6.js";import"./16-eB7nAebF.js";import"./24-yThwR12y.js";import"./24-CsKtuqYo.js";import"./16-DPaGmQaD.js";import"./16-9aNWehyQ.js";import"./16-C_DfNdCf.js";import"./useFloatingReferenceSync-D1-TZfLV.js";import"./index-BMRC5SOo.js";import"./index-BAiw0P9_.js";import"./types-TdnjS80C.js";import"./floating-ui.react-D6vM1ylD.js";import"./index-PnnjiXFF.js";import"./index-CuRTdhZw.js";import"./index-D5lDtE6T.js";import"./index-BeR8cofE.js";import"./index-C5-mffQZ.js";import"./index-CIN4IkhO.js";import"./index-CpO2fZ6u.js";import"./index-BXmVr5wC.js";import"./sizesMapping-D8QavrGc.js";import"./index-CszhfbMz.js";import"./index-lmS2Z8XU.js";import"./index-DEU_C-CF.js";import"./index-Cd-LHCBs.js";import"./index-CwewWkbt.js";import"./index-Cs5S9q8Y.js";import"./index-CtqkFbMR.js";import"./index-BKA76Ifo.js";import"./index-BO90VTyW.js";import"./index-CM6F5ah0.js";import"./index-zw_MLesm.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-CE7G7CXw.js";import"./index-njfCmUMO.js";import"./index-B5y6kVop.js";import"./index-5ou-46if.js";import"./index-C27yRONQ.js";import"./index-1AKTzjWH.js";import"./index-BSNOoPXq.js";import"./index-n2Qh6IgR.js";import"./index-Cip2TGbq.js";import"./index-DfF7qLpq.js";import"./index-DEuU-g3N.js";import"./index-PB-RB5Z0.js";import"./index-CI_iOl8v.js";import"./index-dihm09I5.js";import"./index-DNE-7B4q.js";import"./index-DR0r2zXh.js";import"./index-CQ-4hoeh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DSmhyhqI.js";import"./index-SGPmwNfG.js";import"./index-DnB9MQyQ.js";import"./index-5p4PnV8M.js";import"./index-DyZjUOWl.js";import"./index-BE70tGtN.js";import"./index-DW8OwNMu.js";import"./index-BONO3tZk.js";import"./index-FvFNIRYR.js";import"./index-BSOjBlgq.js";import"./index-aMJa5hfH.js";import"./index-DazVin3p.js";import"./index-6n6_bedz.js";import"./index-BYbdmuaq.js";import"./index-C3_SrVzw.js";import"./ComboBox-DH4E0EfK.js";import"./index-bQdqyENo.js";import"./TreeList-6f3aQ_TB.js";import"./copyToClipboard-DB_KM_BY.js";const r="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",j="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect",B=()=>{const[t,i]=v.useState(0),l=`const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
  ];`,m=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${l}

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
`,s=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${l}

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
`,u=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${l}

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

${l}

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

${l}

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

${l}

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
`;return e.jsxs("div",{className:a.wrapper,children:[e.jsx(C,{title:"MultiSelect",description:"MultiSelect позволяет пользователям выбирать несколько элементов из списка. Он поддерживает различные настройки, поиск и стили.",isStable:!0,codeLink:j,figmaLink:r}),e.jsx("div",{className:a.tabs,children:e.jsxs(p,{children:[e.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент MultiSelect с мультивыбором",code:m}),e.jsx(o,{description:"MultiSelect с поиском",code:s}),e.jsx(o,{description:"MultiSelect в состоянии disabled",code:u}),e.jsx(o,{description:"MultiSelect с кнопкой выбрать все",code:c}),e.jsx(o,{description:"MultiSelect с очисткой поиска при выборе",code:d}),e.jsx(o,{description:"MultiSelect с кнопкой сброса",code:b}),e.jsx(o,{height:200,description:"Пустой MultiSelect",code:`
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
`}),e.jsx(k,{argsTypes:T})]}),Number(t)===1&&e.jsx(f,{url:r}),Number(t)===2&&e.jsx(I,{componentName:"MultiSelect"})]})};function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/MultiSelect/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["MultiSelect.test.tsx"]}}),`
`,e.jsx(S,{of:M}),`
`,e.jsx(h,{children:e.jsx(B,{})})]})}function Tt(t={}){const{wrapper:i}={...y(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n()}export{Tt as default};
