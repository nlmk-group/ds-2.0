import{r as v,j as e,m as x,S as f,U as g}from"./iframe-CbS8bInr.js";import{useMDXComponents as h}from"./index-FQFA8fbo.js";import{S as I}from"./index-DmffHaCi.js";import{DecoratorDefault as j}from"./Decorator.stories-B_ZhqKNm.js";import{s as m,H as C,E as l}from"./Header-DtwNtocj.js";import{F as k}from"./FigmaEmbed-DlxN5nCc.js";import{P as O,T as V}from"./Tests-CELr3Suj.js";import{T as p}from"./index-BZODxpmY.js";import{a as A}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-ZFz_t-ha.js";import"./index-DFlE0BoX.js";import"./index-YseVeHvS.js";import"./clsx-B-dksMZM.js";import"./index-BmJKslqM.js";import"./24-BfjqGgZ9.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-Bl1t28dV.js";import"./index-BYj-taLQ.js";import"./index-CjORfByN.js";import"./index-DgZPBMQ0.js";import"./index-CA2hv6TN.js";import"./32-BZ5ZA3rE.js";import"./24-CiyiO54M.js";import"./24-Di0nu-by.js";import"./24-Sa4UUf3z.js";import"./24-CC9V7_4j.js";import"./24-CqnhtF5T.js";import"./24-BWksqsvG.js";import"./24-mlG8Xvhb.js";import"./24-B8ZOnMJQ.js";import"./16-aZBE51Hh.js";import"./24-BGnREA9p.js";import"./24-C_iNukEM.js";import"./16-BMdnWzuc.js";import"./16-CGq2ocz6.js";import"./16-B5g6d240.js";import"./useFloatingReferenceSync-CLFAbrLx.js";import"./index-B6Qf8jdS.js";import"./index-4JwXcQ6W.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CCPXVVQu.js";import"./index-CKjhTvOz.js";import"./index-CrvMY39-.js";import"./index-8cX9WAIH.js";import"./index-OI82wUv3.js";import"./index-DsMC7Zj7.js";import"./index-BRRvAv7x.js";import"./index-CD4Ms4Kk.js";import"./index-CF1r-WqF.js";import"./sizesMapping-D8QavrGc.js";import"./index-CNVtutNW.js";import"./index-DNdNd9K1.js";import"./index-BseawL0q.js";import"./index-BR8A-Tk7.js";import"./index-CxpitsSn.js";import"./index-ClICwiNM.js";import"./index-rEDSKjd0.js";import"./index-ef9lu6Ja.js";import"./index-D4khgXsL.js";import"./index-DkJpm8py.js";import"./index-CdD_sciz.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B-JpRLL-.js";import"./index-DskViU9t.js";import"./index-DL8dHQVX.js";import"./index-DjEFd8p0.js";import"./index-DuRcBvNr.js";import"./index-CDdYNhVB.js";import"./index-CTYy3ATz.js";import"./index-RC84cX2N.js";import"./index-1okAfVDI.js";import"./index-BZnrPoK4.js";import"./index-Bb6ai6CK.js";import"./index-B-o2ielS.js";import"./index-Bu3gBpCD.js";import"./index-sRzOyYuW.js";import"./index-OTRnbLNR.js";import"./index-DQhvKMWh.js";import"./index-CqrliyN6.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-QP3zFYLY.js";import"./index-fm5omEVd.js";import"./index-DT6Z4PFF.js";import"./index-CR0-Vswk.js";import"./index-Bmek4GOF.js";import"./index-IW_o2CdI.js";import"./index-C7nQdULz.js";import"./index-0rd4srWV.js";import"./index-CXElAOzz.js";import"./index-WNdB1hMv.js";import"./index-C3xH0iq7.js";import"./index-DfNwsgKQ.js";import"./index-C-2db-Xh.js";import"./index-DhhLArOn.js";import"./index-DInBiNnO.js";import"./index-7qjhDsEe.js";import"./ComboBox-BZRB6Qpf.js";import"./index-DfGlJ-l6.js";import"./TreeList-BbNfEBTC.js";import"./copyToClipboard-DB_KM_BY.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",y="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",N=()=>{const[t,i]=v.useState(0),o=`const options = [
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
`,e.jsx(g,{children:e.jsx(N,{})})]})}function At(t={}){const{wrapper:i}={...h(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r()}export{At as default};
