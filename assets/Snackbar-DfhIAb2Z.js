import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as l}from"./index-D2yTtfOz.js";import"./index-DBJrpVqj.js";import{af as s,$ as d,a0 as b}from"./TreeList-Dx-quzH6.js";import{DecoratorDefault as x}from"./Decorator.stories-D7iJJ_iz.js";import{r as k}from"./index-BcJSXhQi.js";import{s as m,H as f,E as n}from"./Header-_Kvo3PlW.js";import{F as j}from"./FigmaEmbed-vM6gHhjJ.js";import{P as u}from"./Properties-Bc2FKMFa.js";import{T as S}from"./Tests-CRUl_eaF.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-0Ow6mfXJ.js";import"./index-DMhwcTYd.js";import"./index-Dl1-T1_Z.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DWrMXfke.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as g}from"./argsTypes-ow7fk5hG.js";import{c as h,S as N,U as M}from"./DocsRenderer-CFRXHY34-DGF3tSn7.js";import"./index-ChsGqxH_.js";import"./preview-Du4KB2sj.js";import"./iframe-CIjGc7rL.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-kFSDrB5T.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="Snackbar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",T=()=>{const[r,o]=k.useState(0),a=e=>r===e;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(f,{title:i,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar>Snackbar по умолчанию</Snackbar>
)
              `}),t.jsx(n,{description:"Варианты цвета Snackbar",code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(d).map(e=>`"${e}"`).join(", ")}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}>Варианты цвета Snackbar</Snackbar>
    })}
  </>
)
              `}),t.jsx(u,{argsTypes:g})]}),r==1&&t.jsx(j,{url:p}),r==2&&t.jsx(S,{componentName:i})]})};function c(r){return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Components/Snackbar/Info",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187"},jest:["Snackbar.test.tsx"]}}),`
`,t.jsx(N,{of:x}),`
`,t.jsx(M,{children:t.jsx(T,{})})]})}function pt(r={}){const{wrapper:o}={...l(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(c,{...r})}):c()}export{pt as default};
