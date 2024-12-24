import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import{am as p,an as n,ao as c}from"./chunk-NUUEMKO5-D6MHIucw.js";import{E as d}from"./index-DppSdhCO.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as i,H as f,E as g}from"./Header-D4Mrudsn.js";import{F as j}from"./FigmaEmbed-D-PzDnMV.js";import{P as u}from"./Properties-lFA5fzlb.js";import{T as b}from"./Tests-OesKPFbJ.js";/* empty css               */import{ai as e}from"./index-CxYSwmcB.js";import"./generateUUID-BGENHwlB.js";import"./index-CEyYlgyG.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-B79NNBmL.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-B0dtJOWw.js";import"./index-Br4tp0-d.js";import"./32-DySMCdgK.js";import{a as E}from"./argsTypes-fLgjgmKq.js";import"./iframe-Dgkn6OIY.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./.jest-test-results-DQOj9aE3.js";import"./index-B5g4YLzC.js";const N="ErrorPage",s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-80936",h=()=>{const[t,o]=x.useState(0);return r.jsxs("div",{className:i.wrapper,children:[r.jsx(f,{title:"Error page",description:"Компонент ErrorPage предназначен для информирования пользователя о различных ошибках веб-приложения и предложения возможных действий для их решения с помощью настраиваемых сообщений и изображений.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${N}`,figmaLink:s}),r.jsx("div",{className:i.tabs,children:r.jsxs(e,{children:[r.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),r.jsx(e.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),r.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&r.jsxs(r.Fragment,{children:[r.jsx(g,{height:600,description:"Компонент ErrorPage разработан в разных вариантах",code:`import { ErrorPage } from '@nlmk/ds-2.0';

export default  App = () => (
  <ErrorPage errorCode="403" description="Нет доступа" hint="Воспользуйтесь боковым меню, чтобы перейти к нужной форме" />
)
`}),r.jsx(u,{argsTypes:E})]}),Number(t)==1&&r.jsx(j,{url:s}),Number(t)==2&&r.jsx(b,{componentName:"ErrorPage"})]})};function m(t){return r.jsxs(r.Fragment,{children:[r.jsx(p,{title:"Components/ErrorPage/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/ocBJCN1akiFe5oQljRKNi0/DS2.0-Error?type=design&node-id=2-10&mode=design&t=RSFbkTXfvL8sjP7n-0"},jest:["ErrorPage.test.tsx"]}}),`
`,r.jsx(n,{of:l}),`
`,r.jsx(c,{children:r.jsx(h,{})})]})}function er(t={}){const{wrapper:o}={...a(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(m,{...t})}):m()}export{er as default};
