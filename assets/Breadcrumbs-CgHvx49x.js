import{r as d,j as r,f as u,S as b,U as l}from"./iframe-CxLN9ksd.js";import{useMDXComponents as f}from"./index-CeChe1UL.js";import{b as x,t as j,B as g}from"./constants-yMYCNrua.js";import{DecoratorDefault as B}from"./Decorator.stories-DWPS1QvQ.js";import{s as a,H as h,E as p}from"./Header-B1Tht5jw.js";import{F as C}from"./FigmaEmbed-gwemKUEC.js";import{P as v}from"./Properties-Be6XSfnk.js";import{T as k}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as s}from"./index-Bs6EWGDb.js";import{a as y}from"./argsTypes-CVLd6fMj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CosC_TVD.js";import"./index-AybKi-wv.js";import"./index-Boblobe5.js";import"./index-M8Uj9-kW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./24-CbC-8o3Y.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";import"./index-CYd80pzx.js";import"./types-TdnjS80C.js";import"./index-CORENSTS.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./index-LyR6p6RN.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";var o=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(o||{});const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,m]=d.useState(o.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(h,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:n}),r.jsx("div",{className:a.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:i(o.dev),onClick:()=>m(o.dev)}),r.jsx(s.Tab,{label:"Дизайнеру",active:i(o.design),onClick:()=>m(o.design)}),r.jsx(s.Tab,{label:"Тестирование",active:i(o.tests),onClick:()=>m(o.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(p,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
import { Link, MemoryRouter } from 'react-router-dom';

export default App = () => (
<MemoryRouter>
  <Breadcrumbs>
    ${x.map(e=>`
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
`,r.jsx(l,{children:r.jsx(L,{})})]})}function hr(t={}){const{wrapper:m}={...f(),...t.components};return m?r.jsx(m,{...t,children:r.jsx(c,{...t})}):c()}export{hr as default};
