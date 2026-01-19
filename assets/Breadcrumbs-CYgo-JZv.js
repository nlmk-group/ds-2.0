import{r as d,j as r,m as u,S as b,U as l}from"./iframe-DUDunD5j.js";import{useMDXComponents as x}from"./index-CDbv5Jgm.js";import{b as f,t as j,B as g}from"./constants-CcncQntm.js";import{DecoratorDefault as B}from"./Decorator.stories-DJdCAXEf.js";import{s as a,H as h,E as p}from"./Header-BrZEypuE.js";import{F as C}from"./FigmaEmbed-DovFRgvJ.js";import{P as v}from"./Properties-CcP2VO-p.js";import{T as k}from"./Tests-CSK3RYMm.js";/* empty css               */import{T as s}from"./index-DntXJei4.js";import{a as y}from"./argsTypes-CVLd6fMj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-DhhcK1qW.js";import"./index-BHis8FFF.js";import"./index-B4g2o7cg.js";import"./index-DdmbHqmW.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BB59z0Rt.js";import"./24-tbbQM-dv.js";import"./24-BLuChUkw.js";import"./24-BGpvFgfj.js";import"./24-BGrLeqpw.js";import"./24-CAewpWgK.js";import"./24-BoEjxhhs.js";import"./24-BAIQ796Q.js";import"./24-BwgIJwEH.js";import"./24-C99UGV7O.js";import"./16-CfofIm8-.js";import"./24-CoSTS1kQ.js";import"./24-C5ui32Ki.js";import"./16-DEDu0dyt.js";import"./16-BarbOM5u.js";import"./16-4gnAFB8p.js";import"./index-BpbvmvtH.js";import"./types-TdnjS80C.js";import"./index-DyX2qzoz.js";import"./index-rc7u3FmU.js";import"./index-z_YeHj0K.js";import"./index-r-uICxAh.js";import"./index-BS4wiMYT.js";import"./generateUUID-M57HTP56.js";import"./index-YMfOmFJ1.js";import"./sizesMapping-D8QavrGc.js";import"./index-BixcmxoL.js";import"./index-aoSKrGJR.js";import"./index-BE6Pvktf.js";import"./index-BjTLv_jS.js";var o=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(o||{});const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,m]=d.useState(o.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(h,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:n}),r.jsx("div",{className:a.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:i(o.dev),onClick:()=>m(o.dev)}),r.jsx(s.Tab,{label:"Дизайнеру",active:i(o.design),onClick:()=>m(o.design)}),r.jsx(s.Tab,{label:"Тестирование",active:i(o.tests),onClick:()=>m(o.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(p,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
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
