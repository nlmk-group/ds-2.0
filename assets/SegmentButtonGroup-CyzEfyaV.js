import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import{am as u,an as l,ao as g}from"./chunk-NUUEMKO5-zybvIu1X.js";import{$ as r,S as d}from"./index-Bult1pSm.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s as i,H as j,E as B}from"./Header-Cqd_i1aV.js";import{F as b}from"./FigmaEmbed-Dv_1tmkq.js";import{P as S}from"./Properties-Bv2rjfL_.js";import{T}from"./Tests-cYn1xz5o.js";/* empty css               */import"./generateUUID-DAuIdu-p.js";import"./index-B0lWqv5F.js";import"./index-DPg--y1u.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BVI3RfDi.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BXzk8UvY.js";import"./32-CMOOVZNy.js";import{D as h,a as D}from"./constants-Ci6UP1vP.js";import"./iframe-Bqux-A90.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DNyW-qLm.js";import"./index-CT8gBKwQ.js";const s="SegmentButtonGroup",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",C=()=>{const[o,e]=f.useState(0),n=a=>o===a;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(j,{title:s,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:m}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(B,{height:600,description:h,code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';

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
`}),t.jsx(S,{argsTypes:D})]}),o==1&&t.jsx(b,{url:m}),o==2&&t.jsx(T,{componentName:s})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/SegmentButtonGroup/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(l,{of:x}),`
`,t.jsx(g,{children:t.jsx(C,{})})]})}function st(o={}){const{wrapper:e}={...c(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(p,{...o})}):p()}export{st as default};
