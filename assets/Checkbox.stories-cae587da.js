import{M as p,U as l}from"./chunk-HLWAVYOI-bd2949d1.js";import{C as m}from"./index-147655d7.js";import{a,j as e,F as d}from"./clsx.m-3764cf42.js";import{r as h}from"./index-f1f749bf.js";import{s as n,H as b,E as r,T as k}from"./Tests-605cd25b.js";import{F as C}from"./FigmaEmbed-6f82f7c8.js";import{P as g}from"./Properties-83346e89.js";/* empty css               */import{a as c}from"./index-f014e98c.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import{T as u}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as x}from"./argsTypes-5b1c03a8.js";import{u as f}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const y=()=>{const[t,o]=h.useState(0);return a("div",{className:n.wrapper,children:[e(b,{title:"Checkbox",description:"Компонент Checkbox является элементом пользовательского интерфейса, который позволяет пользователю взаимодействовать с формой, выбирая или снимая выбор с определённых опций. ",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Checkbox",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20846&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:n.tabs,children:a(c,{children:[e(c.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e(c.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e(c.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&a(d,{children:[e(r,{height:150,description:"Компонент checkbox по умолчанию.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () => (
  <Checkbox onChange={() => console.log('Changed!')} />
)`}),e(r,{description:"Актуальные состояния компонента checkbox.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Checkbox />
    <Checkbox color="error"/>
    <Checkbox color="success"/>
    <Checkbox color="warning"/>
  </>
)`}),e(r,{description:"Checkbox с установленными флагами для параметров checked, disabled, multiple и с текстом label.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Checkbox label="default" />
    <Checkbox label="disabled" disabled />
    <Checkbox label="multiple" multiple checked />
    <Checkbox label="multiple disabled" disabled multiple checked />
  </>
)`}),e(r,{description:"Ниже представлен checkbox с параметром multiple, который меняет свое состояние в зависимости от количества выбранных дочерних элементов (работает только при наличии пропса checked).",code:`import { useState } from 'react';
import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () => {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: { target: { checked: boolean } }) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: { target: { checked: boolean } }) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: { target: { checked: boolean } }) => {
    setChecked([checked[0], event.target.checked]);
  };

  const isCheckedMultiple = checked[0] !== checked[1];

  return (
            <>
              <Checkbox
                label="Parent"
                checked={isCheckedMultiple || (checked[0] && checked[1])}
                multiple={isCheckedMultiple}
                onChange={handleChange1}
              />
              <Checkbox
                label="Child 1"
                checked={checked[0]}
                onChange={handleChange2}
              />
              <Checkbox
                label="Child 2"
                checked={checked[1]}
                onChange={handleChange3}
              />
    </>
)}`}),e(g,{argsTypes:x})]}),Number(t)==1&&e(C,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20846&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e(u,{variant:"Heading4",color:"primary",children:e(k,{componentName:"Checkbox"})})]})};function s(t){return a(d,{children:[e(p,{title:"Components/Checkbox/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=456%3A4682&t=ZFGPW4icr1XmCIFw-0"},jest:["Checkbox.test.tsx"]}}),`
`,e(l,{children:e(y,{})})]})}function w(t={}){const{wrapper:o}=Object.assign({},f(),t.components);return o?e(o,{...t,children:e(s,{...t})}):s()}const v=()=>{throw new Error("Docs-only story")};v.parameters={docsOnly:!0};const i={title:"Components/Checkbox/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=456%3A4682&t=ZFGPW4icr1XmCIFw-0"},jest:["Checkbox.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const ie=["__page"];export{ie as __namedExportsOrder,v as __page,i as default};
