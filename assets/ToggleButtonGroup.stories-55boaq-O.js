import{U as g,M as f,e as I}from"./chunk-HLWAVYOI-ezXNbOe3.js";import{L as u,C as a,G as r,T as m}from"./index-BWU1r0v0.js";import{a as i,j as t,F as T}from"./jsx-runtime-2xDJh5tt.js";import{r as L}from"./index-CBqU2yxZ.js";import{s as B,H as k,E as n,T as O}from"./Tests-BwrYNA6X.js";import{F as h}from"./FigmaEmbed-CsOt3IFB.js";import{P as S}from"./Properties-BTOrmM9C.js";/* empty css               */import"./generateUUID-Cuz4oBdd.js";import"./index-BG0PBiA5.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as D}from"./index-nWYpQihe.js";import"./index-B0rYwNoJ.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-wBSyW2WA.js";import"./32-Cvin1aiw.js";import{D as v,T as x,b as A,c as M,d as y,f as _,e as N,a as E}from"./constants-CMucIQSM.js";import{useMDXComponents as F}from"./index-DI5IigMn.js";import"./iframe-DXHWjJsc.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BhGRst0S.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-D1oOZMEU.js";import"./index-CMH8wQUv.js";const c="ToggleButtonGroup",p="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=3302-7747&mode=design&t=v2uTZplRrFW7s4RK-0",C=()=>{const[o,e]=L.useState(0),s=b=>o===b;return i("div",{className:B.wrapper,children:[t(k,{title:c,description:"Компонент ToggleButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${c}`,figmaLink:p}),t("div",{className:B.tabs,children:i(u,{children:[t(u.Tab,{label:"Разработчику",active:s(0),onClick:()=>e(0)}),t(u.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>e(1)}),t(u.Tab,{label:"Тестирование",active:s(2),onClick:()=>e(2)})]})}),o==0&&i(T,{children:[t(n,{height:400,description:v,code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';
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
`}),t(n,{height:400,description:x,code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';

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
`}),t(n,{height:400,description:A,code:`import { ToggleButtonGroup, Divider } from '@nlmk/ds-2.0';

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
      <ToggleButtonGroup size="${a.default}">
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup size="${a.compact}">
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
`}),t(n,{height:400,description:M,code:`import { ToggleButtonGroup, IconAddPlusCircleOutlined24, IconDeleteMinusOutlined24 } from '@nlmk/ds-2.0';
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
`}),t(n,{height:400,description:y,code:`import { ToggleButtonGroup, IconAddPlusCircleOutlined24, IconDeleteMinusOutlined24 } from '@nlmk/ds-2.0';
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
`}),t(n,{height:400,description:_,code:`import { ToggleButtonGroup, Divider } from '@nlmk/ds-2.0';

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
      <ToggleButtonGroup status="${r.default}">
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup status="${r.error}">
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup status="${r.warning}">
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup status="${r.success}">
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
`}),t(n,{height:400,description:N,code:`import { ToggleButtonGroup, IconAddPlusCircleOutlined24, IconDeleteMinusOutlined24 } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)
  return (
    <ToggleButtonGroup status="default">
      <Button onClick={() => setCount(count+1)} status="success">
        <Button.Icon>
          <IconAddPlusCircleOutlined24 />
        </Button.Icon>
        <Button.Label>
          Plus
        </Button.Label>
        <Button.Badge>
          {(count + 1).toString()}
        </Button.Badge>
      </Button>
      <Button onClick={() => alert('Count is '+ count)}>
        <Button.Icon/>
        <Button.Label>
          Check result
        </Button.Label>
        <Button.Badge>
          {count.toString()}
        </Button.Badge>
      </Button>
      <Button onClick={() => setCount(count-1)} status="error">
        <Button.Icon>
          <IconDeleteMinusOutlined24 />
        </Button.Icon>
        <Button.Label>
          Minus
        </Button.Label>
        <Button.Badge>
          {(count - 1).toString()}
        </Button.Badge>
      </Button>
    </ToggleButtonGroup>
  )
}
`}),t(S,{argsTypes:E})]}),o==1&&t(h,{url:p}),o==2&&t(D,{variant:"Heading4",color:"primary",children:t(O,{componentName:c})})]})};function d(o){return i(T,{children:[t(f,{title:"Components/ToggleButtonGroup/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Kgs9CYkgtxdvyQdLaFDbAp/DS2.0-Toggle-button-group?node-id=18%3A2642&mode=dev"},jest:["ToggleButtonGroup.test.tsx"]}}),`
`,t(I,{name:"Docs",children:t(g,{children:t(C,{})})})]})}function P(o={}){const{wrapper:e}=Object.assign({},F(),o.components);return e?t(e,{...o,children:t(d,{...o})}):d()}const G=()=>t(g,{children:t(C,{})});G.storyName="Docs";G.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const l={title:"Components/ToggleButtonGroup/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/Kgs9CYkgtxdvyQdLaFDbAp/DS2.0-Toggle-button-group?node-id=18%3A2642&mode=dev"},jest:["ToggleButtonGroup.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["docs"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:P};const ft=["docs"];export{ft as __namedExportsOrder,l as default,G as docs};
