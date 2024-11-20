import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import{am as u,an as g,ao as l}from"./chunk-NUUEMKO5-dBm1alr4.js";import{a9 as o,P as d}from"./index-N7PQoZjI.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as P}from"./index-Bnop-kX6.js";import{s as n,H as f,E as s}from"./Header-qj4SNJue.js";import{F as j}from"./FigmaEmbed-R2hIZcYQ.js";import{P as C}from"./Properties-DRW4mgpN.js";import{T as b}from"./Tests-SAvD4l8-.js";/* empty css               */import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import{a as h}from"./argsTypes-Bs5lrdRI.js";import"./iframe-BexKgGB-.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BmSRDSfW.js";import"./index-CT8gBKwQ.js";const i="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,e]=P.useState(0),a=p=>r===p;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(f,{title:i,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${i}`}),t.jsx("div",{className:n.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:a(0),onClick:()=>e(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:a(1),onClick:()=>e(1)}),t.jsx(o.Tab,{label:"Тестирование",active:a(2),onClick:()=>e(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
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
              `}),t.jsx(C,{argsTypes:h})]}),r==1&&t.jsx(j,{url:T}),r==2&&t.jsx(b,{componentName:i})]})};function m(r){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/Pagination/Info",component:d}),`
`,t.jsx(g,{of:x}),`
`,t.jsx(l,{children:t.jsx(M,{})})]})}function at(r={}){const{wrapper:e}={...c(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(m,{...r})}):m()}export{at as default};
