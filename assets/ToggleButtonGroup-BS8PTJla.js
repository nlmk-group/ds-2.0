import{r as a,j as t,m as g,S as m,U as d}from"./iframe-DUDunD5j.js";import{useMDXComponents as T}from"./index-CDbv5Jgm.js";import{E as l,T as C}from"./index-rc7u3FmU.js";import{DecoratorDefault as b}from"./Decorator.stories-DJdCAXEf.js";import{s,H as x,E as e}from"./Header-BrZEypuE.js";import{F as f}from"./FigmaEmbed-DovFRgvJ.js";import{P as G}from"./Properties-CcP2VO-p.js";import{T as k}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as u}from"./index-DntXJei4.js";import{a as I}from"./argsTypes-mXnz0I6M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-z_YeHj0K.js";import"./index-DyX2qzoz.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./24-C5ui32Ki.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";const i="ToggleButtonGroup",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27629&t=EnvIMGos3m33avAX-1",h=()=>{const[o,n]=a.useState(0),r=B=>o===B;return t.jsxs("div",{className:s.wrapper,children:[t.jsx(x,{title:i,description:"Компонент ToggleButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:p}),t.jsx("div",{className:s.tabs,children:t.jsxs(u,{children:[t.jsx(u.Tab,{label:"Разработчику",active:r(0),onClick:()=>n(0)}),t.jsx(u.Tab,{label:"Дизайнеру",active:r(1),onClick:()=>n(1)}),t.jsx(u.Tab,{label:"Тестирование",active:r(2),onClick:()=>n(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{height:400,description:"Toggle Button по умолчанию",code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';
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
