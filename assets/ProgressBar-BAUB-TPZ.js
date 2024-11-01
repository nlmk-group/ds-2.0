import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as p}from"./index-DtGqrCZN.js";import{ag as n,ah as d,ai as c}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as s,aj as l}from"./index-ZojCmbpv.js";import{DecoratorDefault as g}from"./Decorator.stories-CffsLfgf.js";import{r as x}from"./index-Cu9bd8lq.js";import{s as o,H as u,E as i}from"./Header-CN10_-75.js";import{F as f}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as j}from"./Properties-Btz1YxCe.js";import{T as b}from"./Tests-CWaY5hDn.js";import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as h}from"./argsTypes-BsnBMKlz.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";const a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=548-102967&t=HhCDuaOuzHu5rgyf-1",B=()=>{const[e,t]=x.useState(0);return r.jsxs("div",{className:o.wrapper,children:[r.jsx(u,{title:"ProgressBar",description:"ProgressBar представляет собой компонент, показывающий прогресс выполнения задачи или процесса. Он предоставляет наглядное представление о проценте выполнения.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ProgressBar",figmaLink:a}),r.jsx("div",{className:o.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>t(0)}),r.jsx(s.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>t(1)}),r.jsx(s.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>t(2)})]})}),Number(e)===0&&r.jsxs(r.Fragment,{children:[r.jsx(i,{height:200,description:"Компонент ProgressBar имеет только одно обязательное свойство percentage, которое задается числом.",code:`import { ProgressBar } from '@nlmk/ds-2.0';

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
`}),r.jsx(j,{argsTypes:h})]}),Number(e)===1&&r.jsx(f,{url:a}),Number(e)===2&&r.jsx(b,{componentName:"ProgressBar"})]})};function m(e){return r.jsxs(r.Fragment,{children:[r.jsx(n,{title:"Components/ProgressBar/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=2606-251&mode=design&t=BUClvN8ropisHp5v-0"},jest:["ProgressBar.test.tsx"]}}),`
`,r.jsx(d,{of:g}),`
`,r.jsx(c,{children:r.jsx(B,{})})]})}function or(e={}){const{wrapper:t}={...p(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(m,{...e})}):m()}export{or as default};
