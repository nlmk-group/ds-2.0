import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as a}from"./index-CbmgEnq2.js";import{am as p,an as n,ao as c}from"./chunk-NUUEMKO5-DeuwWR7A.js";import{E as d}from"./index-DppSdhCO.js";import{DecoratorDefault as l}from"./Decorator.stories-B1hjNCvN.js";import{r as g}from"./index-Bnop-kX6.js";import{s,H as x,E as f}from"./Header-v1_dscmB.js";import{F as j}from"./FigmaEmbed-2du_cuPx.js";import{P as u}from"./Properties-D0VwrEJs.js";import{T as b}from"./Tests-DAMOIcFf.js";/* empty css               */import{ag as e}from"./TreeList-CoU3uI8W.js";import"./generateUUID-C85qI4Bk.js";import"./index-lePHaZI9.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-Cy-FRK8M.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-cYFuzf0Y.js";import"./index-DokmLR-l.js";import"./32-D2mD275C.js";import{a as E}from"./argsTypes-fLgjgmKq.js";import"./iframe-nJ3JTef2.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./types-CpBSVUgC.js";import"./clsx-B-dksMZM.js";import"./.jest-test-results-BplG63xz.js";import"./index-B5g4YLzC.js";const N="ErrorPage",i="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-80936",h=()=>{const[t,o]=g.useState(0);return r.jsxs("div",{className:s.wrapper,children:[r.jsx(x,{title:"Error page",description:"Компонент ErrorPage предназначен для информирования пользователя о различных ошибках веб-приложения и предложения возможных действий для их решения с помощью настраиваемых сообщений и изображений.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${N}`,figmaLink:i}),r.jsx("div",{className:s.tabs,children:r.jsxs(e,{children:[r.jsx(e.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>o(0)}),r.jsx(e.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>o(1)}),r.jsx(e.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>o(2)})]})}),Number(t)==0&&r.jsxs(r.Fragment,{children:[r.jsx(f,{height:600,description:"Компонент ErrorPage разработан в разных вариантах",code:`import { ErrorPage } from '@nlmk/ds-2.0';

export default  App = () => (
  <ErrorPage errorCode="403" description="Нет доступа" hint="Воспользуйтесь боковым меню, чтобы перейти к нужной форме" />
)
`}),r.jsx(u,{argsTypes:E})]}),Number(t)==1&&r.jsx(j,{url:i}),Number(t)==2&&r.jsx(b,{componentName:"ErrorPage"})]})};function m(t){return r.jsxs(r.Fragment,{children:[r.jsx(p,{title:"Components/ErrorPage/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/ocBJCN1akiFe5oQljRKNi0/DS2.0-Error?type=design&node-id=2-10&mode=design&t=RSFbkTXfvL8sjP7n-0"},jest:["ErrorPage.test.tsx"]}}),`
`,r.jsx(n,{of:l}),`
`,r.jsx(c,{children:r.jsx(h,{})})]})}function er(t={}){const{wrapper:o}={...a(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(m,{...t})}):m()}export{er as default};
