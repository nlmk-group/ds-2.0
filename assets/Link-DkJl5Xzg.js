import{r as p,j as t,m as a,S as c,U as d}from"./iframe-BiRbIEmb.js";import{useMDXComponents as l}from"./index-DFADegm-.js";import{L as k}from"./index-BC1L0GA_.js";import{DecoratorDefault as u}from"./Decorator.stories-Cq2K7ZK_.js";import{s,H as f,E as r}from"./Header-BOuFM4z3.js";import{F as x}from"./FigmaEmbed-DXWxjqCs.js";import{P as h}from"./Properties-CTw5qxDW.js";import{T as L}from"./Tests-u2K_XUZf.js";import{T as e}from"./index-Bc-rzIjC.js";import{a as b}from"./argsTypes-DMM-yrLK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIk7IDPA.js";import"./clsx-B-dksMZM.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./24-DOr3c8sx.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";import"./index-D4AgSARz.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=302-6485&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,i]=p.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(f,{title:"Link",description:"Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link",figmaLink:n}),t.jsx("div",{className:s.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>i(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:200,description:"Основная ссылка. Стандартное использование компонента Link.",code:`import { Link } from '@nlmk/ds-2.0';

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
