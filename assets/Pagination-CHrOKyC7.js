import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as c}from"./index-D2yTtfOz.js";import"./index-BnEi3PKH.js";import{af as o,P as u}from"./TreeList-CKujmJpy.js";import{DecoratorDefault as g}from"./Decorator.stories-D7iJJ_iz.js";import{r as l}from"./index-BcJSXhQi.js";import{s as n,H as d,E as s}from"./Header-W0qZdeSK.js";import{F as x}from"./FigmaEmbed-DxGAIiFc.js";import{P}from"./Properties-Bvh17lDI.js";import{T as f}from"./Tests-CyRfR22c.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as j}from"./argsTypes-BlQF6Y1m.js";import{c as C,S as b,U as h}from"./DocsRenderer-CFRXHY34-Bm_YSRyE.js";import"./index-ChsGqxH_.js";import"./preview-DJTt2ryF.js";import"./iframe-DlyCZmm1.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-DF9iIiuz.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const a="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,e]=l.useState(0),i=p=>r===p;return t.jsxs("div",{className:n.wrapper,children:[t.jsx(d,{title:a,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`}),t.jsx("div",{className:n.tabs,children:t.jsxs(o,{children:[t.jsx(o.Tab,{label:"Разработчику",active:i(0),onClick:()=>e(0)}),t.jsx(o.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>e(1)}),t.jsx(o.Tab,{label:"Тестирование",active:i(2),onClick:()=>e(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(s,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
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
`,t.jsx(h,{children:t.jsx(M,{})})]})}function mt(r={}){const{wrapper:e}={...c(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(m,{...r})}):m()}export{mt as default};
