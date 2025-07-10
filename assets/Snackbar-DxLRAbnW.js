import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as l}from"./index-D2yTtfOz.js";import"./index-Cms3Zue6.js";import{af as s,$ as d,a0 as b}from"./TreeList-ClJk-dpm.js";import{DecoratorDefault as x}from"./Decorator.stories-D7iJJ_iz.js";import{r as k}from"./index-BcJSXhQi.js";import{s as m,H as f,E as n}from"./Header-CuQ7vRj4.js";import{F as j}from"./FigmaEmbed-BiCEUi36.js";import{P as u}from"./Properties-Dccu9Gnq.js";import{T as S}from"./Tests-_mMmoTnv.js";/* empty css               */import"./generateUUID-CJxgi7Ha.js";import"./index-BG4omi31.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-DcXliXrs.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-t2lirjGB.js";import"./index-C5rKoyII.js";import"./32-BpMTv1cT.js";import{a as g}from"./argsTypes-B2XbxVO8.js";import{c as h,S as N,U as M}from"./DocsRenderer-CFRXHY34-Bm018Tbd.js";import"./index-ChsGqxH_.js";import"./preview-C_5_hbZ8.js";import"./iframe-RgodGknb.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-hoesmATG.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="Snackbar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",T=()=>{const[r,o]=k.useState(0),a=e=>r===e;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(f,{title:i,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
