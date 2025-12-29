import{r as a,j as t,f as g,S as m,U as d}from"./iframe-zk5xXBtA.js";import{useMDXComponents as T}from"./index-CSMoqiIu.js";import{E as l,T as C}from"./index-D9zx9C-F.js";import{DecoratorDefault as b}from"./Decorator.stories-XjMTlGWF.js";import{s,H as x,E as e}from"./Header-BMqOixcD.js";import{F as f}from"./FigmaEmbed-Bh-YhisY.js";import{P as G}from"./Properties-BH32KsQA.js";import{T as k}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as u}from"./index-CGZqhooT.js";import{a as I}from"./argsTypes-CLKZfsKz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-6T6AONQH.js";import"./index-9BCGLlQQ.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-B9FTsAqd.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-CTfBpVCI.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const i="ToggleButtonGroup",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27629&t=EnvIMGos3m33avAX-1",h=()=>{const[o,n]=a.useState(0),r=B=>o===B;return t.jsxs("div",{className:s.wrapper,children:[t.jsx(x,{title:i,description:"Компонент ToggleButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:p}),t.jsx("div",{className:s.tabs,children:t.jsxs(u,{children:[t.jsx(u.Tab,{label:"Разработчику",active:r(0),onClick:()=>n(0)}),t.jsx(u.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>n(1)}),t.jsx(u.Tab,{label:"Тестирование",active:r(2),onClick:()=>n(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{height:400,description:"Toggle Button по умолчанию",code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)

  return (
    <ToggleButtonGroup>
      <Button onClick={() => setCount(count+1)}>
        <Button.Label>
          Plus {count}
        </Button.Label>
      </Button>
      <Button onClick={() => alert('Count is '+ count)}>
        <Button.Label>
          Check result
        </Button.Label>
      </Button>
      <Button onClick={() => setCount(count-1)}>
        <Button.Label>
          Minus {count}
        </Button.Label>
      </Button>
    </ToggleButtonGroup>
  )
}
`}),t.jsx(e,{height:400,description:"Toggle Button с тултипами",code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';

const { Button } = ToggleButtonGroup;

export default App = () => {
  return (
    <ToggleButtonGroup>
      <Button>
        <Button.Tooltip description='Add one to count' placement='bottom'>
          <Button.Label>
            Plus
          </Button.Label>
        </Button.Tooltip>
      </Button>

      <Button>
        <Button.Tooltip description='Check count value' placement='bottom'>
          <Button.Label>
              Check result
            </Button.Label>
        </Button.Tooltip>
      </Button>

      <Button>
        <Button.Tooltip description='Subtract one from count' placement='bottom'>
          <Button.Label>
            Minus
          </Button.Label>
        </Button.Tooltip>
      </Button>
    </ToggleButtonGroup>
  )
}
`}),t.jsx(e,{height:400,description:"Toggle Button с разными размерами",code:`import { ToggleButtonGroup, Divider } from '@nlmk/ds-2.0';

const { Button } = ToggleButtonGroup;

export default App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      <ToggleButtonGroup size="${l.m}">
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup size="${l.s}">
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>
    </div>
  )
}
`}),t.jsx(e,{height:400,description:"Toggle Button с иконками",code:`import { ToggleButtonGroup, IconAddPlusCircleOutlined24, IconDeleteMinusOutlined24 } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)
  return (
    <ToggleButtonGroup>
      <Button onClick={() => setCount(count+1)}>
        <Button.Icon>
          <IconAddPlusCircleOutlined24 />
        </Button.Icon>
        <Button.Label>
          Plus {count}
        </Button.Label>
      </Button>
      <Button onClick={() => alert('Count is '+ count)}>
        <Button.Icon/>
        <Button.Label>
          Check result
        </Button.Label>
      </Button>
      <Button onClick={() => setCount(count-1)}>
        <Button.Icon>
          <IconDeleteMinusOutlined24 />
        </Button.Icon>
        <Button.Label>
          Minus {count}
        </Button.Label>
      </Button>
    </ToggleButtonGroup>
  )
}
`}),t.jsx(e,{height:400,description:"Toggle Button с бейджами",code:`import { ToggleButtonGroup, IconAddPlusCircleOutlined24, IconDeleteMinusOutlined24 } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)
  return (
    <ToggleButtonGroup>
      <Button onClick={() => setCount(count+1)}>
        <Button.Icon>
          <IconAddPlusCircleOutlined24 />
        </Button.Icon>
        <Button.Label>
          Plus
        </Button.Label>
        <Button.Badge>
          {count}
        </Button.Badge>
      </Button>
      <Button onClick={() => alert('Count is '+ count)}>
        <Button.Icon/>
        <Button.Label>
          Check result
        </Button.Label>
        <Button.Badge>
          {count}
        </Button.Badge>
      </Button>
      <Button onClick={() => setCount(count-1)}>
        <Button.Icon>
          <IconDeleteMinusOutlined24 />
        </Button.Icon>
        <Button.Label>
          Minus
        </Button.Label>
        <Button.Badge>
          {count}
        </Button.Badge>
      </Button>
    </ToggleButtonGroup>
  )
}
`}),t.jsx(e,{height:400,description:"Toggle Button с разными кнопками и иконками",code:`import { ToggleButtonGroup, Divider } from '@nlmk/ds-2.0';

const { Button } = ToggleButtonGroup;

export default App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      <ToggleButtonGroup>
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup >
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup >
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup >
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>
    </div>
  )
}
`}),t.jsx(G,{argsTypes:I})]}),o==1&&t.jsx(f,{url:p}),o==2&&t.jsx(k,{componentName:i})]})};function c(o){return t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Components/ToggleButtonGroup/Info",component:C,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Kgs9CYkgtxdvyQdLaFDbAp/DS2.0-Toggle-button-group?node-id=18%3A2642"},jest:["ToggleButtonGroup.test.tsx"]}}),`
`,t.jsx(m,{of:b}),`
`,t.jsx(d,{children:t.jsx(h,{})})]})}function gt(o={}){const{wrapper:n}={...T(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(c,{...o})}):c()}export{gt as default};
