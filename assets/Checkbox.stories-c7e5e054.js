import{M as d,U as l}from"./chunk-HLWAVYOI-3f61a7cc.js";import{C as s}from"./index-147655d7.js";import{a,j as e,F as p}from"./clsx.m-3764cf42.js";import{r as h}from"./index-f1f749bf.js";import{s as n,H as b,E as r,T as k}from"./Tests-b01304cc.js";import{F as C}from"./FigmaEmbed-cb81cfd0.js";import{P as g}from"./Properties-8db9f8ae.js";/* empty css               */import{a as c}from"./index-28aa8d3c.js";import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import{T as u}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as x}from"./argsTypes-5b1c03a8.js";import{u as f}from"./index-4fb8b842.js";import"./iframe-e135f03c.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-01ead064.js";import"./index-29c055d1.js";import"./.jest-test-results-279ee287.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./index-c1da5c13.js";const y=()=>{const[t,o]=h.useState(0);return a("div",{className:n.wrapper,children:[e(b,{title:"Checkbox",description:"Компонент Checkbox является элементом пользовательского интерфейса, который позволяет пользователю взаимодействовать с формой, выбирая или снимая выбор с определённых опций. ",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Checkbox",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20846&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:n.tabs,children:a(c,{children:[e(c.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e(c.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e(c.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&a(p,{children:[e(r,{height:150,description:"Компонент checkbox по умолчанию.",code:`import { Checkbox } from '@nlmk/ds-2.0';

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
)}`}),e(g,{argsTypes:x})]}),Number(t)==1&&e(C,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20846&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e(u,{variant:"Heading4",color:"primary",children:e(k,{componentName:"Checkbox"})})]})};function m(t){return a(p,{children:[e(d,{title:"Components/Checkbox/Info",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=456%3A4682&t=ZFGPW4icr1XmCIFw-0"},jest:["Checkbox.test.tsx"]}}),`
`,e(l,{children:e(y,{})})]})}function w(t={}){const{wrapper:o}=Object.assign({},f(),t.components);return o?e(o,{...t,children:e(m,{...t})}):m()}const v=()=>{throw new Error("Docs-only story")};v.parameters={docsOnly:!0};const i={title:"Components/Checkbox/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=456%3A4682&t=ZFGPW4icr1XmCIFw-0"},jest:["Checkbox.test.tsx"]},component:s,tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const pe=["__page"];export{pe as __namedExportsOrder,v as __page,i as default};
