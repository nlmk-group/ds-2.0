import{j as r}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as c}from"./index-CbmgEnq2.js";import{am as u,an as b,ao as l}from"./chunk-NUUEMKO5-BraWSKNL.js";import{a9 as m,d as f}from"./index-CXSd2JwH.js";import{DecoratorDefault as x}from"./Decorator.stories-B1hjNCvN.js";import{r as j}from"./index-Bnop-kX6.js";import{s as i,H as g,E as n}from"./Header-C4FG6ioC.js";import{F as B}from"./FigmaEmbed-C9PxBtjy.js";import{P as h}from"./Properties-Bo9UchF8.js";import{T as C}from"./Tests-CitszsXr.js";/* empty css               */import"./generateUUID-Dz4mOyMt.js";import"./index-BuHkNwZq.js";import"./index-CiiUx5gY.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-Dxx-yGvP.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-CG5Hm5ah.js";import"./32-QiGXh8Io.js";import{a as v}from"./argsTypes-CVLd6fMj.js";import{b as k,t as y}from"./constants-B2HphWJD.js";import"./iframe-Bgtob_UG.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-TdYkn6gi.js";import"./index-CT8gBKwQ.js";var s=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(s||{});const p="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,o]=j.useState(s.dev),a=e=>t===e;return r.jsxs("div",{className:i.wrapper,children:[r.jsx(g,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:p}),r.jsx("div",{className:i.tabs,children:r.jsxs(m,{children:[r.jsx(m.Tab,{label:"Разработчику",active:a(s.dev),onClick:()=>o(s.dev)}),r.jsx(m.Tab,{label:"Дизайнеру",active:a(s.design),onClick:()=>o(s.design)}),r.jsx(m.Tab,{label:"Тестирование",active:a(s.tests),onClick:()=>o(s.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(n,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
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
);`}),r.jsx(h,{argsTypes:v})]}),t===1&&r.jsx(B,{url:p}),t===2&&r.jsx(C,{componentName:"Breadcrumbs"})]})};function d(t){return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Components/Breadcrumbs/Info",component:f,parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]}}),`
`,r.jsx(b,{of:x}),`
`,r.jsx(l,{children:r.jsx(L,{})})]})}function ir(t={}){const{wrapper:o}={...c(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(d,{...t})}):d()}export{ir as default};
