import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-9sFvlkdQ.js";import{af as s,at as l}from"./TreeList-CN2Fuc3O.js";import{DecoratorDefault as m}from"./Decorator.stories-D7iJJ_iz.js";import{r as v}from"./index-BcJSXhQi.js";import{s as a,H as c,E as r}from"./Header-DfSPAofw.js";import{F as y}from"./FigmaEmbed-CxKRSr1H.js";import{P as x}from"./Properties-BWHYCmk8.js";import{T as D}from"./Tests-DVJ0l8E_.js";/* empty css               */import"./generateUUID-306HU3fz.js";import"./index-CeXAN7vm.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import"./index-DmffzHLE.js";import"./index-C431fSij.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BAYgGaKw.js";import"./index-C1EIKtiR.js";import"./32-DmJYGC0n.js";import{D as f,a as u,b as g,c as _,V as j,d as b,e as h}from"./text-C9yy0E91.js";import{c as I,S as N,U as E}from"./DocsRenderer-CFRXHY34-BIX0eLwf.js";import"./index-ChsGqxH_.js";import"./preview-CKjZdpa9.js";import"./iframe-DumMmOON.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-jn7_epoG.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const o="{{ width: 900, padding: 30 }}",T=`{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`,n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=533-6991&t=HhCDuaOuzHu5rgyf-1",k=()=>{const[t,i]=v.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(c,{title:"Divider",description:"Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider",figmaLink:n}),e.jsx("div",{className:a.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{description:f,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:u,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider dashed>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:g,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(r,{description:_,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(r,{description:j,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(r,{height:400,description:b,code:`import { Divider, Button, Icon, IconChemical24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <div style=${T}>
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
      <Button type="button">
          Нажать
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
      <Button type="button" variant="secondary">
        <span>
          Нажать
        </span>
      </Button>
      <Divider
        dashed
        type="vertical"
      />
      <Button type="button" color="ghost" variant="secondary">
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
        <Button type="button" color="ghost" variant="secondary">
          <IconChemical24 />
        </Button>
      </div>
    </Divider>
    <Divider dashed />
  </div>
)
`}),e.jsx(x,{argsTypes:h})]}),Number(t)==1&&e.jsx(y,{url:n}),Number(t)==2&&e.jsx(D,{componentName:"Divider"})]})};function d(t){return e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"Components/Divider/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]}}),`
`,e.jsx(N,{of:m}),`
`,e.jsx(E,{children:e.jsx(k,{})})]})}function ce(t={}){const{wrapper:i}={...p(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(d,{...t})}):d()}export{ce as default};
