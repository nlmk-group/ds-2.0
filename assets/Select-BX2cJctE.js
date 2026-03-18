import{r as f,j as e,m as x,S as b,U as j}from"./iframe-CiNcYurr.js";import{useMDXComponents as C}from"./index-BaUxFINc.js";import{S as g}from"./index-C0rE8VRv.js";import{DecoratorDefault as h}from"./Decorator.stories-CMY6PrD1.js";import{s as p,H as v,E as o}from"./Header-CSF8pD8M.js";import{P as y,T as k}from"./Tests-CuCRZHAs.js";import{T as i}from"./index-BGUexdM0.js";import{a as D}from"./argsTypes-DVvIbylh.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-5P6wQBGT.js";import"./types-TdnjS80C.js";import"./floating-ui.react-kz-yE5c0.js";import"./clsx-B-dksMZM.js";import"./sizesMapping-D8QavrGc.js";import"./index-C62Rz3pb.js";import"./index-ChNBy6a5.js";import"./index-DMves0z1.js";import"./index-Cc3zI-Zi.js";import"./index-BW3E00_d.js";import"./24-ByfXT0PC.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-DKGBjWfT.js";import"./index-BAO_EFiP.js";import"./index-KTbM5ka_.js";import"./32-BIZlbf4u.js";import"./24-C4GcDMUE.js";import"./24-BpIVUa9s.js";import"./24-CM41UcFe.js";import"./24-CuMa5vAe.js";import"./24-Dn2lqm-y.js";import"./24-WK1b6lfV.js";import"./24-CbtCS4aD.js";import"./24-Hf1fmE8D.js";import"./16-Bzi-BRTw.js";import"./24-Bt6gBPsC.js";import"./24-B1PR4U9W.js";import"./16-87YGvwqM.js";import"./16-D_wDoKTV.js";import"./16-DGHcuNOQ.js";import"./index-BgSHXntA.js";import"./index-B6F5exii.js";import"./index-BK6wfwgJ.js";import"./index-B5JbKXfP.js";import"./index-Bmplgm43.js";import"./index-Bm9ZTaRK.js";import"./index-BTbdo8J6.js";import"./index-nCUMzYDY.js";import"./index-ipRY-F18.js";import"./index-BnnFEDSq.js";import"./index-WfOI5tKp.js";import"./index-Di3Tf_NZ.js";import"./index-BSCmrBEE.js";import"./index-k-8s0_Jc.js";import"./index-DtsZdW_k.js";import"./index-BASSBPqG.js";import"./index-BDsxwAhX.js";import"./index-7l3FwTp_.js";import"./index-C19bQcdj.js";import"./index-BvLTT0Bc.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-xNLQpI5_.js";import"./useFloatingReferenceSync-N5nxTT3h.js";import"./index-tFFXhZ5g.js";import"./index-CctpJQDv.js";import"./index-BR9FB4KQ.js";import"./index-BPA0dgrp.js";import"./index-CC8vLZx7.js";import"./index-8zO7yMOe.js";import"./index-DGAhwUTe.js";import"./index-DXyu3KnF.js";import"./index-TMf-q5Af.js";import"./index-DwZld9Xy.js";import"./index-Bfa5kPEf.js";import"./index-CWXYOrIJ.js";import"./index-C5ZdoSw6.js";import"./index-G7kzCBo_.js";import"./index-BlcuogSf.js";import"./index-DiIsinIh.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-MwaXdhFc.js";import"./index-Vn4Jr9MH.js";import"./index-BSRH1Q8Z.js";import"./index-Djipz1eP.js";import"./index-oG78am6U.js";import"./index-5yXCpVDE.js";import"./index-B5C_MfFj.js";import"./index-CPQDgGpy.js";import"./index-C-OYgTT5.js";import"./index-DpcbdR_F.js";import"./index-Dk716a-C.js";import"./index-BErnz41e.js";import"./index-Cd5eTZd_.js";import"./index-CUllg0k1.js";import"./index-BdhXnQ-k.js";import"./index-C-hD1Qn7.js";import"./index-Dcu3xPiM.js";import"./index-FqvjfKzP.js";import"./ComboBox-moTAJumu.js";import"./index-CLQNWR2i.js";import"./TreeList-Amzwxkac.js";import"./copyToClipboard-DB_KM_BY.js";const A=()=>{const[t,s]=f.useState(0),r=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,m=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${r}

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
`,c=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${r}

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
`,n=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${r}

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
`,a=`import { Select } from '@nlmk/ds-2.0';

${r}

export default App = () => (
  <>
    <Select options={options} label="Disabled" disabled />
  </>
);
`,d=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${r}

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

${r}

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

${r}

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
`;return e.jsxs("div",{className:p.wrapper,children:[e.jsx(v,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select"}),e.jsx("div",{className:p.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>s(0)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>s(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент Select с одиночным выбором",code:m}),e.jsx(o,{description:"Компонент Select с возможностью множественного выбора",code:c}),e.jsx(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:n}),e.jsx(o,{description:"Select в состоянии disabled",code:a}),e.jsx(o,{description:"Экстра компактный Select",code:d}),e.jsx(o,{description:"Select с установленным скроллом",code:S}),e.jsx(o,{description:"Select с цветом success",code:u}),e.jsx(o,{minHeight:200,description:"Пустой Select",code:`
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
`}),e.jsx(y,{argsTypes:D})]}),Number(t)===1&&e.jsx(k,{componentName:"Select"})]})};function l(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/Select/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e.jsx(b,{of:h}),`
`,e.jsx(j,{children:e.jsx(A,{})})]})}function kt(t={}){const{wrapper:s}={...C(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l()}export{kt as default};
