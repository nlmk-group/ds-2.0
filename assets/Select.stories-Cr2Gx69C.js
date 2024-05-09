import{U as p,M as x,e as k}from"./chunk-HLWAVYOI-Ch1IEzre.js";import{C as l,a5 as m}from"./index-CnL2Y1yT.js";import{a as c,j as e,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as w}from"./index-CBqU2yxZ.js";import{s as a,H as N,E as o,T as M}from"./Tests-ByYiu-7-.js";import{F as D}from"./FigmaEmbed-BUFRpaj3.js";import{P as T}from"./Properties-Nvz-lqsf.js";import"./generateUUID-BVRVPcdt.js";import"./index-jIJAWU0x.js";import"./index-B8bUpJH3.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as j}from"./index-CkVMA9Py.js";import"./index-BxqmQ_Es.js";import"./index-Cs1erf_V.js";import"./index-DFf4wlr3.js";import"./index-lhFT6koy.js";import"./index-fHOzSRtI.js";import"./32-CH6kctYz.js";import{a as A}from"./argsTypes-D9DFmgcc.js";import{useMDXComponents as q}from"./index-DI5IigMn.js";import"./iframe-BdulU-RU.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-CqTSy7Yj.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B1rhm0lK.js";import"./index-prZMZXcd.js";const S=()=>{const[t,r]=w.useState(0),s=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,f=`
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
`,b=`
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
`,g=`
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
`,h=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Disabled" disabled />
  </>
);
`,y=`
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
`,C=`
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
`,v=`
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
`;return c("div",{className:a.wrapper,children:[e(N,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:a.tabs,children:c(l,{children:[e(l.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(l.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),e(l.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&c(d,{children:[e(o,{description:"Компонент Select с одиночным выбором",code:f}),e(o,{description:"Компонент Select с возможностью множественного выбора",code:b}),e(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:g}),e(o,{description:"Select в состоянии disabled",code:h}),e(o,{description:"Экстра компактный Select",code:y}),e(o,{description:"Select с установленным скроллом",code:C}),e(o,{description:"Select с цветом success",code:v}),e(o,{height:200,description:"Пустой Select",code:`
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
`}),e(T,{argsTypes:A})]}),Number(t)===1&&e(D,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(j,{variant:"Heading4",color:"primary",children:e(M,{componentName:"Select"})})]})};function n(t){return c(d,{children:[e(x,{title:"Components/Select/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e(k,{name:"Docs",children:e(p,{children:e(S,{})})})]})}function E(t={}){const{wrapper:r}=Object.assign({},q(),t.components);return r?e(r,{...t,children:e(n,{...t})}):n()}const u=()=>e(p,{children:e(S,{})});u.storyName="Docs";u.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const i={title:"Components/Select/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["docs"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:E};const be=["docs"];export{be as __namedExportsOrder,i as default,u as docs};
