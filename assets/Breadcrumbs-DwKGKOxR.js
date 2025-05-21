import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as d}from"./index-CbmgEnq2.js";import"./index-Cg4FlZUc.js";import{ag as m,f as u}from"./TreeList-ChyggQS5.js";import{DecoratorDefault as b}from"./Decorator.stories-B1hjNCvN.js";import{r as l}from"./index-Bnop-kX6.js";import{s as a,H as f,E as p}from"./Header-DoEz7EVi.js";import{F as x}from"./FigmaEmbed-pZ_Xsbw5.js";import{P as j}from"./Properties-BySoTS4I.js";import{T as g}from"./Tests-OdO6CFav.js";/* empty css               */import"./generateUUID-X09o9Pdp.js";import"./index-qbkiYuzD.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DovCGOp-.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-n_FSf3Cv.js";import"./index-DokmLR-l.js";import"./32-BTlKmMLd.js";import{a as B}from"./argsTypes-CVLd6fMj.js";import{b as h,t as C}from"./constants-B2HphWJD.js";import{c as v,e as k,U as y}from"./DocsRenderer-CFRXHY34-Bs6YVDKr.js";import"./preview-ft71v16T.js";import"./iframe-CWffINz-.js";import"./clsx-B-dksMZM.js";import"./index-D0sJu8id.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-mpWeDU2g.js";import"./index-B5g4YLzC.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";var s=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(s||{});const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,o]=l.useState(s.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(f,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:n}),r.jsx("div",{className:a.tabs,children:r.jsxs(m,{children:[r.jsx(m.Tab,{label:"Разработчику",active:i(s.dev),onClick:()=>o(s.dev)}),r.jsx(m.Tab,{label:"Дизайнеру",active:i(s.design),onClick:()=>o(s.design)}),r.jsx(m.Tab,{label:"Тестирование",active:i(s.tests),onClick:()=>o(s.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(p,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
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
`,r.jsx(y,{children:r.jsx(L,{})})]})}function nr(t={}){const{wrapper:o}={...d(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(c,{...t})}):c()}export{nr as default};
