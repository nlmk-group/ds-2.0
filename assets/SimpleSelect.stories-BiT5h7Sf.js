import{U as n,M as h,e as C}from"./chunk-HLWAVYOI-C7PqFZo0.js";import{J as i,ad as c}from"./index-CTSkFh7q.js";import{a as s,j as e,F as u}from"./jsx-runtime-2xDJh5tt.js";import{r as k}from"./index-CBqU2yxZ.js";import{s as p,H as N,E as a,T as w}from"./Tests-Tg5e2fxD.js";import{F as x}from"./FigmaEmbed-DJ6dUPkg.js";import{P as A}from"./Properties-DBrGegiF.js";import"./generateUUID-B5cPxuxR.js";import"./index-CcmeEFL2.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as I}from"./index-nWYpQihe.js";import"./index-D_LOBm7Z.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-DkuQRQ9j.js";import"./32-C0P3XX_L.js";import{a as M}from"./argsTypes-DabukJ6c.js";import{useMDXComponents as O}from"./index-DI5IigMn.js";import"./iframe-CDZx1GSb.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-B4-PFky_.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-C4g1n-GZ.js";import"./index-CMH8wQUv.js";const d=()=>{const[t,l]=k.useState(0),o=`const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
  ];`,b=`
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
`,v=`
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
`,f=`
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
`,g=`
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
`,y=`
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
`;return s("div",{className:p.wrapper,children:[e(N,{title:"SimpleSelect",description:"SimpleSelect позволяет пользователям выбирать один элемент из списка. Он поддерживает различные настройки и стили.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SimpleSelect",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:p.tabs,children:s(i,{children:[e(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>l(1)}),e(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>l(2)})]})}),Number(t)===0&&s(u,{children:[e(a,{description:"Компонент SimpleSelect с одиночным выбором",code:b}),e(a,{description:"SimpleSelect в состоянии disabled",code:v}),e(a,{description:"Экстра компактный SimpleSelect",code:f}),e(a,{description:"SimpleSelect с установленным скроллом",code:g}),e(a,{description:"SimpleSelect с цветом success",code:y}),e(a,{height:200,description:"Пустой SimpleSelect",code:`
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
`}),e(A,{argsTypes:M})]}),Number(t)===1&&e(x,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(I,{variant:"Heading4",color:"primary",children:e(w,{componentName:"SimpleSelect"})})]})};function r(t){return s(u,{children:[e(h,{title:"Components/SimpleSelect/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"},jest:["SimpleSelect.test.tsx"]}}),`
`,e(C,{name:"Docs",children:e(n,{children:e(d,{})})})]})}function q(t={}){const{wrapper:l}=Object.assign({},O(),t.components);return l?e(l,{...t,children:e(r,{...t})}):r()}const S=()=>e(n,{children:e(d,{})});S.storyName="Docs";S.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const m={title:"Components/SimpleSelect/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"},jest:["SimpleSelect.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:q};const de=["docs"];export{de as __namedExportsOrder,m as default,S as docs};
