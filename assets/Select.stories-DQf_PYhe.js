import{U as n,M as x,e as k}from"./chunk-HLWAVYOI-kRpuAql_.js";import{J as i,a3 as m}from"./index-4w0GPB2W.js";import{a as l,j as e,F as d}from"./clsx.m-CcuEzMhP.js";import{r as w}from"./index-CBqU2yxZ.js";import{s as p,H as N,E as o,T as M}from"./Tests-DouIqzVv.js";import{F as D}from"./FigmaEmbed-CtRZqGvN.js";import{P as T}from"./Properties-BtR_splU.js";import"./index-ehJh3wQv.js";import"./index-D-9trSFj.js";import"./index-DjeAniHW.js";import{T as j}from"./index-fbTu1Hcf.js";import"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import{a as A}from"./argsTypes-Dq1oY8TW.js";import{useMDXComponents as q}from"./index-DI5IigMn.js";import"./iframe-Bw_RpWl3.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-CVrshBWR.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-nD8paK0f.js";import"./index-BO3pQ7ot.js";const u=()=>{const[t,r]=w.useState(0),s=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,b=`import { Select } from '@nlmk/ds-2.0';

${s}

export default  App = () => (
  <>
    <Select options={options} label="Одиночный выбор" multiple={false} />
  </>
);
`,f=`import { Select } from '@nlmk/ds-2.0';

${s}

export default  App = () => (
  <>
    <Select options={options} label="Множественный выбор" multiple />
  </>
);
`,g=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Выбор с поиском" isSearchable />
  </>
);
`,y=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Disabled" disabled />
  </>
);
`,h=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Размер xs" size="xs" />
  </>
);
`,C=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Скролл" scrollingItems={2} />
  </>
);
`,v=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Цвет success" color="success" />
  </>
);
`;return l("div",{className:p.wrapper,children:[e(N,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:p.tabs,children:l(i,{children:[e(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),e(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&l(d,{children:[e(o,{description:"Компонент Select с одиночным выбором",code:b}),e(o,{description:"Компонент Select с возможностью множественного выбора",code:f}),e(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:g}),e(o,{description:"Select в состоянии disabled",code:y}),e(o,{description:"Экстра компактный Select",code:h}),e(o,{description:"Select с установленным скроллом",code:C}),e(o,{description:"Select с цветом success",code:v}),e(o,{height:200,description:"Пустой Select",code:`import { Select } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Select options={[]} label="Пустой select" />
  </>
);
`}),e(T,{argsTypes:A})]}),Number(t)===1&&e(D,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(j,{variant:"Heading4",color:"primary",children:e(M,{componentName:"Select"})})]})};function c(t){return l(d,{children:[e(x,{title:"Components/Select/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e(k,{name:"Docs",children:e(n,{children:e(u,{})})})]})}function E(t={}){const{wrapper:r}=Object.assign({},q(),t.components);return r?e(r,{...t,children:e(c,{...t})}):c()}const S=()=>e(n,{children:e(u,{})});S.storyName="Docs";S.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const a={title:"Components/Select/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["docs"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:E};const Se=["docs"];export{Se as __namedExportsOrder,a as default,S as docs};
