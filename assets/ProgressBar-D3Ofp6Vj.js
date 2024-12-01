import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import{am as n,an as d,ao as c}from"./chunk-NUUEMKO5-DZyk-Jvy.js";import{ad as t,as as l}from"./index-DDCCAZkA.js";import{DecoratorDefault as g}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as o,H as u,E as i}from"./Header-DvlVCt8d.js";import{F as f}from"./FigmaEmbed-ChK35Fz0.js";import{P as b}from"./Properties-CfKqzu8X.js";import{T as j}from"./Tests-BqyTkL7O.js";import"./generateUUID-B22BSTI4.js";import"./index-DJJ0U8Tt.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./32-DCTol8-9.js";import{a as h}from"./argsTypes-BsnBMKlz.js";import"./iframe-DTCYc5I8.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-JzgRXPMV.js";import"./index-CT8gBKwQ.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=548-102967&t=HhCDuaOuzHu5rgyf-1",B=()=>{const[e,s]=x.useState(0);return r.jsxs("div",{className:o.wrapper,children:[r.jsx(u,{title:"ProgressBar",description:"ProgressBar представляет собой компонент, показывающий прогресс выполнения задачи или процесса. Он предоставляет наглядное представление о проценте выполнения.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ProgressBar",figmaLink:a}),r.jsx("div",{className:o.tabs,children:r.jsxs(t,{children:[r.jsx(t.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>s(0)}),r.jsx(t.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>s(1)}),r.jsx(t.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>s(2)})]})}),Number(e)===0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:200,description:"Компонент ProgressBar имеет только одно обязательное свойство percentage, которое задается числом.",code:`import { ProgressBar } from '@nlmk/ds-2.0';

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
`,r.jsx(c,{children:r.jsx(B,{})})]})}function sr(e={}){const{wrapper:s}={...p(),...e.components};return s?r.jsx(s,{...e,children:r.jsx(m,{...e})}):m()}export{sr as default};
