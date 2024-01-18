import{M as l,U as c}from"./chunk-HLWAVYOI-459b0621.js";import{a as n,q as m}from"./index-28aa8d3c.js";import{a as o,j as e,F as v}from"./clsx.m-3764cf42.js";import{r as D}from"./index-f1f749bf.js";import{s as d,H as y,E as r,T as f}from"./Tests-458e6ea6.js";import{F as u}from"./FigmaEmbed-8fcc0c9a.js";import{P as _}from"./Properties-d88e4854.js";/* empty css               */import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as g}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{D as h,a as x,b,c as I,V as N,d as S,e as T}from"./text-7572a9b1.js";import{u as w}from"./index-4fb8b842.js";import"./iframe-3ae020fa.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-e474f139.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-05f7535a.js";import"./index-c1da5c13.js";const a="{{ width: 900, padding: 30 }}",C=`{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`,E=()=>{const[i,t]=D.useState(0);return o("div",{className:d.wrapper,children:[e(y,{title:"Divider",description:"Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20848&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:d.tabs,children:o(n,{children:[e(n.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>t(0)}),e(n.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>t(1)}),e(n.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>t(2)})]})}),Number(i)==0&&o(v,{children:[e(r,{description:h,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${a}>
    <Divider>
      <span>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:x,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${a}>
    <Divider dashed>
      <span>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:b,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${a}>
    <Divider orientation="left">
      <span>
        Вариант ориентации Divider влево
      </span>
    </Divider>
    <br/>
    <Divider orientation="right">
      <span>
        Вариант ориентации Divider вправо
      </span>
    </Divider>
    <br/>
    <Divider orientation="center">
      <span>
        Вариант ориентации Divider по середине
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:I,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${a}>
    <Divider
      orientation="left"
      orientationSpace={68}
    >
      <span>
        Кастомизация размера пространства
      </span>
    </Divider>
    <br/>
    <Divider
      orientation="right"
      orientationSpace={72}
    >
      <span>
        Кастомизация размера пространства
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:N,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${a}>
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74">
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74">
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74">
        Текст №3
      </span>
    </div>
  </div>
)
`}),e(r,{height:400,description:S,code:`import { Divider, Button, Icon } from '@nlmk/ds-2.0';

export default  App = () =>(
  <div style=${C}>
    <Divider dashed />
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74">
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74">
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74">
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
        <span className="_divider-content_12xmv_74">
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
      <Button variant="text">
        <Icon
          containerSize={24}
          htmlColor="var(--primary-blue-600)"
          name="IconChemical24"
        />
      </Button>
    </div>
    <Divider orientation="left">
      <div
        style={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <span className="_divider-content_12xmv_74">
          Экспертиза
        </span>
        <Button variant="text">
          <Icon
            containerSize={24}
            htmlColor="var(--primary-blue-600)"
            name="IconChemical24"
          />
        </Button>
      </div>
    </Divider>
    <Divider dashed />
  </div>
)
`}),e(_,{argsTypes:T})]}),Number(i)==1&&e(u,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20848&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(i)==2&&e(g,{variant:"Heading4",color:"primary",children:e(f,{componentName:"Divider"})})]})};function p(i){return o(v,{children:[e(l,{title:"Components/Divider/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]}}),`
`,e(c,{children:e(E,{})})]})}function k(i={}){const{wrapper:t}=Object.assign({},w(),i.components);return t?e(t,{...i,children:e(p,{...i})}):p()}const A=()=>{throw new Error("Docs-only story")};A.parameters={docsOnly:!0};const s={title:"Components/Divider/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:k};const _e=["__page"];export{_e as __namedExportsOrder,A as __page,s as default};
