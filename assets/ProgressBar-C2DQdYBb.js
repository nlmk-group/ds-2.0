import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import{am as n,an as d,ao as c}from"./chunk-NUUEMKO5-D6WHLBUX.js";import{ag as s,aD as l}from"./TreeList-nratkZsU.js";import{DecoratorDefault as g}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as o,H as u,E as i}from"./Header-BTNj6gKe.js";import{F as f}from"./FigmaEmbed-CNAs0AGD.js";import{P as b}from"./Properties-DVs4NaDI.js";import{T as j}from"./Tests-C2SgintH.js";import"./generateUUID-CKWu6hxV.js";import"./index-GIq1hJAH.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-BDwZaM9Z.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-8bMf8-rB.js";import"./index-DokmLR-l.js";import"./32-DOo0Pdng.js";import{a as h}from"./argsTypes-BsnBMKlz.js";import"./iframe-6e6dWBoL.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-BeG1DPgZ.js";import"./index-B5g4YLzC.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=548-102967&t=HhCDuaOuzHu5rgyf-1",B=()=>{const[e,t]=x.useState(0);return r.jsxs("div",{className:o.wrapper,children:[r.jsx(u,{title:"ProgressBar",description:"ProgressBar представляет собой компонент, показывающий прогресс выполнения задачи или процесса. Он предоставляет наглядное представление о проценте выполнения.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ProgressBar",figmaLink:a}),r.jsx("div",{className:o.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r.jsx(s.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r.jsx(s.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)===0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:200,description:"Компонент ProgressBar имеет только одно обязательное свойство percentage, которое задается числом.",code:`import { ProgressBar } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '400px', marginTop: '50px' }}>
    <ProgressBar percentage={60} />
  </div>
);
`}),r.jsx(i,{height:200,description:"Компоненту ProgressBar можно добавить label который будет располагаться под шкалой процента.",code:`import { ProgressBar } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '400px', marginTop: '50px' }}>
    <ProgressBar percentage={50} label="Прогресс" />
  </div>
);
`}),r.jsx(b,{argsTypes:h})]}),Number(e)===1&&r.jsx(f,{url:a}),Number(e)===2&&r.jsx(j,{componentName:"ProgressBar"})]})};function m(e){return r.jsxs(r.Fragment,{children:[r.jsx(n,{title:"Components/ProgressBar/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2606-251&mode=design&t=BUClvN8ropisHp5v-0"},jest:["ProgressBar.test.tsx"]}}),`
`,r.jsx(d,{of:g}),`
`,r.jsx(c,{children:r.jsx(B,{})})]})}function or(e={}){const{wrapper:t}={...p(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(m,{...e})}):m()}export{or as default};
