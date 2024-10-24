import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as f}from"./index-CpguRmgc.js";import{ag as x,ah as b,ai as j}from"./chunk-NUUEMKO5-DmRVdHm4.js";import{a0 as r,aj as h}from"./index-LmI_Dv35.js";import{DecoratorDefault as C}from"./Decorator.stories-Cj5eYJIK.js";import{r as g}from"./index-DQ2WTIsS.js";import{s as c,H as v,E as o}from"./Header-DSdDcM52.js";import{P as y}from"./Properties-BBxvoQ9o.js";import{T as k}from"./Tests-DuDJvCih.js";import"./generateUUID-DDiDEiZj.js";import"./index-BUicYAu_.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as D}from"./argsTypes-DyjRCKmq.js";import"./iframe-BdS8jkpQ.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BHGErQnu.js";import"./index-BKbm6zW0.js";const A=()=>{const[t,l]=g.useState(0),s=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,a=`
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
`;return e.jsxs("div",{className:c.wrapper,children:[e.jsx(v,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select"}),e.jsx("div",{className:c.tabs,children:e.jsxs(r,{children:[e.jsx(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>l(0)}),e.jsx(r.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>l(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент Select с одиночным выбором",code:a}),e.jsx(o,{description:"Компонент Select с возможностью множественного выбора",code:n}),e.jsx(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:p}),e.jsx(o,{description:"Select в состоянии disabled",code:m}),e.jsx(o,{description:"Экстра компактный Select",code:d}),e.jsx(o,{description:"Select с установленным скроллом",code:S}),e.jsx(o,{description:"Select с цветом success",code:u}),e.jsx(o,{height:200,description:"Пустой Select",code:`
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
`}),e.jsx(y,{argsTypes:D})]}),Number(t)===1&&e.jsx(k,{componentName:"Select"})]})};function i(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/Select/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e.jsx(b,{of:C}),`
`,e.jsx(j,{children:e.jsx(A,{})})]})}function ae(t={}){const{wrapper:l}={...f(),...t.components};return l?e.jsx(l,{...t,children:e.jsx(i,{...t})}):i()}export{ae as default};
