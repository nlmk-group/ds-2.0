import{M as h,U as l}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as o,r as n}from"./index-f014e98c.js";import{a as p,j as i,F as c}from"./clsx.m-3764cf42.js";import{r as d}from"./index-f1f749bf.js";import{s as m,H as C,E as t,T as f}from"./Tests-605cd25b.js";import{F as u}from"./FigmaEmbed-6f82f7c8.js";import{P as g}from"./Properties-83346e89.js";/* empty css               */import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as b}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as w}from"./argsTypes-7fd08490.js";import{u as y}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const x=()=>{const[e,r]=d.useState(0);return p("div",{className:m.wrapper,children:[i(C,{title:"Chip",description:"Компонент Chip обычно используется для отображения небольших интерактивных элементов пользовательского интерфейса, таких как теги, метки, категории или выборы в фильтрах, а также для представления небольших блоков информации.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Chip",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25758&mode=design&t=awyt3Fzj1XS6th7v-1"}),i("div",{className:m.tabs,children:p(o,{children:[i(o.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>r(0)}),i(o.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>r(1)}),i(o.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>r(2)})]})}),Number(e)==0&&p(c,{children:[i(t,{height:150,description:"Компонент chip по умолчанию.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <Chip>1234</Chip>
)`}),i(t,{description:"Компонент Chip может использовать разные стили: primary (отображается по умолчанию), error, warning, success.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Chip>1234</Chip>
    <Chip color="error">1234</Chip>
    <Chip color="success">1234</Chip>
    <Chip color="warning">1234</Chip>
  </>
)`}),i(t,{description:"Компонент доступен в двух типах заливки: solid - полностью закрашенный, outline - закрашенна только граница.",code:`import { Chip } from '@nlmk/ds-2.0';;

export default  App = () =>(
  <>
    <Chip variant="outline">1234</Chip>
    <Chip color="error" variant="outline">1234</Chip>
    <Chip color="success" variant="outline">1234</Chip>
    <Chip color="warning" variant="outline">1234</Chip>
  </>
)`}),i(t,{height:230,description:"Компонент доступен в двух размерах: s - маленький чип с высотой 16px, m - средний чип, его высота 24px.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip size="s">1234</Chip>
    <Chip size="m">1234</Chip>
  </>
)`}),i(t,{description:"Чип может содержать суффикс.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip suffix="кг">1234</Chip>
    <Chip color="error" suffix="кг">1234</Chip>
    <Chip color="success" suffix="кг">1234</Chip>
    <Chip color="warning" suffix="кг">1234</Chip>
  </>
)`}),i(t,{description:"Чип может содержать суффикс.",code:`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip label="Цифры">1234</Chip>
    <Chip color="error" label="Цифры">1234</Chip>
    <Chip color="success" label="Цифры">1234</Chip>
    <Chip color="warning" label="Цифры">1234</Chip>
  </>
)`}),i(g,{argsTypes:w})]}),Number(e)==1&&i(u,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25758&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)==2&&i(b,{variant:"Heading4",color:"primary",children:i(f,{componentName:"Chip"})})]})};function a(e){return p(c,{children:[i(h,{title:"Components/Chip/Info",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?node-id=207%3A40297&mode=dev"},jest:["Chip.test.tsx"]}}),`
`,i(l,{children:i(x,{})})]})}function v(e={}){const{wrapper:r}=Object.assign({},y(),e.components);return r?i(r,{...e,children:i(a,{...e})}):a()}const k=()=>{throw new Error("Docs-only story")};k.parameters={docsOnly:!0};const s={title:"Components/Chip/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?node-id=207%3A40297&mode=dev"},jest:["Chip.test.tsx"]},component:n,tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:v};const si=["__page"];export{si as __namedExportsOrder,k as __page,s as default};
