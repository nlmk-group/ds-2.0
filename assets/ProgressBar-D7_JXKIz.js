import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import"./index-CDNBfPUD.js";import{ag as s,aH as n}from"./TreeList-KafSWxD5.js";import{DecoratorDefault as c}from"./Decorator.stories-B1hjNCvN.js";import{r as d}from"./index-Bnop-kX6.js";import{s as o,H as l,E as i}from"./Header-C1-O-XnO.js";import{F as g}from"./FigmaEmbed-BdmsVGpE.js";import{P as x}from"./Properties-C1uV5wRN.js";import{T as u}from"./Tests-DV49_lgf.js";import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as f}from"./argsTypes-BsnBMKlz.js";import{c as b,e as j,U as h}from"./DocsRenderer-CFRXHY34-D9cGPbCT.js";import"./preview-B_gHuUAG.js";import"./iframe-Bi6NeCl1.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-AvLRxKSw.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=548-102967&t=HhCDuaOuzHu5rgyf-1",B=()=>{const[e,t]=d.useState(0);return r.jsxs("div",{className:o.wrapper,children:[r.jsx(l,{title:"ProgressBar",description:"ProgressBar представляет собой компонент, показывающий прогресс выполнения задачи или процесса. Он предоставляет наглядное представление о проценте выполнения.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ProgressBar",figmaLink:a}),r.jsx("div",{className:o.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r.jsx(s.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r.jsx(s.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)===0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:200,description:"Компонент ProgressBar имеет только одно обязательное свойство percentage, которое задается числом.",code:`import { ProgressBar } from '@nlmk/ds-2.0';

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
`}),r.jsx(x,{argsTypes:f})]}),Number(e)===1&&r.jsx(g,{url:a}),Number(e)===2&&r.jsx(u,{componentName:"ProgressBar"})]})};function m(e){return r.jsxs(r.Fragment,{children:[r.jsx(b,{title:"Components/ProgressBar/Info",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2606-251&mode=design&t=BUClvN8ropisHp5v-0"},jest:["ProgressBar.test.tsx"]}}),`
`,r.jsx(j,{of:c}),`
`,r.jsx(h,{children:r.jsx(B,{})})]})}function or(e={}){const{wrapper:t}={...p(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(m,{...e})}):m()}export{or as default};
