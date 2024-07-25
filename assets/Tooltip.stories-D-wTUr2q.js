import{U as m,M as y,e as g}from"./chunk-HLWAVYOI-C7PqFZo0.js";import{J as n,a5 as l}from"./index-CTSkFh7q.js";import{a as p,j as o,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as v}from"./index-CBqU2yxZ.js";import{s,H as f,E as i,T as h}from"./Tests-Tg5e2fxD.js";import{F as b}from"./FigmaEmbed-DJ6dUPkg.js";import{P as B}from"./Properties-DBrGegiF.js";/* empty css               */import"./generateUUID-B5cPxuxR.js";import"./index-CcmeEFL2.js";import"./index-CTkD9j2t.js";import"./index-DGfD3wI4.js";import"./index-CjrtVycB.js";import{T as x}from"./index-nWYpQihe.js";import"./index-D_LOBm7Z.js";import"./index-BLysk004.js";import"./index-DHsx0XSp.js";import"./index-DkuQRQ9j.js";import"./32-C0P3XX_L.js";import{a as C}from"./argsTypes-C8-LP-Ht.js";import{useMDXComponents as k}from"./index-DI5IigMn.js";import"./iframe-CDZx1GSb.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-B4-PFky_.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-C4g1n-GZ.js";import"./index-CMH8wQUv.js";const r=`{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px',
  color: 'var(--text-grey-900)'
}}`,u=()=>{const[t,e]=v.useState(0);return p("div",{className:s.wrapper,children:[o(f,{title:"Tooltip",description:"Компонент-подсказка, появляющийся при определенном взаимодействии с дочерним элементом компонента (по умолчанию: при наведении курсора). Tooltip рассчитан не только на работу с простой информацией (текст) с единой стилизацией, но и на визуализацию подсказок, содержащих нестандартную информацию (списки, картинки, таблицы).",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43759&mode=design&t=awyt3Fzj1XS6th7v-1"}),o("div",{className:s.tabs,children:p(n,{children:[o(n.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>e(0)}),o(n.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>e(1)}),o(n.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>e(2)})]})}),Number(t)==0&&p(d,{children:[o(i,{description:"Тултип по умолчанию c описанием.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${r}>
    <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
      <Button variant="secondary">Наведи на меня курсор!</Button>
    </Tooltip>
  </div>
)
`}),o(i,{description:"Тултип с разными вариантами расположения.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

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
`}),o(i,{description:"Тултип с вариантами поведения на отображение.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

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
`}),o(i,{description:"По умолчанию Тултип не открывается вокруг disabled элементов. Для того чтобы Тултип открывался корректно в этом случае, нужно оборачиваемый элемент обернуть простым элементом-оберткой, например span.",code:`import { Tooltip, Button } from '@nlmk/ds-2.0';

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
`}),o(i,{height:600,description:"Тултип с кастомной JSX разметкой внутри",code:`import { Tooltip, Button, Typography, Icon, Box } from '@nlmk/ds-2.0';

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
`}),o(B,{argsTypes:C})]}),Number(t)==1&&o(b,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43759&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)==2&&o(x,{variant:"Heading4",color:"primary",children:o(h,{componentName:"Tooltip"})})]})};function c(t){return p(d,{children:[o(y,{title:"Components/Tooltip/Info",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]}}),`
`,o(g,{name:"Docs",children:o(m,{children:o(u,{})})})]})}function w(t={}){const{wrapper:e}=Object.assign({},k(),t.components);return e?o(e,{...t,children:o(c,{...t})}):c()}const T=()=>o(m,{children:o(u,{})});T.storyName="Docs";T.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const a={title:"Components/Tooltip/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/b1fUQ56wJbjzskhCh3oj2C/Web-%2F-Tooltip?node-id=312%3A72159&t=lDQrbcLliB0ImlMQ-0"},jest:["Tooltip.test.tsx"]},component:l,tags:["stories-mdx"],includeStories:["docs"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:w};const so=["docs"];export{so as __namedExportsOrder,a as default,T as docs};
