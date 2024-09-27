import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as m}from"./index-CpguRmgc.js";import{ag as p,ah as a,ai as c}from"./chunk-HLWAVYOI-Ui380Jyo.js";import{a0 as i,ac as d}from"./index-CMhB4zJG.js";import{DecoratorDefault as l}from"./Decorator.stories-BP3ijO2B.js";import{r as f}from"./index-DQ2WTIsS.js";import{s as n,H as k,E as r}from"./Header-BHHYucgQ.js";import{F as u}from"./FigmaEmbed-CRHXINJv.js";import{P as h}from"./Properties-BGPqIl86.js";import{T as x}from"./Tests-CJI5C2M6.js";import"./generateUUID-DB8_0F2G.js";import"./index-C04uUQ85.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-5BTuYEoj.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-BThqyTlu.js";import"./32-Y-7Ywnum.js";import{a as L}from"./argsTypes-Ch73qO4r.js";import"./iframe-BG7mJDGh.js";import"../sb-preview/runtime.js";import"./client-ClDtLkqA.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-CxO0u_T9.js";import"./isObjectLike-C1d_7M67.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DZkQtLdq.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-PF5RIt03.js";import"./index-BKbm6zW0.js";const j=()=>{const[o,e]=f.useState(0);return t.jsxs("div",{className:n.wrapper,children:[t.jsx(k,{title:"Link",description:"Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25756&mode=design&t=awyt3Fzj1XS6th7v-1"}),t.jsx("div",{className:n.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>e(0)}),t.jsx(i.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>e(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:200,description:"Основная ссылка. Стандартное использование компонента Link.",code:`import { Link } from '@nlmk/ds-2.0';

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
`}),t.jsx(h,{argsTypes:L})]}),Number(o)===1&&t.jsx(u,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25756&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(o)===2&&t.jsx(x,{componentName:"Link"})]})};function s(o){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Link/Info",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/file/6dAyzIsL5qULXDHnPur7Dp/DS2.0-Link?node-id=470%3A1173&mode=dev"},jest:["Link.test.tsx"]}}),`
`,t.jsx(a,{of:l}),`
`,t.jsx(c,{children:t.jsx(j,{})})]})}function nt(o={}){const{wrapper:e}={...m(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s()}export{nt as default};
