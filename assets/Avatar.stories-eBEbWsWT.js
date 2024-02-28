import{U as v,M as b,e as h}from"./chunk-HLWAVYOI-CUNbYoBU.js";import{g as x,b as A}from"./index-D-9trSFj.js";import{a as i,j as t,F as f}from"./clsx.m-CcuEzMhP.js";import{r as C}from"./index-CBqU2yxZ.js";import{s as c,H as M,E as a,T as S}from"./Tests-DLeBDtOW.js";import{F as k}from"./FigmaEmbed-C5HTb5rS.js";import{P as N}from"./Properties-B60pte38.js";/* empty css               */import{J as s}from"./index-4w0GPB2W.js";import"./index-ehJh3wQv.js";import"./index-DjeAniHW.js";import{T}from"./index-fbTu1Hcf.js";import"./index-BhQGQSXE.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-DyFb8FNg.js";import"./32-UdY5WLK9.js";import{a as w}from"./argsTypes-BpcUPEch.js";import{useMDXComponents as I}from"./index-DI5IigMn.js";import"./iframe-vZ3FYMC0.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BhBVvAvs.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BMC0l3yZ.js";import"./index-BO3pQ7ot.js";const p="Avatar",d="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20841&mode=design&t=awyt3Fzj1XS6th7v-1",o=x(),u=()=>{const[r,e]=C.useState(0),n=y=>r===y;return i("div",{className:c.wrapper,children:[t(M,{title:p,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:d}),t("div",{className:c.tabs,children:i(s,{children:[t(s.Tab,{label:"Разработчику",active:n(0),onClick:()=>e(0)}),t(s.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>e(1)}),t(s.Tab,{label:"Тестирование",active:n(2),onClick:()=>e(2)})]})}),r==0&&i(f,{children:[t(a,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

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
    <Avatar badgeIconName="IconDoneCheckFilled24" />
    <Avatar badgeIconName="IconBirthday24" badgeSpecialIcon />
  </>
)
              `}),t(N,{argsTypes:w})]}),r==1&&t(k,{url:d}),r==2&&t(T,{variant:"Heading4",color:"primary",children:t(S,{componentName:p})})]})};function l(r){return i(f,{children:[t(b,{title:"Components/Avatar/Info",component:A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]}}),`
`,t(h,{name:"Docs",children:t(v,{children:t(u,{})})})]})}function F(r={}){const{wrapper:e}=Object.assign({},I(),r.components);return e?t(e,{...r,children:t(l,{...r})}):l()}const g=()=>t(v,{children:t(u,{})});g.storyName="Docs";g.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const m={title:"Components/Avatar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]},component:A,tags:["stories-mdx"],includeStories:["docs"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:F};const lt=["docs"];export{lt as __namedExportsOrder,m as default,g as docs};
