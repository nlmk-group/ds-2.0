import{U as m,M as D,e as g}from"./chunk-HLWAVYOI-Yo5Bzvmn.js";import{C as s,W as l}from"./index-DgIw7IGB.js";import{a,j as e,F as c}from"./jsx-runtime-2xDJh5tt.js";import{r as f}from"./index-CBqU2yxZ.js";import{s as d,H as x,E as r,T as u}from"./Tests-ITBaY-yB.js";import{F as _}from"./FigmaEmbed-Dk4Na3Vj.js";import{P as h}from"./Properties-CxV7IHiq.js";/* empty css               */import"./generateUUID-DLndrDCe.js";import"./index-B9xZgPEK.js";import"./index-DAa4i1Qv.js";import{T as b}from"./index-CkVMA9Py.js";import"./index-DWzUtgDv.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-Rnr0z56Y.js";import"./32-DVSD7kw1.js";import{D as N,a as I,b as S,c as T,V as C,d as E,e as w}from"./text-DZcHr0rE.js";import{useMDXComponents as k}from"./index-DI5IigMn.js";import"./iframe-BXX2MuUW.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-D2xkJP2E.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-2doLT9jG.js";import"./index-4J70fF5O.js";const o="{{ width: 900, padding: 30 }}",A=`{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`,v=()=>{const[t,i]=f.useState(0);return a("div",{className:d.wrapper,children:[e(x,{title:"Divider",description:"Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20848&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:d.tabs,children:a(s,{children:[e(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e(s.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&a(c,{children:[e(r,{description:N,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:I,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider dashed>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e(r,{description:S,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e(r,{description:T,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e(r,{description:C,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e(r,{height:400,description:E,code:`import { Divider, Button, Icon, IconChemical24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <div style=${A}>
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
`}),e(h,{argsTypes:w})]}),Number(t)==1&&e(_,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20848&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&e(b,{variant:"Heading4",color:"primary",children:e(u,{componentName:"Divider"})})]})};function p(t){return a(c,{children:[e(D,{title:"Components/Divider/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]}}),`
`,e(g,{name:"Docs",children:e(m,{children:e(v,{})})})]})}function j(t={}){const{wrapper:i}=Object.assign({},k(),t.components);return i?e(i,{...t,children:e(p,{...t})}):p()}const y=()=>e(m,{children:e(v,{})});y.storyName="Docs";y.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const n={title:"Components/Divider/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]},component:l,tags:["stories-mdx"],includeStories:["docs"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:j};const ye=["docs"];export{ye as __namedExportsOrder,n as default,y as docs};
