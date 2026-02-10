import{r as l,j as t,m as A,S as v,U as x}from"./iframe-BiRbIEmb.js";import{useMDXComponents as f}from"./index-DFADegm-.js";import{g as u,A as j}from"./index-3KX5UzC2.js";import{DecoratorDefault as g}from"./Decorator.stories-Cq2K7ZK_.js";import{s as p,H as h,E as e}from"./Header-BOuFM4z3.js";import{F as b}from"./FigmaEmbed-DXWxjqCs.js";import{P as C}from"./Properties-CTw5qxDW.js";import{T as k}from"./Tests-u2K_XUZf.js";/* empty css               */import{T as i}from"./index-Bc-rzIjC.js";import{a as I}from"./argsTypes-B06bIVpC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4AgSARz.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-Lr1o5q5Y.js";import"./24-BbKUo3HT.js";import"./24-Bp_HhEEU.js";import"./24-A5UfwTSh.js";import"./24-BFTkICnz.js";import"./24-CkBhKuNp.js";import"./24-99ZCpV7Q.js";import"./24-DuGNUhV0.js";import"./24-BSYcdl4j.js";import"./24-3PxmqcmV.js";import"./16-XX98Hoxr.js";import"./24-BLu740_K.js";import"./24-DOr3c8sx.js";import"./16-DUa4Gnlc.js";import"./16-CSBhMP4b.js";import"./16-DMPWLjn6.js";import"./index-CIk7IDPA.js";import"./index-CDeU-sH7.js";import"./index-DDnqRqhr.js";import"./index-t6GndyZ6.js";import"./index-BLKLNOs5.js";import"./generateUUID-M57HTP56.js";import"./index-CuPa9ZS_.js";import"./sizesMapping-D8QavrGc.js";import"./index-BC1L0GA_.js";import"./index-BDGZFkub.js";import"./index-BbyeJaRT.js";import"./index-17UNxjz6.js";const m="Avatar",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=410-50529&t=HhCDuaOuzHu5rgyf-1",a=u(),N=()=>{const[r,o]=l.useState(0),s=d=>r===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(h,{title:m,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:n}),t.jsx("div",{className:p.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:s(0),onClick:()=>o(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>o(1)}),t.jsx(i.Tab,{label:"Тестирование",active:s(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

const App = () => (
  <>
    <Avatar />
  </>
)
export default App
              `}),t.jsx(e,{description:"Аватары различных размеров",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar src="${a}" size="xxl" />
    <Avatar src="${a}" size="xl" />
    <Avatar src="${a}" size="l" />
    <Avatar src="${a}" size="m" />
    <Avatar src="${a}" size="s" />
  </>
)
              `}),t.jsx(e,{description:"Типы аватаров: иконка, изображение, инициалы",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar src="${a}" />
    <Avatar userName='Антон' userSurname='Валуев' />
  </>
)
              `}),t.jsx(e,{description:"Формы аватаров: круг, скругленный квадрат",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar shape="square" />
  </>
)
              `}),t.jsx(e,{description:"Индикаторы аватаров: онлайн, оффлайн, количество",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar online />
    <Avatar online={false} />
    <Avatar numberIndicator={8} />
  </>
)
              `}),t.jsx(e,{description:"Бейджи аватаров: иконка, специальный бейдж (День Рождения)",code:`import { Avatar, IconDoneCheckFilled16, IconBirthday16 } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar badgeIconName={<IconDoneCheckFilled16 htmlColor="white" />} />
    <Avatar badgeIconName={<IconBirthday16 htmlColor="white" />} badgeSpecialIcon />
  </>
)
              `}),t.jsx(C,{argsTypes:I})]}),r==1&&t.jsx(b,{url:n}),r==2&&t.jsx(k,{componentName:m})]})};function c(r){return t.jsxs(t.Fragment,{children:[t.jsx(A,{title:"Components/Avatar/Info",component:j,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]}}),`
`,t.jsx(v,{of:g}),`
`,t.jsx(x,{children:t.jsx(N,{})})]})}function xt(r={}){const{wrapper:o}={...f(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(c,{...r})}):c()}export{xt as default};
