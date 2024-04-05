import{U as p,M as f,e as u}from"./chunk-HLWAVYOI-CICf3oms.js";import{y as i,a1 as c}from"./index-BNnmgeob.js";import{a as r,j as t,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as h}from"./index-CBqU2yxZ.js";import{s as m,H as L,E as s,T as b}from"./Tests-B1dH3HFJ.js";import{F as g}from"./FigmaEmbed-BzKtbchv.js";import{P as w}from"./Properties-DpICK5Gz.js";import"./generateUUID-DRj9BLoM.js";import"./index-D-cSLjE-.js";import"./index-BqvJ5JrJ.js";import{T as y}from"./index-CkVMA9Py.js";import"./index-00CuFchX.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-Cx_RX_rp.js";import"./32-O4MZPT9v.js";import{a as C}from"./argsTypes-qRWOs_oW.js";import{useMDXComponents as D}from"./index-DI5IigMn.js";import"./iframe-BfUoDx8T.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-CyL3yjCI.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-C_ffSj-2.js";import"./index-4J70fF5O.js";const l=()=>{const[e,o]=h.useState(0);return r("div",{className:m.wrapper,children:[t(L,{title:"Link",description:"Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25756&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:m.tabs,children:r(i,{children:[t(i.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t(i.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t(i.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)===0&&r(d,{children:[t(s,{height:200,description:"Основная ссылка. Стандартное использование компонента Link.",code:`import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/">Ссылка</Link>
);

export default App;
`}),t(s,{height:220,description:"Отключенная ссылка. Пользователь не может взаимодействовать с ссылкой.",code:`import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/"
    disabled
  >
    Заблокированная ссылка
  </Link>
);

export default App;
`}),t(s,{description:"Ссылка с иконками с обеих сторон текста.",code:`import { Link, Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/"
    leftIcon={<Icon name='IconBunkerOutlined16' />}
    rightIcon={<Icon name='IconBunkerOutlined16' />
  }>
    Ссылка с иконками
  </Link>
);

export default App;
`}),t(w,{argsTypes:C})]}),Number(e)===1&&t(g,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25756&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)===2&&t(y,{variant:"Heading4",color:"primary",children:t(b,{componentName:"Link"})})]})};function a(e){return r(d,{children:[t(f,{title:"Components/Link/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/6dAyzIsL5qULXDHnPur7Dp/DS2.0-Link?node-id=470%3A1173&mode=dev"},jest:["Link.test.tsx"]}}),`
`,t(u,{name:"Docs",children:t(p,{children:t(l,{})})})]})}function S(e={}){const{wrapper:o}=Object.assign({},D(),e.components);return o?t(o,{...e,children:t(a,{...e})}):a()}const k=()=>t(p,{children:t(l,{})});k.storyName="Docs";k.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const n={title:"Components/Link/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/6dAyzIsL5qULXDHnPur7Dp/DS2.0-Link?node-id=470%3A1173&mode=dev"},jest:["Link.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:S};const at=["docs"];export{at as __namedExportsOrder,n as default,k as docs};
