import{r as l,j as t,f as d,S as b,U as x}from"./iframe-CVAHojaF.js";import{useMDXComponents as k}from"./index-DqTt4rKv.js";import{E as j,a as f,S}from"./argsTypes-Cz5KzjEj.js";import{DecoratorDefault as u}from"./Decorator.stories-Pdz9giCE.js";import{s as m,H as g,E as n}from"./Header-P01wOpj2.js";import{F as h}from"./FigmaEmbed-g9QqaeRo.js";import{P as N}from"./Properties-1BWy3pzy.js";import{T}from"./Tests-MQmjhMeS.js";/* empty css               */import{T as s}from"./index-Cyj4_MYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ_c8xXN.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./index-x8Y8AkZd.js";import"./24-DKX7LJ7g.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-BHgrLOFn.js";import"./24-Tgd-_Nih.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./generateUUID-M57HTP56.js";import"./24-BKsua3Hk.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const e="Snackbar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",M=()=>{const[r,o]=l.useState(0),a=i=>r===i;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(g,{title:e,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${e}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
