import{U as l,M as g,e as b}from"./chunk-HLWAVYOI-D_Dl5wLY.js";import{L as B,b as a,e as r,d as n,P as v,Q as c}from"./index-CfZTnDhX.js";import{a as i,j as t,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as y}from"./index-CBqU2yxZ.js";import{s,H as x,E as e,T as N}from"./Tests-DHTVSmWv.js";import{F as S}from"./FigmaEmbed-YFEQg_l-.js";import{P as h}from"./Properties-DtaLgUr8.js";/* empty css               */import"./generateUUID-xFqDjoto.js";import"./index-qrvtYV6q.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T}from"./index-nWYpQihe.js";import"./index-C6sJWxXv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-CBS9NtKm.js";import"./32-DtWm84R6.js";import{D as $,B as w,a as k,b as D,c as F}from"./text-ET-dpcdD.js";import{useMDXComponents as O}from"./index-DI5IigMn.js";import"./iframe-ezH54IIy.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-rQZ06u7F.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B6pRd-5M.js";import"./index-CMH8wQUv.js";const G=()=>{const[o,u]=y.useState(0);return i("div",{className:s.wrapper,children:[t(x,{title:"ButtonGroup",description:"Компонент ButtonGroup представляет собой группу кнопок, которая позволяет объединять несколько элементов управления кнопками для создания более сложного и функционального пользовательского интерфейса.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ButtonGroup",figmaLink:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=3471%3A2090&mode=dev"}),t("div",{className:s.tabs,children:i(B,{children:[t(B.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>u(0)}),t(B.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>u(1)}),t(B.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>u(2)})]})}),Number(o)==0&&i(d,{children:[t(e,{description:$,code:`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

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
)`}),t(e,{description:w,code:`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}
  >
    <ButtonGroup size="${a.m}">
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
    <ButtonGroup size="${a.s}">
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
    <ButtonGroup size="${a.xs}">
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
)`}),t(e,{description:k,code:`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}
  >
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
    <ButtonGroup fill="${r.outline}">
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
    <ButtonGroup fill="${r.clear}">
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
    <ButtonGroup variant="${n.secondary}">
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
    <ButtonGroup variant="${n.grey}">
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
    <ButtonGroup variant="${n.grey}" fill="${r.outline}">
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
    <ButtonGroup variant="${n.grey}" fill="${r.clear}">
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
    <ButtonGroup variant="${n.black}">
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
    <ButtonGroup variant="${n.black}" fill="${r.outline}">
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
    <ButtonGroup variant="${n.black}" fill="${r.clear}">
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
)`}),t(e,{description:D,code:`import { ButtonGroup, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <ButtonGroup orientation="${v.vertical}">
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
)`}),t(h,{argsTypes:F})]}),Number(o)==1&&t(S,{url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=3471-2090&mode=design&t=ahBL5dLkbUJwiCqX-0"}),Number(o)==2&&t(T,{variant:"Heading4",color:"primary",children:t(N,{componentName:"ButtonGroup"})})]})};function m(o){return i(d,{children:[t(g,{title:"Components/ButtonGroup/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=3471%3A2090&mode=dev"},jest:["ButtonGroup.test.tsx"]}}),`
`,t(b,{name:"Docs",children:t(l,{children:t(G,{})})})]})}function U(o={}){const{wrapper:u}=Object.assign({},O(),o.components);return u?t(u,{...o,children:t(m,{...o})}):m()}const f=()=>t(l,{children:t(G,{})});f.storyName="Docs";f.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const p={title:"Components/ButtonGroup/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?node-id=3471%3A2090&mode=dev"},jest:["ButtonGroup.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:U};const Gt=["docs"];export{Gt as __namedExportsOrder,p as default,f as docs};
