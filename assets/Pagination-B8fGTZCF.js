import{r as c,j as t,f as u,S as g,U as l}from"./iframe-zk5xXBtA.js";import{useMDXComponents as d}from"./index-CSMoqiIu.js";import{P as x}from"./index-ByHyrCa6.js";import{DecoratorDefault as P}from"./Decorator.stories-XjMTlGWF.js";import{s as a,H as f,E as n}from"./Header-BMqOixcD.js";import{F as j}from"./FigmaEmbed-Bh-YhisY.js";import{P as C}from"./Properties-BH32KsQA.js";import{T as b}from"./Tests-BiRJAIxZ.js";/* empty css               */import{T as i}from"./index-CGZqhooT.js";import{a as h}from"./argsTypes-BlQF6Y1m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTfBpVCI.js";import"./index-9BCGLlQQ.js";import"./clsx-B-dksMZM.js";import"./index-B9FTsAqd.js";import"./index-BDx-zdMa.js";import"./colorsMapping-C6bFIk14.js";import"./sizeMappingInput-XXScYzk1.js";import"./index-CyBWpxCb.js";import"./24-2PvTlRtj.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-BbV7Z3ze.js";import"./index-DlGInOJ7.js";import"./index-1zUxKm4P.js";import"./32-D1ipBNS6.js";import"./24-BU8fW5nS.js";import"./24-CsxFkFpg.js";import"./24-Cg1MPBHI.js";import"./24-BGS-MQmY.js";import"./24-DyWGmQTd.js";import"./24-DrF3F4Gh.js";import"./24-DXO8B9MT.js";import"./24-CHUQ235a.js";import"./16-D0071456.js";import"./24-CzaQJmC-.js";import"./24-BkbQ4VQu.js";import"./16-D1MigzhA.js";import"./16-J9oiRdzb.js";import"./16-qJIrzOil.js";import"./generateUUID-M57HTP56.js";import"./useFloatingReferenceSync-C6rFkWeV.js";import"./index-DJ3skN8z.js";import"./index-BdWcTqef.js";import"./index-cDYWclvM.js";import"./index-CsA5WfEK.js";import"./types-TdnjS80C.js";import"./floating-ui.react-0uHpbrLG.js";import"./index-CpyfhGWx.js";import"./index-VfIgyswx.js";import"./index-D9zx9C-F.js";import"./index-6T6AONQH.js";import"./index-DjSUGs5w.js";import"./index-CBNcLMKv.js";import"./sizesMapping-D8QavrGc.js";import"./index-Is2qauMo.js";import"./index-DirQniBD.js";const m="Pagination",T="https://www.figma.com/design/IcmRCuwp4SBPQ9hzGpO6zn/NLMK-UI-(Community)?node-id=597-207701&t=v8qKXVprY9DM1T14-1",M=()=>{const[r,o]=c.useState(0),e=p=>r===p;return t.jsxs("div",{className:a.wrapper,children:[t.jsx(f,{title:m,description:"Pagination - элемент, нужный для навигации по страницам сайта.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`}),t.jsx("div",{className:a.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:e(0),onClick:()=>o(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:e(1),onClick:()=>o(1)}),t.jsx(i.Tab,{label:"Тестирование",active:e(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(n,{height:200,description:"Pagination по умолчанию. Компонент предназначен только для переключения страниц",code:`import { Pagination } from '@nlmk/ds-2.0';
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
