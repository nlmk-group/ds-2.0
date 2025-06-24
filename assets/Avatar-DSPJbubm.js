import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as l}from"./index-D2yTtfOz.js";import"./index-D6_S9Wxc.js";import{g as A,A as v}from"./index-D9qQUMnP.js";import{DecoratorDefault as x}from"./Decorator.stories-D7iJJ_iz.js";import{r as f}from"./index-BcJSXhQi.js";import{s as p,H as u,E as a}from"./Header--yT6lINj.js";import{F as j}from"./FigmaEmbed-qtKAclLv.js";import{P as g}from"./Properties-D9m8XxST.js";import{T as h}from"./Tests-BCbKFRWX.js";/* empty css               */import{af as s}from"./TreeList-BqxVwK_V.js";import"./generateUUID-Cr6BF8sx.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-53N2drcz.js";import"./index-VmJK6twV.js";import"./index-BPWT-JIL.js";import"./index-BQAMZg9d.js";import"./index-C1EIKtiR.js";import"./32-DMwn_7G4.js";import{a as b}from"./argsTypes-CgcqZ2Zl.js";import{c as C,S as k,U as I}from"./DocsRenderer-CFRXHY34-CFH1eQhb.js";import"./index-ChsGqxH_.js";import"./preview-a1BA6wSx.js";import"./iframe-CgXnHU-M.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-DsmJLuSk.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const m="Avatar",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=410-50529&t=HhCDuaOuzHu5rgyf-1",e=A(),N=()=>{const[r,o]=f.useState(0),i=d=>r===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(u,{title:m,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:n}),t.jsx("div",{className:p.tabs,children:t.jsxs(s,{children:[t.jsx(s.Tab,{label:"Разработчику",active:i(0),onClick:()=>o(0)}),t.jsx(s.Tab,{label:"Дизайнеру",active:i(1),onClick:()=>o(1)}),t.jsx(s.Tab,{label:"Тестирование",active:i(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(a,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

const App = () => (
  <>
    <Avatar />
  </>
)
export default App
              `}),t.jsx(a,{description:"Аватары различных размеров",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar src="${e}" size="xxl" />
    <Avatar src="${e}" size="xl" />
    <Avatar src="${e}" size="l" />
    <Avatar src="${e}" size="m" />
    <Avatar src="${e}" size="s" />
  </>
)
              `}),t.jsx(a,{description:"Типы аватаров: иконка, изображение, инициалы",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar src="${e}" />
    <Avatar userName='Антон' userSurname='Валуев' />
  </>
)
              `}),t.jsx(a,{description:"Формы аватаров: круг, скругленный квадрат",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar shape="square" />
  </>
)
              `}),t.jsx(a,{description:"Индикаторы аватаров: онлайн, оффлайн, количество",code:`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar online />
    <Avatar online={false} />
    <Avatar numberIndicator={8} />
  </>
)
              `}),t.jsx(a,{description:"Бейджи аватаров: иконка, специальный бейдж (День Рождения)",code:`import { Avatar, IconDoneCheckFilled16, IconBirthday16 } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar badgeIconName={<IconDoneCheckFilled16 htmlColor="white" />} />
    <Avatar badgeIconName={<IconBirthday16 htmlColor="white" />} badgeSpecialIcon />
  </>
)
              `}),t.jsx(g,{argsTypes:b})]}),r==1&&t.jsx(j,{url:n}),r==2&&t.jsx(h,{componentName:m})]})};function c(r){return t.jsxs(t.Fragment,{children:[t.jsx(C,{title:"Components/Avatar/Info",component:v,parameters:{design:{type:"figma",url:"https://www.figma.com/file/vyvtqfFuN9lCYoWKqEnm9v/DS2.0-Image-%26-Picture?type=design&node-id=629-1553&mode=design&t=uMRXvv1vR1KQLF3d-11"},jest:["Avatar.test.tsx"]}}),`
`,t.jsx(k,{of:x}),`
`,t.jsx(I,{children:t.jsx(N,{})})]})}function ct(r={}){const{wrapper:o}={...l(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(c,{...r})}):c()}export{ct as default};
