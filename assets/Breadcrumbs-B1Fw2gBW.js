import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as d}from"./index-CbmgEnq2.js";import{am as u,an as b,ao as l}from"./chunk-NUUEMKO5-U_nqBEx1.js";import{ah as m,f}from"./TreeList-CKirDdvd.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as j}from"./index-Bnop-kX6.js";import{s as a,H as g,E as n}from"./Header-DefAihSB.js";import{F as B}from"./FigmaEmbed-Doz2txz1.js";import{P as h}from"./Properties-C454Itw0.js";import{T as C}from"./Tests-BO_xuJ02.js";/* empty css               */import"./generateUUID-B-1dzpB_.js";import"./index-CvUjrmfM.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-DubX4Ptm.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-CLtrYh5C.js";import"./index-DokmLR-l.js";import"./32-BXnIH58b.js";import{a as v}from"./argsTypes-CVLd6fMj.js";import{b as k,t as y}from"./constants-B2HphWJD.js";import"./iframe-VKnY43zz.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DYI2zjFH.js";import"./index-B5g4YLzC.js";var s=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(s||{});const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,o]=j.useState(s.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(g,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:p}),r.jsx("div",{className:a.tabs,children:r.jsxs(m,{children:[r.jsx(m.Tab,{label:"Разработчику",active:i(s.dev),onClick:()=>o(s.dev)}),r.jsx(m.Tab,{label:"Дизайнеру",active:i(s.design),onClick:()=>o(s.design)}),r.jsx(m.Tab,{label:"Тестирование",active:i(s.tests),onClick:()=>o(s.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(n,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
import { Link, MemoryRouter } from 'react-router-dom';

export default App = () => (
<MemoryRouter>
  <Breadcrumbs>
    ${k.map(e=>`
    <Breadcrumbs.Crumb>
      <Link to="${e.href}">${e.label}</Link>
    </Breadcrumbs.Crumb>`).join("")}
  </Breadcrumbs>
  </MemoryRouter>
);
            `}),r.jsx(n,{description:"Компонент может содержать ссылки с разными target.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default App = () => (
  <Breadcrumbs>
    ${y.map(e=>`
    <Breadcrumbs.Crumb>
      <a href="${e.href}" target="${e.target}">${e.label}</a>
    </Breadcrumbs.Crumb>`).join("")}
  </Breadcrumbs>
);`}),r.jsx(h,{argsTypes:v})]}),t===1&&r.jsx(B,{url:p}),t===2&&r.jsx(C,{componentName:"Breadcrumbs"})]})};function c(t){return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Components/Breadcrumbs/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]}}),`
`,r.jsx(b,{of:x}),`
`,r.jsx(l,{children:r.jsx(L,{})})]})}function nr(t={}){const{wrapper:o}={...d(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(c,{...t})}):c()}export{nr as default};
