import{r as x,j as e,m as S,S as g,U as y}from"./iframe-auckHHdj.js";import{useMDXComponents as M}from"./index-D2-gUu9G.js";import{M as C}from"./index-BbQCbaJ_.js";import{DecoratorDefault as k}from"./Decorator.stories-CU9Bre90.js";import{s as a,H as f,E as o}from"./Header-Xv1TykH5.js";import{F as I}from"./FigmaEmbed-UYJ3_Lxu.js";import{P as T,T as j}from"./Tests-Be3Z9p2z.js";import{T as p}from"./index-DeGyB7Dd.js";import{a as B}from"./argsTypes-B1cH_Gd8.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-CznkRUli.js";import"./index-Bi3cHAEE.js";import"./index-DVSj14ZC.js";import"./clsx-B-dksMZM.js";import"./index-p7YOrb6p.js";import"./24-DCTJG6OU.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-HmkWsx8T.js";import"./index-7B7uGpjf.js";import"./index-qO9dtrtH.js";import"./index-Bay6_7KL.js";import"./index-BLWgIzMD.js";import"./32-Dgon7Y2a.js";import"./24-D3OVyFof.js";import"./24-CZ9ZAk74.js";import"./24-JpVCCs1C.js";import"./24-D-Ce91Qj.js";import"./24-BOn3Xrid.js";import"./24-BC-oV7QY.js";import"./24-Gcxv2DAi.js";import"./24-BbN_tXia.js";import"./16-DoCVdKUE.js";import"./24-zuSrA0QY.js";import"./24-aRDAvjva.js";import"./16-BIzc6kNX.js";import"./16-CQDnK6-A.js";import"./16-DXAjwKj0.js";import"./useFloatingReferenceSync-y2Sb52o3.js";import"./index-CXN1ldU3.js";import"./index-B-ej4zbU.js";import"./types-TdnjS80C.js";import"./floating-ui.react-2bHrE470.js";import"./index-Pjjb9oj1.js";import"./index-WoM53gF_.js";import"./index-c4yDlpPS.js";import"./index-CczZHqJG.js";import"./index-D6wJCd8e.js";import"./index-CHU7bacX.js";import"./index-CsbgtAb7.js";import"./index-Dtv-oYzE.js";import"./sizesMapping-D8QavrGc.js";import"./index-Toxo3H46.js";import"./index-BQRpE3vE.js";import"./index-DIknRWC4.js";import"./index-BTrYr-DM.js";import"./index-NkgoTVoy.js";import"./index-DI5MKq0T.js";import"./index-DI7c4HX8.js";import"./index-5_PQcWJ_.js";import"./index-BJ_pO-nS.js";import"./index-Bgj3TetA.js";import"./index-7Ftiwmbj.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DQjzjF05.js";import"./index-B4KZvEgZ.js";import"./index-MeCbP8N7.js";import"./index-DJL6Ketu.js";import"./index-DEqo2gt9.js";import"./index-DEdd9dJR.js";import"./index-symdhavQ.js";import"./index-mikXIReK.js";import"./index-DjEbf1Sc.js";import"./index-Clnp6vy5.js";import"./index-DPDFUXOz.js";import"./index-BcPHqDDB.js";import"./index-CmECfUaS.js";import"./index-CfC-iwgs.js";import"./index-D5mVsZu_.js";import"./index-CMGZFX1T.js";import"./index-DaTNyn08.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CYpVoyww.js";import"./index-C4xiOmXd.js";import"./index-Ckcsg1R_.js";import"./index-B4AAAwTV.js";import"./index-1SaxXTAW.js";import"./index-Bfe18qq-.js";import"./index-DBO3Tr6M.js";import"./index-eQTa5KLe.js";import"./index-jYXTCRtU.js";import"./index-DKRvyNZX.js";import"./index-Cwm_m_JE.js";import"./index-DSyAIbs-.js";import"./index-D9WAgLdq.js";import"./index-BgB7HTk8.js";import"./index-84_n7Alc.js";import"./index-EESLLEw6.js";import"./index-CLlcyrdp.js";import"./ComboBox-0tLuTHDp.js";import"./index-D1zl6Im_.js";import"./TreeList-BsnCF1G8.js";import"./copyToClipboard-DB_KM_BY.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",O="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect",A=()=>{const[t,l]=x.useState(0),i=`const options = [
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
