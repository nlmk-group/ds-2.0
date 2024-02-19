import{M as P,U as b}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as s,$ as l}from"./index-f014e98c.js";import{a as r,j as t,F as c}from"./clsx.m-3764cf42.js";import{r as f}from"./index-f1f749bf.js";import{s as m,H as g,E as i,T as h}from"./Tests-605cd25b.js";import{F as j}from"./FigmaEmbed-6f82f7c8.js";import{P as w}from"./Properties-83346e89.js";/* empty css               */import{a as C}from"./index-147655d7.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import{T as x}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as y}from"./argsTypes-089fec54.js";import{u as T}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const a="PseudoInput",u="https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0",v=()=>{const[e,o]=f.useState(0),n=I=>e===I;return r("div",{className:m.wrapper,children:[t(g,{title:a,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:u}),t("div",{className:m.tabs,children:r(s,{children:[t(s.Tab,{label:"Разработчику",active:n(0),onClick:()=>o(0)}),t(s.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>o(1)}),t(s.Tab,{label:"Тестирование",active:n(2),onClick:()=>o(2)})]})}),e==0&&r(c,{children:[t(i,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <PseudoInput label="Label">
    PseudoInput
  </PseudoInput>
)
              `}),t(i,{description:"PseudoInput разных размеров. Компонент может быть отображен с увеличенным шрифтом: дефолтное значение - s (14px размер лейбла и 16px размер внутреннего текста) и большой - m (16px и 20px). Нужный параметр необходимо передать в проп size.",code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <PseudoInput label="Label" size="m">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" size="s">
    PseudoInput
  </PseudoInput>
  </>
)
              `}),t(i,{description:`Различные состояния PseudoInput. В компонент можно передать проп labelColor со значениями: ${Object.values(C).join(" | ")} для отображения состояний компонента`,code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <PseudoInput label="Label" labelColor="error">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" labelColor="warning">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" labelColor="success">
    PseudoInput
  </PseudoInput>
  </>
)
              `}),t(w,{argsTypes:y})]}),e==1&&t(j,{url:u}),e==2&&t(x,{variant:"Heading4",color:"primary",children:t(h,{componentName:a})})]})};function d(e){return r(c,{children:[t(P,{title:"Components/PseudoInput/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]}}),`
`,t(b,{children:t(v,{})})]})}function L(e={}){const{wrapper:o}=Object.assign({},T(),e.components);return o?t(o,{...e,children:t(d,{...e})}):d()}const M=()=>{throw new Error("Docs-only story")};M.parameters={docsOnly:!0};const p={title:"Components/PseudoInput/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]},component:l,tags:["stories-mdx"],includeStories:["__page"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:L};const dt=["__page"];export{dt as __namedExportsOrder,M as __page,p as default};
