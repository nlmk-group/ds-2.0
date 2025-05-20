import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as l}from"./index-CbmgEnq2.js";import"./index-CYB2H57i.js";import{ag as s,$ as d,a1 as b}from"./TreeList-BlowYYWI.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as k}from"./index-Bnop-kX6.js";import{s as n,H as f,E as m}from"./Header-BIXWiZL1.js";import{F as j}from"./FigmaEmbed-BTR1upu5.js";import{P as u}from"./Properties-BJfkkXUE.js";import{T as S}from"./Tests-0MM5H8rT.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as g}from"./argsTypes-BTuwDmVy.js";import{c as h,e as N,U as M}from"./DocsRenderer-CFRXHY34-xGBwJgAN.js";import"./preview-yGuw84d4.js";import"./iframe-DdMYiHlZ.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-Cto72PH8.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const i="Snackbar",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",T=()=>{const[r,o]=k.useState(0),a=e=>r===e;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(f,{title:i,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:c}),t.jsx("div",{className:n.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(m,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar>Snackbar по умолчанию</Snackbar>
)
              `}),t.jsx(m,{description:"Варианты цвета Snackbar",code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(d).map(e=>`"${e}"`).join(", ")}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}>Варианты цвета Snackbar</Snackbar>
    })}
  </>
)
              `}),t.jsx(u,{argsTypes:g})]}),r==1&&t.jsx(j,{url:c}),r==2&&t.jsx(S,{componentName:i})]})};function p(r){return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Components/Snackbar/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187"},jest:["Snackbar.test.tsx"]}}),`
`,t.jsx(N,{of:x}),`
`,t.jsx(M,{children:t.jsx(T,{})})]})}function nt(r={}){const{wrapper:o}={...l(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(p,{...r})}):p()}export{nt as default};
