import{j as o}from"./jsx-runtime-BRNY0I4F.js";import{useMDXComponents as l}from"./index-CbmgEnq2.js";import{am as c,an as m,ao as d}from"./chunk-NUUEMKO5-DJ1UxXLN.js";import{af as n,az as u}from"./TreeList-DpY6ft1X.js";import{DecoratorDefault as T}from"./Decorator.stories-B1hjNCvN.js";import{r as x}from"./index-Bnop-kX6.js";import{s as p,H as v,E as e}from"./Header-BjV9Z2XX.js";import{F as f}from"./FigmaEmbed-BOLm1oIz.js";import{P as y}from"./Properties-ta1-3nhB.js";import{T as g}from"./Tests-BSVicLRy.js";/* empty css               */import"./generateUUID-DcAM5OoX.js";import"./index-BtfGMBzk.js";import"./index-DppSdhCO.js";import"./index-ExEzblsB.js";import"./index-CH_Nznxf.js";import"./index-qC5wYQgy.js";import"./index-L_UGJClr.js";import"./index-cR4M_wwG.js";import"./index-FnAFVao7.js";import"./index-nqntSJSg.js";import"./index-DokmLR-l.js";import"./32-X262ygjI.js";import{a as h}from"./argsTypes-Bc1cOhaE.js";import"./iframe-DDhOT_gi.js";import"../sb-preview/runtime.js";import"./index-D0sJu8id.js";import"./index-D-8MO0q_.js";import"./index-DOoWsluG.js";import"./index-DrFu-skq.js";import"./client-CNjLE6tr.js";import"./clsx-B-dksMZM.js";import"./types-CpBSVUgC.js";import"./tiny-invariant-CopsF_GD.js";import"./.jest-test-results-LRLORaHx.js";import"./index-B5g4YLzC.js";const r=`{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px',
  color: 'var(--text-grey-900)'
}}`,a="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=560-4267&t=EnvIMGos3m33avAX-1",b=()=>{const[t,i]=x.useState(0);return o.jsxs("div",{className:p.wrapper,children:[o.jsx(v,{title:"Tooltip",description:"Компонент-подсказка, появляющийся при определенном взаимодействии с дочерним элементом компонента (по умолчанию: при наведении курсора). Tooltip рассчитан не только на работу с простой информацией (текст) с единой стилизацией, но и на визуализацию подсказок, содержащих нестандартную информацию (списки, картинки, таблицы).",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:a}),o.jsx("div",{className:p.tabs,children:o.jsxs(n,{children:[o.jsx(n.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(n.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),o.jsx(n.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{description:"Тултип по умолчанию c описанием.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

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
    <Box color="var(--ac-tooltip-text)" gap="var(--8-size)" alignItems="center" paddingSpace="xs">
      <Icon name="IconDoneCheckOutlined16" color="success"/>
      <Typography variant="Caption-Medium">Первый пункт</Typography>
    </Box>
      <Box color="var(--ac-tooltip-text)" gap="var(--8-size)" alignItems="center" paddingSpace="xs">
        <Icon name="IconDoneCheckOutlined16" color="success"/>
        <Typography variant="Caption-Medium">Второй пункт</Typography>
      </Box>
        <Box color="var(--ac-tooltip-text)" gap="var(--8-size)" alignItems="center" paddingSpace="xs">
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
`}),o.jsx(y,{argsTypes:h})]}),Number(t)==1&&o.jsx(f,{url:a}),Number(t)==2&&o.jsx(g,{componentName:"Tooltip"})]})};function s(t){return o.jsxs(o.Fragment,{children:[o.jsx(c,{title:"Components/Tooltip/Info",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]}}),`
`,o.jsx(m,{of:T}),`
`,o.jsx(d,{children:o.jsx(b,{})})]})}function ro(t={}){const{wrapper:i}={...l(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(s,{...t})}):s()}export{ro as default};
