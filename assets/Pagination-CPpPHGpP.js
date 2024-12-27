import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import{am as u,an as g,ao as l}from"./chunk-NUUEMKO5-CDWB5etm.js";import{ah as o,P as d}from"./index-C1Xf_hS0.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as P}from"./index-Bnop-kX6.js";import{s as n,H as f,E as s}from"./Header-DqV-uP_8.js";import{F as j}from"./FigmaEmbed-BfkjrBVl.js";import{P as C}from"./Properties-sRwb8j1i.js";import{T as h}from"./Tests-HOEF5-pB.js";/* empty css               */import"./generateUUID-1tgHdX0-.js";import"./index-eOH20s0c.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CXG1awCY.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-qxD0tkeT.js";import"./index-Br4tp0-d.js";import"./32-Bf_1a6Rp.js";import{a as b}from"./argsTypes-Bs5lrdRI.js";import"./iframe-DZPRoslN.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-WTmmaHQ2.js";import"./index-B5g4YLzC.js";const i="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,e]=P.useState(0),a=p=>r===p;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(f,{title:i,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`}),t.jsx("div",{className:n.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:a(0),onClick:()=>e(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>e(1)}),t.jsx(o.Tab,{label:"Тестирование",active:a(2),onClick:()=>e(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
import React, { useState } from 'react';

export default App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={25}/>
    </>
    )
            }
              `}),t.jsx(s,{description:"Pagination с разрывом. Компонент скрывает элементы для своей компактности.",code:`import { Pagination } from '@nlmk/ds-2.0';
import React, { useState } from 'react';

export default App = () => {
  const [currentPage, setCurrentPage] = useState(7);
  return (
    <>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={25}/>
    </>
            )
            }
              `}),t.jsx(C,{argsTypes:b})]}),r==1&&t.jsx(j,{url:T}),r==2&&t.jsx(h,{componentName:i})]})};function m(r){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/Pagination/Info",component:d}),`
`,t.jsx(g,{of:x}),`
`,t.jsx(l,{children:t.jsx(M,{})})]})}function it(r={}){const{wrapper:e}={...c(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(m,{...r})}):m()}export{it as default};