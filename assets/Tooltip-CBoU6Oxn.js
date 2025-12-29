import{r as l,j as o,f as m,S as c,U as d}from"./iframe-CVAHojaF.js";import{useMDXComponents as u}from"./index-DqTt4rKv.js";import{T}from"./index-DbWCe9dP.js";import{DecoratorDefault as x}from"./Decorator.stories-Pdz9giCE.js";import{s as n,H as v,E as e}from"./Header-P01wOpj2.js";import{F as f}from"./FigmaEmbed-g9QqaeRo.js";import{P as h}from"./Properties-1BWy3pzy.js";import{T as y}from"./Tests-MQmjhMeS.js";/* empty css               */import{T as p}from"./index-Cyj4_MYZ.js";import{a as g}from"./argsTypes-DpHVh2Lm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVgG5EPb.js";import"./clsx-B-dksMZM.js";import"./index-BHrg75jh.js";import"./generateUUID-M57HTP56.js";import"./index-Bivvm1z2.js";import"./index-BHMo20JE.js";import"./24-BKsua3Hk.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-x8Y8AkZd.js";import"./sizesMapping-D8QavrGc.js";import"./index-zQ6Q3aTj.js";import"./index-DZ_c8xXN.js";import"./index-CqzaiicI.js";import"./index-C8HyjBOv.js";import"./index-BN_w7FjE.js";import"./32-BGkTw_Iv.js";import"./24-DhWu0U6R.js";import"./24-QBRQbIxz.js";import"./24-DbZB43lA.js";import"./24-CpQC9mRz.js";import"./24-D4AD88CD.js";import"./24-i225Oh9B.js";import"./24-Tgd-_Nih.js";import"./24-BHgrLOFn.js";import"./24-DKX7LJ7g.js";import"./16-D51laVEK.js";import"./24-DoIGH_dx.js";import"./16-D08SDomb.js";import"./16-R8HovCn5.js";import"./16-DOUHJXJi.js";const r=`{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px',
  color: 'var(--steel-90)'
}}`,s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=560-4267&t=EnvIMGos3m33avAX-1",b=()=>{const[t,i]=l.useState(0);return o.jsxs("div",{className:n.wrapper,children:[o.jsx(v,{title:"Tooltip",description:"Компонент-подсказка, появляющийся при определенном взаимодействии с дочерним элементом компонента (по умолчанию: при наведении курсора). Tooltip рассчитан не только на работу с простой информацией (текст) с единой стилизацией, но и на визуализацию подсказок, содержащих нестандартную информацию (списки, картинки, таблицы).",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:s}),o.jsx("div",{className:n.tabs,children:o.jsxs(p,{children:[o.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),o.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{description:"Тултип по умолчанию c описанием.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${r}>
    <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
      <Button variant="secondary">Наведи на меня курсор!</Button>
    </Tooltip>
  </div>
)
`}),o.jsx(e,{description:"Тултип с разными вариантами расположения.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${r}>
    <Tooltip placement="top" description="Tooltip on top">
      <Button variant="secondary">Наведи, тултип будет сверху!</Button>
    </Tooltip>
    <Tooltip placement="bottom" description="Tooltip on bottom">
      <Button variant="secondary">Наведи, тултип будет снизу!</Button>
    </Tooltip>
    <Tooltip placement="left" description="Tooltip on left">
      <Button variant="secondary">Наведи, тултип будет слева!</Button>
    </Tooltip>
    <Tooltip placement="right" description="Tooltip on right">
      <Button variant="secondary">Наведи, тултип будет справа!</Button>
    </Tooltip>
  </div>
)
`}),o.jsx(e,{description:"Тултип с вариантами поведения на отображение.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${r}>
    <Tooltip
      placement="top"
      behavior="hover"
      description="Tooltip on hover"
    >
      <Button variant="secondary">Тултип появится при наведении!</Button>
    </Tooltip>
    <Tooltip
      placement="top"
      behavior="click"
      description="Tooltip on click"
    >
      <Button variant="secondary">Тултип появится при клике!</Button>
    </Tooltip>
    <Tooltip
      placement="top"
      behavior="focus"
      description="Tooltip on focus"
    >
      <Button variant="secondary">Тултип появится при фокусе!</Button>
    </Tooltip>
  </div>
)
`}),o.jsx(e,{description:"По умолчанию Тултип не открывается вокруг disabled элементов. Для того чтобы Тултип открывался корректно в этом случае, нужно оборачиваемый элемент обернуть простым элементом-оберткой, например span.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${r}>
    <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
      <span>
        <Button variant="secondary" disabled>
          Наведи на меня курсор!
        </Button>
      </span>
    </Tooltip>
  </div>
)
`}),o.jsx(e,{height:600,description:"Тултип с кастомной JSX разметкой внутри",code:`import { Tooltip, Button, Typography, Icon, Box } from '@nlmk/ds-2.0';

const RenderCustom = () => {
  return (
    <div>
      <Box color="var(--unique-white)" gap="8px" alignItems="center" paddingSpace="xs">
        <Icon name="IconDoneCheckOutlined16" color="success"/>
        <Typography variant="Caption-Medium">Первый пункт</Typography>
      </Box>
      <Box color="var(--unique-white)" gap="8px" alignItems="center" paddingSpace="xs">
        <Icon name="IconDoneCheckOutlined16" color="success"/>
        <Typography variant="Caption-Medium">Второй пункт</Typography>
      </Box>
      <Box color="var(--unique-white)" gap="8px" alignItems="center" paddingSpace="xs">
        <Icon name="IconDoneCheckOutlined16" color="success"/>
        <Typography variant="Caption-Medium">Третий пункт</Typography>
      </Box>
    </div>
  );
};

export default  App = () =>(
  <div style=${r}>
    <Tooltip
      behavior="click"
      title="Заголовок тултипа с кастомным элементом"
      description="за добавление кастомного элемента отвечает prop - render"
      render={<RenderCustom/>}
    >
      <Button variant="secondary">
        Нажми на меня для появления тултипа!
      </Button>
    </Tooltip>
  </div>
)
`}),o.jsx(h,{argsTypes:g})]}),Number(t)==1&&o.jsx(f,{url:s}),Number(t)==2&&o.jsx(y,{componentName:"Tooltip"})]})};function a(t){return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Components/Tooltip/Info",component:T,parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]}}),`
`,o.jsx(c,{of:x}),`
`,o.jsx(d,{children:o.jsx(b,{})})]})}function mo(t={}){const{wrapper:i}={...u(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(a,{...t})}):a()}export{mo as default};
