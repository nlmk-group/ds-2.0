import{U as m,M as f,e as g}from"./chunk-HLWAVYOI-D_Dl5wLY.js";import{L as s,$ as c}from"./index-CfZTnDhX.js";import{a,j as e,F as v}from"./jsx-runtime-2xDJh5tt.js";import{r as x}from"./index-CBqU2yxZ.js";import{s as d,H as u,E as r,T as _}from"./Tests-DHTVSmWv.js";import{F as h}from"./FigmaEmbed-YFEQg_l-.js";import{P as I}from"./Properties-DtaLgUr8.js";/* empty css               */import"./generateUUID-xFqDjoto.js";import"./index-qrvtYV6q.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as N}from"./index-nWYpQihe.js";import"./index-C6sJWxXv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-CBS9NtKm.js";import"./32-DtWm84R6.js";import{D as b,a as T,b as E,c as S,V as k,d as j,e as A}from"./text-BOCP96_X.js";import{useMDXComponents as C}from"./index-DI5IigMn.js";import"./iframe-ezH54IIy.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-rQZ06u7F.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B6pRd-5M.js";import"./index-CMH8wQUv.js";const o="{{ width: 900, padding: 30 }}",w=`{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`,p="https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=4230-7104&mode=design&t=hGZk1uvXm3rDzcu6-0",y=()=>{const[t,i]=x.useState(0);return a("div",{className:d.wrapper,children:[e(u,{title:"Divider",description:"Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider",figmaLink:p}),e("div",{className:d.tabs,children:a(s,{children:[e(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e(s.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&a(v,{children:[e(r,{description:b,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:T,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider dashed>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:E,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider orientation="left">
      <span style={{color: "var(--text-grey-900)"}}>
        Вариант ориентации Divider влево
      </span>
    </Divider>
    <br/>
    <Divider orientation="right">
      <span style={{color: "var(--text-grey-900)"}}>
        Вариант ориентации Divider вправо
      </span>
    </Divider>
    <br/>
    <Divider orientation="center">
      <span style={{color: "var(--text-grey-900)"}}>
        Вариант ориентации Divider по середине
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:S,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider
      orientation="left"
      orientationSpace={68}
    >
      <span style={{color: "var(--text-grey-900)"}}>
        Кастомизация размера пространства
      </span>
    </Divider>
    <br/>
    <Divider
      orientation="right"
      orientationSpace={72}
    >
      <span style={{color: "var(--text-grey-900)"}}>
        Кастомизация размера пространства
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:k,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74" style={{color: "var(--text-grey-900)"}}>
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74" style={{color: "var(--text-grey-900)"}}>
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74" style={{color: "var(--text-grey-900)"}}>
        Текст №3
      </span>
    </div>
  </div>
)
`}),e(r,{height:400,description:j,code:`import { Divider, Button, Icon, IconChemical24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <div style=${w}>
    <Divider dashed />
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74" style={{color: "var(--text-grey-900)"}}>
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74" style={{color: "var(--text-grey-900)"}}>
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74" style={{color: "var(--text-grey-900)"}}>
        Текст №3
      </span>
    </div>
    <Divider dashed>
      <Button>
        <span>
          Нажать
        </span>
      </Button>
    </Divider>
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <span className="_divider-content_12xmv_74" style={{color: "var(--text-grey-900)"}}>
          Текст №1
        </span>
      </div>
      <Divider type="vertical" />
      <Button variant="secondary">
        <span>
          Нажать
        </span>
      </Button>
      <Divider
        dashed
        type="vertical"
      />
      <Button fill="clear">
        <IconChemical24 />
      </Button>
    </div>
    <Divider orientation="left">
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '8px'
        }}
      >
        <span className="_divider-content_12xmv_74" style={{color: "var(--text-grey-900)"}}>
          Экспертиза
        </span>
        <Button fill="clear">
          <IconChemical24 />
        </Button>
      </div>
    </Divider>
    <Divider dashed />
  </div>
)
`}),e(I,{argsTypes:A})]}),Number(t)==1&&e(h,{url:p}),Number(t)==2&&e(N,{variant:"Heading4",color:"primary",children:e(_,{componentName:"Divider"})})]})};function l(t){return a(v,{children:[e(f,{title:"Components/Divider/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]}}),`
`,e(g,{name:"Docs",children:e(m,{children:e(y,{})})})]})}function V(t={}){const{wrapper:i}=Object.assign({},C(),t.components);return i?e(i,{...t,children:e(l,{...t})}):l()}const D=()=>e(m,{children:e(y,{})});D.storyName="Docs";D.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const n={title:"Components/Divider/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:V};const fe=["docs"];export{fe as __namedExportsOrder,n as default,D as docs};
