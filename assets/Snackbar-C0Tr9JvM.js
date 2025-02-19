import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as l}from"./index-CbmgEnq2.js";import{am as d,an as b,ao as x}from"./chunk-NUUEMKO5-U_nqBEx1.js";import{ah as a,a1 as k,a3 as f}from"./TreeList-CKirDdvd.js";import{DecoratorDefault as j}from"./Decorator.stories-B1hjNCvN.js";import{r as u}from"./index-Bnop-kX6.js";import{s as n,H as S,E as m}from"./Header-DefAihSB.js";import{F as g}from"./FigmaEmbed-Doz2txz1.js";import{P as h}from"./Properties-C454Itw0.js";import{T as N}from"./Tests-BO_xuJ02.js";/* empty css               */import"./generateUUID-B-1dzpB_.js";import"./index-CvUjrmfM.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DubX4Ptm.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-CLtrYh5C.js";import"./index-DokmLR-l.js";import"./32-BXnIH58b.js";import{a as M}from"./argsTypes-D6gsBHgQ.js";import"./iframe-VKnY43zz.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DYI2zjFH.js";import"./index-B5g4YLzC.js";const i="Snackbar",c="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187",T=()=>{const[r,o]=u.useState(0),s=e=>r===e;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(S,{title:i,description:"Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`,figmaLink:c}),t.jsx("div",{className:n.tabs,children:t.jsxs(a,{children:[t.jsx(a.Tab,{label:"Разработчику",active:s(0),onClick:()=>o(0)}),t.jsx(a.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>o(1)}),t.jsx(a.Tab,{label:"Тестирование",active:s(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(m,{description:"Snackbar по умолчанию",height:150,code:`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar>Snackbar по умолчанию</Snackbar>
)
              `}),t.jsx(m,{description:"Варианты цвета Snackbar",code:`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(k).map(e=>`"${e}"`).join(", ")}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}>Варианты цвета Snackbar</Snackbar>
    })}
  </>
)
              `}),t.jsx(h,{argsTypes:M})]}),r==1&&t.jsx(g,{url:c}),r==2&&t.jsx(N,{componentName:i})]})};function p(r){return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Components/Snackbar/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187"},jest:["Snackbar.test.tsx"]}}),`
`,t.jsx(b,{of:j}),`
`,t.jsx(x,{children:t.jsx(T,{})})]})}function it(r={}){const{wrapper:o}={...l(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(p,{...r})}):p()}export{it as default};
