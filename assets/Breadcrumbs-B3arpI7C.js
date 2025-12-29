import{r as d,j as r,f as u,S as b,U as l}from"./iframe-CVAHojaF.js";import{useMDXComponents as f}from"./index-DqTt4rKv.js";import{b as x,t as j,B as g}from"./constants-DAnRFtXD.js";import{DecoratorDefault as B}from"./Decorator.stories-Pdz9giCE.js";import{s as a,H as h,E as p}from"./Header-P01wOpj2.js";import{F as C}from"./FigmaEmbed-g9QqaeRo.js";import{P as v}from"./Properties-1BWy3pzy.js";import{T as k}from"./Tests-MQmjhMeS.js";/* empty css               */import{T as s}from"./index-Cyj4_MYZ.js";import{a as y}from"./argsTypes-CVLd6fMj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-WAZhkC8y.js";import"./index-B7HZQYxm.js";import"./index-Cjg8oU8L.js";import"./index-BN_w7FjE.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./24-BKsua3Hk.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";import"./index-Duoj-8N0.js";import"./types-TdnjS80C.js";import"./index-BHrg75jh.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./index-DbWCe9dP.js";import"./index-BVgG5EPb.js";import"./generateUUID-M57HTP56.js";import"./index-x8Y8AkZd.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-DZ_c8xXN.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";var o=(t=>(t[t.dev=0]="dev",t[t.design=1]="design",t[t.tests=2]="tests",t))(o||{});const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1",L=()=>{const[t,m]=d.useState(o.dev),i=e=>t===e;return r.jsxs("div",{className:a.wrapper,children:[r.jsx(h,{title:"Breadcrumbs",description:"Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs",figmaLink:n}),r.jsx("div",{className:a.tabs,children:r.jsxs(s,{children:[r.jsx(s.Tab,{label:"Разработчику",active:i(o.dev),onClick:()=>m(o.dev)}),r.jsx(s.Tab,{label:"Дизайнеру",active:i(o.design),onClick:()=>m(o.design)}),r.jsx(s.Tab,{label:"Тестирование",active:i(o.tests),onClick:()=>m(o.tests)})]})}),t===0&&r.jsxs(r.Fragment,{children:[r.jsx(p,{description:"Обычное использование компонента.",code:`import { Breadcrumbs } from '@nlmk/ds-2.0';
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
