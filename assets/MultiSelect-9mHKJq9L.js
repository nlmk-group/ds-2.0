import{r as x,j as e,m as S,S as g,U as y}from"./iframe-GHQjEpsb.js";import{useMDXComponents as M}from"./index-B8Cb6mvA.js";import{M as C}from"./index-DbSaRUy7.js";import{DecoratorDefault as k}from"./Decorator.stories-CCUX5JA5.js";import{s as a,H as f,E as o}from"./Header-BXWzIQpV.js";import{F as I}from"./FigmaEmbed-Br_KB3qr.js";import{P as T,T as j}from"./Tests-uugUZoLC.js";import{T as p}from"./index-CV-3xeQ8.js";import{a as B}from"./argsTypes-B1cH_Gd8.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-C3jjOzzq.js";import"./index-ByRS7bpi.js";import"./index-DJb1dn78.js";import"./clsx-B-dksMZM.js";import"./index-CwMtZ6LD.js";import"./24-BT3VdodN.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B6KRA3ZB.js";import"./index-DDjduPuu.js";import"./index-BhXb1I4E.js";import"./index-CAqv-5FK.js";import"./32-Ch8UEd8D.js";import"./24-CvJc9f8d.js";import"./24-V-842Hd4.js";import"./24-BFYJrOCK.js";import"./24-CFV5ODyi.js";import"./24-CD438uYz.js";import"./24-NYxH4Wn7.js";import"./24-0wMAnnTO.js";import"./24-xN4MxKIZ.js";import"./16-BqW1rNBw.js";import"./24-Ec1WffcD.js";import"./24-Bf3BEapt.js";import"./16-Dc97ioNZ.js";import"./16-CwgMkzPr.js";import"./16-FVLzaVo_.js";import"./index-9xxbj185.js";import"./useFloatingReferenceSync-BPKQ-_Ey.js";import"./index-BNokyj4D.js";import"./index-gU83LE3e.js";import"./types-TdnjS80C.js";import"./floating-ui.react-C_9nhsMo.js";import"./index-CdSRMft-.js";import"./index-CxExZRzk.js";import"./index-CbMtuaR9.js";import"./index-Cb1Vgv7Y.js";import"./index-CrbCcHei.js";import"./index-Dw4HSGie.js";import"./MenuItem-cwmhea0w.js";import"./sizesMapping-D8QavrGc.js";import"./index-D5tiDrSz.js";import"./index-DB2EGOHJ.js";import"./index-DfeOlOst.js";import"./index-qKoEXpn1.js";import"./index-BSlyJZDR.js";import"./index-CtknrjY8.js";import"./index-Cl3rcdje.js";import"./index-Cdnk68Wu.js";import"./index-DdQSMaZ7.js";import"./index-CzKhCsRQ.js";import"./index-BrzikNzy.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-BEyzHPFb.js";import"./index-DW1qxpHI.js";import"./index-D40PzGBW.js";import"./index-DXM8gjTJ.js";import"./index-BgqdrSax.js";import"./index-GcZm5qpl.js";import"./index-DimFK3AM.js";import"./index-DubUX2Fh.js";import"./index-DyQbf3Bh.js";import"./index-wFL7JQ-x.js";import"./index-DWnr0vN9.js";import"./index-CelkrSVu.js";import"./index-UmocORK-.js";import"./index-D1KDSdER.js";import"./index-DkqDQe7V.js";import"./index-Bro8qKYA.js";import"./index-PXofUIZt.js";import"./index-BVyDT0rk.js";import"./index-B2itxtYy.js";import"./index-CEj65Quy.js";import"./index-hoM-fUW3.js";import"./index-CH2jIRDc.js";import"./index-B-moVc61.js";import"./index-B9gAWxrO.js";import"./index-DFBiLkHj.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-B_r75_Ag.js";import"./index-zf3baTui.js";import"./index-CUmnQamA.js";import"./index-DHdy5BVi.js";import"./index-BKpcjK-S.js";import"./index-DClnzsLR.js";import"./index-CD_D33wX.js";import"./index-CA7cvvjp.js";import"./index-C22prfeM.js";import"./index-CJWWB0hS.js";import"./ComboBox-B8JamNo2.js";import"./index-DmgKK2CE.js";import"./TreeList-DV7BpuGG.js";import"./copyToClipboard-DB_KM_BY.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",O="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect",A=()=>{const[t,l]=x.useState(0),i=`const options = [
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
