import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as d}from"./index-DtGqrCZN.js";import{ag as u,ah as b,ai as l}from"./chunk-NUUEMKO5-Ctn7VFPu.js";import{$ as m,B as f}from"./index-ZojCmbpv.js";import{DecoratorDefault as x}from"./Decorator.stories-CffsLfgf.js";import{r as j}from"./index-Cu9bd8lq.js";import{s as a,H as g,E as p}from"./Header-CN10_-75.js";import{F as B}from"./FigmaEmbed-2TZ9ZXkF.js";import{P as h}from"./Properties-Btz1YxCe.js";import{T as C}from"./Tests-CWaY5hDn.js";/* empty css               */import"./generateUUID-CG7VmJJw.js";import"./index-XsxLq1mj.js";import"./index-AXtJih2E.js";import"./index-ED8ccfsJ.js";import"./index-CWQ0GGcJ.js";import"./index-BHxe-dnq.js";import"./index-iWHyAWYR.js";import"./index-BztLnIMF.js";import"./index-Udc0C2Qz.js";import"./index-CPdpS9Jm.js";import"./32-Bjhqu_Pf.js";import{a as v}from"./argsTypes-hrjbNv6a.js";import{b as k,t as y}from"./constants-B2HphWJD.js";import"./iframe-DB6xw0G7.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./index-D-8MO0q_.js";import"./get-CeVb1zXw.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-ebfOklXd.js";import"./index-DrFu-skq.js";import"./client-C_RBoFGa.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-mZjneSg7.js";import"./index-7KVZVlDS.js";var s=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(s||{});const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,o]=j.useState(s.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(g,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:n}),r.jsx("div",{className:a.tabs,children:r.jsxs(m,{children:[r.jsx(m.Tab,{label:"Разработчику",active:i(s.dev),onClick:()=>o(s.dev)}),r.jsx(m.Tab,{label:"Дизайнеру",active:i(s.design),onClick:()=>o(s.design)}),r.jsx(m.Tab,{label:"Тестирование",active:i(s.tests),onClick:()=>o(s.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(p,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
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
            `}),r.jsx(p,{description:"Компонент может содержать ссылки с разными target.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default App = () => (
  <Breadcrumbs>
    ${y.map(e=>`
    <Breadcrumbs.Crumb>
      <a href="${e.href}" target="${e.target}">${e.label}</a>
    </Breadcrumbs.Crumb>`).join("")}
  </Breadcrumbs>
);`}),r.jsx(h,{argsTypes:v})]}),t===1&&r.jsx(B,{url:n}),t===2&&r.jsx(C,{componentName:"Breadcrumbs"})]})};function c(t){return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Components/Breadcrumbs/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]}}),`
`,r.jsx(b,{of:x}),`
`,r.jsx(l,{children:r.jsx(L,{})})]})}function nr(t={}){const{wrapper:o}={...d(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(c,{...t})}):c()}export{nr as default};
