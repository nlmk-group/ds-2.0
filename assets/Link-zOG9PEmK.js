import{r as p,j as t,m as a,S as c,U as d}from"./iframe-BPtLBEuk.js";import{useMDXComponents as l}from"./index-DY5aY42c.js";import{L as k}from"./index-yAFWEvQV.js";import{DecoratorDefault as u}from"./Decorator.stories-Bt-6wqMy.js";import{s,H as f,E as r}from"./Header-lxb-Wymn.js";import{F as x}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as h}from"./Properties-u6_xeg7P.js";import{T as L}from"./Tests-DUUoQDTR.js";import{T as e}from"./index-CX87Y9E4.js";import{a as b}from"./argsTypes-DLmLacLC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9_7xPUt.js";import"./clsx-B-dksMZM.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./24-8ackLhic.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=302-6485&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,i]=p.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(f,{title:"Link",description:"Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link",figmaLink:n}),t.jsx("div",{className:s.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>i(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:200,description:"Основная ссылка. Стандартное использование компонента Link.",code:`import { Link } from '@nlmk/ds-2.0';

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
`,t.jsx(c,{of:u}),`
`,t.jsx(d,{children:t.jsx(j,{})})]})}function dt(o={}){const{wrapper:i}={...l(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(m,{...o})}):m()}export{dt as default};
