import{r as d,j as r,m as u,S as b,U as l}from"./iframe-BiRbIEmb.js";import{useMDXComponents as x}from"./index-DFADegm-.js";import{b as f,t as j,B as g}from"./constants-DRDU92Wc.js";import{DecoratorDefault as B}from"./Decorator.stories-Cq2K7ZK_.js";import{s as a,H as h,E as p}from"./Header-BOuFM4z3.js";import{F as C}from"./FigmaEmbed-DXWxjqCs.js";import{P as v}from"./Properties-CTw5qxDW.js";import{T as k}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as s}from"./index-Bc-rzIjC.js";import{a as y}from"./argsTypes-CVLd6fMj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-C19NiVwF.js";import"./index-DNr8MeMf.js";import"./index-C7A-2Mof.js";import"./index-D4AgSARz.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-BE82tuFH.js";import"./types-TdnjS80C.js";import"./index-CIk7IDPA.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";var o=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(o||{});const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,m]=d.useState(o.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(h,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:n}),r.jsx("div",{className:a.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:i(o.dev),onClick:()=>m(o.dev)}),r.jsx(s.Tab,{label:"Дизайнеру",active:i(o.design),onClick:()=>m(o.design)}),r.jsx(s.Tab,{label:"Тестирование",active:i(o.tests),onClick:()=>m(o.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(p,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
import { Link, MemoryRouter } from 'react-router-dom';

export default App = () => (
<MemoryRouter>
  <Breadcrumbs>
    ${f.map(e=>`
    <Breadcrumbs.Crumb>
      <Link to="${e.href}">${e.label}</Link>
    </Breadcrumbs.Crumb>`).join("")}
  </Breadcrumbs>
  </MemoryRouter>
);
            `}),r.jsx(p,{description:"Компонент может содержать ссылки с разными target.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default App = () => (
  <Breadcrumbs>
    ${j.map(e=>`
    <Breadcrumbs.Crumb>
      <a href="${e.href}" target="${e.target}">${e.label}</a>
    </Breadcrumbs.Crumb>`).join("")}
  </Breadcrumbs>
);`}),r.jsx(v,{argsTypes:y})]}),t===1&&r.jsx(C,{url:n}),t===2&&r.jsx(k,{componentName:"Breadcrumbs"})]})};function c(t){return r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"Components/Breadcrumbs/Info",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/file/CTuqaCtvStjoGNh3wL61zx/DS2.0-Header?type=design&node-id=510-15378&mode=design&t=BH844rIxMaUmKuVe-0"},jest:["Breadcrumbs.test.tsx"]}}),`
`,r.jsx(b,{of:B}),`
`,r.jsx(l,{children:r.jsx(L,{})})]})}function hr(t={}){const{wrapper:m}={...x(),...t.components};return m?r.jsx(m,{...t,children:r.jsx(c,{...t})}):c()}export{hr as default};
