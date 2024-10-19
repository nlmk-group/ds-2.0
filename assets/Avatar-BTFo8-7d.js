import{j as t}from"./jsx-runtime-DFnSfiB4.js";import{useMDXComponents as l}from"./index-CpguRmgc.js";import{ag as A,ah as v,ai as x}from"./chunk-NUUEMKO5-BfWh-sLJ.js";import{g as f,A as u}from"./index-BUicYAu_.js";import{DecoratorDefault as j}from"./Decorator.stories-BP3ijO2B.js";import{r as g}from"./index-DQ2WTIsS.js";import{s as p,H as h,E as o}from"./Header-D2gbLVua.js";import{F as b}from"./FigmaEmbed-DjqPO1nf.js";import{P as C}from"./Properties-C9DnMm3G.js";import{T as k}from"./Tests-CzPE_ao-.js";/* empty css               */import{a0 as s}from"./index-CZcUCixh.js";import"./generateUUID-DDiDEiZj.js";import"./index-CSbymPMC.js";import"./index-c1a7ry8u.js";import"./index-rzy6QoZO.js";import"./index-ehXB0alm.js";import"./index-BKAatnfy.js";import"./index-D_J9Vxng.js";import"./index-D5U3DYwn.js";import"./index-CLzAcar6.js";import"./32-sVrGXRAZ.js";import{a as I}from"./argsTypes-DY_kt4YF.js";import"./iframe-BUM6csBU.js";import"../sb-preview/runtime.js";import"./index-B_snx1v7.js";import"./index-D-8MO0q_.js";import"./get-oHtgdQEu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DsjOqT4x.js";import"./index-DrFu-skq.js";import"./client-Du4Z4Qeu.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-R5jBLDn_.js";import"./index-BKbm6zW0.js";const m="Avatar",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=410-50529&t=HhCDuaOuzHu5rgyf-1",e=f(),N=()=>{const[r,a]=g.useState(0),i=d=>r===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(h,{title:m,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:n}),t.jsx("div",{className:p.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:i(0),onClick:()=>a(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>a(1)}),t.jsx(s.Tab,{label:"Тестирование",active:i(2),onClick:()=>a(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(o,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

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
