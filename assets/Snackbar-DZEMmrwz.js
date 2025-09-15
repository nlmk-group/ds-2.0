import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as l}from"./index-D2yTtfOz.js";import"./index-BZj5W0-3.js";import{af as s,$ as d,a0 as b}from"./TreeList-Dfumwbts.js";import{DecoratorDefault as x}from"./Decorator.stories-D7iJJ_iz.js";import{r as k}from"./index-BcJSXhQi.js";import{s as m,H as f,E as n}from"./Header-DMN9oXvM.js";import{F as j}from"./FigmaEmbed-CdX5UTsK.js";import{P as u}from"./Properties-D2HIDxL_.js";import{T as S}from"./Tests-Beah3iGJ.js";/* empty css               */import"./generateUUID-BavcPfJ4.js";import"./index-Inj23kr-.js";import"./index-2_my9O6o.js";import"./index-BTu6RRiT.js";import"./index-CkFns3eu.js";import"./index-DmffzHLE.js";import"./index-Btxx-I9m.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-DqPMIbXX.js";import"./index-C5rKoyII.js";import"./32-DGpMxF8b.js";import{a as g}from"./argsTypes-BsLNRge8.js";import{c as h,S as N,U as M}from"./DocsRenderer-CFRXHY34-Bxb1GJd9.js";import"./index-ChsGqxH_.js";import"./preview-CFLYHfFH.js";import"./iframe-Vwkb464U.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-4j-JTKdD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const i="Snackbar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",T=()=>{const[r,o]=k.useState(0),a=e=>r===e;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(f,{title:i,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
