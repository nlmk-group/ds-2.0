import{j as t}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as l}from"./index-CbmgEnq2.js";import{am as A,an as v,ao as x}from"./chunk-NUUEMKO5-DixK8DaA.js";import{g as f,A as u}from"./index-CkAXh9uP.js";import{DecoratorDefault as j}from"./Decorator.stories-B1hjNCvN.js";import{r as g}from"./index-Bnop-kX6.js";import{s as p,H as h,E as o}from"./Header-DS8nfpdw.js";import{F as b}from"./FigmaEmbed-DLu1ATA7.js";import{P as C}from"./Properties-DyM2DDYA.js";import{T as k}from"./Tests-Dw4ClQcO.js";/* empty css               */import{ah as s}from"./TreeList-A-eGvxXP.js";import"./generateUUID-Z4ktHL_f.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-CvRFF9aG.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-D_lYSbi8.js";import"./index-DokmLR-l.js";import"./32-DmPReyKt.js";import{a as I}from"./argsTypes-DBcCZXLt.js";import"./iframe-CFuaFPrX.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-B1j809sG.js";import"./tiny-invariant-CopsF_GD.js";import"./index-B5g4YLzC.js";const m="Avatar",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=410-50529&t=HhCDuaOuzHu5rgyf-1",e=f(),N=()=>{const[r,a]=g.useState(0),i=d=>r===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(h,{title:m,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:n}),t.jsx("div",{className:p.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:i(0),onClick:()=>a(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>a(1)}),t.jsx(s.Tab,{label:"Тестирование",active:i(2),onClick:()=>a(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

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
`,t.jsx(x,{children:t.jsx(N,{})})]})}function pt(r={}){const{wrapper:a}={...l(),...r.components};return a?t.jsx(a,{...r,children:t.jsx(c,{...r})}):c()}export{pt as default};
