import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import{am as n,an as p,ao as l}from"./chunk-NUUEMKO5-CkiiNlyy.js";import{b as c}from"./index-Br4tp0-d.js";import{DecoratorDefault as u}from"./Decorator.stories-B1hjNCvN.js";import{r as d}from"./index-Bnop-kX6.js";import{s as i,H as f,E as x}from"./Header-EP2jVtSV.js";import{F as b}from"./FigmaEmbed-C-3tISD_.js";import{P as j}from"./Properties-C46i6TC6.js";import{T as g}from"./Tests-4iTQQ7zx.js";import{af as s}from"./index-ByAgZyky.js";import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./32-DCTol8-9.js";import{a as I}from"./argsTypes-DqKCXWiN.js";import"./iframe-DNfwqCnh.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./.jest-test-results-BiTg2p7s.js";import"./index-CT8gBKwQ.js";const e="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=527-204395",N=()=>{const[r,o]=d.useState(0);return t.jsxs("div",{className:i.wrapper,children:[t.jsx(f,{title:"Illustration",description:`Illustration отображает картинки для визуального объяснения проблемы,
информирования и улучшения общего впечатления от взаимодействия с приложением.`,isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Illustration",figmaLink:e}),t.jsx("div",{className:i.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:Number(r)===0,onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:Number(r)===1,onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:Number(r)===2,onClick:()=>o(2)})]})}),Number(r)===0&&t.jsxs(t.Fragment,{children:[t.jsx(x,{height:400,description:"Базовый Illustration.",code:`import { Illustration } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Illustration name="error404" size="medium" alt="Описание картинки" />
  )
};

export default App;
`}),t.jsx(j,{argsTypes:I})]}),Number(r)===1&&t.jsx(b,{url:e}),Number(r)===2&&t.jsx(g,{componentName:"Illustration"})]})};function m(r){return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Components/Illustration/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=527-204395&t=DwOLU5X1oNWU7h8f-1"},jest:["Illustration.test.tsx"]}}),`
`,t.jsx(p,{of:u}),`
`,t.jsx(l,{children:t.jsx(N,{})})]})}function ot(r={}){const{wrapper:o}={...a(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(m,{...r})}):m()}export{ot as default};