import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as p}from"./index-CbmgEnq2.js";import{am as a,an as c,ao as d}from"./chunk-NUUEMKO5-D6MHIucw.js";import{ai as e,at as l}from"./index-CxYSwmcB.js";import{DecoratorDefault as k}from"./Decorator.stories-B1hjNCvN.js";import{r as f}from"./index-Bnop-kX6.js";import{s,H as u,E as r}from"./Header-D4Mrudsn.js";import{F as x}from"./FigmaEmbed-D-PzDnMV.js";import{P as h}from"./Properties-lFA5fzlb.js";import{T as L}from"./Tests-OesKPFbJ.js";import"./generateUUID-BGENHwlB.js";import"./index-CEyYlgyG.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-B79NNBmL.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-B0dtJOWw.js";import"./index-Br4tp0-d.js";import"./32-DySMCdgK.js";import{a as b}from"./argsTypes-hcWE3G71.js";import"./iframe-Dgkn6OIY.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DQOj9aE3.js";import"./index-B5g4YLzC.js";const n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=302-6485&t=HhCDuaOuzHu5rgyf-1",j=()=>{const[o,i]=f.useState(0);return t.jsxs("div",{className:s.wrapper,children:[t.jsx(u,{title:"Link",description:"Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link",figmaLink:n}),t.jsx("div",{className:s.tabs,children:t.jsxs(e,{children:[t.jsx(e.Tab,{label:"Разработчику",active:Number(o)===0,onClick:()=>i(0)}),t.jsx(e.Tab,{label:"Дизайнеру",active:Number(o)===1,onClick:()=>i(1)}),t.jsx(e.Tab,{label:"Тестирование",active:Number(o)===2,onClick:()=>i(2)})]})}),Number(o)===0&&t.jsxs(t.Fragment,{children:[t.jsx(r,{height:200,description:"Основная ссылка. Стандартное использование компонента Link.",code:`import { Link } from '@nlmk/ds-2.0';

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
`}),t.jsx(h,{argsTypes:b})]}),Number(o)===1&&t.jsx(x,{url:n}),Number(o)===2&&t.jsx(L,{componentName:"Link"})]})};function m(o){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Components/Link/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/6dAyzIsL5qULXDHnPur7Dp/DS2.0-Link?node-id=470%3A1173&mode=dev"},jest:["Link.test.tsx"]}}),`
`,t.jsx(c,{of:k}),`
`,t.jsx(d,{children:t.jsx(j,{})})]})}function rt(o={}){const{wrapper:i}={...p(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(m,{...o})}):m()}export{rt as default};
