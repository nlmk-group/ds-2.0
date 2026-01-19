import{r as m,j as o,m as l,S as c,U as d}from"./iframe-BPtLBEuk.js";import{useMDXComponents as u}from"./index-DY5aY42c.js";import{T}from"./index-D9G_R1e4.js";import{DecoratorDefault as x}from"./Decorator.stories-Bt-6wqMy.js";import{s as n,H as v,E as e}from"./Header-lxb-Wymn.js";import{F as f}from"./FigmaEmbed-IQ2Nn4zn.js";import{P as h}from"./Properties-u6_xeg7P.js";import{T as y}from"./Tests-DUUoQDTR.js";/* empty css               */import{T as p}from"./index-CX87Y9E4.js";import{a as g}from"./argsTypes-5v7runSi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-V5PZJFO3.js";import"./generateUUID-M57HTP56.js";import"./clsx-B-dksMZM.js";import"./index-C9_7xPUt.js";import"./index-DZQvJksB.js";import"./index-BUWLdeqz.js";import"./24-8ackLhic.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-D-pLh_NR.js";import"./sizesMapping-D8QavrGc.js";import"./index-yAFWEvQV.js";import"./index-C5OaxW6Y.js";import"./index-CANPVv15.js";import"./index-d_6bz31j.js";import"./index-CDRf2h9x.js";import"./32-DeoBrCvQ.js";import"./24-CrLAaNeG.js";import"./24-CpcywAhj.js";import"./24-Ch6Cnsji.js";import"./24-Q7FkUsyZ.js";import"./24-DOwtHgIx.js";import"./24-B4m_3SjA.js";import"./24-CV2ikCuL.js";import"./24-Ba8I7UHN.js";import"./24-BA0GVvoT.js";import"./16-CXoys7qm.js";import"./24-Cxxq2bXd.js";import"./16-DwnwCPW9.js";import"./16-BY-nZnBX.js";import"./16-DaMJtJxQ.js";const r=`{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px',
  color: 'var(--steel-90)'
}}`,s="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=560-4267&t=EnvIMGos3m33avAX-1",b=()=>{const[t,i]=m.useState(0);return o.jsxs("div",{className:n.wrapper,children:[o.jsx(v,{title:"Tooltip",description:"Компонент-подсказка, появляющийся при определенном взаимодействии с дочерним элементом компонента (по умолчанию: при наведении курсора). Tooltip рассчитан не только на работу с простой информацией (текст) с единой стилизацией, но и на визуализацию подсказок, содержащих нестандартную информацию (списки, картинки, таблицы).",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:s}),o.jsx("div",{className:n.tabs,children:o.jsxs(p,{children:[o.jsx(p.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),o.jsx(p.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),o.jsx(p.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)==0&&o.jsxs(o.Fragment,{children:[o.jsx(e,{description:"Тултип по умолчанию c описанием.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

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
`}),o.jsx(h,{argsTypes:g})]}),Number(t)==1&&o.jsx(f,{url:s}),Number(t)==2&&o.jsx(y,{componentName:"Tooltip"})]})};function a(t){return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Components/Tooltip/Info",component:T,parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]}}),`
`,o.jsx(c,{of:x}),`
`,o.jsx(d,{children:o.jsx(b,{})})]})}function lo(t={}){const{wrapper:i}={...u(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(a,{...t})}):a()}export{lo as default};
