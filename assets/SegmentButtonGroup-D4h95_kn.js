import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as a}from"./index-CpguRmgc.js";import{ag as l,ah as B,ai as d}from"./chunk-HLWAVYOI-CDz5neNB.js";import{Y as r,S as g}from"./index-DLauUNt7.js";import{DecoratorDefault as x}from"./Decorator.stories-BP3ijO2B.js";import{r as S}from"./index-DQ2WTIsS.js";import{s,H as C,E as e}from"./Header-wrQ-5qVu.js";import{F as f}from"./FigmaEmbed-BNPM20XD.js";import{P as k}from"./Properties-DOq_528h.js";import{T as b}from"./Tests-bf-kjmN6.js";/* empty css               */import"./generateUUID-CY9Prqwy.js";import"./index-BenQYTIH.js";import"./index-BgyuaCKK.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-DJXOh8UI.js";import"./index-Dvm_EBHX.js";import"./index-wNTT8eSr.js";import"./index-S3KjbRnp.js";import"./index-CWVO2cHI.js";import"./32-CCQbJusC.js";import{D as j,S as G,b as T,c as O,a as h}from"./constants-C5eBFvGG.js";import"./iframe-Cje73mov.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-D3wnZxGg.js";import"./index-0sbKER3h.js";const i="SegmentButtonGroup",u="https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=tKstDPBno2uq1Mh5-0",E=()=>{const[o,n]=S.useState(0),m=c=>o===c;return t.jsxs("div",{className:s.wrapper,children:[t.jsx(C,{title:i,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:u}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:m(0),onClick:()=>n(0)}),t.jsx(r.Tab,{label:"Тестирование",active:m(2),onClick:()=>n(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{height:400,description:j,code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <SegmentButtonGroup>
      <Button onClick={action('onClick')}>
        Печенье
      </Button>
      <Button onClick={action('onClick')}>
        Торты
      </Button>
      <Button onClick={action('onClick')}>
        Конфеты
      </Button>
    </SegmentButtonGroup>
  )
}
`}),t.jsx(e,{height:400,description:G,code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';

const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <SegmentButtonGroup compact>
      <Button onClick={action('onClick')}>
        Печенье
      </Button>
      <Button onClick={action('onClick')}>
        Торты
      </Button>
      <Button onClick={action('onClick')}>
        Конфеты
      </Button>
    </SegmentButtonGroup>
  )
}
`}),t.jsx(e,{height:400,description:T,code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';
import { buttonColor } from '../enums'
const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(buttonColor).map((color: buttonColor, index: number) => (
        <SegmentButtonGroup color={color} key={index}>
          <Button onClick={action('onClick')}>
            Печенье
          </Button>
          <Button onClick={action('onClick')}>
            Торты
          </Button>
          <Button onClick={action('onClick')}>
            Конфеты
          </Button>
        </SegmentButtonGroup>
      ))}
    </div>
  )
}
`}),t.jsx(e,{height:400,description:O,code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';
import { buttonColor } from '../enums'

const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <SegmentButtonGroup>
      {Object.values(buttonColor).map((color: buttonColor, index: number) => (
        <Button color={color} key={index} onClick={action('onClick')}>
          { index }
        </Button>
      ))}
    </SegmentButtonGroup>
  )
}
`}),t.jsx(k,{argsTypes:h})]}),o==1&&t.jsx(f,{url:u}),o==2&&t.jsx(b,{componentName:i})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/SegmentButtonGroup/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(B,{of:x}),`
`,t.jsx(d,{children:t.jsx(E,{})})]})}function at(o={}){const{wrapper:n}={...a(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(p,{...o})}):p()}export{at as default};
