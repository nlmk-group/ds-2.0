import{M as g,U as u}from"./chunk-HLWAVYOI-653a1315.js";import{g as y,A as v}from"./index-63601013.js";import{a as s,j as t,F as A}from"./clsx.m-3764cf42.js";import{r as b}from"./index-f1f749bf.js";import{s as c,H as h,E as a,T as x}from"./Tests-27e47391.js";import{F as M}from"./FigmaEmbed-3478e7e6.js";import{P as C}from"./Properties-72516426.js";/* empty css               */import{a as i}from"./index-28aa8d3c.js";import"./index-a4c35820.js";import"./index-e99519f1.js";import"./index-cd305b84.js";import"./index-147655d7.js";import{T as w}from"./index-fb030d50.js";import"./index-ed56af28.js";import"./index-5196d16d.js";import"./index-2cdebf62.js";import"./index-28363b14.js";import"./index-8c6efd17.js";import{a as k}from"./argsTypes-35eaaa68.js";import{u as N}from"./index-4fb8b842.js";import"./iframe-697674bb.js";import"../sb-preview/runtime.js";import"./react-16-8c769108.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f8a8f14b.js";import"./get-78cac09e.js";import"./callBound-57fbc82c.js";import"./mapValues-f98d729d.js";import"./index-b75c9059.js";import"./uniq-b8c8c302.js";import"./index-356e4a49.js";import"./index-c4c1b386.js";import"./index-29c055d1.js";import"./.jest-test-results-7c3b4ed9.js";import"./IconArticle24-414bfa4c.js";import"./IconsList.module-e4fe8555.js";import"./IconPanTool24-f1398bf1.js";import"./index-c1da5c13.js";const n="Avatar",d="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20841&mode=design&t=awyt3Fzj1XS6th7v-1",o=y(),T=()=>{const[r,e]=b.useState(0),p=f=>r===f;return s("div",{className:c.wrapper,children:[t(h,{title:n,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${n}`,figmaLink:d}),t("div",{className:c.tabs,children:s(i,{children:[t(i.Tab,{label:"Разработчику",active:p(0),onClick:()=>e(0)}),t(i.Tab,{label:"Дизайнеру",active:p(1),onClick:()=>e(1)}),t(i.Tab,{label:"Тестирование",active:p(2),onClick:()=>e(2)})]})}),r==0&&s(A,{children:[t(a,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

const App = () => (
  <>
    <Avatar />
  </>
)
export default App
              `}),t(a,{description:"Аватары различных размеров",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar src="${o}" size="xxl" />
    <Avatar src="${o}" size="xl" />
    <Avatar src="${o}" size="l" />
    <Avatar src="${o}" size="m" />
    <Avatar src="${o}" size="s" />
  </>
)
              `}),t(a,{description:"Типы аватаров: иконка, изображение, инициалы",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar src="${o}" />
    <Avatar userName='Антон' userSurname='Валуев' />
  </>
)
              `}),t(a,{description:"Формы аватаров: круг, скругленный квадрат",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar shape="square" />
  </>
)
              `}),t(a,{description:"Индикаторы аватаров: онлайн, оффлайн, количество",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar online />
    <Avatar online={false} />
    <Avatar numberIndicator={8} />
  </>
)
              `}),t(a,{description:"Бейджи аватаров: иконка, специальный бейдж (День Рождения)",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar badgeIconName="IconDone24" />
    <Avatar badgeIconName="IconBirthday16" />
  </>
)
              `}),t(C,{argsTypes:k})]}),r==1&&t(M,{url:d}),r==2&&t(w,{variant:"Heading4",color:"primary",children:t(x,{componentName:n})})]})};function l(r){return s(A,{children:[t(g,{title:"Components/Avatar/Info",component:v,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]}}),`
`,t(u,{children:t(T,{})})]})}function _(r={}){const{wrapper:e}=Object.assign({},N(),r.components);return e?t(e,{...r,children:t(l,{...r})}):l()}const S=()=>{throw new Error("Docs-only story")};S.parameters={docsOnly:!0};const m={title:"Components/Avatar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]},component:v,tags:["stories-mdx"],includeStories:["__page"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:_};const gt=["__page"];export{gt as __namedExportsOrder,S as __page,m as default};
