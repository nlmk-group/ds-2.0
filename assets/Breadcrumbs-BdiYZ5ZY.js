import{r as d,j as r,m as u,S as b,U as l}from"./iframe-tXE4xoYc.js";import{useMDXComponents as x}from"./index-BU2Hc1BN.js";import{b as f,t as j,B as g}from"./constants-Dbv0WkuP.js";import{DecoratorDefault as B}from"./Decorator.stories-DX_mk-19.js";import{s as a,H as h,E as p}from"./Header-D7Lkw1fr.js";import{F as C}from"./FigmaEmbed-DGce_rmk.js";import{P as v}from"./Properties-3Caa_vUq.js";import{T as k}from"./Tests-COuvSTuJ.js";/* empty css               */import{T as s}from"./index-BdAkzp84.js";import{a as y}from"./argsTypes-CVLd6fMj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BYo_Qif0.js";import"./index-DlYR7-H3.js";import"./index-D72bge1Z.js";import"./index-BavAFXG7.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-C-sXzJO7.js";import"./24-CmyNkjMd.js";import"./24-DOosEbor.js";import"./24-BWrbmGeu.js";import"./24-BbCg_oVA.js";import"./24-DRYMupHO.js";import"./24-CzQL-KAt.js";import"./24-DKRMhkuJ.js";import"./24-BGmf7Yvo.js";import"./24-C3aWb0fW.js";import"./16-5OD6xOBP.js";import"./24-DhcVhNlZ.js";import"./24-CGaTDQAV.js";import"./16-DrGrHANJ.js";import"./16-3aq9OzD6.js";import"./16-Caqr7FMr.js";import"./index-mWxT_Pnt.js";import"./types-TdnjS80C.js";import"./index-IJbXH1LS.js";import"./index-BJ8dPBsg.js";import"./index-DnvHMcnj.js";import"./index-BQHkH-Oh.js";import"./index-D0fx2znr.js";import"./generateUUID-M57HTP56.js";import"./index-UIqxTLHU.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3OER6c8.js";import"./index-DfJPKXXV.js";import"./index-CjsErmK6.js";import"./index-Cx9ne2MY.js";var o=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(o||{});const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,m]=d.useState(o.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(h,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:n}),r.jsx("div",{className:a.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:i(o.dev),onClick:()=>m(o.dev)}),r.jsx(s.Tab,{label:"Дизайнеру",active:i(o.design),onClick:()=>m(o.design)}),r.jsx(s.Tab,{label:"Тестирование",active:i(o.tests),onClick:()=>m(o.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(p,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
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
