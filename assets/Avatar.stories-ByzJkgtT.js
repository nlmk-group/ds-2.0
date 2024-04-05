import{U as v,M as h,e as b}from"./chunk-HLWAVYOI-DDRq0WF_.js";import{g as x,b as A}from"./index-D1sOrwww.js";import{a as i,j as t,F as f}from"./jsx-runtime-2xDJh5tt.js";import{r as C}from"./index-CBqU2yxZ.js";import{s as c,H as M,E as a,T as S}from"./Tests-CavNk72r.js";import{F as k}from"./FigmaEmbed-DpzAeUNT.js";import{P as I}from"./Properties-DBC0-V8E.js";/* empty css               */import{y as s}from"./index-BTGymsfC.js";import"./generateUUID-1cqmAxQg.js";import"./index-BqvJ5JrJ.js";import{T as N}from"./index-CkVMA9Py.js";import"./index-BulafiJ9.js";import"./index-Dd2IALEV.js";import"./index-BGOHbkSJ.js";import"./index-Dp7-Jy-a.js";import"./index-D8kVD15d.js";import"./32-oKJmtLZM.js";import{a as T}from"./argsTypes-DffavOKP.js";import{useMDXComponents as w}from"./index-DI5IigMn.js";import"./iframe-BgqDqa84.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-B3d5YCLo.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-AB3iwQcc.js";import"./index-4J70fF5O.js";const p="Avatar",d="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20841&mode=design&t=awyt3Fzj1XS6th7v-1",o=x(),u=()=>{const[e,r]=C.useState(0),n=y=>e===y;return i("div",{className:c.wrapper,children:[t(M,{title:p,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:d}),t("div",{className:c.tabs,children:i(s,{children:[t(s.Tab,{label:"Разработчику",active:n(0),onClick:()=>r(0)}),t(s.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>r(1)}),t(s.Tab,{label:"Тестирование",active:n(2),onClick:()=>r(2)})]})}),e==0&&i(f,{children:[t(a,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

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
    <Avatar badgeIconName={<IconDoneCheckFilled16/>} />
    <Avatar badgeIconName={<IconBirthday16 />} badgeSpecialIcon />
  </>
)
              `}),t(I,{argsTypes:T})]}),e==1&&t(k,{url:d}),e==2&&t(N,{variant:"Heading4",color:"primary",children:t(S,{componentName:p})})]})};function l(e){return i(f,{children:[t(h,{title:"Components/Avatar/Info",component:A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]}}),`
`,t(b,{name:"Docs",children:t(v,{children:t(u,{})})})]})}function F(e={}){const{wrapper:r}=Object.assign({},w(),e.components);return r?t(r,{...e,children:t(l,{...e})}):l()}const g=()=>t(v,{children:t(u,{})});g.storyName="Docs";g.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const m={title:"Components/Avatar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]},component:A,tags:["stories-mdx"],includeStories:["docs"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:F};const lt=["docs"];export{lt as __namedExportsOrder,m as default,g as docs};
