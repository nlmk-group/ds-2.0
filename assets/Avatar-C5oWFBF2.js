import{r as l,j as t,m as A,S as v,U as x}from"./iframe-BPtLBEuk.js";import{useMDXComponents as f}from"./index-DY5aY42c.js";import{g as u,A as j}from"./index-CEbWEpSn.js";import{DecoratorDefault as g}from"./Decorator.stories-Bt-6wqMy.js";import{s as p,H as h,E as e}from"./Header-lxb-Wymn.js";import{F as b}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as C}from"./Properties-u6_xeg7P.js";import{T as k}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as i}from"./index-CX87Y9E4.js";import{a as I}from"./argsTypes-o8lWiVXf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDRf2h9x.js";import"./clsx-B-dksMZM.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./24-8ackLhic.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";import"./index-C9_7xPUt.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./index-D9G_R1e4.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";const m="Avatar",n="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=410-50529&t=HhCDuaOuzHu5rgyf-1",a=u(),N=()=>{const[r,o]=l.useState(0),s=d=>r===d;return t.jsxs("div",{className:p.wrapper,children:[t.jsx(h,{title:m,description:"Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${m}`,figmaLink:n}),t.jsx("div",{className:p.tabs,children:t.jsxs(i,{children:[t.jsx(i.Tab,{label:"Разработчику",active:s(0),onClick:()=>o(0)}),t.jsx(i.Tab,{label:"Дизайнеру",active:s(1),onClick:()=>o(1)}),t.jsx(i.Tab,{label:"Тестирование",active:s(2),onClick:()=>o(2)})]})}),r==0&&t.jsxs(t.Fragment,{children:[t.jsx(e,{height:220,description:"Дефолтный аватар",code:`import { Avatar } from '@nlmk/ds-2.0';

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
