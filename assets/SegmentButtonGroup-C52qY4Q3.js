import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as u}from"./index-CpguRmgc.js";import{ag as c,ah as l,ai as g}from"./chunk-HLWAVYOI-DvyrZeHL.js";import{Y as r,S as d}from"./index-BGpPsu4k.js";import{DecoratorDefault as x}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as i,H as B,E as j}from"./Header-Bt-oxRaL.js";import{F as S}from"./FigmaEmbed-BRi3XZKB.js";import{P as b}from"./Properties-Do0KQQZq.js";import{T as h}from"./Tests-CSfu_vhY.js";/* empty css               */import"./generateUUID-C8XntvAg.js";import"./index-ByiRgrzj.js";import"./index-Cd-Fhxqm.js";import"./index-B8KuQLf-.js";import"./index-B_c816qF.js";import"./index-ehXB0alm.js";import"./index-CFeGFBie.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CTg4GkBi.js";import"./32-CkcGOl0S.js";import{D as T,a as D}from"./constants-mBKng5W3.js";import"./iframe-BX8EaEtl.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-FuqlRU2D.js";import"./index-BKbm6zW0.js";const n="SegmentButtonGroup",m="https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=tKstDPBno2uq1Mh5-0",w=()=>{const[o,e]=f.useState(0),s=a=>o===a;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(B,{title:n,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:m}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:s(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Тестирование",active:s(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(j,{height:600,description:T,code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';

const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <SegmentButtonGroup>
      <Button onClick={() => console.log(new Date())}>
        Печенье
      </Button>
      <Button onClick={() => console.log(new Date())}>
        Торты
      </Button>
      <Button onClick={() => console.log(new Date())}>
        Конфеты
      </Button>
    </SegmentButtonGroup>
  )
}
`}),t.jsx(b,{argsTypes:D})]}),o==1&&t.jsx(S,{url:m}),o==2&&t.jsx(h,{componentName:n})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Components/SegmentButtonGroup/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(l,{of:x}),`
`,t.jsx(g,{children:t.jsx(w,{})})]})}function pt(o={}){const{wrapper:e}={...u(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(p,{...o})}):p()}export{pt as default};
