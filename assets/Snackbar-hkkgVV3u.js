import{r as l,j as t,f as d,S as b,U as x}from"./iframe-CxLN9ksd.js";import{useMDXComponents as k}from"./index-CeChe1UL.js";import{E as j,a as f,S}from"./argsTypes-CbvAw-W7.js";import{DecoratorDefault as u}from"./Decorator.stories-DWPS1QvQ.js";import{s as m,H as g,E as n}from"./Header-B1Tht5jw.js";import{F as h}from"./FigmaEmbed-gwemKUEC.js";import{P as N}from"./Properties-Be6XSfnk.js";import{T}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as s}from"./index-Bs6EWGDb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3DoxRCP.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./index-LyR6p6RN.js";import"./24-DJtALV7Z.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-DMqNa1pl.js";import"./24-voYW8sKN.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./24-CbC-8o3Y.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const e="Snackbar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",M=()=>{const[r,o]=l.useState(0),a=i=>r===i;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(g,{title:e,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${e}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
