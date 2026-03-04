import{r as v,j as e,m as x,S as f,U as g}from"./iframe-CE_JzATH.js";import{useMDXComponents as h}from"./index--LKfDmxm.js";import{S as I}from"./index-DuLnj-te.js";import{DecoratorDefault as j}from"./Decorator.stories-Cj-tg-7N.js";import{s as m,H as C,E as l}from"./Header-CEastCIP.js";import{F as k}from"./FigmaEmbed-CqtAEVAd.js";import{P as O,T as V}from"./Tests-BOPY5pZ5.js";import{T as p}from"./index-DR6oWFtr.js";import{a as A}from"./argsTypes-CnufI8iF.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DqQz5Bh6.js";import"./index-BBICZI1L.js";import"./index-Vjux8dVh.js";import"./clsx-B-dksMZM.js";import"./index-CuFOreg9.js";import"./24-DGYmTzFV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DYU6s7CX.js";import"./index-CLTGTTU8.js";import"./index-C9knVUuX.js";import"./index-BFAgnURa.js";import"./index-MfvAP8aB.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-DEt0-nuC.js";import"./24-Cd5pTj28.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-J6XSru0N.js";import"./16-DWPiS2iU.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";import"./16-BkTHhwnS.js";import"./useFloatingReferenceSync-B_aNqrAc.js";import"./index-2jg-3oeM.js";import"./index-DTnW7Fop.js";import"./types-TdnjS80C.js";import"./floating-ui.react-BU5fnxMH.js";import"./index-D_aCbd9C.js";import"./index-BmicXPVL.js";import"./index-vmgVWNov.js";import"./index-14rW-JY7.js";import"./index-BGKZjWkn.js";import"./index-BzyAc0E-.js";import"./index-Dg5Lxpt5.js";import"./index-BiitYh94.js";import"./sizesMapping-D8QavrGc.js";import"./index-Dlf_Ao8T.js";import"./index-DCIzctxN.js";import"./index-D9YxWY4C.js";import"./index-Os9u-Jz6.js";import"./index-BaSH6PPb.js";import"./index-Bz3uj4QG.js";import"./index-BvCaACBB.js";import"./index-1zCxhXDP.js";import"./index-C1XFyCw_.js";import"./index-3C1lTiZm.js";import"./index-zLxCaNl1.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B7kzxF9t.js";import"./index-e5L8QLyK.js";import"./index-GJu7X8CR.js";import"./index-CIwcf8Lj.js";import"./index-B98ISFmk.js";import"./index-Bd3jAiyn.js";import"./index-Dg1nWoIh.js";import"./index-DFbFAj2G.js";import"./index-Y_CVE_H3.js";import"./index-8oyMVyrk.js";import"./index-QZq9zOpZ.js";import"./index-CT3rs89l.js";import"./index-CAijYJEe.js";import"./index-CEXEVLrc.js";import"./index-pURGVU60.js";import"./index-D1Sci6D5.js";import"./index-kWQnP7zC.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-tXN-kzru.js";import"./index-DCIrx6NW.js";import"./index-DHVZe4vO.js";import"./index-C7v9s-B0.js";import"./index-y0ewvpMP.js";import"./index-OcscY6If.js";import"./index-DjVMJKcc.js";import"./index-TCeJA5jN.js";import"./index-DtSKDO7f.js";import"./index-DPX3eImA.js";import"./index-DNC3PuSz.js";import"./index-CIs5j9YL.js";import"./index-Bie4xbHL.js";import"./index-WRw5KxXj.js";import"./index-DYl6OFvJ.js";import"./ComboBox-KBNGbY8a.js";import"./index-BdsesjiO.js";import"./TreeList-t_ASH-u2.js";import"./copyToClipboard-DB_KM_BY.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397",y="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",N=()=>{const[t,i]=v.useState(0),o=`const options = [
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
`,e.jsx(g,{children:e.jsx(N,{})})]})}function Vt(t={}){const{wrapper:i}={...h(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r()}export{Vt as default};
