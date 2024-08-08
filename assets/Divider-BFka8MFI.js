import{j as e}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as p}from"./index-CpguRmgc.js";import"./chunk-HLWAVYOI-BpCf8szX.js";import{ae as l,af as m,ag as v}from"./index-CY6AFN3F.js";import{Q as o,$ as c}from"./index-De6xVjfl.js";import{DecoratorDefault as D}from"./Decorator.stories-BP3ijO2B.js";import{r as x}from"./index-DQ2WTIsS.js";import{s as a,H as y,E as i}from"./Header-LklIFrOQ.js";import{F as f}from"./FigmaEmbed-oiCkEjTf.js";import{P as u}from"./Properties-DzW4XCsL.js";import{T as g}from"./Tests-BNc6kC-d.js";/* empty css               */import"./generateUUID-i9L7EtYg.js";import"./index-bLIWCpda.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-DB41iIPt.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CpIRsoAz.js";import"./32-C4VDZHit.js";import{D as _,a as j,b as I,c as h,V as N,d as b,e as E}from"./text-CkieRYxe.js";import"./iframe-DmgkbAwY.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgRDMNuH.js";import"./index-0sbKER3h.js";const s="{{ width: 900, padding: 30 }}",T=`{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`,d="https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=4230-7104&mode=design&t=hGZk1uvXm3rDzcu6-0",k=()=>{const[t,r]=x.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(y,{title:"Divider",description:"Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider",figmaLink:d}),e.jsx("div",{className:a.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)==0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{description:_,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <Divider>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(i,{description:j,code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <Divider dashed>
      <span style={{color: "var(--text-grey-900)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(i,{description:I,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(i,{description:h,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(i,{description:N,code:`import { Divider } from '@nlmk/ds-2.0';

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
`}),e.jsx(i,{height:400,description:b,code:`import { Divider, Button, Icon, IconChemical24 } from '@nlmk/ds-2.0';

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
`}),e.jsx(u,{argsTypes:E})]}),Number(t)==1&&e.jsx(f,{url:d}),Number(t)==2&&e.jsx(g,{componentName:"Divider"})]})};function n(t){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Divider/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]}}),`
`,e.jsx(m,{of:D}),`
`,e.jsx(v,{children:e.jsx(k,{})})]})}function ce(t={}){const{wrapper:r}={...p(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n()}export{ce as default};
