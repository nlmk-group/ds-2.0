import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as a}from"./index-D2yTtfOz.js";import"./index-D51FTQdC.js";import{ah as u,ac as l,aR as g}from"./TreeList-DLKvZc0E.js";import{DecoratorDefault as m}from"./Decorator.stories-D7iJJ_iz.js";import{r as d}from"./index-BcJSXhQi.js";import{s,H as T,E as e}from"./Header-CVW-BCYd.js";import{F as C}from"./FigmaEmbed-BHXrOc1d.js";import{P as b}from"./Properties-CjgjNLHH.js";import{T as x}from"./Tests-B90gQPeH.js";/* empty css               */import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import"./32-BKmqX1Rw.js";import{a as f}from"./argsTypes-BJ5K87xc.js";import{c as G,S as k,U as I}from"./DocsRenderer-CFRXHY34-D8yK2Ik1.js";import"./index-ChsGqxH_.js";import"./preview-IyyJl8-N.js";import"./iframe-qhDvbGIv.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-CstQolbU.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="ToggleButtonGroup",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27629&t=EnvIMGos3m33avAX-1",h=()=>{const[o,n]=d.useState(0),r=B=>o===B;return t.jsxs("div",{className:s.wrapper,children:[t.jsx(T,{title:i,description:"Компонент ToggleButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:c}),t.jsx("div",{className:s.tabs,children:t.jsxs(u,{children:[t.jsx(u.Tab,{label:"Разработчику",active:r(0),onClick:()=>n(0)}),t.jsx(u.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>n(1)}),t.jsx(u.Tab,{label:"Тестирование",active:r(2),onClick:()=>n(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{height:400,description:"Toggle Button по умолчанию",code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';
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
`}),t.jsx(b,{argsTypes:f})]}),o==1&&t.jsx(C,{url:c}),o==2&&t.jsx(x,{componentName:i})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(G,{title:"Components/ToggleButtonGroup/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Kgs9CYkgtxdvyQdLaFDbAp/DS2.0-Toggle-button-group?node-id=18%3A2642"},jest:["ToggleButtonGroup.test.tsx"]}}),`
`,t.jsx(k,{of:m}),`
`,t.jsx(I,{children:t.jsx(h,{})})]})}function ct(o={}){const{wrapper:n}={...a(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(p,{...o})}):p()}export{ct as default};
