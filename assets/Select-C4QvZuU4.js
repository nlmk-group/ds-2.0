import{r as f,j as e,m as x,S as b,U as j}from"./iframe-CHHQDVoX.js";import{useMDXComponents as C}from"./index-B1LTtkqD.js";import{S as g}from"./index-DZgd0Qfe.js";import{DecoratorDefault as h}from"./Decorator.stories-DNZYnr5K.js";import{s as p,H as v,E as o}from"./Header-C4Gtm_L5.js";import{P as y,T as k}from"./Tests-B0qmEzAm.js";import{T as i}from"./index-BTZVm9Y3.js";import{a as D}from"./argsTypes-DVvIbylh.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-IsGk3ZIX.js";import"./types-TdnjS80C.js";import"./floating-ui.react-6VfTZOrw.js";import"./clsx-B-dksMZM.js";import"./sizesMapping-D8QavrGc.js";import"./index-CwmmLxy5.js";import"./index-C5RO9eqh.js";import"./index-CJmLln8K.js";import"./index-CSuovX3X.js";import"./index-DYQTidD-.js";import"./24-CD6xrv2j.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-dSmaknGw.js";import"./index-De57FWCK.js";import"./index-Di9izlqG.js";import"./32-BrvnL8Hj.js";import"./24-BunGgvie.js";import"./24-CZW84qpr.js";import"./24-O653EECt.js";import"./24-DIXfQiLz.js";import"./24-CWmeerJT.js";import"./24-Gpv48tUf.js";import"./24-BKM1KU47.js";import"./24-JhZx5C50.js";import"./16-1skbPHrv.js";import"./24-Bp815V0R.js";import"./24-BaGOPWtX.js";import"./16-CjM46jjK.js";import"./16-DL1hQxMw.js";import"./16-CzdCZHDH.js";import"./index-DBfCc0Jn.js";import"./index-CdHeQl8P.js";import"./index-DucDzwTg.js";import"./index-XGZPkqjb.js";import"./index-vSQLaUqp.js";import"./index-BEx0Kzll.js";import"./index-BHnpI8kT.js";import"./index-BzIC8vFU.js";import"./index-B-9sGLZR.js";import"./index-BANVVOGG.js";import"./index-DxMlVd1J.js";import"./index-DtzYchqB.js";import"./index-D-VDIxFn.js";import"./index-BmtuxTTp.js";import"./index-CMjJ_rHR.js";import"./index-Y1gY5mOJ.js";import"./index-DmLZE8cz.js";import"./index-BI9I3JHz.js";import"./index-8V-zlFGO.js";import"./index-qkZhGjnb.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-01GcG0LR.js";import"./useFloatingReferenceSync-adXaq3Ya.js";import"./index-KI_mLAAh.js";import"./index-BtFeD-3X.js";import"./index-CxXtU9jM.js";import"./index-DD65tyqZ.js";import"./index-3J2s6a0v.js";import"./index-C6OX9F5-.js";import"./index-DvPBu460.js";import"./index-BhlmHl_K.js";import"./index-DicmkMu7.js";import"./index-CRrW3b0X.js";import"./index-G8_-uYaZ.js";import"./index-CC5B16j-.js";import"./index-TWHnUoEw.js";import"./index-a9LznR3Q.js";import"./index-HGD0h4gs.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CWser92f.js";import"./index-CQek3CAN.js";import"./index-p2bUiyyW.js";import"./index-CzvxnUYC.js";import"./index-B1ffb27g.js";import"./index-DdD0P9sc.js";import"./index-DhCDiUD2.js";import"./index-DgjlDdW0.js";import"./index-Ge3Tw8iO.js";import"./index-CNVqUNB9.js";import"./index-BGj-2ukp.js";import"./index-Bg5xPX9b.js";import"./index-c_MoiZvK.js";import"./index-U8RdPQdR.js";import"./index-rMcQZCT_.js";import"./index-DqjA2CJI.js";import"./index-DUcChkPA.js";import"./index-Bd568ebt.js";import"./index-CXzLkByr.js";import"./ComboBox-BthUrrTu.js";import"./index-CV7DnwVd.js";import"./TreeList-BLcOMBIT.js";import"./copyToClipboard-DB_KM_BY.js";const A=()=>{const[t,s]=f.useState(0),r=`const options = [
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
