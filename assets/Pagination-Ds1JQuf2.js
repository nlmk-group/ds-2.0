import{r as c,j as t,m as u,S as g,U as l}from"./iframe-tXE4xoYc.js";import{useMDXComponents as d}from"./index-BU2Hc1BN.js";import{P as x}from"./index-Dc1ORl7H.js";import{DecoratorDefault as P}from"./Decorator.stories-DX_mk-19.js";import{s as a,H as f,E as n}from"./Header-D7Lkw1fr.js";import{F as j}from"./FigmaEmbed-DGce_rmk.js";import{P as C}from"./Properties-3Caa_vUq.js";import{T as b}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as i}from"./index-BdAkzp84.js";import{a as h}from"./argsTypes-BlQF6Y1m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfJPKXXV.js";import"./index-IJbXH1LS.js";import"./clsx-B-dksMZM.js";import"./index-UIqxTLHU.js";import"./index-CtNEMVMn.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./generateUUID-M57HTP56.js";import"./index-c0V9lvMd.js";import"./24-DRYMupHO.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-q3_oAMiW.js";import"./index-CnPKv_iQ.js";import"./index-BavAFXG7.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./24-CGaTDQAV.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";import"./useFloatingReferenceSync-BoqrGUtC.js";import"./index-BYo_Qif0.js";import"./index-DlYR7-H3.js";import"./index-Cx9ne2MY.js";import"./index-mWxT_Pnt.js";import"./types-TdnjS80C.js";import"./floating-ui.react-rIU8UbdJ.js";import"./index-FmjVc4PV.js";import"./index-D72bge1Z.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-CjsErmK6.js";const m="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,o]=c.useState(0),e=p=>r===p;return t.jsxs("div",{className:a.wrapper,children:[t.jsx(f,{title:m,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`}),t.jsx("div",{className:a.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:e(0),onClick:()=>o(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:e(1),onClick:()=>o(1)}),t.jsx(i.Tab,{label:"Тестирование",active:e(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
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
