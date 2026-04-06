import{r as x,j as e,m as S,S as g,U as y}from"./iframe-adG_7yRG.js";import{useMDXComponents as M}from"./index-Cg8Pf3Pw.js";import{M as C}from"./index-BkYL4d7S.js";import{DecoratorDefault as k}from"./Decorator.stories-Beo23sgK.js";import{s as a,H as f,E as o}from"./Header-cMHYDLeC.js";import{F as I}from"./FigmaEmbed-BWR-OLCZ.js";import{P as T,T as j}from"./Tests-C1XQ0sNC.js";import{T as p}from"./index-Yehuvb9K.js";import{a as B}from"./argsTypes-B1cH_Gd8.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BSzISWDV.js";import"./index-DzN3aT-y.js";import"./index-TjqOvBrG.js";import"./clsx-B-dksMZM.js";import"./index-N0HJx9V2.js";import"./24-Wv8b4C8A.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-BhxlvnnA.js";import"./index-COV9g-2Q.js";import"./index-DC_nQVbx.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-C2G2GNsa.js";import"./24-B4fAX0Ec.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-B-tnmrg_.js";import"./16-LI8OsMJg.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./16-C5RTlL5k.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-Dy1IE1cv.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./index-CnTjgQRx.js";import"./index-y2k2yeKx.js";import"./index-C6st097g.js";import"./index-DSz2Fxi8.js";import"./index-Dyd59tUY.js";import"./index-DJrVOycg.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./sizesMapping-D8QavrGc.js";import"./index-Da_FDSx_.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./index-D02QEMLS.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-CZ0fPPTA.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CjWSOjsl.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-B9-K2gEf.js";import"./index-Bikxfajv.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DvU_tOJJ.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DvSn1Rpa.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",O="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect",A=()=>{const[t,l]=x.useState(0),i=`const options = [
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
