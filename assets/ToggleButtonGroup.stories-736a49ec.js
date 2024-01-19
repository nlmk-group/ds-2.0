import{M as C,U as G}from"./chunk-HLWAVYOI-3f61a7cc.js";import{a as u,a3 as p,a4 as r,a5 as m}from"./index-28aa8d3c.js";import{a as i,j as t,F as d}from"./clsx.m-3764cf42.js";import{r as b}from"./index-f1f749bf.js";import{s as c,H as f,E as n,T as L}from"./Tests-b01304cc.js";import{F as k}from"./FigmaEmbed-cb81cfd0.js";import{P as h}from"./Properties-8db9f8ae.js";/* empty css               */import"./index-a4c35820.js";import"./index-63601013.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as S}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{D as I,T as O,a as _,b as v,c as x,d as D,e as M,f as y}from"./constants-a6a22a0c.js";import{u as A}from"./index-4fb8b842.js";import"./iframe-e135f03c.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-01ead064.js";import"./index-29c055d1.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./.jest-test-results-279ee287.js";import"./index-c1da5c13.js";const l="ToggleButtonGroup",B="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43758&mode=design&t=awyt3Fzj1XS6th7v-1",E=()=>{const[o,e]=b.useState(0),s=T=>o===T;return i("div",{className:c.wrapper,children:[t(f,{title:l,description:"Компонент ToggleButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${l}`,figmaLink:B}),t("div",{className:c.tabs,children:i(u,{children:[t(u.Tab,{label:"Разработчику",active:s(0),onClick:()=>e(0)}),t(u.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>e(1)}),t(u.Tab,{label:"Тестирование",active:s(2),onClick:()=>e(2)})]})}),o==0&&i(d,{children:[t(n,{height:400,description:I,code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';
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
`}),t(n,{height:400,description:O,code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';

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
      <ToggleButtonGroup size="${p.default}">
        <Button onClick={() => alert('First option')}>
          <Button.Icon/>
        </Button>
        <Button onClick={() => alert('Second option')}>
          <Button.Icon/>
        </Button>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup size="${p.compact}">
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
`}),t(n,{height:400,description:v,code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)
  return (
    <ToggleButtonGroup>
      <Button onClick={() => setCount(count+1)}>
        <Button.Icon
          name='IconAdd24'
          containerSize={24}
        />
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
        <Button.Icon
          name='IconDeleteMinusOutlined32'
          containerSize={24}
        />
        <Button.Label>
          Minus {count}
        </Button.Label>
      </Button>
    </ToggleButtonGroup>
  )
}
`}),t(n,{height:400,description:x,code:`import { ToggleButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)
  return (
    <ToggleButtonGroup>
      <Button onClick={() => setCount(count+1)}>
        <Button.Icon
          name='IconAdd24'
          containerSize={24}
        />
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
        <Button.Icon
          name='IconDeleteMinusOutlined32'
          containerSize={24}
        />
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
`}),t(n,{height:400,description:D,code:`import { ToggleButtonGroup, Divider } from '@nlmk/ds-2.0';

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
`}),t(n,{height:400,description:M,code:`import { ToggleButtonGroup} from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)
  return (
    <ToggleButtonGroup status="default">
      <Button onClick={() => setCount(count+1)} status="success">
        <Button.Icon
          name='IconAdd24'
          containerSize={24}
        />
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
        <Button.Icon
          name='IconDeleteMinusOutlined32'
          containerSize={24}
        />
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
`}),t(h,{argsTypes:y})]}),o==1&&t(k,{url:B}),o==2&&t(S,{variant:"Heading4",color:"primary",children:t(L,{componentName:l})})]})};function g(o){return i(d,{children:[t(C,{title:"Components/ToggleButtonGroup/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Kgs9CYkgtxdvyQdLaFDbAp/DS2.0-Toggle-button-group?node-id=18%3A2642&mode=dev"},jest:["ToggleButtonGroup.test.tsx"]}}),`
`,t(G,{children:t(E,{})})]})}function N(o={}){const{wrapper:e}=Object.assign({},A(),o.components);return e?t(e,{...o,children:t(g,{...o})}):g()}const w=()=>{throw new Error("Docs-only story")};w.parameters={docsOnly:!0};const a={title:"Components/ToggleButtonGroup/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/Kgs9CYkgtxdvyQdLaFDbAp/DS2.0-Toggle-button-group?node-id=18%3A2642&mode=dev"},jest:["ToggleButtonGroup.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:N};const ht=["__page"];export{ht as __namedExportsOrder,w as __page,a as default};
