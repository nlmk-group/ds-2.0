import{r as p,j as e,f as l,S as m,U as v}from"./iframe-zk5xXBtA.js";import{useMDXComponents as c}from"./index-CSMoqiIu.js";import{D}from"./index-6T6AONQH.js";import{DecoratorDefault as y}from"./Decorator.stories-XjMTlGWF.js";import{s as a,H as x,E as r}from"./Header-BMqOixcD.js";import{F as u}from"./FigmaEmbed-Bh-YhisY.js";import{P as f}from"./Properties-BH32KsQA.js";import{T as j}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as o}from"./index-CGZqhooT.js";import{a as h}from"./argsTypes-DH9luQOU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-9BCGLlQQ.js";import"./index-D9zx9C-F.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const s="{{ width: 900, padding: 30 }}",b=`{{
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
