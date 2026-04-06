import{r as v,j as e,m as x,S as f,U as g}from"./iframe-adG_7yRG.js";import{useMDXComponents as h}from"./index-Cg8Pf3Pw.js";import{S as I}from"./index-B9-K2gEf.js";import{DecoratorDefault as j}from"./Decorator.stories-Beo23sgK.js";import{s as m,H as C,E as l}from"./Header-cMHYDLeC.js";import{F as k}from"./FigmaEmbed-BWR-OLCZ.js";import{P as O,T as V}from"./Tests-C1XQ0sNC.js";import{T as p}from"./index-Yehuvb9K.js";import{a as A}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BSzISWDV.js";import"./index-DzN3aT-y.js";import"./index-TjqOvBrG.js";import"./clsx-B-dksMZM.js";import"./index-N0HJx9V2.js";import"./24-Wv8b4C8A.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-Bw5qm4Ov.js";import"./index-75kOkesn.js";import"./index-BhxlvnnA.js";import"./index-COV9g-2Q.js";import"./index-DC_nQVbx.js";import"./32-B9XnRb5u.js";import"./24-DrBRk2vS.js";import"./24-BuaVNHQi.js";import"./24-C2G2GNsa.js";import"./24-B4fAX0Ec.js";import"./24-GH3yabNM.js";import"./24-BDLYxJUB.js";import"./24-DcUw9JWs.js";import"./24-B-tnmrg_.js";import"./16-LI8OsMJg.js";import"./24-BxGqfMjL.js";import"./24-B0jNPX91.js";import"./16-BTp4GQQG.js";import"./16-D-NUuvME.js";import"./16-C5RTlL5k.js";import"./useFloatingReferenceSync-D48fx_Db.js";import"./index-Dy1IE1cv.js";import"./index-CwSciSyB.js";import"./types-TdnjS80C.js";import"./floating-ui.react-7VA0tf7C.js";import"./index-CnTjgQRx.js";import"./index-y2k2yeKx.js";import"./index-C6st097g.js";import"./index-DSz2Fxi8.js";import"./index-Dyd59tUY.js";import"./index-DJrVOycg.js";import"./index-DtX9i5FK.js";import"./index-B1pHFt52.js";import"./sizesMapping-D8QavrGc.js";import"./index-Da_FDSx_.js";import"./index-U_RCd_HH.js";import"./index-CMSErBpE.js";import"./index-CzkpZwDT.js";import"./index-BOTgB3bz.js";import"./index-DFAIDFiK.js";import"./index-CkcKW4Vm.js";import"./index-C0jfxf7x.js";import"./index-Csnb6gHF.js";import"./index-BYkQO_14.js";import"./index-CsSUhH6Q.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Cl0xhJAL.js";import"./index-D02QEMLS.js";import"./index-CXTleZNA.js";import"./index-aAdctPR4.js";import"./index-onHurrhQ.js";import"./index-QnhurHRA.js";import"./index--d2ZPp2Q.js";import"./index-44u0uri5.js";import"./index-PgA7KtkC.js";import"./index-CzL7ANP0.js";import"./index-DFN2ZEva.js";import"./index-B97cDh6f.js";import"./index-CZ0fPPTA.js";import"./index-BMxGNkbP.js";import"./index-Bj8TCYsg.js";import"./index-KPC3KFCd.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CjWSOjsl.js";import"./index-x0hwq8uq.js";import"./index-BwyGxYsl.js";import"./index-BkYL4d7S.js";import"./index-Bikxfajv.js";import"./index-xPNSVzye.js";import"./index-Bh4CHjuX.js";import"./index-DCdHhu1d.js";import"./index-DvU_tOJJ.js";import"./index-DcziJIpL.js";import"./index-CQDvThHr.js";import"./index-BvXrgCCA.js";import"./index-DvSn1Rpa.js";import"./index-DlthScRn.js";import"./index-Dmvi1Ah7.js";import"./index-Bv05uYkg.js";import"./index-Cl4HH77d.js";import"./index-CTk4SyJ7.js";import"./ComboBox-C085h5Nz.js";import"./index-C3nPMNvV.js";import"./TreeList-zjoUqghX.js";import"./copyToClipboard-DB_KM_BY.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",y="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",N=()=>{const[t,i]=v.useState(0),o=`const options = [
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

${o}

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

${o}

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

${o}

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

${o}

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

${o}

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
`,d=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('steel');
  return (
    <SimpleSelect value={value} onChange={setValue} label="Кастомное отображение" displayValue="Выбран металл">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`,b=`
  import { SimpleSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${o}

const App = () => {
  const [value, setValue] = useState('');
  return (
    <SimpleSelect
      value={value}
      onChange={setValue}
      label="Меню через портал"
      withPortal
      portalContainerId="root"
      menuWidth="360px"
    >
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
export default App;
`;return e.jsxs("div",{className:m.wrapper,children:[e.jsx(C,{title:"SimpleSelect",description:"SimpleSelect используется для выбора одного значения из списка и поддерживает поиск, портал, стилизацию и управление отображаемым значением.",isStable:!0,codeLink:y,figmaLink:a}),e.jsx("div",{className:m.tabs,children:e.jsxs(p,{children:[e.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(l,{minHeight:400,description:"Базовый выбор одного значения.",code:s}),e.jsx(l,{minHeight:400,description:"Недоступное состояние компонента.",code:n}),e.jsx(l,{minHeight:400,description:"Компактный размер компонента через size='xs'.",code:c}),e.jsx(l,{minHeight:400,description:"Ограничение видимых опций через scrollingItems.",code:u}),e.jsx(l,{minHeight:400,description:"Цветовое состояние через color='success'.",code:S}),e.jsx(l,{minHeight:400,description:"Кастомное отображаемое значение через displayValue.",code:d}),e.jsx(l,{minHeight:400,description:"Рендер списка через портал и настройка ширины меню.",code:b}),e.jsx(l,{minHeight:400,description:"Состояние без доступных опций.",code:`
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
`}),e.jsx(O,{argsTypes:A})]}),Number(t)===1&&e.jsx(k,{url:a}),Number(t)===2&&e.jsx(V,{componentName:"SimpleSelect"})]})};function r(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/SimpleSelect/Info",component:I,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397"},jest:["SimpleSelect.test.tsx"]}}),`
`,e.jsx(f,{of:j}),`
`,e.jsx(g,{children:e.jsx(N,{})})]})}function yt(t={}){const{wrapper:i}={...h(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r()}export{yt as default};
