import{r as f,j as e,m as x,S as b,U as j}from"./iframe-D1ppCfJL.js";import{useMDXComponents as C}from"./index-DUXc5yr1.js";import{S as g}from"./MenuItem-BiyJ08nY.js";import{DecoratorDefault as h}from"./Decorator.stories-Ce4quGEU.js";import{s as p,H as v,E as o}from"./Header-CrzktEKM.js";import{P as y,T as k}from"./Tests-ErrWIcVc.js";import{T as s}from"./index-DlP1k4gA.js";import{a as D}from"./argsTypes-DVvIbylh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_EnS4SPv.js";import"./index-B8OV2sj9.js";import"./clsx-B-dksMZM.js";import"./16-Dg_oBXFF.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BkONTIs-.js";import"./index-DTDhhVJl.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-BAWCPbpv.js";import"./types-TdnjS80C.js";import"./floating-ui.react-DKQvXyy0.js";import"./sizesMapping-D8QavrGc.js";import"./index-pBOwR2Sr.js";import"./index-dwkJrdOm.js";import"./24-Dwzv70HG.js";import"./index-DQiorVga.js";import"./24-DvGStvE4.js";import"./index-BuboyXZl.js";import"./index-1Ia9d37J.js";import"./32-DzcHwvay.js";import"./24-Cp8l4Ntb.js";import"./24-CXzdah1X.js";import"./24-eQHncE30.js";import"./24-CRTRQ8Ly.js";import"./24-C2zrmoH8.js";import"./24-DEoWbW1a.js";import"./24-DTwfOo-x.js";import"./24-hEGWduDH.js";import"./16-CJBceTE3.js";import"./24-BoJlH0P7.js";import"./24-DeVNRByj.js";import"./16-DDpVoX5v.js";import"./16-DyMPAZyw.js";import"./16-m76_vWtK.js";import"./16-CtdeCqSX.js";import"./index-CskC-lf5.js";import"./index-BhAG1mVA.js";import"./index-BbmMdiDL.js";import"./index-D3y4eWrN.js";import"./index-BQXeN0eF.js";import"./index-DCLji6qX.js";import"./useFloatingReferenceSync-_s1uppib.js";import"./index-D1MtTpbs.js";import"./index-CdGiUjLy.js";import"./index-CoVi-s7L.js";import"./index-CYVJgBAK.js";import"./index-BwhgPU9I.js";import"./index-DwwGufnW.js";import"./index-DuvGnr4P.js";import"./index-Cn43EhjI.js";import"./index-Dq_AZ4Gl.js";import"./index-BKgG2BUu.js";import"./index-CZz4O3t8.js";import"./index-DDTzxOqr.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-Ct8-B2RS.js";import"./index-BtqWnsFW.js";import"./index-DZ1-9d6d.js";import"./index-BPCh3R_L.js";import"./index-CEUVPE5x.js";import"./index-Bsj2pXl4.js";import"./index-BFBGSixy.js";import"./index-DBTyYIq5.js";import"./index-B2DrMXcC.js";import"./index-CD-VGwDt.js";import"./index-Dt9QaNhs.js";import"./index-C3RlDP0j.js";import"./index-D9eBI-ul.js";import"./index-DvVC4LD1.js";import"./index-ppwxfrOJ.js";import"./index-CZI9tviC.js";import"./index-BvPqZPcI.js";import"./index-CHKV4Xzj.js";import"./index-BDHI1vN6.js";import"./index-RJYyFZKU.js";import"./index-BYlJK5W5.js";import"./index-BBrdAj2S.js";import"./index-C_PjMrzg.js";import"./index-CV1Omkp3.js";import"./index-BDde93qT.js";import"./index-VSWU4_A4.js";import"./index-CFOhRc1z.js";import"./index-BYVv5Ws0.js";import"./index-CRzaLeVS.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D-Ocfrfd.js";import"./index-CSNQVful.js";import"./index-DrgSnG8u.js";import"./index-BOz-GYvQ.js";import"./index-OW61RsAS.js";import"./index-0w7-TbBZ.js";import"./index-GjSckLp0.js";import"./index-C8eAPz1j.js";import"./index-BZ11wUJ2.js";import"./index-CIHIr33g.js";import"./ComboBox-BIeVukHs.js";import"./index-T1NdoD8u.js";import"./TreeList-COEGgzHL.js";import"./copyToClipboard-DB_KM_BY.js";const A=()=>{const[t,i]=f.useState(0),r=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,l=`
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
`;return e.jsxs("div",{className:p.wrapper,children:[e.jsx(v,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select"}),e.jsx("div",{className:p.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>i(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент Select с одиночным выбором",code:l}),e.jsx(o,{description:"Компонент Select с возможностью множественного выбора",code:c}),e.jsx(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:n}),e.jsx(o,{description:"Select в состоянии disabled",code:a}),e.jsx(o,{description:"Экстра компактный Select",code:d}),e.jsx(o,{description:"Select с установленным скроллом",code:S}),e.jsx(o,{description:"Select с цветом success",code:u}),e.jsx(o,{minHeight:200,description:"Пустой Select",code:`
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
`}),e.jsx(y,{argsTypes:D})]}),Number(t)===1&&e.jsx(k,{componentName:"Select"})]})};function m(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/Select/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e.jsx(b,{of:h}),`
`,e.jsx(j,{children:e.jsx(A,{})})]})}function $t(t={}){const{wrapper:i}={...C(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(m,{...t})}):m()}export{$t as default};
