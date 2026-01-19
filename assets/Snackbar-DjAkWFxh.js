import{r as l,j as t,m as d,S as b,U as x}from"./iframe-tXE4xoYc.js";import{useMDXComponents as k}from"./index-BU2Hc1BN.js";import{E as j,a as f,S}from"./argsTypes-ugFYucwn.js";import{DecoratorDefault as u}from"./Decorator.stories-DX_mk-19.js";import{s as m,H as g,E as n}from"./Header-D7Lkw1fr.js";import{F as h}from"./FigmaEmbed-DGce_rmk.js";import{P as N}from"./Properties-3Caa_vUq.js";import{T}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as s}from"./index-BdAkzp84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfJPKXXV.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-UIqxTLHU.js";import"./24-C3aWb0fW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-BGmf7Yvo.js";import"./24-DKRMhkuJ.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./24-CGaTDQAV.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";const e="Snackbar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",M=()=>{const[r,o]=l.useState(0),a=i=>r===i;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(g,{title:e,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${e}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar>Snackbar по умолчанию</Snackbar>
)
              `}),t.jsx(n,{description:"Варианты цвета Snackbar",code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(j).map(i=>`"${i}"`).join(", ")}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}>Варианты цвета Snackbar</Snackbar>
    })}
  </>
)
              `}),t.jsx(N,{argsTypes:f})]}),r==1&&t.jsx(h,{url:p}),r==2&&t.jsx(T,{componentName:e})]})};function c(r){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Snackbar/Info",component:S,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187"},jest:["Snackbar.test.tsx"]}}),`
`,t.jsx(b,{of:u}),`
`,t.jsx(x,{children:t.jsx(M,{})})]})}function bt(r={}){const{wrapper:o}={...k(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(c,{...r})}):c()}export{bt as default};
