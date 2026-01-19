import{r as c,j as t,m as u,S as g,U as l}from"./iframe-DUDunD5j.js";import{useMDXComponents as d}from"./index-CDbv5Jgm.js";import{P as x}from"./index-Bp0OqG7y.js";import{DecoratorDefault as P}from"./Decorator.stories-DJdCAXEf.js";import{s as a,H as f,E as n}from"./Header-BrZEypuE.js";import{F as j}from"./FigmaEmbed-DovFRgvJ.js";import{P as C}from"./Properties-CcP2VO-p.js";import{T as b}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as i}from"./index-DntXJei4.js";import{a as h}from"./argsTypes-BlQF6Y1m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-aoSKrGJR.js";import"./index-DyX2qzoz.js";import"./clsx-B-dksMZM.js";import"./index-YMfOmFJ1.js";import"./index-CJbix_Uw.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-vYUqBTVu.js";import"./24-CAewpWgK.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuTegHCu.js";import"./index-BBEOAWV5.js";import"./index-DdmbHqmW.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./useFloatingReferenceSync-DB9ttEJp.js";import"./index-DhhcK1qW.js";import"./index-BHis8FFF.js";import"./index-BjTLv_jS.js";import"./index-BpbvmvtH.js";import"./types-TdnjS80C.js";import"./floating-ui.react-DkiUDhV9.js";import"./index-Bsb4qDv-.js";import"./index-B4g2o7cg.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-BE6Pvktf.js";const m="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,o]=c.useState(0),e=p=>r===p;return t.jsxs("div",{className:a.wrapper,children:[t.jsx(f,{title:m,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`}),t.jsx("div",{className:a.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:e(0),onClick:()=>o(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:e(1),onClick:()=>o(1)}),t.jsx(i.Tab,{label:"Тестирование",active:e(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
import React, { useState } from 'react';

export default App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={25}/>
    </>
    )
            }
              `}),t.jsx(n,{description:"Pagination с разрывом. Компонент скрывает элементы для своей компактности.",code:`import { Pagination } from '@nlmk/ds-2.0';
import React, { useState } from 'react';

export default App = () => {
  const [currentPage, setCurrentPage] = useState(7);
  return (
    <>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageCount={25}/>
    </>
            )
            }
              `}),t.jsx(C,{argsTypes:h})]}),r==1&&t.jsx(j,{url:T}),r==2&&t.jsx(b,{componentName:m})]})};function s(r){return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Components/Pagination/Info",component:x}),`
`,t.jsx(g,{of:P}),`
`,t.jsx(l,{children:t.jsx(M,{})})]})}function kt(r={}){const{wrapper:o}={...d(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(s,{...r})}):s()}export{kt as default};
