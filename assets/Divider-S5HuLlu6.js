import{j as e}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as o,au as l}from"./TreeList-ChyggQS5.js";import{DecoratorDefault as m}from"./Decorator.stories-B1hjNCvN.js";import{r as v}from"./index-Bnop-kX6.js";import{s as a,H as c,E as r}from"./Header-DoEz7EVi.js";import{F as y}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as x}from"./Properties-BySoTS4I.js";import{T as D}from"./Tests-OdO6CFav.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{D as u,a as f,b as g,c as _,V as j,d as b,e as h}from"./text-CDidFuo2.js";import{c as I,e as N,U as E}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const s="{{ width: 900, padding: 30 }}",T=`{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`,n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=533-6991&t=HhCDuaOuzHu5rgyf-1",k=()=>{const[t,i]=v.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(c,{title:"Divider",description:"Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider",figmaLink:n}),e.jsx("div",{className:a.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{description:u,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <Divider>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:f,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <Divider dashed>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:g,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
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
  <div style=${s}>
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
  <div style=${s}>
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
`,e.jsx(E,{children:e.jsx(k,{})})]})}function me(t={}){const{wrapper:i}={...p(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(d,{...t})}):d()}export{me as default};
