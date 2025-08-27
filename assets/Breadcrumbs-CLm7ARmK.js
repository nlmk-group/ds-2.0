import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as d}from"./index-D2yTtfOz.js";import"./index-BnkOZ7MR.js";import{af as m,e as u}from"./TreeList-BcCsA96L.js";import{DecoratorDefault as b}from"./Decorator.stories-D7iJJ_iz.js";import{r as l}from"./index-BcJSXhQi.js";import{s as a,H as f,E as p}from"./Header-BP0xKFXg.js";import{F as x}from"./FigmaEmbed-6qirh5v-.js";import{P as j}from"./Properties-BY0U7Vtf.js";import{T as g}from"./Tests-CQAFf-zw.js";/* empty css               */import"./generateUUID-Cm0X4XRy.js";import"./index-cHpEh_mw.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-CQem5UP1.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-bO57duG5.js";import"./index-C5rKoyII.js";import"./32-CkUgnIrf.js";import{a as B}from"./argsTypes-CVLd6fMj.js";import{b as h,t as C}from"./constants-B2HphWJD.js";import{c as v,S as k,U as y}from"./DocsRenderer-CFRXHY34-j1X9pPGM.js";import"./index-ChsGqxH_.js";import"./preview-C6fup1fX.js";import"./iframe-Bw_9lrO_.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-pzZMcVLW.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";var s=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(s||{});const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,o]=l.useState(s.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(f,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:n}),r.jsx("div",{className:a.tabs,children:r.jsxs(m,{children:[r.jsx(m.Tab,{label:"Разработчику",active:i(s.dev),onClick:()=>o(s.dev)}),r.jsx(m.Tab,{label:"Дизайнеру",active:i(s.design),onClick:()=>o(s.design)}),r.jsx(m.Tab,{label:"Тестирование",active:i(s.tests),onClick:()=>o(s.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(p,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
import { Link, MemoryRouter } from 'react-router-dom';

export default App = () => (
<MemoryRouter>
  <Breadcrumbs>
    ${h.map(e=>`
    <Breadcrumbs.Crumb>
      <Link to="${e.href}">${e.label}</Link>
    </Breadcrumbs.Crumb>`).join("")}
  </Breadcrumbs>
  </MemoryRouter>
);
            `}),r.jsx(p,{description:"Компонент может содержать ссылки с разными target.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default App = () => (
  <Breadcrumbs>
    ${C.map(e=>`
    <Breadcrumbs.Crumb>
      <a href="${e.href}" target="${e.target}">${e.label}</a>
    </Breadcrumbs.Crumb>`).join("")}
  </Breadcrumbs>
);`}),r.jsx(j,{argsTypes:B})]}),t===1&&r.jsx(x,{url:n}),t===2&&r.jsx(g,{componentName:"Breadcrumbs"})]})};function c(t){return r.jsxs(r.Fragment,{children:[r.jsx(v,{title:"Components/Breadcrumbs/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]}}),`
`,r.jsx(k,{of:b}),`
`,r.jsx(y,{children:r.jsx(L,{})})]})}function dr(t={}){const{wrapper:o}={...d(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(c,{...t})}):c()}export{dr as default};
