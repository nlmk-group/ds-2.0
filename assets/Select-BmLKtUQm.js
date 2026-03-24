import{r as f,j as e,m as x,S as b,U as j}from"./iframe-auckHHdj.js";import{useMDXComponents as C}from"./index-D2-gUu9G.js";import{S as g}from"./index-Dtv-oYzE.js";import{DecoratorDefault as h}from"./Decorator.stories-CU9Bre90.js";import{s as p,H as v,E as o}from"./Header-Xv1TykH5.js";import{P as y,T as k}from"./Tests-Be3Z9p2z.js";import{T as i}from"./index-DeGyB7Dd.js";import{a as D}from"./argsTypes-DVvIbylh.js";import"./preload-helper-PPVm8Dsz.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-B-ej4zbU.js";import"./types-TdnjS80C.js";import"./floating-ui.react-2bHrE470.js";import"./clsx-B-dksMZM.js";import"./sizesMapping-D8QavrGc.js";import"./index-p7YOrb6p.js";import"./index-DVSj14ZC.js";import"./index-HmkWsx8T.js";import"./index-7B7uGpjf.js";import"./index-Bi3cHAEE.js";import"./24-DCTJG6OU.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-qO9dtrtH.js";import"./index-Bay6_7KL.js";import"./index-BLWgIzMD.js";import"./32-Dgon7Y2a.js";import"./24-D3OVyFof.js";import"./24-CZ9ZAk74.js";import"./24-JpVCCs1C.js";import"./24-D-Ce91Qj.js";import"./24-BOn3Xrid.js";import"./24-BC-oV7QY.js";import"./24-Gcxv2DAi.js";import"./24-BbN_tXia.js";import"./16-DoCVdKUE.js";import"./24-zuSrA0QY.js";import"./24-aRDAvjva.js";import"./16-BIzc6kNX.js";import"./16-CQDnK6-A.js";import"./16-DXAjwKj0.js";import"./index-WoM53gF_.js";import"./index-Toxo3H46.js";import"./index-Pjjb9oj1.js";import"./index-c4yDlpPS.js";import"./index-CczZHqJG.js";import"./index-CznkRUli.js";import"./index-D6wJCd8e.js";import"./index-CHU7bacX.js";import"./index-CXN1ldU3.js";import"./index-CsbgtAb7.js";import"./index-BQRpE3vE.js";import"./index-DIknRWC4.js";import"./index-BTrYr-DM.js";import"./index-NkgoTVoy.js";import"./index-DI5MKq0T.js";import"./index-DI7c4HX8.js";import"./index-5_PQcWJ_.js";import"./index-BJ_pO-nS.js";import"./index-Bgj3TetA.js";import"./index-7Ftiwmbj.js";import"./localeMapping-Cf4j9Ek8.js";import"./hook-DQjzjF05.js";import"./useFloatingReferenceSync-y2Sb52o3.js";import"./index-B4KZvEgZ.js";import"./index-MeCbP8N7.js";import"./index-DJL6Ketu.js";import"./index-DEqo2gt9.js";import"./index-DEdd9dJR.js";import"./index-symdhavQ.js";import"./index-mikXIReK.js";import"./index-DjEbf1Sc.js";import"./index-Clnp6vy5.js";import"./index-DPDFUXOz.js";import"./index-BcPHqDDB.js";import"./index-CmECfUaS.js";import"./index-CfC-iwgs.js";import"./index-D5mVsZu_.js";import"./index-CMGZFX1T.js";import"./index-DaTNyn08.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-CYpVoyww.js";import"./index-C4xiOmXd.js";import"./index-Ckcsg1R_.js";import"./index-B4AAAwTV.js";import"./index-BbQCbaJ_.js";import"./index-1SaxXTAW.js";import"./index-Bfe18qq-.js";import"./index-DBO3Tr6M.js";import"./index-eQTa5KLe.js";import"./index-jYXTCRtU.js";import"./index-DKRvyNZX.js";import"./index-Cwm_m_JE.js";import"./index-DSyAIbs-.js";import"./index-D9WAgLdq.js";import"./index-BgB7HTk8.js";import"./index-84_n7Alc.js";import"./index-EESLLEw6.js";import"./index-CLlcyrdp.js";import"./ComboBox-0tLuTHDp.js";import"./index-D1zl6Im_.js";import"./TreeList-BsnCF1G8.js";import"./copyToClipboard-DB_KM_BY.js";const A=()=>{const[t,s]=f.useState(0),r=`const options = [
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
