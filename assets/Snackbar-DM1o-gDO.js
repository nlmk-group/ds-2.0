import{r as l,j as t,f as d,S as b,U as x}from"./iframe-zk5xXBtA.js";import{useMDXComponents as k}from"./index-CSMoqiIu.js";import{E as j,a as f,S}from"./argsTypes-DvNLMZxd.js";import{DecoratorDefault as u}from"./Decorator.stories-XjMTlGWF.js";import{s as m,H as g,E as n}from"./Header-BMqOixcD.js";import{F as h}from"./FigmaEmbed-Bh-YhisY.js";import{P as N}from"./Properties-BH32KsQA.js";import{T}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as s}from"./index-CGZqhooT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTfBpVCI.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-B9FTsAqd.js";import"./24-CHUQ235a.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DXO8B9MT.js";import"./24-DrF3F4Gh.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./generateUUID-M57HTP56.js";import"./24-BkbQ4VQu.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-DirQniBD.js";import"./index-cDYWclvM.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-2PvTlRtj.js";import"./24-DyWGmQTd.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";const e="Snackbar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",M=()=>{const[r,o]=l.useState(0),a=i=>r===i;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(g,{title:e,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${e}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
