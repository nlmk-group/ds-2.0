import{r as p,j as t,f as a,S as c,U as d}from"./iframe-CxLN9ksd.js";import{useMDXComponents as l}from"./index-CeChe1UL.js";import{L as k}from"./index-IRxTPoEY.js";import{DecoratorDefault as f}from"./Decorator.stories-DWPS1QvQ.js";import{s,H as u,E as r}from"./Header-B1Tht5jw.js";import{F as x}from"./FigmaEmbed-gwemKUEC.js";import{P as h}from"./Properties-Be6XSfnk.js";import{T as L}from"./Tests-B-cCRdNI.js";import{T as e}from"./index-Bs6EWGDb.js";import{a as b}from"./argsTypes-K75CqJ3C.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CORENSTS.js";import"./clsx-B-dksMZM.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./index-C9nyZABc.js";import"./index-BnDPEMC8.js";import"./generateUUID-M57HTP56.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-LyR6p6RN.js";import"./sizesMapping-D8QavrGc.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=302-6485&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,i]=p.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(u,{title:"Link",description:"Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link",figmaLink:n}),t.jsx("div",{className:s.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>i(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:200,description:"Основная ссылка. Стандартное использование компонента Link.",code:`import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/">Ссылка</Link>
);

export default App;
`}),t.jsx(r,{height:220,description:"Отключенная ссылка. Пользователь не может взаимодействовать с ссылкой.",code:`import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/"
    disabled
  >
    Заблокированная ссылка
  </Link>
);

export default App;
`}),t.jsx(r,{description:"Ссылка с иконками с обеих сторон текста.",code:`import { Link, Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/"
    leftIcon={<Icon name='IconBunkerOutlined16' />}
    rightIcon={<Icon name='IconBunkerOutlined16' />
  }>
    Ссылка с иконками
  </Link>
);

export default App;
`}),t.jsx(h,{argsTypes:b})]}),Number(o)===1&&t.jsx(x,{url:n}),Number(o)===2&&t.jsx(L,{componentName:"Link"})]})};function m(o){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Link/Info",component:k,parameters:{design:{type:"figma",url:"https://www.figma.com/file/6dAyzIsL5qULXDHnPur7Dp/DS2.0-Link?node-id=470%3A1173&mode=dev"},jest:["Link.test.tsx"]}}),`
`,t.jsx(c,{of:f}),`
`,t.jsx(d,{children:t.jsx(j,{})})]})}function dt(o={}){const{wrapper:i}={...l(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(m,{...o})}):m()}export{dt as default};
