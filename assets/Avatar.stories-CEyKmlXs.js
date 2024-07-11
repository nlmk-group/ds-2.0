import{U as v,M as y,e as b}from"./chunk-HLWAVYOI-BhaQKYpd.js";import{g as C,b as A}from"./index-D_z3tN8U.js";import{a as s,j as t,F as f}from"./jsx-runtime-2xDJh5tt.js";import{r as x}from"./index-CBqU2yxZ.js";import{s as c,H as M,E as a,T as S}from"./Tests-0a3mgZzX.js";import{F as k}from"./FigmaEmbed-CTL1VPoD.js";import{P as w}from"./Properties-CCsHXnFP.js";/* empty css               */import{L as i}from"./index-DUR5naaP.js";import"./generateUUID-BitdulAq.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as I}from"./index-nWYpQihe.js";import"./index-CZmYKfHv.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-BDxIiU-V.js";import"./32-D4qDQhsJ.js";import{a as N}from"./argsTypes-BAiME0Cd.js";import{useMDXComponents as T}from"./index-DI5IigMn.js";import"./iframe-BB4JqNP5.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-B6tYwWtt.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-C7Ayhe-E.js";import"./index-CMH8wQUv.js";const p="Avatar",d="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20841&mode=design&t=awyt3Fzj1XS6th7v-1",o=C(),u=()=>{const[r,e]=x.useState(0),n=h=>r===h;return s("div",{className:c.wrapper,children:[t(M,{title:p,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:d}),t("div",{className:c.tabs,children:s(i,{children:[t(i.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t(i.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>e(1)}),t(i.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),r==0&&s(f,{children:[t(a,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

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
              `}),t(a,{description:"Бейджи аватаров: иконка, специальный бейдж (День Рождения)",code:`import { Avatar, IconDoneCheckFilled16, IconBirthday16 } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar badgeIconName={<IconDoneCheckFilled16 htmlColor="white" />} />
    <Avatar badgeIconName={<IconBirthday16 htmlColor="white" />} badgeSpecialIcon />
  </>
)
              `}),t(w,{argsTypes:N})]}),r==1&&t(k,{url:d}),r==2&&t(I,{variant:"Heading4",color:"primary",children:t(S,{componentName:p})})]})};function l(r){return s(f,{children:[t(y,{title:"Components/Avatar/Info",component:A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]}}),`
`,t(b,{name:"Docs",children:t(v,{children:t(u,{})})})]})}function F(r={}){const{wrapper:e}=Object.assign({},T(),r.components);return e?t(e,{...r,children:t(l,{...r})}):l()}const g=()=>t(v,{children:t(u,{})});g.storyName="Docs";g.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const m={title:"Components/Avatar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]},component:A,tags:["stories-mdx"],includeStories:["docs"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:F};const vt=["docs"];export{vt as __namedExportsOrder,m as default,g as docs};
