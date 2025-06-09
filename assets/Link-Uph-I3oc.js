import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as p}from"./index-D2yTtfOz.js";import"./index-9sFvlkdQ.js";import{af as e,aw as a}from"./TreeList-CN2Fuc3O.js";import{DecoratorDefault as c}from"./Decorator.stories-D7iJJ_iz.js";import{r as d}from"./index-BcJSXhQi.js";import{s,H as l,E as r}from"./Header-DfSPAofw.js";import{F as k}from"./FigmaEmbed-CxKRSr1H.js";import{P as f}from"./Properties-BWHYCmk8.js";import{T as u}from"./Tests-DVJ0l8E_.js";import"./generateUUID-306HU3fz.js";import"./index-CeXAN7vm.js";import"./index-Dd1OPmdN.js";import"./index-vbXA6nr0.js";import"./index-PY2fm1mi.js";import"./index-DmffzHLE.js";import"./index-C431fSij.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BAYgGaKw.js";import"./index-C1EIKtiR.js";import"./32-DmJYGC0n.js";import{a as x}from"./argsTypes-C0o8HR63.js";import{c as h,S as L,U as b}from"./DocsRenderer-CFRXHY34-BIX0eLwf.js";import"./index-ChsGqxH_.js";import"./preview-CKjZdpa9.js";import"./iframe-DumMmOON.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-jn7_epoG.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=302-6485&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,i]=d.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(l,{title:"Link",description:"Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link",figmaLink:n}),t.jsx("div",{className:s.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>i(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:200,description:"Основная ссылка. Стандартное использование компонента Link.",code:`import { Link } from '@nlmk/ds-2.0';

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
`}),t.jsx(f,{argsTypes:x})]}),Number(o)===1&&t.jsx(k,{url:n}),Number(o)===2&&t.jsx(u,{componentName:"Link"})]})};function m(o){return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Components/Link/Info",component:a,parameters:{design:{type:"figma",url:"https://www.figma.com/file/6dAyzIsL5qULXDHnPur7Dp/DS2.0-Link?node-id=470%3A1173&mode=dev"},jest:["Link.test.tsx"]}}),`
`,t.jsx(L,{of:c}),`
`,t.jsx(b,{children:t.jsx(j,{})})]})}function mt(o={}){const{wrapper:i}={...p(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(m,{...o})}):m()}export{mt as default};
