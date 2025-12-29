import{r as p,j as e,f as l,S as m,U as v}from"./iframe-CxLN9ksd.js";import{useMDXComponents as c}from"./index-CeChe1UL.js";import{D}from"./index-Bz6VJdOb.js";import{DecoratorDefault as y}from"./Decorator.stories-DWPS1QvQ.js";import{s as a,H as x,E as r}from"./Header-B1Tht5jw.js";import{F as u}from"./FigmaEmbed-gwemKUEC.js";import{P as f}from"./Properties-Be6XSfnk.js";import{T as j}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as o}from"./index-Bs6EWGDb.js";import{a as h}from"./argsTypes-Bgyyjqup.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CORENSTS.js";import"./index-DUSNaC2m.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-LyR6p6RN.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const s="{{ width: 900, padding: 30 }}",b=`{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`,d="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=533-6991&t=HhCDuaOuzHu5rgyf-1",g=()=>{const[i,t]=p.useState(0);return e.jsxs("div",{className:a.wrapper,children:[e.jsx(x,{title:"Divider",description:"Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider",figmaLink:d}),e.jsx("div",{className:a.tabs,children:e.jsxs(o,{children:[e.jsx(o.Tab,{label:"Разработчику",active:Number(i)===0,onClick:()=>t(0)}),e.jsx(o.Tab,{label:"Дизайнеру",active:Number(i)===1,onClick:()=>t(1)}),e.jsx(o.Tab,{label:"Тестирование",active:Number(i)===2,onClick:()=>t(2)})]})}),Number(i)==0&&e.jsxs(e.Fragment,{children:[e.jsx(r,{description:"Divider по умолчанию",code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <Divider>
      <span style={{color: "var(--steel-90)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:"Divider с пунктирной линией",code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <Divider dashed>
      <span style={{color: "var(--steel-90)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:"Варианты ориентаций Divider",code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <Divider orientation="left">
      <span style={{color: "var(--steel-90)"}}>
        Вариант ориентации Divider влево
      </span>
    </Divider>
    <br/>
    <Divider orientation="right">
      <span style={{color: "var(--steel-90)"}}>
        Вариант ориентации Divider вправо
      </span>
    </Divider>
    <br/>
    <Divider orientation="center">
      <span style={{color: "var(--steel-90)"}}>
        Вариант ориентации Divider по середине
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:"Кастомизация размера пространства",code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <Divider
      orientation="left"
      orientationSpace={68}
    >
      <span style={{color: "var(--steel-90)"}}>
        Кастомизация размера пространства
      </span>
    </Divider>
    <br/>
    <Divider
      orientation="right"
      orientationSpace={72}
    >
      <span style={{color: "var(--steel-90)"}}>
        Кастомизация размера пространства
      </span>
    </Divider>
  </div>
)
`}),e.jsx(r,{description:"Вертикальный Divider",code:`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${s}>
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №3
      </span>
    </div>
  </div>
)
`}),e.jsx(r,{height:400,description:"Типы Divider",code:`import { Divider, Button, Icon, IconChemical24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <div style=${b}>
    <Divider dashed />
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
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
        <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
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
        <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
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
`}),e.jsx(f,{argsTypes:h})]}),Number(i)==1&&e.jsx(u,{url:d}),Number(i)==2&&e.jsx(j,{componentName:"Divider"})]})};function n(i){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Divider/Info",component:D,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2532-5682&mode=design&t=7KYJWL6jSJFvrL06-0"},jest:["Divider.test.tsx"]}}),`
`,e.jsx(m,{of:y}),`
`,e.jsx(v,{children:e.jsx(g,{})})]})}function me(i={}){const{wrapper:t}={...c(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n()}export{me as default};
