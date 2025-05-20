import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import"./index-CYB2H57i.js";import{ag as o,P as u}from"./TreeList-BlowYYWI.js";import{DecoratorDefault as g}from"./Decorator.stories-B1hjNCvN.js";import{r as l}from"./index-Bnop-kX6.js";import{s as n,H as d,E as s}from"./Header-BIXWiZL1.js";import{F as x}from"./FigmaEmbed-BTR1upu5.js";import{P}from"./Properties-BJfkkXUE.js";import{T as f}from"./Tests-0MM5H8rT.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as j}from"./argsTypes-BlQF6Y1m.js";import{c as C,e as b,U as h}from"./DocsRenderer-CFRXHY34-xGBwJgAN.js";import"./preview-yGuw84d4.js";import"./iframe-DdMYiHlZ.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-Cto72PH8.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";const a="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,e]=l.useState(0),i=p=>r===p;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(d,{title:a,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`}),t.jsx("div",{className:n.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:i(0),onClick:()=>e(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>e(1)}),t.jsx(o.Tab,{label:"Тестирование",active:i(2),onClick:()=>e(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
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
              `}),t.jsx(P,{argsTypes:j})]}),r==1&&t.jsx(x,{url:T}),r==2&&t.jsx(f,{componentName:a})]})};function m(r){return t.jsxs(t.Fragment,{children:[t.jsx(C,{title:"Components/Pagination/Info",component:u}),`
`,t.jsx(b,{of:g}),`
`,t.jsx(h,{children:t.jsx(M,{})})]})}function nt(r={}){const{wrapper:e}={...c(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(m,{...r})}):m()}export{nt as default};
