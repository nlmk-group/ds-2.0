import{r as f,j as e,m as x,S as b,U as j}from"./iframe-DXgTh6Z1.js";import{useMDXComponents as C}from"./index-D5E0TNiY.js";import{S as h}from"./index-ciSDAmyI.js";import{DecoratorDefault as g}from"./Decorator.stories-Dx4VbD6X.js";import{s as p,H as v,E as o}from"./Header-Cx_iqH4o.js";import{P as y}from"./Properties-Bo87EZNs.js";import{T as k}from"./Tests-DMr2Ac1b.js";import{T as i}from"./index-9eeKqrVB.js";import{a as D}from"./argsTypes-DVvIbylh.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-DPmsdUVY.js";import"./types-TdnjS80C.js";import"./floating-ui.react-CorT-KP5.js";import"./clsx-B-dksMZM.js";import"./sizesMapping-D8QavrGc.js";import"./index-Crin4Hk2.js";import"./index-CnUkpoWG.js";import"./index-C0y4NBi5.js";import"./index-XmWHrheD.js";import"./index-xDA_A-aD.js";import"./24-sZrB_4qI.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-ucJ0GnFn.js";import"./index-jEb4Knwf.js";import"./index-DdxGYpuj.js";import"./32-BZXccBNX.js";import"./24-C30wJjmO.js";import"./24-BbhvzLc-.js";import"./24-CmuppIra.js";import"./24-CHg1C3ZC.js";import"./24-CivDG4N5.js";import"./24-iRhnmlFx.js";import"./24-SIU2poG3.js";import"./24-BhlAG-0S.js";import"./16-BbwgBG1i.js";import"./24-Chag6Oqa.js";import"./24-BHCEpASW.js";import"./16-BY5Rr64R.js";import"./16-CRuPnIyY.js";import"./16-B8cH_bM_.js";import"./index-B4LxWNEW.js";import"./index-BVnvWAgp.js";import"./index-DUoRmuKU.js";import"./index-Bl4_x-Wd.js";import"./index-nfS7job7.js";import"./index-DYE4Bi1W.js";import"./index-Nm4Qdu1z.js";import"./index-DhFDZi2m.js";import"./index-Bd4lHRV0.js";import"./index-D5KpWfD5.js";import"./index-RnR2fccb.js";import"./index-BeCrIpLY.js";import"./index-v0wPdj4d.js";import"./index-gjDbOsdM.js";import"./index-C0IGfKtj.js";import"./index-wJn_BZHg.js";import"./index-BvFe6bW5.js";import"./index-BxMhlDR6.js";import"./index-Nw7Pfvlf.js";import"./index-CT-QPPa4.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-G2u_ACY6.js";import"./useFloatingReferenceSync-DqOI9czm.js";import"./index-DJtob4fj.js";import"./index-BX7kJ5B_.js";import"./index-B4fWoCsE.js";import"./index-B61jHTw_.js";import"./index-Ck2v1TJK.js";import"./index-CRivC9UR.js";import"./index-BEPLxOmT.js";import"./index-DVjmoy4g.js";import"./index-BglbQ0D6.js";import"./index-BYuKbTqS.js";import"./index-BhusuGgV.js";import"./index-h3Z4FQnr.js";import"./index-BC9Rp5Jo.js";import"./index-IVdkDpCO.js";import"./index-ilhepyhL.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-D9sJnCBD.js";import"./index-RB1pFFkL.js";import"./index-D6Zu8-bW.js";import"./index-DavKZYHC.js";import"./index-gi2vkf8n.js";import"./index-B7Ar8a4x.js";import"./index-B_BoipIY.js";import"./index-CBxHuoj8.js";import"./index-ByGDn29v.js";import"./index-Ba6RId1F.js";import"./index-MG8YOKfD.js";import"./index-Cgkxu7Qk.js";import"./index-C_JFYl_R.js";import"./index-7iv8Ztsr.js";import"./index-B-LJSldl.js";import"./index-Bxth20eU.js";import"./ComboBox-KK8W0C81.js";import"./index-CdxmqZWy.js";import"./TreeList-CqXttnbr.js";import"./copyToClipboard-DB_KM_BY.js";const A=()=>{const[t,s]=f.useState(0),r=`const options = [
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
`;return e.jsxs("div",{className:p.wrapper,children:[e.jsx(v,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isDeprecated:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select"}),e.jsx("div",{className:p.tabs,children:e.jsxs(i,{children:[e.jsx(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>s(0)}),e.jsx(i.Tab,{label:"Тестирование",active:Number(t)===1,onClick:()=>s(1)})]})}),Number(t)===0&&e.jsxs(e.Fragment,{children:[e.jsx(o,{description:"Компонент Select с одиночным выбором",code:m}),e.jsx(o,{description:"Компонент Select с возможностью множественного выбора",code:c}),e.jsx(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:n}),e.jsx(o,{description:"Select в состоянии disabled",code:a}),e.jsx(o,{description:"Экстра компактный Select",code:d}),e.jsx(o,{description:"Select с установленным скроллом",code:S}),e.jsx(o,{description:"Select с цветом success",code:u}),e.jsx(o,{height:200,description:"Пустой Select",code:`
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
`}),e.jsx(y,{argsTypes:D})]}),Number(t)===1&&e.jsx(k,{componentName:"Select"})]})};function l(t){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Components/Select/Info",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e.jsx(b,{of:g}),`
`,e.jsx(j,{children:e.jsx(A,{})})]})}function vt(t={}){const{wrapper:s}={...C(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(l,{...t})}):l()}export{vt as default};
