import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import{am as u,an as l,ao as g}from"./chunk-NUUEMKO5-C3NuZODr.js";import{ae as r,T as d}from"./TreeList-BfGIdsD6.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as y}from"./index-Bnop-kX6.js";import{s,H as B,E as f}from"./Header-DXhoFoHf.js";import{F as j}from"./FigmaEmbed-B3XdlqZo.js";import{P as S}from"./Properties-DKKhCioi.js";import{T as h}from"./Tests-BzOUC9WU.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-Ddr79P0b.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-D6U2gleG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-C6Bf8XA5.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as T}from"./argsTypes-D2esfFge.js";import"./iframe-CCB3gKCN.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-BMUr_q3-.js";import"./index-B5g4YLzC.js";const i="SegmentButtonGroup",m="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-92301&t=HhCDuaOuzHu5rgyf-1",b=()=>{const[o,e]=y.useState(0),n=a=>o===a;return t.jsxs("div",{className:s.wrapper,children:[t.jsx(B,{title:i,description:"Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:m}),t.jsx("div",{className:s.tabs,children:t.jsxs(r,{children:[t.jsx(r.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t.jsx(r.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>e(1)}),t.jsx(r.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),o==0&&t.jsxs(t.Fragment,{children:[t.jsx(f,{height:600,description:"SegmentButtonGroup по умолчанию",code:`import { SegmentButtonGroup, SegmentButton, Typography } from '@nlmk/ds-2.0';

export default App = () => {
  return (
    <SegmentButtonGroup {...argTypes}>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Сталь
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Цинк
        </Typography>
      </SegmentButton>
      <SegmentButton onClick={action('onClick')}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Чугун
        </Typography>
      </SegmentButton>
    </SegmentButtonGroup>
  )
}
`}),t.jsx(S,{argsTypes:T})]}),o==1&&t.jsx(j,{url:m}),o==2&&t.jsx(h,{componentName:i})]})};function p(o){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/SegmentButtonGroup/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=OsXEWBgtT8y4LBgR-0"},jest:["SegmentButtonGroup.test.tsx"]}}),`
`,t.jsx(l,{of:x}),`
`,t.jsx(g,{children:t.jsx(b,{})})]})}function st(o={}){const{wrapper:e}={...c(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(p,{...o})}):p()}export{st as default};
