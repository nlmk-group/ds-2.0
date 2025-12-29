import{r as l,j as o,f as m,S as c,U as d}from"./iframe-CxLN9ksd.js";import{useMDXComponents as u}from"./index-CeChe1UL.js";import{T}from"./index-C9nyZABc.js";import{DecoratorDefault as x}from"./Decorator.stories-DWPS1QvQ.js";import{s as n,H as v,E as e}from"./Header-B1Tht5jw.js";import{F as f}from"./FigmaEmbed-gwemKUEC.js";import{P as h}from"./Properties-Be6XSfnk.js";import{T as y}from"./Tests-B-cCRdNI.js";/* empty css               */import{T as p}from"./index-Bs6EWGDb.js";import{a as g}from"./argsTypes-CKDBOOmW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnDPEMC8.js";import"./clsx-B-dksMZM.js";import"./index-CORENSTS.js";import"./generateUUID-M57HTP56.js";import"./index-DUSNaC2m.js";import"./index-Bz6VJdOb.js";import"./24-CbC-8o3Y.js";import"./IconsDirectory.module-CEwWgW3i.js";import"./index-LyR6p6RN.js";import"./sizesMapping-D8QavrGc.js";import"./index-IRxTPoEY.js";import"./index-D3DoxRCP.js";import"./index-BniRS5vs.js";import"./index-CT_Q_AhL.js";import"./index-M8Uj9-kW.js";import"./32-B2BQHND4.js";import"./24-BGXSSISX.js";import"./24-MJ8JdQQ9.js";import"./24-2IXSosOm.js";import"./24-Dlyxu4_q.js";import"./24-BFZg9aq0.js";import"./24-DMGI7E0m.js";import"./24-voYW8sKN.js";import"./24-DMqNa1pl.js";import"./24-DJtALV7Z.js";import"./16-CchysOzF.js";import"./24-CJ9IDGZV.js";import"./16-kcyE2NZr.js";import"./16-DRyq0qh_.js";import"./16-D_ueUpcb.js";const r=`{{
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
