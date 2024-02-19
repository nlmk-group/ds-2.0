import{M as k,U as u}from"./chunk-HLWAVYOI-bd2949d1.js";import{a as i,L as p}from"./index-f014e98c.js";import{a as r,j as t,F as c}from"./clsx.m-3764cf42.js";import{r as L}from"./index-f1f749bf.js";import{s as m,H as h,E as s,T as g}from"./Tests-605cd25b.js";import{F as w}from"./FigmaEmbed-6f82f7c8.js";import{P as b}from"./Properties-83346e89.js";import"./index-ec455f54.js";import"./index-095d5581.js";import"./index-e99519f1.js";import"./index-147655d7.js";import{T as y}from"./index-fb030d50.js";import"./index-c9e69acb.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-bc089e17.js";import{a as C}from"./argsTypes-1a2e7907.js";import{u as D}from"./index-4fb8b842.js";import"./iframe-6c91f604.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-12f93142.js";import"./index-29c055d1.js";import"./.jest-test-results-108bf634.js";import"./index-c1da5c13.js";const A=()=>{const[e,o]=L.useState(0),d=`import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/">Ссылка</Link>
);

export default App;
`,l=`import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/"
    disabled
  >
    Заблокированная ссылка
  </Link>
);

export default App;
`,f=`import { Link, Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/"
    leftIcon={<Icon name='IconBunkerOutlined16' />}
    rightIcon={<Icon name='IconBunkerOutlined16' />
  }>
    Ссылка с иконками
  </Link>
);

export default App;
`;return r("div",{className:m.wrapper,children:[t(h,{title:"Link",description:"Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25756&mode=design&t=awyt3Fzj1XS6th7v-1"}),t("div",{className:m.tabs,children:r(i,{children:[t(i.Tab,{label:"Разработчику",active:Number(e)===0,onClick:()=>o(0)}),t(i.Tab,{label:"Дизайнеру",active:Number(e)===1,onClick:()=>o(1)}),t(i.Tab,{label:"Тестирование",active:Number(e)===2,onClick:()=>o(2)})]})}),Number(e)===0&&r(c,{children:[t(s,{height:200,description:"Основная ссылка. Стандартное использование компонента Link.",code:d}),t(s,{height:220,description:"Отключенная ссылка. Пользователь не может взаимодействовать с ссылкой.",code:l}),t(s,{description:"Ссылка с иконками с обеих сторон текста.",code:f}),t(b,{argsTypes:C})]}),Number(e)===1&&t(w,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25756&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(e)===2&&t(y,{variant:"Heading4",color:"primary",children:t(g,{componentName:"Link"})})]})};function a(e){return r(c,{children:[t(k,{title:"Components/Link/Info",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/6dAyzIsL5qULXDHnPur7Dp/DS2.0-Link?node-id=470%3A1173&mode=dev"},jest:["Link.test.tsx"]}}),`
`,t(u,{children:t(A,{})})]})}function M(e={}){const{wrapper:o}=Object.assign({},D(),e.components);return o?t(o,{...e,children:t(a,{...e})}):a()}const N=()=>{throw new Error("Docs-only story")};N.parameters={docsOnly:!0};const n={title:"Components/Link/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/6dAyzIsL5qULXDHnPur7Dp/DS2.0-Link?node-id=470%3A1173&mode=dev"},jest:["Link.test.tsx"]},component:p,tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:M};const at=["__page"];export{at as __namedExportsOrder,N as __page,n as default};
