import{U as d,M as k,e as C}from"./chunk-HLWAVYOI-BIT6alKZ.js";import{J as r,V as l}from"./index-2j3g-nq8.js";import{a,j as e,F as p}from"./jsx-runtime-2xDJh5tt.js";import{r as u}from"./index-CBqU2yxZ.js";import{s,H as g,E as c,T as x}from"./Tests--GyaXTng.js";import{F as f}from"./FigmaEmbed-B-fbtqaF.js";import{P as v}from"./Properties-yOGAxVAd.js";/* empty css               */import"./generateUUID-CbWNkpu4.js";import"./index-YguXCR6_.js";import"./index-D60oXbFF.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as y}from"./index-nWYpQihe.js";import"./index-DbX0JV5O.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-lhFT6koy.js";import"./index-DFeUewHl.js";import"./32-CjiFhZy5.js";import{a as F}from"./argsTypes-CUJVptIF.js";import{useMDXComponents as N}from"./index-DI5IigMn.js";import"./iframe-BHvCdcuE.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BHSuypEB.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BsqgCTfd.js";import"./index-CMH8wQUv.js";const n="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=3360-16500&mode=design&t=U47unVezMPIQMdQU-0",h=()=>{const[t,o]=u.useState(0);return a("div",{className:s.wrapper,children:[e(g,{title:"Checkbox",description:"Компонент Checkbox является элементом пользовательского интерфейса, который позволяет пользователю взаимодействовать с формой, выбирая или снимая выбор с определённых опций. ",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Checkbox",figmaLink:n}),e("div",{className:s.tabs,children:a(r,{children:[e(r.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),e(r.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),e(r.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&a(p,{children:[e(c,{height:150,description:"Компонент checkbox по умолчанию.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () => (
  <Checkbox onChange={() => console.log('Changed!')} />
)`}),e(c,{description:"Актуальные состояния компонента checkbox.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Checkbox />
    <Checkbox color="error"/>
  </>
)`}),e(c,{description:"Checkbox с установленными флагами для параметров checked, disabled, multiple и с текстом label.",code:`import { Checkbox } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Checkbox label="default" />
    <Checkbox label="disabled" disabled />
    <Checkbox label="multiple" multiple checked />
    <Checkbox label="multiple disabled" disabled multiple checked />
  </>
)`}),e(c,{description:"Ниже представлен checkbox с параметром multiple, который меняет свое состояние в зависимости от количества выбранных дочерних элементов (работает только при наличии пропса checked).",code:`import { useState } from 'react';
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
)}`}),e(v,{argsTypes:F})]}),Number(t)==1&&e(f,{url:n}),Number(t)==2&&e(y,{variant:"Heading4",color:"primary",children:e(x,{componentName:"Checkbox"})})]})};function m(t){return a(p,{children:[e(k,{title:"Components/Checkbox/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=456%3A4682&t=ZFGPW4icr1XmCIFw-0"},jest:["Checkbox.test.tsx"]}}),`
`,e(C,{name:"Docs",children:e(d,{children:e(h,{})})})]})}function w(t={}){const{wrapper:o}=Object.assign({},N(),t.components);return o?e(o,{...t,children:e(m,{...t})}):m()}const b=()=>e(d,{children:e(h,{})});b.storyName="Docs";b.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const i={title:"Components/Checkbox/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/Buttons?node-id=456%3A4682&t=ZFGPW4icr1XmCIFw-0"},jest:["Checkbox.test.tsx"]},component:l,tags:["stories-mdx"],includeStories:["docs"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const me=["docs"];export{me as __namedExportsOrder,i as default,b as docs};
