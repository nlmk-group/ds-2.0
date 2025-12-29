import{r as c,j as t,f as u,S as g,U as l}from"./iframe-CVAHojaF.js";import{useMDXComponents as d}from"./index-DqTt4rKv.js";import{P as x}from"./index-BffJZUoj.js";import{DecoratorDefault as P}from"./Decorator.stories-Pdz9giCE.js";import{s as a,H as f,E as n}from"./Header-P01wOpj2.js";import{F as j}from"./FigmaEmbed-g9QqaeRo.js";import{P as C}from"./Properties-1BWy3pzy.js";import{T as b}from"./Tests-MQmjhMeS.js";/* empty css               */import{T as i}from"./index-Cyj4_MYZ.js";import{a as h}from"./argsTypes-BlQF6Y1m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ_c8xXN.js";import"./index-BHrg75jh.js";import"./clsx-B-dksMZM.js";import"./index-x8Y8AkZd.js";import"./index-DzutYmrE.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-wilvy1p1.js";import"./24-D4AD88CD.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-Bale6U52.js";import"./index-dVGqcEPw.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./24-BKsua3Hk.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";import"./generateUUID-M57HTP56.js";import"./useFloatingReferenceSync-CrqcXLNv.js";import"./index-WAZhkC8y.js";import"./index-B7HZQYxm.js";import"./index-C8HyjBOv.js";import"./index-Duoj-8N0.js";import"./types-TdnjS80C.js";import"./floating-ui.react-XV5vKrS5.js";import"./index-DNra4jjB.js";import"./index-Cjg8oU8L.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-CqzaiicI.js";const m="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,o]=c.useState(0),e=p=>r===p;return t.jsxs("div",{className:a.wrapper,children:[t.jsx(f,{title:m,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`}),t.jsx("div",{className:a.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:e(0),onClick:()=>o(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:e(1),onClick:()=>o(1)}),t.jsx(i.Tab,{label:"Тестирование",active:e(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
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
