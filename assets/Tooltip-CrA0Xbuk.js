import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as l}from"./index-D2yTtfOz.js";import"./index-D51FTQdC.js";import{ah as n,aB as c}from"./TreeList-DLKvZc0E.js";import{DecoratorDefault as m}from"./Decorator.stories-D7iJJ_iz.js";import{r as d}from"./index-BcJSXhQi.js";import{s as p,H as u,E as e}from"./Header-CVW-BCYd.js";import{F as T}from"./FigmaEmbed-BHXrOc1d.js";import{P as x}from"./Properties-CjgjNLHH.js";import{T as v}from"./Tests-B90gQPeH.js";/* empty css               */import"./generateUUID-CwHnX0Hw.js";import"./index-BekOEyNL.js";import"./index-WHoiTdKD.js";import"./index-D-jyRV5V.js";import"./index-D8WlRtvM.js";import"./index-DmffzHLE.js";import"./index-9k2b7QWQ.js";import"./index-VmJK6twV.js";import"./index-DxgC_uyg.js";import"./index-uupel1IP.js";import"./index-C5rKoyII.js";import"./32-BKmqX1Rw.js";import{a as f}from"./argsTypes-CaRA2yxB.js";import{c as h,S as y,U as g}from"./DocsRenderer-CFRXHY34-D8yK2Ik1.js";import"./index-ChsGqxH_.js";import"./preview-IyyJl8-N.js";import"./iframe-qhDvbGIv.js";import"./clsx-B-dksMZM.js";import"./index-BevFGyV5.js";import"./index-DdXvKv-Q.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-CstQolbU.js";import"./index-CRm92gKC.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./client-DQNj1uEJ.js";const r=`{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px',
  color: 'var(--steel-90)'
}}`,a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=560-4267&t=EnvIMGos3m33avAX-1",B=()=>{const[t,i]=d.useState(0);return o.jsxs("div",{className:p.wrapper,children:[o.jsx(u,{title:"Tooltip",description:"Компонент-подсказка, появляющийся при определенном взаимодействии с дочерним элементом компонента (по умолчанию: при наведении курсора). Tooltip рассчитан не только на работу с простой информацией (текст) с единой стилизацией, но и на визуализацию подсказок, содержащих нестандартную информацию (списки, картинки, таблицы).",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:a}),o.jsx("div",{className:p.tabs,children:o.jsxs(n,{children:[o.jsx(n.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(n.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),o.jsx(n.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{description:"Тултип по умолчанию c описанием.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

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
`}),o.jsx(x,{argsTypes:f})]}),Number(t)==1&&o.jsx(T,{url:a}),Number(t)==2&&o.jsx(v,{componentName:"Tooltip"})]})};function s(t){return o.jsxs(o.Fragment,{children:[o.jsx(h,{title:"Components/Tooltip/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]}}),`
`,o.jsx(y,{of:m}),`
`,o.jsx(g,{children:o.jsx(B,{})})]})}function po(t={}){const{wrapper:i}={...l(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(s,{...t})}):s()}export{po as default};
