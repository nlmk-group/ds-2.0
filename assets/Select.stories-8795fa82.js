import{M as C,U as v}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as i,S as c}from"./index-f014e98c.js";import{a as l,j as e,F as m}from"./clsx.m-3764cf42.js";import{r as x}from"./index-f1f749bf.js";import{s as p,H as k,E as o,T as w}from"./Tests-605cd25b.js";import{F as N}from"./FigmaEmbed-6f82f7c8.js";import{P as M}from"./Properties-83346e89.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as j}from"./argsTypes-179e688d.js";import{u as A}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const D=()=>{const[t,r]=x.useState(0),s=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,d=`import { Select } from '@nlmk/ds-2.0';

${s}

export default  App = () => (
  <>
    <Select options={options} label="Одиночный выбор" multiple={false} />
  </>
);
`,u=`import { Select } from '@nlmk/ds-2.0';

${s}

export default  App = () => (
  <>
    <Select options={options} label="Множественный выбор" multiple />
  </>
);
`,S=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Выбор с поиском" isSearchable />
  </>
);
`,b=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Disabled" disabled />
  </>
);
`,f=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Размер xs" size="xs" />
  </>
);
`,g=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Скролл" scrollingItems={2} />
  </>
);
`,y=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Цвет success" color="success" />
  </>
);
`,h=`import { Select } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Select options={[]} label="Пустой select" />
  </>
);
`;return l("div",{className:p.wrapper,children:[e(k,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:p.tabs,children:l(i,{children:[e(i.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(i.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),e(i.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&l(m,{children:[e(o,{description:"Компонент Select с одиночным выбором",code:d}),e(o,{description:"Компонент Select с возможностью множественного выбора",code:u}),e(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:S}),e(o,{description:"Select в состоянии disabled",code:b}),e(o,{description:"Экстра компактный Select",code:f}),e(o,{description:"Select с установленным скроллом",code:g}),e(o,{description:"Select с цветом success",code:y}),e(o,{height:200,description:"Пустой Select",code:h}),e(M,{argsTypes:j})]}),Number(t)===1&&e(N,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(T,{variant:"Heading4",color:"primary",children:e(w,{componentName:"Select"})})]})};function n(t){return l(m,{children:[e(C,{title:"Components/Select/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e(v,{children:e(D,{})})]})}function q(t={}){const{wrapper:r}=Object.assign({},A(),t.components);return r?e(r,{...t,children:e(n,{...t})}):n()}const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const a={title:"Components/Select/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:q};const Se=["__page"];export{Se as __namedExportsOrder,E as __page,a as default};
