import{r as f,j as e,m as x,S as b,U as j}from"./iframe-BPtLBEuk.js";import{useMDXComponents as C}from"./index-DY5aY42c.js";import{S as h}from"./index-BGle18_j.js";import{DecoratorDefault as g}from"./Decorator.stories-Bt-6wqMy.js";import{s as c,H as v,E as o}from"./Header-lxb-Wymn.js";import{P as y}from"./Properties-u6_xeg7P.js";import{T as k}from"./Tests-DUUoQDTR.js";import{T as l}from"./index-CX87Y9E4.js";import{a as D}from"./argsTypes-DVvIbylh.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-jNLleeyk.js";import"./types-TdnjS80C.js";import"./floating-ui.react-tm3IGrEk.js";import"./clsx-B-dksMZM.js";import"./sizesMapping-D8QavrGc.js";import"./index-D-pLh_NR.js";import"./index-C9_7xPUt.js";import"./index-C1n_EcZz.js";import"./index-etTcxdeZ.js";import"./index-C1wwabMN.js";import"./index-C5OaxW6Y.js";import"./24-DOwtHgIx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B8NQmRXS.js";import"./index-Dr7AntG3.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";import"./index-BABQ5Crx.js";import"./index-TTLR_33A.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./index-yAFWEvQV.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";const A=()=>{const[t,r]=f.useState(0),s=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,p=`
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
`,a=`
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
`;return e.jsxs("div",{className:c.wrapper,children:[e.jsx(v,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select"}),e.jsx("div",{className:c.tabs,children:e.jsxs(l,{children:[e.jsx(l.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(l.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>r(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент Select с одиночным выбором",code:p}),e.jsx(o,{description:"Компонент Select с возможностью множественного выбора",code:n}),e.jsx(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:a}),e.jsx(o,{description:"Select в состоянии disabled",code:m}),e.jsx(o,{description:"Экстра компактный Select",code:d}),e.jsx(o,{description:"Select с установленным скроллом",code:S}),e.jsx(o,{description:"Select с цветом success",code:u}),e.jsx(o,{height:200,description:"Пустой Select",code:`
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
`,e.jsx(b,{of:g}),`
`,e.jsx(j,{children:e.jsx(A,{})})]})}function Te(t={}){const{wrapper:r}={...C(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(i,{...t})}):i()}export{Te as default};
