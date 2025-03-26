import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as f}from"./index-CbmgEnq2.js";import{am as x,an as b,ao as j}from"./chunk-NUUEMKO5-BK9CUJIK.js";import{ah as r,aH as h}from"./TreeList-Dh2Lv8tO.js";import{DecoratorDefault as C}from"./Decorator.stories-B1hjNCvN.js";import{r as g}from"./index-Bnop-kX6.js";import{s as c,H as v,E as o}from"./Header-BHWwL9vi.js";import{P as y}from"./Properties-DpgIJZsv.js";import{T as k}from"./Tests-BqGfmizO.js";import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import{a as D}from"./argsTypes-DwmAfTq9.js";import"./iframe-DabTaeH3.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DJHrZL3r.js";import"./index-B5g4YLzC.js";const A=()=>{const[t,l]=g.useState(0),s=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,i=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default  App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Одиночный выбор"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  )
};
`,n=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default  App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Множественный выбор"
        multiple
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  )
};
`,p=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Выбор с поиском"
        isSearchable
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`,m=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Disabled" disabled />
  </>
);
`,d=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Размер xs"
        size="xs"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`,S=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Скролл"
        scrollingItems={2}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`,u=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Цвет success"
        color="success"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`;return e.jsxs("div",{className:c.wrapper,children:[e.jsx(v,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select"}),e.jsx("div",{className:c.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>l(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент Select с одиночным выбором",code:i}),e.jsx(o,{description:"Компонент Select с возможностью множественного выбора",code:n}),e.jsx(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:p}),e.jsx(o,{description:"Select в состоянии disabled",code:m}),e.jsx(o,{description:"Экстра компактный Select",code:d}),e.jsx(o,{description:"Select с установленным скроллом",code:S}),e.jsx(o,{description:"Select с цветом success",code:u}),e.jsx(o,{height:200,description:"Пустой Select",code:`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

export default App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={[]}
        label="Пустой select"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`}),e.jsx(y,{argsTypes:D})]}),Number(t)===1&&e.jsx(k,{componentName:"Select"})]})};function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/Select/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e.jsx(b,{of:C}),`
`,e.jsx(j,{children:e.jsx(A,{})})]})}function ie(t={}){const{wrapper:l}={...f(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(a,{...t})}):a()}export{ie as default};
