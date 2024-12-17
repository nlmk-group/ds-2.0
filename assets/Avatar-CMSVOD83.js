import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as l}from"./index-CbmgEnq2.js";import{am as A,an as v,ao as x}from"./chunk-NUUEMKO5-CkiiNlyy.js";import{g as f,A as u}from"./index-DJJ0U8Tt.js";import{DecoratorDefault as j}from"./Decorator.stories-B1hjNCvN.js";import{r as g}from"./index-Bnop-kX6.js";import{s as p,H as h,E as o}from"./Header-EP2jVtSV.js";import{F as b}from"./FigmaEmbed-C-3tISD_.js";import{P as C}from"./Properties-C46i6TC6.js";import{T as k}from"./Tests-4iTQQ7zx.js";/* empty css               */import{af as s}from"./index-ByAgZyky.js";import"./generateUUID-B22BSTI4.js";import"./index-CGzvFf0p.js";import"./index-wMnNF9Um.js";import"./index-C7kuRPht.js";import"./index-qC5wYQgy.js";import"./index-BuA7rasS.js";import"./index-CocscvOf.js";import"./index-XJ5PfNkm.js";import"./index-BAfSYk8P.js";import"./index-Br4tp0-d.js";import"./32-DCTol8-9.js";import{a as I}from"./argsTypes-1ANDABmO.js";import"./iframe-DNfwqCnh.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BiTg2p7s.js";import"./index-CT8gBKwQ.js";const m="Avatar",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=410-50529&t=HhCDuaOuzHu5rgyf-1",e=f(),N=()=>{const[r,a]=g.useState(0),i=d=>r===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(h,{title:m,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:n}),t.jsx("div",{className:p.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:i(0),onClick:()=>a(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>a(1)}),t.jsx(s.Tab,{label:"Тестирование",active:i(2),onClick:()=>a(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

const App = () => (
  <>
    <Avatar />
  </>
)
export default App
              `}),t.jsx(o,{description:"Аватары различных размеров",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar src="${e}" size="xxl" />
    <Avatar src="${e}" size="xl" />
    <Avatar src="${e}" size="l" />
    <Avatar src="${e}" size="m" />
    <Avatar src="${e}" size="s" />
  </>
)
              `}),t.jsx(o,{description:"Типы аватаров: иконка, изображение, инициалы",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar src="${e}" />
    <Avatar userName='Антон' userSurname='Валуев' />
  </>
)
              `}),t.jsx(o,{description:"Формы аватаров: круг, скругленный квадрат",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar shape="square" />
  </>
)
              `}),t.jsx(o,{description:"Индикаторы аватаров: онлайн, оффлайн, количество",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar online />
    <Avatar online={false} />
    <Avatar numberIndicator={8} />
  </>
)
              `}),t.jsx(o,{description:"Бейджи аватаров: иконка, специальный бейдж (День Рождения)",code:`import { Avatar, IconDoneCheckFilled16, IconBirthday16 } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar badgeIconName={<IconDoneCheckFilled16 htmlColor="white" />} />
    <Avatar badgeIconName={<IconBirthday16 htmlColor="white" />} badgeSpecialIcon />
  </>
)
              `}),t.jsx(C,{argsTypes:I})]}),r==1&&t.jsx(b,{url:n}),r==2&&t.jsx(k,{componentName:m})]})};function c(r){return t.jsxs(t.Fragment,{children:[t.jsx(A,{title:"Components/Avatar/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]}}),`
`,t.jsx(v,{of:j}),`
`,t.jsx(x,{children:t.jsx(N,{})})]})}function mt(r={}){const{wrapper:a}={...l(),...r.components};return a?t.jsx(a,{...r,children:t.jsx(c,{...r})}):c()}export{mt as default};
