import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as u}from"./index-CpguRmgc.js";import{ag as c,ah as l,ai as g}from"./chunk-HLWAVYOI-Ui380Jyo.js";import{a0 as r,S as d}from"./index-CMhB4zJG.js";import{DecoratorDefault as x}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as i,H as B,E as j}from"./Header-BHHYucgQ.js";import{F as S}from"./FigmaEmbed-CRHXINJv.js";import{P as b}from"./Properties-BGPqIl86.js";import{T as h}from"./Tests-CJI5C2M6.js";/* empty css               */import"./generateUUID-DB8_0F2G.js";import"./index-C04uUQ85.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-5BTuYEoj.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BThqyTlu.js";import"./32-Y-7Ywnum.js";import{D as T,a as D}from"./constants-CutCiSEF.js";import"./iframe-BG7mJDGh.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-PF5RIt03.js";import"./index-BKbm6zW0.js";const n="SegmentButtonGroup",m="https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=tKstDPBno2uq1Mh5-0",w=()=>{const[o,e]=f.useState(0),s=a=>o===a;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(B,{title:n,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:m}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:s(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Тестирование",active:s(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(j,{height:600,description:T,code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';

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
