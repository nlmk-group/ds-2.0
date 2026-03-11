import{r as x,j as e,m as S,S as g,U as y}from"./iframe-DfRM7LXF.js";import{useMDXComponents as M}from"./index-s3G8uf3c.js";import{M as C}from"./index-DTIMN90s.js";import{DecoratorDefault as k}from"./Decorator.stories-Dc5cDQ_A.js";import{s as a,H as f,E as o}from"./Header-BrYoDfav.js";import{F as I}from"./FigmaEmbed-B7TLU8Q3.js";import{P as T,T as j}from"./Tests-Bl_4nCEK.js";import{T as p}from"./index-HQdxBngH.js";import{a as B}from"./argsTypes-B1cH_Gd8.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CqGpx5F6.js";import"./index-BBdLC-OA.js";import"./index--nFqMQdT.js";import"./clsx-B-dksMZM.js";import"./index-DINl29EL.js";import"./24-CLWtzJRM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D2Kz8Cjc.js";import"./index-DVB7RJDK.js";import"./index-rkxnOxqa.js";import"./index-BGl-7D4l.js";import"./index-CN5IEPbV.js";import"./32-Bjn7Co6i.js";import"./24-D-2FQCka.js";import"./24-Bx5Ko4Zf.js";import"./24-DPno0QZj.js";import"./24-CWpuPGUf.js";import"./24-Cp5qlwo7.js";import"./24-LAGNS7eA.js";import"./24-CSBD1goG.js";import"./24-D3pKJ1t3.js";import"./16-fn2TPoua.js";import"./24-DunoRfpD.js";import"./24-WTey2qPh.js";import"./16-B4jpe3eU.js";import"./16-UKcUYuG7.js";import"./16-BAUAAMRf.js";import"./useFloatingReferenceSync-B2OO83Jd.js";import"./index-wON6kCEo.js";import"./index-DZtnbN5A.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CdQVfeSt.js";import"./index-B2VJ83In.js";import"./index-CbWBwQI3.js";import"./index-BRJ-Ua9i.js";import"./index-eg8itsWK.js";import"./index-Bbrpw_Ow.js";import"./index-BqE4MY4m.js";import"./index-CRXfl0Vt.js";import"./index-UMg-UgH6.js";import"./sizesMapping-D8QavrGc.js";import"./index-DyLcPuXd.js";import"./index-DkFFLpKU.js";import"./index-BRcbigKy.js";import"./index-Bs9bu8w1.js";import"./index-CAWkMWRs.js";import"./index-B6F_DLS2.js";import"./index-D0L1Sk36.js";import"./index-CPQdLsa5.js";import"./index-CJQswicC.js";import"./index-DmFtZ-Ny.js";import"./index-wY5Em-zL.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-nVILX9LA.js";import"./index-TH-r5Kbz.js";import"./index-Di10VY84.js";import"./index-CKR5Megx.js";import"./index-Baxn1nZN.js";import"./index-D3rQde2D.js";import"./index-W4qf1pCz.js";import"./index-B7Cg2_me.js";import"./index-BsZ7Kff4.js";import"./index-D2NcEt1k.js";import"./index-DUe44RxZ.js";import"./index-CzpPczJJ.js";import"./index-oHV1kBbR.js";import"./index-ydaVehZ7.js";import"./index-D_2odW5T.js";import"./index-B4s-8p3z.js";import"./index-C6yYWo4G.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-DsM1Nq1m.js";import"./index-S_twP3Il.js";import"./index-C1EDehIY.js";import"./index-BfvSM5Fb.js";import"./index-syqq8EGq.js";import"./index-Dj81d4ZI.js";import"./index-Casca5S3.js";import"./index-Ba4KYGTt.js";import"./index-BvJOeOlN.js";import"./index-C6jCapMo.js";import"./index-BzMT43aM.js";import"./index-DsvUz8Pz.js";import"./index-Bk5TUS1W.js";import"./index-DRK0Fag0.js";import"./index-DUBAR20C.js";import"./index-DRVnFPP8.js";import"./ComboBox-Dt4xV1fo.js";import"./index-Cotw6HSH.js";import"./TreeList-k1lhCedt.js";import"./copyToClipboard-DB_KM_BY.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",O="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect",A=()=>{const[t,l]=x.useState(0),i=`const options = [
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
`,e.jsx(y,{children:e.jsx(A,{})})]})}function jt(t={}){const{wrapper:l}={...M(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(r,{...t})}):r()}export{jt as default};
