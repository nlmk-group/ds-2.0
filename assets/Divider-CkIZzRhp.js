import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import{am as l,an as m,ao as v}from"./chunk-NUUEMKO5-CYeaHTsV.js";import{af as s,at as c}from"./TreeList-BjAYGU6i.js";import{DecoratorDefault as y}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as a,H as D,E as r}from"./Header-ClKrHdpp.js";import{F as f}from"./FigmaEmbed-DHnX0NKb.js";import{P as u}from"./Properties-N-2-JxOc.js";import{T as g}from"./Tests-BTN5Mu5Y.js";/* empty css               */import"./generateUUID-BLuKx6pe.js";import"./index-DcUsRIWc.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-Dj-Wh1Bz.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-C9xHhmyi.js";import"./index-DokmLR-l.js";import"./32-70JnsVF1.js";import{D as _,a as j,b,c as h,V as I,d as N,e as E}from"./text-BH4OhKlQ.js";import"./iframe-Bfxx6DB4.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-6mv60_jZ.js";import"./index-B5g4YLzC.js";const o="{{ width: 900, padding: 30 }}",T=`{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`,n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=533-6991&t=HhCDuaOuzHu5rgyf-1",k=()=>{const[t,i]=x.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(D,{title:"Divider",description:"Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider",figmaLink:n}),e.jsx("div",{className:a.tabs,children:e.jsxs(s,{children:[e.jsx(s.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(s.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(s.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{description:_,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:j,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${o}>
    <Divider dashed>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:b,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(r,{description:h,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(r,{description:I,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(r,{height:400,description:N,code:`import { Divider, Button, Icon, IconChemical24 } from '@nlmk/ds-2.0';

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
`}),e.jsx(u,{argsTypes:E})]}),Number(t)==1&&e.jsx(f,{url:n}),Number(t)==2&&e.jsx(g,{componentName:"Divider"})]})};function d(t){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Divider/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]}}),`
`,e.jsx(m,{of:y}),`
`,e.jsx(v,{children:e.jsx(k,{})})]})}function me(t={}){const{wrapper:i}={...p(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(d,{...t})}):d()}export{me as default};
