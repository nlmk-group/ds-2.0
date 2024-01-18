import{M as c,U as l}from"./chunk-HLWAVYOI-459b0621.js";import{a as r,f as i,g as s,o as f,h as B}from"./index-28aa8d3c.js";import{a as e,j as t,F as d}from"./clsx.m-3764cf42.js";import{r as g}from"./index-f1f749bf.js";import{s as m,H as G,E as u,T as b}from"./Tests-458e6ea6.js";import{F as v}from"./FigmaEmbed-8fcc0c9a.js";import{P as y}from"./Properties-d88e4854.js";/* empty css               */import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as x}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{D as N,B as T,a as h,b as w,c as _}from"./text-4515169a.js";import{u as O}from"./index-4fb8b842.js";import"./iframe-3ae020fa.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-e474f139.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-05f7535a.js";import"./index-c1da5c13.js";const S=()=>{const[o,n]=g.useState(0);return e("div",{className:m.wrapper,children:[t(G,{title:"ButtonGroup",description:"Компонент ButtonGroup представляет собой группу кнопок, которая позволяет объединять несколько элементов управления кнопками для создания более сложного и функционального пользовательского интерфейса.",isStable:!0,codeLink:"https://git.nlmk.com/design-system/open-source/-/tree/master/src/components/ButtonGroup",figmaLink:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=3471%3A2090&mode=dev"}),t("div",{className:m.tabs,children:e(r,{children:[t(r.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>n(0)}),t(r.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>n(1)}),t(r.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>n(2)})]})}),Number(o)==0&&e(d,{children:[t(u,{description:N,code:`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <ButtonGroup>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
  </>
)`}),t(u,{description:T,code:`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}
  >
    <ButtonGroup size="${i.m}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup size="${i.s}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup size="${i.xs}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
  </div>
)`}),t(u,{description:h,code:`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}
  >
    <ButtonGroup variant="${s.outline}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup variant="${s.primary}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
    <ButtonGroup variant="${s.text}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
  </div>
)`}),t(u,{description:w,code:`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <ButtonGroup orientation="${f.vertical}">
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
      <Button>
        Button
      </Button>
    </ButtonGroup>
  </>
)`}),t(y,{argsTypes:_})]}),Number(o)==1&&t(v,{url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=3471-2090&mode=design&t=ahBL5dLkbUJwiCqX-0"}),Number(o)==2&&t(x,{variant:"Heading4",color:"primary",children:t(b,{componentName:"ButtonGroup"})})]})};function a(o){return e(d,{children:[t(c,{title:"Components/ButtonGroup/Info",component:B,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=3471%3A2090&mode=dev"},jest:["ButtonGroup.test.tsx"]}}),`
`,t(l,{children:t(S,{})})]})}function D(o={}){const{wrapper:n}=Object.assign({},O(),o.components);return n?t(n,{...o,children:t(a,{...o})}):a()}const F=()=>{throw new Error("Docs-only story")};F.parameters={docsOnly:!0};const p={title:"Components/ButtonGroup/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=3471%3A2090&mode=dev"},jest:["ButtonGroup.test.tsx"]},component:B,tags:["stories-mdx"],includeStories:["__page"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:D};const Gt=["__page"];export{Gt as __namedExportsOrder,F as __page,p as default};
