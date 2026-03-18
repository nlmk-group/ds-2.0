import{r as x,j as e,m as S,S as g,U as y}from"./iframe-CiNcYurr.js";import{useMDXComponents as M}from"./index-BaUxFINc.js";import{M as C}from"./index-oG78am6U.js";import{DecoratorDefault as k}from"./Decorator.stories-CMY6PrD1.js";import{s as a,H as f,E as o}from"./Header-CSF8pD8M.js";import{F as I}from"./FigmaEmbed-BgSjDHDG.js";import{P as T,T as j}from"./Tests-CuCRZHAs.js";import{T as p}from"./index-BGUexdM0.js";import{a as B}from"./argsTypes-B1cH_Gd8.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-Bm9ZTaRK.js";import"./index-BW3E00_d.js";import"./index-ChNBy6a5.js";import"./clsx-B-dksMZM.js";import"./index-C62Rz3pb.js";import"./24-ByfXT0PC.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DMves0z1.js";import"./index-Cc3zI-Zi.js";import"./index-DKGBjWfT.js";import"./index-BAO_EFiP.js";import"./index-KTbM5ka_.js";import"./32-BIZlbf4u.js";import"./24-C4GcDMUE.js";import"./24-BpIVUa9s.js";import"./24-CM41UcFe.js";import"./24-CuMa5vAe.js";import"./24-Dn2lqm-y.js";import"./24-WK1b6lfV.js";import"./24-CbtCS4aD.js";import"./24-Hf1fmE8D.js";import"./16-Bzi-BRTw.js";import"./24-Bt6gBPsC.js";import"./24-B1PR4U9W.js";import"./16-87YGvwqM.js";import"./16-D_wDoKTV.js";import"./16-DGHcuNOQ.js";import"./useFloatingReferenceSync-N5nxTT3h.js";import"./index-ipRY-F18.js";import"./index-5P6wQBGT.js";import"./types-TdnjS80C.js";import"./floating-ui.react-kz-yE5c0.js";import"./index-BK6wfwgJ.js";import"./index-BgSHXntA.js";import"./index-B5JbKXfP.js";import"./index-Bmplgm43.js";import"./index-BTbdo8J6.js";import"./index-nCUMzYDY.js";import"./index-BnnFEDSq.js";import"./index-C0rE8VRv.js";import"./sizesMapping-D8QavrGc.js";import"./index-B6F5exii.js";import"./index-WfOI5tKp.js";import"./index-Di3Tf_NZ.js";import"./index-BSCmrBEE.js";import"./index-k-8s0_Jc.js";import"./index-DtsZdW_k.js";import"./index-BASSBPqG.js";import"./index-BDsxwAhX.js";import"./index-7l3FwTp_.js";import"./index-C19bQcdj.js";import"./index-BvLTT0Bc.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-xNLQpI5_.js";import"./index-tFFXhZ5g.js";import"./index-CctpJQDv.js";import"./index-BR9FB4KQ.js";import"./index-BPA0dgrp.js";import"./index-CC8vLZx7.js";import"./index-8zO7yMOe.js";import"./index-DGAhwUTe.js";import"./index-DXyu3KnF.js";import"./index-TMf-q5Af.js";import"./index-DwZld9Xy.js";import"./index-Bfa5kPEf.js";import"./index-CWXYOrIJ.js";import"./index-C5ZdoSw6.js";import"./index-G7kzCBo_.js";import"./index-BlcuogSf.js";import"./index-DiIsinIh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-MwaXdhFc.js";import"./index-Vn4Jr9MH.js";import"./index-BSRH1Q8Z.js";import"./index-Djipz1eP.js";import"./index-5yXCpVDE.js";import"./index-B5C_MfFj.js";import"./index-CPQDgGpy.js";import"./index-C-OYgTT5.js";import"./index-DpcbdR_F.js";import"./index-Dk716a-C.js";import"./index-BErnz41e.js";import"./index-Cd5eTZd_.js";import"./index-CUllg0k1.js";import"./index-BdhXnQ-k.js";import"./index-C-hD1Qn7.js";import"./index-Dcu3xPiM.js";import"./index-FqvjfKzP.js";import"./ComboBox-moTAJumu.js";import"./index-CLQNWR2i.js";import"./TreeList-Amzwxkac.js";import"./copyToClipboard-DB_KM_BY.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",O="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect",A=()=>{const[t,l]=x.useState(0),i=`const options = [
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
`,s=`
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
`,u=`
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
`,h=`
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
`,v=`
  import { Box, Checkbox, MultiSelect, OptionItem, Typography } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${i}

const App = () => {
  const [value, setValue] = useState(['steel', 'aluminum', 'nickel']);
  return (
    <MultiSelect
      value={value}
      onChange={setValue}
      label="Настройка отображения выбранных значений"
      valueSeparator=" | "
      allSelectedText="Выбраны все металлы"
      withPortal
      portalContainerId="root"
    >
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
`;return e.jsxs("div",{className:a.wrapper,children:[e.jsx(f,{title:"MultiSelect",description:"MultiSelect предоставляет выбор нескольких значений из списка с поддержкой поиска, массового выбора и настройки отображения выбранных элементов.",isStable:!0,codeLink:O,figmaLink:n}),e.jsx("div",{className:a.tabs,children:e.jsxs(p,{children:[e.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>l(1)}),e.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>l(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{minHeight:500,description:"Базовый мультивыбор значений.",code:m}),e.jsx(o,{minHeight:500,description:"Поиск по доступным значениям через searchable.",code:s}),e.jsx(o,{minHeight:500,description:"Заблокированное состояние компонента.",code:u}),e.jsx(o,{minHeight:500,description:"Массовый выбор через showSelectAll.",code:c}),e.jsx(o,{minHeight:500,description:"Очистка поискового запроса после выбора через clearSearchOnSelect.",code:d}),e.jsx(o,{minHeight:500,description:"Сброс выбранных значений через reset и onReset.",code:b}),e.jsx(o,{minHeight:500,description:"Настройка отображения выбранных значений и рендер меню через портал.",code:v}),e.jsx(o,{minHeight:500,description:"Состояние компонента без доступных опций.",code:h}),e.jsx(T,{argsTypes:B})]}),Number(t)===1&&e.jsx(I,{url:n}),Number(t)===2&&e.jsx(j,{componentName:"MultiSelect"})]})};function r(t){return e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"Components/MultiSelect/Info",component:C,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["MultiSelect.test.tsx"]}}),`
`,e.jsx(g,{of:k}),`
`,e.jsx(y,{children:e.jsx(A,{})})]})}function Bt(t={}){const{wrapper:l}={...M(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(r,{...t})}):r()}export{Bt as default};
