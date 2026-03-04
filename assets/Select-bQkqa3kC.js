import{r as f,j as e,m as x,S as b,U as j}from"./iframe-CE_JzATH.js";import{useMDXComponents as C}from"./index--LKfDmxm.js";import{S as g}from"./index-BiitYh94.js";import{DecoratorDefault as h}from"./Decorator.stories-Cj-tg-7N.js";import{s as p,H as v,E as o}from"./Header-CEastCIP.js";import{P as y,T as k}from"./Tests-BOPY5pZ5.js";import{T as i}from"./index-DR6oWFtr.js";import{a as D}from"./argsTypes-DVvIbylh.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DTnW7Fop.js";import"./types-TdnjS80C.js";import"./floating-ui.react-BU5fnxMH.js";import"./clsx-B-dksMZM.js";import"./sizesMapping-D8QavrGc.js";import"./index-CuFOreg9.js";import"./index-Vjux8dVh.js";import"./index-DYU6s7CX.js";import"./index-CLTGTTU8.js";import"./index-BBICZI1L.js";import"./24-DGYmTzFV.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-C9knVUuX.js";import"./index-BFAgnURa.js";import"./index-MfvAP8aB.js";import"./32-CrxSrIcc.js";import"./24-0Dk1wnnD.js";import"./24-BBq2cK-Y.js";import"./24-DEt0-nuC.js";import"./24-Cd5pTj28.js";import"./24-HbFaW7H_.js";import"./24-BQMnublh.js";import"./24-DzFwSmYQ.js";import"./24-J6XSru0N.js";import"./16-DWPiS2iU.js";import"./24-CjAn70IH.js";import"./24-D38MhcLh.js";import"./16-BIs1fvk9.js";import"./16-p0CPjrKD.js";import"./16-BkTHhwnS.js";import"./index-BmicXPVL.js";import"./index-Dlf_Ao8T.js";import"./index-D_aCbd9C.js";import"./index-vmgVWNov.js";import"./index-14rW-JY7.js";import"./index-DqQz5Bh6.js";import"./index-BGKZjWkn.js";import"./index-BzyAc0E-.js";import"./index-2jg-3oeM.js";import"./index-Dg5Lxpt5.js";import"./index-DCIzctxN.js";import"./index-D9YxWY4C.js";import"./index-Os9u-Jz6.js";import"./index-BaSH6PPb.js";import"./index-Bz3uj4QG.js";import"./index-BvCaACBB.js";import"./index-1zCxhXDP.js";import"./index-C1XFyCw_.js";import"./index-3C1lTiZm.js";import"./index-zLxCaNl1.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-B7kzxF9t.js";import"./useFloatingReferenceSync-B_aNqrAc.js";import"./index-e5L8QLyK.js";import"./index-GJu7X8CR.js";import"./index-CIwcf8Lj.js";import"./index-B98ISFmk.js";import"./index-Bd3jAiyn.js";import"./index-Dg1nWoIh.js";import"./index-DFbFAj2G.js";import"./index-Y_CVE_H3.js";import"./index-8oyMVyrk.js";import"./index-QZq9zOpZ.js";import"./index-CT3rs89l.js";import"./index-CAijYJEe.js";import"./index-CEXEVLrc.js";import"./index-pURGVU60.js";import"./index-D1Sci6D5.js";import"./index-kWQnP7zC.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-tXN-kzru.js";import"./index-DCIrx6NW.js";import"./index-DHVZe4vO.js";import"./index-DuLnj-te.js";import"./index-C7v9s-B0.js";import"./index-y0ewvpMP.js";import"./index-OcscY6If.js";import"./index-DjVMJKcc.js";import"./index-TCeJA5jN.js";import"./index-DtSKDO7f.js";import"./index-DPX3eImA.js";import"./index-DNC3PuSz.js";import"./index-CIs5j9YL.js";import"./index-Bie4xbHL.js";import"./index-WRw5KxXj.js";import"./index-DYl6OFvJ.js";import"./ComboBox-KBNGbY8a.js";import"./index-BdsesjiO.js";import"./TreeList-t_ASH-u2.js";import"./copyToClipboard-DB_KM_BY.js";const A=()=>{const[t,s]=f.useState(0),r=`const options = [
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
`,e.jsx(j,{children:e.jsx(A,{})})]})}function vt(t={}){const{wrapper:s}={...C(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l()}export{vt as default};
