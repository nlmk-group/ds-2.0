import{r as l,j as t,m as d,S as b,U as x}from"./iframe-DUDunD5j.js";import{useMDXComponents as k}from"./index-CDbv5Jgm.js";import{E as j,a as f,S}from"./argsTypes-FDRYXMOf.js";import{DecoratorDefault as u}from"./Decorator.stories-DJdCAXEf.js";import{s as m,H as g,E as n}from"./Header-BrZEypuE.js";import{F as h}from"./FigmaEmbed-DovFRgvJ.js";import{P as N}from"./Properties-CcP2VO-p.js";import{T}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as s}from"./index-DntXJei4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-aoSKrGJR.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./index-YMfOmFJ1.js";import"./24-C99UGV7O.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./24-BwgIJwEH.js";import"./24-BAIQ796Q.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./24-C5ui32Ki.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";const e="Snackbar",p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",M=()=>{const[r,o]=l.useState(0),a=i=>r===i;return t.jsxs("div",{className:m.wrapper,children:[t.jsx(g,{title:e,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${e}`,figmaLink:p}),t.jsx("div",{className:m.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:a(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:a(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

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
