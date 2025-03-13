import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as u}from"./index-CbmgEnq2.js";import{am as c,an as l,ao as g}from"./chunk-NUUEMKO5-BpO0R7nX.js";import{af as r,aE as d}from"./TreeList-YqG01ELH.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s as i,H as j,E as B}from"./Header-Dv8jD8tN.js";import{F as b}from"./FigmaEmbed-aqEsdOhX.js";import{P as S}from"./Properties-BlaN8mPn.js";import{T as h}from"./Tests-BjdzLg9N.js";/* empty css               */import"./generateUUID-Z4ktHL_f.js";import"./index-CkAXh9uP.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import{a as C}from"./argsTypes-BtYv8md7.js";import"./iframe-BWqAlQP2.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DNqyZNcJ.js";import"./index-B5g4YLzC.js";const s="SegmentButtonGroup",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",G=()=>{const[o,e]=f.useState(0),n=a=>o===a;return t.jsxs("div",{className:i.wrapper,children:[t.jsx(j,{title:s,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${s}`,figmaLink:m}),t.jsx("div",{className:i.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(B,{height:600,description:"SegmentButtonGroup по умолчанию",code:`import { SegmentButtonGroup } from '@nlmk/ds-2.0';

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
`}),t.jsx(S,{argsTypes:C})]}),o==1&&t.jsx(b,{url:m}),o==2&&t.jsx(h,{componentName:s})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Components/SegmentButtonGroup/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(l,{of:x}),`
`,t.jsx(g,{children:t.jsx(G,{})})]})}function it(o={}){const{wrapper:e}={...u(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(p,{...o})}):p()}export{it as default};
