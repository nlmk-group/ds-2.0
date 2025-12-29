import{r as c,j as t,f as u,S as g,U as l}from"./iframe-CxLN9ksd.js";import{useMDXComponents as d}from"./index-CeChe1UL.js";import{P as x}from"./index-BBxySLCW.js";import{DecoratorDefault as P}from"./Decorator.stories-DWPS1QvQ.js";import{s as a,H as f,E as n}from"./Header-B1Tht5jw.js";import{F as j}from"./FigmaEmbed-gwemKUEC.js";import{P as C}from"./Properties-Be6XSfnk.js";import{T as b}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as i}from"./index-Bs6EWGDb.js";import{a as h}from"./argsTypes-BlQF6Y1m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3DoxRCP.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./index-LyR6p6RN.js";import"./index-BGu5gUns.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-Qhn2sPqo.js";import"./24-BFZg9aq0.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BN0H6Yla.js";import"./index-DcM-4FYU.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./24-CbC-8o3Y.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";import"./generateUUID-M57HTP56.js";import"./useFloatingReferenceSync-DscYnpdV.js";import"./index-CosC_TVD.js";import"./index-AybKi-wv.js";import"./index-CT_Q_AhL.js";import"./index-CYd80pzx.js";import"./types-TdnjS80C.js";import"./floating-ui.react-B9Baa2-L.js";import"./index-B5AbqdmT.js";import"./index-Boblobe5.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-BniRS5vs.js";const m="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,o]=c.useState(0),e=p=>r===p;return t.jsxs("div",{className:a.wrapper,children:[t.jsx(f,{title:m,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`}),t.jsx("div",{className:a.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:e(0),onClick:()=>o(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:e(1),onClick:()=>o(1)}),t.jsx(i.Tab,{label:"Тестирование",active:e(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
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
