import{U as v,M as y,e as b}from"./chunk-HLWAVYOI-CvC2M4ez.js";import{g as x,b as A}from"./index-SiU_55iz.js";import{a as i,j as t,F as f}from"./clsx.m-CcuEzMhP.js";import{r as C}from"./index-CBqU2yxZ.js";import{s as c,H as M,E as a,T as S}from"./Tests-hJTNZTIm.js";import{F as k}from"./FigmaEmbed-BYPE4rKi.js";import{P as I}from"./Properties-Alrk5O4r.js";/* empty css               */import{J as s}from"./index-eGAKGCMw.js";import"./generateUUID-BkPc_NdJ.js";import"./index-BzeUb5Di.js";import{T as N}from"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{a as T}from"./argsTypes-DIP8Ayl6.js";import{useMDXComponents as w}from"./index-DI5IigMn.js";import"./iframe-BBqWh2Uy.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BYskyYAB.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgAfLPyt.js";import"./index-BO3pQ7ot.js";const p="Avatar",d="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20841&mode=design&t=awyt3Fzj1XS6th7v-1",o=x(),u=()=>{const[e,r]=C.useState(0),n=h=>e===h;return i("div",{className:c.wrapper,children:[t(M,{title:p,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${p}`,figmaLink:d}),t("div",{className:c.tabs,children:i(s,{children:[t(s.Tab,{label:"Разработчику",active:n(0),onClick:()=>r(0)}),t(s.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>r(1)}),t(s.Tab,{label:"Тестирование",active:n(2),onClick:()=>r(2)})]})}),e==0&&i(f,{children:[t(a,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

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
              `}),t(I,{argsTypes:T})]}),e==1&&t(k,{url:d}),e==2&&t(N,{variant:"Heading4",color:"primary",children:t(S,{componentName:p})})]})};function l(e){return i(f,{children:[t(y,{title:"Components/Avatar/Info",component:A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]}}),`
`,t(b,{name:"Docs",children:t(v,{children:t(u,{})})})]})}function F(e={}){const{wrapper:r}=Object.assign({},w(),e.components);return r?t(r,{...e,children:t(l,{...e})}):l()}const g=()=>t(v,{children:t(u,{})});g.storyName="Docs";g.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const m={title:"Components/Avatar/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]},component:A,tags:["stories-mdx"],includeStories:["docs"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:F};const lt=["docs"];export{lt as __namedExportsOrder,m as default,g as docs};
